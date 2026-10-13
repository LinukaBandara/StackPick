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
        <p className="mt-3 text-sm text-[#6e6e73]">Last updated October 2026</p>
        <div className="mt-8 space-y-8 text-base sm:text-lg leading-relaxed text-[#6e6e73]">
          <section>
            <h2 className="text-xl font-bold tracking-tight text-[#1d1d1f] mb-2">No accounts</h2>
            <p>StackPick does not require user sign-up or collect personal customer profiles.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold tracking-tight text-[#1d1d1f] mb-2">Affiliate links</h2>
            <p>
              StackPick does not currently use affiliate links or earn affiliate commissions from vendor links. If affiliate relationships are introduced, we will disclose them on relevant pages and update this policy. See our{" "}
              <Link href="/affiliate-disclosure" className="text-[#004bb5] font-medium hover:underline">
                Affiliate Disclosure
              </Link>{" "}
              for details.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold tracking-tight text-[#1d1d1f] mb-2">Analytics</h2>
            <p>
              StackPick only loads Google Analytics after you choose to accept optional analytics
              in the cookie banner. If you reject optional analytics, the analytics script is not
              loaded by the site. You can change your choice at any time using “Cookie settings” in
              the footer. If you accept analytics, Google may process usage events, device and
              browser information, and online identifiers under its own terms. Your choice is saved
              in your browser's local storage as a preference; StackPick does not use that preference
              to identify you. Please do not submit sensitive personal information through this website.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold tracking-tight text-[#1d1d1f] mb-2">Cookie and local storage choices</h2>
            <p>
              The consent banner lets you accept or reject optional analytics and reopen the settings
              from the site footer. StackPick stores the preference in your browser's local storage,
              not in an authentication or advertising profile. Essential storage is used only to
              remember your choice. Clearing browser storage removes that saved choice, so the banner
              may appear again. Your browser may also offer separate controls for cookies and site data.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold tracking-tight text-[#1d1d1f] mb-2">Third-party assets</h2>
            <p>
              Some comparison cards display provider favicons loaded from Google's public favicon
              service. When those images load, your browser connects to Google and may disclose
              technical request information such as your IP address and browser details. These
              image requests are separate from Google Analytics consent. We do not use those images
              to create a StackPick account or user profile.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold tracking-tight text-[#1d1d1f] mb-2">Advertising</h2>
            <p>
              StackPick does not currently serve display advertisements. If we introduce an
              advertising service such as Google AdSense, that service may use cookies or similar
              technologies to deliver, measure, or personalize advertisements, subject to applicable
              law and the choices made available to visitors. Where required, appropriate consent
              controls will be implemented before non-essential advertising technologies are used.
              This policy will be updated before advertising is enabled.
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
