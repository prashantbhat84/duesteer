"use client";

import { useEffect, useRef, useState } from "react";
import OptOutCard from "@/components/OptOutCard";
import OptOutReason from "@/components/OptOutReason";
import { ctaButtonClassName } from "@/components/CtaButton";
import { SITE_NAME } from "@/lib/config";
import {
  OPT_OUT_COPY,
  isOptOutStatus,
  postOptOut,
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
 *
 * Once the opt-out is confirmed ("done" or "already"), an optional
 * "why?" step (OptOutReason) appears below the confirmation.
 */
export default function OptOutRunner({ id }: { id: string }) {
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
    return (await postOptOut(body)).status;
  }

  function finish(result: OptOutStatus) {
    setPhase(result);
    // Drop the id from the URL so a refresh shows the result without
    // offering the opt-out again. The native History API updates the URL
    // without re-rendering the server page, which would unmount this
    // component and lose the id the optional reason step needs.
    window.history.replaceState(null, "", `/opted-out?status=${result}`);
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
    return (
      <OptOutCard title={title} body={body}>
        {phase === "done" || phase === "already" ? (
          <OptOutReason id={id} />
        ) : null}
      </OptOutCard>
    );
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
