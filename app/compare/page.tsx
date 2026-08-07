import type { Metadata } from "next";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import Breadcrumbs from "@/components/Breadcrumbs";
import ComparisonCard from "@/components/ComparisonCard";
import CtaButton from "@/components/CtaButton";
import { COMPARISONS } from "@/lib/comparisons";

const DESCRIPTION =
  "Compare different approaches to recovering overdue invoices and choose the workflow that fits your business.";

export const metadata: Metadata = {
  title: "Invoice Recovery Comparisons",
  description: DESCRIPTION,
  alternates: { canonical: "/compare" },
  openGraph: {
    type: "website",
    title: "Invoice Recovery Comparisons",
    description: DESCRIPTION,
    url: "/compare",
  },
};

export default function ComparisonsPage() {
  return (
    <>
      <Section as="section" tone="muted" className="pb-10">
        <Breadcrumbs
          className="mb-6"
          items={[
            { label: "Resources", href: "/resources" },
            { label: "Comparisons" },
          ]}
        />
        <SectionHeading
          as="h1"
          eyebrow="Comparisons"
          title="Invoice Recovery Comparisons"
          description={DESCRIPTION}
        />
      </Section>

      <Section as="section" className="pt-0">
        {/*
          Single-column reading list capped at ~720px so one card doesn't
          stretch across the full grid. New comparisons stack underneath.
        */}
        <ul className="grid max-w-[720px] gap-6">
          {COMPARISONS.map((comparison) => (
            <li key={comparison.slug}>
              <ComparisonCard comparison={comparison} />
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <p className="text-sm leading-relaxed text-muted">
            More comparisons are on the way. The Resources hub lists everything
            available so far.
          </p>
          <div className="mt-4">
            <CtaButton href="/resources" variant="secondary">
              Back to Resources
            </CtaButton>
          </div>
        </div>
      </Section>
    </>
  );
}
