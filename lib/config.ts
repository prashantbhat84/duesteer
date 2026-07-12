/**
 * Central site configuration.
 *
 * The App Store download link is intentionally kept as a single exported
 * constant so it can be swapped for the real App Store URL in one place,
 * without searching the codebase.
 *
 * The app is still awaiting App Store approval, so this is empty and the CTA
 * renders a disabled "Coming Soon" state. At launch, paste the real URL here
 * and flip PUBLISHED in components/AppStoreButton.tsx — nothing else.
 */
export const APP_STORE_URL = "";

/** Canonical production URL for the marketing site (update at launch). */
export const SITE_URL = "https://duesteer.app";

/** Support / contact email placeholder. */
export const SUPPORT_EMAIL = "duesteer.app@gmail.com";

/** Email for privacy-related questions. */
export const PRIVACY_EMAIL = "duesteer.app@gmail.com";

export const SITE_NAME = "DueSteer";

export const SITE_DESCRIPTION =
  "DueSteer helps freelancers and small businesses recover overdue invoices with a clear, professional escalation process — track unpaid invoices, choose the right next step, and send payment follow-ups without guesswork.";

/** Primary navigation links used by the header and footer. */
export const NAV_LINKS = [
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
  { label: "Support", href: "/support" },
] as const;

/** Footer link groups. */
export const FOOTER_LINKS = {
  product: [
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "FAQ", href: "/faq" },
    { label: "Support", href: "/support" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Use", href: "/terms" },
  ],
} as const;

/** Pricing figures, kept in one place so they stay consistent across pages. */
export const PRICING = {
  freeInvoiceLimit: 2,
  monthly: "$9.99",
  yearly: "$59.99",
} as const;
