/**
 * schema.org payload builders for the JSON-LD blocks rendered by
 * components/JsonLd.tsx.
 *
 * Every value is sourced from lib/config.ts or a content registry, so the
 * structured data cannot drift from what the pages actually show.
 */
import {
  APP_STORE_URL,
  BRAND_ICON,
  PRICING,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  SUPPORT_EMAIL,
} from "@/lib/config";
import type { Faq } from "@/lib/content";
import type { Guide } from "@/lib/guides";

/** Absolute URL for a site-relative path, without a trailing slash on "/". */
function absoluteUrl(path: string): string {
  return `${SITE_URL}${path === "/" ? "" : path}`;
}

/** Publisher/author identity, rendered site-wide from the root layout. */
export function organisationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}${BRAND_ICON}`,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: SUPPORT_EMAIL,
      url: absoluteUrl("/support"),
    },
  };
}

/**
 * The same Organization as a reference for author/publisher fields, so a
 * consumer can tie an Article back to the site-wide entity.
 */
function organisationReference() {
  return {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}${BRAND_ICON}`,
  };
}

/** "$9.99" -> "9.99" — schema.org wants a bare decimal, not a display string. */
function priceAmount(displayPrice: string): string {
  return displayPrice.replace(/[^0-9.]/g, "");
}

/** The iOS app itself, rendered on the homepage. */
export function softwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Duesteer: Invoice Recovery",
    operatingSystem: "iOS",
    applicationCategory: "BusinessApplication",
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    downloadUrl: APP_STORE_URL,
    publisher: organisationReference(),
    offers: [
      {
        "@type": "Offer",
        name: "Free",
        price: "0",
        priceCurrency: "USD",
        description: `Manage up to ${PRICING.freeInvoiceLimit} invoices.`,
      },
      {
        "@type": "Offer",
        name: "Premium Monthly",
        price: priceAmount(PRICING.monthly),
        priceCurrency: "USD",
        description: "The full recovery workflow, billed monthly.",
      },
      {
        "@type": "Offer",
        name: "Premium Yearly",
        price: priceAmount(PRICING.yearly),
        priceCurrency: "USD",
        description: "The full recovery workflow, billed yearly.",
      },
    ],
  };
}

/**
 * FAQPage built from the same array the accordion renders — pass FAQS on /faq
 * and FAQ_TEASER on the homepage so each page describes what it shows.
 */
export function faqPageSchema(items: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

/** Article for a guide page, sourced entirely from the lib/guides.ts entry. */
export function guideArticleSchema(guide: Guide) {
  const url = absoluteUrl(`/guides/${guide.slug}`);
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    datePublished: guide.published,
    /* Only emitted once a guide records a revision date. */
    ...(guide.updated ? { dateModified: guide.updated } : {}),
    author: organisationReference(),
    publisher: organisationReference(),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    url,
  };
}

/** Home → Resources → Guides → guide, matching the on-page breadcrumb trail. */
export function guideBreadcrumbSchema(guide: Guide) {
  const trail = [
    { name: "Home", item: absoluteUrl("/") },
    { name: "Resources", item: absoluteUrl("/resources") },
    { name: "Guides", item: absoluteUrl("/guides") },
    { name: guide.title, item: absoluteUrl(`/guides/${guide.slug}`) },
  ];

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.item,
    })),
  };
}
