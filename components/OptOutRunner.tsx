"use client";

import { useEffect, useRef, useState } from "react";
import OptOutCard from "@/components/OptOutCard";
import { ReasonButtons, ReasonNote } from "@/components/OptOutReason";
import { ctaButtonClassName } from "@/components/CtaButton";
import { SITE_NAME } from "@/lib/config";
import {
  OPT_OUT_COPY,
  postOptOut,
  type OptOutReason as Reason,
  type OptOutStatus,
} from "@/lib/optOut";

/**
 * Performs the opt-out for /opted-out?id=<prospect id>.
 *
 * Email security scanners open links automatically, some in headless browsers
 * that run JavaScript, so the opt-out must not happen on the server or on page
 * load. On load we only send a read-only check ({ id, check: true }), which
 * never changes data, so visitors who are already opted out see that straight
 * away. The opt-out itself is sent only when the visitor clicks a button.
 *
 * Every button unsubscribes in one click: "Unsubscribe" on its own, or one of
 * the reasons, which sends { id } and then, once that has succeeded,
 * { id, reason }. Visitors who are already opted out can still give a reason.
 */
export default function OptOutRunner({ id }: { id: string }) {
  // "checking" until the read-only check answers, then "pending" to offer the
  // buttons, or the final status to show its copy. "error" keeps the buttons
  // so the visitor can try again.
  const [phase, setPhase] = useState<"checking" | "pending" | OptOutStatus>(
    "checking",
  );
  // The button whose request is in flight: "plain" for "Unsubscribe".
  const [busy, setBusy] = useState<"plain" | Reason | null>(null);
  // The reason the visitor gave, once it has been sent.
  const [reason, setReason] = useState<Reason | null>(null);
  // Strict mode runs effects twice in development; send the check only once.
  const checked = useRef(false);
  // Guards against a double click sending twice before the disabled state
  // has rendered.
  const inFlight = useRef(false);

  function showResult(result: OptOutStatus) {
    setPhase(result);
    // Drop the id from the URL so a refresh shows the result without
    // offering the opt-out again. The native History API updates the URL
    // without re-rendering the server page, which would unmount this
    // component and lose the id the reason buttons need.
    window.history.replaceState(null, "", `/opted-out?status=${result}`);
  }

  /** Records a reason. The visitor is unsubscribed either way, so a failure
   * is only logged. */
  async function sendReason(value: Reason) {
    const { httpStatus, status } = await postOptOut({ id, reason: value });
    if (httpStatus !== 200 || status !== "reason_saved") {
      console.error("Opt-out reason not saved", { httpStatus, status });
    }
  }

  useEffect(() => {
    if (checked.current) return;
    checked.current = true;

    postOptOut({ id, check: true }).then(({ status }) => {
      if (status === "already" || status === "invalid") {
        showResult(status);
      } else {
        // "pending", or the check failed: show the buttons so a real person
        // can still opt out.
        setPhase("pending");
      }
    });
    // Runs once per mount; `id` comes from the URL and doesn't change.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function unsubscribe(value: Reason | null) {
    if (inFlight.current) return;
    inFlight.current = true;
    setBusy(value ?? "plain");

    const { status } = await postOptOut({ id });

    if (status === "done" || status === "already") {
      // Only now that the opt-out has succeeded: the function rejects a
      // reason from anyone who isn't opted out.
      if (value) await sendReason(value);
      setReason(value);
      showResult("done");
    } else if (status === "invalid") {
      showResult("invalid");
    } else {
      // Network failure or an unexpected answer. They are not unsubscribed,
      // so keep the buttons and the id for another try.
      setPhase("error");
      setBusy(null);
      inFlight.current = false;
    }
  }

  async function giveReasonWhenAlready(value: Reason) {
    if (inFlight.current) return;
    inFlight.current = true;
    setBusy(value);

    await sendReason(value);
    setReason(value);
    setBusy(null);
  }

  if (phase === "checking") {
    return <OptOutCard title="Checking…" showButton={false} />;
  }

  if (phase === "pending" || phase === "error") {
    const sending = busy !== null;
    return (
      <OptOutCard
        title={
          phase === "error"
            ? OPT_OUT_COPY.error.title
            : `Unsubscribe from ${SITE_NAME} emails`
        }
        body={
          phase === "error"
            ? "That didn't go through, so you're not unsubscribed yet. Please try again, or reply to the email with \"opt out\" and I'll remove you manually."
            : undefined
        }
        action={
          <button
            type="button"
            onClick={() => unsubscribe(null)}
            disabled={sending}
            aria-busy={busy === "plain"}
            className={ctaButtonClassName(
              "primary",
              "lg",
              `w-full sm:w-auto sm:min-w-64 ${sending ? "cursor-wait" : ""}`,
            )}
          >
            {sending ? "Unsubscribing…" : "Unsubscribe"}
          </button>
        }
      >
        <p className="mt-8 text-center text-body">
          or unsubscribe and tell us why:
        </p>
        <ReasonButtons
          busy={busy === "plain" ? null : busy}
          disabled={sending}
          onPick={unsubscribe}
        />
      </OptOutCard>
    );
  }

  if (phase === "done") {
    const { title, body } = OPT_OUT_COPY.done;
    return (
      <OptOutCard
        title={title}
        body={reason ? `${body} Thanks for telling us.` : body}
      >
        {reason === "other" ? (
          <div className="mt-10 border-t border-line pt-6">
            <ReasonNote id={id} />
          </div>
        ) : null}
      </OptOutCard>
    );
  }

  if (phase === "already") {
    const { title, body } = OPT_OUT_COPY.already;
    return (
      <OptOutCard title={title} body={body}>
        <section
          aria-label="Why did you unsubscribe?"
          className="mt-10 border-t border-line pt-8"
        >
          {reason ? (
            <>
              <p role="status" className="text-center text-lg text-body">
                Thanks, that helps.
              </p>
              {reason === "other" ? <ReasonNote id={id} /> : null}
            </>
          ) : (
            <>
              <h2 className="text-center text-lg font-semibold text-ink text-balance">
                If you have a second, why?
              </h2>
              <ReasonButtons
                busy={busy === "plain" ? null : busy}
                disabled={busy !== null}
                onPick={giveReasonWhenAlready}
              />
            </>
          )}
        </section>
      </OptOutCard>
    );
  }

  const { title, body } = OPT_OUT_COPY[phase];
  return <OptOutCard title={title} body={body} />;
}
