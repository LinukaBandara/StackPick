import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1D1D1F",
        indigo: { DEFAULT: "#0071E3", dark: "#0066CC" },
        amber: "#D97706",
        cloud: "#F5F5F7",
        slate: "#6E6E73",
        borderc: "#E5E5EA",
        success: "#248A3D",
        error: "#B91C1C",
      },
      fontFamily: { sans: ["var(--font-inter)", "-apple-system", "BlinkMacSystemFont", "sans-serif"] },
      borderRadius: { card: "18px" },
    },
  },
  plugins: [],
};

export default config;
