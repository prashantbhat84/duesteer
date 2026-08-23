/**
 * Central site configuration.
 *
 * The App Store download link is intentionally kept as a single exported
 * constant so it can be swapped for the real App Store URL in one place,
 * without searching the codebase.
 *
 * The app is live on the App Store, so this holds the real listing URL and the
 * CTA renders an enabled "Download on the App Store" state. If the listing URL
 * ever changes, update it here — nothing else needs to change.
 */
export const APP_STORE_URL = "https://apps.apple.com/in/app/duesteer-invoice-recovery/id6778435778";

/** Canonical production URL for the marketing site (update at launch). */
export const SITE_URL = "https://duesteer.app";

/** Support / contact email placeholder. */
export const SUPPORT_EMAIL = "duesteer.app@gmail.com";

/** Email for privacy-related questions. */
export const PRIVACY_EMAIL = "duesteer.app@gmail.com";

export const SITE_NAME = "Duesteer";

/**
 * App icon shown beside the wordmark in the header and footer.
 *
 * NOTE: `public/brand/duesteer-icon.png` is not present in the repo. The file
 * below is the same 1024×1024 app-icon artwork in vector form, so it is used
 * instead (next/image serves .svg unoptimised automatically). If you add the
 * PNG, just point this constant at it — nothing else needs to change.
 */
export const BRAND_ICON = "/brand/duesteer-logo.svg";

export const SITE_DESCRIPTION =
  "Duesteer helps freelancers and small businesses recover overdue invoices with a clear, professional escalation process — track unpaid invoices, choose the right next step, and send payment follow-ups without guesswork.";

/** Primary navigation links used by the header and footer. */
export const NAV_LINKS = [
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Resources", href: "/resources" },
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
