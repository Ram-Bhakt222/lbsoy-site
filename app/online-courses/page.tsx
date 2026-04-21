import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";

/* =====================================================================
   PAGE: online-courses
   Ported from LBSOY_Site_Build/online-courses.html during the GitHub migration.
   TODO (next session): replace dangerouslySetInnerHTML with real JSX and
   rewrite copy for Long Beach local SEO + MYN CTA routing.
   ===================================================================== */

const PAGE_CSS = String.raw`:root {
      --sage: #7A8B6F;
      --sage-light: #9AAD8E;
      --sage-dark: #5C6B52;
      --warm-cream: #FAF6F0;
      --warm-cream-dark: #F0E8DC;
      --charcoal: #2D2D2D;
      --charcoal-light: #4A4A4A;
      --terracotta: #C17B5E;
      --terracotta-light: #D4977E;
      --gold: #C4A76C;
      --white: #FFFFFF;
      --text-primary: #2D2D2D;
      --text-secondary: #5A5A5A;
      --text-light: #8A8A8A;
      --font-heading: 'Cormorant Garamond', Georgia, serif;
      --font-body: 'Plus Jakarta Sans', -apple-system, sans-serif;
    }

    * { margin: 0; padding: 0; box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    body { font-family: var(--font-body); color: var(--text-primary); background: var(--white); line-height: 1.7; font-size: 16px; }

    /* === NAVIGATION === */
    .nav { position: fixed; top: 0; left: 0; right: 0; z-index: 1000; background: rgba(255,255,255,0.97); backdrop-filter: blur(10px); border-bottom: 1px solid rgba(0,0,0,0.06); transition: all 0.3s; }
    .nav-inner { max-width: 1200px; margin: 0 auto; padding: 0 24px; display: flex; align-items: center; justify-content: space-between; height: 72px; }
    .nav-logo { font-family: var(--font-heading); font-size: 22px; font-weight: 600; color: var(--charcoal); text-decoration: none; letter-spacing: -0.5px; }
    .nav-logo span { color: var(--sage); }
    .nav-links { display: flex; gap: 32px; align-items: center; }
    .nav-links a { font-size: 14px; font-weight: 500; color: var(--text-secondary); text-decoration: none; letter-spacing: 0.3px; transition: color 0.2s; }
    .nav-links a:hover { color: var(--sage); }
    .nav-cta { background: var(--sage); color: var(--white) !important; padding: 10px 24px; border-radius: 6px; font-weight: 600; transition: background 0.2s !important; }
    .nav-cta:hover { background: var(--sage-dark) !important; }
    .mobile-menu { display: none; background: none; border: none; cursor: pointer; }
    .mobile-menu svg { width: 24px; height: 24px; stroke: var(--charcoal); }

    /* === HERO === */
    .hero { padding: 160px 24px 100px; background: linear-gradient(165deg, var(--warm-cream) 0%, var(--white) 60%, rgba(122,139,111,0.06) 100%); position: relative; overflow: hidden; }
    .hero::before { content: ''; position: absolute; top: -200px; right: -200px; width: 600px; height: 600px; background: radial-gradient(circle, rgba(122,139,111,0.08) 0%, transparent 70%); }
    .hero-inner { max-width: 1200px; margin: 0 auto; }
    .hero-badge { display: inline-flex; align-items: center; gap: 8px; background: rgba(122,139,111,0.1); color: var(--sage-dark); padding: 8px 16px; border-radius: 100px; font-size: 13px; font-weight: 600; letter-spacing: 0.5px; text-transform: uppercase; margin-bottom: 24px; }
    .hero-badge::before { content: ''; width: 6px; height: 6px; background: var(--sage); border-radius: 50%; }
    .hero h1 { font-family: var(--font-heading); font-size: 56px; line-height: 1.1; font-weight: 600; color: var(--charcoal); margin-bottom: 24px; letter-spacing: -1px; }
    .hero h1 em { font-style: italic; color: var(--sage); }
    .hero-sub { font-size: 18px; line-height: 1.7; color: var(--text-secondary); margin-bottom: 40px; max-width: 520px; }
    .btn-primary { display: inline-flex; align-items: center; gap: 8px; background: var(--sage); color: var(--white); padding: 16px 32px; border-radius: 8px; font-size: 15px; font-weight: 600; text-decoration: none; transition: all 0.2s; border: none; cursor: pointer; }
    .btn-primary:hover { background: var(--sage-dark); transform: translateY(-1px); box-shadow: 0 8px 24px rgba(122,139,111,0.25); }
    .btn-secondary { display: inline-flex; align-items: center; gap: 8px; background: transparent; color: var(--charcoal); padding: 16px 32px; border-radius: 8px; font-size: 15px; font-weight: 600; text-decoration: none; border: 1.5px solid rgba(0,0,0,0.15); transition: all 0.2s; }
    .btn-secondary:hover { border-color: var(--sage); color: var(--sage); }

    /* === SECTIONS === */
    .section { padding: 100px 24px; }
    .section-alt { background: var(--warm-cream); }
    .section-inner { max-width: 1200px; margin: 0 auto; }
    .section-header { text-align: center; margin-bottom: 64px; }
    .section-label { display: inline-block; font-size: 12px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: var(--sage); margin-bottom: 16px; }
    .section-header h2 { font-family: var(--font-heading); font-size: 44px; font-weight: 600; color: var(--charcoal); line-height: 1.15; letter-spacing: -0.5px; margin-bottom: 16px; }
    .section-header p { font-size: 17px; color: var(--text-secondary); max-width: 600px; margin: 0 auto; }

    /* === COURSE CARD STYLES === */
    .courses-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; margin-bottom: 80px; }
    .course-card { background: var(--white); border-radius: 16px; padding: 40px 32px; border: 1px solid rgba(0,0,0,0.06); transition: all 0.3s; position: relative; overflow: hidden; }
    .course-card:hover { transform: translateY(-4px); box-shadow: 0 20px 60px rgba(0,0,0,0.08); border-color: rgba(122,139,111,0.2); }
    .course-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: var(--sage); transform: scaleX(0); transition: transform 0.3s; }
    .course-card:hover::before { transform: scaleX(1); }
    .course-badge { display: inline-block; font-size: 12px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; color: var(--sage); margin-bottom: 12px; }
    .course-card h3 { font-family: var(--font-heading); font-size: 26px; font-weight: 600; color: var(--charcoal); margin-bottom: 8px; }
    .course-price { font-family: var(--font-heading); font-size: 36px; font-weight: 700; color: var(--sage); margin-bottom: 20px; }
    .course-card p { font-size: 15px; color: var(--text-secondary); line-height: 1.7; margin-bottom: 24px; }
    .course-features { list-style: none; margin: 20px 0 24px; }
    .course-features li { display: flex; align-items: flex-start; gap: 12px; font-size: 14px; color: var(--text-secondary); padding: 8px 0; }
    .course-features li::before { content: 'check'; color: var(--sage); font-weight: 700; flex-shrink: 0; }

    /* === TIER SECTIONS === */
    .tier-intro { text-align: center; margin-bottom: 60px; }
    .tier-intro p { font-size: 17px; color: var(--text-secondary); max-width: 700px; margin: 0 auto; }

    /* === WHY LEARN === */
    .benefits-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 32px; }
    .benefit-card { text-align: center; padding: 32px 20px; }
    .benefit-icon { width: 56px; height: 56px; border-radius: 12px; background: rgba(122,139,111,0.1); display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; }
    .benefit-icon svg { width: 28px; height: 28px; stroke: var(--sage); fill: none; stroke-width: 1.5; }
    .benefit-card h3 { font-family: var(--font-heading); font-size: 18px; font-weight: 600; color: var(--charcoal); margin-bottom: 12px; }
    .benefit-card p { font-size: 14px; color: var(--text-secondary); line-height: 1.6; }

    /* === STATS === */
    .stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 32px; }
    .stat-card { text-align: center; padding: 40px 24px; }
    .stat-number { font-family: var(--font-heading); font-size: 52px; font-weight: 700; color: var(--sage); line-height: 1; margin-bottom: 8px; }
    .stat-label { font-size: 15px; color: var(--text-secondary); font-weight: 500; }

    /* === CTA BANNER === */
    .cta-banner { background: linear-gradient(135deg, var(--sage) 0%, var(--sage-dark) 100%); padding: 80px 24px; text-align: center; }
    .cta-banner h2 { font-family: var(--font-heading); font-size: 40px; font-weight: 600; color: var(--white); margin-bottom: 16px; }
    .cta-banner p { font-size: 17px; color: rgba(255,255,255,0.85); max-width: 560px; margin: 0 auto 32px; }
    .btn-white { background: var(--white); color: var(--sage-dark); padding: 16px 32px; border-radius: 8px; font-size: 15px; font-weight: 600; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; transition: all 0.2s; }
    .btn-white:hover { transform: translateY(-1px); box-shadow: 0 8px 24px rgba(0,0,0,0.15); }

    /* === FOOTER === */
    .footer { background: var(--charcoal); color: rgba(255,255,255,0.7); padding: 80px 24px 40px; }
    .footer-inner { max-width: 1200px; margin: 0 auto; }
    .footer-grid { display: grid; grid-template-columns: 1.5fr 1fr 1fr 1fr; gap: 48px; margin-bottom: 48px; }
    .footer-brand { font-family: var(--font-heading); font-size: 22px; font-weight: 600; color: var(--white); margin-bottom: 16px; }
    .footer-brand span { color: var(--sage-light); }
    .footer-desc { font-size: 14px; line-height: 1.7; margin-bottom: 20px; }
    .footer-social { display: flex; gap: 12px; }
    .footer-social a { width: 36px; height: 36px; border-radius: 8px; background: rgba(255,255,255,0.08); display: flex; align-items: center; justify-content: center; color: rgba(255,255,255,0.6); text-decoration: none; font-size: 14px; transition: all 0.2s; }
    .footer-social a:hover { background: var(--sage); color: var(--white); }
    .footer-col h4 { font-family: var(--font-heading); font-size: 18px; font-weight: 600; color: var(--white); margin-bottom: 20px; }
    .footer-col a { display: block; font-size: 14px; color: rgba(255,255,255,0.6); text-decoration: none; padding: 6px 0; transition: color 0.2s; }
    .footer-col a:hover { color: var(--sage-light); }
    .footer-bottom { border-top: 1px solid rgba(255,255,255,0.08); padding-top: 32px; display: flex; justify-content: space-between; align-items: center; font-size: 13px; }
    .footer-address { font-size: 14px; line-height: 1.6; }

    /* === RESPONSIVE === */
    @media (max-width: 968px) {
      .hero h1 { font-size: 40px; }
      .courses-grid, .benefits-grid { grid-template-columns: 1fr; }
      .stats-grid { grid-template-columns: repeat(2, 1fr); }
      .footer-grid { grid-template-columns: 1fr 1fr; }
      .nav-links { display: none; }
      .mobile-menu { display: block; }
      .section-header h2 { font-size: 32px; }
    }
    @media (min-width: 600px) and (max-width: 968px) {
      .courses-grid, .benefits-grid { grid-template-columns: repeat(2, 1fr); }
    }`;

