import type { Metadata } from "next";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import ResourceCard from "@/components/ResourceCard";
import CtaButton from "@/components/CtaButton";
import AppStoreButton from "@/components/AppStoreButton";

const DESCRIPTION =
  "Practical guides, templates, and comparisons to help you recover overdue invoices professionally without damaging client relationships.";

export const metadata: Metadata = {
  title: "Resources",
  description: DESCRIPTION,
  alternates: { canonical: "/resources" },
  openGraph: {
    type: "website",
    title: "Invoice Recovery Resources",
    description: DESCRIPTION,
    url: "/resources",
  },
};

const RESOURCES = [
  {
    title: "Guides",
    description:
      "Step-by-step guidance for following up on overdue invoices and deciding what to do next.",
    href: "/guides",
    icon: "document",
  },
  {
    title: "Templates",
    description:
      "Professional payment reminder emails, final notices, and demand letter examples.",
    icon: "chat",
    comingSoon: true,
  },
  {
    title: "Comparisons",
    description:
      "Clear comparisons between invoice recovery tools and different ways of handling unpaid invoices.",
    href: "/compare",
    icon: "status",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <Section as="section" tone="muted" className="pb-10">
        <SectionHeading
          as="h1"
          eyebrow="Resources"
          title="Invoice Recovery Resources"
          description={DESCRIPTION}
          align="center"
        />
      </Section>

      <Section as="section" className="pt-0">
        <div className="grid gap-6 md:grid-cols-3 md:items-stretch">
          {RESOURCES.map((resource) => (
            <ResourceCard key={resource.title} {...resource} />
          ))}
        </div>
      </Section>

      <Section as="section" tone="muted">
        <div className="mx-auto max-w-2xl rounded-panel border border-line bg-surface p-8 text-center shadow-card sm:p-10">
          <h2 className="text-2xl font-bold tracking-tight text-ink text-balance">
            Put the process into practice
          </h2>
          <p className="mt-3 leading-relaxed text-body text-pretty">
            Duesteer turns the steps in these guides into a workflow you can
            follow invoice by invoice, with a recommended next action at every
            stage.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <AppStoreButton />
            <CtaButton href="/features" variant="secondary">
              See the features
            </CtaButton>
          </div>
        </div>
      </Section>
    </>
  );
}
