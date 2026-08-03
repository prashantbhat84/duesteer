import Link from "next/link";
import { formatGuideDate, type Guide } from "@/lib/guides";

/**
 * Listing card for a single guide. Driven entirely by the GUIDES registry in
 * lib/guides.ts, so the listing page grows without any layout changes.
 */
export default function GuideCard({ guide }: { guide: Guide }) {
  return (
    <article className="h-full">
      <Link
        href={`/guides/${guide.slug}`}
        className="flex h-full flex-col rounded-card border border-line bg-surface p-6 shadow-card transition-colors hover:border-brand-line hover:bg-surface-tint sm:p-8"
      >
        <time dateTime={guide.published} className="text-xs text-muted">
          {formatGuideDate(guide.published)}
        </time>
        {/* h2: cards sit directly under the listing page's h1. */}
        <h2 className="mt-3 text-lg font-semibold tracking-tight text-ink text-balance sm:text-xl">
          {guide.title}
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-body text-pretty">
          {guide.description}
        </p>
        <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-brand-strong">
          Read the guide
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
