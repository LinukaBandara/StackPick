import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Private Analytics Workspace",
  robots: { index: false, follow: false, noarchive: true },
};

export default function AnalyticsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
