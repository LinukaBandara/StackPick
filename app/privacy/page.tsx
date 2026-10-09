import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "StackPick's privacy policy - what data is collected and how affiliate/ad tracking works.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="bg-white w-full">
      <div className="sp-container max-w-3xl py-16 sm:py-24">
        <p className="sp-eyebrow uppercase tracking-wider text-xs">Legal</p>
        <h1 className="sp-title mt-3 text-[#1d1d1f]">Privacy Policy</h1>
        <p className="mt-3 text-sm text-[#86868b]">Last updated October 2026</p>
        <div className="mt-8 space-y-8 text-base sm:text-lg leading-relaxed text-[#6e6e73]">
          <section>
            <h2 className="text-xl font-bold tracking-tight text-[#1d1d1f] mb-2">No accounts</h2>
            <p>StackPick does not require user sign-up or collect personal customer profiles.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold tracking-tight text-[#1d1d1f] mb-2">Affiliate links</h2>
            <p>
              When you click an affiliate link, the destination site (not StackPick) sets a
              tracking cookie or parameter to credit the referral. See our{" "}
              <Link href="/affiliate-disclosure" className="text-[#004bb5] font-medium hover:underline">
                Affiliate Disclosure
              </Link>{" "}
              for details.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold tracking-tight text-[#1d1d1f] mb-2">Analytics</h2>
            <p>
              StackPick uses privacy-conscious analytics to understand aggregate traffic and improve our software comparisons. No sensitive personal data is shared with third parties.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold tracking-tight text-[#1d1d1f] mb-2">Contact</h2>
            <p>Emails sent via the Contact page are handled privately and never shared with third parties.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
