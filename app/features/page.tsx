import type { Metadata } from "next";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import EscalationLadder from "@/components/EscalationLadder";
import AppStoreButton from "@/components/AppStoreButton";
import AppScreenshot from "@/components/AppScreenshot";
import { FeatureIcon } from "@/components/FeatureCard";
import type { ScreenshotKey } from "@/lib/screenshots";

export const metadata: Metadata = {
  // `absolute` opts out of the root layout's "%s · Duesteer" template so the
  // brand isn't repeated — the title already leads with it.
  title: {
    absolute: "DueSteer Features | Invoice Recovery and Dispute Management",
  },
  description:
    "See how DueSteer helps freelancers manage overdue invoices, pause escalation during disputes, track payment commitments, and continue recovery with a clear process.",
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
    eyebrow: "Client behaviour context",
    title: "Track disputes and missed commitments",
    icon: "pause",
    body: "DueSteer keeps a running record of disputes and missed payment commitments on each invoice, so every follow-up reflects what has already happened.",
    points: [
      "See disputes and missed commitments at a glance",
      "Keep the complete escalation history with the invoice",
      "Continue with the appropriate tone and next step",
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
];

/**
 * The three phases of the dispute workflow, rendered as H3 steps inside the
 * single `#invoice-dispute-management` section. Rows alternate on desktop and
 * stack heading → copy → screenshot on mobile.
 */
const DISPUTE_STEPS: {
  caption: string;
  title: string;
  body: string;
  points: string[];
  screen: ScreenshotKey;
}[] = [
  {
    caption: "1. Mark as disputed",
    title: "Mark the invoice as disputed",
    body: "When a client challenges the amount, scope, or work completed, mark the invoice as disputed and pause its active recovery workflow.",
    points: [
      "Mark the invoice as disputed",
      "Pause the current escalation workflow",
      "Preserve the existing recovery stage and history",
    ],
    screen: "disputeSelection",
  },
  {
    caption: "2. Recovery stays paused",
    title: "Keep the recovery workflow paused",
    body: "The invoice clearly shows that escalation is paused while the issue is being reviewed. Its details and complete recovery history remain available.",
    points: [
      "See the dispute status directly on Invoice Details",
      "Pause reminders and next-step prompts",
      "Keep the complete recovery history intact",
    ],
    screen: "disputePaused",
  },
  {
    caption: "3. Record the outcome",
    title: "Record the outcome and choose what happens next",
    body: "Once the client responds, record whether they paid, promised payment, or declined. DueSteer then helps you take the appropriate next step.",
    points: [
      "Mark the invoice as paid when payment is received",
      "Set a follow-up date when payment is promised",
      "Continue recovery when the invoice remains unpaid",
    ],
    screen: "disputeResolved",
  },
];

/** Checked supporting points, matching the list style used above. */
function PointsList({ points }: { points: string[] }) {
  return (
    <ul className="mt-6 flex max-w-xl flex-col gap-3">
      {points.map((point) => (
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
  );
}

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

      {/*
        Invoice dispute workflow — one section, three H3 steps. Rendered as
        alternating rows rather than three phones side by side so the screen
        text stays readable. All copy is server-rendered; nothing is hidden
        behind tabs or a carousel.
      */}
      <Section
        as="section"
        id="invoice-dispute-management"
        tone="muted"
        className="scroll-mt-16"
      >
        <SectionHeading
          eyebrow="Invoice dispute management"
          title="Manage invoice disputes without losing recovery progress"
          description="When a client challenges an invoice, DueSteer lets you pause the recovery workflow, preserve the invoice's history, and record the outcome before deciding what happens next."
        />
        <div className="mt-14 flex flex-col gap-14 lg:gap-20">
          {DISPUTE_STEPS.map((step, index) => {
            const flipped = index % 2 === 1;
            return (
              <div
                key={step.caption}
                className="grid items-center gap-10 lg:grid-cols-[1fr_0.8fr] lg:gap-16"
              >
                <div className={flipped ? "lg:order-2" : ""}>
                  <span
                    aria-hidden="true"
                    className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-brand text-sm font-semibold text-brand-fg"
                  >
                    {index + 1}
                  </span>
                  <h3 className="text-xl font-semibold tracking-tight text-ink text-balance sm:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-4 max-w-xl leading-relaxed text-body text-pretty">
                    {step.body}
                  </p>
                  <PointsList points={step.points} />
                </div>
                <figure className={flipped ? "lg:order-1" : ""}>
                  <AppScreenshot screen={step.screen} size="lg" />
                  <figcaption className="mt-4 text-center text-sm text-muted">
                    {step.caption}
                  </figcaption>
                </figure>
              </div>
            );
          })}
        </div>
      </Section>

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
