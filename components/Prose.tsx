import type { ReactNode } from "react";

/**
 * Readable long-form article styling for plain HTML children (h2, h3, p, ul,
 * ol, a, strong, blockquote). Mirrors the prose treatment used by LegalPage,
 * with an added h3 level for article subheadings.
 *
 * blockquote is styled as a tinted card rather than a rule-and-indent, since
 * guides use it for wording the reader is meant to copy rather than for quoted
 * speech.
 *
 * Children are styled with descendant selectors rather than direct-child ones
 * so headings and copy can be grouped inside <section> elements.
 */
export default function Prose({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`text-[17px] [&_blockquote]:mt-4 [&_blockquote]:rounded-card [&_blockquote]:border [&_blockquote]:border-line [&_blockquote]:bg-surface-tint [&_blockquote]:px-5 [&_blockquote]:py-4 [&_blockquote_p]:mt-0 [&_blockquote_p]:text-ink [&_a]:font-medium [&_a]:text-brand-strong [&_a]:underline [&_a]:decoration-brand-line [&_a]:underline-offset-2 [&_a:hover]:decoration-brand [&_h2]:mt-12 [&_h2]:scroll-mt-24 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-ink [&_h2]:text-balance [&_h3]:mt-8 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:tracking-tight [&_h3]:text-ink [&_h2+p]:mt-4 [&_h3+p]:mt-3 [&_li]:leading-relaxed [&_ol]:mt-4 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-5 [&_ol]:text-body [&_ol]:marker:text-brand [&_p]:mt-4 [&_p]:leading-relaxed [&_p]:text-body [&_p]:text-pretty [&_strong]:font-semibold [&_strong]:text-ink [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_ul]:text-body [&_ul]:marker:text-brand [&_section]:mt-0 ${className}`}
    >
      {children}
    </div>
  );
}
