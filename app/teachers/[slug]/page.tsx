import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import { buildMetadata, breadcrumbSchema, personSchema } from "@/lib/seo";
import {
  getTeacher,
  getTeacherSlugs,
  teacherList,
} from "@/lib/teachers";
import { upcomingEvents } from "@/lib/events";
import { siteConfig } from "@/lib/site";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getTeacherSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const teacher = getTeacher(slug);
  if (!teacher) {
    return buildMetadata({
      title: "Teacher Not Found",
      description: "This teacher profile is no longer available.",
      path: `/teachers/${slug}`,
      noindex: true,
    });
  }
  return buildMetadata({
    title: `${teacher.name} — ${teacher.jobTitle}`,
    description: teacher.tagline,
    path: `/teachers/${teacher.slug}`,
    keywords: [
      `${teacher.name.toLowerCase()} yoga`,
      ...teacher.specialties.map((s) => `${s.toLowerCase()} long beach`),
      "yoga teacher long beach",
    ],
    image: teacher.image,
  });
}

export default async function TeacherProfilePage({ params }: Props) {
  const { slug } = await params;
  const teacher = getTeacher(slug);
  if (!teacher) notFound();

  const breadcrumb = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Teachers", path: "/teachers" },
    { name: teacher.name, path: `/teachers/${teacher.slug}` },
  ]);

  const person = personSchema({
    name: teacher.name,
    path: `/teachers/${teacher.slug}`,
    jobTitle: teacher.jobTitle,
    description: [teacher.tagline, ...teacher.bio].join(" "),
    image: teacher.image,
    credentials: teacher.credentials,
    knowsAbout: teacher.specialties,
    alumniOf: teacher.lbsoyGraduate ? siteConfig.name : undefined,
    sameAs: [
      teacher.links?.instagram,
      teacher.links?.website,
    ].filter((v): v is string => Boolean(v)),
    areaServed: teacher.serviceArea,
  });

  // Show upcoming events led by this teacher.
  const teacherEvents = upcomingEvents().filter(
    (e) => e.teacherSlug === teacher.slug
  );

  // Suggest 2 other teachers.
  const otherTeachers = teacherList
    .filter((t) => t.slug !== teacher.slug)
    .slice(0, 3);

  return (
    <>
      <section className="section">
        <div className="section-inner">
          <nav
            aria-label="Breadcrumb"
            style={{ fontSize: "0.875rem", marginBottom: 24, opacity: 0.7 }}
          >
            <Link href="/">Home</Link> /{" "}
            <Link href="/teachers">Teachers</Link> /{" "}
            <span aria-current="page">{teacher.name}</span>
          </nav>

          <div
            className="about-grid"
            style={{ alignItems: "start", gap: 48 }}
          >
            <div className="about-image-placeholder">
              {teacher.image ? null : `Photo: ${teacher.name}`}
            </div>
            <div className="about-content">
              <span className="section-label">
                {teacher.lbsoyGraduate
                  ? `LBSOY Graduate${
                      teacher.graduatedYear ? ` · ${teacher.graduatedYear}` : ""
                    }`
                  : "LBSOY Teaching Team"}
              </span>
              <h1 style={{ marginTop: 8 }}>{teacher.name}</h1>
              <p
                style={{
                  fontSize: "1.125rem",
                  fontWeight: 500,
                  marginTop: 4,
                  marginBottom: 16,
                }}
              >
                {teacher.jobTitle}
              </p>

              {teacher.bio.map((para, i) => (
                <p key={i}>{para}</p>
              ))}

              <div className="credential-list" style={{ marginTop: 16 }}>
                {teacher.credentials.map((c) => (
                  <span key={c} className="credential">
                    {c}
                  </span>
                ))}
              </div>

              <div style={{ marginTop: 24 }}>
                <strong>Specialties</strong>
                <div
                  style={{
                    marginTop: 8,
                    display: "flex",
                    gap: 6,
                    flexWrap: "wrap",
                  }}
                >
                  {teacher.specialties.map((s) => (
                    <span
                      key={s}
                      className="credential"
                      style={{ fontSize: "0.8rem" }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ marginTop: 24 }}>
                <strong>Service area</strong>
                <p style={{ marginTop: 4, opacity: 0.85 }}>
                  {teacher.serviceArea.join(" · ")}
                </p>
              </div>

              {teacher.acceptingStudents ? (
                <div className="hero-actions" style={{ marginTop: 32 }}>
                  <Link href="/contact" className="btn-primary">
                    Reach out
                  </Link>
                  <Link href="/free-consultation" className="btn-secondary">
                    Book consultation
                  </Link>
                </div>
              ) : (
                <p
                  style={{
                    marginTop: 32,
                    padding: 16,
                    background: "var(--sand, #f6f1ea)",
                    borderRadius: 8,
                  }}
                >
                  <strong>Currently not accepting new students.</strong> You can
                  still see {teacher.name.split(" ")[0]}&apos;s upcoming public
                  events below.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {teacherEvents.length > 0 ? (
        <section className="section section-alt">
          <div className="section-inner">
            <div className="section-header">
              <span className="section-label">Upcoming</span>
              <h2>Catch {teacher.name.split(" ")[0]} live</h2>
            </div>
            <div className="services-grid">
              {teacherEvents.map((e) => (
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

      {otherTeachers.length > 0 ? (
        <section className="section">
          <div className="section-inner">
            <div className="section-header">
              <span className="section-label">More teachers</span>
              <h2>Other Long Beach teachers</h2>
            </div>
            <div className="services-grid">
              {otherTeachers.map((t) => (
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
          </div>
        </section>
      ) : null}

      <JsonLd data={person} />
      <JsonLd data={breadcrumb} />
    </>
  );
}
