/**
 * Which routes are allowed to market the app.
 *
 * /opted-out is reached by someone who has just asked to stop hearing from us,
 * so the App Store CTA is suppressed there — in the header and in the mobile
 * menu. Navigation and footer links stay, so the page still reads as part of
 * the site rather than a dead end.
 */
const NO_APP_STORE_CTA_ROUTES = ["/opted-out"];

/** True when the App Store CTA may be shown on `pathname`. */
export function showsAppStoreCta(pathname: string): boolean {
  return !NO_APP_STORE_CTA_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`),
  );
}
