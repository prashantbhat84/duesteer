/**
 * Registry of published guides under /guides.
 *
 * Adding a guide is two steps: append an entry here (keeping `slug` in sync
 * with the route folder name) and create `app/guides/<slug>/page.tsx`. The
 * listing page and the sitemap both read from this list, so neither needs to
 * be edited again.
 */
export type Guide = {
  /** Route folder name under /guides. */
  slug: string;
  /** H1 and listing-card title. */
  title: string;
  /** Listing-card summary — also used as the page meta description source. */
  description: string;
  /** Publication date as an ISO calendar date (YYYY-MM-DD). */
  published: string;
};

export const GUIDES: Guide[] = [
  {
    slug: "recover-overdue-invoice",
    title:
      "How to Recover an Overdue Invoice Without Damaging Client Relationships",
    description:
      "A practical process for moving from a friendly reminder to firmer follow-ups and formal action when an invoice remains unpaid.",
    published: "2026-08-03",
  },
];

export function getGuide(slug: string): Guide | undefined {
  return GUIDES.find((guide) => guide.slug === slug);
}

/**
 * Formats an ISO calendar date for display. Parsed as UTC so the rendered
 * string is identical on the server and in the browser.
 */
export function formatGuideDate(isoDate: string): string {
  return new Date(`${isoDate}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
