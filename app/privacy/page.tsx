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
              StackPick does not currently serve display advertisements. If Google AdSense or another
              advertising service is enabled, Google and other third-party vendors may use cookies,
              web beacons, IP addresses, or similar identifiers to serve, measure, limit repetition
              of, and, where enabled, personalize ads. Advertising cookies may be used based on a
              visitor's previous visits to this site or other websites. The information processed
              can include browser or device details, ad requests, and interactions with ads, subject
              to the relevant provider's settings and policies.
            </p>
            <p>
              Visitors can manage personalized advertising through{" "}
              <a
                href="https://adssettings.google.com/"
                className="text-[#004bb5] font-medium hover:underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                Google's Ads Settings
              </a>
              {" "}and may also review{" "}
              <a
                href="https://www.aboutads.info/choices/"
                className="text-[#004bb5] font-medium hover:underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                industry opt-out choices
              </a>
              . These choices do not necessarily disable all advertising or non-personalized ads.
              Where required by applicable law, StackPick will provide appropriate consent and
              privacy controls before enabling advertising technologies that require them. For
              information about Google's data practices, see{" "}
              <a
                href="https://policies.google.com/technologies/partner-sites"
                className="text-[#004bb5] font-medium hover:underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                How Google uses information from sites or apps that use its services
              </a>
              .
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
