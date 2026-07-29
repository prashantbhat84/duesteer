import type { ReactNode } from "react";
import PageContainer from "./PageContainer";

/**
 * Shared layout for readable legal pages (Privacy, Terms). Provides a single
 * H1, a "last updated" line, and prose styling for the section content passed
 * as children (use plain <h2>, <p>, <ul> elements).
 */
export default function LegalPage({
  title,
  intro,
  lastUpdated,
  children,
}: {
  title: string;
  intro: string;
  lastUpdated: string;
  children: ReactNode;
}) {
  return (
    <section className="bg-page py-12 sm:py-16 lg:py-20">
      <PageContainer>
        {/* ~68 characters per line — comfortable for long legal text. */}
        <div className="mx-auto max-w-[calc(68ch+5rem)] rounded-panel border border-line bg-surface px-6 py-10 shadow-card sm:px-10 sm:py-12">
          <header className="border-b border-line pb-8">
            <h1 className="text-4xl font-bold tracking-tight text-ink text-balance">
              {title}
            </h1>
            <p className="mt-3 text-sm text-muted">
              Last updated: {lastUpdated}
            </p>
            <p className="mt-6 text-lg leading-relaxed text-body text-pretty">
              {intro}
            </p>
          </header>

          <div className="mt-10 text-[15px] [&_a]:font-medium [&_a]:text-brand-strong [&_a]:underline [&_a]:decoration-brand-line [&_a]:underline-offset-2 [&_a:hover]:decoration-brand [&_li]:leading-relaxed [&_strong]:font-semibold [&_strong]:text-ink [&>h2]:mt-12 [&>h2]:scroll-mt-24 [&>h2]:text-xl [&>h2]:font-semibold [&>h2]:tracking-tight [&>h2]:text-ink [&>h2+p]:mt-3 [&>p]:mt-4 [&>p]:leading-relaxed [&>p]:text-body [&>ul]:mt-4 [&>ul]:list-disc [&>ul]:space-y-2 [&>ul]:pl-5 [&>ul]:marker:text-brand [&>ul]:text-body">
            {children}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
