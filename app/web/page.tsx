import type { Metadata } from "next";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import WaitlistForm from "@/components/WaitlistForm";
import { SITE_NAME } from "@/lib/config";

export const metadata: Metadata = {
  title: "Web version waitlist",
  description: `${SITE_NAME} is coming to the web. Join the waitlist to get one email when the browser version launches — guided escalation, promise and dispute tracking, and PDF evidence reports on Windows, Android, Mac or Linux.`,
  alternates: { canonical: "/web" },
};

const FEATURES = [
  {
    title: "Guided escalation",
    body: "The same five-step ladder as the app, from friendly reminder to external action.",
  },
  {
    title: "Promises and disputes",
    body: "Log payment promises and disputes, and pause recovery until they resolve.",
  },
  {
    title: "PDF evidence report",
    body: "Export a clear recovery history for your records or an accountant.",
  },
];

/*
 * Destination for "web or Windows version?" links in the FAQ and for visitors
 * who aren't on iPhone. Unlike the homepage, the form shows on every platform,
 * so it renders on the server with the rest of the page.
 */
export default function WebWaitlistPage() {
  return (
    <Section as="section" tone="muted">
      <div className="mx-auto grid max-w-5xl items-start gap-12 lg:grid-cols-[1fr_minmax(0,26rem)] lg:gap-16">
        <div>
          <SectionHeading
            as="h1"
            eyebrow="Web version · In development"
            title={`${SITE_NAME} is coming to your browser`}
            description={`Not on iPhone? A web version of ${SITE_NAME} that works in any browser is in development, with the same features as the app.`}
          />
          <ul className="mt-10 flex flex-col gap-6">
            {FEATURES.map((feature) => (
              <li key={feature.title} className="border-t border-line-strong pt-5">
                <h2 className="text-base font-semibold text-ink">{feature.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-body">{feature.body}</p>
              </li>
            ))}
          </ul>
        </div>

        <WaitlistForm
          placement="web-page"
          variant="card"
          showFor="all"
          heading="Get notified when the web version launches"
        />
      </div>
    </Section>
  );
}
