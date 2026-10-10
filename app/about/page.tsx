import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About StackPick",
  description: "How StackPick compares business software, evaluates trade-offs, and handles corrections and commercial relationships.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="bg-white w-full">
      <div className="sp-container max-w-3xl py-16 sm:py-24">
        <p className="sp-eyebrow uppercase tracking-wider text-xs">About us</p>
        <h1 className="sp-title mt-3 text-[#1d1d1f]">About StackPick</h1>

        <div className="mt-8 space-y-6 text-base sm:text-lg leading-relaxed text-[#6e6e73]">
          <p>
            StackPick compares business software for freelancers and small teams, with a focus on
            budget-conscious choices rather than just the biggest enterprise names. Our goal is to
            help readers choose tools that fit their actual workflow, budget, and stage of growth.
          </p>
          <p>
            We examine vendor documentation, pricing and plan pages, product limitations, and
            publicly available user feedback. Unless an article explicitly describes a hands-on
            test, readers should treat our comparisons as desk research rather than a claim that
            every product was independently tested.
          </p>
        </div>

        <section className="mt-12 border-t border-black/[0.08] pt-8">
          <h2 className="text-2xl font-semibold tracking-tight text-[#1d1d1f]">How we compare tools</h2>
          <div className="mt-5 space-y-5 text-base leading-7 text-[#6e6e73]">
            <p>
              We look beyond feature counts and consider the job a reader needs to get done. The
              relevant criteria can include total cost, free-plan limits, setup effort, workflow
              fit, collaboration, integrations, data export, and the point at which a tool may
              become too limited or expensive.
            </p>
            <p>
              Pricing and plan terms change. We link to providers so readers can verify current
              terms before purchasing, and we avoid treating an advertised free plan as proof that
              every feature or use case is free.
            </p>
            <p>
              No single product is right for everyone. Our recommendations explain who a tool may
              suit and the trade-offs readers should consider rather than declaring a universal
              winner.
            </p>
          </div>
        </section>

        <section className="mt-12 border-t border-black/[0.08] pt-8">
          <h2 className="text-2xl font-semibold tracking-tight text-[#1d1d1f]">Independence and corrections</h2>
          <div className="mt-5 space-y-5 text-base leading-7 text-[#6e6e73]">
            <p>
              Vendor links currently go directly to software providers, and StackPick does not
              currently earn affiliate commissions from them. If commercial relationships are
              introduced, we will disclose them on relevant pages and update our
              <Link href="/affiliate-disclosure" className="text-[#004bb5] font-medium hover:underline"> affiliate disclosure</Link>.
            </p>
            <p>
              If you find outdated pricing, a broken link, or a material error, please contact us
              so we can review it. We aim to correct material errors rather than leave readers with
              information we know is misleading.
            </p>
            <p>
              Read our <Link href="/privacy" className="text-[#004bb5] font-medium hover:underline">privacy policy</Link>
              {" "}to learn how analytics and any future advertising technologies are handled, or visit
              {" "}<Link href="/contact" className="text-[#004bb5] font-medium hover:underline">Contact</Link>
              {" "}to send a correction.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
