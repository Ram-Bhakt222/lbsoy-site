import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { getAllPostSlugs } from "@/lib/posts";
import { courseList } from "./courses/_course-data";
import { teacherList } from "@/lib/teachers";
import { eventList } from "@/lib/events";

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
    { url: `${base}/courses`, lastModified: now, priority: 0.9, changeFrequency: "monthly" },
    { url: `${base}/about`, lastModified: now, priority: 0.6, changeFrequency: "monthly" },
    { url: `${base}/community`, lastModified: now, priority: 0.6, changeFrequency: "weekly" },
    { url: `${base}/contact`, lastModified: now, priority: 0.5, changeFrequency: "yearly" },
    { url: `${base}/free-consultation`, lastModified: now, priority: 0.8, changeFrequency: "yearly" },
    { url: `${base}/blog`, lastModified: now, priority: 0.9, changeFrequency: "weekly" },
    { url: `${base}/teachers`, lastModified: now, priority: 0.9, changeFrequency: "weekly" },
    { url: `${base}/events`, lastModified: now, priority: 0.95, changeFrequency: "daily" },
    { url: `${base}/yoga-near-long-beach-convention-center`, lastModified: now, priority: 0.85, changeFrequency: "monthly" },
  ];

  const courses = courseList.map((c) => ({
    url: `${base}/courses/${c.slug}`,
    lastModified: now,
    priority: 0.85,
    changeFrequency: "monthly" as const,
  }));

  const posts = getAllPostSlugs().map((slug) => ({
    url: `${base}/blog/${slug}`,
    lastModified: now,
    priority: 0.7,
    changeFrequency: "monthly" as const,
  }));

  const teachers = teacherList.map((t) => ({
    url: `${base}/teachers/${t.slug}`,
    lastModified: now,
    priority: 0.75,
    changeFrequency: "monthly" as const,
  }));

  const events = eventList.map((e) => ({
    url: `${base}/events/${e.slug}`,
    lastModified: new Date(e.updatedAt ?? now),
    priority: e.isPast ? 0.4 : 0.85,
    changeFrequency: e.isPast ? "yearly" as const : "weekly" as const,
  }));

  return [...staticRoutes, ...courses, ...posts, ...teachers, ...events];
}
