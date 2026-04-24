import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import {
  breadcrumbSchema,
  courseSchema,
  faqPageSchema,
  speakableSchema,
} from "@/lib/seo";
import { authors } from "@/lib/authors";
import { siteConfig } from "@/lib/site";
import { COURSE_PAGE_CSS } from "./_course-styles";

export interface CourseModule {
  title: string;
  body: string;
}
export interface CourseBenefit {
  title: string;
  body: string;
}
export interface CourseFaq {
  question: string;
  answer: string;
}
export interface RelatedCourse {
  slug: string;
  title: string;
  blurb: string;
}
export interface CoursePageData {
  slug: string; // e.g. "senior-yoga"
  hero: {
    badge: string;
    titlePre: string; // text before em
    titleEm: string; // italicized accent text
    titlePost?: string; // text after em
    subtitle: string;
  };
  tldr: string;
  sections: {
    whatItIs: { heading: string; body: string[] };
    benefits: { heading: string; intro: string; cards: CourseBenefit[] };
    curriculum?: { heading: string; intro: string; modules: CourseModule[] };
    fit: {
      heading: string;
      intro: string;
      rightFor: string[];
      notRightFor: string[];
    };
    local: {
      heading: string;
      body: string[];
    };
  };
  faqs: CourseFaq[];
  related: RelatedCourse[];
  meta: {
    courseMode: "online" | "onsite" | "blended";
    timeRequired?: string;
    educationalLevel?: string;
    audienceType?: string;
    workload?: string;
  };
}

