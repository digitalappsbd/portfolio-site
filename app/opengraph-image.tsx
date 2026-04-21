import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Md Abu Sufian — Senior Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#f7f4ee",
          color: "#0e0e10",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 18,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: "#8a8780",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                width: 40,
                height: 40,
                background: "#0e0e10",
                color: "#f7f4ee",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 8,
                fontSize: 22,
                fontWeight: 700,
                letterSpacing: 0,
              }}
            >
              S
            </div>
            <div>Md Abu Sufian — Portfolio</div>
          </div>
          <div>MMXXVI · No. 047</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              display: "flex",
              fontSize: 92,
              fontWeight: 500,
              lineHeight: 0.96,
              letterSpacing: -3,
              maxWidth: 1040,
            }}
          >
            Senior Full Stack Developer shipping AI-native products.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              color: "#3a3833",
              lineHeight: 1.35,
              maxWidth: 900,
            }}
          >
            Next.js · React · TypeScript · Python · Flutter · Agents. Builder
            behind UnicornToolbox, AgentPress, and LiveKanvas.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #d9d4c8",
            paddingTop: 24,
            fontSize: 18,
            color: "#8a8780",
            letterSpacing: 1,
          }}
        >
          <div>portfolio.unicorntoolbox.com</div>
          <div>Dhaka · Working globally · GMT+6</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
