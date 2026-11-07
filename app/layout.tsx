import type { Metadata } from "next";
import Script from "next/script";
import { headers } from "next/headers";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackNavigation from "@/components/BackNavigation";
import CookieConsent from "@/components/CookieConsent";
import AffiliateClickTracker from "@/components/AffiliateClickTracker";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.stackpick.tech";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "StackPick - Honest Software Comparisons for Small Businesses",
    template: "%s | StackPick",
  },
  description:
    "Independent, practical comparisons of business software for freelancers and small teams, focused on price, limits, fit and trade-offs.",
  openGraph: {
    type: "website",
    siteName: "StackPick",
    title: "StackPick - Honest Software Comparisons for Small Businesses",
    description:
      "Independent, practical comparisons of business software for freelancers and small teams.",
    url: SITE_URL,
    },
  twitter: { card: "summary_large_image", images: ["/twitter-image"] },
  robots: { index: true, follow: true },
  authors: [{ name: "StackPick Editorial" }],
  creator: "StackPick",
  publisher: "StackPick",
  icons: { icon: [{ url: "/favicon.svg", type: "image/svg+xml" }] },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "StackPick",
  url: SITE_URL,
  description: "Independent, practical business software comparisons.",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "StackPick",
  url: SITE_URL,
  description:
    "An independent software comparison publication. Vendor links currently go directly to providers; StackPick does not currently earn affiliate commissions.",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const requestHeaders = await headers();
  const nonce = requestHeaders.get("x-nonce") ?? undefined;
  // Keep AdSense disabled until the Google GDPR message is published and tested.
  const adsenseEnabled = process.env.NEXT_PUBLIC_ADSENSE_ENABLED === "true";

  return (
    <html lang="en" className={inter.variable}>
      <head>
        {adsenseEnabled && (
          <Script
            id="google-adsense"
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3937927075789582"
            strategy="beforeInteractive"
            nonce={nonce}
            crossOrigin="anonymous"
          />
        )}
        <meta name="impact-site-verification" content="8c133419-5f0c-490c-8b97-821b88a36fae" />
      </head>
      <body className="font-sans bg-white text-ink antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 bg-white px-4 py-2 rounded-card border border-borderc">
          Skip to content
        </a>
        <Header />
        <BackNavigation />
        <main id="main">{children}</main>
        <Footer />
        <AffiliateClickTracker />
        <CookieConsent nonce={nonce} />
      </body>
    </html>
  );
}
