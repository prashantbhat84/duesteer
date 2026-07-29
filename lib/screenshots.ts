/**
 * Manifest of the real DueSteer app screenshots used across the marketing site.
 *
 * Every product image on the site comes from this file — there is no hand-drawn
 * or CSS-mocked app UI anywhere in the codebase.
 *
 * TO ADD A MISSING SCREENSHOT:
 *   1. Drop the raw iOS screenshot into `public/screenshots/` using the exact
 *      `expects` filename listed below.
 *   2. Change that entry's `status` to "ready" and fill in the real pixel
 *      `width` / `height` (the intrinsic size of the PNG).
 * Nothing else needs to change — the layouts already reserve the space.
 *
 * Screens marked "pending" render a clearly-labelled placeholder instead of an
 * invented product screen.
 */

export type ScreenshotKey =
  | "invoiceDetail"
  | "escalation"
  | "invoiceList"
  | "emailDraft"
  | "paymentPromise"
  | "recoveryHistory"
  | "notifications"
  | "pdfReport"
  | "privacy";

type ReadyScreenshot = {
  status: "ready";
  /** Path under /public. */
  src: string;
  /** Intrinsic pixel size — used to preserve the exact aspect ratio. */
  width: number;
  height: number;
  /** Describes the screen for screen readers. */
  alt: string;
};

type PendingScreenshot = {
  status: "pending";
  /** Filename to drop into public/screenshots/ to fill this slot. */
  expects: string;
  /** Short label shown in the placeholder and used as alt text once supplied. */
  alt: string;
};

export type Screenshot = ReadyScreenshot | PendingScreenshot;

export const SCREENSHOTS: Record<ScreenshotKey, Screenshot> = {
  invoiceDetail: {
    status: "ready",
    src: "/screenshots/invoice-detail.png",
    width: 1170,
    height: 2532,
    alt: "DueSteer invoice detail screen showing an overdue amount, client payment behaviour, the next escalation action, and a pause escalation control",
  },
  escalation: {
    status: "ready",
    src: "/screenshots/escalation-stages.png",
    width: 1260,
    height: 2736,
    alt: "DueSteer escalation screen showing the recovery stages from friendly reminder through firm reminder, final notice and formal demand letter",
  },
  invoiceList: {
    status: "pending",
    expects: "invoice-list.png",
    alt: "DueSteer overdue invoice list with clear status labels",
  },
  emailDraft: {
    status: "pending",
    expects: "email-draft.png",
    alt: "DueSteer generated follow-up email ready to review and send",
  },
  paymentPromise: {
    status: "pending",
    expects: "payment-promise.png",
    alt: "DueSteer payment promise logged on an invoice",
  },
  recoveryHistory: {
    status: "pending",
    expects: "recovery-history.png",
    alt: "DueSteer recovery history timeline for an invoice",
  },
  notifications: {
    status: "pending",
    expects: "notifications.png",
    alt: "DueSteer reminder notification for a follow-up",
  },
  pdfReport: {
    status: "pending",
    expects: "pdf-report.png",
    alt: "DueSteer recovery history PDF export preview",
  },
  privacy: {
    status: "pending",
    expects: "privacy-settings.png",
    alt: "DueSteer local-first privacy settings",
  },
};
