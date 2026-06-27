import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";

/* =====================================================================
   PAGE: about
   Ported from LBSOY_Site_Build/about.html during the GitHub migration.
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
    .hero-inner { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 80px; align-items: center; }
    .hero-badge { display: inline-flex; align-items: center; gap: 8px; background: rgba(122,139,111,0.1); color: var(--sage-dark); padding: 8px 16px; border-radius: 100px; font-size: 13px; font-weight: 600; letter-spacing: 0.5px; text-transform: uppercase; margin-bottom: 24px; }
    .hero-badge::before { content: ''; width: 6px; height: 6px; background: var(--sage); border-radius: 50%; }
    .hero h1 { font-family: var(--font-heading); font-size: 56px; line-height: 1.1; font-weight: 600; color: var(--charcoal); margin-bottom: 24px; letter-spacing: -1px; }
    .hero h1 em { font-style: italic; color: var(--sage); }
    .hero-sub { font-size: 18px; line-height: 1.7; color: var(--text-secondary); margin-bottom: 40px; max-width: 520px; }
    .hero-actions { display: flex; gap: 16px; align-items: center; }
    .btn-primary { display: inline-flex; align-items: center; gap: 8px; background: var(--sage); color: var(--white); padding: 16px 32px; border-radius: 8px; font-size: 15px; font-weight: 600; text-decoration: none; transition: all 0.2s; border: none; cursor: pointer; }
    .btn-primary:hover { background: var(--sage-dark); transform: translateY(-1px); box-shadow: 0 8px 24px rgba(122,139,111,0.25); }
    .btn-secondary { display: inline-flex; align-items: center; gap: 8px; background: transparent; color: var(--charcoal); padding: 16px 32px; border-radius: 8px; font-size: 15px; font-weight: 600; text-decoration: none; border: 1.5px solid rgba(0,0,0,0.15); transition: all 0.2s; }
    .btn-secondary:hover { border-color: var(--sage); color: var(--sage); }
    .hero-image { position: relative; }
    .hero-image-main { width: 100%; border-radius: 16px; aspect-ratio: 4/5; object-fit: cover; background: linear-gradient(135deg, var(--warm-cream-dark) 0%, rgba(122,139,111,0.15) 100%); display: flex; align-items: center; justify-content: center; }
    .hero-image-placeholder { width: 100%; aspect-ratio: 4/5; border-radius: 16px; background: linear-gradient(135deg, var(--warm-cream-dark) 0%, rgba(122,139,111,0.2) 100%); display: flex; align-items: center; justify-content: center; font-family: var(--font-heading); font-size: 24px; color: var(--sage); font-style: italic; text-align: center; padding: 40px; }

    /* === SECTIONS === */
    .section { padding: 100px 24px; }
    .section-alt { background: var(--warm-cream); }
    .section-inner { max-width: 1200px; margin: 0 auto; }
    .section-header { text-align: center; margin-bottom: 64px; }
    .section-label { display: inline-block; font-size: 12px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: var(--sage); margin-bottom: 16px; }
    .section-header h2 { font-family: var(--font-heading); font-size: 44px; font-weight: 600; color: var(--charcoal); line-height: 1.15; letter-spacing: -0.5px; margin-bottom: 16px; }
    .section-header p { font-size: 17px; color: var(--text-secondary); max-width: 600px; margin: 0 auto; }

    /* === ABOUT GRID === */
    .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
    .about-image-placeholder { width: 100%; aspect-ratio: 1; border-radius: 16px; background: linear-gradient(135deg, rgba(122,139,111,0.12) 0%, var(--warm-cream-dark) 100%); display: flex; align-items: center; justify-content: center; font-family: var(--font-heading); font-size: 20px; color: var(--sage); font-style: italic; text-align: center; padding: 40px; }
    .about-content h2 { font-family: var(--font-heading); font-size: 40px; font-weight: 600; color: var(--charcoal); line-height: 1.15; margin-bottom: 20px; }
    .about-content p { font-size: 16px; color: var(--text-secondary); margin-bottom: 20px; line-height: 1.8; }
    .credential-list { display: flex; flex-wrap: wrap; gap: 12px; margin: 28px 0; }
    .credential { display: inline-flex; align-items: center; gap: 8px; background: rgba(122,139,111,0.08); padding: 8px 16px; border-radius: 100px; font-size: 13px; font-weight: 600; color: var(--sage-dark); }

    /* === VALUES GRID === */
    .values-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; }
    .value-card { background: var(--white); border-radius: 16px; padding: 40px 32px; border: 1px solid rgba(0,0,0,0.06); transition: all 0.3s; position: relative; overflow: hidden; }
    .value-card:hover { transform: translateY(-4px); box-shadow: 0 20px 60px rgba(0,0,0,0.08); border-color: rgba(122,139,111,0.2); }
    .value-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: var(--sage); transform: scaleX(0); transition: transform 0.3s; }
    .value-card:hover::before { transform: scaleX(1); }
    .value-icon { width: 56px; height: 56px; border-radius: 12px; background: rgba(122,139,111,0.1); display: flex; align-items: center; justify-content: center; margin-bottom: 24px; }
    .value-icon svg { width: 28px; height: 28px; stroke: var(--sage); fill: none; stroke-width: 1.5; }
    .value-card h3 { font-family: var(--font-heading); font-size: 24px; font-weight: 600; color: var(--charcoal); margin-bottom: 12px; }
    .value-card p { font-size: 15px; color: var(--text-secondary); line-height: 1.7; }

    /* === TIMELINE === */
    .timeline { position: relative; padding: 40px 0; }
    .timeline::before { content: ''; position: absolute; left: 50%; top: 0; bottom: 0; width: 2px; background: linear-gradient(180deg, var(--sage) 0%, rgba(122,139,111,0.2) 100%); transform: translateX(-50%); }
    .timeline-items { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; }
    .timeline-item { position: relative; padding: 24px 40px; }
    .timeline-item:nth-child(odd) { text-align: right; }
    .timeline-item:nth-child(even) { text-align: left; }
    .timeline-dot { position: absolute; left: 50%; top: 32px; width: 16px; height: 16px; border-radius: 50%; background: var(--sage); border: 4px solid var(--white); transform: translateX(-50%); box-shadow: 0 0 0 2px var(--sage); }
    .timeline-year { font-family: var(--font-heading); font-size: 28px; font-weight: 600; color: var(--sage); margin-bottom: 8px; }
    .timeline-title { font-family: var(--font-heading); font-size: 18px; font-weight: 600; color: var(--charcoal); margin-bottom: 8px; }
    .timeline-description { font-size: 14px; color: var(--text-secondary); line-height: 1.6; }

    /* === RAM SECTION === */
    .ram-section { background: var(--white); padding: 100px 24px; }
    .ram-grid { display: grid; grid-template-columns: 0.9fr 1.1fr; gap: 80px; align-items: start; }
    .ram-image-placeholder { width: 100%; border-radius: 16px; background: linear-gradient(135deg, rgba(122,139,111,0.15) 0%, var(--warm-cream-dark) 100%); display: flex; align-items: center; justify-content: center; font-family: var(--font-heading); font-size: 20px; color: var(--sage); font-style: italic; text-align: center; padding: 40px; aspect-ratio: 0.8; }
    .ram-content h2 { font-family: var(--font-heading); font-size: 40px; font-weight: 600; color: var(--charcoal); line-height: 1.15; margin-bottom: 20px; }
    .ram-content > p { font-size: 16px; color: var(--text-secondary); margin-bottom: 20px; line-height: 1.8; }
    .credentials-section { margin: 32px 0; }
    .credentials-section h3 { font-family: var(--font-heading); font-size: 18px; font-weight: 600; color: var(--charcoal); margin-bottom: 16px; }
    .credentials-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
    .credential-badge { background: rgba(122,139,111,0.1); padding: 16px; border-radius: 12px; border-left: 3px solid var(--sage); }
    .credential-badge strong { display: block; color: var(--sage); font-size: 14px; margin-bottom: 4px; }
    .credential-badge span { font-size: 13px; color: var(--text-secondary); }

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
      .hero-inner { grid-template-columns: 1fr; gap: 48px; }
      .hero h1 { font-size: 40px; }
      .about-grid, .ram-grid { grid-template-columns: 1fr; gap: 48px; }
      .values-grid { grid-template-columns: 1fr; }
      .stats-grid { grid-template-columns: repeat(2, 1fr); }
      .footer-grid { grid-template-columns: 1fr 1fr; }
      .nav-links { display: none; }
      .mobile-menu { display: block; }
      .timeline::before { left: 20px; }
      .timeline-items { grid-template-columns: 1fr; gap: 40px; }
      .timeline-item { padding: 24px 24px 24px 60px !important; text-align: left !important; }
      .timeline-dot { left: 20px; }
    }`;

const PAGE_HTML = String.raw`<!-- Navigation -->
  <!-- Hero -->
  <section class="hero">
    <div class="hero-inner">
      <div class="hero-content">
        <div class="hero-badge">About LBSOY</div>
        <h1>Rooted in Tradition, Informed by <em>Science</em></h1>
        <p class="hero-sub">Long Beach School of Yoga was founded on a simple belief: the healing power of yoga should be available to everyone. We blend ancient yogic wisdom with evidence-based therapeutic methods to create real transformation.</p>
        <div class="hero-actions">
          <a href="/free-consultation" class="btn-primary">
            Book Free Consultation
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <a href="/corporate-wellness" class="btn-secondary">Corporate Programs</a>
        </div>
      </div>
      <div class="hero-image">
        <div class="hero-image-placeholder">Photo: LBSOY yoga studio community session</div>
      </div>
    </div>
  </section>

  <!-- Our Story -->
  <section class="section">
    <div class="section-inner">
      <div class="about-grid">
        <div class="about-image-placeholder">Photo: LBSOY founding and evolution timeline</div>
        <div class="about-content">
          <span class="section-label">Our Story</span>
          <h2>From Teaching to Healing</h2>
          <p>Long Beach School of Yoga started in 2012 as a vision to create an immersive yoga teacher training program grounded in both classical yoga philosophy and modern clinical science. What began as a teacher training school has evolved into something much bigger: Long Beach's most trusted wellness hub.</p>
          <p>Today, we serve three interconnected communities. Our 99+ certified graduates practice across the country, bringing yoga therapy to hospitals, schools, hotels, and corporate offices. Our individual clients experience personalized healing through one-on-one yoga therapy. And our corporate partners integrate wellness into their workplace culture.</p>
          <p>We're not just a yoga school. We're the connective tissue of Long Beach's wellness ecosystem&mdash;linking people with practitioners, training the next generation of healers, and directly serving those ready to experience yoga's transformative power.</p>
          <p style="margin-top: 28px;"><strong>The My Yoga Network Connection:</strong> We're proud partners in My Yoga Network, amplifying our reach and helping local yoga practitioners build sustainable practices while serving their communities.</p>
          <div class="credential-list" style="margin-top: 32px;">
            <span class="credential">Founded 2012</span>
            <span class="credential">E-RYT 500 Certified</span>
            <span class="credential">Yoga Alliance Certified</span>
            <span class="credential">My Yoga Network Partner</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Meet Ram Bhakt -->
  <section class="ram-section">
    <div class="section-inner">
      <div class="ram-grid">
        <div class="ram-image-placeholder">Photo: Ram Bhakt, Founder &amp; Lead Instructor</div>
        <div class="ram-content">
          <span class="section-label">Meet Our Founder</span>
          <h2>Ram Bhakt</h2>
          <p><strong>E-RYT 500 Certified Instructor & Yoga Therapist</strong></p>
          <p>Ram Bhakt brings together over a decade of experience in yoga, yoga therapy, and clinical wellness practice. Certified by Yoga Alliance at the 500-hour level, Ram combines deep knowledge of traditional yoga philosophy with training in evidence-based therapeutic methods and modern clinical approaches.</p>
          <p>His unique background includes extensive study of yoga's physiological and psychological applications, making him equally fluent in ancient texts and scientific research. This combination allows him to design programs that honor yoga's wisdom while meeting the real health challenges people face today.</p>
          <p>As the founder and lead instructor, Ram personally trains every teacher in our programs and works directly with individual yoga therapy clients. He's passionate about creating pathways for others to learn and practice yoga as a healing discipline.</p>
          
          <div class="credentials-section">
            <h3>Credentials & Qualifications</h3>
            <div class="credentials-grid">
              <div class="credential-badge">
                <strong>E-RYT 500</strong>
                <span>Yoga Alliance Registered</span>
              </div>
              <div class="credential-badge">
                <strong>Yoga Therapist</strong>
                <span>Clinical & therapeutic practice</span>
              </div>
              <div class="credential-badge">
                <strong>14+ Years Experience</strong>
                <span>Teaching and practice</span>
              </div>
              <div class="credential-badge">
                <strong>99+ Graduates Trained</strong>
                <span>Certified yoga teachers</span>
              </div>
              <div class="credential-badge">
                <strong>Philosophy & Anatomy</strong>
                <span>Advanced training</span>
              </div>
              <div class="credential-badge">
                <strong>Corporate Wellness</strong>
                <span>Enterprise programs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Our Values -->
  <section class="section section-alt">
    <div class="section-inner">
      <div class="section-header">
        <span class="section-label">What We Stand For</span>
        <h2>Our Core Values</h2>
        <p>Everything we do is guided by three core commitments that shape how we work, teach, and serve.</p>
      </div>
      <div class="values-grid">
        <div class="value-card">
          <div class="value-icon">
            <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/></svg>
          </div>
          <h3>Clinical Approach</h3>
          <p>We combine the timeless wisdom of traditional yoga with evidence-based therapeutic methods. Our programs are grounded in anatomy, physiology, and modern clinical research. Yoga isn't just a practice&mdash;it's medicine.</p>
        </div>
        <div class="value-card">
          <div class="value-icon">
            <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          </div>
          <h3>Community First</h3>
          <p>We're building Long Beach's wellness ecosystem. Our role is to connect practitioners with people who need them, amplify voices in the yoga community, and create pathways for healing. We succeed when our community thrives.</p>
        </div>
        <div class="value-card">
          <div class="value-icon">
            <svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          </div>
          <h3>Accessible Healing</h3>
          <p>Yoga therapy should be available to everyone&mdash;regardless of income, ability, or background. We serve individuals, workplaces, schools, and senior communities. Real healing isn't exclusive; it's for all of us.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Timeline -->
  <section class="section">
    <div class="section-inner">
      <div class="section-header">
        <span class="section-label">Our Journey</span>
        <h2>Milestones & Moments</h2>
      </div>
      <div class="timeline">
        <div class="timeline-items">
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-year">2012</div>
            <div class="timeline-title">LBSOY Founded</div>
            <div class="timeline-description">Ram Bhakt launches Long Beach School of Yoga with a mission to blend classical yoga philosophy with clinical science.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-year">2015</div>
            <div class="timeline-title">First YTT Cohort</div>
            <div class="timeline-description">The inaugural Yoga Teacher Training program launches, combining 500 hours of rigorous study in philosophy, anatomy, and therapeutic practice.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-year">2018</div>
            <div class="timeline-title">Corporate Wellness Launch</div>
            <div class="timeline-description">We begin offering on-site and virtual yoga programs for businesses, schools, and healthcare organizations throughout Long Beach.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-year">2021</div>
            <div class="timeline-title">Online Courses</div>
            <div class="timeline-description">Expanding access by launching self-paced online courses in yoga philosophy, anatomy, Ayurveda, pranayama, and meditation for practitioners worldwide.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-year">2024</div>
            <div class="timeline-title">My Yoga Network Partnership</div>
            <div class="timeline-description">We join My Yoga Network, connecting our community with a national ecosystem of yoga practitioners and wellness professionals.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-year">2026</div>
            <div class="timeline-title">Site Rebuild & B2B Focus</div>
            <div class="timeline-description">Launching a redesigned website and renewed focus on corporate wellness, positioning LBSOY as Long Beach's premier B2B wellness partner.</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Stats -->
  <section class="section section-alt">
    <div class="section-inner">
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-number">99+</div>
          <div class="stat-label">Certified Graduates</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">10+</div>
          <div class="stat-label">Years Serving Long Beach</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">500+</div>
          <div class="stat-label">Hours of Training</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">3</div>
          <div class="stat-label">Community Pillars</div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Banner -->
  <section class="cta-banner">
    <h2>Ready to Experience the LBSOY Difference?</h2>
    <p>Whether you're looking for personalized yoga therapy, corporate wellness for your team, or teacher training to deepen your practice, let's start the conversation.</p>
    <a href="/free-consultation" class="btn-white">
      Book Your Free Consultation
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
    </a>
  </section>

  <!-- Footer -->`;

const PAGE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ram Bhakt",
    "url": "https://longbeachschoolofyoga.com/about",
    "jobTitle": "Founder, Yoga Therapist",
    "worksFor": {
      "@type": "LocalBusiness",
      "name": "Long Beach School of Yoga",
      "url": "https://longbeachschoolofyoga.com"
    },
    "email": "longbeachschoolofyoga@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Long Beach",
      "addressRegion": "CA",
      "addressCountry": "US"
    },
    "description": "E-RYT 500 Yoga Alliance certified instructor and yoga therapist with 14+ years of experience. Founder of Long Beach School of Yoga, leading provider of yoga therapy and corporate wellness programs in Long Beach.",
    "knowsAbout": ["Yoga Therapy", "Corporate Wellness", "Yoga Teacher Training", "Yoga Alliance", "Clinical Yoga"],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "name": "E-RYT 500",
        "issuer": {
          "@type": "Organization",
          "name": "Yoga Alliance"
        }
      },
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Yoga Therapist",
        "issuer": {
          "@type": "Organization",
          "name": "International Association of Yoga Therapists"
        }
      }
    ]
  };

export const metadata: Metadata = buildMetadata({
  title: "About Long Beach School of Yoga | Long Beach's Wellness Leaders",
  description: 'Meet the team behind Long Beach School of Yoga. Led by Ram Bhakt, E-RYT 500, with over a decade of experience in yoga therapy, corporate wellness, and teacher training.',
  path: "/about",
  keywords: ["yoga therapy long beach", "corporate wellness", "yoga teacher training", "ram bhakt", "yoga alliance certified"],
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
