import type { Metadata } from "next";
import Link from "next/link";
import PageContainer from "@/components/PageContainer";
import Breadcrumbs from "@/components/Breadcrumbs";
import Prose from "@/components/Prose";
import AppStoreButton from "@/components/AppStoreButton";
import CtaButton from "@/components/CtaButton";
import { PRICING } from "@/lib/config";
import { formatReviewDate, getComparison } from "@/lib/comparisons";

const comparison = getComparison("duesteer-vs-chaser")!;

const META_DESCRIPTION =
  "Compare Duesteer and Chaser for overdue invoice recovery, including guided workflows, automation, disputes, integrations, payment collection and pricing.";

export const metadata: Metadata = {
  // `absolute` opts out of the root layout's "%s · Duesteer" template so the
  // brand isn't repeated, since the title already ends with it.
  title: {
    absolute: "Duesteer vs Chaser: Invoice Recovery Comparison | Duesteer",
  },
  description: META_DESCRIPTION,
  alternates: { canonical: `/compare/${comparison.slug}` },
  openGraph: {
    type: "article",
    title: "Duesteer vs Chaser: Invoice Recovery Comparison",
    description: META_DESCRIPTION,
    url: `/compare/${comparison.slug}`,
    modifiedTime: comparison.reviewed,
  },
};

/**
 * At-a-glance table rows. Kept as data so the table markup stays readable and
 * rows can be reordered without touching layout.
 */
const TABLE_ROWS: { area: string; duesteer: string; chaser: string }[] = [
  {
    area: "Best suited for",
    duesteer:
      "Freelancers, consultants, contractors and small service businesses handling a small number of overdue invoices.",
    chaser:
      "Small and mid-sized businesses, accountants and bookkeepers running receivables as an ongoing operation.",
  },
  {
    area: "Primary job",
    duesteer:
      "Guiding one person through the recovery of a specific overdue invoice.",
    chaser:
      "Automating accounts receivable activity across many invoices and customers.",
  },
  {
    area: "Core approach",
    duesteer: "Guided escalation with a recommended next action at each stage.",
    chaser:
      "Configurable chasing schedules that run on their own once set up.",
  },
  {
    area: "Invoice entry / data source",
    duesteer: "Entered manually and stored locally on your device.",
    chaser:
      "Synced from a connected accounting system, with API and CSV import also available.",
  },
  {
    area: "Guided escalation",
    duesteer:
      "A built-in ladder from friendly reminder through firm reminder, final notice, formal demand and external action.",
    chaser:
      "Schedules with pre-due and post-due steps built from follow-up templates.",
  },
  {
    area: "Automated reminders",
    duesteer:
      "None. Duesteer prompts you when a follow-up is due; you decide and send.",
    chaser:
      "Automated email and SMS reminders, plus scheduled text-to-speech Auto-call reminders.",
  },
  {
    area: "User involvement",
    duesteer: "You review and send every message yourself.",
    chaser:
      "Scheduled chasing runs without per-message input; AI-drafted replies are reviewed before sending.",
  },
  {
    area: "Email drafting",
    duesteer:
      "Prepares wording suited to the stage and relationship, which you edit and send from your own mail app.",
    chaser:
      "Follow-up templates, plus an AI email generator that drafts replies to incoming debtor emails inside Chaser.",
  },
  {
    area: "Dispute handling",
    duesteer:
      "Guided pause and resume, with the dispute kept in the invoice's recovery history.",
    chaser:
      "Invoices marked In Dispute with a reason and notes, with follow-ups then controlled through schedules and bulk workflows.",
  },
  {
    area: "Missed payment commitments",
    duesteer:
      "Promised dates are recorded, and a missed commitment becomes a recovery event that shapes the next step.",
    chaser:
      "An expected payment date suppresses chasing until that date, after which chasing resumes automatically if the invoice is still unpaid.",
  },
  {
    area: "Recovery history",
    duesteer:
      "Full history tied to the invoice, exportable as a PDF on Premium.",
    chaser:
      "Audit-ready timeline of correspondence, with reporting across the receivables ledger.",
  },
  {
    area: "Accounting integrations",
    duesteer: "None currently. Invoices are added manually.",
    chaser:
      "Xero, QuickBooks Online, Sage, NetSuite, Microsoft Dynamics 365 Business Central and others, plus an API and Zapier.",
  },
  {
    area: "Payment collection",
    duesteer: "Not offered.",
    chaser:
      "Chaser Pay portal supporting bank transfer, cards, Apple Pay, Google Pay and open banking.",
  },
  {
    area: "Multi-user / team workflows",
    duesteer: "Built for one person, with invoice data held on their device.",
    chaser:
      "Four users on Compact; unlimited users and multi-entity support on higher plans.",
  },
  {
    area: "iPhone / iPad experience",
    duesteer: "Native iPhone and iPad app.",
    chaser:
      "Web-based platform. Chaser's public documentation reviewed for this comparison does not describe a native iPhone or iPad app.",
  },
  {
    area: "Pricing",
    duesteer: `Free for up to two invoices; Premium ${PRICING.monthly}/month or ${PRICING.yearly}/year.`,
    chaser:
      "Compact starts at $259/month in the US, with Core and Complete priced higher.",
  },
];

