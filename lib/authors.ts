import { siteConfig } from "./site";

/**
 * Author registry for LBSOY content.
 * Keep bios short (≤ 80 words) but include credentials — they power E-E-A-T
 * signals in both Article JSON-LD and in-page bylines.
 */
export const authors = {
  ram: {
    name: "Ram Bhakt",
    role: "Founder & Lead Instructor, Long Beach School of Yoga",
    credentials:
      "E-RYT 500 · Registered Yoga Therapist · Yoga Alliance Certified",
    shortBio:
      "Ram Bhakt founded Long Beach School of Yoga in 2012. An E-RYT 500 instructor and Registered Yoga Therapist, Ram has certified over 100 RYT-200 graduates and works with Long Beach students through yoga therapy, senior wellness, and continuing education.",
    longBio:
      "Ram Bhakt founded Long Beach School of Yoga in 2012 and ran the early teacher trainings at California State University, Long Beach. Originally trained in the Integral Yoga tradition, Ram draws on Hatha, Vinyasa, Restorative, Yin, Ayurveda, Qigong, and the Yoga Sutras in his teaching. As an E-RYT 500 instructor and Registered Yoga Therapist, he focuses on therapeutic yoga for chronic pain, post-injury recovery, postpartum, and senior wellness, and has certified more than 100 RYT-200 yoga teachers now teaching across Long Beach and beyond.",
    url: `${siteConfig.url}/about`,
    sameAs: [
      siteConfig.social.instagram,
      siteConfig.social.facebook,
    ].filter(Boolean),
  },
  lbsoy: {
    name: "Long Beach School of Yoga",
    role: "Editorial Team",
    credentials: "IAYT-aligned · Yoga Alliance Certified",
    shortBio:
      "The LBSOY editorial team reviews every article for medical accuracy, Long Beach local relevance, and alignment with modern yoga-therapy research. Clinical content is reviewed by Ram Bhakt, E-RYT 500.",
    longBio:
      "The LBSOY editorial team curates the Long Beach wellness calendar, neighborhood guides, and yoga-therapy education on this site. Clinical topics are reviewed by Ram Bhakt (E-RYT 500) before publishing.",
    url: `${siteConfig.url}/about`,
    sameAs: [
      siteConfig.social.instagram,
      siteConfig.social.facebook,
    ].filter(Boolean),
  },
} as const;

export type AuthorKey = keyof typeof authors;

export function getAuthor(key: AuthorKey) {
  return authors[key];
}
