import Link from "next/link";
import type { Comparison } from "@/lib/comparisons";

/**
 * Listing card for a single comparison. Driven entirely by the COMPARISONS
 * registry in lib/comparisons.ts, so the listing page grows without any layout
 * changes. Matches GuideCard, minus the published date.
 */
export default function ComparisonCard({
  comparison,
}: {
  comparison: Comparison;
}) {
  return (
    <article className="h-full">
      <Link
        href={`/compare/${comparison.slug}`}
        className="flex h-full flex-col rounded-card border border-line bg-surface p-6 shadow-card transition-colors hover:border-brand-line hover:bg-surface-tint sm:p-8"
      >
        {/* h2: cards sit directly under the listing page's h1. */}
        <h2 className="text-lg font-semibold tracking-tight text-ink text-balance sm:text-xl">
          {comparison.title}
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-body text-pretty">
          {comparison.description}
        </p>
        <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-brand-strong">
          Read the comparison
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </span>
      </Link>
    </article>
  );
}
