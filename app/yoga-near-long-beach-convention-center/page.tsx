import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import {
  buildMetadata,
  breadcrumbSchema,
  serviceSchema,
  faqPageSchema,
} from "@/lib/seo";
import { upcomingEvents } from "@/lib/events";
import { teacherList } from "@/lib/teachers";

export const metadata: Metadata = buildMetadata({
  title:
    "Yoga Near Long Beach Convention Center | LA28 Olympics Visitor Yoga & Wellness",
  description:
    "Yoga, yoga therapy, and short wellness sessions near the Long Beach Convention Center — for residents, conference attendees, and LA28 Olympics visitors. Walk-ins welcome where capacity allows.",
  path: "/yoga-near-long-beach-convention-center",
  keywords: [
    "yoga near long beach convention center",
    "yoga long beach convention center",
    "la28 yoga long beach",
    "olympics yoga long beach",
    "long beach hotel yoga",
    "yoga downtown long beach",
    "wellness near long beach convention center",
    "yoga before conference long beach",
  ],
});

const faqs = [
  {
    question: "Where is the closest yoga to the Long Beach Convention Center?",
    answer:
      "Long Beach School of Yoga is a service-area yoga school covering the entire city of Long Beach, including the downtown corridor around the Long Beach Convention Center, the Hyatt, the Westin, the Renaissance, and the Marriott. We don't operate a fixed studio, so we come to you — at your hotel, at a meeting room, or at a partnered downtown space — with sessions that fit a conference schedule.",
  },
  {
    question:
      "Do you offer short morning yoga sessions for conference attendees?",
    answer:
      "Yes. Our most popular conference-attendee format is a 30-minute, mat-and-clothes-as-you-are morning yoga or breath-work session in a hotel meeting room or lobby corner. We can run sessions for 5 people or 50, with one or two teachers depending on the group. Email longbeachschoolofyoga@gmail.com with your hotel and dates.",
  },
  {
    question:
      "Will LBSOY be running yoga events during the LA28 Olympics in July 2028?",
    answer:
      "Yes — Long Beach is hosting handball, water polo, BMX, sailing, and triathlon events for LA28, and we're actively planning visitor-friendly community classes, hotel pop-ups, and short morning sessions across the Olympic window (July 14–30, 2028). If you're a hotel, a venue, or an athlete delegation looking for wellness programming for that period, get in touch early — we expect demand to be heavy.",
  },
  {
    question: "Is yoga therapy appropriate for travelers and visitors?",
    answer:
      "Yoga therapy is most useful for ongoing conditions — chronic pain, anxiety, post-injury recovery — where a series of sessions over weeks moves the needle. For one-off travel needs (jet lag, conference back, post-flight stiffness), a 45–60 minute private yoga session is usually a better fit than yoga therapy. We'll triage by email before booking so you get the right format.",
  },
  {
    question: "Can hotels in Long Beach add LBSOY yoga to their guest amenities?",
    answer:
      "Yes — this is a core part of our hotel wellness program. We offer guest-facing morning yoga, in-room private sessions, and lobby pop-ups, taught by Hospitality Certified yoga teachers (separate track from our clinical yoga therapy work). See the hotel wellness page for the full offering.",
  },
];

