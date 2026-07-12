"use client";

import { useState } from "react";
import type { Faq } from "@/lib/content";

/**
 * Accessible FAQ accordion. Each item is a button that toggles its answer.
 * Uses aria-expanded / aria-controls and native disclosure semantics.
 */
export default function FaqAccordion({ items }: { items: Faq[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;
        return (
          <div key={item.question}>
            <h3 className="m-0">
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
              >
                <span className="text-base font-semibold text-slate-900">
                  {item.question}
                </span>
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className={`h-5 w-5 flex-shrink-0 text-slate-400 transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
            </h3>
            {isOpen ? (
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className="px-5 pb-5 sm:px-6"
              >
                <p className="text-sm leading-relaxed text-slate-600">
                  {item.answer}
                </p>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
