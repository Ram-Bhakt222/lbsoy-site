import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

/**
 * Robots policy — explicitly allow AI crawlers used for retrieval
 * and citation by ChatGPT, Claude, Gemini, Perplexity, and search
 * engines. Mirrors the myn.com AI-crawler allowlist.
 */
export default function robots(): MetadataRoute.Robots {
  const sitemap = `${siteConfig.url.replace(/\/$/, "")}/sitemap.xml`;

  return {
    rules: [
      // Default: allow all traditional search engines.
      { userAgent: "*", allow: "/" },

      // Named AI crawlers — explicit allowlist for transparency.
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Claude-Web", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "Googlebot", allow: "/" },
      { userAgent: "Bingbot", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Perplexity-User", allow: "/" },
      { userAgent: "Applebot", allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" },
      { userAgent: "DuckDuckBot", allow: "/" },
      { userAgent: "Bytespider", allow: "/" },
      { userAgent: "YandexBot", allow: "/" },
      { userAgent: "CCBot", allow: "/" },
      { userAgent: "FacebookBot", allow: "/" },
      { userAgent: "meta-externalagent", allow: "/" },
      { userAgent: "Amazonbot", allow: "/" },
    ],
    sitemap,
    host: siteConfig.url,
  };
}
