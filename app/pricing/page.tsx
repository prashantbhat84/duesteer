import type { Metadata } from "next";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import PricingCard from "@/components/PricingCard";
import AppStoreButton from "@/components/AppStoreButton";
import CtaButton from "@/components/CtaButton";
import { PRICING } from "@/lib/config";
import { FAQS } from "@/lib/content";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "DueSteer pricing: get the complete launch experience free for up to 2 invoices, or go Premium for unlimited invoices and access to future premium features. $9.99/month or $59.99/year via Apple.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <>
      <Section as="section" muted className="pb-10">
        <SectionHeading
          as="h1"
          eyebrow="Pricing"
          title="Start free. Go Premium when you outgrow the limit."
          description={`Get the complete DueSteer launch experience free for up to ${PRICING.freeInvoiceLimit} invoices. Upgrade to Premium to recover invoices without limits.`}
          align="center"
        />
      </Section>

      <Section as="section" className="pt-0">
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2 md:items-stretch">
          <PricingCard
            name="Free"
            price="$0"
            description="Use the complete DueSteer launch experience"
            features={[
              `Manage up to ${PRICING.freeInvoiceLimit} invoices`,
              "Full guided escalation workflow",
              "Professional email templates",
              "All client communication styles",
              "Dispute and payment-promise tracking",
              "Smart notifications",
              "Recovery history",
              "PDF recovery reports",
              "External Action guidance",
            ]}
          />
          <PricingCard
            name="Premium"
            featured
            prices={[
              { amount: PRICING.monthly, period: "/ month" },
              { amount: PRICING.yearly, period: "/ year" },
            ]}
            description="Recover invoices without limits"
            features={[
              "Everything included in Free",
              "Unlimited invoices",
              "Access to future premium features",
            ]}
          />
        </div>

        <p className="mx-auto mt-8 max-w-4xl text-center text-sm leading-relaxed text-slate-500">
          Pricing may vary by App Store country or region. Subscriptions are
          managed through Apple.
        </p>

        <div className="mt-8 flex justify-center">
          <AppStoreButton size="lg" />
        </div>
      </Section>

      {/* Pricing FAQ */}
      <Section as="section">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <SectionHeading
            eyebrow="Billing questions"
            title="Good to know"
            description="A couple of common questions about cost and billing."
          />
          <div>
            <FaqAccordion
              items={FAQS.filter((f) =>
                ["How much does DueSteer cost?", "How do I contact support?"].includes(
                  f.question,
                ),
              )}
            />
            <div className="mt-6">
              <CtaButton href="/faq" variant="secondary">
                See all FAQs
              </CtaButton>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
