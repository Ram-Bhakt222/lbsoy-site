import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { courseList } from "./_course-data";
import { COURSE_PAGE_CSS } from "./_course-styles";

export const metadata: Metadata = buildMetadata({
  title: "Yoga Courses in Long Beach | Senior, Chair, Prenatal, Restorative & More",
  description:
    "Yoga courses at Long Beach School of Yoga — senior yoga, chair yoga, prenatal & postnatal, restorative, private, and meditation. Evidence-based, Long Beach taught, IAYT-aligned.",
  path: "/courses",
  keywords: [
    "yoga courses long beach",
    "yoga classes long beach",
    "yoga school long beach",
    "yoga near me long beach",
    "senior yoga long beach",
    "chair yoga long beach",
    "prenatal yoga long beach",
    "restorative yoga long beach",
    "private yoga long beach",
    "meditation long beach",
  ],
});

// ItemList JSON-LD for the course hub page — helps AI search engines
// understand this as a structured collection of courses.
function coursesItemListSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Yoga Courses at Long Beach School of Yoga",
    description:
      "All courses offered by Long Beach School of Yoga — organized for SEO discovery of Long Beach-specific yoga niches.",
    numberOfItems: courseList.length,
    itemListElement: courseList.map((c, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      url: new URL(`/courses/${c.slug}`, siteConfig.url).toString(),
      name: c.title,
      description: c.blurb,
    })),
  };
}

export default function CoursesIndex() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
  ]);
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: COURSE_PAGE_CSS }} />
      <div className="course-page">
        <section className="course-hero">
          <div className="course-hero-inner">
            <nav className="course-breadcrumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <span aria-current="page">Courses</span>
            </nav>
            <div className="course-badge">Long Beach, California</div>
            <h1>
              Yoga <em>Courses</em> at Long Beach School of Yoga
            </h1>
            <p className="course-hero-sub">
              Six evidence-based yoga and meditation programs built for Long Beach residents — seniors, desk workers, expecting parents, people recovering from stress or illness, and anyone who wants one-on-one instruction. Taught by a registered yoga therapist with 10+ years of clinical experience.
            </p>
            <div className="course-hero-actions">
              <Link href="/free-consultation" className="course-btn-primary">
                Book a Free Consultation →
              </Link>
              <Link href="/yoga-therapy" className="course-btn-secondary">
                Explore Yoga Therapy
              </Link>
            </div>
          </div>
        </section>

        <div className="course-tldr">
          <h2>TL;DR</h2>
          <p>
            LBSOY offers six course tracks in Long Beach: Senior Yoga, Chair Yoga, Prenatal & Postnatal Yoga, Restorative Yoga, Private Yoga, and Meditation. Each is its own discipline — not a scaled version of a general class — and each one is taught by a registered yoga therapist. Most students start with a free 20-minute consultation to pick the right track.
          </p>
        </div>

        <section className="course-section">
          <div className="course-section-inner">
            <div className="course-section-header">
              <span className="course-section-label">All courses</span>
              <h2>Pick your path</h2>
              <p>
                Six distinct programs. Every one is built around a specific Long Beach audience — not adapted on the fly from a general class.
              </p>
            </div>
            <div className="course-related" style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
              {courseList.map((c) => (
                <Link
                  key={c.slug}
                  href={`/courses/${c.slug}`}
                  className="course-related-card"
                >
                  <h3>{c.shortTitle}</h3>
                  <p>{c.blurb}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="course-cta">
          <h2>Not sure which course is right for you?</h2>
          <p>
            Book a free 20-minute consultation with Ram. We'll talk through what you're dealing with and point you to the right program — even if that ends up being somewhere other than LBSOY.
          </p>
          <div className="course-cta-actions">
            <Link href="/free-consultation" className="course-cta-btn-primary">
              Book Free Consultation →
            </Link>
            <a
              href={`${siteConfig.mynUrl}/corporate-wellness-programs`}
              className="course-cta-btn-ghost"
              rel="noopener"
            >
              Bring this to your team
            </a>
          </div>
        </section>
      </div>

      <JsonLd data={coursesItemListSchema()} />
      <JsonLd data={breadcrumb} />
    </>
  );
}
