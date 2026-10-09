import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1D1D1F",
        dark: "#000000",
        blue: {
          DEFAULT: "#001D39",
          dark: "#00142A",
          light: "#E6EDF3",
        },
        indigo: {
          DEFAULT: "#001D39",
          dark: "#00142A",
          light: "#E6EDF3",
        },
        cloud: "#F5F5F7",
        slate: "#6E6E73",
        muted: "#86868B",
        borderc: "#D2D2D7",
        success: "#248A3D",
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"SF Pro Display"',
          '"SF Pro Text"',
          "var(--font-inter)",
          '"Segoe UI"',
          "sans-serif",
        ],
      },
      borderRadius: {
        card: "28px",
        pill: "9999px",
      },
    },
  },
  plugins: [],
};

export default config;
