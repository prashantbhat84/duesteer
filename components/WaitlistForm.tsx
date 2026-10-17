"use client";

import Link from "next/link";
import { useId, useRef, useState, useSyncExternalStore } from "react";
import { track } from "@vercel/analytics";
import { ctaButtonClassName } from "@/components/CtaButton";
import {
  WAITLIST_EMAIL_MAX,
  WAITLIST_ENDPOINT,
  detectPlatform,
  isValidEmail,
  type WaitlistPlacement,
  type WaitlistPlatform,
} from "@/lib/waitlist";

const noopSubscribe = () => () => {};

/**
 * The visitor's platform, or null on the server and during hydration. Using
 * the server snapshot for hydration means the first client render matches the
 * server HTML; React then re-renders with the real value.
 */
function usePlatform(): WaitlistPlatform | null {
  return useSyncExternalStore(noopSubscribe, detectPlatform, () => null);
}

/** `src` from the query string, e.g. ?src=reddit, for signup attribution. */
function readSource(): string | undefined {
  return new URLSearchParams(window.location.search).get("src") ?? undefined;
}

const tones = {
  light: {
    heading: "text-ink",
    small: "text-muted",
    link: "text-brand-strong decoration-brand-line hover:decoration-brand",
    success: "text-brand-strong",
    error: "text-danger",
  },
  dark: {
    heading: "text-on-ink",
    small: "text-on-ink-muted",
    link: "text-on-ink decoration-on-ink-muted hover:decoration-on-ink",
    success: "text-on-ink",
    error: "text-danger-on-ink",
  },
} as const;

/**
 * Email signup for the web-version waitlist.
 *
 * With `showFor="non-ios"` the form renders nothing on iPhone and iPad (they
 * can already download the app), and nothing at all until mounted, since the
 * server can't know the platform.
 */
export default function WaitlistForm({
  placement,
  variant = "inline",
  tone = "light",
  showFor = "non-ios",
  heading,
  className = "",
}: {
  placement: WaitlistPlacement;
  /** "card" wraps the form in a raised panel; "inline" sits in the flow. */
  variant?: "inline" | "card";
  /** Set to "dark" on the dark CTA band. */
  tone?: "light" | "dark";
  showFor?: "non-ios" | "all";
  heading?: string;
  className?: string;
}) {
  const platform = usePlatform();
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phase, setPhase] = useState<"edit" | "sending" | "done">("edit");
  const [error, setError] = useState<string | null>(null);
  // Guards against a double submit before `disabled` renders.
  const sending = useRef(false);
  const inputId = useId();
  const smallPrintId = useId();
  const errorId = useId();
  const colours = tones[tone];

  if (showFor === "non-ios" && (platform === null || platform === "ios")) {
    return null;
  }

  async function submit() {
    if (sending.current) return;
    const trimmed = email.trim();
    if (!isValidEmail(trimmed)) {
      setError("Please enter a valid email address.");
      return;
    }

    sending.current = true;
    setPhase("sending");
    setError(null);
    const detected = platform ?? detectPlatform();

    try {
      const response = await fetch(WAITLIST_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: trimmed,
          platform: detected,
          placement,
          source: readSource(),
          company,
        }),
      });
      const data: unknown = await response.json().catch(() => null);

      if (response.ok && data && typeof data === "object" && "ok" in data && data.ok) {
        track("waitlist_signup", { placement, platform: detected });
        setPhase("done");
        return;
      }

      setError(
        data && typeof data === "object" && "error" in data && typeof data.error === "string"
          ? data.error
          : "Something went wrong. Please try again.",
      );
    } catch {
      setError("Couldn't reach the server. Check your connection and try again.");
    }

    sending.current = false;
    setPhase("edit");
  }

  const busy = phase === "sending";
  const wrapper =
    variant === "card"
      ? "rounded-panel border border-line bg-surface p-6 shadow-card sm:p-8"
      : "";

  return (
    <div className={`${wrapper} ${className}`}>
      {heading ? (
        <p className={`text-sm font-semibold ${colours.heading}`}>{heading}</p>
      ) : null}

      {phase === "done" ? (
        <p
          role="status"
          className={`${heading ? "mt-3" : ""} text-sm font-medium leading-relaxed ${colours.success}`}
        >
          You&apos;re on the list. We&apos;ll email you once, when the web
          version launches.
        </p>
      ) : (
        <form
          noValidate
          className={heading ? "mt-3" : ""}
          onSubmit={(event) => {
            event.preventDefault();
            submit();
          }}
        >
          <label htmlFor={inputId} className="sr-only">
            Email address
          </label>
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              id={inputId}
              type="email"
              name="email"
              autoComplete="email"
              inputMode="email"
              required
              placeholder="you@example.com"
              maxLength={WAITLIST_EMAIL_MAX}
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
                if (error) setError(null);
              }}
              disabled={busy}
              aria-invalid={error ? true : undefined}
              aria-describedby={error ? `${errorId} ${smallPrintId}` : smallPrintId}
              className="block min-h-11 w-full min-w-0 flex-1 rounded-xl border border-line-strong bg-surface px-4 text-base text-ink placeholder:text-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={busy}
              aria-busy={busy}
              className={ctaButtonClassName(
                variant === "card" ? "primary" : "secondary",
                "md",
                `w-full sm:w-auto sm:flex-shrink-0 ${busy ? "cursor-wait" : ""}`,
              )}
            >
              {busy ? "Joining…" : "Notify me"}
            </button>
          </div>

          {/* Honeypot: hidden from people and assistive tech, filled by bots. */}
          <div aria-hidden="true" className="absolute -left-[10000px] h-px w-px overflow-hidden">
            <label>
              Company
              <input
                type="text"
                name="company"
                tabIndex={-1}
                autoComplete="off"
                value={company}
                onChange={(event) => setCompany(event.target.value)}
              />
            </label>
          </div>

          {error ? (
            <p id={errorId} role="alert" className={`mt-2 text-sm font-medium ${colours.error}`}>
              {error}
            </p>
          ) : null}
        </form>
      )}

      {phase === "done" ? null : (
        <p id={smallPrintId} className={`mt-3 text-xs leading-relaxed ${colours.small}`}>
          One email when it launches. No marketing. See our{" "}
          <Link
            href="/privacy#web-waitlist"
            className={`font-medium underline underline-offset-2 ${colours.link}`}
          >
            privacy policy
          </Link>
          .
        </p>
      )}
    </div>
  );
}
