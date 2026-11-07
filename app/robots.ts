import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.stackpick.tech";

const AI_CRAWLERS = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "ClaudeBot",
  "Claude-Web",
  "anthropic-ai",
  "PerplexityBot",
  "Google-Extended",
  "Bytespider",
  "CCBot",
  "Applebot-Extended",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/admin/", "/api/admin/"] },
      ...AI_CRAWLERS.map((agent) => ({ userAgent: agent, allow: "/", disallow: ["/admin/", "/api/admin/"] })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
