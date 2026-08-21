import type { Metadata } from "next";
import Link from "next/link";
import PageContainer from "@/components/PageContainer";
import Breadcrumbs from "@/components/Breadcrumbs";
import Prose from "@/components/Prose";
import AppStoreButton from "@/components/AppStoreButton";
import CtaButton from "@/components/CtaButton";
import { formatGuideDate, getGuide } from "@/lib/guides";

const guide = getGuide("late-payment-fees-uk")!;

const META_DESCRIPTION =
  "Can you charge a late payment fee on an unpaid UK invoice? Statutory interest at 8% over base rate, £40–£100 compensation and contractual terms explained.";

export const metadata: Metadata = {
  // `absolute` opts out of the root layout's "%s · Duesteer" template so the
  // brand isn't repeated, since the title already ends with it.
  title: {
    absolute: "Late Payment Fee UK: Can You Charge It? | Duesteer",
  },
  description: META_DESCRIPTION,
  alternates: { canonical: `/guides/${guide.slug}` },
  openGraph: {
    type: "article",
    title: "Can You Charge a Late Payment Fee on an Unpaid Invoice?",
    description: META_DESCRIPTION,
    url: `/guides/${guide.slug}`,
    publishedTime: guide.published,
  },
};

export default function LatePaymentFeesUkGuide() {
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
              { label: "Can You Charge a Late Payment Fee?" },
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
                  You have sent three reminders. The first was friendly, the
                  second widened the circle to accounts payable, the third was
                  firm and asked for a date. None were answered. The work was
                  delivered, the invoice was correct, and the money is still not
                  there.
                </p>
                <p>
                  At that point a reasonable question surfaces: can you add
                  something to the balance? Most people assume that depends
                  entirely on their contract, and that without a late payment
                  clause they have no option. For UK business-to-business
                  invoices, that is not the case. There are two routes to a late
                  payment charge, and the second applies whether or not you
                  agreed anything in advance. It comes from the Late Payment of
                  Commercial Debts (Interest) Act 1998, which most freelancers
                  and small agencies have never heard of.
                </p>
                <p>
                  This guide is written for UK businesses invoicing other UK
                  businesses; consumers are covered by a different regime. What
                  you can actually claim depends on your contract, your invoice
                  terms, where you and your client operate, and the facts of the
                  case, so check before you rely on any of it. This is general
                  information, not legal advice.
                </p>
              </section>

              <section>
                <h2>Two routes to a late payment fee</h2>
                <p>
                  The first route is contractual. If your contract, terms of
                  business, or accepted quote states a late payment charge, and
                  the client agreed to those terms before the work began, you
                  can generally rely on the rate you wrote down. This is the
                  route people think of first, and it fails most often, because
                  the clause either does not exist or was never actually agreed.
                </p>
                <p>
                  The second is statutory. Where a business supplies goods or
                  services to another business and payment is late, the Act
                  implies a right to interest and to fixed compensation into the
                  contract. You do not need a clause, the client&apos;s
                  agreement, or a note on the invoice.
                </p>
                <p>
                  The two routes do not stack. A contractual remedy generally
                  takes the place of the statutory right, provided it is a
                  substantial one — a token rate written in specifically to shut
                  out the Act is unlikely to survive a challenge. If your clause
                  is silent on interest, or there is no clause, the statutory
                  route is the one available to you.
                </p>
              </section>

              <section>
                <h2>
                  Can I charge interest on a late invoice with no prior
                  agreement?
                </h2>
                <p>
                  Under the statutory route, yes, for qualifying B2B debts. Two
                  separate amounts are available.
                </p>
                <p>
                  The first is interest at{" "}
                  <strong>8% above the Bank of England base rate</strong>. The
                  applicable base rate is fixed twice a year rather than moving
                  with each rate decision: the rate in force on 31 December
                  applies to debts that become late between 1 January and 30
                  June, and the rate in force on 30 June applies to debts that
                  become late between 1 July and 31 December. That reference
                  rate then holds for the whole of the debt, even if the Bank
                  moves the base rate meanwhile.
                </p>
                {/*
                  The reference rate resets every January and July — refresh the
                  two figures in the paragraph below when it does.
                */}
                <p>
                  The base rate in force on 30 June 2026 was 3.75%, giving a
                  statutory rate of <strong>11.75% a year</strong> for
                  commercial debts that became late between 1 July and 31
                  December 2026. It is simple interest, not compound.
                </p>
                <p>
                  Interest runs from the day after payment was due, which is the
                  date your contract sets. Where nothing was agreed, a default
                  period applies, generally counted from the later of delivery
                  and receipt of the invoice. Check that start date against your
                  own paperwork before quoting a figure.
                </p>
              </section>

              <section>
                <h2>The fixed compensation of £40, £70 or £100</h2>
                <p>
                  Separately from interest, the Act provides a fixed sum for the
                  cost of recovering a late commercial debt. It is set by the
                  size of the debt:
                </p>
                <ul>
                  <li>
                    <strong>Debts under £1,000</strong> — £40.
                  </li>
                  <li>
                    <strong>Debts of £1,000 up to £9,999.99</strong> — £70.
                  </li>
                  <li>
                    <strong>Debts of £10,000 or more</strong> — £100.
                  </li>
                </ul>
                <p>
                  The sum applies per invoice, not per client, so four overdue
                  invoices are a different calculation from one large one. If
                  your reasonable costs of recovering the debt come to more than
                  the fixed sum — instructing a solicitor or a debt recovery
                  firm, for example — the Act allows you to claim the difference
                  on top. Your own time chasing is not usually recoverable that
                  way, so for most freelancers the fixed sum is the whole of it.
                </p>
              </section>

              <section>
                <h2>Contractual late payment terms and the 2% per month rate</h2>
                <p>
                  If you would rather set your own rate, the common convention
                  for UK B2B terms is <strong>2% per month</strong> on the
                  outstanding balance, sometimes written as 1.5%. Rates above
                  that attract argument, and the further you go the more likely
                  a client is to test the clause rather than pay it.
                </p>
                <p>
                  The important part is the unit. The charge must run{" "}
                  <strong>per period</strong> — per month, per week, or per day
                  — tied to how long the money has been outstanding. It must not
                  run per reminder.
                </p>
              </section>

              <section>
                <h2>Why a fee that grows every time you chase is unenforceable</h2>
                <p>
                  This is the mistake worth correcting before anything else. A
                  clause that adds, say, £50 each time you send a chaser is not
                  a late payment charge at all. It is a charge for your own
                  administrative activity, and it grows because of something you
                  chose to do rather than anything the client did.
                </p>
                <p>
                  English law will not enforce a contractual charge that
                  operates as a penalty. The question is broadly whether the sum
                  is out of all proportion to your legitimate interest in being
                  paid on time. Interest at a defined rate over a defined period
                  passes that test comfortably: it reflects the cost of being
                  out of the money, and it is arithmetic anyone can check. A fee
                  that escalates because you sent another email does not,
                  because nothing about the client&apos;s default changed
                  between your second reminder and your third.
                </p>
                <p>
                  So a per-reminder clause is worth less than nothing. It is
                  unlikely to be enforced, and quoting it makes your
                  correspondence look improvised at the moment you most want it
                  to look considered. Write the clause per period and it holds.
                </p>
              </section>

              <section>
                <h2>Worked example: a £5,000 invoice, 60 days overdue</h2>
                <p>
                  Take a £5,000 invoice with 30-day terms, now 60 days past its
                  due date.
                </p>
                <p>
                  <strong>Statutory route.</strong> At 11.75% a year, £5,000
                  accrues £587.50 over a full year, or{" "}
                  <strong>£1.61 a day</strong>. Over 60 days that is{" "}
                  <strong>£96.58</strong> in interest. The debt sits in the
                  middle band, so fixed compensation adds <strong>£70</strong>.
                  The total additional claim is <strong>£166.58</strong>, and
                  the balance becomes £5,166.58. Every further day adds another
                  £1.61.
                </p>
                <p>
                  <strong>Contractual route at 2% per month.</strong> Two full
                  months at 2% of £5,000 is £100 a month, so{" "}
                  <strong>£200</strong>. If the clause accrues daily rather than
                  monthly, 2% a month is roughly 24% a year, or about{" "}
                  <strong>£3.29 a day</strong> — £197.26 over the same 60 days.
                </p>
                <p>
                  Two things follow. The contractual rate is roughly double the
                  statutory one here, but it only exists if you agreed it in
                  advance. And the £70 is a larger share of the statutory total
                  than the interest is — on smaller and shorter overdue
                  invoices, the fixed sum usually is the claim.
                </p>
                {/*
                  TODO: link the statutory interest calculator here once it
                  ships. Nothing to point at yet, so no link is rendered.
                */}
              </section>

              <section>
                <h2>What charging interest actually changes</h2>
                <p>
                  Be honest about the mechanism. Interest rarely persuades a
                  client who has decided not to pay you. It is not a lever
                  against bad faith, and it does not conjure money into a
                  business that does not have any.
                </p>
                <p>
                  What it changes is <strong>order</strong>. A finance function
                  paying suppliers in whatever sequence is convenient is
                  choosing between debts that all cost the same to defer. A debt
                  that grows costs something to defer, and one with a documented
                  daily figure attached costs something visible. That moves it
                  up the queue, ahead of the invoices that will still be exactly
                  the same size next month.
                </p>
                <p>
                  The effect is real and modest, and the signal it produces is
                  worth as much: a client who queries the interest is engaging
                  with the debt, and a client who ignores it has told you the
                  reminder stage is over. See{" "}
                  <Link href="/guides/recover-overdue-invoice">
                    how to recover an overdue invoice
                  </Link>{" "}
                  for where the charge fits into the wider escalation process.
                </p>
              </section>

              <section>
                <h2>Wording to put on your next invoice</h2>
                <p>
                  The contractual route does nothing for the invoice already
                  outstanding. It helps with the next one. Terms have to be
                  agreed before the work begins, so the place for this is your
                  contract or terms of business, with the invoice repeating it
                  rather than introducing it.
                </p>
                <p>If you want a contractual rate:</p>
                <blockquote>
                  <p>
                    Payment is due within 30 days of the invoice date. Interest
                    is payable on any overdue amount at 2% per month, or part
                    month, from the day after the due date until payment is
                    received in full, together with reasonable costs of
                    recovery.
                  </p>
                </blockquote>
                <p>
                  If you would rather rely on the statutory position and simply
                  make the client aware of it:
                </p>
                <blockquote>
                  <p>
                    Payment is due within 30 days of the invoice date. Overdue
                    amounts are subject to statutory interest and fixed
                    compensation under the Late Payment of Commercial Debts
                    (Interest) Act 1998.
                  </p>
                </blockquote>
                <p>
                  Adapt either to your own terms. Whether a clause is
                  incorporated into your agreement depends on how your terms
                  were presented and accepted, so check that before you rely on
                  it.
                </p>
              </section>

              <section>
                <h2>When interest is not enough</h2>
                <p>
                  Interest is a nudge, not a remedy. If the invoice is still
                  unpaid after you have raised it, the next steps have nothing
                  to do with the fee. Depending on what your agreement allows,
                  that may mean pausing work in progress, withholding a
                  deliverable, or declining to assign or licence the
                  intellectual property in unpaid work. Where it applies, that
                  last one is usually the strongest practical lever a freelancer
                  has, and it is worth knowing whether your contract gives it to
                  you before you need it.
                </p>
                <p>
                  Beyond that sit the formal options: a Letter Before Action
                  following the pre-action protocol, a claim through Money Claim
                  Online for smaller sums, or — for an undisputed debt owed by a
                  company — a statutory demand, an insolvency step with its own
                  thresholds and its own risks if the debt turns out to be
                  disputed. Each deserves proper advice before you start, and
                  cost, time, and the likelihood of recovery matter more than
                  the principle.
                </p>
              </section>

              <section>
                <h2>Common late fee mistakes</h2>
                {/*
                  Each item keeps an explicit {" "} after the bold lead-in so
                  the space survives if the JSX is ever re-wrapped.
                */}
                <ul>
                  <li>
                    <strong>Adding a fee that was never agreed.</strong>{" "}
                    A charge invented at the chasing stage is not a contractual
                    term. The statutory route may still be open to you; the
                    invented fee is not.
                  </li>
                  <li>
                    <strong>Charging per reminder rather than per period.</strong>{" "}
                    A fee that grows because you sent another email reads as a
                    penalty and is unlikely to be enforceable.
                  </li>
                  <li>
                    <strong>Applying it to a consumer.</strong>{" "}
                    The Act covers business-to-business debts, and citing it
                    against a consumer undermines everything else in the
                    message.
                  </li>
                  <li>
                    <strong>Forgetting the fixed compensation.</strong>{" "}
                    On a small invoice the £40 or £70 is usually worth more than
                    the interest, and it is the part people leave out.
                  </li>
                  <li>
                    <strong>Compounding the interest.</strong>{" "}
                    Statutory interest is simple, and adding interest to
                    interest invites a challenge to the whole calculation.
                  </li>
                  <li>
                    <strong>Announcing it in the first reminder.</strong>{" "}
                    Interest raised on day two turns an oversight into a
                    confrontation. It belongs at the firm reminder stage or
                    later.
                  </li>
                  <li>
                    <strong>Threatening a charge you will not apply.</strong>{" "}
                    A figure you quote and then quietly drop teaches the client
                    that your deadlines are decorative.
                  </li>
                </ul>
              </section>

              <section>
                <h2>Charging late fees with Duesteer</h2>
                <p>
                  Duesteer is an app for iPhone and iPad that turns invoice
                  recovery into a{" "}
                  <Link href="/features">guided workflow</Link>. When you add an
                  invoice, you can record the payment terms that go with it,
                  including any late payment clause you agreed with that client.
                  The terms are then attached to the invoice from the start
                  rather than half-remembered at the point you need them.
                </p>
                <p>
                  Timing matters as much as the terms. Duesteer shows where each
                  invoice sits in the recovery process, so a late payment charge
                  surfaces as something to consider at the firm reminder or
                  final notice stage rather than in the first friendly nudge.
                  When a follow-up is due, the app helps you prepare a message
                  suited to that stage, and you review and send it through your
                  own mail app. Duesteer does not calculate statutory interest
                  for you, does not provide legal advice, and does not send
                  messages or collect payments on your behalf.
                </p>
                <p>
                  The recovery history stays attached to the invoice — every
                  reminder, dispute, and{" "}
                  <Link href="/guides/client-missed-payment-promise">
                    missed payment commitment
                  </Link>
                  , with dates — and can be exported as a PDF. That is the
                  document you want in front of you if the conversation moves to
                  a Letter Before Action or a claim, and the dates in it are
                  what you need to work out the period your interest runs over.
                  Duesteer is free for up to two invoices; see the{" "}
                  <Link href="/pricing">pricing page</Link> for the Premium
                  plan.
                </p>
              </section>
            </Prose>

            <div className="mt-8 rounded-card border border-line bg-surface-tint p-6 sm:p-8">
              <p className="text-base font-semibold text-ink">
                Know where every unpaid invoice stands.
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
                  You can usually charge something on a late UK B2B invoice, and
                  if you never wrote a late payment clause you are not out of
                  options: statutory interest at 8% over base rate and fixed
                  compensation of £40, £70 or £100 apply without any prior
                  agreement. Check your contract first, because a substantial
                  contractual remedy generally takes the place of the statutory
                  one.
                </p>
                <p>
                  Expect the charge to change the order in which you are paid
                  rather than whether you are paid. Write the clause per period
                  rather than per reminder, raise it at the firm reminder stage
                  rather than the first, and quote a figure you have actually
                  calculated. Then treat it as one step in the process, not the
                  end of it.
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
