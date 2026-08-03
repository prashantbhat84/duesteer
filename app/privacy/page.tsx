import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { PRIVACY_EMAIL, SITE_NAME } from "@/lib/config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Duesteer handles your information. Invoice data is stored locally on your device, no account is required for core invoice tracking, and subscriptions are processed by Apple.",
  alternates: { canonical: "/privacy" },
};

/*
 * NOTE TO MAINTAINERS:
 * This privacy policy is a plain-language draft based only on the product
 * facts we currently have. It intentionally avoids inventing legal entities,
 * addresses, jurisdictions, data processors, or compliance claims.
 * >>> Have this policy reviewed by a qualified professional before launch. <<<
 */
export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      lastUpdated="July 12, 2026"
      intro={`This Privacy Policy explains how ${SITE_NAME} handles information in connection with the ${SITE_NAME} iOS app and this website. We designed ${SITE_NAME} to keep your invoice data on your device and to keep you in control.`}
    >
      <h2>Overview</h2>
      <p>
        {SITE_NAME} is an iOS app that helps you recover overdue invoices with a
        guided escalation process. Our approach to privacy is simple: keep your
        invoice data on your device, avoid collecting what we don&apos;t need,
        and leave you in control of any communications you send.
      </p>

      <h2>Invoice data is stored locally</h2>
      <p>
        The invoices you add, along with their recovery history, notes,
        disputes, and payment promises, are stored locally on your device.{" "}
        {SITE_NAME} does not require a cloud account to track invoices, and your
        invoice details are not stored on our servers.
      </p>

      <h2>No account required for core features</h2>
      <p>
        You do not need to create an account to track invoices and use the core
        recovery workflow. {SITE_NAME} may store limited profile or
        configuration information you choose to provide — such as your name and
        email address — so it can be included in the follow-up messages you
        generate. This information is used to make the app work for you and is
        not sold.
      </p>

      <h2>Communications you send</h2>
      <p>
        {SITE_NAME} helps you generate reminder and escalation emails, but it
        does not send them for you. You review each message and send it yourself
        from your own email app. {SITE_NAME} does not read your inbox or access
        your email account.
      </p>

      <h2>Subscriptions and payments</h2>
      <p>
        Premium subscriptions are purchased and processed by Apple through the
        App Store. We do not receive or store your payment card details. Apple
        handles billing, renewals, and refunds in accordance with its own terms
        and privacy policy.
      </p>

      <h2>Website analytics</h2>
      <p>
        This website may use basic, privacy-respecting analytics in the future
        to understand aggregate traffic and improve the site. If we add
        analytics, we will update this policy to describe what is collected.
      </p>

      <h2>Support communications</h2>
      <p>
        If you contact us for support, you do so by email. We use the contents
        of your message and your email address only to respond to and resolve
        your request.
      </p>

      <h2>Children</h2>
      <p>
        {SITE_NAME} is intended for use by businesses and professionals and is
        not directed to children. It is not intended for use by children.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this Privacy Policy from time to time. When we do, we will
        revise the &quot;last updated&quot; date above. Please review this page
        periodically for any changes.
      </p>

      <h2>Contact us</h2>
      <p>
        If you have questions about this Privacy Policy, contact us at{" "}
        <a href={`mailto:${PRIVACY_EMAIL}`}>{PRIVACY_EMAIL}</a>.
      </p>
    </LegalPage>
  );
}
