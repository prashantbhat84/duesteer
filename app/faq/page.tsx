import type { Metadata } from "next";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import FaqAccordion from "@/components/FaqAccordion";
import CtaButton from "@/components/CtaButton";
import AppStoreButton from "@/components/AppStoreButton";
import { SUPPORT_EMAIL } from "@/lib/config";
import { FAQS } from "@/lib/content";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about Duesteer: what it is, who it's for, how invoice data is stored, whether it sends emails automatically, dispute and payment-promise handling, pricing, and support.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      <Section as="section" tone="muted" className="pb-10">
        <SectionHeading
          as="h1"
          eyebrow="FAQ"
          title="Frequently asked questions"
          description="Everything you might want to know about how Duesteer helps you recover overdue invoices."
          align="center"
        />
      </Section>

      <Section as="section" className="pt-0">
        <div className="mx-auto max-w-3xl">
          <FaqAccordion items={FAQS} />
        </div>
      </Section>

      <Section as="section" tone="muted">
        <div className="mx-auto max-w-2xl rounded-panel border border-line bg-surface p-8 text-center shadow-card sm:p-10">
          <h2 className="text-2xl font-bold tracking-tight text-ink text-balance">
            Still have a question?
          </h2>
          <p className="mt-3 leading-relaxed text-body">
            We&apos;re happy to help. Reach the team at{" "}
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="font-medium text-brand-strong underline decoration-brand-line underline-offset-2 hover:decoration-brand"
            >
              {SUPPORT_EMAIL}
            </a>
            .
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CtaButton href="/support" variant="secondary">
              Visit support
            </CtaButton>
            <AppStoreButton />
          </div>
        </div>
      </Section>
    </>
  );
}
