"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import OptOutCard from "@/components/OptOutCard";
import { ctaButtonClassName } from "@/components/CtaButton";
import { SITE_NAME } from "@/lib/config";
import {
  OPT_OUT_COPY,
  OPT_OUT_ENDPOINT,
  isOptOutStatus,
  type OptOutStatus,
} from "@/lib/optOut";

/**
 * Performs the opt-out for /opted-out?id=<prospect id>.
 *
 * Email security scanners open links automatically, some in headless browsers
 * that run JavaScript, so the opt-out must not happen on the server or on page
 * load. On load we only send a read-only check ({ id, check: true }), which
 * never changes data, so visitors who are already opted out see that straight
 * away. The opt-out itself is sent only when the visitor clicks
 * "Confirm opt-out".
 */
export default function OptOutRunner({ id }: { id: string }) {
  const router = useRouter();
  // "checking" until the read-only check answers, then "confirm" to show the
  // button, or the final status to show its copy.
  const [phase, setPhase] = useState<"checking" | "confirm" | OptOutStatus>(
    "checking",
  );
  const [sending, setSending] = useState(false);
  // Strict mode runs effects twice in development; send the check only once.
  const checked = useRef(false);
  // Guards against a double click sending the POST twice before the
  // disabled state has rendered.
  const sent = useRef(false);

  /** POSTs to the Edge Function and returns its `status`, if any. */
  async function post(body: object): Promise<unknown> {
    try {
      const response = await fetch(OPT_OUT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data: unknown = await response.json();
      return data && typeof data === "object" && "status" in data
        ? data.status
        : undefined;
    } catch {
      // Network failure or a non-JSON response.
      return undefined;
    }
  }

  function finish(result: OptOutStatus) {
    setPhase(result);
    // Drop the id from the URL so a refresh shows the result without
    // offering the opt-out again.
    router.replace(`/opted-out?status=${result}`, { scroll: false });
  }

  useEffect(() => {
    if (checked.current) return;
    checked.current = true;

    post({ id, check: true }).then((result) => {
      if (result === "already" || result === "invalid") {
        finish(result);
      } else {
        // "pending", or the check failed: show the button so a real person
        // can still opt out.
        setPhase("confirm");
      }
    });
    // Runs once per mount; `id` comes from the URL and doesn't change.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleConfirm() {
    if (sent.current) return;
    sent.current = true;
    setSending(true);

    const result = await post({ id });
    finish(isOptOutStatus(result) ? result : "error");
  }

  if (phase === "checking") {
    return <OptOutCard title="Checking…" showButton={false} />;
  }

  if (phase !== "confirm") {
    const { title, body } = OPT_OUT_COPY[phase];
    return <OptOutCard title={title} body={body} />;
  }

  return (
    <OptOutCard
      title={`Opt out of ${SITE_NAME} emails?`}
      body="Confirm below and you won't receive any more emails from us."
      action={
        <button
          type="button"
          onClick={handleConfirm}
          disabled={sending}
          aria-busy={sending}
          className={ctaButtonClassName(
            "primary",
            "lg",
            sending ? "cursor-wait" : "",
          )}
        >
          {sending ? "Opting you out…" : "Confirm opt-out"}
        </button>
      }
    />
  );
}
