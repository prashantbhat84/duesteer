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
    <section className="bg-white py-16 sm:py-20">
      <PageContainer>
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900">
            {title}
          </h1>
          <p className="mt-3 text-sm text-slate-500">
            Last updated: {lastUpdated}
          </p>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">{intro}</p>

          <div className="mt-10 [&_a]:font-medium [&_a]:text-accent [&_a]:underline [&>h2]:mt-10 [&>h2]:text-xl [&>h2]:font-semibold [&>h2]:tracking-tight [&>h2]:text-slate-900 [&>p]:mt-4 [&>p]:leading-relaxed [&>p]:text-slate-600 [&>ul]:mt-4 [&>ul]:list-disc [&>ul]:space-y-2 [&>ul]:pl-6 [&>ul]:text-slate-600">
            {children}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
