import { ESCALATION_STAGES } from "@/lib/content";

/**
 * Visualises the escalation ladder as an ordered, connected sequence of
 * stages. Uses a numbered vertical timeline that reads clearly on mobile and
 * desktop alike.
 */
export default function EscalationLadder() {
  return (
    <ol className="relative flex flex-col gap-4">
      {ESCALATION_STAGES.map((stage, index) => (
        <li
          key={stage.name}
          className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
        >
          <span
            aria-hidden="true"
            className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-blue-50 text-sm font-semibold text-accent"
          >
            {index + 1}
          </span>
          <div>
            <h3 className="text-base font-semibold text-slate-900">
              {stage.name}
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-slate-600">
              {stage.description}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
