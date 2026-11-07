import type { Metadata } from "next";
import VendorPortal from "@/components/VendorPortal";

export const metadata: Metadata = {
  title: "Vendor workspace",
  robots: { index: false, follow: false },
};

export default function VendorPortalPage() {
  return (
    <main className="min-h-[75vh] bg-[#f5f5f7] px-4 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <p className="sp-eyebrow">Private vendor workspace</p>
          <h1 className="sp-title mt-3 text-[#1d1d1f]">Your product requests.</h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-[#6e6e73]">Sign in with a confirmed StackPick account to submit and track profile claims or product suggestions.</p>
        </div>
        <VendorPortal />
      </div>
    </main>
  );
}
