import type { Faq } from "@/lib/content";

/**
 * Accessible FAQ accordion built on the native <details>/<summary> disclosure
 * element, so every answer is present in the server-rendered HTML — crawlers
 * and answer engines read the answers without executing JavaScript.
 *
 * The `name` attribute groups the items so only one stays open at a time, the
 * same behaviour the previous client-side implementation had. Pass a distinct
 * `name` if two accordions ever share a page.
 */
export default function FaqAccordion({
  items,
  name = "faq",
}: {
  items: Faq[];
  /** Exclusive-accordion group name shared by every item. */
  name?: string;
}) {
  return (
    <div className="divide-y divide-line overflow-hidden rounded-panel border border-line bg-surface shadow-card">
      {items.map((item, index) => (
        <details
          key={item.question}
          name={name}
          open={index === 0}
          className="group open:bg-brand-soft/35"
        >
          <summary className="flex w-full cursor-pointer list-none items-center justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-surface-muted/60 sm:px-6 [&::-webkit-details-marker]:hidden">
            <h3 className="m-0 text-base font-semibold text-ink group-open:text-brand-strong">
              {item.question}
            </h3>
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-5 w-5 flex-shrink-0 text-muted transition-transform group-open:rotate-180 group-open:text-brand"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </summary>
          <div className="px-5 pb-5 sm:px-6">
            <p className="max-w-2xl text-sm leading-relaxed text-body">
              {item.answer}
            </p>
          </div>
        </details>
      ))}
    </div>
  );
}
