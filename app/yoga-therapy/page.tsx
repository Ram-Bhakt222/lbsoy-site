import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";

/* =====================================================================
   PAGE: yoga-therapy
   Ported from LBSOY_Site_Build/yoga-therapy.html during the GitHub migration.
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
    .hero-float-card { position: absolute; bottom: -20px; left: -30px; background: var(--white); border-radius: 12px; padding: 20px 24px; box-shadow: 0 12px 40px rgba(0,0,0,0.08); display: flex; align-items: center; gap: 16px; }
    .hero-float-number { font-family: var(--font-heading); font-size: 42px; font-weight: 700; color: var(--sage); line-height: 1; }
    .hero-float-label { font-size: 13px; color: var(--text-secondary); line-height: 1.4; }
    .hero-float-label strong { display: block; color: var(--charcoal); font-size: 14px; }

    /* === TRUST BAR === */
    .trust-bar { background: var(--charcoal); padding: 20px 24px; }
    .trust-bar-inner { max-width: 1200px; margin: 0 auto; display: flex; justify-content: center; gap: 48px; flex-wrap: wrap; }
    .trust-item { display: flex; align-items: center; gap: 10px; color: rgba(255,255,255,0.8); font-size: 14px; font-weight: 500; letter-spacing: 0.3px; }
    .trust-item svg { width: 18px; height: 18px; stroke: var(--sage-light); flex-shrink: 0; }

    /* === SECTIONS === */
    .section { padding: 100px 24px; }
    .section-alt { background: var(--warm-cream); }
    .section-inner { max-width: 1200px; margin: 0 auto; }
    .section-header { text-align: center; margin-bottom: 64px; }
    .section-label { display: inline-block; font-size: 12px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: var(--sage); margin-bottom: 16px; }
    .section-header h2 { font-family: var(--font-heading); font-size: 44px; font-weight: 600; color: var(--charcoal); line-height: 1.15; letter-spacing: -0.5px; margin-bottom: 16px; }
    .section-header p { font-size: 17px; color: var(--text-secondary); max-width: 600px; margin: 0 auto; }

    /* === CONDITIONS GRID === */
    .conditions-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
    .condition-card { background: var(--white); border-radius: 12px; padding: 28px 24px; border: 1px solid rgba(0,0,0,0.06); text-align: center; transition: all 0.3s; }
    .condition-card:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(0,0,0,0.08); border-color: rgba(122,139,111,0.2); }
    .condition-card h3 { font-family: var(--font-heading); font-size: 20px; font-weight: 600; color: var(--charcoal); margin-bottom: 12px; }
    .condition-card p { font-size: 14px; color: var(--text-secondary); line-height: 1.6; }

    /* === PROCESS GRID === */
    .process-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 48px; }
    .process-card { text-align: center; }
    .process-number { width: 64px; height: 64px; border-radius: 50%; background: var(--sage); color: var(--white); display: flex; align-items: center; justify-content: center; font-family: var(--font-heading); font-size: 32px; font-weight: 700; margin: 0 auto 24px; }
    .process-card h3 { font-family: var(--font-heading); font-size: 24px; font-weight: 600; color: var(--charcoal); margin-bottom: 12px; }
    .process-card p { font-size: 15px; color: var(--text-secondary); line-height: 1.7; }

    /* === THERAPIST BIO === */
    .therapist-grid { display: grid; grid-template-columns: 1fr 1.2fr; gap: 60px; align-items: center; }
    .therapist-image-placeholder { width: 100%; aspect-ratio: 3/4; border-radius: 16px; background: linear-gradient(135deg, var(--warm-cream-dark) 0%, rgba(122,139,111,0.2) 100%); display: flex; align-items: center; justify-content: center; font-family: var(--font-heading); font-size: 20px; color: var(--sage); font-style: italic; text-align: center; padding: 40px; }
    .therapist-content h2 { font-family: var(--font-heading); font-size: 40px; font-weight: 600; color: var(--charcoal); line-height: 1.15; margin-bottom: 16px; }
    .therapist-content p { font-size: 16px; color: var(--text-secondary); margin-bottom: 16px; line-height: 1.7; }
    .specializations { list-style: none; margin: 28px 0; }
    .specializations li { display: flex; align-items: flex-start; gap: 12px; padding: 8px 0; font-size: 15px; color: var(--text-secondary); }
    .specializations li::before { content: '✓'; color: var(--sage); font-weight: 700; flex-shrink: 0; }

    /* === SESSIONS TABLE === */
    .sessions-container { overflow-x: auto; margin-bottom: 32px; }
    .sessions-table { width: 100%; border-collapse: collapse; background: var(--white); }
    .sessions-table th { background: rgba(122,139,111,0.08); padding: 16px; text-align: left; font-family: var(--font-heading); font-size: 16px; font-weight: 600; color: var(--charcoal); border-bottom: 2px solid var(--sage); }
    .sessions-table td { padding: 16px; border-bottom: 1px solid rgba(0,0,0,0.06); color: var(--text-secondary); }
    .sessions-table tbody tr:hover { background: rgba(122,139,111,0.03); }
    .session-price { font-family: var(--font-heading); font-size: 24px; font-weight: 700; color: var(--sage); }
    .session-duration { font-size: 14px; color: var(--text-light); }

    /* === FAQ === */
    .faq-container { max-width: 800px; margin: 0 auto; }
    .faq-item { margin-bottom: 24px; border-radius: 12px; border: 1px solid rgba(0,0,0,0.08); overflow: hidden; }
    .faq-question { background: rgba(122,139,111,0.06); padding: 20px 24px; cursor: pointer; display: flex; justify-content: space-between; align-items: center; transition: background 0.2s; }
    .faq-question:hover { background: rgba(122,139,111,0.12); }
    .faq-question h3 { font-family: var(--font-heading); font-size: 18px; font-weight: 600; color: var(--charcoal); margin: 0; }
    .faq-toggle { font-size: 20px; color: var(--sage); transition: transform 0.2s; flex-shrink: 0; }
    .faq-item.active .faq-toggle { transform: rotate(180deg); }
    .faq-answer { display: none; padding: 20px 24px; background: var(--white); color: var(--text-secondary); font-size: 15px; line-height: 1.7; border-top: 1px solid rgba(0,0,0,0.06); }
    .faq-item.active .faq-answer { display: block; }

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
      .hero-image { max-width: 400px; }
      .conditions-grid, .process-grid { grid-template-columns: 1fr; }
      .therapist-grid { grid-template-columns: 1fr; gap: 48px; }
      .footer-grid { grid-template-columns: 1fr 1fr; }
      .nav-links { display: none; }
      .mobile-menu { display: block; }
      .trust-bar-inner { gap: 24px; }
      .hero-float-card { position: static; margin-top: 24px; }
    }
    @media (min-width: 600px) and (max-width: 968px) {
      .conditions-grid, .process-grid { grid-template-columns: repeat(2, 1fr); }
    }`;

const PAGE_HTML = String.raw`<!-- Navigation -->
  <!-- Hero Section -->
  <section class="hero">
    <div class="hero-inner">
      <div>
        <div class="hero-badge">Clinical Healing</div>
        <h1>Personalized <em>Yoga Therapy</em> in Long Beach</h1>
        <p class="hero-sub">Unlike group classes, yoga therapy is a clinical approach tailored specifically to your health condition, movement patterns, and healing goals. Work one-on-one with a certified yoga therapist to manage chronic pain, reduce anxiety, recover from injury, and reclaim your wellbeing.</p>
        <div class="hero-actions">
          <a href="#book-consultation" class="btn-primary">
            Book a Consultation
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </div>
      <div class="hero-image">
        <div class="hero-image-placeholder">Photo: Yoga Therapy Session</div>
      </div>
    </div>
  </section>

  <!-- Trust Bar -->
  <div class="trust-bar">
    <div class="trust-bar-inner">
      <div class="trust-item">
        <svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
        Yoga Alliance Certified
      </div>
      <div class="trust-item">
        <svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
        Specialized in Yoga Therapy
      </div>
      <div class="trust-item">
        <svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
        Serving Long Beach Since 2014
      </div>
    </div>
  </div>

  <!-- What Is Yoga Therapy Section -->
  <section class="section">
    <div class="section-inner">
      <div class="section-header">
        <span class="section-label">Understanding Yoga Therapy</span>
        <h2>What Is Yoga Therapy?</h2>
        <p>Yoga therapy is fundamentally different from traditional yoga classes. It's a clinical approach that uses yoga practices&mdash;postures, breathing techniques, meditation, and mindfulness&mdash;tailored specifically to your individual health conditions and goals.</p>
      </div>
      <div style="max-width: 900px; margin: 0 auto;">
        <p style="font-size: 17px; color: var(--text-secondary); margin-bottom: 20px; line-height: 1.8;">
          While group yoga classes follow a set sequence for everyone, yoga therapy is entirely personalized. Your certified yoga therapist will conduct a thorough assessment of your health history, current limitations, movement patterns, and wellness goals. Then, they design a customized protocol that may include specific asanas (poses), pranayama (breathing practices), meditation techniques, and lifestyle recommendations tailored to your unique needs.
        </p>
        <p style="font-size: 17px; color: var(--text-secondary); margin-bottom: 20px; line-height: 1.8;">
          Yoga therapy is clinically informed, evidence-based, and designed to work alongside conventional medical care. Whether you're managing chronic pain, recovering from injury, dealing with anxiety or depression, or navigating prenatal and postnatal wellness, yoga therapy provides a healing pathway that honors your body's unique needs.
        </p>
      </div>
    </div>
  </section>

  <!-- Conditions We Help Section -->
  <section class="section section-alt">
    <div class="section-inner">
      <div class="section-header">
        <span class="section-label">Healing Conditions</span>
        <h2>Conditions We Help</h2>
        <p>Yoga therapy has been shown to help with a wide range of physical and mental health conditions. Here are some of the areas where we specialize.</p>
      </div>
      <div class="conditions-grid">
        <div class="condition-card">
          <h3>Chronic Back Pain</h3>
          <p>Strengthen and stabilize your spine while reducing pain through targeted poses and breathing techniques designed for your specific condition.</p>
        </div>
        <div class="condition-card">
          <h3>Anxiety & Stress</h3>
          <p>Learn evidence-based yoga and meditation practices that calm your nervous system and help you manage stress and anxiety naturally.</p>
        </div>
        <div class="condition-card">
          <h3>Depression</h3>
          <p>Yoga therapy can support conventional treatment by improving mood, energy, and emotional resilience through movement and mindfulness practices.</p>
        </div>
        <div class="condition-card">
          <h3>PTSD & Trauma</h3>
          <p>Gentle, trauma-informed yoga practices help regulate your nervous system and build a sense of safety and stability in your body.</p>
        </div>
        <div class="condition-card">
          <h3>Injury Recovery</h3>
          <p>Safely rebuild strength, flexibility, and confidence as you heal from surgery, sports injuries, or accidents with personalized therapeutic protocols.</p>
        </div>
        <div class="condition-card">
          <h3>Prenatal & Postnatal</h3>
          <p>Prepare your body for birth and recover postpartum with practices designed to support your changing body and emotional wellbeing.</p>
        </div>
        <div class="condition-card">
          <h3>Arthritis & Joint Pain</h3>
          <p>Build strength around affected joints while reducing inflammation and improving mobility through adapted yoga movements.</p>
        </div>
        <div class="condition-card">
          <h3>Insomnia & Sleep Issues</h3>
          <p>Establish better sleep patterns with relaxation techniques, breathing practices, and meditation designed to calm your mind and body before bed.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Our Approach Section -->
  <section class="section">
    <div class="section-inner">
      <div class="section-header">
        <span class="section-label">Our Process</span>
        <h2>Our Three-Step Approach</h2>
        <p>We believe in a methodical, personalized approach to healing. Here's how we work with you.</p>
      </div>
      <div class="process-grid">
        <div class="process-card">
          <div class="process-number">1</div>
          <h3>Assessment</h3>
          <p>We begin with a thorough evaluation of your health history, movement patterns, physical limitations, and wellness goals. This detailed assessment ensures we understand the full picture of your needs.</p>
        </div>
        <div class="process-card">
          <div class="process-number">2</div>
          <h3>Personalized Plan</h3>
          <p>Based on your assessment, we design a custom yoga therapy protocol specifically for you. Your plan may include specific poses, breathing exercises, meditation techniques, and lifestyle recommendations.</p>
        </div>
        <div class="process-card">
          <div class="process-number">3</div>
          <h3>Ongoing Support</h3>
          <p>Regular sessions allow us to guide you through your practice, track your progress, and make adjustments as your body and needs evolve. Consistency and personalized attention drive real results.</p>
        </div>
      </div>
    </div>
  </section>


  <!-- Your Therapist Section -->
  <section class="section section-alt">
    <div class="section-inner">
      <div class="section-header">
        <span class="section-label">Meet Your Therapist</span>
        <h2>Ram Bhakt</h2>
      </div>
      <div class="therapist-grid">
        <div class="therapist-image-placeholder">Photo: Ram Bhakt, Certified Yoga Therapist</div>
        <div class="therapist-content">
          <p>Ram Bhakt is an E-RYT 500 certified yoga instructor, registered yoga therapist, and founder of Long Beach School of Yoga. With over a decade of experience in both traditional yoga and clinical yoga therapy, Ram brings a unique blend of ancient yogic wisdom and modern scientific understanding to every session.</p>
          <p>Ram's clinical expertise includes working with clients managing chronic pain, anxiety, PTSD, and post-injury recovery. His approach is grounded in biomechanics, anatomy, and evidence-based therapeutic protocols, ensuring that each session is both healing and safe.</p>
          <p style="font-weight: 600; color: var(--charcoal); margin-top: 24px; margin-bottom: 12px;">Specializations & Credentials:</p>
          <ul class="specializations">
            <li>E-RYT 500 (Experienced Registered Yoga Teacher)</li>
            <li>Registered Yoga Therapist (IAYT)</li>
            <li>Yoga Alliance Certified</li>
            <li>Specialization in Therapeutic Yoga for Chronic Pain</li>
            <li>Specialization in Trauma-Informed Yoga</li>
            <li>Prenatal & Postnatal Yoga Specialist</li>
            <li>10+ Years of Clinical Experience</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Session Options Section -->
  <section class="section">
    <div class="section-inner">
      <div class="section-header">
        <span class="section-label">Pricing & Options</span>
        <h2>Session Packages</h2>
        <p>We offer flexible session options to fit your needs and budget. All prices include a personalized assessment and custom therapeutic protocol.</p>
      </div>
      <div class="sessions-container">
        <table class="sessions-table">
          <thead>
            <tr>
              <th>Session Type</th>
              <th>Duration</th>
              <th>Price</th>
              <th>What's Included</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Initial Assessment</strong></td>
              <td>90 minutes</td>
              <td><span class="session-price">$150</span></td>
              <td>Detailed health assessment, movement evaluation, custom protocol design, first session</td>
            </tr>
            <tr>
              <td><strong>Follow-Up Session</strong></td>
              <td>60 minutes</td>
              <td><span class="session-price">$100</span></td>
              <td>Guided practice, progress tracking, adjustments to your protocol</td>
            </tr>
            <tr>
              <td><strong>4-Session Package</strong></td>
              <td>60 min each</td>
              <td><span class="session-price">$350</span></td>
              <td>Monthly commitment, 12.5% savings, progress tracking between sessions</td>
            </tr>
            <tr>
              <td><strong>8-Session Package</strong></td>
              <td>60 min each</td>
              <td><span class="session-price">$650</span></td>
              <td>2-month commitment, 18.75% savings, deep therapeutic results</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p style="font-size: 14px; color: var(--text-light); text-align: center; margin-top: 20px; font-style: italic;">Note: Prices are subject to change. Sessions can be in-person or virtual. Contact us for bulk pricing and corporate programs.</p>
    </div>
  </section>

  <!-- FAQ Section -->
  <section class="section section-alt">
    <div class="section-inner">
      <div class="section-header">
        <span class="section-label">Questions</span>
        <h2>Frequently Asked Questions</h2>
      </div>
      <div class="faq-container">
        <div class="faq-item">
          <div class="faq-question" onclick="this.parentElement.classList.toggle('active')">
            <h3>What's the difference between yoga therapy and yoga classes?</h3>
            <span class="faq-toggle">+</span>
          </div>
          <div class="faq-answer">
            <p>Yoga classes are group sessions focused on general fitness and flexibility. Yoga therapy is a clinical approach where every session is customized to your specific health condition, movement patterns, and goals. Your yoga therapist assesses your unique needs and designs a personalized protocol, unlike group classes with the same poses for everyone.</p>
          </div>
        </div>
        <div class="faq-item">
          <div class="faq-question" onclick="this.parentElement.classList.toggle('active')">
            <h3>Do I need yoga experience?</h3>
            <span class="faq-toggle">+</span>
          </div>
          <div class="faq-answer">
            <p>No yoga experience is required. Yoga therapy is designed for people at all levels, including complete beginners. Your therapist will meet you exactly where you are, adapting poses and practices to your current abilities and limitations.</p>
          </div>
        </div>
        <div class="faq-item">
          <div class="faq-question" onclick="this.parentElement.classList.toggle('active')">
            <h3>How many sessions will I need?</h3>
            <span class="faq-toggle">+</span>
          </div>
          <div class="faq-answer">
            <p>The number of sessions depends on your condition and goals. Most clients start with an initial assessment followed by weekly sessions. Many people see significant improvement in 6-8 weeks, though some conditions may benefit from longer-term support. We'll develop a personalized plan during your initial consultation.</p>
          </div>
        </div>
        <div class="faq-item">
          <div class="faq-question" onclick="this.parentElement.classList.toggle('active')">
            <h3>Is yoga therapy covered by insurance?</h3>
            <span class="faq-toggle">+</span>
          </div>
          <div class="faq-answer">
            <p>Some insurance plans may cover yoga therapy when prescribed by a healthcare provider for specific conditions. We recommend checking with your insurance company directly. We're happy to provide documentation that you can submit for reimbursement consideration.</p>
          </div>
        </div>
        <div class="faq-item">
          <div class="faq-question" onclick="this.parentElement.classList.toggle('active')">
            <h3>What should I wear and bring?</h3>
            <span class="faq-toggle">+</span>
          </div>
          <div class="faq-answer">
            <p>Wear comfortable, loose-fitting clothing that allows freedom of movement. Bring a bottle of water and let your therapist know about any injuries or physical limitations before your session begins. Sessions can be done barefoot or with yoga socks.</p>
          </div>
        </div>
        <div class="faq-item">
          <div class="faq-question" onclick="this.parentElement.classList.toggle('active')">
            <h3>Can yoga therapy help with my specific condition?</h3>
            <span class="faq-toggle">+</span>
          </div>
          <div class="faq-answer">
            <p>Yoga therapy has been shown to help with a wide range of conditions including chronic pain, anxiety, depression, PTSD, insomnia, arthritis, and injury recovery. Contact us for a free consultation to discuss your specific needs and learn whether yoga therapy is right for you.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Banner -->
  <section class="cta-banner" id="book-consultation">
    <h2>Take the First Step Toward Healing</h2>
    <p>Your journey to wellness begins with a single conversation. Book a free consultation and discover how personalized yoga therapy can transform your health and reclaim your quality of life.</p>
    <a href="/free-consultation" class="btn-white">
      Book Free Consultation
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
    </a>
  </section>

  <!-- Footer -->
  <script>
    // Simple FAQ toggle functionality
    document.querySelectorAll('.faq-question').forEach(question => {
      question.addEventListener('click', function() {
        const item = this.parentElement;
        item.classList.toggle('active');
      });
    });
  </script>`;

const PAGE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": ["HealthAndBeautyBusiness", "LocalBusiness"],
    "name": "Long Beach School of Yoga - Yoga Therapy",
    "description": "Clinically-informed yoga therapy in Long Beach for chronic pain, anxiety, stress, and injury recovery",
    "url": "https://longbeachschoolofyoga.com/yoga-therapy",
    "telephone": "+1-562-123-4567",
    "email": "info@lbsoy.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Long Beach, CA",
      "addressLocality": "Long Beach",
      "addressRegion": "CA",
      "postalCode": "90801",
      "addressCountry": "US"
    },
    "areaServed": "Long Beach, CA",
    "medicalSpecialty": "Yoga Therapy"
  };

export const metadata: Metadata = buildMetadata({
  title: 'Yoga Therapy Long Beach | Personalized Healing Sessions',
  description: 'Clinically-informed yoga therapy in Long Beach for chronic pain, anxiety, stress, and injury recovery. Personalized sessions with certified yoga therapists. Book today.',
  path: "/yoga-therapy",
  keywords: ["yoga therapy long beach", "therapeutic yoga", "yoga for chronic pain", "yoga for anxiety", "personalized yoga sessions", "healing yoga"],
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
