import { ImageResponse } from "next/og";

export const alt = "Duesteer — Recover overdue invoices with a clear process";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const BRAND_GREEN = "#0FA070";
const DEEP_GREEN = "#0A6B4B";
const GOLD = "#E8A93C";
const INK = "#1F2937";
const LIGHT_GREEN = "#E8F5EE";

async function inter(weight: 400 | 700) {
  const res = await fetch(
    `https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-${weight}-normal.woff`
  );
  return res.arrayBuffer();
}

export default async function Image() {
  const [regular, bold] = await Promise.all([inter(400), inter(700)]);

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: DEEP_GREEN, fontFamily: "Inter" }}>
        <div style={{ width: 24, height: "100%", background: BRAND_GREEN }} />

        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "64px 80px 64px 72px",
            color: "#ffffff",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ fontSize: 40, fontWeight: 700, letterSpacing: -0.5 }}>Duesteer</div>
            <div
              style={{
                display: "flex",
                background: GOLD,
                color: INK,
                fontSize: 24,
                fontWeight: 700,
                padding: "10px 22px",
                borderRadius: 999,
              }}
            >
              Free on iPhone
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 66, fontWeight: 700, lineHeight: 1.1, letterSpacing: -1.5, maxWidth: 1000 }}>
              Recover overdue invoices without souring the relationship.
            </div>
            <div style={{ marginTop: 26, fontSize: 30, color: LIGHT_GREEN, maxWidth: 940, lineHeight: 1.35 }}>
              Tracks promises and disputes, escalates step by step, and builds your evidence.
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, color: LIGHT_GREEN }}>
            <span>For freelancers and small businesses</span>
            <span style={{ fontWeight: 700, color: "#ffffff" }}>duesteer.app</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Inter", data: regular, weight: 400, style: "normal" },
        { name: "Inter", data: bold, weight: 700, style: "normal" },
      ],
    }
  );
}