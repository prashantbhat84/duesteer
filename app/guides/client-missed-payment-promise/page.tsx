import type { Metadata } from "next";
import Link from "next/link";
import PageContainer from "@/components/PageContainer";
import Breadcrumbs from "@/components/Breadcrumbs";
import GuideJsonLd from "@/components/GuideJsonLd";
import Prose from "@/components/Prose";
import AppStoreButton from "@/components/AppStoreButton";
import CtaButton from "@/components/CtaButton";
import { formatGuideDate, getGuide } from "@/lib/guides";

const guide = getGuide("client-missed-payment-promise")!;

const META_DESCRIPTION =
  "A client promised to pay an overdue invoice but missed the date? Learn how to follow up, document the commitment and decide when to escalate.";

export const metadata: Metadata = {
  // `absolute` opts out of the root layout's "%s · Duesteer" template so the
  // brand isn't repeated, since the title already ends with it.
  title: {
    absolute: "Client Missed a Promised Payment Date? What to Do Next | Duesteer",
  },
  description: META_DESCRIPTION,
  alternates: { canonical: `/guides/${guide.slug}` },
  openGraph: {
    type: "article",
    title: "What to Do When a Client Promises Payment and Misses the Date",
    description: META_DESCRIPTION,
    url: `/guides/${guide.slug}`,
    publishedTime: guide.published,
  },
};

