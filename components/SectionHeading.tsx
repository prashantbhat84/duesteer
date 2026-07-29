import type { ReactNode } from "react";

/**
 * Consistent section heading: optional eyebrow label, a title, and optional
 * supporting text. Uses an h2 by default; pass `as` to change the level.
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as: Tag = "h2",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2";
  className?: string;
}) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-2xl ${alignment} ${className}`}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.08em] text-brand-strong">
          {eyebrow}
        </p>
      ) : null}
      <Tag className="text-3xl font-bold tracking-tight text-ink text-balance sm:text-4xl">
        {title}
      </Tag>
      {description ? (
        <p className="mt-4 text-lg leading-relaxed text-body text-pretty">
          {description}
        </p>
      ) : null}
    </div>
  );
}
