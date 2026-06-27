import Link from "next/link";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import MailingListSignup from "@/components/MailingListSignup";

export const metadata: Metadata = buildMetadata({
  title: "Yoga Therapy & Corporate Wellness in Long Beach",
  description:
    "Long Beach's trusted source for yoga therapy, corporate wellness programs, and holistic healing. Book a free consultation with our experienced yoga therapists.",
  path: "/",
  keywords: [
    "yoga long beach",
    "yoga therapy long beach",
    "corporate wellness long beach",
    "yoga classes long beach",
    "yoga near me",
    "belmont shore yoga",
    "signal hill wellness",
  ],
});

export default function HomePage() {
  return (
    <>
      {/* === HERO === */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-badge">Long Beach, California</div>
            <h1>
              Long Beach's Home for Yoga Therapy &amp; <em>Wellness</em>
            </h1>
            <p className="hero-sub">
              We help individuals heal through personalized yoga therapy and
              connect local businesses with workplace wellness programs that
              reduce stress, prevent burnout, and build stronger teams.
            </p>
            <div className="hero-actions">
              <Link href="/free-consultation" className="btn-primary">
                Book Free Consultation
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link href="/corporate-wellness" className="btn-secondary">
                Corporate Wellness
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-image-placeholder">Photo: Yoga therapy session in progress</div>
            <div className="hero-float-card">
              <div className="hero-float-number">14+</div>
              <div className="hero-float-label">
                <strong>Years Serving</strong>Long Beach Community
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === TRUST BAR === */}
      <div className="trust-bar">
        <div className="trust-bar-inner">
          <div className="trust-item">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            Yoga Alliance Certified
          </div>
          <div className="trust-item">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            E-RYT 500 Credentials
          </div>
          <div className="trust-item">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            99+ Certified Graduates
          </div>
          <div className="trust-item">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Serving Long Beach Since 2012
          </div>
        </div>
      </div>

      {/* === SERVICES === */}
      <section className="section">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-label">What We Offer</span>
            <h2>Yoga for Healing, Growth, and Performance</h2>
            <p>From one-on-one therapy sessions to enterprise wellness programs, we meet you where you are.</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
              <h3>Yoga Therapy</h3>
              <p>
                Clinically-informed, one-on-one sessions for chronic pain, anxiety,
                stress, injury recovery, and prenatal/postnatal care. Personalized
                healing plans designed around your body and your goals.
              </p>
              <Link href="/yoga-therapy" className="service-link">
                Learn More
                <svg viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" />
                </svg>
              </Link>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              </div>
              <h3>Corporate Wellness</h3>
              <p>
                On-site and virtual yoga programs for businesses, schools, hotels,
                and healthcare organizations across Long Beach. Reduce employee
                stress, boost productivity, and demonstrate your commitment to team
                well-being.
              </p>
              <Link href="/corporate-wellness" className="service-link">
                Get a Proposal
                <svg viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" />
                </svg>
              </Link>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
              </div>
              <h3>Online Courses</h3>
              <p>
                Self-paced courses in yoga philosophy, anatomy, Ayurveda, pranayama,
                and meditation. Learn from experienced instructors at your own pace,
                from anywhere in the world.
              </p>
              <Link href="/online-courses" className="service-link">
                Browse Courses
                <svg viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* === ABOUT PREVIEW === */}
      <section className="section section-alt">
        <div className="section-inner">
          <div className="about-grid">
            <div className="about-image-placeholder">Photo: Ram Bhakt teaching a group session</div>
            <div className="about-content">
              <span className="section-label">About LBSOY</span>
              <h2>Rooted in Tradition, Informed by Science</h2>
              <p>
                Long Beach School of Yoga was founded with a simple mission: make
                the healing power of yoga accessible to everyone in the South Bay.
                Led by Ram Bhakt, an E-RYT 500 certified instructor and yoga
                therapist with over a decade of experience, we blend ancient yogic
                wisdom with modern clinical approaches.
              </p>
              <p>
                Our graduates now practice across the country, bringing yoga
                therapy to hospitals, schools, hotels, and corporate offices. We're
                not just a yoga school — we're the hub of Long Beach's wellness
                community.
              </p>
              <div className="credential-list">
                <span className="credential">E-RYT 500</span>
                <span className="credential">Yoga Alliance Certified</span>
                <span className="credential">Yoga Therapist</span>
                <span className="credential">14+ Years Experience</span>
              </div>
              <Link href="/about" className="btn-primary">
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* === STATS === */}
      <section className="section">
        <div className="section-inner">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">99+</div>
              <div className="stat-label">Certified Graduates</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">17</div>
              <div className="stat-label">Course Programs</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">10+</div>
              <div className="stat-label">Years in Long Beach</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">500+</div>
              <div className="stat-label">Hours of Training</div>
            </div>
          </div>
        </div>
      </section>

      {/* === TESTIMONIALS === */}
      <section className="section section-alt">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-label">Testimonials</span>
            <h2>What Our Community Says</h2>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                "The yoga therapy sessions completely transformed my approach to
                managing chronic back pain. After just six weeks, I was moving
                better than I had in years. Ram's clinical knowledge sets this
                apart from any yoga studio I've been to."
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">J</div>
                <div>
                  <div className="testimonial-name">Jessica M.</div>
                  <div className="testimonial-role">Yoga Therapy Client</div>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                "We brought LBSOY in for weekly office yoga sessions and the
                impact on our team's energy and morale was immediate. Stress
                levels dropped, people started taking real breaks. Best wellness
                investment we've made."
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">M</div>
                <div>
                  <div className="testimonial-name">Marcus T.</div>
                  <div className="testimonial-role">HR Director, Long Beach Tech Co.</div>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                "The teacher training changed my life. The depth of the
                curriculum — anatomy, philosophy, therapeutic applications —
                prepared me to actually help people heal, not just lead a
                workout. I now run my own yoga therapy practice."
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">S</div>
                <div>
                  <div className="testimonial-name">Sarah K.</div>
                  <div className="testimonial-role">LBSOY Graduate, Yoga Therapist</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === B2B === */}
      <section className="b2b-section">
        <div className="b2b-inner">
          <div className="b2b-content">
            <span className="section-label" style={{ color: "var(--sage-light)" }}>
              For Businesses
            </span>
            <h2>Bring Wellness to Your Long Beach Workplace</h2>
            <p>
              Employee burnout costs U.S. businesses $125–190 billion in
              healthcare spending annually. Yoga-based wellness programs have
              been shown to reduce absenteeism by 28% and increase productivity
              by up to 20%.
            </p>
            <ul className="b2b-features">
              <li>
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                On-site weekly yoga classes at your Long Beach office
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                Virtual sessions for remote and hybrid teams
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                Stress management and meditation workshops
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                Custom programs for schools, hotels, and healthcare
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                Team retreat planning and facilitation
              </li>
            </ul>
            <a
              href={`${siteConfig.mynUrl}/corporate-wellness-programs`}
              className="btn-primary btn-primary-light"
              target="_blank"
              rel="noopener noreferrer"
            >
              Request a Custom Proposal
            </a>
          </div>
          <div>
            <div
              className="hero-image-placeholder"
              style={{
                background: "rgba(255,255,255,0.05)",
                color: "rgba(255,255,255,0.5)",
                aspectRatio: 1,
              }}
            >
              Photo: Corporate wellness session
            </div>
          </div>
        </div>
      </section>

      {/* === BLOG PREVIEW === */}
      <section className="section">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-label">From the Blog</span>
            <h2>Insights for Your Wellness Journey</h2>
          </div>
          <div className="blog-grid">
            <div className="blog-card">
              <div className="blog-card-image"><span>Featured Image</span></div>
              <div className="blog-card-body">
                <div className="blog-card-tag">Yoga Therapy</div>
                <h3>
                  <Link href="/blog/yoga-therapy-chronic-back-pain">
                    Yoga Therapy for Chronic Back Pain: A Long Beach Guide
                  </Link>
                </h3>
                <p>How clinically-informed yoga therapy can help you manage and reduce chronic back pain without medication or surgery.</p>
              </div>
            </div>
            <div className="blog-card">
              <div className="blog-card-image"><span>Featured Image</span></div>
              <div className="blog-card-body">
                <div className="blog-card-tag">Corporate Wellness</div>
                <h3>
                  <Link href="/blog/company-needs-wellness-program">
                    5 Reasons Your Long Beach Company Needs a Wellness Program
                  </Link>
                </h3>
                <p>The business case for workplace yoga: ROI data, employee retention, and how to get started.</p>
              </div>
            </div>
            <div className="blog-card">
              <div className="blog-card-image"><span>Featured Image</span></div>
              <div className="blog-card-body">
                <div className="blog-card-tag">Education</div>
                <h3>
                  <Link href="/blog/what-is-yoga-therapy">
                    What Is Yoga Therapy? (And How It Differs From Yoga Classes)
                  </Link>
                </h3>
                <p>Understanding the clinical approach to yoga that's helping people heal from chronic conditions, anxiety, and injury.</p>
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: 48 }}>
            <Link href="/blog" className="btn-secondary">View All Articles</Link>
          </div>
        </div>
      </section>

      {/* === NEWSLETTER === */}
      <section className="section section-alt">
        <div className="ml-signup-section">
          <MailingListSignup
            variant="light"
            source="homepage"
            heading="Healthy Long Beach, in your inbox"
            blurb="Local wellness events, new healthy spots, and yoga therapy tips for Long Beach — every couple of weeks. No spam."
          />
        </div>
      </section>

      {/* === CTA BANNER === */}
      <section className="cta-banner">
        <h2>Ready to Start Your Healing Journey?</h2>
        <p>Book a free consultation and discover how yoga therapy or corporate wellness can transform your life — or your workplace.</p>
        <Link href="/free-consultation" className="btn-white">
          Book Your Free Consultation
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </section>
    </>
  );
}
