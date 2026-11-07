import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#000000",
          borderRadius: 36,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 13, width: 106 }}>
          <div style={{ height: 15, width: 106, borderRadius: 8, background: "#ffffff" }} />
          <div style={{ height: 15, width: 81, borderRadius: 8, background: "#ffffff", opacity: 0.78 }} />
          <div style={{ height: 15, width: 56, borderRadius: 8, background: "#ffffff", opacity: 0.56 }} />
        </div>
      </div>
    ),
    size,
  );
}
