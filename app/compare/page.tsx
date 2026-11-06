import type { Metadata } from "next";
import { SOFTWARE_PROFILES } from "@/lib/software";
import CompareWorkspace from "@/components/CompareWorkspace";

export const metadata: Metadata = {
  title: "Compare Software Side by Side | StackPick",
  description: "Compare software pricing, free-plan limits, capabilities, strengths and trade-offs side by side.",
  robots: { index: false, follow: true },
};

type PageProps = { searchParams: Promise<{ tools?: string | string[] }> };

export default async function ComparePage({ searchParams }: PageProps) {
  const params = await searchParams;
  const raw = Array.isArray(params.tools) ? params.tools.join(",") : params.tools || "";
  const requested = [...new Set(raw.split(",").map((slug) => slug.trim()).filter(Boolean))].slice(0, 3);
  const selected = requested
    .map((slug) => SOFTWARE_PROFILES.find((item) => item.slug === slug))
    .filter((item): item is (typeof SOFTWARE_PROFILES)[number] => Boolean(item));

  return <CompareWorkspace initialProfiles={selected} allProfiles={SOFTWARE_PROFILES} />;
}
