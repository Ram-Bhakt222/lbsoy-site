import { siteConfig } from "./site";

/**
 * Local events registry.
 *
 * Editorial direction (2026-04-29):
 * - Surfaces both LBSOY-hosted and grad-led local events (community classes,
 *   workshops, donation gatherings, retreats).
 * - Each event renders a dedicated /events/[slug] page with full Event JSON-LD,
 *   which Google maps to event-rich-results, and which AI search engines
 *   summarize when asked "yoga events in long beach this weekend".
 * - When an event is over, set `isPast: true` — the directory filters it out
 *   of the "Upcoming" list but the page itself stays indexed for reference.
 *
 * To add a recurring event (e.g. weekly community class), create one entry
 * per occurrence — Schema.org's `Event` type expects discrete dated instances.
 * For a true recurring series, swap to `EventSeries` later if needed.
 */

export type EventCategory =
  | "community-class"
  | "workshop"
  | "retreat"
  | "training"
  | "online";

export interface LbsoyEvent {
  slug: string;
  title: string;
  /** 1–2 sentence summary used on directory cards and meta description */
  summary: string;
  /** Long-form description for the event page (markdown-style \n\n paragraphs) */
  description: string;
  /** ISO 8601 date — e.g. "2026-05-10T10:00:00-07:00" */
  startDate: string;
  endDate?: string;
  category: EventCategory;
  /** Slug of the teacher in lib/teachers.ts (or null if external) */
  teacherSlug?: string;
  teacherName?: string;
  /** Venue */
  location: {
    name: string;
    street?: string;
    city: string;
    region: string; // "CA"
    postal?: string;
    country?: string; // "US"
    isOnline?: boolean;
  };
  /** Pricing — 0 means free/donation */
  price: number;
  priceLabel?: string; // "Free", "Donation", "$25 / $40 sliding scale"
  /** External registration URL (Eventbrite, GHL, etc.) — falls back to /contact */
  registrationUrl?: string;
  capacity?: number;
  /** Image — /uploads/events/<slug>.jpg */
  image?: string;
  isPast?: boolean;
  /** Internal note — when this event was added/updated */
  updatedAt: string; // ISO 8601 date
  keywords?: string[];
}

export const eventRegistry: Record<string, LbsoyEvent> = {
  "kimberly-community-class-launch": {
    slug: "kimberly-community-class-launch",
    title: "Community Yoga Class with Kimberly — Launch Session",
    summary:
      "Kimberly, LBSOY RYT-200 graduate, leads a free community yoga class in Long Beach. Beginners welcome. Donation-based. Limited mats provided.",
    description:
      "Long Beach School of Yoga is launching a recurring community yoga class led by Kimberly, an LBSOY RYT-200 graduate. The first session is intentionally accessible — no membership required, no experience needed, donations welcome but never required.\n\nThe class is hatha-based with vinyasa elements and is designed for first-timers, returners, and anyone who's been priced out of boutique yoga in Long Beach. Bring your own mat if you have one. We'll have a few loaners on hand.\n\nAfter this launch session, the plan is to run the class on a weekly cadence with rotating LBSOY graduates as the lead teacher — a way to give our grads continued teaching reps in the Long Beach community while keeping the class genuinely accessible.\n\nDate, time, and venue confirm the week of the class. RSVP via the registration link to get the location pin and any updates.",
    startDate: "2026-05-17T10:00:00-07:00",
    endDate: "2026-05-17T11:15:00-07:00",
    category: "community-class",
    teacherSlug: "kimberly",
    teacherName: "Kimberly",
    location: {
      name: "Long Beach (venue confirmed at RSVP)",
      city: "Long Beach",
      region: "CA",
      country: "US",
    },
    price: 0,
    priceLabel: "Free · Donations welcome",
    registrationUrl: "/contact",
    capacity: 30,
    isPast: false,
    updatedAt: "2026-04-29",
    keywords: [
      "community yoga long beach",
      "free yoga long beach",
      "beginner yoga long beach",
      "kimberly lbsoy",
      "donation yoga long beach",
    ],
  },
};

/**
 * All events sorted by start date ascending.
 */
export const eventList: LbsoyEvent[] = Object.values(eventRegistry).sort(
  (a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
);

/**
 * Future events only (drives /events directory).
 */
export const upcomingEvents = (): LbsoyEvent[] => {
  const now = new Date();
  return eventList.filter(
    (e) => !e.isPast && new Date(e.startDate).getTime() >= now.getTime()
  );
};

/**
 * Past events — kept indexed for reference, surfaced separately.
 */
export const pastEvents = (): LbsoyEvent[] => {
  const now = new Date();
  return eventList
    .filter((e) => e.isPast || new Date(e.startDate).getTime() < now.getTime())
    .reverse();
};

export function getEvent(slug: string): LbsoyEvent | undefined {
  return eventRegistry[slug];
}

export function getEventSlugs(): string[] {
  return Object.keys(eventRegistry);
}

/** Format an ISO date string for display in en-US, Pacific Time. */
export function formatEventDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleString("en-US", {
    weekday: "short",
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    timeZone: "America/Los_Angeles",
    timeZoneName: "short",
  });
}

/** Compact date for cards. */
export function formatEventDateShort(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    timeZone: "America/Los_Angeles",
  });
}
