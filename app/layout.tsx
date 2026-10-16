import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackNavigation from "@/components/BackNavigation";
import CookieConsent from "@/components/CookieConsent";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://stackpick.tech";

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
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "StackPick — Software, without the noise" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "StackPick - Honest Software Comparisons",
    description: "Independent software comparisons for freelancers and small teams.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  authors: [{ name: "StackPick Editorial", url: `${SITE_URL}/about` }],
  creator: "StackPick",
  publisher: "StackPick",
  category: "Technology",
  keywords: [
    "software comparisons",
    "small business software",
    "freelancer tools",
    "CRM comparison",
    "invoicing software",
    "project management software",
  ],
  icons: {
    icon: [
      { url: "/favicon.svg?v=20261014", type: "image/svg+xml" },
      { url: "/favicon.ico?v=20261014", type: "image/x-icon" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "StackPick",
  url: SITE_URL,
  description: "Independent, practical business software comparisons for freelancers and small teams.",
  inLanguage: "en",
  publisher: { "@id": `${SITE_URL}/#organization` },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/best?q={search_term_string}#directory-search`,
    },
    "query-input": "required name=search_term_string",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "StackPick",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/og-image.png`,
    width: 1200,
    height: 630,
  },
  description:
    "An independent software comparison publication focused on pricing reality, free-plan limits, workflow fit and trade-offs for freelancers and small businesses.",
  foundingDate: "2026",
  knowsAbout: [
    "Business software",
    "CRM software",
    "Invoicing software",
    "Accounting software",
    "Project management software",
    "AI tools for small business",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "editorial",
    url: `${SITE_URL}/contact`,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta name="impact-site-verification" content="8c133419-5f0c-490c-8b97-821b88a36fae" />
        <link
          rel="alternate"
          type="text/plain"
          href={`${SITE_URL}/llms.txt`}
          title="LLM-readable site summary"
        />
      </head>
      <body className="font-sans bg-white text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 bg-white px-4 py-2 rounded-card border border-borderc"
        >
          Skip to content
        </a>
        <Header />
        <BackNavigation />
        <main id="main">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
