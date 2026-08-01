"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/config";

/**
 * The primary navigation links, shared by the desktop header and the mobile
 * menu. The current section is marked with the DueSteer brand colour.
 */
export default function NavLinks({
  layout = "inline",
  onNavigate,
}: {
  layout?: "inline" | "stacked";
  onNavigate?: () => void;
}) {
  const pathname = usePathname();
  const stacked = layout === "stacked";

  return (
    <>
      {NAV_LINKS.map((link) => {
        const active =
          pathname === link.href || pathname.startsWith(`${link.href}/`);
        return (
          <Link
            key={link.href}
            href={link.href}
            onClick={onNavigate}
            aria-current={active ? "page" : undefined}
            className={`rounded-lg font-medium transition-colors ${
              stacked ? "px-3 py-3 text-base" : "px-3 py-2 text-sm"
            } ${
              active
                ? "bg-brand-soft text-brand-strong"
                : "text-body hover:bg-surface-muted hover:text-ink"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </>
  );
}
