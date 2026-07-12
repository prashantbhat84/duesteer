import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { SITE_NAME, SUPPORT_EMAIL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "The terms that apply to your use of the DueSteer iOS app and website, including product purpose, user responsibility, subscriptions through Apple, and limitation of liability.",
  alternates: { canonical: "/terms" },
};

/*
 * NOTE TO MAINTAINERS:
 * These Terms of Use are a plain-language draft based only on the product
 * facts we currently have. They intentionally avoid inventing a registered
 * company name, physical address, court jurisdiction, or governing law.
 * >>> Have these terms legally reviewed before launch. <<<
 */
export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Use"
      lastUpdated="July 12, 2026"
      intro={`These Terms of Use ("Terms") govern your use of the ${SITE_NAME} iOS app and this website. By using ${SITE_NAME}, you agree to these Terms.`}
    >
      <h2>1. Acceptance of terms</h2>
      <p>
        By downloading, accessing, or using {SITE_NAME}, you agree to be bound
        by these Terms. If you do not agree, please do not use the app or this
        website.
      </p>

      <h2>2. Product purpose</h2>
      <p>
        {SITE_NAME} is a tool that helps you organise and pursue the recovery of
        overdue invoices through a structured escalation process. It helps you
        track invoices, decide on a next step, and generate professional
        follow-up messages that you send yourself.
      </p>

      <h2>3. Your responsibility</h2>
      <p>
        You are responsible for the invoices, contacts, and messages you create
        and send using {SITE_NAME}. You are responsible for ensuring that your
        communications are accurate, lawful, and appropriate for your situation.
        {" "}
        {SITE_NAME} generates message drafts, but you review and send them, and
        you remain responsible for their content and delivery.
      </p>

      <h2>4. No guarantee of recovery</h2>
      <p>
        {SITE_NAME} does not guarantee that any invoice will be paid or that any
        particular outcome will be achieved. Recovery of overdue invoices
        depends on many factors outside our control.
      </p>

      <h2>5. No legal, financial, tax, or accounting advice</h2>
      <p>
        {SITE_NAME} does not provide legal, financial, tax, or accounting
        advice. The escalation stages, templates, and recommendations are
        general in nature and are not a substitute for advice from a qualified
        professional. Where the app references external action, it does not
        provide legal advice about that step.
      </p>

      <h2>6. Subscriptions and billing</h2>
      <p>
        {SITE_NAME} offers a free tier and paid Premium subscriptions.
        Subscriptions are purchased and managed through Apple via the App Store,
        and billing, renewals, and refunds are handled by Apple in accordance
        with its terms. Prices may vary by country or region. You can manage or
        cancel your subscription in your Apple account settings.
      </p>

      <h2>7. Acceptable use</h2>
      <p>You agree not to use {SITE_NAME} to:</p>
      <ul>
        <li>Send unlawful, harassing, deceptive, or abusive communications;</li>
        <li>Violate the rights of any third party;</li>
        <li>
          Interfere with, disrupt, or attempt to gain unauthorised access to the
          app, the website, or related systems; or
        </li>
        <li>Use the app for any purpose that is unlawful or prohibited by these Terms.</li>
      </ul>

      <h2>8. Intellectual property</h2>
      <p>
        The {SITE_NAME} app, website, and their content — including text,
        design, and logos — are owned by {SITE_NAME} or its licensors and are
        protected by applicable intellectual property laws. These Terms do not
        grant you any right to use our branding except as necessary to use the
        app as intended.
      </p>

      <h2>9. Service availability</h2>
      <p>
        We aim to keep {SITE_NAME} available and working well, but we do not
        guarantee that the app or website will always be available,
        uninterrupted, or error-free. We may modify, suspend, or discontinue
        features from time to time.
      </p>

      <h2>10. Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, {SITE_NAME} and its contributors
        will not be liable for any indirect, incidental, special, consequential,
        or punitive damages, or for any loss of profits, revenue, data, or
        goodwill, arising out of or related to your use of, or inability to use,
        the app or website. {SITE_NAME} is provided on an &quot;as is&quot; and
        &quot;as available&quot; basis.
      </p>

      <h2>11. Changes to these terms</h2>
      <p>
        We may update these Terms from time to time. When we do, we will revise
        the &quot;last updated&quot; date above. Your continued use of{" "}
        {SITE_NAME} after changes take effect constitutes acceptance of the
        updated Terms.
      </p>

      <h2>12. Contact</h2>
      <p>
        If you have questions about these Terms, contact us at{" "}
        <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
      </p>
    </LegalPage>
  );
}
