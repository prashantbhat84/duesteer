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
 * The opt-out reasons as quiet secondary buttons. OptOutRunner decides what a
 * click does: unsubscribe with that reason, or (if already unsubscribed) just
 * record it.
 */
export function ReasonButtons({
  busy,
  disabled,
  onPick,
}: {
  /** The reason whose request is in flight, if any. */
  busy: Reason | null;
  disabled: boolean;
  onPick: (reason: Reason) => void;
}) {
  return (
    <ul className="mt-4 grid gap-3 sm:grid-cols-2">
      {OPT_OUT_REASONS.map(({ value, label }) => (
        <li key={value}>
          <button
            type="button"
            disabled={disabled}
            aria-busy={busy === value}
            onClick={() => onPick(value)}
            className={ctaButtonClassName(
              "secondary",
              "md",
              `w-full font-medium sm:justify-start sm:text-left ${disabled ? "cursor-wait" : ""}`,
            )}
          >
            {label}
          </button>
        </li>
      ))}
    </ul>
  );
}

/**
 * Optional note shown after "Other" has been recorded. Sending it overwrites
 * the saved reason with { reason: "other", note }. A failed send is logged to
 * the console only: the visitor is already unsubscribed.
 */
export function ReasonNote({ id }: { id: string }) {
  const [note, setNote] = useState("");
  const [phase, setPhase] = useState<"edit" | "sending" | "sent">("edit");
  // Guards against a double click sending twice before `disabled` renders.
  const sent = useRef(false);
  const noteId = useId();
  const counterId = useId();
  const trimmed = note.trim();

  async function send() {
    if (sent.current || trimmed === "") return;
    sent.current = true;
    setPhase("sending");

    const { httpStatus, status } = await postOptOut({
      id,
      reason: "other",
      note: trimmed.slice(0, OPT_OUT_NOTE_MAX),
    });
    if (httpStatus !== 200 || status !== "reason_saved") {
      console.error("Opt-out note not saved", { httpStatus, status });
    }
    setPhase("sent");
  }

  if (phase === "sent") {
    return (
      <p role="status" className="mt-6 text-center text-body">
        Got your note. Thanks.
      </p>
    );
  }

  const sending = phase === "sending";

  return (
    <form
      className="mt-6"
      onSubmit={(event) => {
        event.preventDefault();
        send();
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
        className="mt-2 block w-full resize-y rounded-xl border border-line-strong bg-surface px-4 py-3 text-base text-ink placeholder:text-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand disabled:opacity-60"
      />
      <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
        <p id={counterId} className="text-sm text-muted">
          {note.length}/{OPT_OUT_NOTE_MAX}
        </p>
        <button
          type="submit"
          disabled={sending || trimmed === ""}
          aria-busy={sending}
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
  );
}
