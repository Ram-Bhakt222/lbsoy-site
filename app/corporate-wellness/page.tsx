import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";

/* =====================================================================
   PAGE: corporate-wellness
   Ported from LBSOY_Site_Build/corporate-wellness.html during the GitHub migration.
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
    .hero-image-placeholder { width: 100%; aspect-ratio: 4/5; border-radius: 16px; background: linear-gradient(135deg, var(--warm-cream-dark) 0%, rgba(122,139,111,0.2) 100%); display: flex; align-items: center; justify-content: center; font-family: var(--font-heading); font-size: 24px; color: var(--sage); font-style: italic; text-align: center; padding: 40px; }

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

    /* === PROGRAMS GRID === */
    .programs-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 24px; }
    .program-card { background: var(--white); border-radius: 16px; padding: 40px 28px; border: 1px solid rgba(0,0,0,0.06); transition: all 0.3s; position: relative; overflow: hidden; text-align: center; }
    .program-card:hover { transform: translateY(-4px); box-shadow: 0 20px 60px rgba(0,0,0,0.08); border-color: rgba(122,139,111,0.2); }
    .program-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: var(--sage); transform: scaleX(0); transition: transform 0.3s; }
    .program-card:hover::before { transform: scaleX(1); }
    .program-icon { width: 56px; height: 56px; border-radius: 12px; background: rgba(122,139,111,0.1); display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; }
    .program-icon svg { width: 28px; height: 28px; stroke: var(--sage); fill: none; stroke-width: 1.5; }
    .program-card h3 { font-family: var(--font-heading); font-size: 20px; font-weight: 600; color: var(--charcoal); margin-bottom: 12px; }
    .program-card p { font-size: 14px; color: var(--text-secondary); line-height: 1.6; }

    /* === INDUSTRIES GRID === */
    .industries-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; }
    .industry-card { background: var(--white); border-radius: 16px; padding: 36px 28px; border: 1px solid rgba(0,0,0,0.06); transition: all 0.3s; }
    .industry-card:hover { transform: translateY(-4px); box-shadow: 0 20px 60px rgba(0,0,0,0.08); }
    .industry-card h3 { font-family: var(--font-heading); font-size: 20px; font-weight: 600; color: var(--charcoal); margin-bottom: 12px; }
    .industry-card p { font-size: 14px; color: var(--text-secondary); line-height: 1.6; }

    /* === TIMELINE === */
    .timeline { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; position: relative; }
    .timeline::before { content: ''; position: absolute; top: 50px; left: 0; right: 0; height: 2px; background: linear-gradient(90deg, var(--sage) 0%, var(--sage) 48%, transparent 48%, transparent 52%, var(--sage) 52%, var(--sage) 100%); z-index: 0; }
    .timeline-step { background: var(--white); border-radius: 16px; padding: 32px 24px; border: 1px solid rgba(0,0,0,0.06); position: relative; z-index: 1; text-align: center; }
    .timeline-number { width: 48px; height: 48px; border-radius: 50%; background: var(--sage); color: var(--white); display: flex; align-items: center; justify-content: center; font-family: var(--font-heading); font-size: 24px; font-weight: 600; margin: 0 auto 16px; }
    .timeline-step h3 { font-family: var(--font-heading); font-size: 18px; font-weight: 600; color: var(--charcoal); margin-bottom: 8px; }
    .timeline-step p { font-size: 14px; color: var(--text-secondary); }

    /* === TESTIMONIALS === */
    .testimonials-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px; }
    .testimonial-card { background: var(--white); border-radius: 16px; padding: 36px; border: 1px solid rgba(0,0,0,0.06); }
    .testimonial-stars { color: var(--gold); font-size: 18px; margin-bottom: 16px; letter-spacing: 2px; }
    .testimonial-text { font-size: 15px; color: var(--text-secondary); line-height: 1.7; margin-bottom: 20px; font-style: italic; }
    .testimonial-author { display: flex; align-items: center; gap: 12px; }
    .testimonial-avatar { width: 44px; height: 44px; border-radius: 50%; background: rgba(122,139,111,0.12); display: flex; align-items: center; justify-content: center; font-family: var(--font-heading); font-size: 18px; color: var(--sage); font-weight: 600; }
    .testimonial-name { font-size: 14px; font-weight: 600; color: var(--charcoal); }
    .testimonial-role { font-size: 13px; color: var(--text-light); }

    /* === FORM STYLES === */
    .form-section { background: var(--white); border-radius: 16px; padding: 48px 40px; border: 1px solid rgba(0,0,0,0.06); max-width: 700px; margin: 0 auto; }
    .form-section h2 { font-family: var(--font-heading); font-size: 32px; font-weight: 600; color: var(--charcoal); margin-bottom: 10px; text-align: center; }
    .form-section p { font-size: 16px; color: var(--text-secondary); margin-bottom: 32px; text-align: center; }
    .form-group { margin-bottom: 24px; }
    .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
    .form-row.full { grid-template-columns: 1fr; }
    label { display: block; font-size: 14px; font-weight: 600; color: var(--charcoal); margin-bottom: 8px; }
    input, select, textarea { width: 100%; padding: 12px 16px; border: 1px solid rgba(0,0,0,0.12); border-radius: 8px; font-family: var(--font-body); font-size: 14px; color: var(--text-primary); transition: all 0.2s; }
    input:focus, select:focus, textarea:focus { outline: none; border-color: var(--sage); box-shadow: 0 0 0 3px rgba(122,139,111,0.1); }
    textarea { resize: vertical; min-height: 120px; }
    .form-submit { background: var(--sage); color: var(--white); padding: 16px 40px; border-radius: 8px; font-size: 15px; font-weight: 600; border: none; cursor: pointer; width: 100%; transition: all 0.2s; margin-top: 24px; }
    .form-submit:hover { background: var(--sage-dark); transform: translateY(-1px); box-shadow: 0 8px 24px rgba(122,139,111,0.25); }

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

    @media (max-width: 968px) {
      .hero-inner { grid-template-columns: 1fr; gap: 48px; }
      .hero h1 { font-size: 40px; }
      .programs-grid { grid-template-columns: repeat(2, 1fr); }
      .industries-grid { grid-template-columns: 1fr; }
      .testimonials-grid { grid-template-columns: 1fr; }
      .stats-grid { grid-template-columns: repeat(2, 1fr); }
      .timeline { grid-template-columns: repeat(2, 1fr); }
      .timeline::before { display: none; }
      .footer-grid { grid-template-columns: 1fr 1fr; }
      .nav-links { display: none; }
      .mobile-menu { display: block; }
      .form-row { grid-template-columns: 1fr; }
    }`;

const PAGE_HTML = String.raw`<section class="hero">
    <div class="hero-inner">
      <div class="hero-content">
        <div class="hero-badge">Corporate Wellness</div>
        <h1>Corporate Wellness Programs for Long Beach <em>Businesses</em></h1>
        <p class="hero-sub">Bring the power of yoga, meditation, and mindfulness to your team. Reduce stress, prevent burnout, and boost productivity with evidence-based wellness programs tailored to your organization's needs.</p>
        <div class="hero-actions">
          <a href="#proposal-form" class="btn-primary">Request a Custom Proposal<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
          <a href="#programs" class="btn-secondary">Download Program Guide</a>
        </div>
      </div>
      <div class="hero-image">
        <div class="hero-image-placeholder">Photo: Corporate yoga session</div>
      </div>
    </div>
  </section>

  <section class="section section-alt">
    <div class="section-inner">
      <div class="section-header">
        <span class="section-label">The Business Case</span>
        <h2>Why Invest in Corporate Wellness</h2>
        <p>The evidence is clear: workplace wellness programs deliver measurable ROI through reduced absenteeism, improved productivity, and higher employee satisfaction.</p>
      </div>
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-number">28%</div>
          <div class="stat-label">Reduction in Absenteeism</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">$125-190B</div>
          <div class="stat-label">Annual Cost of Burnout</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">20%</div>
          <div class="stat-label">Productivity Increase</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">67%</div>
          <div class="stat-label">Employees Want Wellness Benefits</div>
        </div>
      </div>
    </div>
  </section>

  <section class="section" id="programs">
    <div class="section-inner">
      <div class="section-header">
        <span class="section-label">Program Options</span>
        <h2>Flexible Wellness Solutions</h2>
        <p>Choose from our proven programs or let us design a custom solution that fits your team's unique needs and culture.</p>
      </div>
      <div class="programs-grid">
        <div class="program-card">
          <div class="program-icon"><svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/><path d="M9 9h6M9 15h6M9 12h6"/></svg></div>
          <h3>On-Site Weekly Classes</h3>
          <p>Regular yoga sessions at your office. Choose from chair yoga, mat yoga, or stretch breaks, perfectly suited for your team's schedule and fitness levels.</p>
        </div>
        <div class="program-card">
          <div class="program-icon"><svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M23 7l-7 5 7 5V7z"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg></div>
          <h3>Virtual Sessions</h3>
          <p>Live-streamed classes for remote and hybrid teams. Your employees can join from home or the office with full instructor interaction and community feel.</p>
        </div>
        <div class="program-card">
          <div class="program-icon"><svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></div>
          <h3>Stress Management Workshops</h3>
          <p>Half-day workshops focused on breathing techniques, meditation, and mindfulness practices. Perfect for onboarding or team development events.</p>
        </div>
        <div class="program-card">
          <div class="program-icon"><svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg></div>
          <h3>Team Retreat Planning</h3>
          <p>Full-day or multi-day wellness retreats that combine yoga, meditation, team building activities, and shared meals. Strengthen bonds while investing in health.</p>
        </div>
        <div class="program-card">
          <div class="program-icon"><svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg></div>
          <h3>Custom Programs</h3>
          <p>Tailored solutions designed specifically for your organization's culture, goals, and unique challenges. Let's create something perfect for your team.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="section section-alt">
    <div class="section-inner">
      <div class="section-header">
        <span class="section-label">Industries We Serve</span>
        <h2>Wellness Across All Sectors</h2>
        <p>Our corporate wellness programs are designed to meet the specific stressors and needs of different industries.</p>
      </div>
      <div class="industries-grid">
        <div class="industry-card"><h3>Technology Companies</h3><p>Combat high-stress environments and screen fatigue with mindfulness practices and movement breaks that boost focus and creativity.</p></div>
        <div class="industry-card"><h3>Healthcare Organizations</h3><p>Support frontline workers and administrators with stress relief and self-care practices essential for preventing burnout in demanding roles.</p></div>
        <div class="industry-card"><h3>Schools & Universities</h3><p>Provide faculty and staff with wellness tools to manage stress, improve work-life balance, and create a healthier school community.</p></div>
        <div class="industry-card"><h3>Hotels & Hospitality</h3><p>Help hospitality teams manage demanding schedules with energizing classes and mindfulness sessions that reduce burnout and improve guest service.</p></div>
        <div class="industry-card"><h3>Government & Municipal</h3><p>Support public sector employees with evidence-based wellness programs that improve morale, retention, and overall organizational health.</p></div>
        <div class="industry-card"><h3>Professional Services</h3><p>Help your team manage high pressure and long hours with yoga and meditation practices that increase mental clarity and work-life balance.</p></div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="section-inner">
      <div class="section-header">
        <span class="section-label">Getting Started</span>
        <h2>Four Simple Steps</h2>
        <p>From initial inquiry to program launch, we'll guide you through a smooth, collaborative process.</p>
      </div>
      <div class="timeline">
        <div class="timeline-step">
          <div class="timeline-number">1</div>
          <h3>Inquiry</h3>
          <p>Tell us about your organization, team size, and wellness goals.</p>
        </div>
        <div class="timeline-step">
          <div class="timeline-number">2</div>
          <h3>Needs Assessment</h3>
          <p>We learn more about your team's challenges and preferences through a discovery conversation.</p>
        </div>
        <div class="timeline-step">
          <div class="timeline-number">3</div>
          <h3>Custom Proposal</h3>
          <p>We design a tailored wellness program with options, pricing, and implementation timeline.</p>
        </div>
        <div class="timeline-step">
          <div class="timeline-number">4</div>
          <h3>Launch</h3>
          <p>Your program begins with kickoff, ongoing support, and measurable wellness outcomes.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="section section-alt">
    <div class="section-inner">
      <div class="section-header">
        <span class="section-label">Client Stories</span>
        <h2>What Businesses Are Saying</h2>
      </div>
      <div class="testimonials-grid">
        <div class="testimonial-card">
          <div class="testimonial-stars">&starf;&starf;&starf;&starf;&starf;</div>
          <p class="testimonial-text">"We brought LBSOY in for weekly office yoga sessions and the impact on our team's energy and morale was immediate. Stress levels dropped, people started taking real breaks, and our retention improved noticeably. Best wellness investment we've made."</p>
          <div class="testimonial-author">
            <div class="testimonial-avatar">M</div>
            <div><div class="testimonial-name">Marcus Thompson</div><div class="testimonial-role">HR Director, Long Beach Tech Co.</div></div>
          </div>
        </div>
        <div class="testimonial-card">
          <div class="testimonial-stars">&starf;&starf;&starf;&starf;&starf;</div>
          <p class="testimonial-text">"As a growing healthcare organization, our team faced serious burnout. The custom stress management workshops and weekly virtual sessions gave our staff the tools they needed to manage pressure. Absenteeism dropped by 35% in the first quarter alone."</p>
          <div class="testimonial-author">
            <div class="testimonial-avatar">A</div>
            <div><div class="testimonial-name">Angela Rodriguez</div><div class="testimonial-role">Operations Manager, Regional Health Network</div></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="section-inner">
      <div class="form-section" id="proposal-form">
        <h2>Request Your Custom Proposal</h2>
        <p>Tell us about your organization, and we'll design a wellness program tailored to your team's needs.</p>
        <form>
          <div class="form-row">
            <div class="form-group"><label for="company-name">Company Name</label><input type="text" id="company-name" name="company_name" required></div>
            <div class="form-group"><label for="contact-name">Your Name</label><input type="text" id="contact-name" name="contact_name" required></div>
          </div>
          <div class="form-row">
            <div class="form-group"><label for="email">Email</label><input type="email" id="email" name="email" required></div>
            <div class="form-group"><label for="phone">Phone</label><input type="tel" id="phone" name="phone"></div>
          </div>
          <div class="form-row">
            <div class="form-group"><label for="employee-count">Number of Employees</label><select id="employee-count" name="employee_count" required><option value="">Select...</option><option value="1-25">1-25 employees</option><option value="25-100">25-100 employees</option><option value="100-500">100-500 employees</option><option value="500+">500+ employees</option></select></div>
            <div class="form-group"><label for="industry">Industry</label><select id="industry" name="industry" required><option value="">Select...</option><option value="technology">Technology</option><option value="healthcare">Healthcare</option><option value="education">Schools & Universities</option><option value="hospitality">Hotels & Hospitality</option><option value="government">Government & Municipal</option><option value="professional-services">Professional Services</option><option value="other">Other</option></select></div>
          </div>
          <div class="form-row full">
            <div class="form-group"><label for="message">What are you looking for?</label><textarea id="message" name="message" placeholder="Tell us about your team's wellness needs, challenges, and goals..." required></textarea></div>
          </div>
          <button type="submit" class="form-submit">Submit Proposal Request</button>
        </form>
      </div>
    </div>
  </section>

  <section class="cta-banner">
    <h2>Ready to Invest in Your Team's Well-Being?</h2>
    <p>A healthier, more mindful team is a more productive team. Let's talk about how we can create a custom wellness program for your organization.</p>
    <a href="#proposal-form" class="btn-white">Request Your Custom Proposal<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
  </section>`;

const PAGE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "name": "Long Beach School of Yoga Corporate Wellness",
    "description": "Corporate wellness programs featuring on-site and virtual yoga, stress management, and meditation workshops for Long Beach businesses.",
    "url": "https://longbeachschoolofyoga.com/corporate-wellness",
    "email": "info@lbsoy.com",
    "areaServed": ["Long Beach", "Los Angeles County", "California"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Corporate Wellness Programs",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "On-Site Weekly Classes" }},
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Virtual Sessions" }},
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Stress Management Workshops" }},
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Team Retreat Planning" }},
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Programs" }}
      ]
    },
    "priceRange": "$$"
  };

export const metadata: Metadata = buildMetadata({
  title: 'Corporate Wellness Long Beach | Yoga Programs for Your Team',
  description: "Boost employee well-being and productivity with Long Beach School of Yoga's corporate wellness programs. On-site and virtual yoga, meditation, and stress management for businesses.",
  path: "/corporate-wellness",
  keywords: ["corporate wellness long beach", "workplace yoga", "employee wellness program", "stress management", "yoga for businesses", "team wellness"],
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
