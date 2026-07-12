import type { ReactNode } from "react";

/**
 * Reusable iOS-style phone frame. Wraps whatever screen content you pass as
 * children. To show a real screenshot later, pass an <Image> as children in
 * place of the <ScreenshotPlaceholder>.
 */
export default function PhoneFrame({
  children,
  className = "",
  label,
}: {
  children: ReactNode;
  className?: string;
  /** Accessible label describing the screen shown in the frame. */
  label?: string;
}) {
  return (
    <div
      className={`relative mx-auto aspect-[9/19] w-full max-w-[280px] rounded-[2.5rem] border border-slate-300 bg-slate-900 p-2.5 shadow-xl ${className}`}
      role="img"
      aria-label={label ?? "DueSteer app screen preview"}
    >
      {/* Notch */}
      <div className="absolute left-1/2 top-2.5 z-10 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-slate-900" />
      <div className="h-full w-full overflow-hidden rounded-[2rem] bg-white">
        {children}
      </div>
    </div>
  );
}

/**
 * Neutral placeholder for an app screenshot. Renders a simple mock UI so the
 * layout reads correctly before real screenshots are added. Swap this out for
 * a real image inside <PhoneFrame> when screenshots are available.
 */
export function ScreenshotPlaceholder({
  title = "Invoice overview",
  variant = "list",
}: {
  title?: string;
  variant?: "list" | "detail" | "email";
}) {
  return (
    <div className="flex h-full flex-col bg-slate-50">
      <div className="flex items-center justify-between px-4 pb-3 pt-8">
        <span className="text-sm font-semibold text-slate-900">{title}</span>
        <span className="h-6 w-6 rounded-full bg-blue-100" />
      </div>

      {variant === "list" ? (
        <div className="flex flex-1 flex-col gap-2 px-3">
          {[
            { name: "Northwind Co.", tag: "Firm reminder", tone: "amber" },
            { name: "Acme Design", tag: "Final notice", tone: "red" },
            { name: "Harbor LLC", tag: "Promised to pay", tone: "blue" },
            { name: "Gray & Sons", tag: "Friendly reminder", tone: "slate" },
          ].map((row) => (
            <div
              key={row.name}
              className="rounded-xl border border-slate-200 bg-white p-3"
            >
              <div className="flex items-center justify-between">
                <span className="h-2.5 w-20 rounded-full bg-slate-300" />
                <span className="h-2.5 w-10 rounded-full bg-slate-200" />
              </div>
              <span
                className={`mt-2 inline-block rounded-full px-2 py-0.5 text-[10px] font-medium ${toneClass(
                  row.tone,
                )}`}
              >
                {row.tag}
              </span>
            </div>
          ))}
        </div>
      ) : null}

      {variant === "detail" ? (
        <div className="flex flex-1 flex-col gap-3 px-3">
          <div className="rounded-xl border border-slate-200 bg-white p-3">
            <span className="h-2.5 w-16 rounded-full bg-slate-300" />
            <div className="mt-3 h-6 w-24 rounded-md bg-slate-200" />
          </div>
          <div className="rounded-xl border border-blue-200 bg-blue-50 p-3">
            <span className="text-[10px] font-semibold text-accent">
              Recommended next step
            </span>
            <div className="mt-2 h-2.5 w-32 rounded-full bg-blue-200" />
          </div>
          <div className="mt-auto h-9 rounded-xl bg-accent" />
        </div>
      ) : null}

      {variant === "email" ? (
        <div className="flex flex-1 flex-col gap-2 px-3">
          <div className="rounded-xl border border-slate-200 bg-white p-3">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="mb-2 h-2 rounded-full bg-slate-200 last:mb-0"
                style={{ width: `${90 - i * 8}%` }}
              />
            ))}
          </div>
          <div className="mt-auto h-9 rounded-xl bg-accent" />
        </div>
      ) : null}

      <div className="px-3 py-3">
        <div className="mx-auto h-1 w-16 rounded-full bg-slate-300" />
      </div>
    </div>
  );
}

function toneClass(tone: string) {
  switch (tone) {
    case "amber":
      return "bg-amber-100 text-amber-700";
    case "red":
      return "bg-red-100 text-red-700";
    case "blue":
      return "bg-blue-100 text-blue-700";
    default:
      return "bg-slate-100 text-slate-600";
  }
}
