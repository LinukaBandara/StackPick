import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0F172A",
        indigo: { DEFAULT: "#4F46E5", dark: "#4338CA" },
        amber: "#D97706",
        cloud: "#F8FAFC",
        slate: "#64748B",
        borderc: "#E2E8F0",
        success: "#059669",
        error: "#B91C1C",
      },
      fontFamily: { sans: ["var(--font-inter)", "system-ui", "sans-serif"] },
      borderRadius: { card: "12px" },
    },
  },
  plugins: [],
};

export default config;
