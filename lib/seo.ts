import type { Metadata } from "next";
import { siteConfig } from "./site";

interface BuildMetadataInput {
  title: string;
  description: string;
  path: string; // e.g. "/yoga-therapy"
  image?: string; // absolute or site-relative
  noindex?: boolean;
  keywords?: string[];
}

/**
 * Shared metadata builder. Every page should call this.
 * Mirrors the pattern from myn.com so SEO stays consistent across sister sites.
 */
export function buildMetadata({
  title,
  description,
  path,
  image,
  noindex,
  keywords,
}: BuildMetadataInput): Metadata {
  const url = new URL(path, siteConfig.url).toString();
  const fullTitle =
    title === siteConfig.name ? title : `${title} | ${siteConfig.name}`;

  const ogImage = image
    ? (image.startsWith("http") ? image : new URL(image, siteConfig.url).toString())
    : undefined;

  return {
    title: fullTitle,
    description,
    keywords,
    alternates: { canonical: url },
    robots: noindex
      ? { index: false, follow: false }
      : { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
    openGraph: {
      type: "website",
      url,
      siteName: siteConfig.name,
      title: fullTitle,
      description,
      images: ogImage ? [{ url: ogImage }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ogImage ? [ogImage] : undefined,
    },
  };
}

/**
 * JSON-LD: LocalBusiness + HealthAndBeautyBusiness schema for the LBSOY entity.
 * Rendered on every page via the RootLayout for strong local SEO signals.
 */
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    // Service-area business pattern — no street address published.
    // EducationalOrganization signals "we are a school" to AI crawlers.
    "@type": ["LocalBusiness", "EducationalOrganization", "HealthAndBeautyBusiness"],
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    description: siteConfig.description,
    url: siteConfig.url,
    image: `${siteConfig.url}/og-default.png`,
    foundingDate: String(siteConfig.founder.foundedYear),
    founder: {
      "@type": "Person",
      name: siteConfig.founder.name,
      jobTitle: "Founder & Lead Instructor",
      description: siteConfig.founder.credentials.join(", "),
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: siteConfig.founder.alumniOf,
      },
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.contact.address.addressLocality,
      addressRegion: siteConfig.contact.address.addressRegion,
      addressCountry: siteConfig.contact.address.addressCountry,
    },
    email: siteConfig.contact.email,
    areaServed: siteConfig.locality.serviceArea.map((city) => ({
      "@type": "City",
      name: city,
    })),
    sameAs: [
      siteConfig.social.instagram,
      siteConfig.social.facebook,
      siteConfig.social.facebookGroup,
      siteConfig.social.youtube,
      siteConfig.social.linkedin,
    ].filter(Boolean),
  };
}

/**
 * EducationalOrganization JSON-LD — explicit "we are a yoga school"
 * signal for AI retrieval. Render on the homepage and About page in
 * addition to localBusinessSchema(). Includes the past CSULB lineage
 * via the founder's `alumniOf` and program history.
 */
export function educationalOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    description: siteConfig.description,
    url: siteConfig.url,
    foundingDate: String(siteConfig.founder.foundedYear),
    founder: {
      "@type": "Person",
      name: siteConfig.founder.name,
      description: siteConfig.founder.credentials.join(", "),
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: siteConfig.founder.alumniOf,
      },
    },
    areaServed: siteConfig.locality.serviceArea.map((city) => ({
      "@type": "City",
      name: city,
    })),
    sameAs: [
      siteConfig.social.instagram,
      siteConfig.social.facebook,
      siteConfig.social.facebookGroup,
      siteConfig.social.youtube,
      siteConfig.social.linkedin,
    ].filter(Boolean),
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Yoga Alliance Registered School (RYS-200)",
      },
    ],
    email: siteConfig.contact.email,
  };
}

/**
 * Breadcrumb JSON-LD helper for interior pages.
 */
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: new URL(item.path, siteConfig.url).toString(),
    })),
  };
}

/**
 * Course JSON-LD — for individual course landing pages.
 * Uses Course + EducationalOccupationalProgram union for maximum pickup
 * across Google Course enrichment, Bing, and Perplexity citations.
 */
