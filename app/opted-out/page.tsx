import type { Metadata } from "next";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import CtaButton from "@/components/CtaButton";
import { SITE_NAME } from "@/lib/config";

/*
 * Landing page for the "Opt out" link in cold emails.
 *
 * The opt-out itself is performed by a Supabase Edge Function, which then
 * redirects here with ?status=<status>. This page is display-only: it must
 * never call Supabase, read env vars, or take any action of its own.
 *
 * It is also deliberately free of marketing — someone who lands here has just
 * asked not to be sold to, so the only link out is a plain link to the site.
 */

// `absolute` opts out of the root layout's "%s · Duesteer" template so the
// title reads exactly as specified.
export const metadata: Metadata = {
  title: { absolute: `Opted out | ${SITE_NAME}` },
  // Kept out of search entirely: this page is only ever reached from an email
  // link, and has nothing to offer a search visitor.
  robots: { index: false, follow: false },
};

/** Statuses the Edge Function can redirect with. */
const STATUSES = ["done", "already", "invalid", "error"] as const;

type Status = (typeof STATUSES)[number];

const COPY: Record<Status, { title: string; body: string }> = {
  done: {
    title: "You've been opted out",
    body: `You won't receive any more emails from ${SITE_NAME}. Sorry for the interruption.`,
  },
  already: {
    title: "You're already opted out",
    body: `You won't receive any more emails from ${SITE_NAME}.`,
  },
  invalid: {
    title: "This link is no longer valid",
    body: 'If you\'re still getting emails, reply to one with "opt out" and I\'ll remove you.',
  },
  error: {
    title: "Something went wrong",
    body: 'Reply to the email with "opt out" and I\'ll remove you manually.',
  },
};

/**
 * Missing, repeated or unrecognised values all fall back to "done": the
 * opt-out has already been applied by the time the visitor gets here, so
 * confirming it is the honest default.
 */
function resolveStatus(value: string | string[] | undefined): Status {
  return typeof value === "string" && (STATUSES as readonly string[]).includes(value)
    ? (value as Status)
    : "done";
}

export default async function OptedOutPage({
  searchParams,
}: PageProps<"/opted-out">) {
  /* Next 16: searchParams is a promise and must be awaited. */
  const { status } = await searchParams;
  const { title, body } = COPY[resolveStatus(status)];

  return (
    <Section as="section" tone="muted">
      <div className="mx-auto max-w-2xl rounded-panel border border-line bg-surface p-6 shadow-card sm:p-10">
        <SectionHeading as="h1" title={title} description={body} align="center" />
        <div className="mt-8 flex justify-center">
          <CtaButton href="/" size="lg">
            Visit duesteer.app
          </CtaButton>
        </div>
      </div>
    </Section>
  );
}
