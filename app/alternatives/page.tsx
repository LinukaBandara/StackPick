import type { Metadata } from "next";
import Link from "next/link";
import AlternativesFinder from "@/components/AlternativesFinder";
import { SOFTWARE_PROFILES } from "@/lib/software";

export const metadata: Metadata = {
  title: "Software Alternatives Finder | StackPick",
  description: "Explore alternatives to software products and compare other tools in the same category.",
  robots: { index: false, follow: true },
};

type PageProps = { searchParams: Promise<{ software?: string | string[] }> };

export default async function AlternativesPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const initialSlug = Array.isArray(params.software) ? params.software[0] || "" : params.software || "";
  return <main className="bg-white">
    <section className="border-b border-black/[0.07] bg-[#f5f5f7]"><div className="sp-container py-14 sm:py-20">
      <Link href="/software" className="text-sm font-semibold text-[#001D39] hover:underline">← Browse the catalogue</Link>
      <p className="sp-eyebrow mt-8">Explore your options</p>
      <h1 className="sp-display mt-4 max-w-4xl">Looking for an alternative?</h1>
      <p className="sp-body-large mt-5 max-w-2xl">Choose the product you're considering. We'll show its listed alternatives and other products in the same category so you can compare the trade-offs.</p>
    </div></section>
    <section className="sp-container py-12 sm:py-16"><AlternativesFinder software={SOFTWARE_PROFILES} initialSlug={initialSlug} /></section>
  </main>;
}
