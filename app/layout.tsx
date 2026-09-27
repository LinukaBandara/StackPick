import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

const SITE_URL = "https://stackpick.example"; // TODO: replace with real domain

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "StackPick — Honest Software Comparisons for Small Businesses",
    template: "%s | StackPick",
  },
  description:
    "Independent, budget-focused comparisons of business software — CRM, invoicing, email marketing, and project management tools for freelancers and small teams.",
  openGraph: {
    type: "website",
    siteName: "StackPick",
    title: "StackPick — Honest Software Comparisons for Small Businesses",
    description:
      "Independent, budget-focused comparisons of business software for freelancers and small teams.",
    url: SITE_URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "StackPick" }],
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "StackPick",
  url: SITE_URL,
  description: "Independent, budget-focused business software comparisons.",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "StackPick",
  url: SITE_URL,
  description:
    "An independent software review and comparison site. Some links are affiliate links — see our affiliate disclosure.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans bg-cloud text-ink antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 bg-white px-4 py-2 rounded-card border border-borderc">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
