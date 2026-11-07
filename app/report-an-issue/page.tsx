import type { Metadata } from "next";
import Link from "next/link";
import ReportIssueForm from "@/components/ReportIssueForm";

export const metadata: Metadata = {
  title: "Report an Issue or Correction",
  description: "Help StackPick correct outdated software pricing, plan limits, product details and broken links.",
  alternates: { canonical: "/report-an-issue" },
};

export default function ReportAnIssuePage() {
  return (
    <div className="w-full bg-white">
      <div className="sp-container max-w-3xl py-16 sm:py-24">
        <p className="sp-eyebrow text-xs uppercase tracking-wider">Help us keep information accurate</p>
        <h1 className="sp-title mt-3 text-[#1d1d1f]">Report an issue</h1>
        <p className="mt-6 text-base leading-7 text-[#6e6e73] sm:text-lg">
          Found an outdated price, a plan limit that changed, a broken link or a statement
          that needs clarification? Send us the page and the evidence so our editorial team
          can review it.
        </p>
        <ReportIssueForm />
        <p className="mt-8 border-t border-black/[0.08] pt-6 text-sm leading-6 text-[#6e6e73]">
          We review correction requests against available evidence. For details about our
          process, read the <Link href="/review-policy" className="font-medium text-[#001D39] underline underline-offset-4">editorial review policy</Link>.
        </p>
      </div>
    </div>
  );
}