export function courseSchema(input: {
  name: string;
  description: string;
  path: string;
  image?: string;
  provider?: string;
  instructor?: { name: string; url?: string; credentials?: string };
  courseMode?: "online" | "onsite" | "blended";
  audienceType?: string;
  educationalLevel?: string;
  timeRequired?: string; // ISO 8601 duration, e.g. "PT10H"
  hasCourseInstance?: {
    courseMode: "online" | "onsite" | "blended";
    courseWorkload?: string;
    inLanguage?: string;
    location?: string;
  };
}) {
  const url = new URL(input.path, siteConfig.url).toString();
  return {
    "@context": "https://schema.org",
    "@type": ["Course", "EducationalOccupationalProgram"],
    name: input.name,
    description: input.description,
    url,
    image: input.image
      ? (input.image.startsWith("http")
          ? input.image
          : new URL(input.image, siteConfig.url).toString())
      : `${siteConfig.url}/og-default.png`,
    provider: {
      "@type": "EducationalOrganization",
      name: input.provider ?? siteConfig.name,
      sameAs: siteConfig.url,
      url: siteConfig.url,
    },
    ...(input.instructor
      ? {
          instructor: {
            "@type": "Person",
            name: input.instructor.name,
            url: input.instructor.url,
            description: input.instructor.credentials,
          },
        }
      : {}),
    ...(input.courseMode ? { courseMode: input.courseMode } : {}),
    ...(input.audienceType
      ? {
          audience: {
            "@type": "EducationalAudience",
            audienceType: input.audienceType,
          },
        }
      : {}),
    ...(input.educationalLevel ? { educationalLevel: input.educationalLevel } : {}),
    ...(input.timeRequired ? { timeRequired: input.timeRequired } : {}),
    ...(input.hasCourseInstance
      ? {
          hasCourseInstance: {
            "@type": "CourseInstance",
            courseMode: input.hasCourseInstance.courseMode,
            ...(input.hasCourseInstance.courseWorkload
              ? { courseWorkload: input.hasCourseInstance.courseWorkload }
              : {}),
            ...(input.hasCourseInstance.inLanguage
              ? { inLanguage: input.hasCourseInstance.inLanguage }
              : { inLanguage: "en" }),
            ...(input.hasCourseInstance.location
              ? { location: input.hasCourseInstance.location }
              : {}),
          },
        }
      : {}),
    offers: {
      "@type": "Offer",
      category: "Yoga Therapy / Wellness Education",
      availability: "https://schema.org/InStock",
      url,
    },
  };
}

/**
 * FAQPage JSON-LD — primary AI-SEO surface for question-answer retrieval
 * by Google AI Overviews, ChatGPT, Perplexity, and Claude.
 */
export function faqPageSchema(
  items: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

/**
 * HowTo JSON-LD — for step-by-step procedural content (e.g.
 * "How to practice chair yoga at your desk").
 */
export function howToSchema(input: {
  name: string;
  description: string;
  totalTime?: string; // ISO 8601 duration
  estimatedCost?: { currency: string; value: number };
  supply?: string[];
  tool?: string[];
  step: { name: string; text: string; image?: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: input.name,
    description: input.description,
    ...(input.totalTime ? { totalTime: input.totalTime } : {}),
    ...(input.estimatedCost
      ? {
          estimatedCost: {
            "@type": "MonetaryAmount",
            currency: input.estimatedCost.currency,
            value: input.estimatedCost.value,
          },
        }
      : {}),
    ...(input.supply?.length
      ? {
          supply: input.supply.map((s) => ({
            "@type": "HowToSupply",
            name: s,
          })),
        }
      : {}),
    ...(input.tool?.length
      ? {
          tool: input.tool.map((t) => ({
            "@type": "HowToTool",
            name: t,
          })),
        }
      : {}),
    step: input.step.map((s, idx) => ({
      "@type": "HowToStep",
      position: idx + 1,
      name: s.name,
      text: s.text,
      ...(s.image
        ? {
            image: s.image.startsWith("http")
              ? s.image
              : new URL(s.image, siteConfig.url).toString(),
          }
        : {}),
    })),
  };
}

/**
 * Speakable JSON-LD — marks a subset of the page as voice-assistant friendly.
 * Pair with CSS selectors that point to the TL;DR or intro block.
 */
export function speakableSchema(cssSelectors: string[]) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: cssSelectors,
    },
  };
}

