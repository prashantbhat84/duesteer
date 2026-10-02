import {
  APP_STORE_URL,
  PRICING,
  SITE_DESCRIPTION,
  SITE_URL,
} from "@/lib/config";
import { GUIDES } from "@/lib/guides";

/**
 * /llms.txt — a short, plain-Markdown briefing for LLM crawlers and answer
 * engines, served as text/plain.
 *
 * Every fact here is read from lib/config.ts and the guides registry, so the
 * file stays correct as pricing changes and new guides are published without
 * anyone remembering to edit it.
 */
/* Nothing here is request-dependent, so prerender it alongside the pages. */
export const dynamic = "force-static";

function url(path: string): string {
  return `${SITE_URL}${path === "/" ? "" : path}`;
}

const LINKS: { label: string; href: string }[] = [
  { label: "Homepage", href: url("/") },
  { label: "Features", href: url("/features") },
  { label: "Pricing", href: url("/pricing") },
  { label: "FAQ", href: url("/faq") },
  { label: "Resources", href: url("/resources") },
  { label: "Guides", href: url("/guides") },
  /* One line per published guide — new guides appear automatically. */
  ...GUIDES.map((guide) => ({
    label: guide.title,
    href: url(`/guides/${guide.slug}`),
  })),
  { label: "Privacy Policy", href: url("/privacy") },
  { label: "Terms of Use", href: url("/terms") },
  { label: "App Store", href: APP_STORE_URL },
];

function body(): string {
  return `# Duesteer

${SITE_DESCRIPTION}

## Who it's for

UK freelancers, contractors, agencies and small service businesses that invoice clients and chase late payment.

## What it does

- Tracks unpaid invoices by client, amount and due date.
- Moves each invoice up a five-stage escalation ladder: Friendly Reminder, Firm Reminder, Final Notice, Formal Demand, External Action.
- Drafts a stage-appropriate follow-up email, which you review and send yourself.
- Records disputes and payment promises, pausing recovery until they resolve.
- Exports a recovery history PDF.

## What it does not do

- No automatic sending. You send every message yourself.
- No accounting, bank or payment-processor integrations.
- No cloud account required; invoice data stays on the device.
- No legal, financial or accounting advice.

## Platform and pricing

iOS only. Free for up to ${PRICING.freeInvoiceLimit} invoices; Premium is ${PRICING.monthly} per month or ${PRICING.yearly} per year via Apple in-app purchase (prices vary by region).

## Jurisdiction

Built around UK late-payment practice: statutory interest and fixed compensation under the Late Payment of Commercial Debts (Interest) Act 1998, and the letter before action that precedes a court claim. The workflow itself works for clients anywhere.

## Links

${LINKS.map((link) => `- ${link.label}: ${link.href}`).join("\n")}
`;
}

export function GET(): Response {
  return new Response(body(), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
