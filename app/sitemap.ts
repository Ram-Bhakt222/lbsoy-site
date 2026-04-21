import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { getAllPostSlugs } from "@/lib/posts";

/**
 * Dynamic sitemap. Regenerates on every build (or on revalidation window).
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = siteConfig.url.replace(/\/$/, "");
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, priority: 1.0, changeFrequency: "weekly" },
    { url: `${base}/yoga-therapy`, lastModified: now, priority: 0.9, changeFrequency: "monthly" },
    { url: `${base}/corporate-wellness`, lastModified: now, priority: 0.9, changeFrequency: "monthly" },
    { url: `${base}/hotel-wellness`, lastModified: now, priority: 0.9, changeFrequency: "monthly" },
    { url: `${base}/workplace-yoga`, lastModified: now, priority: 0.8, changeFrequency: "monthly" },
    { url: `${base}/school-yoga`, lastModified: now, priority: 0.8, changeFrequency: "monthly" },
    { url: `${base}/senior-wellness`, lastModified: now, priority: 0.8, changeFrequency: "monthly" },
    { url: `${base}/services`, lastModified: now, priority: 0.7, changeFrequency: "monthly" },
    { url: `${base}/online-courses`, lastModified: now, priority: 0.7, changeFrequency: "monthly" },
    { url: `${base}/about`, lastModified: now, priority: 0.6, changeFrequency: "monthly" },
    { url: `${base}/community`, lastModified: now, priority: 0.6, changeFrequency: "weekly" },
    { url: `${base}/contact`, lastModified: now, priority: 0.5, changeFrequency: "yearly" },
    { url: `${base}/free-consultation`, lastModified: now, priority: 0.8, changeFrequency: "yearly" },
    { url: `${base}/blog`, lastModified: now, priority: 0.9, changeFrequency: "weekly" },
  ];

  const posts = getAllPostSlugs().map((slug) => ({
    url: `${base}/blog/${slug}`,
    lastModified: now,
    priority: 0.7,
    changeFrequency: "monthly" as const,
  }));

  return [...staticRoutes, ...posts];
}