export function CoursePage({ data }: { data: CoursePageData }) {
  const path = `/courses/${data.slug}`;
  const fullUrl = new URL(path, siteConfig.url).toString();

  const courseJsonLd = courseSchema({
    name: `${data.hero.titlePre} ${data.hero.titleEm} ${data.hero.titlePost ?? ""}`
      .replace(/\s+/g, " ")
      .trim(),
    description: data.tldr,
    path,
    instructor: {
      name: authors.ram.name,
      url: authors.ram.url,
      credentials: authors.ram.credentials,
    },
    courseMode: data.meta.courseMode,
    audienceType: data.meta.audienceType,
    educationalLevel: data.meta.educationalLevel,
    timeRequired: data.meta.timeRequired,
    hasCourseInstance: {
      courseMode: data.meta.courseMode,
      courseWorkload: data.meta.workload,
      inLanguage: "en",
      location: "Long Beach, CA",
    },
  });

  const faqJsonLd = faqPageSchema(
    data.faqs.map((f) => ({ question: f.question, answer: f.answer }))
  );

  const breadcrumb = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    {
      name: `${data.hero.titlePre} ${data.hero.titleEm} ${data.hero.titlePost ?? ""}`
        .replace(/\s+/g, " ")
        .trim(),
      path,
    },
  ]);

  const speakable = speakableSchema([".course-tldr p", ".course-hero-sub"]);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: COURSE_PAGE_CSS }} />
      <div className="course-page">
        <section className="course-hero">
          <div className="course-hero-inner">
            <nav className="course-breadcrumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/courses">Courses</Link>
              <span>/</span>
              <span aria-current="page">
                {data.hero.titlePre} {data.hero.titleEm}{" "}
                {data.hero.titlePost ?? ""}
              </span>
            </nav>
            <div className="course-badge">{data.hero.badge}</div>
            <h1>
              {data.hero.titlePre} <em>{data.hero.titleEm}</em>
              {data.hero.titlePost ? ` ${data.hero.titlePost}` : ""}
            </h1>
            <p className="course-hero-sub">{data.hero.subtitle}</p>
            <div className="course-hero-actions">
              <Link href="/free-consultation" className="course-btn-primary">
                Book a Free Consultation →
              </Link>
              <Link href="/online-courses" className="course-btn-secondary">
                See All Courses
              </Link>
            </div>
          </div>
        </section>

        {/* TL;DR — primary speakable target */}
        <div className="course-tldr">
          <h2>TL;DR</h2>
          <p>{data.tldr}</p>
        </div>

        {/* What it is */}
        <section className="course-section">
          <div className="course-section-inner">
            <div className="course-section-header">
              <span className="course-section-label">Overview</span>
              <h2>{data.sections.whatItIs.heading}</h2>
            </div>
            <div className="course-prose">
              {data.sections.whatItIs.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="course-section course-section-alt">
          <div className="course-section-inner">
            <div className="course-section-header">
              <span className="course-section-label">Why it works</span>
              <h2>{data.sections.benefits.heading}</h2>
              <p>{data.sections.benefits.intro}</p>
            </div>
            <div className="course-benefits-grid">
              {data.sections.benefits.cards.map((c, i) => (
                <div key={i} className="course-benefit-card">
                  <h3>{c.title}</h3>
                  <p>{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Curriculum */}
        {data.sections.curriculum && (
          <section className="course-section">
            <div className="course-section-inner">
              <div className="course-section-header">
                <span className="course-section-label">Curriculum</span>
                <h2>{data.sections.curriculum.heading}</h2>
                <p>{data.sections.curriculum.intro}</p>
              </div>
              <div className="course-modules">
                {data.sections.curriculum.modules.map((m, i) => (
                  <div key={i} className="course-module">
                    <div className="course-module-number">{i + 1}</div>
                    <div className="course-module-body">
                      <h3>{m.title}</h3>
                      <p>{m.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Is this for you */}
        <section className="course-section course-section-alt">
          <div className="course-section-inner">
            <div className="course-section-header">
              <span className="course-section-label">Is this for you?</span>
              <h2>{data.sections.fit.heading}</h2>
              <p>{data.sections.fit.intro}</p>
            </div>
            <div className="course-fit">
              <div className="course-fit-card yes">
                <h3>This is a strong fit if…</h3>
                <ul>
                  {data.sections.fit.rightFor.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="course-fit-card no">
                <h3>Look elsewhere if…</h3>
                <ul>
                  {data.sections.fit.notRightFor.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Long Beach local */}
        <section className="course-section">
          <div className="course-section-inner">
            <div className="course-section-header">
              <span className="course-section-label">Long Beach, California</span>
              <h2>{data.sections.local.heading}</h2>
            </div>
            <div className="course-local">
              {data.sections.local.body.map((p, i) => (
                <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
              ))}
            </div>
          </div>
        </section>

        {/* Instructor */}
        <section className="course-section course-section-alt">
          <div className="course-section-inner">
            <div className="course-section-header">
              <span className="course-section-label">Your teacher</span>
              <h2>Ram Bhakt, E-RYT 500</h2>
            </div>
            <div className="course-instructor">
              <div className="course-instructor-avatar">Photo: Ram Bhakt</div>
              <div className="course-instructor-body">
                <p>{authors.ram.longBio}</p>
                <div className="course-instructor-credentials">
                  <span>E-RYT 500</span>
                  <span>Registered Yoga Therapist</span>
                  <span>Yoga Alliance Certified</span>
                  <span>10+ Years in Long Beach</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="course-section">
          <div className="course-section-inner">
            <div className="course-section-header">
              <span className="course-section-label">Frequently Asked</span>
              <h2>Questions About This Course</h2>
            </div>
            <div className="course-faq">
              {data.faqs.map((f, i) => (
                <div key={i} className="course-faq-item">
                  <h3>{f.question}</h3>
                  <p>{f.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related */}
        <section className="course-section course-section-alt">
          <div className="course-section-inner">
            <div className="course-section-header">
              <span className="course-section-label">Related at LBSOY</span>
              <h2>Continue Your Practice</h2>
            </div>
            <div className="course-related">
              {data.related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/courses/${r.slug}`}
                  className="course-related-card"
                >
                  <h3>{r.title}</h3>
                  <p>{r.blurb}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="course-cta">
          <h2>Start with a free consultation</h2>
          <p>
            A 20-minute call with Ram to understand your needs and map out the
            right practice — whether that's this course, a private session, or
            a different path entirely.
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

      <JsonLd data={courseJsonLd} />
      <JsonLd data={faqJsonLd} />
      <JsonLd data={breadcrumb} />
      <JsonLd data={speakable} />
    </>
  );
}