export default function ClientMissedPaymentPromiseGuide() {
  return (
    <div className="bg-page py-12 sm:py-16 lg:py-20">
      <GuideJsonLd guide={guide} />
      <PageContainer>
        {/* ~68 characters per line — comfortable for long-form reading. */}
        <div className="mx-auto max-w-[calc(68ch+5rem)]">
          <Breadcrumbs
            className="mb-6"
            items={[
              { label: "Resources", href: "/resources" },
              { label: "Guides", href: "/guides" },
              {
                label:
                  "What to Do When a Client Misses a Promised Payment Date",
              },
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
                A promised payment date changes an overdue invoice. You are no
                longer simply waiting for payment; the client has made a
                specific commitment. If that date passes without payment, your
                next follow-up should acknowledge what happened rather than
                starting the reminder process again.
              </p>
            </header>

            <Prose className="mt-8">
              <section>
                <h2>Record the date and wait until the agreed checkpoint before following up again.</h2>
                <p>
                  There is a real difference between a client saying &ldquo;we
                  are looking into it&rdquo; and one saying &ldquo;we will pay
                  on Friday.&rdquo; A specific date gives you a checkpoint you
                  can both work from.
                </p>
                <p>
                  Once you have agreed to wait until that date, chasing before
                  it arrives usually adds friction without moving anything
                  forward. Note the date, pause the reminders, and see what
                  happens.
                </p>
                <p>
                  What the promise means beyond the working relationship depends
                  on your contract and where you operate. This is practical
                  guidance, not legal advice.
                </p>
              </section>

              <section>
                <h2>Confirm the commitment in writing</h2>
                <p>
                  Payment dates are often given on a call or in a chat. If the
                  promise was not made in writing, put it in writing yourself
                  with a short reply covering the invoice number, the amount
                  outstanding, and the promised date.
                </p>
                <p>
                  &ldquo;Thanks for the update. Confirming invoice 1042 for
                  $2,400 will be paid on 14 August. I&apos;ll mark it as
                  expected on that date.&rdquo;
                </p>
                <p>
                  The goal is a shared record, not pressure. If the
                  client&apos;s understanding differs, this gives them a chance
                  to say so.
                </p>
              </section>

              <section>
                <h2>First, check whether the payment actually arrived</h2>
                <p>
                  Before you send anything, confirm the money is genuinely
                  missing.
                </p>
                <ul>
                  <li>Check the account or payment method the client was given.</li>
                  <li>
                    Look for a payment under an unfamiliar reference or a
                    different amount after fees.
                  </li>
                  <li>
                    Allow for normal processing time. A transfer sent on the
                    promised date may not clear the same day.
                  </li>
                  <li>
                    Check whether the client sent proof of payment you have not
                    opened.
                  </li>
                </ul>
                <p>
                  Telling a client they missed a commitment they actually kept
                  is hard to walk back.
                </p>
              </section>

              <section>
                <h2>Follow up promptly after the missed date</h2>
                <p>
                  Once the date has passed and the payment is genuinely
                  outstanding, follow up within a day or two. Waiting another
                  week signals that the date did not really matter. The message
                  should cover:
                </p>
                <ul>
                  <li>The payment date that was agreed.</li>
                  <li>That the payment has not been received.</li>
                  <li>The invoice number and amount outstanding.</li>
                  <li>A request for an update or a revised payment date.</li>
                </ul>
                <p>
                  What it should not do is reset to &ldquo;just following up on
                  my invoice.&rdquo; Referring to the missed commitment directly
                  is accurate, not aggressive.
                </p>
              </section>

              <section>
                <h2>
                  A missed commitment is different from an ordinary late payment
                </h2>
                <p>
                  Before a client gives you a date, you are mostly guessing. The
                  invoice might be stuck in approval, sitting with the wrong
                  person, or forgotten. After a commitment is missed you know
                  more: someone looked at the invoice, gave you a date, and that
                  date came and went.
                </p>
                <p>
                  That does not mean the client is acting in bad faith. But it
                  is a fair point at which to reassess how much time to allow,
                  how firm the next message should be, and whether the recovery
                  process should move forward a stage.
                </p>
              </section>

              <section>
                <h2>One missed date is different from repeated missed commitments</h2>
                <p>
                  A client who normally pays on time and misses one date may warrant a different response from one who has repeatedly missed agreed dates.
                </p>
                <ul>
                  <li>How the client has paid in the past.</li>
                  <li>Whether they respond to messages.</li>
                  <li>Whether they gave an explanation, and how specific it was.</li>
                  <li>How many commitments have been missed.</li>
                  <li>How far past due the invoice already is.</li>
                </ul>
                <p>
                  &ldquo;After two missed promises, always send a final
                  demand&rdquo; sounds decisive, but a temporary problem is not
                  the same as a client who has been evasive throughout.
                </p>
              </section>

              <section>
                <h2>What if the client gives you another payment date?</h2>
                <p>
                  A second date can be reasonable, especially if the client
                  explains what went wrong and the new date is close. If you
                  accept it, treat it as a commitment rather than a
                  postponement.
                </p>
                <ul>
                  <li>Confirm the new date in writing.</li>
                  <li>
                    Keep it specific. &ldquo;Early next month&rdquo; is not a
                    date.
                  </li>
                  <li>
                    Avoid open-ended extensions, and consider asking for part of
                    the balance now.
                  </li>
                  <li>Keep the earlier missed date in your record.</li>
                </ul>
                <p>
                  Agreeing to a new date does not erase the previous one. It is
                  fair to let that history shape how much patience this date
                  gets.
                </p>
              </section>

              <section>
                <h2>What if the client disputes the invoice after missing the date?</h2>
                <p>
                  If your follow-up produces an objection to the work or the
                  amount rather than a payment, escalating while the
                  disagreement is unresolved rarely helps.
                </p>
                <p>
                  Ask for the specific issue in writing, record it against the
                  invoice, and deal with the substance. Keep the payment history
                  intact, including the missed date, and resume recovery once
                  the dispute is settled. A more detailed guide to invoice
                  disputes will be added to the{" "}
                  <Link href="/resources">Resources</Link> section.
                </p>
              </section>

              <section>
                <h2>When should the follow-up become firmer?</h2>
                <p>
                  Firmness should track the situation rather than your
                  frustration. It usually makes sense to become firmer when:
                </p>
                <ul>
                  <li>The invoice is substantially overdue.</li>
                  <li>Earlier reminders received no meaningful response.</li>
                  <li>A promised payment date was missed.</li>
                  <li>Several commitments have been missed.</li>
                  <li>Explanations stay vague or keep changing.</li>
                </ul>
                <p>
                  Firm is not hostile. A firm message states the facts, says
                  what you need, and gives a date. It does not comment on the
                  client&apos;s character or mention consequences you are not
                  prepared to follow through on.
                </p>
              </section>

              <section>
                <h2>When to consider a final notice</h2>
                <p>
                  A final notice ends the routine reminder stage. It is worth
                  considering when ordinary messages have stopped producing
                  progress: repeated silence, repeated missed commitments, no
                  credible payment plan, and firmer reminders that changed
                  nothing.
                </p>
                <p>
                  Wording, notice periods, and what a final notice means
                  formally can depend on your contract and jurisdiction, so
                  check before relying on it. Our guide to{" "}
                  <Link href="/guides/recover-overdue-invoice">
                    recovering an overdue invoice
                  </Link>{" "}
                  shows where a final notice sits in the wider sequence. This is
                  general information, not legal advice.
                </p>
              </section>

              <section>
                <h2>Keep the payment promise in your recovery history</h2>
                <p>
                  Whatever happens next is easier if the commitment is recorded:
                  when the promise was made, the date and amount, where it was
                  communicated, whether it was met, any explanation afterwards,
                  and any revised date.
                </p>
                <p>
                  Day to day, this stops you sending a reminder that contradicts
                  last week&apos;s conversation. Later, if the invoice reaches a
                  final notice or an external recovery service, that record is
                  the most useful thing you can hand over.
                </p>
              </section>

              <section>
                <h2>How Duesteer handles missed payment commitments</h2>
                <p>
                  Duesteer treats a promised payment date as part of the
                  recovery process rather than a note on the side. When a client
                  commits to a date, you can record it against the invoice and
                  pause normal recovery while you wait.
                </p>
                <p>
                  If the payment does not arrive, the missed commitment becomes
                  part of that invoice&apos;s recovery history, and the next
                  recovery context reflects what happened. You are not pushed
                  back into an ordinary first reminder.
                </p>
                <p>
                  That is how the app works generally: an overdue invoice
                  changes as events occur, and disputes, promises, missed
                  commitments, and escalation stages all shape what should
                  happen next. The <Link href="/features">features page</Link>{" "}
                  and the <Link href="/faq">FAQ</Link> cover the details.
                </p>
                <p>
                  Duesteer does not contact your clients and does not guarantee
                  recovery. You review each message and send it from your own
                  mail app. See <Link href="/pricing">pricing</Link> for what
                  each plan includes.
                </p>
              </section>
            </Prose>

            <div className="mt-8 rounded-card border border-line bg-surface-tint p-6 sm:p-8">
              <p className="text-base font-semibold text-ink">
                Give every missed payment commitment a clear next step.
              </p>
              <p className="mt-2 text-sm leading-relaxed text-body">
                Duesteer keeps payment promises, missed commitments, and
                recovery actions tied to the invoice so you can see what
                happened and decide what should come next.
              </p>
              <div className="mt-5">
                <AppStoreButton size="lg" />
              </div>
            </div>

            <Prose className="mt-4">
              <section>
                <h2>Final takeaway</h2>
                <p>
                  A payment promise should not disappear from the record once
                  the date passes. Confirm the commitment when it is made, check
                  that the payment genuinely has not arrived, and follow up
                  promptly when the date is missed.
                </p>
                <p>
                  Then let what has already happened guide what you do next. One
                  missed date from a reliable client is a small event. A pattern
                  of missed dates is information worth acting on.
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