const PAGE_HTML = String.raw`<!-- Navigation -->
  <!-- Hero -->
  <section class="hero">
    <div class="hero-inner">
      <div>
        <span class="hero-badge">Online Learning</span>
        <h1>Learn Yoga on <em>Your Own Terms</em></h1>
        <p class="hero-sub">Transform your practice with self-paced courses from certified yoga therapists. Master anatomy, philosophy, Ayurveda, and meditation — from anywhere, anytime.</p>
        <div class="hero-actions">
          <a href="#featured-courses" class="btn-primary">Browse Courses</a>
          <a href="#free-courses" class="btn-secondary">Free Courses Available</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Featured Courses (Paid Tier) -->
  <section class="section">
    <div class="section-inner">
      <div class="section-header">
        <span class="section-label">Tier 1 - Premium Courses</span>
        <h2>Featured Paid Courses</h2>
        <p class="tier-intro">Comprehensive courses taught by E-RYT 500 certified instructors. Lifetime access, video lessons, worksheets, and ongoing community support.</p>
      </div>
      <div class="courses-grid" id="featured-courses">
        <div class="course-card">
          <span class="course-badge">Philosophy</span>
          <h3>Yoga Sutras of Patanjali</h3>
          <div class="course-price">$80</div>
          <p>Deep dive into yoga philosophy, ethical principles, and meditation techniques from the foundational text that shapes modern yoga practice.</p>
          <ul class="course-features">
            <li>8 comprehensive video modules</li>
            <li>Study guide & worksheet</li>
            <li>Lifetime access</li>
            <li>Community forum access</li>
          </ul>
          <a href="#" class="btn-primary">Enroll Now</a>
        </div>
        <div class="course-card">
          <span class="course-badge">Anatomy</span>
          <h3>Yoga Anatomy</h3>
          <div class="course-price">$120</div>
          <p>Study the body's systems as they relate to yoga practice — prevent injuries, understand movement patterns, and teach safely to all populations.</p>
          <ul class="course-features">
            <li>12 video lessons with diagrams</li>
            <li>Anatomical worksheets</li>
            <li>Common injury prevention guide</li>
            <li>Lifetime access & updates</li>
          </ul>
          <a href="#" class="btn-primary">Enroll Now</a>
        </div>
        <div class="course-card">
          <span class="course-badge">Wellness</span>
          <h3>Ayurveda: The Art of Natural Healing</h3>
          <div class="course-price">$100</div>
          <p>Explore the ancient healing system of Ayurveda — discover your constitutional type, seasonal practices, and diet and lifestyle recommendations for optimal wellness.</p>
          <ul class="course-features">
            <li>10 detailed video modules</li>
            <li>Constitutional assessment tool</li>
            <li>Seasonal practice guides</li>
            <li>Lifetime resource library</li>
          </ul>
          <a href="#" class="btn-primary">Enroll Now</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Free Courses (Lead Magnet Tier) -->
  <section class="section section-alt">
    <div class="section-inner">
      <div class="section-header">
        <span class="section-label">Tier 2 - Lead Magnet</span>
        <h2>Free Courses</h2>
        <p class="tier-intro">Start your yoga journey with these free, high-quality courses. Sign up with your email to unlock instant access to all materials.</p>
      </div>
      <div class="courses-grid" id="free-courses">
        <div class="course-card">
          <span class="course-badge">Accessibility</span>
          <h3>Chair Yoga</h3>
          <div class="course-price">Free</div>
          <p>Perfect for office workers, seniors, and anyone who wants the benefits of yoga without getting on the floor. Gentle, effective, and accessible for all mobility levels.</p>
          <ul class="course-features">
            <li>6 video lessons</li>
            <li>Download pose guide</li>
            <li>Email support</li>
            <li>Forever free</li>
          </ul>
          <a href="#" class="btn-primary">Sign Up & Learn</a>
        </div>
        <div class="course-card">
          <span class="course-badge">Pranayama</span>
          <h3>Breathing & Pranayama</h3>
          <div class="course-price">Free</div>
          <p>Master essential breath control techniques for stress relief, increased energy, and improved mental clarity. Foundation for all yoga practices.</p>
          <ul class="course-features">
            <li>5 guided video lessons</li>
            <li>Breathing technique card</li>
            <li>Daily practice guide</li>
            <li>Email tips & updates</li>
          </ul>
          <a href="#" class="btn-primary">Sign Up & Learn</a>
        </div>
        <div class="course-card">
          <span class="course-badge">Meditation</span>
          <h3>Meditation Foundations</h3>
          <div class="course-price">Free</div>
          <p>Learn to quiet the mind with practical, beginner-friendly meditation techniques. Reduce anxiety, improve focus, and build a sustainable practice.</p>
          <ul class="course-features">
            <li>7 meditation videos</li>
            <li>Tracking journal</li>
            <li>Guided practices</li>
            <li>Beginner tips guide</li>
          </ul>
          <a href="#" class="btn-primary">Sign Up & Learn</a>
        </div>
        <div class="course-card">
          <span class="course-badge">Wellness</span>
          <h3>Yoga & Self Care</h3>
          <div class="course-price">Free</div>
          <p>A gentle introduction to using yoga practices for daily wellness. Learn simple routines that fit into your busy life and support holistic health.</p>
          <ul class="course-features">
            <li>4 accessible video lessons</li>
            <li>Daily routine templates</li>
            <li>Self-care resource pack</li>
            <li>Community access</li>
          </ul>
          <a href="#" class="btn-primary">Sign Up & Learn</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Why Learn With Us -->
  <section class="section">
    <div class="section-inner">
      <div class="section-header">
        <span class="section-label">Our Approach</span>
        <h2>Why Learn With Us?</h2>
        <p>We're not just another online yoga platform. Here's what sets LBSOY apart:</p>
      </div>
      <div class="benefits-grid">
        <div class="benefit-card">
          <div class="benefit-icon">
            <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
          </div>
          <h3>Expert Instructors</h3>
          <p>All courses taught by E-RYT 500 certified yoga teachers and therapists with 10+ years of experience in clinical practice and teaching.</p>
        </div>
        <div class="benefit-card">
          <div class="benefit-icon">
            <svg viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
          </div>
          <h3>Clinical Depth</h3>
          <p>Go beyond poses. Learn the anatomy, physiology, and therapeutic applications. Not just "how" — understand "why" for deeper practice and teaching.</p>
        </div>
        <div class="benefit-card">
          <div class="benefit-icon">
            <svg viewBox="0 0 24 24"><path d="M11.99 5V1h-1v4H7.58A2.996 2.996 0 0 0 4.7 4.04L2.5 2.12v2.36h1.52C5.5 3.6 6.92 2.68 8.64 2.2V5c0 .55.45 1 1 1s1-.45 1-1zm.01 14v4h1v-4h3.41a2.996 2.996 0 0 0 2.88-.96l2.2 1.92v-2.36h-1.52c1.28.85 2.7 1.77 4.42 2.25v-2.85c0-.55-.45-1-1-1s-1 .45-1 1z"/></svg>
          </div>
          <h3>Self-Paced Learning</h3>
          <p>Learn on your schedule. Access all course materials anytime, from anywhere. No deadlines, no time pressure — just your pace.</p>
        </div>
        <div class="benefit-card">
          <div class="benefit-icon">
            <svg viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
          </div>
          <h3>Community Access</h3>
          <p>Join a supportive community of students and graduates. Share questions, connect with practitioners, and grow together in our LBSOY network.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Community Stats -->
  <section class="section section-alt">
    <div class="section-inner">
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-number">99+</div>
          <div class="stat-label">Certified Graduates</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">1000+</div>
          <div class="stat-label">Students Worldwide</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">10+</div>
          <div class="stat-label">States Represented</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">15</div>
          <div class="stat-label">Years Combined Teaching</div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Banner -->
  <section class="cta-banner">
    <h2>Not sure which course is right for you?</h2>
    <p>Book a free consultation with our instructors. We'll help you choose the perfect course for your goals and current practice level.</p>
    <a href="/free-consultation" class="btn-white">Book a Free Consultation</a>
  </section>

  <!-- Footer -->`;

