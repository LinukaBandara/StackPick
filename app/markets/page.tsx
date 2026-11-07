import type { Metadata } from "next";
import Link from "next/link";
import { getMarket, MARKETS } from "@/lib/markets";

export const metadata: Metadata = {
  title: "Markets & Regional Software Pricing",
  description: "Explore StackPick's market settings, local currencies and guidance for checking software availability and regional pricing.",
  alternates: { canonical: "/markets" },
};

type PageProps = { searchParams: Promise<{ market?: string }> };

export default async function MarketsPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const selected = getMarket(params.market);

  return (
    <div className="bg-white">
      <section className="border-b border-black/[0.08] bg-[#f5f5f7]">
        <div className="sp-container py-14 sm:py-20">
          <p className="sp-eyebrow">StackPick · Global markets</p>
          <h1 className="sp-display mt-4 max-w-4xl">Software decisions, with your market in mind.</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#6e6e73]">
            Choose a market to see its local currency and the checks that matter before choosing business software.
          </p>
        </div>
      </section>

      <section className="sp-container py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_340px]">
          <div>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="sp-eyebrow">Available market settings</p>
                <h2 className="sp-title mt-2">Choose your market</h2>
              </div>
              <p className="text-sm text-[#6e6e73]">Current selection: <strong className="text-[#1d1d1f]">{selected.name}</strong></p>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {MARKETS.map((market) => {
                const active = market.code === selected.code;
                return (
                  <Link
                    key={market.code}
                    href={`/markets?market=${market.code}`}
                    aria-current={active ? "page" : undefined}
                    className={`rounded-2xl border p-5 transition-colors ${active ? "border-[#001D39] bg-[#f3f7fb]" : "border-black/10 hover:border-[#001D39]/40"}`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-semibold text-[#1d1d1f]">{market.name}</h3>
                      <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#001D39]">{market.code}</span>
                    </div>
                    <p className="mt-3 text-sm text-[#4b5563]">Currency: <strong>{market.currency}</strong></p>
                    <p className="mt-1 text-xs text-[#6e6e73]">Display locale: {market.locale}</p>
                    <p className="mt-3 text-xs leading-5 text-[#6e6e73]">{market.language}</p>
                  </Link>
                );
              })}
            </div>
          </div>

          <aside className="h-fit rounded-[24px] border border-black/10 bg-[#f5f5f7] p-6 sm:p-7">
            <p className="sp-eyebrow">Selected market</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#1d1d1f]">{selected.name}</h2>
            <p className="mt-2 text-sm text-[#6e6e73]">Preferred currency code</p>
            <p className="mt-1 text-3xl font-semibold tracking-tight text-[#001D39]">{selected.currency}</p>
            <div className="mt-6 border-t border-black/10 pt-5">
              <h3 className="text-sm font-semibold text-[#1d1d1f]">Before you subscribe</h3>
              <p className="mt-2 text-sm leading-6 text-[#4b5563]">{selected.pricingNote}</p>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-[#4b5563]">
                <li>• Check whether the provider accepts customers and businesses in your country.</li>
                <li>• Confirm the billing currency, taxes, payment methods and renewal price at checkout.</li>
                <li>• Check local data residency, support hours and feature restrictions where relevant.</li>
              </ul>
            </div>
            <Link href="/software" className="mt-6 inline-flex text-sm font-semibold text-[#001D39] hover:underline">Explore software profiles →</Link>
          </aside>
        </div>

        <div className="mt-12 rounded-2xl border border-black/10 p-6 sm:p-8">
          <p className="sp-eyebrow">Our regional pricing standard</p>
          <h2 className="sp-title mt-2">No guessed exchange rates. No assumed availability.</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-[#4b5563]">
            A market selection is a browsing preference, not proof that a vendor supports that country. StackPick will show a regional price only when it has a source for that market and billing currency. We do not convert a US list price and present it as a local quote. Promotions, taxes, seat rules and payment fees must be checked against the provider's current regional terms.
          </p>
        </div>
      </section>
    </div>
  );
}
