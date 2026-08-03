import type { Metadata } from "next";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import Breadcrumbs from "@/components/Breadcrumbs";
import GuideCard from "@/components/GuideCard";
import CtaButton from "@/components/CtaButton";
import { GUIDES } from "@/lib/guides";

const DESCRIPTION =
  "Practical, step-by-step guidance for recovering unpaid invoices while keeping communication professional.";

export const metadata: Metadata = {
  title: "Invoice Recovery Guides",
  description: DESCRIPTION,
  alternates: { canonical: "/guides" },
  openGraph: {
    type: "website",
    title: "Invoice Recovery Guides",
    description: DESCRIPTION,
    url: "/guides",
  },
};

export default function GuidesPage() {
  return (
    <>
      <Section as="section" tone="muted" className="pb-10">
        <Breadcrumbs
          className="mb-6"
          items={[
            { label: "Resources", href: "/resources" },
            { label: "Guides" },
          ]}
        />
        <SectionHeading
          as="h1"
          eyebrow="Guides"
          title="Invoice Recovery Guides"
          description={DESCRIPTION}
        />
      </Section>

      <Section as="section" className="pt-0">
        {/*
          Single-column reading list capped at ~720px so one card doesn't
          stretch across the full grid. New guides stack underneath.
        */}
        <ul className="grid max-w-[720px] gap-6">
          {GUIDES.map((guide) => (
            <li key={guide.slug}>
              <GuideCard guide={guide} />
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <p className="text-sm leading-relaxed text-muted">
            More guides are on the way. The Resources hub lists everything
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
