import type { ElementType, ReactNode } from "react";
import PageContainer from "./PageContainer";

/**
 * Standard vertical section rhythm with an optional muted background.
 * Wraps content in a PageContainer unless `bleed` is set.
 */
export default function Section({
  children,
  muted = false,
  className = "",
  as: Tag = "section",
  bleed = false,
  ariaLabelledby,
}: {
  children: ReactNode;
  muted?: boolean;
  className?: string;
  as?: ElementType;
  bleed?: boolean;
  ariaLabelledby?: string;
}) {
  return (
    <Tag
      aria-labelledby={ariaLabelledby}
      className={`py-16 sm:py-20 lg:py-24 ${
        muted ? "bg-slate-50" : "bg-white"
      } ${className}`}
    >
      {bleed ? children : <PageContainer>{children}</PageContainer>}
    </Tag>
  );
}
