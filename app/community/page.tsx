import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";


/* =====================================================================
   PAGE: community
   Ported from LBSOY_Site_Build/community.html during the GitHub migration.
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

    /* === STATS GRID === */
    .stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 32px; }
    .stat-card { text-align: center; padding: 40px 24px; }
    .stat-number { font-family: var(--font-heading); font-size: 52px; font-weight: 700; color: var(--sage); line-height: 1; margin-bottom: 8px; }
    .stat-label { font-size: 15px; color: var(--text-secondary); font-weight: 500; }

    /* === GRADUATE CARDS === */
    .graduates-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; }
    .graduate-card { background: var(--white); border-radius: 16px; overflow: hidden; border: 1px solid rgba(0,0,0,0.06); transition: all 0.3s; }
    .graduate-card:hover { transform: translateY(-4px); box-shadow: 0 20px 60px rgba(0,0,0,0.08); border-color: rgba(122,139,111,0.2); }
    .graduate-image { width: 100%; aspect-ratio: 1; background: linear-gradient(135deg, var(--warm-cream-dark) 0%, rgba(122,139,111,0.15) 100%); display: flex; align-items: center; justify-content: center; font-family: var(--font-heading); font-size: 16px; color: var(--sage); font-style: italic; text-align: center; padding: 40px; }
    .graduate-body { padding: 28px; }
    .graduate-name { font-family: var(--font-heading); font-size: 22px; font-weight: 600; color: var(--charcoal); margin-bottom: 8px; }
    .graduate-specialty { font-size: 14px; font-weight: 600; color: var(--sage); letter-spacing: 0.5px; text-transform: uppercase; margin-bottom: 12px; }
    .graduate-desc { font-size: 14px; color: var(--text-secondary); line-height: 1.6; margin-bottom: 16px; }
    .graduate-link { font-size: 14px; font-weight: 600; color: var(--sage); text-decoration: none; display: inline-flex; align-items: center; gap: 6px; }
    .graduate-link:hover { gap: 10px; }

    /* === NETWORK SECTION === */
    .network-content { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
    .network-image { width: 100%; aspect-ratio: 1; border-radius: 16px; background: linear-gradient(135deg, rgba(122,139,111,0.12) 0%, var(--warm-cream-dark) 100%); display: flex; align-items: center; justify-content: center; font-family: var(--font-heading); font-size: 20px; color: var(--sage); font-style: italic; text-align: center; padding: 40px; }
    .network-text h2 { font-family: var(--font-heading); font-size: 40px; font-weight: 600; color: var(--charcoal); line-height: 1.15; margin-bottom: 20px; }
    .network-text p { font-size: 16px; color: var(--text-secondary); margin-bottom: 20px; line-height: 1.7; }
    .network-features { list-style: none; margin: 32px 0; }
    .network-features li { display: flex; align-items: flex-start; gap: 12px; padding: 12px 0; font-size: 15px; color: var(--text-secondary); }
    .network-features li svg { width: 20px; height: 20px; stroke: var(--sage-light); flex-shrink: 0; margin-top: 2px; }

    /* === EVENTS GRID === */
    .events-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; }
    .event-card { background: var(--white); border-radius: 16px; padding: 36px; border: 1px solid rgba(0,0,0,0.06); transition: all 0.3s; }
    .event-card:hover { transform: translateY(-4px); box-shadow: 0 20px 60px rgba(0,0,0,0.08); }
    .event-date { font-size: 12px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; color: var(--sage); margin-bottom: 12px; }
    .event-card h3 { font-family: var(--font-heading); font-size: 24px; font-weight: 600; color: var(--charcoal); margin-bottom: 12px; }
    .event-card p { font-size: 14px; color: var(--text-secondary); line-height: 1.6; margin-bottom: 20px; }
    .event-link { font-size: 14px; font-weight: 600; color: var(--sage); text-decoration: none; display: inline-flex; align-items: center; gap: 6px; }
    .event-link:hover { gap: 10px; }

    /* === CTA SECTION === */
    .cta-section { background: var(--charcoal); color: var(--white); padding: 80px 24px; }
    .cta-inner { max-width: 700px; margin: 0 auto; text-align: center; }
    .cta-section h2 { font-family: var(--font-heading); font-size: 40px; font-weight: 600; color: var(--white); line-height: 1.15; margin-bottom: 20px; }
    .cta-section p { font-size: 16px; color: rgba(255,255,255,0.7); margin-bottom: 32px; line-height: 1.7; }

    /* === FORM STYLES === */
    .signup-form { display: grid; gap: 16px; margin-bottom: 20px; }
    .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
    .form-input { padding: 12px 16px; border: 1px solid rgba(255,255,255,0.2); border-radius: 8px; font-family: var(--font-body); font-size: 14px; background: rgba(255,255,255,0.05); color: var(--white); }
    .form-input::placeholder { color: rgba(255,255,255,0.5); }
    .form-input:focus { outline: none; border-color: var(--sage-light); }
    .checkboxes { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px; }
    .checkbox-group { display: flex; align-items: center; gap: 8px; }
    .checkbox-group input { accent-color: var(--sage); }
    .checkbox-group label { font-size: 14px; color: rgba(255,255,255,0.8); cursor: pointer; }
    .btn-white { background: var(--white); color: var(--sage-dark); padding: 16px 32px; border-radius: 8px; font-size: 15px; font-weight: 600; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; transition: all 0.2s; border: none; cursor: pointer; }
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

    /* === RESPONSIVE === */
    @media (max-width: 968px) {
      .hero h1 { font-size: 40px; }
      .graduates-grid, .events-grid { grid-template-columns: 1fr; }
      .network-content { grid-template-columns: 1fr; gap: 48px; }
      .stats-grid { grid-template-columns: repeat(2, 1fr); }
      .footer-grid { grid-template-columns: 1fr 1fr; }
      .nav-links { display: none; }
      .mobile-menu { display: block; }
      .form-row { grid-template-columns: 1fr; }
      .checkboxes { grid-template-columns: 1fr; }
    }
    @media (min-width: 600px) and (max-width: 968px) {
      .graduates-grid, .events-grid { grid-template-columns: repeat(2, 1fr); }
    }`;

const PAGE_HTML = String.raw`<!-- Navigation -->
  <!-- Hero -->
  <section class="hero">
    <div class="hero-inner">
      <div>
        <span class="hero-badge">Our Community</span>
        <h1><em>Our</em> Growing Wellness Community</h1>
        <p class="hero-sub">Join 99+ certified graduates and wellness practitioners who are transforming lives and building a healthier Long Beach together through yoga therapy, corporate wellness, and holistic healing.</p>
      </div>
    </div>
  </section>

  <!-- Community Stats -->
  <section class="section">
    <div class="section-inner">
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-number">99+</div>
          <div class="stat-label">Certified Graduates</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">50+</div>
          <div class="stat-label">Active Practitioners</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">10+</div>
          <div class="stat-label">States Represented</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">1</div>
          <div class="stat-label">Shared Mission</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Graduates Section -->
  <section class="section section-alt">
    <div class="section-inner">
      <div class="section-header">
        <span class="section-label">Meet Our Graduates</span>
        <h2>Our Graduates in Action</h2>
        <p>From yoga therapists to corporate wellness directors, our graduates are making real impact in their communities and practices across the country.</p>
      </div>
      <div class="graduates-grid">
        <div class="graduate-card">
          <div class="graduate-image">Photo: Melissa Thompson</div>
          <div class="graduate-body">
            <div class="graduate-name">Melissa Thompson</div>
            <div class="graduate-specialty">Yoga Therapist</div>
            <p class="graduate-desc">Specializes in chronic pain management and prenatal yoga. Runs a thriving private practice in Santa Monica and teaches at Cedar Hospital's wellness center.</p>
            <a href="#" class="graduate-link">View Profile</a>
          </div>
        </div>
        <div class="graduate-card">
          <div class="graduate-image">Photo: James Rodriguez</div>
          <div class="graduate-body">
            <div class="graduate-name">James Rodriguez</div>
            <div class="graduate-specialty">Corporate Wellness Director</div>
            <p class="graduate-desc">Leads wellness programs for tech companies in Silicon Valley. Created on-site yoga programs now benefiting 500+ employees across multiple offices.</p>
            <a href="#" class="graduate-link">View Profile</a>
          </div>
        </div>
        <div class="graduate-card">
          <div class="graduate-image">Photo: Sarah Kim</div>
          <div class="graduate-body">
            <div class="graduate-name">Sarah Kim</div>
            <div class="graduate-specialty">School Yoga Specialist</div>
            <p class="graduate-desc">Develops and teaches trauma-informed yoga programs in Los Angeles public schools. Certified in working with adolescents and at-risk populations.</p>
            <a href="#" class="graduate-link">View Profile</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Network Section -->
  <section class="section">
    <div class="section-inner">
      <div class="section-header">
        <span class="section-label">The LBSOY Network</span>
        <h2>Where Our Graduates Work</h2>
      </div>
      <div class="network-content">
        <div class="network-image">Photo: Graduates networking at LBSOY annual meetup</div>
        <div class="network-text">
          <p>Our graduates aren't isolated practitioners — they're part of a thriving network spanning hospitals, schools, hotels, and corporate offices across the country. Many started as yoga enthusiasts in Long Beach and now lead wellness movements in their own communities.</p>
          <ul class="network-features">
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <strong>Hospitals & Healthcare:</strong> Yoga therapists providing clinical interventions for pain, anxiety, and stress management
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <strong>Schools & Youth Programs:</strong> Teachers and therapists working with students, using yoga for focus, emotional regulation, and trauma support
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <strong>Hotels & Wellness Resorts:</strong> Wellness directors and instructors designing and leading signature yoga and meditation experiences
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <strong>Corporate Wellness:</strong> Directors and instructors running on-site and virtual programs for employee wellness and stress reduction
            </li>
          </ul>
          <p><strong>My Yoga Network Partnership:</strong> Through our partnership with My Yoga Network, our graduates have access to job listings, peer mentoring, and placement support to help advance their careers and reach new markets.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Upcoming Events -->
  <section class="section section-alt">
    <div class="section-inner">
      <div class="section-header">
        <span class="section-label">Community Connection</span>
        <h2>Upcoming Community Events</h2>
        <p>Connect with fellow graduates, students, and wellness practitioners. Learn, grow, and build community together.</p>
      </div>
      <div class="events-grid">
        <div class="event-card">
          <div class="event-date">First Friday | Monthly</div>
          <h3>Monthly Community Practice</h3>
          <p>Join us for a free, hour-long guided yoga practice followed by tea and community discussion. Open to all levels. A chance to reconnect with your LBSOY family.</p>
          <a href="#" class="event-link">Learn More</a>
        </div>
        <div class="event-card">
          <div class="event-date">Seasonal | March, June, Sept, Dec</div>
          <h3>Quarterly Workshops</h3>
          <p>Deep-dive workshops on specialized topics: advanced anatomy, teaching techniques, Ayurveda for seasonal living, and more. Members get early access and discounts.</p>
          <a href="#" class="event-link">Learn More</a>
        </div>
        <div class="event-card">
          <div class="event-date">Annual | Spring Weekend Retreat</div>
          <h3>Annual Retreat</h3>
          <p>3-day immersion for graduates and experienced practitioners. Combine asana, pranayama, meditation, and meals in a beautiful retreat setting. Network and recharge.</p>
          <a href="#" class="event-link">Learn More</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Join Community CTA -->
  <section class="cta-section">
    <div class="cta-inner">
      <h2>Join Our Community</h2>
      <p>Get updates on community events, job opportunities through our network, exclusive member content, and invitations to workshops and retreats. Sign up to stay connected.</p>
      <form class="signup-form">
        <div class="form-row">
          <input type="text" class="form-input" placeholder="First Name" required>
          <input type="text" class="form-input" placeholder="Last Name" required>
        </div>
        <input type="email" class="form-input" placeholder="Email Address" required>
        <div>
          <p style="font-size: 14px; margin-bottom: 12px; color: rgba(255,255,255,0.8);">I'm interested in:</p>
          <div class="checkboxes">
            <div class="checkbox-group">
              <input type="checkbox" id="therapy" name="interests" value="yoga-therapy">
              <label for="therapy">Yoga Therapy</label>
            </div>
            <div class="checkbox-group">
              <input type="checkbox" id="corporate" name="interests" value="corporate-wellness">
              <label for="corporate">Corporate Wellness</label>
            </div>
            <div class="checkbox-group">
              <input type="checkbox" id="courses" name="interests" value="online-courses">
              <label for="courses">Online Courses</label>
            </div>
            <div class="checkbox-group">
              <input type="checkbox" id="events" name="interests" value="community-events">
              <label for="events">Community Events</label>
            </div>
          </div>
        </div>
        <button type="submit" class="btn-white">Sign Me Up</button>
      </form>
    </div>
  </section>

  <!-- Footer -->`;



export const metadata: Metadata = buildMetadata({
  title: 'Long Beach Yoga Community | Graduates & Practitioners',
  description: "Join Long Beach School of Yoga's growing community of 99+ certified graduates and wellness practitioners building a healthier Long Beach together.",
  path: "/community",
  keywords: ["yoga community", "yoga graduates", "long beach wellness", "yoga network", "certified yoga teachers"],
});

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: PAGE_CSS }} />
      <div dangerouslySetInnerHTML={{ __html: PAGE_HTML }} />
      
    </>
  );
}
