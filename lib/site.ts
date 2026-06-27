/**
 * Central site config — edit this one file to update site-wide values.
 *
 * Editorial direction (2026-04-27):
 * - Long Beach as a whole; no neighborhood anchor.
 * - No street address published; serve-by-area only.
 * - No phone number on the public site.
 * - Contact = email to longbeachschoolofyoga@gmail.com.
 * - Cal State Long Beach is past lineage, not present location.
 */

export const siteConfig = {
  name: "Long Beach School of Yoga",
  shortName: "LBSOY",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://longbeachschoolofyoga.com",
  mynUrl: process.env.NEXT_PUBLIC_MYN_URL ?? "https://myyoganetwork.com",
  // No public booking calendar — contact is email-first.
  ghlCalendarUrl: process.env.NEXT_PUBLIC_GHL_CALENDAR_URL ?? "",

  description:
    "Long Beach School of Yoga is a yoga school for the city of Long Beach. Founded in 2012, we've trained over 100 yoga teachers, run senior wellness programs, offer yoga therapy, and stay in touch with our graduates wherever they end up teaching.",

  // Primary local-SEO signals — service-area, not address-anchored.
  locality: {
    city: "Long Beach",
    region: "CA",
    country: "US",
    // Service area covers the whole city of Long Beach plus close neighbors.
    serviceArea: [
      "Long Beach",
      "Signal Hill",
      "Seal Beach",
      "Lakewood",
      "Los Alamitos",
      "Carson",
      "Rossmoor",
    ],
  },

  contact: {
    // Single canonical email — every form on the site submits here.
    email: "longbeachschoolofyoga@gmail.com",
    phone: "",
    // Service-area business pattern — no published street address.
    address: {
      addressLocality: "Long Beach",
      addressRegion: "CA",
      addressCountry: "US",
    },
  },

  social: {
    instagram: "https://www.instagram.com/longbeachschoolofyoga",
    facebook: "https://www.facebook.com/longbeachschoolofyoga",
    // Private community group — owned by LBSOY. Audience-proof signal for sameAs.
    facebookGroup: "https://www.facebook.com/groups/139813469923850",
    youtube: "https://www.youtube.com/c/Longbeachschoolofyoga",
    linkedin: "https://www.linkedin.com/in/longbeachschoolofyoga/",
  },

  // Founder + history — used in About page, Person JSON-LD, and llms.txt.
  founder: {
    name: "Ram Bhakt",
    credentials: ["E-RYT 500", "Registered Yoga Therapist"],
    foundedYear: 2012,
    // Past lineage. Not a current location.
    alumniOf: "California State University, Long Beach",
  },

  // Primary navigation items
  nav: [
    { label: "About", href: "/about" },
    { label: "Yoga Therapy", href: "/yoga-therapy" },
    { label: "Teacher Training", href: "/school-yoga" },
    { label: "Teachers", href: "/teachers" },
    { label: "Events", href: "/events" },
    { label: "Senior Yoga", href: "/senior-wellness" },
    { label: "Blog", href: "/blog" },
  ],

  // Footer link groups — keys map to the three Footer columns (Services / Company / Resources).
  footerLinks: {
    services: [
      { label: "Yoga Therapy", href: "/yoga-therapy" },
      { label: "Senior Yoga", href: "/senior-wellness" },
      { label: "Corporate Wellness", href: "/corporate-wellness" },
      { label: "Hotel & Hospitality Yoga", href: "/hotel-wellness" },
    ],
    company: [
      { label: "Blog", href: "/blog" },
      { label: "FAQs", href: "/faqs" },
      { label: "Contact", href: "/contact" },
      { label: "My Yoga Network", href: "https://myyoganetwork.com" },
    ],
    resources: [
      { label: "About the School", href: "/about" },
      { label: "Teacher Training (RYT-200)", href: "/school-yoga" },
      { label: "Online Courses", href: "/online-courses" },
      { label: "Teachers", href: "/teachers" },
      { label: "Events", href: "/events" },
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig;
