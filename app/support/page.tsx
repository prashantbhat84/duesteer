import type { Metadata } from "next";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import CtaButton from "@/components/CtaButton";
import { SUPPORT_EMAIL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Get help with DueSteer. Contact support, report a bug, request a feature, or ask about billing. App Store subscription billing is handled by Apple.",
  alternates: { canonical: "/support" },
};

type SupportCard = {
  title: string;
  description: string;
  subject: string;
  cta: string;
};

const CARDS: SupportCard[] = [
  {
    title: "Contact support",
    description:
      "Questions about using DueSteer, or something not working the way you expected? We're here to help.",
    subject: "DueSteer support request",
    cta: "Email support",
  },
  {
    title: "Report a bug",
    description:
      "Found a problem? Tell us what happened, what you expected, and the steps to reproduce it, and we'll take a look.",
    subject: "DueSteer bug report",
    cta: "Report a bug",
  },
  {
    title: "Request a feature",
    description:
      "Have an idea that would make invoice recovery easier? We'd love to hear what would help you most.",
    subject: "DueSteer feature request",
    cta: "Suggest a feature",
  },
  {
    title: "Billing & subscriptions",
    description:
      "Questions about your Premium subscription? App Store subscription billing is handled by Apple — manage or cancel anytime in your Apple account settings. For anything else, email us.",
    subject: "DueSteer billing question",
    cta: "Email about billing",
  },
];

function mailto(subject: string) {
  return `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(subject)}`;
}

export default function SupportPage() {
  return (
    <>
      <Section as="section" tone="muted" className="pb-10">
        <SectionHeading
          as="h1"
          eyebrow="Support"
          title="How can we help?"
          description="Reach the DueSteer team by email. We read every message and aim to reply promptly."
          align="center"
        />
        <div className="mt-8 flex justify-center">
          <CtaButton href={`mailto:${SUPPORT_EMAIL}`} external={false}>
            Email {SUPPORT_EMAIL}
          </CtaButton>
        </div>
      </Section>

      <Section as="section" className="pt-0">
        <div className="grid gap-6 sm:grid-cols-2">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="flex h-full flex-col rounded-card border border-line bg-surface p-6 shadow-card"
            >
              <h2 className="text-lg font-semibold text-ink">{card.title}</h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-body">
                {card.description}
              </p>
              <div className="mt-5">
                <CtaButton href={mailto(card.subject)} variant="secondary">
                  {card.cta}
                </CtaButton>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section as="section" tone="muted">
        <div className="mx-auto max-w-2xl rounded-panel border border-line bg-surface p-8 shadow-card">
          <h2 className="text-xl font-semibold text-ink">
            Billing is handled by Apple
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-body">
            DueSteer Premium subscriptions are purchased through the App Store,
            and all billing is managed by Apple. To view, change, or cancel your
            subscription, open the Settings app on your iOS device, tap your
            name, then <strong>Subscriptions</strong>. Refund requests are also
            handled by Apple. For anything DueSteer-specific, email us at{" "}
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="font-medium text-brand-strong underline decoration-brand-line underline-offset-2 hover:decoration-brand"
            >
              {SUPPORT_EMAIL}
            </a>
            .
          </p>
        </div>
      </Section>
    </>
  );
}
