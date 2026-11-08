import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Private Analytics Workspace",
  robots: { index: false, follow: false, noarchive: true },
};

export default function AnalyticsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav aria-label="Analytics workspace" className="border-b border-black/[0.07] bg-white px-4 py-3">
        <div className="mx-auto flex max-w-6xl flex-wrap gap-3 text-sm font-semibold">
          <Link href="/admin/analytics" className="text-[#001D39]">Analytics overview</Link>
          <Link href="/admin/analytics/journey" className="text-[#001D39]">Journey readiness</Link>
        </div>
      </nav>
      {children}
    </>
  );
}
