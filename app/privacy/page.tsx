import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How StackPick handles website analytics, account information, community reviews and third-party services.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="w-full bg-white">
      <div className="sp-container max-w-3xl py-16 sm:py-24">
        <p className="sp-eyebrow text-xs uppercase tracking-wider">Legal</p>
        <h1 className="sp-title mt-3 text-[#1d1d1f]">Privacy Policy</h1>
        <p className="mt-3 text-sm text-[#6e6e73]">Last updated November 2026</p>

        <div className="mt-8 space-y-8 text-base leading-relaxed text-[#6e6e73]">
          <section>
            <h2 className="mb-2 text-xl font-bold tracking-tight text-[#1d1d1f]">About this policy</h2>
            <p>StackPick publishes independent software research and allows visitors to create an account and submit community reviews. This policy explains the information handled when you browse the site, create an account, or contribute a review.</p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold tracking-tight text-[#1d1d1f]">Information collected when you create an account</h2>
            <p>When you register or sign in, our authentication provider, Supabase, processes your email address, account identifier, password authentication data and email-confirmation status. StackPick does not receive or store your password in readable form. We use this information to create and secure your account, authenticate sessions and prevent unauthorised submissions.</p>
            <p className="mt-3">The site uses secure, HTTP-only session cookies to maintain your signed-in state. These cookies are not intended for advertising and cannot be read by ordinary page scripts.</p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold tracking-tight text-[#1d1d1f]">Community reviews</h2>
            <p>If you submit a software review, we process the display name you provide, the software profile being reviewed, your 1–5 rating, review title, review text, account identifier, moderation status and submission timestamps. Your account email and internal account identifier are not displayed publicly. If approved, your display name, rating, title and review text may appear on the relevant software profile.</p>
            <p className="mt-3">Reviews are held for moderation before publication. We use account identifiers to enforce the one-review-per-account rule for each software profile, manage moderation and address abuse. Only approved reviews contribute to public review counts and rating averages. Do not include passwords, financial details, sensitive personal information or another person's private information in a review.</p>
            <p className="mt-3">To withdraw a pending review, or to request account closure, access or deletion of account-related information, contact us through the <Link href="/contact" className="font-medium text-[#001D39] underline underline-offset-4">Contact page</Link>. We will assess requests and explain any information we must retain for security, moderation, dispute handling or legal obligations.</p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold tracking-tight text-[#1d1d1f]">Service providers and international processing</h2>
            <p>We use Supabase for authentication and review data storage. The StackPick review database is hosted in the Singapore region. Supabase processes information on our behalf to provide these services and may process technical data needed to operate, secure and maintain its infrastructure. Review Supabase's own privacy and security information for details about its service.</p>
            <p className="mt-3">Depending on your location and the infrastructure used by our providers, information may be processed outside your country. We limit the information sent to service providers to what is needed for the relevant function.</p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold tracking-tight text-[#1d1d1f]">Analytics and local storage</h2>
            <p>StackPick only loads Google Analytics after you choose to accept optional analytics in the cookie banner. If you reject optional analytics, the analytics script is not loaded by the site. You can change your choice at any time using “Cookie settings” in the footer. If you accept analytics, Google may process usage events, device and browser information, and online identifiers under its own terms.</p>
            <p className="mt-3">The site stores your analytics choice in your browser's local storage. Authentication uses separate HTTP-only cookies. Clearing browser storage or cookies may remove your saved preferences or sign you out.</p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold tracking-tight text-[#1d1d1f]">Third-party assets and external links</h2>
            <p>Some comparison cards display provider favicons loaded from Google's public favicon service. When those images load, your browser connects to Google and may disclose technical request information such as your IP address and browser details. This is separate from Google Analytics consent.</p>
            <p className="mt-3">Software profile and guide pages link to external provider websites and documentation. When you follow those links, the destination site's privacy policy and practices apply.</p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold tracking-tight text-[#1d1d1f]">Affiliate links and commercial relationships</h2>
            <p>StackPick's vendor links may be updated as commercial relationships change. If a link is an affiliate link, we will identify the relationship on relevant pages and explain it in our <Link href="/affiliate-disclosure" className="font-medium text-[#001D39] underline underline-offset-4">Affiliate Disclosure</Link>. An affiliate relationship does not determine whether a product receives a favourable editorial assessment.</p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold tracking-tight text-[#1d1d1f]">Advertising</h2>
            <p>StackPick does not currently serve display advertisements. If Google AdSense or another advertising service is enabled, third-party vendors may use cookies, web beacons, IP addresses or similar identifiers to serve and measure advertisements and, where enabled, personalise them. We will update this policy and provide appropriate consent controls where required before enabling advertising technologies that require them.</p>
            <p className="mt-3">Visitors can manage personalised advertising through <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer" className="font-medium text-[#001D39] underline underline-offset-4">Google Ads Settings</a> and may review <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="font-medium text-[#001D39] underline underline-offset-4">industry opt-out choices</a>. These choices do not necessarily disable all advertising.</p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold tracking-tight text-[#1d1d1f]">Security and retention</h2>
            <p>We use access controls and service-provider security features designed to protect account and review information. No internet service can guarantee absolute security. We retain information for as long as reasonably needed to provide accounts and reviews, maintain moderation records, prevent abuse, resolve disputes and meet applicable obligations. Retention may differ by data type and request.</p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold tracking-tight text-[#1d1d1f]">Your choices and privacy requests</h2>
            <p>You can choose whether to enable optional analytics, sign out of your account, and decide whether to submit a review. You may request access to or deletion of account-related information by contacting us through the <Link href="/contact" className="font-medium text-[#001D39] underline underline-offset-4">Contact page</Link>. We may need to verify that a request relates to your account before acting on it. Please do not send passwords or other sensitive credentials in a contact message.</p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold tracking-tight text-[#1d1d1f]">Changes and contact</h2>
            <p>We may update this policy when the site, its providers or its data practices change. The “Last updated” date above indicates the latest policy revision. For privacy questions or requests, use the contact details published on our <Link href="/contact" className="font-medium text-[#001D39] underline underline-offset-4">Contact page</Link>.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
