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
    "Answers to common questions about DueSteer: what it is, who it's for, how invoice data is stored, whether it sends emails automatically, dispute and payment-promise handling, pricing, and support.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      <Section as="section" muted className="pb-10">
        <SectionHeading
          as="h1"
          eyebrow="FAQ"
          title="Frequently asked questions"
          description="Everything you might want to know about how DueSteer helps you recover overdue invoices."
          align="center"
        />
      </Section>

      <Section as="section" className="pt-0">
        <div className="mx-auto max-w-3xl">
          <FaqAccordion items={FAQS} />
        </div>
      </Section>

      <Section as="section" muted>
        <div className="mx-auto max-w-2xl rounded-2xl border border-slate-200 bg-white p-8 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Still have a question?
          </h2>
          <p className="mt-3 text-slate-600">
            We&apos;re happy to help. Reach the team at{" "}
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="font-medium text-accent underline"
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