const PAGE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Long Beach School of Yoga",
    "description": "Self-paced online yoga courses in anatomy, philosophy, Ayurveda, pranayama, and meditation.",
    "url": "https://longbeachschoolofyoga.com/online-courses",
    "hasCourse": [
      {
        "@type": "Course",
        "name": "Yoga Sutras of Patanjali",
        "description": "Deep dive into yoga philosophy, ethical principles, and meditation techniques from the foundational text",
        "provider": { "@type": "Organization", "name": "Long Beach School of Yoga" },
        "offers": { "@type": "Offer", "price": "80", "priceCurrency": "USD" }
      },
      {
        "@type": "Course",
        "name": "Yoga Anatomy",
        "description": "Study the body's systems as they relate to yoga practice — prevent injuries, understand movement, teach safely",
        "provider": { "@type": "Organization", "name": "Long Beach School of Yoga" },
        "offers": { "@type": "Offer", "price": "120", "priceCurrency": "USD" }
      },
      {
        "@type": "Course",
        "name": "Ayurveda: The Art of Natural Healing",
        "description": "Ancient healing system, constitutional types, seasonal practices, diet and lifestyle",
        "provider": { "@type": "Organization", "name": "Long Beach School of Yoga" },
        "offers": { "@type": "Offer", "price": "100", "priceCurrency": "USD" }
      },
      {
        "@type": "Course",
        "name": "Chair Yoga",
        "description": "Perfect for office workers, seniors, and anyone who wants yoga without getting on the floor",
        "provider": { "@type": "Organization", "name": "Long Beach School of Yoga" },
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
      },
      {
        "@type": "Course",
        "name": "Breathing & Pranayama",
        "description": "Master breath control techniques for stress relief, energy, and mental clarity",
        "provider": { "@type": "Organization", "name": "Long Beach School of Yoga" },
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
      },
      {
        "@type": "Course",
        "name": "Meditation Foundations",
        "description": "Learn to quiet the mind — practical techniques for beginners",
        "provider": { "@type": "Organization", "name": "Long Beach School of Yoga" },
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
      },
      {
        "@type": "Course",
        "name": "Yoga & Self Care",
        "description": "A gentle introduction to using yoga practices for daily wellness",
        "provider": { "@type": "Organization", "name": "Long Beach School of Yoga" },
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
      }
    ]
  };

export const metadata: Metadata = buildMetadata({
  title: "Online Yoga Courses | Learn from Long Beach's Yoga Experts",
  description: 'Self-paced online yoga courses in anatomy, philosophy, Ayurveda, pranayama, and meditation. Learn from certified yoga therapists at Long Beach School of Yoga.',
  path: "/online-courses",
  keywords: ["online yoga courses", "yoga anatomy course", "yoga philosophy", "ayurveda course", "pranayama breathing", "meditation course"],
});

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: PAGE_CSS }} />
      <div dangerouslySetInnerHTML={{ __html: PAGE_HTML }} />
      <JsonLd data={PAGE_SCHEMA} />
    </>
  );
}
