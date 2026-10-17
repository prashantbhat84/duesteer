import { ImageResponse } from "next/og";

export const alt = "Duesteer — Recover overdue invoices with a clear process";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#111827",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 36, fontWeight: 700, letterSpacing: -0.5 }}>
          Duesteer
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.1, letterSpacing: -1.5, maxWidth: 980 }}>
            Recover overdue invoices without souring the relationship.
          </div>
          <div style={{ marginTop: 28, fontSize: 30, color: "#9ca3af", maxWidth: 900 }}>
            Tracks promises and disputes, escalates step by step, and builds your evidence.
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, color: "#9ca3af" }}>
          <span>iPhone app for freelancers and small businesses</span>
          <span>duesteer.app</span>
        </div>
      </div>
    ),
    size
  );
}