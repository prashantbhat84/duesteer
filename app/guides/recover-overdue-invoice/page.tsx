import type { Metadata } from "next";
import Link from "next/link";
import PageContainer from "@/components/PageContainer";
import Breadcrumbs from "@/components/Breadcrumbs";
import Prose from "@/components/Prose";
import AppStoreButton from "@/components/AppStoreButton";
import CtaButton from "@/components/CtaButton";
import { formatGuideDate, getGuide } from "@/lib/guides";

const guide = getGuide("recover-overdue-invoice")!;

const META_DESCRIPTION =
  "Learn how to recover an overdue invoice using friendly reminders, firm follow-ups, final notices, and formal action without damaging client relationships.";

export const metadata: Metadata = {
  // `absolute` opts out of the root layout's "%s · Duesteer" template so the
  // brand isn't repeated, since the title already ends with it.
  title: {
    absolute: "How to Recover an Overdue Invoice Professionally | Duesteer",
  },
  description: META_DESCRIPTION,
  alternates: { canonical: `/guides/${guide.slug}` },
  openGraph: {
    type: "article",
    title: "How to Recover an Overdue Invoice Professionally",
    description: META_DESCRIPTION,
    url: `/guides/${guide.slug}`,
    publishedTime: guide.published,
  },
};

export default function RecoverOverdueInvoiceGuide() {
  return (
    <div className="bg-page py-12 sm:py-16 lg:py-20">
      <PageContainer>
        {/* ~68 characters per line — comfortable for long-form reading. */}
        <div className="mx-auto max-w-[calc(68ch+5rem)]">
          <Breadcrumbs
            className="mb-6"
            items={[
              { label: "Resources", href: "/resources" },
              { label: "Guides", href: "/guides" },
              { label: "How to Recover an Overdue Invoice" },
            ]}
          />

          <article className="rounded-panel border border-line bg-surface px-6 py-10 shadow-card sm:px-10 sm:py-12">
            <header className="border-b border-line pb-8">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-brand-strong">
                Guide
              </p>
              <h1 className="mt-3 text-3xl font-bold tracking-tight text-ink text-balance sm:text-4xl">
                {guide.title}
              </h1>
              <p className="mt-4 text-sm text-muted">
                Published{" "}
                <time dateTime={guide.published}>
                  {formatGuideDate(guide.published)}
                </time>
              </p>
              <p className="mt-6 text-lg leading-relaxed text-body text-pretty">
                {guide.description}
              </p>
            </header>

            <Prose className="mt-8">
              <section>
                <p>
                  An invoice that has just passed its due date is usually not a
                  crisis. Payment may be waiting for approval, scheduled for the
                  next finance run, or sitting unnoticed in an inbox. The
                  important part is what you do next.
                </p>
                <p>
                  Without a clear process, people often wait too long and then
                  send a message that is much sharper than intended. A simple
                  sequence helps you follow up on time, keep the tone
                  professional, and build a record of what happened.
                </p>
                <p>
                  The steps below are a practical starting point for
                  freelancers, consultants, contractors, and small agencies.
                  Adjust the timing to your contract, invoice terms, client
                  relationship, local rules, and the facts of the case. This is
                  general information, not legal advice.
                </p>
              </section>

              <section>
                <h2>Before following up: verify the invoice details</h2>
                <p>
                  Spend five minutes confirming the invoice is correct and
                  genuinely past due. Nothing undermines a follow-up faster than
                  a client replying that the terms were 45 days rather than 30,
                  or that they paid a week ago.
                </p>
                <ul>
                  <li>
                    The payment terms and due date, including whether terms run
                    from the invoice date or from receipt.
                  </li>
                  <li>
                    Who actually received it. Your day-to-day contact is often
                    not the person who releases payment.
                  </li>
                  <li>
                    Any purchase order or reference number the client&apos;s
                    system needs before an invoice can be processed.
                  </li>
                  <li>
                    Bank details, currency, and tax lines. A single wrong digit
                    can hold a payment for weeks.
                  </li>
                  <li>
                    Whether the money has already arrived and simply
                    hasn&apos;t been matched up.
                  </li>
                </ul>
                <p>
                  If something is wrong, correct and reissue it with a short,
                  neutral note, and treat the corrected invoice as your new
                  starting point.
                </p>
              </section>

              <section>
                <h2>Step 1: Send a friendly payment reminder</h2>
                <p>
                  The first message goes out shortly after the due date passes,
                  and it should assume oversight rather than avoidance. Most of
                  the time that assumption is correct, and it costs nothing to
                  be right about it.
                </p>
                <p>
                  Keep it short and factual. Include the invoice number, the
                  amount, the due date, and how to pay, and attach a copy so
                  nobody has to search for one. Make one specific ask:
                  &ldquo;could you confirm the payment date?&rdquo; produces a
                  far more useful reply than &ldquo;just following up.&rdquo;
                </p>
                <p>
                  Closing with &ldquo;let me know if you need anything from me
                  to get this processed&rdquo; gives the client an easy way to
                  name the real obstacle. It is often a missing PO number, an
                  approver on leave, or an address that changed.
                </p>
              </section>

              <section>
                <h2>Step 2: Follow up after no response</h2>
                <p>
                  Silence after a first reminder usually isn&apos;t refusal. The
                  message probably didn&apos;t reach the person who can release
                  the payment. For the second follow-up, widen the circle while
                  keeping the same measured tone. Consider copying accounts
                  payable or contacting the person responsible for approving
                  payment.
                </p>
                <p>
                  Reply in the same thread so the history stays visible, and
                  consider adding accounts payable or picking up the phone. A
                  two-minute call often surfaces what a week of email cannot.
                </p>
                <p>
                  Keep the tone neutral but add specificity: reference the date
                  of the first reminder, restate the amount, and ask again for a
                  payment date rather than a general update. You are also
                  building a record that should read as calm and professional if
                  anyone else sees it.
                </p>
              </section>

              <section>
                <h2>Step 3: Send a firm reminder</h2>
                <p>
                  By this point the invoice is well beyond terms and at least
                  two messages have gone unanswered. The tone shifts from
                  helpful to businesslike: state the facts, state what you need,
                  and state a date by which you need it.
                </p>
                <p>
                  Drop the softeners. &ldquo;Sorry to chase&rdquo; signals that
                  the request is negotiable. Being direct here is reasonable,
                  since you are asking to be paid for work already delivered.
                </p>
                <p>
                  Only mention consequences you are prepared and entitled to
                  use. Depending on the agreement, that may include pausing
                  work, withholding further delivery, or applying a late fee
                  already stated in the contract. Do not invent penalties or
                  quote rules you have not checked.
                </p>
              </section>

              <section>
                <h2>Step 4: Issue a final notice</h2>
                <p>
                  A final notice ends the routine reminder stage. Include the
                  invoice details, the dates of earlier messages, the amount
                  outstanding, a payment deadline, and the action you may take
                  if that deadline passes.
                </p>
                <p>
                  Keep the tone plain and unemotional. You may later need to
                  show this message to a third party, so clarity matters more
                  than forceful language. For larger amounts, a postal copy
                  alongside the email is a reasonable precaution.
                </p>
                <p>
                  Whether a final notice needs particular wording or a minimum
                  notice period depends on your contract and jurisdiction, so
                  check before you rely on it as a formal step.
                </p>
              </section>

              <section>
                <h2>Step 5: Consider a formal demand or external help</h2>
                <p>
                  If the final deadline passes without payment or a credible
                  explanation, the options move outside your own correspondence.
                  Depending on where you operate and what your agreement says,
                  those typically include a formal demand letter prepared by a
                  lawyer, a debt recovery service, mediation, or a small claims
                  process.
                </p>
                <p>
                  Weigh the cost, the time, the likely recovery, and whether the
                  relationship is worth preserving. For smaller balances the
                  expense of a claim can exceed the invoice itself. Even when
                  formal recovery is not worthwhile, make a deliberate decision
                  rather than allowing the invoice to remain unresolved
                  indefinitely.
                </p>
                <p>
                  Before this stage, assemble the file: the contract or
                  statement of work, the invoice, evidence that the work was
                  delivered and accepted, and the full trail of correspondence.
                  A chronological record is the most useful thing you can hand
                  to anyone acting on your behalf. Take advice appropriate to
                  your jurisdiction before starting formal action.
                </p>
              </section>

              <section>
                <h2>What to do when the client disputes the invoice</h2>
                <p>
                  A genuine dispute over scope, quality, or amount changes the
                  process. Continuing to escalate while a real disagreement is
                  unresolved weakens both your position and the relationship.
                </p>
                <p>
                  Pause the sequence and deal with the substance. Ask for the
                  objection in writing and in specific terms, compare it against
                  what was agreed, and respond with evidence rather than
                  argument. If only part is contested, ask for the undisputed
                  portion to be paid while the rest is worked out.
                </p>
                <p>
                  Once it is resolved, record the outcome and resume from a
                  sensible stage rather than starting over. An objection that
                  appears for the first time only after several ignored
                  reminders still deserves a factual answer, but it tells you
                  something about how the account is being managed.
                </p>
              </section>

              <section>
                <h2>
                  What to do when the client promises a payment date and misses
                  it
                </h2>
                <p>
                  When a client gives a payment date, confirm the date and
                  amount in a short email, then pause follow-up until that date.
                  Continuing to chase during an agreed waiting period adds
                  friction without helping.
                </p>
                <p>
                  If the date passes without payment, follow up within a day or
                  two and refer to the specific commitment. A missed commitment
                  is a reason to move the process forward rather than repeating
                  the same reminder.
                </p>
                <p>
                  Treat a second promise with more scepticism than the first. It
                  is reasonable to ask for part of the balance now, or a short
                  payment plan in writing, rather than another open-ended
                  assurance. For a fuller walkthrough, see{" "}
                  <Link href="/guides/client-missed-payment-promise">
                    what to do when a client misses a promised payment date
                  </Link>
                  .
                </p>
              </section>

              <section>
                <h2>Common invoice recovery mistakes</h2>
                {/*
                  Each item keeps an explicit {" "} after the bold lead-in so
                  the space survives if the JSX is ever re-wrapped.
                */}
                <ul>
                  <li>
                    <strong>Waiting too long to start.</strong>{" "}
                    Every week of silence makes the conversation harder and the
                    record thinner.
                  </li>
                  <li>
                    <strong>Escalating straight to a threat.</strong>{" "}
                    A legal warning over a few days&apos; delay can end a
                    working relationship over an administrative hiccup.
                  </li>
                  <li>
                    <strong>Chasing the wrong person.</strong>{" "}
                    Your project contact often has no authority to pay.
                  </li>
                  <li>
                    <strong>Being vague.</strong>{" "}
                    &ldquo;Any update on this?&rdquo; invites a vague answer.
                    Ask for a date.
                  </li>
                  <li>
                    <strong>Keeping no record.</strong>{" "}
                    If you can&apos;t reconstruct what was sent and when, a
                    final notice carries much less weight.
                  </li>
                  <li>
                    <strong>Threatening steps you won&apos;t take.</strong>{" "}
                    An unenforced deadline tells the client the next one
                    doesn&apos;t matter either.
                  </li>
                  <li>
                    <strong>Continuing to deliver regardless.</strong>{" "}
                    Where your agreement lets you pause work, quietly carrying
                    on gives up your main practical lever.
                  </li>
                </ul>
              </section>

              <section>
                <h2>Manage the recovery process with Duesteer</h2>
                <p>
                  Duesteer is an app for iPhone and iPad that turns this process
                  into a{" "}
                  <Link href="/features">guided workflow</Link>. Add the client,
                  invoice amount, due date, and payment context. Duesteer then
                  shows where the invoice sits in the recovery process and what
                  to consider next.
                </p>
                <p>
                  When a follow-up is due, the app helps you prepare a
                  professional message suited to the current stage and client
                  relationship. You review it and send it through your own mail
                  app. Duesteer does not send messages automatically, contact
                  clients for you, or collect payments.
                </p>
                <p>
                  The recovery history stays attached to the invoice, including
                  reminders, disputes, and missed payment commitments. That
                  gives you a clearer record if you later need to issue a final
                  notice or seek external help. Duesteer is free for up to two
                  invoices; see the{" "}
                  <Link href="/pricing">pricing page</Link> for the Premium
                  plan, or the <Link href="/faq">FAQ</Link> for how disputes and
                  payment commitments are handled.
                </p>
              </section>
            </Prose>

            <div className="mt-8 rounded-card border border-line bg-surface-tint p-6 sm:p-8">
              <p className="text-base font-semibold text-ink">
                Give every unpaid invoice a clear next step.
              </p>
              <p className="mt-2 text-sm leading-relaxed text-body">
                Track what you&apos;re owed, follow a professional escalation
                process, and keep the full history in one place.
              </p>
              <div className="mt-5">
                <AppStoreButton size="lg" />
              </div>
            </div>

            <Prose className="mt-4">
              <section>
                <h2>Final takeaway</h2>
                <p>
                  Recovering an unpaid invoice is less about finding perfect
                  wording and more about following a clear process. Start
                  politely, become firmer only when the situation calls for it,
                  and keep a record of every important step.
                </p>
                <p>
                  Do not escalate immediately, but do not let the invoice drift
                  for weeks without action. A calm and consistent process gives
                  an organised client a fair chance to resolve the issue and
                  leaves you better prepared when stronger action is necessary.
                </p>
              </section>
            </Prose>

            <footer className="mt-10 flex flex-col gap-3 border-t border-line pt-8 sm:flex-row">
              <CtaButton href="/guides" variant="secondary">
                Back to all guides
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
