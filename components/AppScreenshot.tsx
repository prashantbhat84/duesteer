import Image from "next/image";
import { SCREENSHOTS, type ScreenshotKey } from "@/lib/screenshots";

/**
 * Renders a real Duesteer app screenshot in one consistent, restrained device
 * presentation: a thin neutral bezel with a soft shadow. The supplied assets are
 * raw iOS screenshots (no device chrome baked in), so the frame is added here —
 * never draw a second frame around an already-framed image.
 *
 * The image keeps its intrinsic aspect ratio; it is never stretched.
 *
 * If the screen has no asset yet, a clearly-labelled placeholder is shown in the
 * same footprint. See lib/screenshots.ts.
 */
export default function AppScreenshot({
  screen,
  className = "",
  size = "md",
  preload = false,
  sizes = "(min-width: 1024px) 320px, 80vw",
}: {
  screen: ScreenshotKey;
  className?: string;
  /**
   * Maximum rendered width of the device. Use `fill` when the caller already
   * constrains the width (e.g. the hero rail).
   */
  size?: "md" | "lg" | "fill";
  /** Preload the image — use for the hero screenshot only. */
  preload?: boolean;
  /** Override the responsive size hint when the caller renders it wider. */
  sizes?: string;
}) {
  const shot = SCREENSHOTS[screen];
  const maxWidth = {
    md: "max-w-[286px]",
    lg: "max-w-[320px]",
    fill: "max-w-none",
  }[size];
  const frame = `relative mx-auto w-full ${maxWidth} rounded-device border border-line bg-surface p-2 shadow-device`;

  if (shot.status === "pending") {
    return (
      <div className={`${frame} ${className}`}>
        <div className="flex aspect-[9/19.5] w-full flex-col items-center justify-center gap-3 rounded-[1.75rem] border-2 border-dashed border-line-strong bg-surface-muted px-6 text-center">
          <span className="rounded-full bg-surface px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-muted">
            Screenshot needed
          </span>
          <p className="text-sm font-medium leading-snug text-body">
            {shot.alt}
          </p>
          <code className="rounded-md bg-surface px-2 py-1 font-mono text-[11px] text-muted">
            /screenshots/{shot.expects}
          </code>
        </div>
      </div>
    );
  }

  return (
    <div className={`${frame} ${className}`}>
      <Image
        src={shot.src}
        alt={shot.alt}
        width={shot.width}
        height={shot.height}
        sizes={sizes}
        preload={preload}
        className="h-auto w-full rounded-[1.75rem] object-contain"
      />
    </div>
  );
}
