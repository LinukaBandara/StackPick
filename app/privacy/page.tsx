import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "StackPick's privacy policy covering cookies, analytics, advertising, affiliate tracking and contact information.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="sp-container py-12 sm:py-16">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-[.16em] text-indigo-600">Transparency</p>
        <h1 className="mt-2 text-4xl font-black tracking-tight text-slate-950">Privacy Policy</h1>
        <p className="mt-3 text-sm text-slate-500">Last updated: October 2026</p>
        <div className="mt-8 space-y-8 text-[15px] leading-7 text-slate-600">
          <section><h2 className="text-xl font-bold text-slate-950">What StackPick collects</h2><p className="mt-2">StackPick does not require visitor accounts. If you contact us by email, we receive the information you choose to include in that message and use it to respond.</p></section>
          <section><h2 className="text-xl font-bold text-slate-950">Cookies and advertising</h2><p className="mt-2">StackPick may use cookies, web beacons, IP addresses and similar identifiers when advertising, analytics or other third-party services are enabled. Google and other third parties may place and read cookies on your browser and may use information collected through those technologies to measure advertising or deliver ads.</p><p className="mt-2">If Google AdSense is enabled, Google may use cookies and other technologies to serve and measure advertisements. See Google's explanation of <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer" className="font-semibold text-indigo-600 hover:underline">how Google uses information from sites and apps that use its services</a> for more detail.</p></section>
          <section><h2 className="text-xl font-bold text-slate-950">Affiliate links</h2><p className="mt-2">Some links may use affiliate tracking parameters or cookies. These are set and controlled by the destination provider or affiliate network rather than by StackPick. Affiliate relationships are disclosed on our <Link href="/affiliate-disclosure" className="font-semibold text-indigo-600 hover:underline">Affiliate Disclosure</Link>.</p></section>
          <section><h2 className="text-xl font-bold text-slate-950">Analytics</h2><p className="mt-2">Analytics may be added in the future to understand aggregate traffic and improve the site. When a specific analytics provider is enabled, this policy will be updated to identify it and describe the relevant data and controls.</p></section>
          <section><h2 className="text-xl font-bold text-slate-950">Regional consent</h2><p className="mt-2">Where applicable, StackPick will provide consent controls required for advertising and cookies. Visitors in the European Economic Area, United Kingdom and Switzerland may be shown a consent message and choices for personalized advertising and related data processing before those technologies are used, as required by applicable Google publisher requirements and law.</p></section>
          <section><h2 className="text-xl font-bold text-slate-950">Policy updates</h2><p className="mt-2">This policy may change when StackPick adds or removes analytics, advertising, affiliate networks, forms or other third-party services. The date above will be updated when material changes are made.</p></section>
          <section className="border-t border-slate-200 pt-6"><h2 className="text-xl font-bold text-slate-950">Contact</h2><p className="mt-2">For privacy questions, use the contact details on our <Link href="/contact" className="font-semibold text-indigo-600 hover:underline">Contact</Link> page.</p></section>
        </div>
      </div>
    </div>
  );
}