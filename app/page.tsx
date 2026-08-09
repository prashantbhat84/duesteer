import Link from "next/link";
import type { Metadata } from "next";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import FeatureCard from "@/components/FeatureCard";
import PricingCard from "@/components/PricingCard";
import FaqAccordion from "@/components/FaqAccordion";
import EscalationLadder from "@/components/EscalationLadder";
import CtaButton from "@/components/CtaButton";
import AppStoreButton from "@/components/AppStoreButton";
import AppScreenshot from "@/components/AppScreenshot";
import { PRICING, SITE_NAME } from "@/lib/config";
import {
  AUDIENCES,
  FAQ_TEASER,
  FEATURE_HIGHLIGHTS,
  HOW_IT_WORKS,
} from "@/lib/content";

export const metadata: Metadata = {
  /*
   * `absolute` is required here: Next.js does not apply the root layout's
   * title template to a page in the same route segment, so a bare string would
   * render without the "· Duesteer" suffix every other page gets.
   */
  title: {
    absolute: `${SITE_NAME} — Recover overdue invoices with a clear process`,
  },
  description:
    "Duesteer is a guided invoice recovery app for freelancers and small businesses. Track unpaid invoices, follow a professional escalation ladder, and send the right payment follow-up at the right time.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      {/* Hero — real product screenshots carry the visual weight. */}
      <section className="border-b border-line bg-surface">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-5 py-16 sm:px-6 lg:grid-cols-[1fr_minmax(0,26rem)] lg:gap-16 lg:px-8 lg:py-24">
          <div className="max-w-xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-brand-line bg-brand-soft px-3 py-1 text-xs font-semibold text-brand-strong">
              Guided invoice recovery for iOS
            </p>
            <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-ink text-balance sm:text-5xl">
              Stop improvising. Recover overdue invoices with a clear process.
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-body text-pretty">
              Duesteer helps freelancers and small businesses track overdue
              invoices, choose the right next step, and send professional
              payment follow-ups without damaging client relationships.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-start">
              <AppStoreButton size="lg" />
              <CtaButton href="#how-it-works" variant="secondary" size="lg">
                See how it works
              </CtaButton>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-muted">
              Free to manage up to {PRICING.freeInvoiceLimit} invoices · No
              account required to get started.
            </p>
          </div>

          {/* One real screen, sized to fill the right rail without towering
              over the hero copy. The escalation screen has its own section. */}
          <div className="mx-auto w-full max-w-[300px] sm:max-w-[340px] lg:max-w-[352px]">
            <AppScreenshot
              screen="invoiceDetail"
              size="fill"
              preload
              sizes="(min-width: 1024px) 352px, (min-width: 640px) 340px, 85vw"
            />
          </div>
        </div>
      </section>

      {/* Problem */}
      <Section as="section" tone="muted">
        <SectionHeading
          eyebrow="The problem"
          title="Random reminders rarely get you paid"
          description="When follow-ups are inconsistent, badly worded, or simply forgotten, overdue invoices drag on. Clients aren't sure how serious you are, and you're left guessing what to send next."
        />
        <div className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-3">
          {[
            {
              title: "Inconsistent wording",
              body: "Every reminder sounds different, so none of them carry real weight.",
            },
            {
              title: "Forgotten follow-ups",
              body: "Without a system, the next step slips and invoices quietly age out.",
            },
            {
              title: "Awkward escalation",
              body: "It's hard to know when to get firmer — so most people never do.",
            },
          ].map((item) => (
            <div key={item.title} className="border-t border-line-strong pt-5">
              <h3 className="text-base font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-body">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* How it works */}
      <Section as="section" className="scroll-mt-16" ariaLabelledby="how-heading">
        <div id="how-it-works" />
        <SectionHeading
          eyebrow="How it works"
          title="A clear path from overdue to resolved"
          as="h2"
        />
        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {HOW_IT_WORKS.map((step, index) => (
            <li key={step.title} className="flex h-full flex-col">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-sm font-semibold text-brand-fg">
                {index + 1}
              </span>
              <h3 className="mt-5 text-base font-semibold text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-body">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Escalation process — SCREENSHOT | TEXT */}
      <Section as="section" tone="tint">
        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1fr] lg:gap-16">
          <div className="lg:order-2">
            <SectionHeading
              eyebrow="The escalation ladder"
              title="Escalate professionally, one clear step at a time"
              description="Duesteer moves each overdue invoice through a structured sequence, so every message is appropriate to how late the payment is."
            />
            <div className="mt-8 max-w-xl">
              <EscalationLadder />
            </div>
            <p className="mt-8 max-w-xl rounded-card border border-line bg-surface p-4 text-sm leading-relaxed text-body">
              Duesteer guides the recovery process but does not provide legal
              advice. For legal questions, consult a qualified professional.
            </p>
          </div>
          <div className="lg:order-1">
            <AppScreenshot screen="escalation" size="lg" />
          </div>
        </div>
      </Section>

      {/* Feature highlights */}
      <Section as="section">
        <SectionHeading
          eyebrow="Features"
          title="Everything you need to follow up with confidence"
          description="Purpose-built tools for invoice recovery — no accounting-system complexity."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURE_HIGHLIGHTS.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
        <div className="mt-10">
          <CtaButton href="/features" variant="secondary">
            Explore all features
          </CtaButton>
        </div>
      </Section>

      {/* Who it is for */}
      <Section as="section" tone="muted">
        <SectionHeading
          eyebrow="Who it's for"
          title="Built for people who invoice their clients"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {AUDIENCES.map((audience) => (
            <div
              key={audience.title}
              className="rounded-card border border-line bg-surface p-6 shadow-card"
            >
              <h3 className="text-base font-semibold text-ink">
                {audience.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-body">
                {audience.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Privacy */}
      <Section as="section">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Privacy"
              title="Local-first by design"
              description="Duesteer keeps you in control of your data and your communications. Track unpaid invoices privately, without handing your books to another service."
            />
            <div className="mt-8">
              <CtaButton href="/privacy" variant="secondary">
                Read our privacy approach
              </CtaButton>
            </div>
          </div>
          <div className="rounded-panel border border-line bg-surface-tint p-6 sm:p-8">
            <ul className="flex flex-col gap-6">
              {[
                {
                  title: "Invoice data stays on your device",
                  body: "Your invoice details are stored locally — not in the cloud.",
                },
                {
                  title: "No accounting software required",
                  body: "Duesteer never asks you to connect accounting tools or bank accounts.",
                },
                {
                  title: "You control every message",
                  body: "You review and send each follow-up yourself. Nothing goes out automatically.",
                },
              ].map((item) => (
                <li key={item.title} className="flex gap-4">
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-surface text-brand-strong shadow-card">
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.75}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-body">
                      {item.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Pricing teaser */}
      <Section as="section" tone="muted">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple pricing that grows with you"
          description="Start free, upgrade when you need the full workflow."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <PricingCard
            name="Free"
            price="$0"
            period="forever"
            description={`Manage up to ${PRICING.freeInvoiceLimit} invoices.`}
            features={[
              `Up to ${PRICING.freeInvoiceLimit} invoices`,
              "Guided escalation workflow",
              "Professional email templates",
              "Basic notifications",
            ]}
            cta={
              <AppStoreButton variant="secondary" className="w-full" />
            }
          />
          <PricingCard
            name="Premium Monthly"
            price={PRICING.monthly}
            period="/ month"
            featured
            description="The full recovery workflow, billed monthly."
            features={[
              "Unlimited invoices",
              "Full escalation workflow",
              "Recovery history & PDF exports",
              "All client communication styles",
            ]}
            cta={<AppStoreButton className="w-full" />}
          />
          <PricingCard
            name="Premium Yearly"
            price={PRICING.yearly}
            period="/ year"
            description="The full workflow at the best value."
            features={[
              "Everything in Premium Monthly",
              "Best value for regular invoicing",
              "Priority access to improvements",
              "Recovery history & PDF exports",
            ]}
            cta={<AppStoreButton variant="secondary" className="w-full" />}
          />
        </div>
        <p className="mt-8 text-sm leading-relaxed text-muted">
          Subscriptions are managed through Apple. Pricing may vary by App Store
          region.{" "}
          <Link
            href="/pricing"
            className="font-medium text-brand-strong underline decoration-brand-line underline-offset-2 hover:decoration-brand"
          >
            Compare plans
          </Link>
        </p>
      </Section>

      {/* FAQ teaser */}
      <Section as="section" ariaLabelledby="faq-heading">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <SectionHeading
            eyebrow="FAQ"
            title="Questions, answered"
            description="A few of the things people ask most. See the full list on the FAQ page."
          />
          <div>
            <FaqAccordion items={FAQ_TEASER} />
            <div className="mt-6">
              <CtaButton href="/faq" variant="secondary">
                Read all FAQs
              </CtaButton>
            </div>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <section className="bg-ink-surface">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 text-center sm:px-6 lg:px-8 lg:py-24">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-on-ink text-balance sm:text-4xl">
            Take the guesswork out of getting paid
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-on-ink-muted text-pretty">
            Give every overdue invoice a clear next step. Download Duesteer and
            recover late payments with a process you can trust.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:items-start">
            <AppStoreButton size="lg" tone="dark" />
            <CtaButton href="/features" variant="secondary" size="lg">
              Explore Duesteer features
            </CtaButton>
          </div>
        </div>
      </section>
    </>
  );
}
