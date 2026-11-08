import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "88px",
          background: "#000000",
          color: "#ffffff",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <div
            style={{
              width: 112,
              height: 112,
              borderRadius: 24,
              background: "#ffffff",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 9,
            }}
          >
            <div style={{ width: 66, height: 10, borderRadius: 6, background: "#000000" }} />
            <div style={{ width: 50, height: 10, borderRadius: 6, background: "#000000", opacity: 0.78 }} />
            <div style={{ width: 34, height: 10, borderRadius: 6, background: "#000000", opacity: 0.56 }} />
          </div>
          <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: -3 }}>StackPick</div>
        </div>
        <div style={{ marginTop: 48, fontSize: 38, lineHeight: 1.25, color: "#d4d4d4" }}>
          Software, without the noise.
        </div>
        <div style={{ marginTop: 22, fontSize: 24, color: "#929292" }}>
          Honest comparisons for small businesses
        </div>
      </div>
    ),
    size,
  );
}
