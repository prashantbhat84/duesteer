/**
 * Web-version waitlist: the values shared by the signup form
 * (components/WaitlistForm.tsx) and the API route (app/api/waitlist/route.ts).
 *
 * The `public.web_waitlist` table rejects any placement or platform outside
 * these lists, so they must match its check constraints exactly.
 */

export const WAITLIST_ENDPOINT = "/api/waitlist";

export const WAITLIST_PLACEMENTS = ["hero", "final-cta", "faq", "web-page"] as const;
export type WaitlistPlacement = (typeof WAITLIST_PLACEMENTS)[number];

export const WAITLIST_PLATFORMS = [
  "windows",
  "android",
  "mac",
  "linux",
  "ios",
  "other",
] as const;
export type WaitlistPlatform = (typeof WAITLIST_PLATFORMS)[number];

/** Column limits from the table definition. */
export const WAITLIST_EMAIL_MAX = 254;
export const WAITLIST_SOURCE_MAX = 64;

/** Deliberately loose: one "@", something either side, a dot in the domain. */
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(email: string): boolean {
  return (
    email.length >= 3 &&
    email.length <= WAITLIST_EMAIL_MAX &&
    EMAIL_PATTERN.test(email)
  );
}

export function isWaitlistPlacement(value: unknown): value is WaitlistPlacement {
  return (
    typeof value === "string" &&
    (WAITLIST_PLACEMENTS as readonly string[]).includes(value)
  );
}

/** Anything unrecognised becomes "other", which the table always accepts. */
export function toWaitlistPlatform(value: unknown): WaitlistPlatform {
  return typeof value === "string" &&
    (WAITLIST_PLATFORMS as readonly string[]).includes(value)
    ? (value as WaitlistPlatform)
    : "other";
}

/**
 * Best guess at the visitor's platform from the browser. Browser-only: call it
 * after mount, never during render on the server.
 *
 * iPadOS reports a desktop Mac user agent by default, so a "Mac" with a touch
 * screen is treated as iOS.
 */
export function detectPlatform(): WaitlistPlatform {
  const ua = navigator.userAgent;

  if (/iPhone|iPad|iPod/i.test(ua)) return "ios";
  if (/Macintosh|Mac OS X/i.test(ua)) {
    return navigator.maxTouchPoints > 1 ? "ios" : "mac";
  }
  if (/Android/i.test(ua)) return "android";
  if (/Windows/i.test(ua)) return "windows";
  if (/Linux|X11|CrOS/i.test(ua)) return "linux";
  return "other";
}

export type WaitlistResponse = { ok: true } | { ok: false; error: string };
