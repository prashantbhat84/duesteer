import type { ReactNode } from "react";

/**
 * Minimal, consistent line-icon set (currentColor, 1.75 stroke) keyed by name
 * so feature data can reference an icon without importing an icon library.
 */
const paths: Record<string, ReactNode> = {
  ladder: (
    <>
      <path d="M7 3v18M17 3v18" />
      <path d="M7 7h10M7 12h10M7 17h10" />
    </>
  ),
  chat: (
    <path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 9 9 0 0 1-3.8-.8L3 21l1.9-5.2A8.38 8.38 0 0 1 4 12a8.5 8.5 0 0 1 8.5-8.5A8.38 8.38 0 0 1 21 11.5z" />
  ),
  pause: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M10 9v6M14 9v6" />
    </>
  ),
  history: (
    <>
      <path d="M3 12a9 9 0 1 0 3-6.7L3 8" />
      <path d="M3 4v4h4" />
      <path d="M12 8v4l3 2" />
    </>
  ),
  document: (
    <>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
      <path d="M14 3v5h5M9 13h6M9 17h6" />
    </>
  ),
  lock: (
    <>
      <rect x="4" y="10" width="16" height="11" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    </>
  ),
  bell: (
    <>
      <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.7 21a2 2 0 0 1-3.4 0" />
    </>
  ),
  status: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12.5l2.5 2.5L16 9.5" />
    </>
  ),
};

export function FeatureIcon({ name }: { name: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
    >
      {paths[name] ?? paths.status}
    </svg>
  );
}

/**
 * Card used for feature highlights. Subtle border, soft shadow, rounded
 * corners — no gradients or glassmorphism.
 */
export default function FeatureCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon?: string;
}) {
  return (
    <div className="flex h-full flex-col rounded-card border border-line bg-surface p-6 shadow-card transition-colors hover:border-brand-line">
      {icon ? (
        <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand-strong">
          <FeatureIcon name={icon} />
        </span>
      ) : null}
      <h3 className="text-base font-semibold text-ink">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-body">{description}</p>
    </div>
  );
}
