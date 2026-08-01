"use client";

import { useEffect, useState } from "react";
import AppStoreButton from "./AppStoreButton";
import NavLinks from "./NavLinks";

/**
 * Mobile navigation: a hamburger toggle that opens a full-width menu panel.
 * Shown only below the `md` breakpoint (the desktop nav handles wider screens).
 */
export default function MobileNav() {
  const [open, setOpen] = useState(false);

  // Prevent background scrolling while the menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on Escape for keyboard users.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line-strong bg-surface text-ink"
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {open ? (
            <path d="M18 6 6 18M6 6l12 12" />
          ) : (
            <path d="M4 7h16M4 12h16M4 17h16" />
          )}
        </svg>
      </button>

      {open ? (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 top-16 z-40 max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-surface shadow-raised"
        >
          <nav
            aria-label="Primary"
            className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-5 py-4 sm:px-6"
          >
            <NavLinks layout="stacked" onNavigate={() => setOpen(false)} />
            <div className="mt-3">
              <AppStoreButton size="lg" className="w-full" note={false} />
            </div>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
