import { siteConfig } from "./site";

/**
 * Author registry for LBSOY content.
 * Keep bios short (≤ 80 words) but include credentials — they power E-E-A-T
 * signals in both Article JSON-LD and in-page bylines.
 */
export const authors = {
  ram: {
    name: "Ram Bhakt",
    role: "Founder & Lead Yoga Therapist, Long Beach School of Yoga",
    credentials:
      "E-RYT 500 · Registered Yoga Therapist (IAYT track) · Yoga Alliance Certified",
    shortBio:
      "Ram Bhakt is the founder of Long Beach School of Yoga and a certified yoga therapist with 10+ years of clinical experience serving Long Beach. He specializes in therapeutic yoga for chronic pain, trauma-informed practice, and prenatal/postnatal care, and has trained 99+ graduates through LBSOY's 200-Hour Teacher Training.",
    longBio:
      "Ram Bhakt founded Long Beach School of Yoga in 2014 after more than a decade of study in traditional hatha, vinyasa, and restorative yoga. As an E-RYT 500 instructor and registered yoga therapist, he blends biomechanics and trauma-informed care with classical yogic practice. His clinical focus includes chronic back pain, anxiety, PTSD, post-injury recovery, and prenatal/postnatal wellness. Ram has taught hundreds of Long Beach residents, clinicians, hospitality teams, and corporate wellness cohorts, and serves as the lead teacher for LBSOY's 200-Hour Yoga Teacher Training.",
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
