import Link from "next/link";
import { FOOTER_LINKS, SITE_NAME } from "@/lib/config";
import Wordmark from "./Wordmark";

/** Site footer with product and legal link groups. */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-line bg-surface-muted">
      <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Wordmark />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-body">
              A guided invoice recovery app that helps freelancers and small
              businesses follow up on overdue invoices with a clear,
              professional escalation process.
            </p>
          </div>

          <nav aria-label="Product">
            <h2 className="text-sm font-semibold text-ink">Product</h2>
            <ul className="mt-4 flex flex-col gap-3">
              {FOOTER_LINKS.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-body transition-colors hover:text-brand-strong"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Legal">
            <h2 className="text-sm font-semibold text-ink">Legal</h2>
            <ul className="mt-4 flex flex-col gap-3">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-body transition-colors hover:text-brand-strong"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 border-t border-line pt-6">
          <p className="max-w-3xl text-xs leading-relaxed text-muted">
            © {year} {SITE_NAME}. All rights reserved. {SITE_NAME} guides your
            invoice recovery process and does not provide legal, financial, or
            accounting advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
