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

/**
 * Optional "why did you opt out?" answers, accepted by the Edge Function only
 * after the opt-out has happened. Values must match the function exactly.
 */
export const OPT_OUT_REASONS = [
  { value: "not_relevant", label: "Not relevant to my work" },
  { value: "no_iphone", label: "I don't use an iPhone" },
  { value: "want_web", label: "I'd use a web version" },
  { value: "have_tool", label: "I already use something for this" },
  { value: "not_now", label: "Not right now" },
  { value: "other", label: "Other" },
] as const;

export type OptOutReason = (typeof OPT_OUT_REASONS)[number]["value"];

/** The Edge Function rejects notes longer than this. */
export const OPT_OUT_NOTE_MAX = 500;

export type OptOutResponse = {
  /** HTTP status, or null when the request never got a response. */
  httpStatus: number | null;
  /** The `status` field of the JSON body, if there was one. */
  status: unknown;
};

/**
 * POSTs to the opt-out Edge Function. Never throws: network failures and
 * non-JSON responses come back with `status: undefined`.
 *
 * The function only allows requests from duesteer.app, so in development the
 * call goes to a local mock instead (see lib/optOutMock.ts). The check on
 * NODE_ENV is replaced at build time, so production bundles never include it.
 */
export async function postOptOut(body: object): Promise<OptOutResponse> {
  if (process.env.NODE_ENV === "development") {
    const { mockOptOut } = await import("@/lib/optOutMock");
    return mockOptOut(body);
  }

  let httpStatus: number | null = null;
  try {
    const response = await fetch(OPT_OUT_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    httpStatus = response.status;
    const data: unknown = await response.json();
    return {
      httpStatus,
      status:
        data && typeof data === "object" && "status" in data
          ? data.status
          : undefined,
    };
  } catch (error) {
    // Network failure, a CORS rejection, or a non-JSON response.
    console.error("Opt-out request failed", error);
    return { httpStatus, status: undefined };
  }
}
