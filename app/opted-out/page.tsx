import type { Metadata } from "next";
import Section from "@/components/Section";
import OptOutCard from "@/components/OptOutCard";
import OptOutRunner from "@/components/OptOutRunner";
import { SITE_NAME } from "@/lib/config";
import { OPT_OUT_COPY, isOptOutStatus, type OptOutStatus } from "@/lib/optOut";

/*
 * Landing page for the "Opt out" link in cold emails.
 *
 * With ?id=<prospect id>, the opt-out is performed in the browser by
 * OptOutRunner, which POSTs to the Supabase Edge Function after the page has
 * loaded. The server never calls Supabase: email security scanners fetch
 * links automatically, and a plain fetch must not opt anyone out.
 *
 * Without an id, the page simply shows the copy for ?status=<status>.
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

/**
 * Missing, repeated or unrecognised values all fall back to "done", the
 * outcome the visitor most likely arrived from.
 */
function resolveStatus(value: string | string[] | undefined): OptOutStatus {
  return isOptOutStatus(value) ? value : "done";
}

export default async function OptedOutPage({
  searchParams,
}: PageProps<"/opted-out">) {
  /* Next 16: searchParams is a promise and must be awaited. */
  const { id, status } = await searchParams;

  if (typeof id === "string" && id !== "") {
    return (
      <Section as="section" tone="muted">
        <OptOutRunner id={id} />
      </Section>
    );
  }

  const { title, body } = OPT_OUT_COPY[resolveStatus(status)];

  return (
    <Section as="section" tone="muted">
      <OptOutCard title={title} body={body} />
    </Section>
  );
}