export default function ConventionCenterPage() {
  const upcoming = upcomingEvents().slice(0, 3);
  const featuredTeachers = teacherList.slice(0, 3);

  const breadcrumb = breadcrumbSchema([
    { name: "Home", path: "/" },
    {
      name: "Yoga Near Long Beach Convention Center",
      path: "/yoga-near-long-beach-convention-center",
    },
  ]);

  const service = serviceSchema({
    name: "Yoga & Wellness Near Long Beach Convention Center",
    description:
      "Yoga sessions, yoga therapy, and short wellness programming for residents, conference attendees, hotel guests, and LA28 Olympics visitors near the Long Beach Convention Center.",
    path: "/yoga-near-long-beach-convention-center",
    serviceType: "Hospitality & visitor yoga programming",
    audience: "Conference attendees, hotel guests, Olympic visitors, downtown residents",
    areaServed: [
      "Long Beach Convention Center",
      "Downtown Long Beach",
      "East Village Long Beach",
      "Long Beach",
    ],
  });

  const faqLd = faqPageSchema(faqs);

  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-badge">Downtown Long Beach · LA28 Ready</div>
            <h1>
              Yoga Near the <em>Long Beach Convention Center</em>
            </h1>
            <p className="hero-sub">
              For residents, conference attendees, hotel guests, and{" "}
              <strong>LA28 Olympics visitors arriving July 2028</strong>. Short
              morning sessions, hotel pop-ups, private yoga, and visitor-friendly
              community classes — taught by a registered yoga therapist and our
              network of Long Beach teachers.
            </p>
            <div className="hero-actions">
              <Link href="/contact" className="btn-primary">
                Email about a hotel or conference session
              </Link>
              <Link href="/events" className="btn-secondary">
                See upcoming community classes
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-image-placeholder">
              Photo: Long Beach skyline / Convention Center
            </div>
            <div className="hero-float-card">
              <div className="hero-float-number">2028</div>
              <div className="hero-float-label">
                <strong>LA28 Host City</strong>
                Handball · Water polo · BMX · Sailing · Triathlon
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="trust-bar">
        <div className="trust-bar-inner">
          <div className="trust-item">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Walking distance to Convention Center hotels
          </div>
          <div className="trust-item">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            Yoga Alliance Certified · IAYT-aligned
          </div>
          <div className="trust-item">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            14+ years serving Long Beach
          </div>
          <div className="trust-item">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
            English · Hindi · Spanish (on request)
          </div>
        </div>
      </div>

      <section className="section">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-label">For Visitors</span>
            <h2>Short, accessible sessions that fit a travel day</h2>
            <p>
              Whether you&apos;re in Long Beach for a conference at the Convention
              Center, a Pacific Hospitality property stay, or for the LA28 Games
              themselves, our visitor sessions are built around tight schedules
              and travel-tired bodies.
            </p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" strokeWidth="2" />
                </svg>
              </div>
              <h3>30-min morning hotel yoga</h3>
              <p>
                In a meeting room, lobby corner, or pool deck. Light flow, breath
                work, and a clean finish — designed to drop you into the day,
                not wear you out before a conference session.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l5 5v11a2 2 0 0 1-2 2z" />
                </svg>
              </div>
              <h3>Private session in your hotel room</h3>
              <p>
                One-on-one yoga with a qualified Long Beach teacher in your hotel
                room or a private space — 45 or 60 minutes. Better fit for travel
                stiffness, jet lag, or anyone with a recurring back / shoulder
                / knee complaint.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3>Group / delegation sessions</h3>
              <p>
                For conference teams, athlete delegations, or hotel guest groups
                during high-traffic windows (LA28, conventions, off-sites). We
                can scale to 50+ with multiple teachers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-label">LA28 Olympics</span>
            <h2>Long Beach is a host city — July 14–30, 2028</h2>
            <p>
              Long Beach hosts five LA28 Olympic events: handball at the Long
              Beach Convention Center, water polo and BMX at Long Beach Sports
              Park, coastal sailing offshore, and triathlon along the waterfront.
              Hundreds of thousands of incremental visitors flow through Long
              Beach during the 17-day window.
            </p>
          </div>
          <div
            style={{
              background: "white",
              padding: 32,
              borderRadius: 12,
              boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
              maxWidth: 800,
              margin: "0 auto",
            }}
          >
            <h3 style={{ marginTop: 0 }}>Planning ahead?</h3>
            <p>
              We&apos;re booking LA28-window programming starting now. Hotels,
              athlete-housing operators, conference centers, hospitality groups,
              and travel-package operators looking for visitor wellness
              programming during the Olympic period should reach out as far in
              advance as possible — our teaching capacity for that 17-day window
              will be limited.
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:longbeachschoolofyoga@gmail.com">
                longbeachschoolofyoga@gmail.com
              </a>{" "}
              with your venue, expected attendee count, and the days you&apos;d
              like covered.
            </p>
          </div>
        </div>
      </section>

      {upcoming.length > 0 ? (
        <section className="section">
          <div className="section-inner">
            <div className="section-header">
              <span className="section-label">Upcoming</span>
              <h2>Open community events in Long Beach</h2>
              <p>
                If you&apos;re in town and want to drop into a session, these are
                the publicly-listed events on our calendar.
              </p>
            </div>
            <div className="services-grid">
              {upcoming.map((e) => (
                <Link
                  key={e.slug}
                  href={`/events/${e.slug}`}
                  className="service-card"
                  style={{ textDecoration: "none", display: "block" }}
                >
                  <h3>{e.title}</h3>
                  <p style={{ fontSize: "0.95rem" }}>{e.summary}</p>
                  <p style={{ fontSize: "0.85rem", marginTop: 12 }}>
                    <strong>{e.priceLabel ?? `$${e.price}`}</strong>
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {featuredTeachers.length > 0 ? (
        <section className="section section-alt">
          <div className="section-inner">
            <div className="section-header">
              <span className="section-label">Teachers</span>
              <h2>Some of the teachers serving downtown Long Beach</h2>
            </div>
            <div className="services-grid">
              {featuredTeachers.map((t) => (
                <Link
                  key={t.slug}
                  href={`/teachers/${t.slug}`}
                  className="service-card"
                  style={{ textDecoration: "none", display: "block" }}
                >
                  <h3>{t.name}</h3>
                  <p style={{ fontSize: "0.95rem" }}>{t.tagline}</p>
                </Link>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: 32 }}>
              <Link href="/teachers" className="btn-secondary">
                View full teacher directory
              </Link>
            </div>
          </div>
        </section>
      ) : null}

      <section className="section">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-label">FAQs</span>
            <h2>Common questions from visitors and downtown businesses</h2>
          </div>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            {faqs.map((f, i) => (
              <details
                key={i}
                style={{
                  background: "white",
                  padding: "20px 24px",
                  borderRadius: 10,
                  marginBottom: 12,
                  boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
                }}
              >
                <summary
                  style={{
                    fontWeight: 600,
                    fontSize: "1.05rem",
                    cursor: "pointer",
                  }}
                >
                  {f.question}
                </summary>
                <p style={{ marginTop: 12, opacity: 0.9 }}>{f.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <h2>Working on conference or LA28 wellness?</h2>
        <p>
          Email us with your venue, dates, and expected group size. We&apos;ll
          come back with a teacher match and a session plan.
        </p>
        <a
          href="mailto:longbeachschoolofyoga@gmail.com"
          className="btn-white"
        >
          Email longbeachschoolofyoga@gmail.com
        </a>
      </section>

      <JsonLd data={service} />
      <JsonLd data={faqLd} />
      <JsonLd data={breadcrumb} />
    </>
  );
}
