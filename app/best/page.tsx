import type { Metadata } from "next";
import BestDirectory from "@/components/BestDirectory";
import { ARTICLES } from "@/lib/guides";

export const metadata: Metadata = {
  title: "Software Comparisons & Practical Guides",
  description:
    "Browse practical software comparisons and step-by-step guides for freelancers and small businesses, organized by category and real-world task.",
  alternates: { canonical: "/best" },
  openGraph: {
    title: "Software Comparisons & Practical Guides",
    description:
      "Browse practical software comparisons and step-by-step guides for freelancers and small businesses, organized by category and real-world task.",
    url: "/best",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Comparisons & Practical Guides",
    description:
      "Browse practical software comparisons and step-by-step guides for freelancers and small businesses, organized by category and real-world task.",
  },
};

export default function BestHubPage() {
  return (
    <>
      <section className="bg-white border-b border-black/[0.06]">
        <div className="sp-container py-16 sm:py-24">
          <p className="sp-eyebrow uppercase tracking-wider text-xs">StackPick comparisons</p>
          <h1 className="sp-title mt-3 max-w-4xl">Software worth a closer look.</h1>
          <p className="mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-[#6e6e73]">
            Practical comparisons for freelancers and small businesses. Start with the job,
            understand the trade-offs, then choose the tool that fits.
          </p>
        </div>
      </section>

      <section className="bg-[#f5f5f7]">
        <BestDirectory articles={ARTICLES} />
      </section>
    </>
  );
}
