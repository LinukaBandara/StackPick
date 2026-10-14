import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Terms governing access to StackPick, its software comparisons, editorial content and external links.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div className="w-full bg-white">
      <div className="sp-container max-w-3xl py-16 sm:py-24">
        <p className="sp-eyebrow text-xs uppercase tracking-wider">Legal</p>
        <h1 className="sp-title mt-3 text-[#1d1d1f]">Terms and Conditions</h1>
        <p className="mt-3 text-sm text-[#6e6e73]">Last updated October 14, 2026</p>
        <div className="mt-8 space-y-8 text-base leading-relaxed text-[#6e6e73] sm:text-lg">
          <section><h2 className="mb-2 text-xl font-bold tracking-tight text-[#1d1d1f]">Using StackPick</h2><p>By accessing StackPick, you agree to these terms. If you do not agree, please stop using the site. You must use the site lawfully and must not attempt to disrupt, scrape abusively, or gain unauthorized access to the site or its infrastructure.</p></section>
          <section><h2 className="mb-2 text-xl font-bold tracking-tight text-[#1d1d1f]">Editorial information, not professional advice</h2><p>StackPick publishes general software research and comparisons to help readers make their own decisions. Features, availability, plan limits, prices, trial terms and regional support can change. We make reasonable efforts to be useful and accurate, but do not guarantee that every detail is complete, current or suitable for your circumstances. Verify important details directly with the provider before purchasing or migrating.</p></section>
          <section><h2 className="mb-2 text-xl font-bold tracking-tight text-[#1d1d1f]">Third-party products and links</h2><p>Links to third-party websites are provided for convenience. Those sites have their own terms, privacy policies, pricing and security practices. StackPick does not control or guarantee third-party products and is not responsible for transactions or disputes between you and a provider. Unless expressly disclosed, our current vendor links do not earn us affiliate commissions; see our <Link href="/affiliate-disclosure" className="font-medium text-[#004bb5] hover:underline">Affiliate Disclosure</Link>.</p></section>
          <section><h2 className="mb-2 text-xl font-bold tracking-tight text-[#1d1d1f]">Intellectual property</h2><p>Unless otherwise indicated, StackPick's original site text, branding and design are owned by or licensed to StackPick. You may link to our public pages and quote short excerpts with appropriate attribution. You may not republish substantial content or use our branding in a way that implies endorsement without written permission. Third-party names and marks belong to their respective owners.</p></section>
          <section><h2 className="mb-2 text-xl font-bold tracking-tight text-[#1d1d1f]">Availability and liability</h2><p>The site is provided on an “as is” and “as available” basis to the extent permitted by applicable law. We do not guarantee uninterrupted access or error-free content. To the extent permitted by law, StackPick disclaims implied warranties and liability for indirect or consequential losses arising from use of the site. Nothing in these terms excludes liability that cannot legally be excluded.</p></section>
          <section><h2 className="mb-2 text-xl font-bold tracking-tight text-[#1d1d1f]">Changes and contact</h2><p>We may update these terms as the site evolves. The updated date above indicates the latest revision. Continued use after a change means you accept the revised terms to the extent permitted by law. For questions, contact <a className="font-medium text-[#004bb5] hover:underline" href="mailto:stackpick.contact@gmail.com">stackpick.contact@gmail.com</a>.</p></section>
          <p className="text-sm">Also review our <Link href="/privacy" className="font-medium text-[#004bb5] hover:underline">Privacy Policy</Link>.</p>
        </div>
      </div>
    </div>
  );
}
