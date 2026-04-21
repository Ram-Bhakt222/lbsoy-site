import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";


/* =====================================================================
   PAGE: services
   Ported from LBSOY_Site_Build/services.html during the GitHub migration.
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
    .hero-inner { max-width: 1200px; margin: 0 auto; text-align: center; }
    .hero-badge { display: inline-flex; align-items: center; gap: 8px; background: rgba(122,139,111,0.1); color: var(--sage-dark); padding: 8px 16px; border-radius: 100px; font-size: 13px; font-weight: 600; letter-spacing: 0.5px; text-transform: uppercase; margin-bottom: 24px; }
    .hero-badge::before { content: ''; width: 6px; height: 6px; background: var(--sage); border-radius: 50%; }
    .hero h1 { font-family: var(--font-heading); font-size: 56px; line-height: 1.1; font-weight: 600; color: var(--charcoal); margin-bottom: 24px; letter-spacing: -1px; }
    .hero h1 em { font-style: italic; color: var(--sage); }
    .hero-sub { font-size: 18px; line-height: 1.7; color: var(--text-secondary); margin-bottom: 40px; max-width: 700px; margin-left: auto; margin-right: auto; }

    /* === SECTIONS === */
    .section { padding: 100px 24px; }
    .section-alt { background: var(--warm-cream); }
    .section-inner { max-width: 1200px; margin: 0 auto; }
    .section-header { text-align: center; margin-bottom: 64px; }
    .section-label { display: inline-block; font-size: 12px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: var(--sage); margin-bottom: 16px; }
    .section-header h2 { font-family: var(--font-heading); font-size: 44px; font-weight: 600; color: var(--charcoal); line-height: 1.15; letter-spacing: -0.5px; margin-bottom: 16px; }
    .section-header p { font-size: 17px; color: var(--text-secondary); max-width: 600px; margin: 0 auto; }

    /* === SERVICES GRID === */
    .services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; }
    .service-card { background: var(--white); border-radius: 16px; padding: 40px 32px; border: 1px solid rgba(0,0,0,0.06); transition: all 0.3s; position: relative; overflow: hidden; }
    .service-card:hover { transform: translateY(-4px); box-shadow: 0 20px 60px rgba(0,0,0,0.08); border-color: rgba(122,139,111,0.2); }
    .service-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: var(--sage); transform: scaleX(0); transition: transform 0.3s; }
    .service-card:hover::before { transform: scaleX(1); }
    .service-icon { width: 56px; height: 56px; border-radius: 12px; background: rgba(122,139,111,0.1); display: flex; align-items: center; justify-content: center; margin-bottom: 24px; }
    .service-icon svg { width: 28px; height: 28px; stroke: var(--sage); fill: none; stroke-width: 1.5; }
    .service-card h3 { font-family: var(--font-heading); font-size: 24px; font-weight: 600; color: var(--charcoal); margin-bottom: 12px; }
    .service-card p { font-size: 15px; color: var(--text-secondary); line-height: 1.7; margin-bottom: 24px; }
    .service-link { font-size: 14px; font-weight: 600; color: var(--sage); text-decoration: none; display: inline-flex; align-items: center; gap: 6px; transition: gap 0.2s; }
    .service-link:hover { gap: 10px; }
    .service-link svg { width: 16px; height: 16px; stroke: currentColor; fill: none; }

    /* === DECISION MATRIX === */
    .decision-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px; margin-top: 60px; }
    .decision-card { background: var(--white); border: 1px solid rgba(0,0,0,0.06); border-radius: 16px; padding: 32px; transition: all 0.3s; }
    .decision-card:hover { border-color: rgba(122,139,111,0.2); box-shadow: 0 8px 24px rgba(0,0,0,0.05); }
    .decision-card h4 { font-family: var(--font-heading); font-size: 18px; font-weight: 600; color: var(--charcoal); margin-bottom: 12px; }
    .decision-card p { font-size: 15px; color: var(--text-secondary); margin-bottom: 16px; }
    .decision-card a { color: var(--sage); font-weight: 600; text-decoration: none; }

    /* === PRICING SECTION === */
    .pricing-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; }
    .pricing-card { background: var(--white); border-radius: 16px; padding: 40px 32px; border: 1px solid rgba(0,0,0,0.06); text-align: center; }
    .pricing-icon { width: 60px; height: 60px; border-radius: 12px; background: rgba(122,139,111,0.1); display: flex; align-items: center; justify-content: center; margin: 0 auto 24px; }
    .pricing-icon svg { width: 32px; height: 32px; stroke: var(--sage); fill: none; stroke-width: 1.5; }
    .pricing-card h3 { font-family: var(--font-heading); font-size: 22px; font-weight: 600; color: var(--charcoal); margin-bottom: 12px; }
    .pricing-range { font-family: var(--font-heading); font-size: 28px; font-weight: 600; color: var(--sage); margin: 16px 0; }
    .pricing-card p { font-size: 14px; color: var(--text-secondary); line-height: 1.6; }

    /* === CTA === */
    .btn-primary { display: inline-flex; align-items: center; gap: 8px; background: var(--sage); color: var(--white); padding: 16px 32px; border-radius: 8px; font-size: 15px; font-weight: 600; text-decoration: none; transition: all 0.2s; border: none; cursor: pointer; }
    .btn-primary:hover { background: var(--sage-dark); transform: translateY(-1px); box-shadow: 0 8px 24px rgba(122,139,111,0.25); }
    .btn-white { background: var(--white); color: var(--sage-dark); padding: 16px 32px; border-radius: 8px; font-size: 15px; font-weight: 600; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; transition: all 0.2s; }
    .btn-white:hover { transform: translateY(-1px); box-shadow: 0 8px 24px rgba(0,0,0,0.15); }

    /* === CTA BANNER === */
    .cta-banner { background: linear-gradient(135deg, var(--sage) 0%, var(--sage-dark) 100%); padding: 80px 24px; text-align: center; }
    .cta-banner h2 { font-family: var(--font-heading); font-size: 40px; font-weight: 600; color: var(--white); margin-bottom: 16px; }
    .cta-banner p { font-size: 17px; color: rgba(255,255,255,0.85); max-width: 560px; margin: 0 auto 32px; }

    /* === FOOTER === */
    .footer { background: var(--charcoal); color: rgba(255,255,255,0.7); padding: 80px 24px 40px; }
    .footer-inner { max-width: 1200px; margin: 0 auto; }
    .footer-grid { display: grid; grid-template-columns: 1.5fr 1fr 1fr 1fr; gap: 48px; margin-bottom: 48px; }
    .footer-brand { font-family: var(--font-heading); font-size: 22px; font-weight: 600; color: var(--white); margin-bottom: 16px; }
    .footer-brand span { color: var(--sage-light); }
    .footer-desc { font-size: 14px; line-height: 1.7; margin-bottom: 20px; }
    .footer-address { font-size: 14px; line-height: 1.6; }
    .footer-social { display: flex; gap: 12px; margin-top: 20px; }
    .footer-social a { width: 36px; height: 36px; border-radius: 8px; background: rgba(255,255,255,0.08); display: flex; align-items: center; justify-content: center; color: rgba(255,255,255,0.6); text-decoration: none; font-size: 14px; transition: all 0.2s; }
    .footer-social a:hover { background: var(--sage); color: var(--white); }
    .footer-col h4 { font-family: var(--font-heading); font-size: 18px; font-weight: 600; color: var(--white); margin-bottom: 20px; }
    .footer-col a { display: block; font-size: 14px; color: rgba(255,255,255,0.6); text-decoration: none; padding: 6px 0; transition: color 0.2s; }
    .footer-col a:hover { color: var(--sage-light); }
    .footer-bottom { border-top: 1px solid rgba(255,255,255,0.08); padding-top: 32px; display: flex; justify-content: space-between; align-items: center; font-size: 13px; }

    /* === RESPONSIVE === */
    @media (max-width: 968px) {
      .services-grid, .pricing-grid { grid-template-columns: 1fr; }
      .decision-grid { grid-template-columns: 1fr; }
      .footer-grid { grid-template-columns: 1fr 1fr; }
      .nav-links { display: none; }
      .mobile-menu { display: block; }
      .hero h1 { font-size: 40px; }
    }
    @media (min-width: 600px) and (max-width: 968px) {
      .services-grid, .pricing-grid { grid-template-columns: repeat(2, 1fr); }
    }`;

const PAGE_HTML = String.raw`<!-- Navigation -->
  <!-- Hero -->
  <section class="hero">
    <div class="hero-inner">
      <div class="hero-badge">Complete Yoga Solutions</div>
      <h1>Our Yoga Services</h1>
      <p class="hero-sub">From personalized healing therapy to corporate wellness programs, we offer comprehensive yoga services designed to meet your unique needs. Discover the right service for your journey.</p>
    </div>
  </section>

  <!-- Services Overview -->
  <section class="section">
    <div class="section-inner">
      <div class="section-header">
        <span class="section-label">What We Offer</span>
        <h2>Six Ways to Experience Yoga</h2>
        <p>Whether you're seeking individual healing, building team wellness, or learning yoga deeply, we have a service designed for you.</p>
      </div>
      <div class="services-grid">
        <div class="service-card">
          <div class="service-icon">
            <svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          </div>
          <h3>Yoga Therapy</h3>
          <p>Clinically-informed, one-on-one sessions for chronic pain, anxiety, stress recovery, injury rehabilitation, and prenatal/postnatal wellness. Each personalized plan is tailored to your body's unique needs.</p>
          <a href="/yoga-therapy" class="service-link">
            Learn More
            <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke-width="2"/></svg>
          </a>
        </div>
        <div class="service-card">
          <div class="service-icon">
            <svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
          </div>
          <h3>Corporate Wellness</h3>
          <p>On-site and virtual yoga programs for businesses, schools, hotels, and healthcare organizations. Build a culture of wellness that reduces stress, boosts productivity, and shows your team you care.</p>
          <a href="/corporate-wellness" class="service-link">
            Get a Proposal
            <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke-width="2"/></svg>
          </a>
        </div>
        <div class="service-card">
          <div class="service-icon">
            <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
          </div>
          <h3>Private Yoga Sessions</h3>
          <p>One-on-one personalized instruction designed exclusively for your goals, schedule, and body. Perfect for beginners, athletes, or anyone seeking dedicated attention and customized guidance.</p>
          <a href="/contact" class="service-link">
            Book a Session
            <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke-width="2"/></svg>
          </a>
        </div>
        <div class="service-card">
          <div class="service-icon">
            <svg viewBox="0 0 24 24"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
          </div>
          <h3>Online Courses</h3>
          <p>Self-paced courses in yoga philosophy, anatomy, Ayurveda, pranayama techniques, and meditation. Learn from experienced instructors at your own pace, anytime, from anywhere in the world.</p>
          <a href="/online-courses" class="service-link">
            Browse Courses
            <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke-width="2"/></svg>
          </a>
        </div>
        <div class="service-card">
          <div class="service-icon">
            <svg viewBox="0 0 24 24"><path d="M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3z"/><path d="M9 11h6M9 15h6"/></svg>
          </div>
          <h3>Workshops & Events</h3>
          <p>Immersive workshops on Ayurveda, pranayama breathing techniques, meditation, self-care practices, and more. Perfect for deepening your practice and connecting with the Long Beach yoga community.</p>
          <a href="/contact" class="service-link">
            Learn About Events
            <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke-width="2"/></svg>
          </a>
        </div>
        <div class="service-card">
          <div class="service-icon">
            <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          </div>
          <h3>Community Classes</h3>
          <p>Group yoga sessions for all levels, from beginner-friendly to advanced practitioners. Build connection with fellow yogis while improving strength, flexibility, and mental clarity.</p>
          <a href="/contact" class="service-link">
            Join a Class
            <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke-width="2"/></svg>
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Decision Helper -->
  <section class="section section-alt">
    <div class="section-inner">
      <div class="section-header">
        <span class="section-label">Which Service Is Right for You?</span>
        <h2>Find Your Perfect Fit</h2>
        <p>Not sure where to start? Use this guide to find the service that matches your goals.</p>
      </div>
      <div class="decision-grid">
        <div class="decision-card">
          <h4>I'm Looking for Individual Healing</h4>
          <p>You're dealing with chronic pain, anxiety, injury, or stress and want personalized attention from a trained yoga therapist. Our yoga therapy sessions are customized to your specific needs.</p>
          <a href="/yoga-therapy">Explore Yoga Therapy &#8594;</a>
        </div>
        <div class="decision-card">
          <h4>I Want to Support My Workplace</h4>
          <p>You're responsible for employee wellness and want to bring stress-relieving, productivity-boosting yoga programs to your team. Corporate wellness programs drive real ROI.</p>
          <a href="/corporate-wellness">Get a Wellness Proposal &#8594;</a>
        </div>
        <div class="decision-card">
          <h4>I Want to Learn at My Own Pace</h4>
          <p>You're interested in deepening your yoga knowledge through structured courses in anatomy, philosophy, pranayama, Ayurveda, and meditation. Our online courses are flexible and comprehensive.</p>
          <a href="/online-courses">Browse Online Courses &#8594;</a>
        </div>
        <div class="decision-card">
          <h4>I Want Dedicated One-on-One Attention</h4>
          <p>You prefer personalized instruction in a private setting, whether you're a beginner or advanced practitioner. Private sessions are perfect for custom goals and flexible scheduling.</p>
          <a href="/contact">Book a Private Session &#8594;</a>
        </div>
        <div class="decision-card">
          <h4>I Want to Deepen My Practice</h4>
          <p>You're looking for immersive workshops on specific topics like Ayurveda, pranayama, meditation, or self-care. Our workshops connect you with community while expanding your knowledge.</p>
          <a href="/contact">Explore Our Workshops &#8594;</a>
        </div>
        <div class="decision-card">
          <h4>I Want Community and Connection</h4>
          <p>You prefer practicing with others in group classes that build both strength and friendship. Our community classes welcome all levels and foster a supportive yoga culture.</p>
          <a href="/contact">Join a Community Class &#8594;</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Pricing -->
  <section class="section">
    <div class="section-inner">
      <div class="section-header">
        <span class="section-label">Pricing Overview</span>
        <h2>Transparent, Accessible Pricing</h2>
        <p>Our services are designed to fit different budgets and needs. Contact us for custom packages and corporate rates.</p>
      </div>
      <div class="pricing-grid">
        <div class="pricing-card">
          <div class="pricing-icon">
            <svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          </div>
          <h3>Yoga Therapy</h3>
          <div class="pricing-range">$85–$150</div>
          <p>Per 60-minute private session. Package rates and sliding scale available.</p>
        </div>
        <div class="pricing-card">
          <div class="pricing-icon">
            <svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
          </div>
          <h3>Corporate Wellness</h3>
          <div class="pricing-range">Varies</div>
          <p>Custom pricing based on company size, location, and program scope. Contact for details.</p>
        </div>
        <div class="pricing-card">
          <div class="pricing-icon">
            <svg viewBox="0 0 24 24"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
          </div>
          <h3>Online Courses</h3>
          <div class="pricing-range">$199–$799</div>
          <p>One-time purchase. Lifetime access to course materials and community.</p>
        </div>
        <div class="pricing-card">
          <div class="pricing-icon">
            <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
          </div>
          <h3>Private Sessions</h3>
          <div class="pricing-range">$75–$140</div>
          <p>Per 60-minute session. Book packages of 5 or 10 for discounts.</p>
        </div>
        <div class="pricing-card">
          <div class="pricing-icon">
            <svg viewBox="0 0 24 24"><path d="M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3z"/><path d="M9 11h6M9 15h6"/></svg>
          </div>
          <h3>Workshops & Events</h3>
          <div class="pricing-range">$35–$125</div>
          <p>Per event. Special rates for multi-event registrations and members.</p>
        </div>
        <div class="pricing-card">
          <div class="pricing-icon">
            <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          </div>
          <h3>Community Classes</h3>
          <div class="pricing-range">$18–$25</div>
          <p>Per class. Unlimited monthly memberships available. First class is free.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="cta-banner">
    <h2>Ready to Begin Your Transformation?</h2>
    <p>Start with a free consultation to discuss your goals and find the perfect service for you.</p>
    <a href="/free-consultation" class="btn-white">
      Book Your Free Consultation
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
    </a>
  </section>

  <!-- Footer -->`;



export const metadata: Metadata = buildMetadata({
  title: 'Yoga Services Long Beach | Classes, Therapy & Workshops',
  description: "Explore Long Beach School of Yoga's complete range of services: yoga therapy, corporate wellness, private yoga, online courses, workshops, and community programs.",
  path: "/services",
  keywords: ["yoga services long beach", "yoga therapy", "corporate wellness", "private yoga", "yoga classes", "workshops", "online courses"],
});

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: PAGE_CSS }} />
      <div dangerouslySetInnerHTML={{ __html: PAGE_HTML }} />
      
    </>
  );
}
