import Image from "next/image";
import Link from "next/link";
import { BRAND_ICON, SITE_NAME } from "@/lib/config";

/**
 * Duesteer wordmark: the real app icon beside the product name, sized to match
 * an iOS home-screen icon (32px) so the site reads as the app's own site.
 */
export default function Wordmark({
  className = "",
}: {
  className?: string;
}) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 font-semibold tracking-tight text-ink ${className}`}
      aria-label={`${SITE_NAME} home`}
    >
      <Image
        src={BRAND_ICON}
        alt=""
        aria-hidden="true"
        width={32}
        height={32}
        loading="eager"
        className="h-8 w-8 rounded-[9px] shadow-card ring-1 ring-black/5"
      />
      <span className="text-lg">{SITE_NAME}</span>
    </Link>
  );
}
