"use client";

import { useId, useRef, useState } from "react";
import { ctaButtonClassName } from "@/components/CtaButton";
import {
  OPT_OUT_NOTE_MAX,
  OPT_OUT_REASONS,
  postOptOut,
  type OptOutReason as Reason,
} from "@/lib/optOut";

/**
 * Optional "why did you opt out?" step, shown by OptOutRunner only once the
 * opt-out has been confirmed. Every reason except "Other" sends on click;
 * "Other" first reveals an optional note.
 *
 * The visitor is already unsubscribed whatever happens here, so a failed
 * request is logged to the console and otherwise just thanks them.
 */
export default function OptOutReason({ id }: { id: string }) {
  const [phase, setPhase] = useState<"choose" | "saved" | "failed">("choose");
  const [sending, setSending] = useState(false);
  const [showNote, setShowNote] = useState(false);
  const [note, setNote] = useState("");
  // Guards against a double click sending twice before `disabled` renders.
  const sent = useRef(false);
  const headingId = useId();
  const noteId = useId();
  const counterId = useId();

  async function send(reason: Reason) {
    if (sent.current) return;
    sent.current = true;
    setSending(true);

    const trimmed = note.trim();
    const { httpStatus, status } = await postOptOut(
      reason === "other" && trimmed !== ""
        ? { id, reason, note: trimmed.slice(0, OPT_OUT_NOTE_MAX) }
        : { id, reason },
    );

    if (httpStatus === 200 && status === "reason_saved") {
      setPhase("saved");
    } else {
      console.error("Opt-out reason not saved", { httpStatus, status });
      setPhase("failed");
    }
  }

  if (phase !== "choose") {
    return (
      <p
        role="status"
        className="mt-10 border-t border-line pt-8 text-center text-lg text-body"
      >
        {phase === "saved" ? "Thanks, that helps." : "Thanks."}
      </p>
    );
  }

  const buttonClassName = ctaButtonClassName(
    "secondary",
    "md",
    `w-full text-left font-medium sm:justify-start ${sending ? "cursor-wait" : ""}`,
  );

  return (
    <section
      aria-labelledby={headingId}
      aria-busy={sending}
      className="mt-10 border-t border-line pt-8"
    >
      <h2
        id={headingId}
        className="text-center text-lg font-semibold text-ink text-balance"
      >
        You&apos;re unsubscribed. If you have a second, why?
      </h2>

      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {OPT_OUT_REASONS.map(({ value, label }) => (
          <li key={value}>
            <button
              type="button"
              disabled={sending}
              aria-expanded={value === "other" ? showNote : undefined}
              aria-controls={value === "other" ? noteId : undefined}
              onClick={() =>
                value === "other" ? setShowNote(true) : send(value)
              }
              className={buttonClassName}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>

      {showNote ? (
        <form
          className="mt-6"
          onSubmit={(event) => {
            event.preventDefault();
            send("other");
          }}
        >
          <label htmlFor={noteId} className="text-sm font-medium text-ink">
            Anything you&apos;d like to add?{" "}
            <span className="font-normal text-muted">(optional)</span>
          </label>
          <textarea
            id={noteId}
            value={note}
            onChange={(event) => setNote(event.target.value)}
            maxLength={OPT_OUT_NOTE_MAX}
            rows={3}
            disabled={sending}
            aria-describedby={counterId}
            // Focus the note as soon as "Other" reveals it.
            autoFocus
            className="mt-2 block w-full resize-y rounded-xl border border-line-strong bg-surface px-4 py-3 text-base text-ink placeholder:text-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand disabled:opacity-60"
          />
          <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
            <p id={counterId} className="text-sm text-muted">
              {note.length}/{OPT_OUT_NOTE_MAX}
            </p>
            <button
              type="submit"
              disabled={sending}
              className={ctaButtonClassName(
                "secondary",
                "md",
                `w-full sm:w-auto ${sending ? "cursor-wait" : ""}`,
              )}
            >
              {sending ? "Sending…" : "Send"}
            </button>
          </div>
        </form>
      ) : null}
    </section>
  );
}
