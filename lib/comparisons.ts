/**
 * Registry of published comparisons under /compare.
 *
 * Mirrors lib/guides.ts: append an entry here (keeping `slug` in sync with the
 * route folder name) and create `app/compare/<slug>/page.tsx`. The listing page
 * and the sitemap both read from this list, so neither needs editing again.
 */
export type Comparison = {
  /** Route folder name under /compare. */
  slug: string;
  /** H1 and listing-card title. */
  title: string;
  /** Listing-card summary. */
  description: string;
  /**
   * Date the competitor's public information was last checked, as an ISO
   * calendar date (YYYY-MM-DD). Comparisons are reviewed rather than published
   * once, because competitor features and pricing change.
   */
  reviewed: string;
};

export const COMPARISONS: Comparison[] = [
  {
    slug: "duesteer-vs-chaser",
    title:
      "Duesteer vs Chaser: Which Is Right for Managing Overdue Invoices?",
    description:
      "Duesteer provides guided invoice recovery for freelancers and small service businesses, while Chaser is a broader accounts receivable automation platform. See how the two approaches differ.",
    reviewed: "2026-08-07",
  },
];

export function getComparison(slug: string): Comparison | undefined {
  return COMPARISONS.find((comparison) => comparison.slug === slug);
}

/**
 * Shared with the guides registry — same ISO-in, UTC-formatted-out behaviour,
 * so review dates render identically on the server and in the browser.
 */
export { formatGuideDate as formatReviewDate } from "./guides";
