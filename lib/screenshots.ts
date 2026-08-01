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
  | "disputeSelection"
  | "disputePaused"
  | "disputeResolved";

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
    status: "ready",
    src: "/screenshots/invoice-list.png",
    width: 1320,
    height: 2868,
    alt: "DueSteer invoice list showing recovered, pending and lost totals above active overdue invoices with their days overdue and current recovery stage",
  },
  emailDraft: {
    status: "ready",
    src: "/screenshots/email-draft.png",
    width: 1260,
    height: 2736,
    alt: "DueSteer generated follow-up email ready to review and send",
  },
  paymentPromise: {
    status: "ready",
    src: "/screenshots/payment-promise.png",
    width: 1320,
    height: 2868,
    alt: "DueSteer payment promise logged on an invoice",
  },
  recoveryHistory: {
    status: "ready",
    src: "/screenshots/recovery-history.png",
    width: 1260,
    height: 2736,
    alt: "DueSteer recovery history timeline for an invoice",
  },
  disputeSelection: {
    status: "ready",
    src: "/screenshots/dispute-selection.png",
    width: 1170,
    height: 2532,
    alt: "DueSteer invoice dispute selection screen with Invoice disputed selected and the Pause Escalation button visible",
  },
  disputePaused: {
    status: "ready",
    src: "/screenshots/dispute-paused.png",
    width: 1170,
    height: 2532,
    alt: "DueSteer Invoice Details screen showing escalation paused because the invoice is under dispute",
  },
  disputeResolved: {
    status: "ready",
    src: "/screenshots/dispute-resolved.png",
    width: 1260,
    height: 2736,
    alt: "DueSteer screen for resolving an invoice dispute and continuing the invoice recovery process",
  },
};
