import type { Metadata } from "next";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import EscalationLadder from "@/components/EscalationLadder";
import AppStoreButton from "@/components/AppStoreButton";
import AppScreenshot from "@/components/AppScreenshot";
import { FeatureIcon } from "@/components/FeatureCard";
import type { ScreenshotKey } from "@/lib/screenshots";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore DueSteer's features for invoice recovery: overdue invoice tracking, a guided escalation ladder, client communication styles, dispute handling, payment-promise tracking, recovery history, notifications, PDF reports, and local-first storage.",
  alternates: { canonical: "/features" },
};

type FeatureSection = {
  id: string;
  eyebrow: string;
  title: string;
  icon: string;
  body: string;
  points: string[];
  /** Real app screenshot shown alongside this section (see lib/screenshots.ts). */
  screen: ScreenshotKey;
};

const SECTIONS: FeatureSection[] = [
  {
    id: "tracking",
    eyebrow: "Stay organised",
    title: "Overdue invoice tracking",
    icon: "status",
    body: "Add each unpaid invoice with its client, amount, and due date, then see exactly where it stands. DueSteer keeps every overdue invoice in one clear list so nothing gets forgotten.",
    points: [
      "See which invoices are on track, waiting, disputed, or resolved",
      "Sort and scan overdue invoices at a glance",
      "Add invoices manually — no bank or accounting connection needed",
    ],
    screen: "invoiceList",
  },
  {
    id: "escalation",
    eyebrow: "Recover professionally",
    title: "Guided escalation stages",
    icon: "ladder",
    body: "Every invoice moves through a clear ladder of recovery stages, from a friendly reminder to a formal demand. DueSteer recommends the right next action based on where the invoice sits.",
    points: [
      "A structured sequence instead of one-off reminders",
      "A recommended next step for each invoice",
      "Escalate at a measured, professional pace",
    ],
    screen: "escalation",
  },
  {
    id: "communication",
    eyebrow: "Say the right thing",
    title: "Client communication styles",
    icon: "chat",
    body: "Generate reminder and escalation emails with wording that fits the relationship and the stage. You review each message and send it yourself from your own email app.",
    points: [
      "Choose a tone from friendly to firm to formal",
      "Professional templates you can edit before sending",
      "You stay in control — nothing is sent automatically",
    ],
    screen: "emailDraft",
  },
  {
    id: "disputes",
    eyebrow: "Handle the exceptions",
    title: "Dispute handling",
    icon: "pause",
    body: "When a client disputes an invoice, pause recovery for that invoice and keep a record of the dispute. Resume the process when the dispute is resolved.",
    points: [
      "Pause follow-ups on disputed invoices",
      "Keep a record of what was disputed and when",
      "Track resolved disputes over time",
    ],
    screen: "invoiceDetail",
  },
  {
    id: "promises",
    eyebrow: "Hold the line",
    title: "Payment promise tracking",
    icon: "history",
    body: "Log a client's promise to pay and pause follow-ups until the promised date. If the promise is broken, DueSteer helps you pick the process back up right where you left off.",
    points: [
      "Record promised payment dates",
      "Pause recovery until the promise is due",
      "Track broken payment promises",
    ],
    screen: "paymentPromise",
  },
  {
    id: "history",
    eyebrow: "Keep the record",
    title: "Recovery history",
    icon: "document",
    body: "DueSteer keeps a running history of every reminder, dispute, and promise for each invoice, so you always know what happened and when.",
    points: [
      "A timeline of actions for each invoice",
      "See resolved disputes and broken promises",
      "Understand what worked for next time",
    ],
    screen: "recoveryHistory",
  },
  {
    id: "notifications",
    eyebrow: "Never miss a step",
    title: "Notifications",
    icon: "bell",
    body: "Get reminded when it's time to take the next action, so overdue invoices keep moving toward resolution instead of stalling.",
    points: [
      "Timely reminders for the next recovery step",
      "Stay on top of follow-ups without a spreadsheet",
      "Reduce forgotten, aging invoices",
    ],
    screen: "notifications",
  },
  {
    id: "pdf",
    eyebrow: "Share cleanly",
    title: "PDF reports",
    icon: "document",
    body: "Export a clean recovery history PDF for any invoice — handy for your own records or to share with an accountant.",
    points: [
      "Export a professional recovery history",
      "Keep records for your own bookkeeping",
      "Share a clear summary when you need to",
    ],
    screen: "pdfReport",
  },
  {
    id: "local",
    eyebrow: "Private by default",
    title: "Local-first storage",
    icon: "lock",
    body: "Your invoice data is stored locally on your device. No cloud account is required to track invoices, and DueSteer doesn't store your invoice details in the cloud.",
    points: [
      "Invoice data stays on your device",
      "No account required for core invoice tracking",
      "You decide what to send and to whom",
    ],
    screen: "privacy",
  },
];

export default function FeaturesPage() {
  return (
    <>
      <Section as="section" tone="muted" className="pb-10">
        <SectionHeading
          as="h1"
          eyebrow="Features"
          title="A complete toolkit for invoice recovery"
          description="DueSteer gives every overdue invoice a clear next step — from the first friendly reminder through to a formal demand — while keeping your data on your device."
          align="center"
        />
        <div className="mt-8 flex justify-center">
          <AppStoreButton size="lg" />
        </div>
      </Section>

      {/* One large section per feature, alternating text | screenshot. */}
      {SECTIONS.map((section, index) => {
        const flipped = index % 2 === 1;
        return (
          <Section
            as="section"
            key={section.id}
            tone={flipped ? "surface" : "muted"}
            className="scroll-mt-16"
          >
            <div id={section.id} />
            <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.8fr] lg:gap-16">
              <div className={flipped ? "lg:order-2" : ""}>
                <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft text-brand-strong">
                  <FeatureIcon name={section.icon} />
                </span>
                <SectionHeading
                  eyebrow={section.eyebrow}
                  title={section.title}
                  description={section.body}
                />
                <ul className="mt-8 flex max-w-xl flex-col gap-3">
                  {section.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-sm leading-relaxed text-ink/85"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={flipped ? "lg:order-1" : ""}>
                <AppScreenshot screen={section.screen} size="lg" />
              </div>
            </div>
          </Section>
        );
      })}

      {/* Escalation ladder detail */}
      <Section as="section" tone="tint">
        <SectionHeading
          eyebrow="The escalation ladder"
          title="Five clear stages of recovery"
          description="DueSteer guides each invoice through these stages. It structures the process but does not provide legal advice."
        />
        <div className="mt-10 max-w-2xl">
          <EscalationLadder />
        </div>
      </Section>

      {/* Clarity: what DueSteer does not do */}
      <Section as="section">
        <SectionHeading
          eyebrow="Clarity"
          title="What DueSteer doesn't do"
          description="We keep the product honest and focused. DueSteer intentionally leaves these outside its scope."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {[
            "Send emails on your behalf automatically",
            "Connect to your bank accounts",
            "Connect to accounting software",
            "Guarantee that an invoice will be paid",
            "Provide legal, financial, or tax advice",
            "Store your invoice data in the cloud",
          ].map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-card border border-line bg-surface p-4 text-sm leading-relaxed text-body"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="mt-0.5 h-5 w-5 flex-shrink-0 text-muted"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M15 9l-6 6M9 9l6 6" />
              </svg>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