/**
 * Service JSON-LD — for service landing pages that aren't Courses
 * (e.g. /yoga-therapy, /corporate-wellness).
 */
export function serviceSchema(input: {
  name: string;
  description: string;
  path: string;
  serviceType?: string;
  areaServed?: string[];
  provider?: string;
  audience?: string;
}) {
  const url = new URL(input.path, siteConfig.url).toString();
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    url,
    serviceType: input.serviceType ?? "Yoga Therapy",
    provider: {
      "@type": "LocalBusiness",
      name: input.provider ?? siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: (input.areaServed ?? siteConfig.locality.serviceArea).map(
      (city) => ({ "@type": "City", name: city })
    ),
    ...(input.audience
      ? { audience: { "@type": "Audience", audienceType: input.audience } }
      : {}),
  };
}

/**
 * Person JSON-LD — for individual teacher / instructor profile pages.
 * Drives the "knows about" + "alumniOf" + "memberOf" knowledge-graph entries
 * that AI search engines use to attribute authority to a teacher in a city.
 */
export function personSchema(input: {
  name: string;
  path: string;
  jobTitle?: string;
  description?: string;
  image?: string;
  credentials?: string[];
  knowsAbout?: string[];
  alumniOf?: string;
  worksFor?: string;
  sameAs?: string[];
  areaServed?: string[];
}) {
  const url = new URL(input.path, siteConfig.url).toString();
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: input.name,
    url,
    ...(input.jobTitle ? { jobTitle: input.jobTitle } : {}),
    ...(input.description ? { description: input.description } : {}),
    ...(input.image
      ? {
          image: input.image.startsWith("http")
            ? input.image
            : new URL(input.image, siteConfig.url).toString(),
        }
      : {}),
    ...(input.credentials?.length
      ? {
          hasCredential: input.credentials.map((c) => ({
            "@type": "EducationalOccupationalCredential",
            credentialCategory: c,
          })),
        }
      : {}),
    ...(input.knowsAbout?.length ? { knowsAbout: input.knowsAbout } : {}),
    ...(input.alumniOf
      ? {
          alumniOf: {
            "@type": "EducationalOrganization",
            name: input.alumniOf,
          },
        }
      : {}),
    worksFor: {
      "@type": "Organization",
      name: input.worksFor ?? siteConfig.name,
      url: siteConfig.url,
    },
    ...(input.sameAs?.length ? { sameAs: input.sameAs } : {}),
    ...(input.areaServed?.length
      ? {
          areaServed: input.areaServed.map((city) => ({
            "@type": "City",
            name: city,
          })),
        }
      : {}),
  };
}

/**
 * Event JSON-LD — for individual events (workshops, community classes, retreats).
 * The single most powerful structured-data signal for local + AI search when an
 * event is dated, priced, and located. Map / Calendar / AI Overviews all read it.
 */
