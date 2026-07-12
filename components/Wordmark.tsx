import Link from "next/link";
import { SITE_NAME } from "@/lib/config";

/**
 * DueSteer wordmark: a simple accent glyph plus the product name.
 * Not an imitation of any existing brand.
 */
export default function Wordmark({
  className = "",
}: {
  className?: string;
}) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2 font-semibold tracking-tight text-slate-900 ${className}`}
      aria-label={`${SITE_NAME} home`}
    >
      <span
        aria-hidden="true"
        className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-accent-fg"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.25}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Upward steps — steering invoices toward resolution. */}
          <path d="M4 17h4v-4h4V9h4V5" />
          <path d="M14 5h4v4" />
        </svg>
      </span>
      <span className="text-lg">{SITE_NAME}</span>
    </Link>
  );
}
