import { SITE_NAME } from "@/lib/config";

/**
 * Supabase Edge Function that records a cold-email opt-out. Called only from
 * the browser (see components/OptOutRunner.tsx), never from the server.
 */
export const OPT_OUT_ENDPOINT =
  "https://qumeqexsmtitkfuplhtn.supabase.co/functions/v1/opt-out";

/** Statuses the Edge Function can return. */
export const OPT_OUT_STATUSES = ["done", "already", "invalid", "error"] as const;

export type OptOutStatus = (typeof OPT_OUT_STATUSES)[number];

export const OPT_OUT_COPY: Record<OptOutStatus, { title: string; body: string }> = {
  done: {
    title: "You've been opted out",
    body: `You won't receive any more emails from ${SITE_NAME}. Thanks for letting us know.`,
  },
  already: {
    title: "You're already opted out",
    body: `You won't receive any more emails from ${SITE_NAME}.`,
  },
  invalid: {
    title: "This link is no longer valid",
    body: 'If you\'re still getting emails, reply to one with "opt out" and I\'ll remove you.',
  },
  error: {
    title: "Something went wrong",
    body: 'Reply to the email with "opt out" and I\'ll remove you manually.',
  },
};

export function isOptOutStatus(value: unknown): value is OptOutStatus {
  return (
    typeof value === "string" &&
    (OPT_OUT_STATUSES as readonly string[]).includes(value)
  );
}
