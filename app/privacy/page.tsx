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
              StackPick uses Google Analytics to understand site usage, including which pages are
              visited and how visitors interact with the site. Google may process online identifiers,
              device and browser information, and usage events to provide these analytics. Browser
              settings and available Google tools may offer ways to limit analytics collection.
              Please do not submit sensitive personal information through this website.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold tracking-tight text-[#1d1d1f] mb-2">Advertising</h2>
            <p>
              StackPick does not currently serve display advertisements. If we introduce an
              advertising service such as Google AdSense, that service may use cookies or similar
              technologies to deliver, measure, or personalize advertisements, subject to applicable
              law and the choices made available to visitors. This policy will be updated before
              advertising is enabled.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold tracking-tight text-[#1d1d1f] mb-2">Contact</h2>
            <p>
              For privacy questions or requests, use the contact details published on our Contact
              page. Please do not include sensitive personal information in your message.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
