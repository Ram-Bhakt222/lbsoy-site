import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import { buildMetadata, breadcrumbSchema, eventSchema } from "@/lib/seo";
import {
  getEvent,
  getEventSlugs,
  formatEventDate,
  upcomingEvents,
} from "@/lib/events";
import { getTeacher } from "@/lib/teachers";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getEventSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const event = getEvent(slug);
  if (!event) {
    return buildMetadata({
      title: "Event Not Found",
      description: "This event is no longer listed.",
      path: `/events/${slug}`,
      noindex: true,
    });
  }
  return buildMetadata({
    title: event.title,
    description: event.summary,
    path: `/events/${event.slug}`,
    keywords: event.keywords,
    image: event.image,
  });
}

export default async function EventDetailPage({ params }: Props) {
  const { slug } = await params;
  const event = getEvent(slug);
  if (!event) notFound();

  const teacher = event.teacherSlug ? getTeacher(event.teacherSlug) : undefined;

  const breadcrumb = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Events", path: "/events" },
    { name: event.title, path: `/events/${event.slug}` },
  ]);

  const eventLd = eventSchema({
    name: event.title,
    description: event.summary,
    path: `/events/${event.slug}`,
    startDate: event.startDate,
    endDate: event.endDate,
    image: event.image,
    performerName: event.teacherName,
    performerPath: event.teacherSlug ? `/teachers/${event.teacherSlug}` : undefined,
    locationName: event.location.name,
    locationStreet: event.location.street,
    locationCity: event.location.city,
    locationRegion: event.location.region,
    locationPostal: event.location.postal,
    locationCountry: event.location.country ?? "US",
    isOnline: event.location.isOnline,
    price: event.price,
    registrationUrl: event.registrationUrl,
    capacity: event.capacity,
    attendanceMode: event.location.isOnline ? "online" : "offline",
    keywords: event.keywords,
  });

  const otherEvents = upcomingEvents()
    .filter((e) => e.slug !== event.slug)
    .slice(0, 3);

  const isPast = event.isPast || new Date(event.startDate).getTime() < Date.now();

  return (
    <>
      <section className="section">
        <div className="section-inner">
          <nav
            aria-label="Breadcrumb"
            style={{ fontSize: "0.875rem", marginBottom: 24, opacity: 0.7 }}
          >
            <Link href="/">Home</Link> /{" "}
            <Link href="/events">Events</Link> /{" "}
            <span aria-current="page">{event.title}</span>
          </nav>

          <div className="about-grid" style={{ alignItems: "start", gap: 48 }}>
            <div className="about-image-placeholder">
              {event.image ? null : `Image: ${event.title}`}
            </div>
            <div className="about-content">
              <span className="section-label">
                {event.category.replace("-", " ")}
              </span>
              <h1 style={{ marginTop: 8 }}>{event.title}</h1>

              {isPast ? (
                <p
                  style={{
                    marginTop: 12,
                    padding: 12,
                    background: "var(--sand, #f6f1ea)",
                    borderRadius: 6,
                    fontSize: "0.9rem",
                  }}
                >
                  <strong>This event has already happened.</strong> Page kept for
                  reference. See <Link href="/events">upcoming events</Link>.
                </p>
              ) : null}

              <p
                style={{
                  fontSize: "1.05rem",
                  fontWeight: 500,
                  marginTop: 16,
                }}
              >
                {formatEventDate(event.startDate)}
                {event.endDate ? ` – ${formatEventDate(event.endDate)}` : ""}
              </p>

              <p style={{ marginTop: 4, opacity: 0.85 }}>
                {event.location.isOnline
                  ? "Online (Zoom link sent at RSVP)"
                  : `${event.location.name} · ${event.location.city}, ${event.location.region}`}
              </p>

              <div style={{ marginTop: 24 }}>
                {event.description.split("\n\n").map((para, i) => (
                  <p key={i} style={{ marginBottom: 16 }}>
                    {para}
                  </p>
                ))}
              </div>

              <div className="credential-list" style={{ marginTop: 24 }}>
                <span className="credential">
                  {event.priceLabel ??
                    (event.price === 0 ? "Free" : `$${event.price}`)}
                </span>
                {event.capacity ? (
                  <span className="credential">{event.capacity} spots</span>
                ) : null}
                {teacher ? (
                  <span className="credential">with {teacher.name}</span>
                ) : null}
              </div>

              {!isPast ? (
                <div className="hero-actions" style={{ marginTop: 32 }}>
                  {event.registrationUrl ? (
                    <a
                      href={event.registrationUrl}
                      className="btn-primary"
                      target={
                        event.registrationUrl.startsWith("http")
                          ? "_blank"
                          : undefined
                      }
                      rel="noopener noreferrer"
                    >
                      RSVP / Register
                    </a>
                  ) : (
                    <Link href="/contact" className="btn-primary">
                      RSVP via contact form
                    </Link>
                  )}
                  {teacher ? (
                    <Link
                      href={`/teachers/${teacher.slug}`}
                      className="btn-secondary"
                    >
                      About {teacher.name.split(" ")[0]}
                    </Link>
                  ) : null}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      {otherEvents.length > 0 ? (
        <section className="section section-alt">
          <div className="section-inner">
            <div className="section-header">
              <span className="section-label">More events</span>
              <h2>Also happening in Long Beach</h2>
            </div>
            <div className="services-grid">
              {otherEvents.map((e) => (
                <Link
                  key={e.slug}
                  href={`/events/${e.slug}`}
                  className="service-card"
                  style={{ textDecoration: "none", display: "block" }}
                >
                  <h3>{e.title}</h3>
                  <p style={{ fontSize: "0.85rem" }}>
                    {formatEventDate(e.startDate)}
                  </p>
                  <p style={{ fontSize: "0.95rem", marginTop: 8 }}>
                    {e.summary}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <JsonLd data={eventLd} />
      <JsonLd data={breadcrumb} />
    </>
  );
}
