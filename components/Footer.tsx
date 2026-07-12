import Link from "next/link";
import { FOOTER_LINKS, SITE_NAME } from "@/lib/config";
import Wordmark from "./Wordmark";

/** Site footer with product and legal link groups. */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-slate-200 bg-slate-50">
      <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Wordmark />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-600">
              A guided invoice recovery app that helps freelancers and small
              businesses follow up on overdue invoices with a clear,
              professional escalation process.
            </p>
          </div>

          <nav aria-label="Product">
            <h2 className="text-sm font-semibold text-slate-900">Product</h2>
            <ul className="mt-4 flex flex-col gap-3">
              {FOOTER_LINKS.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 hover:text-slate-900"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Legal">
            <h2 className="text-sm font-semibold text-slate-900">Legal</h2>
            <ul className="mt-4 flex flex-col gap-3">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 hover:text-slate-900"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6">
          <p className="text-xs text-slate-500">
            © {year} {SITE_NAME}. All rights reserved. DueSteer guides your
            invoice recovery process and does not provide legal, financial, or
            accounting advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
