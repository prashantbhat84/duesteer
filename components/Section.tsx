import type { ElementType, ReactNode } from "react";
import PageContainer from "./PageContainer";

/**
 * Standard vertical section rhythm with a background tone.
 *
 * Alternating background tones — rather than stacking everything into cards —
 * is what gives the page its structure, so most sections just pick a `tone`.
 */
export type SectionTone = "surface" | "muted" | "tint" | "ink";

const tones: Record<SectionTone, string> = {
  surface: "bg-surface",
  muted: "bg-surface-muted",
  tint: "bg-surface-tint",
  ink: "bg-ink-surface text-on-ink",
};

export default function Section({
  children,
  tone = "surface",
  className = "",
  as: Tag = "section",
  bleed = false,
  ariaLabelledby,
}: {
  children: ReactNode;
  tone?: SectionTone;
  className?: string;
  as?: ElementType;
  bleed?: boolean;
  ariaLabelledby?: string;
}) {
  return (
    <Tag
      aria-labelledby={ariaLabelledby}
      className={`py-16 sm:py-20 lg:py-24 ${tones[tone]} ${className}`}
    >
      {bleed ? children : <PageContainer>{children}</PageContainer>}
    </Tag>
  );
}