export function eventSchema(input: {
  name: string;
  description: string;
  path: string;
  startDate: string; // ISO 8601
  endDate?: string;
  image?: string;
  performerName?: string;
  performerPath?: string;
  organizerName?: string;
  organizerPath?: string;
  locationName: string;
  locationStreet?: string;
  locationCity?: string;
  locationRegion?: string;
  locationPostal?: string;
  locationCountry?: string;
  isOnline?: boolean;
  price?: number; // 0 for free
  priceCurrency?: string;
  registrationUrl?: string;
  capacity?: number;
  status?: "scheduled" | "cancelled" | "postponed" | "rescheduled";
  attendanceMode?: "online" | "offline" | "mixed";
  keywords?: string[];
}) {
  const url = new URL(input.path, siteConfig.url).toString();
  const attendanceMode =
    input.attendanceMode === "online"
      ? "https://schema.org/OnlineEventAttendanceMode"
      : input.attendanceMode === "mixed"
        ? "https://schema.org/MixedEventAttendanceMode"
        : "https://schema.org/OfflineEventAttendanceMode";
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: input.name,
    description: input.description,
    url,
    startDate: input.startDate,
    ...(input.endDate ? { endDate: input.endDate } : {}),
    eventAttendanceMode: attendanceMode,
    eventStatus: `https://schema.org/Event${
      (input.status ?? "scheduled").charAt(0).toUpperCase() +
      (input.status ?? "scheduled").slice(1)
    }`,
    ...(input.image
      ? {
          image: input.image.startsWith("http")
            ? input.image
            : new URL(input.image, siteConfig.url).toString(),
        }
      : {}),
    location: input.isOnline
      ? {
          "@type": "VirtualLocation",
          url,
        }
      : {
          "@type": "Place",
          name: input.locationName,
          address: {
            "@type": "PostalAddress",
            ...(input.locationStreet ? { streetAddress: input.locationStreet } : {}),
            addressLocality: input.locationCity ?? siteConfig.locality.city,
            addressRegion: input.locationRegion ?? siteConfig.locality.region,
            ...(input.locationPostal ? { postalCode: input.locationPostal } : {}),
            addressCountry: input.locationCountry ?? siteConfig.locality.country,
          },
        },
    ...(input.performerName
      ? {
          performer: {
            "@type": "Person",
            name: input.performerName,
            ...(input.performerPath
              ? { url: new URL(input.performerPath, siteConfig.url).toString() }
              : {}),
          },
        }
      : {}),
    organizer: {
      "@type": "Organization",
      name: input.organizerName ?? siteConfig.name,
      url: input.organizerPath
        ? new URL(input.organizerPath, siteConfig.url).toString()
        : siteConfig.url,
    },
    offers: {
      "@type": "Offer",
      url: input.registrationUrl ?? url,
      price: input.price ?? 0,
      priceCurrency: input.priceCurrency ?? "USD",
      availability: "https://schema.org/InStock",
      validFrom: input.startDate,
    },
    ...(input.capacity ? { maximumAttendeeCapacity: input.capacity } : {}),
    ...(input.keywords?.length ? { keywords: input.keywords.join(", ") } : {}),
  };
}

/**
 * Generic ItemList JSON-LD — wraps a CollectionPage (teacher directory,
 * events index, blog index) with an ItemList of typed children. AI search
 * engines use this to surface the page as a structured collection.
 */
export function itemListSchema(input: {
  name: string;
  description?: string;
  path: string;
  itemType?: "Person" | "Event" | "Article" | "Course" | "Service";
  items: Array<{ url: string; name: string; description?: string }>;
}) {
  const url = new URL(input.path, siteConfig.url).toString();
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: input.name,
    ...(input.description ? { description: input.description } : {}),
    url,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: input.items.length,
      itemListElement: input.items.map((item, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        url: new URL(item.url, siteConfig.url).toString(),
        name: item.name,
        ...(item.description ? { description: item.description } : {}),
        ...(input.itemType
          ? { item: { "@type": input.itemType, name: item.name, url: new URL(item.url, siteConfig.url).toString() } }
          : {}),
      })),
    },
  };
}

/**
 * Article JSON-LD for blog posts and evergreen content.
 */
export function articleSchema(input: {
  headline: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  authorName?: string;
  authorUrl?: string;
  keywords?: string[];
}) {
  const url = new URL(input.path, siteConfig.url).toString();
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    headline: input.headline,
    description: input.description,
    image: input.image
      ? (input.image.startsWith("http")
          ? input.image
          : new URL(input.image, siteConfig.url).toString())
      : `${siteConfig.url}/og-default.png`,
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
    author: {
      "@type": "Person",
      name: input.authorName ?? "Ram Bhakt",
      url: input.authorUrl ?? `${siteConfig.url}/about`,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/og-default.png`,
      },
    },
    ...(input.keywords?.length ? { keywords: input.keywords.join(", ") } : {}),
  };
}
