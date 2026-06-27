import { siteConfig } from "./site";

/**
 * Teacher / instructor registry.
 *
 * Editorial direction (2026-04-29):
 * - This is BOTH our LBSOY graduate showcase AND our local-area teacher marketplace.
 * - Each teacher gets a Person-schema-rich profile page that contributes to the
 *   knowledge-graph / AI-SEO surface for "yoga teachers in long beach".
 * - LBSOY-graduate teachers carry an `lbsoyGraduate: true` flag — when we open
 *   to non-graduates we'll keep the flag so the directory can filter on it.
 * - "Hospitality Certified" teachers are reserved for hotel guest programming
 *   (per the MYN vocabulary rule — never mix yoga teacher / yoga therapist
 *   on the same surface). Hospitality flag drives /hotel-wellness handoff.
 *
 * Add new teachers by appending an entry to `teacherRegistry`. Slugs must be
 * URL-safe. Profile pages render automatically via `app/teachers/[slug]/page.tsx`.
 */

export type TeacherTrack = "yoga-therapy" | "hospitality" | "general";

export interface Teacher {
  slug: string;
  name: string;
  jobTitle: string;
  /** Short tagline shown on the directory card */
  tagline: string;
  /** 2–3 paragraph bio for the profile page */
  bio: string[];
  credentials: string[];
  /** Knowledge areas — drive Person.knowsAbout in JSON-LD */
  specialties: string[];
  /** Long Beach neighborhoods + adjacent cities they serve */
  serviceArea: string[];
  /** Year they completed LBSOY's RYT-200 (if applicable) */
  graduatedYear?: number;
  lbsoyGraduate: boolean;
  hospitalityCertified: boolean;
  /** The track determines which surfaces feature them */
  track: TeacherTrack;
  /** Optional contact / booking links */
  links?: {
    instagram?: string;
    website?: string;
    booking?: string;
  };
  /** Image path, e.g. /uploads/teachers/kimberly-hero.jpg */
  image?: string;
  /** Whether this teacher is currently accepting new students */
  acceptingStudents: boolean;
}

export const teacherRegistry: Record<string, Teacher> = {
  ram: {
    slug: "ram",
    name: "Ram Bhakt",
    jobTitle: "Founder & Lead Instructor",
    tagline:
      "Founder of LBSOY (2012). Yoga therapist, E-RYT 500, and the lead trainer for our RYT-200 program.",
    bio: [
      "Ram founded Long Beach School of Yoga in 2012 and has trained over 100 RYT-200 yoga teachers across more than a decade of programs in Long Beach. His teaching draws on the Integral Yoga lineage and a working clinical practice in yoga therapy — chronic pain, post-injury recovery, postpartum, and senior wellness.",
      "He runs the LBSOY teacher trainings, leads weekly group classes, and works with private yoga therapy clients across Long Beach and adjacent cities. Outside the studio he coordinates corporate wellness programs for Long Beach employers and holds the editorial review for clinical content on this site.",
    ],
    credentials: ["E-RYT 500", "Registered Yoga Therapist", "Yoga Alliance Certified"],
    specialties: [
      "Yoga therapy",
      "Chronic pain",
      "Senior yoga",
      "Yoga teacher training",
      "Ayurveda",
      "Pranayama",
      "Yoga Sutras of Patanjali",
    ],
    serviceArea: siteConfig.locality.serviceArea.slice(),
    graduatedYear: undefined,
    lbsoyGraduate: false,
    hospitalityCertified: false,
    track: "yoga-therapy",
    links: {
      instagram: siteConfig.social.instagram,
    },
    acceptingStudents: true,
  },
  kimberly: {
    slug: "kimberly",
    name: "Kimberly",
    jobTitle: "LBSOY Graduate · Community Class Lead",
    tagline:
      "LBSOY graduate teaching a recurring community class in Long Beach — accessible, beginner-welcoming, donation-based.",
    bio: [
      "Kimberly is an LBSOY RYT-200 graduate who leads our community class in Long Beach. The class is built for new students, returners, and anyone who's been priced out of boutique yoga — donation-based, beginner-welcoming, and intentionally unflashy.",
      "Profile in progress. If you'd like to attend Kimberly's community class, see the events page for the next date and the registration link.",
    ],
    credentials: ["RYT-200 (LBSOY)"],
    specialties: ["Community yoga", "Beginner classes", "Hatha", "Vinyasa basics"],
    serviceArea: ["Long Beach"],
    graduatedYear: undefined,
    lbsoyGraduate: true,
    hospitalityCertified: false,
    track: "general",
    links: {},
    acceptingStudents: true,
  },
};

/**
 * Sorted list for directory/listing pages — Ram first, then alphabetical.
 */
export const teacherList: Teacher[] = Object.values(teacherRegistry).sort((a, b) => {
  if (a.slug === "ram") return -1;
  if (b.slug === "ram") return 1;
  return a.name.localeCompare(b.name);
});

export function getTeacher(slug: string): Teacher | undefined {
  return teacherRegistry[slug];
}

export function getTeacherSlugs(): string[] {
  return Object.keys(teacherRegistry);
}
