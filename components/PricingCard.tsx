import type { ReactNode } from "react";

export type PricingPrice = { amount: string; period?: string };

export type PricingCardProps = {
  name: string;
  /** A single price. Use `prices` instead for plans with more than one. */
  price?: string;
  /** e.g. "per month", "forever", or a short qualifier. */
  period?: string;
  /** Multiple price lines (e.g. monthly and yearly). Takes precedence over `price`. */
  prices?: PricingPrice[];
  description: string;
  features: string[];
  featured?: boolean;
  /** Optional call-to-action rendered at the bottom of the card. */
  cta?: ReactNode;
  footnote?: string;
};

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

/**
 * Pricing / plan card. The `featured` plan gets an accent border and label
 * to draw the eye without relying on gradients.
 */
export default function PricingCard({
  name,
  price,
  period,
  prices,
  description,
  features,
  featured = false,
  cta,
  footnote,
}: PricingCardProps) {
  const priceLines = prices ?? (price ? [{ amount: price, period }] : []);
  return (
    <div
      className={`flex h-full flex-col rounded-2xl border bg-white p-6 sm:p-8 ${
        featured
          ? "border-accent shadow-md ring-1 ring-accent/20"
          : "border-slate-200 shadow-sm"
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-lg font-semibold text-slate-900">{name}</h3>
        {featured ? (
          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-accent">
            Most popular
          </span>
        ) : null}
      </div>
      <p className="mt-2 text-sm text-slate-600">{description}</p>
      <div className="mt-5 flex flex-col gap-1">
        {priceLines.map((line) => (
          <div key={`${line.amount}${line.period ?? ""}`} className="flex items-baseline gap-1">
            <span className="text-4xl font-bold tracking-tight text-slate-900">
              {line.amount}
            </span>
            {line.period ? (
              <span className="text-sm font-medium text-slate-500">
                {line.period}
              </span>
            ) : null}
          </div>
        ))}
      </div>

      <ul className="mt-6 flex flex-1 flex-col gap-3">
        {features.map((feature) => (
          <li key={feature} className="flex gap-3 text-sm text-slate-700">
            <CheckIcon />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {cta ? <div className="mt-8">{cta}</div> : null}
      {footnote ? (
        <p className="mt-4 text-xs leading-relaxed text-slate-500">{footnote}</p>
      ) : null}
    </div>
  );
}
