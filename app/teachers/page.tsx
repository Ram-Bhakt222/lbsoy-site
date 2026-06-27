import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { buildMetadata, breadcrumbSchema, itemListSchema } from "@/lib/seo";
import { teacherList } from "@/lib/teachers";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Yoga Teachers in Long Beach | LBSOY Graduates & Local Teachers",
  description:
    "Meet the yoga teachers in Long Beach connected to Long Beach School of Yoga — LBSOY RYT-200 graduates and partnered local teachers offering yoga therapy, community classes, senior yoga, and more.",
  path: "/teachers",
  keywords: [
    "yoga teachers long beach",
    "yoga therapists long beach",
    "yoga instructor long beach",
    "lbsoy graduates",
    "long beach yoga directory",
    "yoga teacher near me long beach",
  ],
});

export default function TeachersDirectoryPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Teachers", path: "/teachers" },
  ]);

  const collection = itemListSchema({
    name: "Yoga Teachers at Long Beach School of Yoga",
    description:
      "Directory of yoga teachers connected to Long Beach School of Yoga — including LBSOY graduates and partnered local Long Beach teachers.",
    path: "/teachers",
    itemType: "Person",
    items: teacherList.map((t) => ({
      url: `/teachers/${t.slug}`,
      name: t.name,
      description: t.tagline,
    })),
  });

  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-badge">Long Beach, California</div>
            <h1>
              Yoga <em>Teachers</em> in Long Beach
            </h1>
            <p className="hero-sub">
              The teachers in our Long Beach community — LBSOY RYT-200 graduates and
              partnered local instructors. Filter by what you need: yoga therapy,
              senior yoga, beginner-friendly community classes, hospitality
              programming, or one-on-one work.
            </p>
            <div className="hero-actions">
              <Link href="/free-consultation" className="btn-primary">
                Not sure where to start? Talk to us
              </Link>
              <Link href="/events" className="btn-secondary">
                See upcoming classes
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-image-placeholder">
              Photo: A few of our LBSOY teachers
            </div>
            <div className="hero-float-card">
              <div className="hero-float-number">{teacherList.length}+</div>
              <div className="hero-float-label">
                <strong>Teachers</strong>
                Connected to LBSOY
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-label">Directory</span>
            <h2>Find a teacher in Long Beach</h2>
            <p>
              Every teacher below is either an LBSOY graduate, a partnered Long Beach
              instructor, or a member of our extended teaching team. Click any card
              to read their full bio, credentials, and how to reach them.
            </p>
          </div>
          <div className="services-grid">
            {teacherList.map((t) => (
              <Link
                key={t.slug}
                href={`/teachers/${t.slug}`}
                className="service-card"
                style={{ textDecoration: "none", display: "block" }}
              >
                <div className="service-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <h3>{t.name}</h3>
                <p style={{ fontSize: "0.95rem", opacity: 0.85 }}>
                  <strong>{t.jobTitle}</strong>
                  <br />
                  {t.tagline}
                </p>
                <div
                  style={{
                    marginTop: 12,
                    display: "flex",
                    gap: 6,
                    flexWrap: "wrap",
                  }}
                >
                  {t.lbsoyGraduate ? (
                    <span className="credential" style={{ fontSize: "0.75rem" }}>
                      LBSOY Graduate
                      {t.graduatedYear ? ` ${t.graduatedYear}` : ""}
                    </span>
                  ) : null}
                  {t.credentials.slice(0, 2).map((c) => (
                    <span
                      key={c}
                      className="credential"
                      style={{ fontSize: "0.75rem" }}
                    >
                      {c}
                    </span>
                  ))}
                </div>
                <span
                  className="service-link"
                  style={{ marginTop: 16, display: "inline-flex" }}
                >
                  View profile
                  <svg viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-label">For teachers</span>
            <h2>Teach with us in Long Beach</h2>
            <p>
              Are you a Long Beach-area yoga teacher — LBSOY graduate or otherwise — who
              wants to be part of our directory? We&apos;re curating teachers who serve the
              Long Beach community: clinical yoga therapists, senior yoga specialists,
              community-class leaders, and Hospitality Certified teachers for hotel
              programming.
            </p>
          </div>
          <div style={{ textAlign: "center", marginTop: 24 }}>
            <Link href="/contact" className="btn-primary">
              Apply to join the directory
            </Link>
          </div>
        </div>
      </section>

      <JsonLd data={collection} />
      <JsonLd data={breadcrumb} />
    </>
  );
}
