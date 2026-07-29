import { APP_STORE_URL } from "@/lib/config";
import CtaButton, { AppleIcon } from "./CtaButton";

/**
 * DueSteer has not been published yet, so the App Store CTA is shown in a
 * disabled "Coming Soon" state and does not navigate anywhere.
 *
 * AT LAUNCH — two edits, nothing else:
 *   1. Paste the real App Store URL into APP_STORE_URL (lib/config.ts).
 *   2. Flip PUBLISHED to true below. That single change switches the label
 *      from "Coming Soon on the App Store" to "Download on the App Store",
 *      enables the link, and hides the "awaiting approval" note.
 */
const PUBLISHED = false;

/**
 * The single App Store button. Always sources its URL from the APP_STORE_URL
 * constant so the link can be updated in one place.
 */
export default function AppStoreButton({
  size = "md",
  variant = "primary",
  className = "",
  note = true,
  tone = "light",
}: {
  size?: "md" | "lg";
  variant?: "primary" | "secondary";
  className?: string;
  /** Show the "awaiting App Store approval" note beneath the button. */
  note?: boolean;
  /** Set to "dark" when the button sits on the dark CTA band, so the note stays readable. */
  tone?: "light" | "dark";
}) {
  const button = (
    <CtaButton
      href={APP_STORE_URL}
      external
      disabled={!PUBLISHED}
      size={size}
      variant={variant}
      className={className}
      aria-label={
        PUBLISHED
          ? "Download DueSteer on the App Store"
          : "DueSteer coming soon on the App Store"
      }
    >
      <AppleIcon />
      {PUBLISHED ? "Download on the App Store" : "Coming Soon on the App Store"}
    </CtaButton>
  );

  if (PUBLISHED || !note) {
    return button;
  }

  return (
    <div className="flex flex-col gap-2">
      {button}
      <p
        className={`text-xs leading-relaxed ${
          tone === "dark" ? "text-on-ink-muted" : "text-muted"
        }`}
      >
        DueSteer is currently awaiting App Store approval.
      </p>
    </div>
  );
}