const cell = "px-4 py-3 align-top sm:px-5";

export default function DuesteerVsChaserComparison() {
  return (
    <div className="bg-page py-12 sm:py-16 lg:py-20">
      <PageContainer>
        {/* ~68 characters per line — comfortable for long-form reading. */}
        <div className="mx-auto max-w-[calc(68ch+5rem)]">
          <Breadcrumbs
            className="mb-6"
            items={[
              { label: "Resources", href: "/resources" },
              { label: "Comparisons", href: "/compare" },
              { label: "Duesteer vs Chaser" },
            ]}
          />

          <article className="rounded-panel border border-line bg-surface px-6 py-10 shadow-card sm:px-10 sm:py-12">
            <header className="border-b border-line pb-8">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-brand-strong">
                Comparison
              </p>
              <h1 className="mt-3 text-3xl font-bold tracking-tight text-ink text-balance sm:text-4xl">
                {comparison.title}
              </h1>
              <p className="mt-4 text-sm text-muted">
                Last reviewed:{" "}
                <time dateTime={comparison.reviewed}>
                  {formatReviewDate(comparison.reviewed)}
                </time>
              </p>
              <p className="mt-6 text-lg leading-relaxed text-body text-pretty">
                Duesteer and Chaser both address late invoices, but they are
                built for very different types of users and workflows. This
                comparison explains where each product fits and when one may
                make more sense than the other.
              </p>
            </header>

            <Prose className="mt-8">
              <section>
                <h2>Duesteer vs Chaser at a glance</h2>
                <p>
                  Both products deal with money that has been invoiced and not
                  yet paid, but they solve that problem at different levels.
                </p>
                <p>
                  <strong>Duesteer</strong> is a guided recovery app for an
                  individual or a small service business. It assumes you already
                  have an overdue invoice and a client you know.
                </p>
                <p>
                  <strong>Chaser</strong> is an accounts receivable platform for
                  businesses managing receivables at scale, with automated
                  chasing across many customers and invoices at once.
                </p>
              </section>

              {/* Table sits outside Prose's text styling, so it's marked up
                  directly with tokens and scrolls horizontally on narrow
                  screens rather than squashing the columns. */}
              <div className="mt-6 overflow-x-auto rounded-card border border-line">
                <table className="w-full min-w-[44rem] border-collapse text-left text-sm">
                  <caption className="sr-only">
                    Feature and pricing comparison between Duesteer and Chaser
                  </caption>
                  <thead>
                    <tr className="bg-surface-muted">
                      <th scope="col" className={`${cell} font-semibold text-ink`}>
                        Area
                      </th>
                      <th scope="col" className={`${cell} font-semibold text-ink`}>
                        Duesteer
                      </th>
                      <th scope="col" className={`${cell} font-semibold text-ink`}>
                        Chaser
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {TABLE_ROWS.map((row) => (
                      <tr key={row.area} className="border-t border-line">
                        <th
                          scope="row"
                          className={`${cell} w-44 font-medium text-ink`}
                        >
                          {row.area}
                        </th>
                        <td className={`${cell} leading-relaxed text-body`}>
                          {row.duesteer}
                        </td>
                        <td className={`${cell} leading-relaxed text-body`}>
                          {row.chaser}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <section>
                <h2>What Duesteer is designed for</h2>
                <p>
                  Duesteer is for the person who has already sent an invoice,
                  watched the due date pass, and now has to decide what to do.
                  That usually comes down to a few questions:
                </p>
                <ul>
                  <li>When should the next follow-up go out?</li>
                  <li>How firmly should it be worded?</li>
                  <li>
                    What changes when a client gives a payment date and misses
                    it?
                  </li>
                  <li>How should a genuine dispute be handled?</li>
                  <li>
                    When is it reasonable to move to a final notice or seek
                    outside help?
                  </li>
                </ul>
                <p>
                  Duesteer answers those with a{" "}
                  <Link href="/features">guided escalation ladder</Link> and a
                  recommended next action for each invoice. It is not trying to
                  become an accounting suite or a full receivables system, so
                  there is no ledger to reconcile and nothing to connect before
                  you can use it.
                </p>
              </section>

              <section>
                <h2>What Chaser is designed for</h2>
                <p>
                  Chaser is an accounts receivable automation platform aimed at
                  small and mid-sized businesses, accountants and bookkeepers.
                  Its documentation describes chasing schedules that run once
                  configured, reminders by email, SMS and scheduled
                  text-to-speech Auto-call, syncing with accounting systems,
                  payment collection through Chaser Pay, and forecasting across
                  the receivables ledger.
                </p>
                <p>
                  That breadth is the point. A finance team chasing hundreds of
                  invoices cannot handle each one personally, and automation is
                  the realistic way to keep the process consistent. More
                  automation is not a weakness here; it is the right answer to a
                  different problem.
                </p>
              </section>

              <section>
                <h2>Guided recovery vs automated chasing</h2>
                <p>
                  This is the real difference between the two products, and it
                  matters more than any feature count.
                </p>
                <h3>Duesteer</h3>
                <p>
                  Duesteer works out which stage an invoice has reached and helps
                  you prepare wording that fits it, from a light nudge through to
                  a formal demand. You read the message, change what you want,
                  and send it from your own mail app. Invoice recovery data is
                  stored locally on your device, and Duesteer does not send
                  messages to clients automatically.
                </p>
                <h3>Chaser</h3>
                <p>
                  Chaser runs recurring receivables activity for you. Reminders
                  go out on a schedule across email, SMS and Auto-call, which
                  removes the need to chase invoice by invoice. People stay
                  involved where judgement is needed: its AI email generator
                  reads incoming debtor emails, detects intent such as a promise
                  to pay or a dispute, and drafts a reply that a user reviews and
                  edits before it is sent.
                </p>
                <p>
                  The better approach depends on the kind of recovery work you need to manage. Duesteer optimises
                  for control and context. Chaser optimises for consistency and
                  scale.
                </p>
              </section>

              <section>
                <h2>Disputes and missed payment commitments</h2>
                <p>
                  These two events change a recovery process more than anything
                  else, and they are where Duesteer does its most useful work.
                </p>
                <h3>Duesteer</h3>
                <p>
                  A real dispute changes what should happen next. Escalating
                  while a client genuinely disagrees about scope or quality
                  damages both your position and the relationship. Duesteer lets
                  you pause recovery while the disagreement is worked out, keeps
                  the dispute attached to the invoice, and lets you resume once it
                  is resolved rather than starting the sequence over.
                </p>
                <p>
                  Payment commitments work the same way. A promised payment date
                  is recorded and follow-ups hold until then. If the date passes
                  without payment, that missed commitment is recorded as a
                  recovery event in its own right, and the next suggested action
                  reflects it instead of repeating the same reminder as though
                  the promise was never made.
                </p>
                <p>
                  The result reads as a sequence of events rather than a pile of
                  reminders. When you later write a final notice, you have dates,
                  commitments and outcomes tied to the invoice, exportable as a
                  PDF on Premium.
                </p>
                <h3>Chaser</h3>
                <p>
                  Chaser documents both capabilities. An invoice can be marked In
                  Dispute with a reason and notes, then filtered, reported on,
                  moved onto a schedule that does not chase, or have follow-ups
                  stopped and restarted in bulk. An expected payment date can be
                  set on an invoice; chasing stops until that date passes and
                  resumes automatically if the invoice has not been paid or
                  reconciled in the connected accounting system.
                </p>
                <p>
                  So both products handle disputes and promised dates. The
                  difference is framing. Chaser treats them mainly as controls
                  over whether automated chasing should run. Duesteer treats them
                  as events that change what the next human decision should be.
                </p>
              </section>

              <section>
                <h2>Keeping the client relationship under your control</h2>
                <p>
                  Chasing an invoice is uncomfortable because two goals pull
                  against each other. You want to be paid, and you often want to
                  keep working with the client afterwards.
                </p>
                <p>
                  Duesteer supplies the structure, the timing and a draft, but
                  you decide what is sent. If a client has been reliable for three
                  years and this is their first late invoice, you can soften a
                  message. If the same client has missed multiple payment
                  commitments, that history gives you important context when
                  deciding how firmly to proceed.
                </p>
                <p>
                  This matters most where the person who delivered the work also
                  manages the relationship, the normal situation for consultants,
                  freelancers and small service businesses.
                </p>
              </section>

              <section>
                <h2>Integrations, setup and payments</h2>
                <p>
                  Duesteer does not currently integrate with Xero, QuickBooks or
                  other accounting platforms, and it does not collect invoice
                  payments. Invoices are entered manually, so setup takes a few
                  minutes with nothing to connect or authorise, and clients pay
                  you the way they always have. That suits someone tracking a
                  small number of overdue invoices.
                </p>
                <p>
                  Chaser is built the other way, and for its audience that is an
                  advantage. It connects to Xero, QuickBooks Online, Sage,
                  NetSuite and Microsoft Dynamics 365 Business Central among
                  others, syncing invoice and payment data so nobody retypes it.
                  Chaser Pay adds a payment portal reached from a link in its
                  reminders, supporting bank transfer, cards, Apple Pay, Google
                  Pay and open banking. For a finance team, both are real reasons
                  to choose a platform like Chaser.
                </p>
              </section>

              <section>
                <h2>Pricing</h2>
                <p>
                  Duesteer is free for up to two invoices. Premium costs{" "}
                  {PRICING.monthly} per month or {PRICING.yearly} per year,
                  billed through Apple, with details on the{" "}
                  <Link href="/pricing">pricing page</Link>.
                </p>
                <p>
                  Chaser Compact starts at $259/month in the US as of August 7,
                  2026, covering four users, thirty follow-up templates and four
                  automated receivables workflows. Core and Complete are priced
                  higher and add unlimited users, multi-entity support and, on
                  Complete, a receivables forecast. Plans and prices change, so
                  check{" "}
                  <a
                    href="https://www.chaserhq.com/chaser-pricing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Chaser&apos;s official pricing page
                  </a>{" "}
                  for current figures.
                </p>
                <p>
                  The two figures are not directly comparable. Chaser&apos;s
                  pricing reflects a platform bought by a business with a
                  receivables function and several people using it, while
                  Duesteer&apos;s reflects an app bought by one person managing
                  their own overdue invoices.
                </p>
              </section>

              <section>
                <h2>When Duesteer may be the stronger fit</h2>
                <ul>
                  <li>
                    You are a freelancer, consultant, contractor or small service
                    business.
                  </li>
                  <li>
                    You personally manage a relatively small number of overdue
                    invoices.
                  </li>
                  <li>
                    You want guidance and control rather than automated chasing.
                  </li>
                  <li>
                    Disputes and missed payment commitments matter to how you
                    handle an account.
                  </li>
                  <li>
                    You do not need accounting integrations or integrated payment
                    collection.
                  </li>
                </ul>
              </section>

              <section>
                <h2>When Chaser may be the stronger fit</h2>
                <ul>
                  <li>
                    Your business manages receivables across many customers or
                    invoices.
                  </li>
                  <li>
                    You want recurring reminders to run automatically across
                    email, SMS or phone.
                  </li>
                  <li>Several people are involved in managing receivables.</li>
                  <li>
                    You need accounting integrations and integrated payment
                    collection.
                  </li>
                  <li>
                    You need broader AR reporting, forecasting or team workflows.
                  </li>
                </ul>
              </section>

              <div>
                <h2>Final verdict</h2>
                <p>
                  The choice depends less on which product has more features and
                  more on the job you need done.
                </p>
                <p>
                  Choose Duesteer when you want a guided recovery process for a
                  manageable number of invoices and prefer to stay personally
                  involved in what gets said to your clients. Its value is the
                  structure, timing, context and evidence it puts around a
                  difficult process, without automating the client relationship
                  away.
                </p>
                <p>
                  Choose Chaser when you need to automate receivables across a
                  larger operation, connect accounting systems and collect
                  payment. Duesteer is not intended to replace a full AR platform
                  for a business already running one. For an individual or small
                  service business managing a smaller number of overdue invoices,
                  Duesteer provides the focused recovery workflow without
                  requiring a full AR platform.
                </p>
              </div>

              <div>
                <h2>Information sources</h2>
                <p>
                  Chaser feature and pricing information in this comparison was
                  reviewed from Chaser&apos;s official website and help
                  documentation on August 7, 2026. Competitor features and
                  pricing change, so check the current pages before making a
                  decision.
                </p>
                <ul>
                  <li>
                    <a
                      href="https://www.chaserhq.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Chaser homepage
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.chaserhq.com/chaser-pricing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Chaser pricing
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.chaserhq.com/integrations"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Chaser integrations
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.chaserhq.com/features/ai-email-generator"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Chaser AI email generator
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.chaserhq.com/features/chaser-pay"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Chaser Pay
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://help.chaserhq.com/invoice-dispute-marking"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Chaser help centre: mark disputed invoices
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://help.chaserhq.com/stop-or-pause-chasing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Chaser help centre: stop or pause chasing
                    </a>
                  </li>
                </ul>
              </div>
            </Prose>

            <div className="mt-8 rounded-card border border-line bg-surface-tint p-6 sm:p-8">
              <p className="text-base font-semibold text-ink">
                Want a guided approach to invoice recovery?
              </p>
              <p className="mt-2 text-sm leading-relaxed text-body">
                If you manage overdue invoices yourself and want a clear next
                step while keeping control of client communication, Duesteer
                provides a guided recovery workflow on iPhone and iPad.
              </p>
              <div className="mt-5">
                <AppStoreButton size="lg" />
              </div>
            </div>

            <Prose className="mt-8">
              <section>
                <h2>Related reading</h2>
                <p>
                  For the recovery process itself, independent of any app, see
                  the guide on{" "}
                  <Link href="/guides/recover-overdue-invoice">
                    recovering an overdue invoice
                  </Link>
                  . The <Link href="/faq">FAQ</Link> covers how Duesteer handles
                  disputes, payment commitments and data storage.
                </p>
              </section>
            </Prose>

            <footer className="mt-10 flex flex-col gap-3 border-t border-line pt-8 sm:flex-row">
              <CtaButton href="/compare" variant="secondary">
                Back to all comparisons
              </CtaButton>
              <CtaButton href="/resources" variant="secondary">
                Browse all resources
              </CtaButton>
            </footer>
          </article>
        </div>
      </PageContainer>
    </div>
  );
}
