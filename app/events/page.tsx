import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import {
  buildMetadata,
  breadcrumbSchema,
  itemListSchema,
} from "@/lib/seo";
import {
  upcomingEvents,
  pastEvents,
  formatEventDate,
} from "@/lib/events";

export const metadata: Metadata = buildMetadata({
  title: "Yoga Events & Workshops in Long Beach | LBSOY Calendar",
  description:
    "Upcoming yoga events, community classes, workshops, and retreats in Long Beach — hosted or partnered by Long Beach School of Yoga. Filter by category and teacher.",
  path: "/events",
  keywords: [
    "yoga events long beach",
    "yoga workshops long beach",
    "community yoga long beach",
    "yoga classes long beach this week",
    "yoga retreats long beach",
    "lbsoy events",
  ],
});

export default function EventsDirectoryPage() {
  const upcoming = upcomingEvents();
  const past = pastEvents().slice(0, 6);

  const breadcrumb = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Events", path: "/events" },
  ]);

  const collection = itemListSchema({
    name: "Yoga Events at Long Beach School of Yoga",
    description:
      "Upcoming yoga events, community classes, workshops, and retreats in Long Beach.",
    path: "/events",
    itemType: "Event",
    items: upcoming.map((e) => ({
      url: `/events/${e.slug}`,
      name: e.title,
      description: e.summary,
    })),
  });

  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-badge">Long Beach, California</div>
            <h1>
              Yoga <em>Events</em> in Long Beach
            </h1>
            <p className="hero-sub">
              Community classes, workshops, retreats, and trainings hosted or
              partnered by Long Beach School of Yoga. Most events are open to
              first-time students. Several are donation-based.
            </p>
            <div className="hero-actions">
              <Link href="/teachers" className="btn-secondary">
                Browse teachers
              </Link>
              <Link href="/free-consultation" className="btn-primary">
                Book a consultation
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-image-placeholder">
              Photo: LBSOY community gathering
            </div>
            <div className="hero-float-card">
              <div className="hero-float-number">{upcoming.length}</div>
              <div className="hero-float-label">
                <strong>Upcoming</strong>
                Events in Long Beach
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-label">Upcoming</span>
            <h2>What&apos;s coming up</h2>
            {upcoming.length === 0 ? (
              <p>
                No public events on the calendar right now. The next batch is
                usually posted at the start of each month — or{" "}
                <Link href="/contact">drop us a note</Link> and we&apos;ll let
                you know when something matches what you&apos;re looking for.
              </p>
            ) : (
              <p>
                {upcoming.length} upcoming event
                {upcoming.length === 1 ? "" : "s"}. Click for details and
                registration.
              </p>
            )}
          </div>

          {upcoming.length > 0 ? (
            <div className="services-grid">
              {upcoming.map((e) => (
                <Link
                  key={e.slug}
                  href={`/events/${e.slug}`}
                  className="service-card"
                  style={{ textDecoration: "none", display: "block" }}
                >
                  <div
                    style={{
                      fontSize: "0.8rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.04em",
                      opacity: 0.7,
                      marginBottom: 8,
                    }}
                  >
                    {e.category.replace("-", " ")}
                  </div>
                  <h3>{e.title}</h3>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      fontWeight: 500,
                      margin: "8px 0 16px",
                    }}
                  >
                    {formatEventDate(e.startDate)}
                  </p>
                  <p style={{ fontSize: "0.95rem" }}>{e.summary}</p>
                  <div
                    style={{
                      marginTop: 16,
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span
                      className="credential"
                      style={{ fontSize: "0.75rem" }}
                    >
                      {e.priceLabel ?? (e.price === 0 ? "Free" : `$${e.price}`)}
                    </span>
                    {e.teacherName ? (
                      <span style={{ fontSize: "0.85rem", opacity: 0.75 }}>
                        with {e.teacherName}
                      </span>
                    ) : null}
                  </div>
                </Link>
              ))}
            </div>
          ) : null}
        </div>
      </section>

      {past.length > 0 ? (
        <section className="section section-alt">
          <div className="section-inner">
            <div className="section-header">
              <span className="section-label">Recent</span>
              <h2>Past events</h2>
              <p>For reference — these have already happened.</p>
            </div>
            <div className="services-grid">
              {past.map((e) => (
                <Link
                  key={e.slug}
                  href={`/events/${e.slug}`}
                  className="service-card"
                  style={{
                    textDecoration: "none",
                    display: "block",
                    opacity: 0.7,
                  }}
                >
                  <h3>{e.title}</h3>
                  <p style={{ fontSize: "0.85rem", opacity: 0.7 }}>
                    {formatEventDate(e.startDate)}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="section">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-label">For teachers</span>
            <h2>Hosting an event in Long Beach?</h2>
            <p>
              If you&apos;re an LBSOY graduate or partnered Long Beach teacher
              and you&apos;d like to list a community class, workshop, or
              retreat in our directory,{" "}
              <Link href="/contact">send us the details</Link>. Listings are
              free for our teaching network.
            </p>
          </div>
        </div>
      </section>

      <JsonLd data={collection} />
      <JsonLd data={breadcrumb} />
    </>
  );
}
