/**
 * Central site config — edit this one file to update site-wide values.
 */

export const siteConfig = {
  name: "Long Beach School of Yoga",
  shortName: "LBSOY",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://longbeachschoolofyoga.com",
  mynUrl: process.env.NEXT_PUBLIC_MYN_URL ?? "https://myyoganetwork.com",
  ghlCalendarUrl: process.env.NEXT_PUBLIC_GHL_CALENDAR_URL ?? "https://myyoganetwork.com/contact-us",

  description:
    "Long Beach's trusted source for yoga therapy, corporate wellness programs, and holistic healing. Serving Long Beach, Signal Hill, Belmont Shore, and the greater LA South Bay.",

  // Primary local-SEO signals
  locality: {
    city: "Long Beach",
    region: "CA",
    country: "US",
    neighborhoods: ["Belmont Shore", "Signal Hill", "Bixby Knolls", "Naples Island", "Downtown Long Beach", "East Village"],
    serviceArea: ["Long Beach", "Signal Hill", "Seal Beach", "Lakewood", "Los Alamitos", "Carson", "Rossmoor"],
  },

  contact: {
    email: "hello@longbeachschoolofyoga.com",
    phone: "",
    address: {
      streetAddress: "",
      addressLocality: "Long Beach",
      addressRegion: "CA",
      postalCode: "",
      addressCountry: "US",
    },
  },

  social: {
    instagram: "https://www.instagram.com/longbeachschoolofyoga",
    facebook: "https://www.facebook.com/longbeachschoolofyoga",
  },

  // Primary navigation items
  nav: [
    { label: "About", href: "/about" },
    { label: "Yoga Therapy", href: "/yoga-therapy" },
    { label: "Corporate Wellness", href: "/corporate-wellness" },
    { label: "For Hotels", href: "/hotel-wellness" },
    { label: "Community", href: "/community" },
    { label: "Blog", href: "/blog" },
  ],

  // Footer link groups
  footerLinks: {
    services: [
      { label: "Yoga Therapy", href: "/yoga-therapy" },
      { label: "Corporate Wellness", href: "/corporate-wellness" },
      { label: "Workplace Yoga", href: "/workplace-yoga" },
      { label: "Hotel Wellness", href: "/hotel-wellness" },
      { label: "School Yoga", href: "/school-yoga" },
      { label: "Senior Wellness", href: "/senior-wellness" },
    ],
    company: [
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Online Courses", href: "/online-courses" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
    resources: [
      { label: "Free Consultation", href: "/free-consultation" },
      { label: "Community", href: "/community" },
      { label: "My Yoga Network", href: "https://myyoganetwork.com" },
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig;
