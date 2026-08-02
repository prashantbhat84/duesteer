import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60";

const variants: Record<Variant, string> = {
  /* Duesteer green — the single primary action colour across the site. */
  primary:
    "bg-brand text-brand-fg hover:bg-brand-hover shadow-card focus-visible:outline-brand",
  /* Deliberately quiet: a white surface with a neutral border, so the primary
     action always wins the eye. Also readable on the dark CTA band. */
  secondary:
    "bg-surface text-ink border border-line-strong hover:bg-surface-muted focus-visible:outline-brand",
};

const sizes: Record<Size, string> = {
  md: "min-h-11 px-5 text-sm",
  lg: "min-h-13 px-6 text-base",
};

type CtaButtonProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  /** External links open in a new tab with safe rel attributes. */
  external?: boolean;
  /**
   * Renders a non-interactive, visually disabled button instead of a link
   * (used for the "Coming Soon" App Store CTA before launch).
   */
  disabled?: boolean;
  className?: string;
  "aria-label"?: string;
};

/**
 * Shared call-to-action button. Renders a Next.js Link for internal routes
 * and a plain anchor for external URLs (e.g. the App Store link).
 */
export default function CtaButton({
  href,
  children,
  variant = "primary",
  size = "md",
  external = false,
  disabled = false,
  className = "",
  ...rest
}: CtaButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (disabled) {
    return (
      <button
        type="button"
        disabled
        className={`${classes} cursor-not-allowed`}
        {...rest}
      >
        {children}
      </button>
    );
  }

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}

/** Small Apple logo mark used on App Store buttons. */
export function AppleIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      className={`h-5 w-5 ${className}`}
      fill="currentColor"
    >
      <path d="M16.365 1.43c0 1.14-.417 2.2-1.24 3.06-.99 1.03-2.18 1.63-3.47 1.52-.03-1.12.44-2.24 1.2-3.05.85-.9 2.27-1.56 3.51-1.53zM20.9 17.13c-.6 1.38-.89 2-1.66 3.22-1.08 1.71-2.6 3.84-4.48 3.85-1.67.02-2.1-1.09-4.37-1.08-2.27.01-2.74 1.1-4.41 1.08-1.88-.02-3.32-1.94-4.4-3.65C-1.03 16.62-.36 9.3 3.32 7.5c1.26-.63 2.6-.66 3.66-.67 1.28-.02 2.49.9 3.28.9.78 0 2.42-1.11 4.08-.95.7.03 2.65.28 3.9 2.13-3.44 1.89-2.9 6.79.66 8.22z" />
    </svg>
  );
}
