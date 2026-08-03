import Link from "next/link";
import { FeatureIcon } from "./FeatureCard";

const card =
  "flex h-full flex-col rounded-card border border-line bg-surface p-6 shadow-card";

/**
 * Card used on the Resources landing page. With `href` it renders as a single
 * block-level link; without one it renders as a static card carrying a quiet
 * "Coming soon" label, so nothing points at a page that does not exist yet.
 */
export default function ResourceCard({
  title,
  description,
  href,
  icon,
  comingSoon = false,
}: {
  title: string;
  description: string;
  href?: string;
  icon?: string;
  comingSoon?: boolean;
}) {
  const body = (
    <>
      {icon ? (
        <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand-strong">
          <FeatureIcon name={icon} />
        </span>
      ) : null}
      <div className="flex items-center gap-3">
        {/* h2: these cards sit directly under the page h1, with no
            intermediate section heading. */}
        <h2 className="text-base font-semibold text-ink">{title}</h2>
        {comingSoon ? (
          <span className="rounded-full border border-line bg-surface-muted px-2 py-0.5 text-xs font-medium text-muted">
            Coming soon
          </span>
        ) : null}
      </div>
      <p className="mt-2 text-sm leading-relaxed text-body">{description}</p>
      {href ? (
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-strong">
          Browse {title.toLowerCase()}
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </span>
      ) : null}
    </>
  );

  if (!href) {
    return <div className={card}>{body}</div>;
  }

  return (
    <Link
      href={href}
      className={`${card} transition-colors hover:border-brand-line hover:bg-surface-tint`}
    >
      {body}
    </Link>
  );
}
