import { ESCALATION_STAGES } from "@/lib/content";

/**
 * Visualises the escalation ladder as an ordered, connected sequence of
 * stages. A single continuous rail joins the numbered markers, so the list
 * reads as one process rather than a stack of separate cards.
 */
export default function EscalationLadder() {
  return (
    <ol className="relative flex flex-col">
      {ESCALATION_STAGES.map((stage, index) => {
        const isLast = index === ESCALATION_STAGES.length - 1;
        return (
          <li key={stage.name} className="relative flex gap-4 pb-7 last:pb-0">
            {/* Connecting rail between markers. */}
            {isLast ? null : (
              <span
                aria-hidden="true"
                className="absolute left-[17px] top-9 bottom-0 w-px bg-brand-line"
              />
            )}
            <span
              aria-hidden="true"
              className="relative z-10 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-brand-line bg-brand-soft text-sm font-semibold text-brand-strong"
            >
              {index + 1}
            </span>
            <div className="pt-1">
              <h3 className="text-base font-semibold text-ink">{stage.name}</h3>
              <p className="mt-1 text-sm leading-relaxed text-body">
                {stage.description}
              </p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
