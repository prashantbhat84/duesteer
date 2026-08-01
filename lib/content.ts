/**
 * Shared, structured content used across pages so copy stays consistent.
 * Kept free of any unsupported product claims (no auto-sending, no bank/
 * accounting connections, no AI, no cloud storage, no payment guarantees).
 */

export type Step = {
  title: string;
  description: string;
};

export const HOW_IT_WORKS: Step[] = [
  {
    title: "Add an overdue invoice",
    description:
      "Enter the client, amount, and due date for an unpaid invoice. Everything stays on your device.",
  },
  {
    title: "Review the recommended next action",
    description:
      "DueSteer looks at where the invoice sits in the recovery process and suggests the right next step.",
  },
  {
    title: "Send the professional follow-up",
    description:
      "Generate a clear, appropriately worded reminder or escalation email and send it from your own email app.",
  },
  {
    title: "Track responses, disputes, and outcomes",
    description:
      "Log replies, disputes, and payment promises so you always know each invoice's real status.",
  },
];

export type Feature = {
  title: string;
  description: string;
  /** Simple inline-SVG icon key rendered by the FeatureCard icon set. */
  icon: string;
};

export const FEATURE_HIGHLIGHTS: Feature[] = [
  {
    title: "Guided escalation ladder",
    description:
      "Move each invoice through a clear sequence of stages instead of improvising every follow-up.",
    icon: "ladder",
  },
  {
    title: "Client-aware communication",
    description:
      "Choose a tone that fits the relationship, from a friendly nudge to a formal demand.",
    icon: "chat",
  },
  {
    title: "Disputes and payment commitments",
    description:
      "Pause recovery when a client disputes an invoice or promises to pay, then continue at the appropriate time.",
    icon: "pause",
  },
  {
    title: "Recovery history",
    description:
      "Keep a running record of every reminder, dispute, and promise for each invoice.",
    icon: "history",
  },
  {
    title: "PDF export",
    description:
      "Export a clean recovery history PDF for your records or to share with an accountant.",
    icon: "document",
  },
  {
    title: "Local-first privacy",
    description:
      "Invoice data is stored locally on your device — no cloud account required to track invoices.",
    icon: "lock",
  },
  {
    title: "Smart reminders",
    description:
      "Get notified when it's time to follow up so overdue invoices don't slip through the cracks.",
    icon: "bell",
  },
  {
    title: "Clear invoice status",
    description:
      "See at a glance which invoices are on track, waiting, disputed, or resolved.",
    icon: "status",
  },
];

export type EscalationStage = {
  name: string;
  description: string;
};

export const ESCALATION_STAGES: EscalationStage[] = [
  {
    name: "Friendly Reminder",
    description:
      "A light, polite nudge that assumes the invoice was simply overlooked.",
  },
  {
    name: "Firm Reminder",
    description:
      "A clear, professional message that restates the amount and the due date.",
  },
  {
    name: "Final Notice",
    description:
      "A direct notice that payment is now significantly overdue and needs attention.",
  },
  {
    name: "Formal Demand",
    description:
      "A formal, businesslike demand for payment with the outstanding details spelled out.",
  },
  {
    name: "External Action",
    description:
      "A prompt to consider outside options. DueSteer guides the step but does not provide legal advice.",
  },
];

export const AUDIENCES: { title: string; description: string }[] = [
  {
    title: "Freelancers",
    description:
      "Chase late payments professionally without spending your evenings drafting awkward emails.",
  },
  {
    title: "Consultants",
    description:
      "Keep engagements on solid financial footing with consistent, structured follow-ups.",
  },
  {
    title: "Contractors",
    description:
      "Recover payment for completed work with clear escalation steps you can rely on.",
  },
  {
    title: "Agencies",
    description:
      "Keep overdue client invoices moving through a consistent, professional recovery process.",
  },
  {
    title: "Small service businesses",
    description:
      "Stay on top of overdue invoices without adding heavy accounting software.",
  },
];

export type Faq = {
  question: string;
  answer: string;
};

export const FAQS: Faq[] = [
  {
    question: "What is DueSteer?",
    answer:
      "DueSteer is an iOS app that helps you recover overdue invoices with a clear, professional escalation process. Instead of sending random reminders, you follow a guided ladder of steps and generate appropriate follow-up emails.",
  },
  {
    question: "Who is it for?",
    answer:
      "DueSteer is built for freelancers, consultants, contractors, agencies, and small service businesses — anyone who invoices clients and occasionally has to chase late payments.",
  },
  {
    question: "Does DueSteer send emails automatically?",
    answer:
      "No. DueSteer helps you generate professional reminder and escalation emails, but you review and send them yourself from your own email app. You stay in full control of every message.",
  },
  {
    question: "Does DueSteer connect to accounting software?",
    answer:
      "No. DueSteer does not connect to accounting software, bank accounts, or payment processors. You add invoices manually, which keeps your data self-contained and under your control.",
  },
  {
    question: "Where is invoice data stored?",
    answer:
      "Invoice data is stored locally on your device. DueSteer does not require a cloud account to track invoices, and your invoice details are not stored in the cloud.",
  },
  {
    question: "Does DueSteer provide legal advice?",
    answer:
      "No. DueSteer guides you through a structured recovery process and can prompt you to consider external action, but it does not provide legal, financial, or accounting advice. For legal questions, consult a qualified professional.",
  },
  {
    question: "Can I pause recovery if a client disputes an invoice?",
    answer:
      "Yes. If a client disputes an invoice, you can pause the recovery process for that invoice, keep a record of the dispute, and resume when it's resolved.",
  },
  {
    question: "What happens if a client promises to pay?",
    answer:
      "You can log a payment promise and pause follow-ups until the promised date. If the promise is broken, DueSteer helps you pick the process back up where you left off.",
  },
  {
    question: "Can I export invoice recovery history?",
    answer:
      "Yes. Premium lets you export a recovery history PDF for any invoice — useful for your own records or to share with an accountant.",
  },
  {
    question: "Is DueSteer available on Android?",
    answer:
      "DueSteer is currently an iOS app. There is no Android version at this time.",
  },
  {
    question: "How much does DueSteer cost?",
    answer:
      "DueSteer is free to manage up to 2 invoices. Premium is $9.99 per month or $59.99 per year. Subscriptions are handled through Apple, and pricing may vary by country or region.",
  },
  {
    question: "How do I contact support?",
    answer:
      "You can email the DueSteer team at duesteer.app@gmail.com. See the Support page for help with bugs, feature requests, and billing questions.",
  },
];

/** A short subset of FAQs used for the homepage teaser. */
export const FAQ_TEASER = FAQS.slice(0, 5);
