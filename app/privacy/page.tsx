import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "StackPick's privacy policy — what data is collected and how affiliate/ad tracking works.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-10">
      <h1 className="text-3xl font-bold text-ink mb-2">Privacy Policy</h1>
      <p className="text-sm text-slate mb-8">This page reflects the site's current implementation.</p>
      <div className="text-[15px] text-slate space-y-6">
        <section>
          <h2 className="text-xl font-semibold text-ink mb-2">No accounts</h2>
          <p>StackPick doesn't require sign-up or collect personal profiles.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-ink mb-2">Affiliate links</h2>
          <p>
            When you click an affiliate link, the destination site (not StackPick) sets a
            tracking cookie or parameter to credit the referral. See our{" "}
            <a href="/affiliate-disclosure" className="text-indigo hover:underline">
              Affiliate Disclosure
            </a>{" "}
            for details.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-ink mb-2">Advertising & analytics</h2>
          <p>
            As currently built, this site has no analytics or advertising installed. If/when
            Google AdSense or an analytics tool is added, this policy will be updated to name
            the exact tool, the cookies it sets, and how to opt out.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-ink mb-2">Contact</h2>
          <p>Emails sent via the Contact page are handled like normal email and not shared with third parties.</p>
        </section>
      </div>
    </div>
  );
}
