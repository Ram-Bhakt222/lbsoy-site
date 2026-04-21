import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";

/* =====================================================================
   PAGE: senior-wellness
   Ported from LBSOY_Site_Build/senior-wellness.html during the GitHub migration.
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

    .nav { position: fixed; top: 0; left: 0; right: 0; z-index: 1000; background: rgba(255,255,255,0.97); backdrop-filter: blur(10px); border-bottom: 1px solid rgba(0,0,0,0.06); }
    .nav-inner { max-width: 1200px; margin: 0 auto; padding: 0 24px; display: flex; align-items: center; justify-content: space-between; height: 72px; }
    .nav-logo { font-family: var(--font-heading); font-size: 22px; font-weight: 600; color: var(--charcoal); text-decoration: none; }
    .nav-logo span { color: var(--sage); }
    .nav-links { display: flex; gap: 32px; align-items: center; }
    .nav-links a { font-size: 14px; font-weight: 500; color: var(--text-secondary); text-decoration: none; transition: color 0.2s; }
    .nav-links a:hover { color: var(--sage); }
    .nav-cta { background: var(--sage); color: var(--white) !important; padding: 10px 24px; border-radius: 6px; font-weight: 600; }
    .nav-cta:hover { background: var(--sage-dark); }
    .mobile-menu { display: none; }
    .mobile-menu svg { width: 24px; height: 24px; stroke: var(--charcoal); }

    .hero { padding: 160px 24px 100px; background: linear-gradient(165deg, var(--warm-cream) 0%, var(--white) 60%, rgba(122,139,111,0.06) 100%); position: relative; overflow: hidden; }
    .hero::before { content: ''; position: absolute; top: -200px; right: -200px; width: 600px; height: 600px; background: radial-gradient(circle, rgba(122,139,111,0.08) 0%, transparent 70%); }
    .hero-inner { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 80px; align-items: center; }
    .hero-badge { display: inline-flex; align-items: center; gap: 8px; background: rgba(122,139,111,0.1); color: var(--sage-dark); padding: 8px 16px; border-radius: 100px; font-size: 13px; font-weight: 600; margin-bottom: 24px; }
    .hero-badge::before { content: ''; width: 6px; height: 6px; background: var(--sage); border-radius: 50%; }
    .hero h1 { font-family: var(--font-heading); font-size: 56px; line-height: 1.1; font-weight: 600; color: var(--charcoal); margin-bottom: 24px; }
    .hero h1 em { font-style: italic; color: var(--sage); }
    .hero-sub { font-size: 18px; line-height: 1.7; color: var(--text-secondary); margin-bottom: 40px; max-width: 520px; }
    .hero-actions { display: flex; gap: 16px; }
    .btn-primary { display: inline-flex; align-items: center; gap: 8px; background: var(--sage); color: var(--white); padding: 16px 32px; border-radius: 8px; font-size: 15px; font-weight: 600; text-decoration: none; transition: all 0.2s; border: none; cursor: pointer; }
    .btn-primary:hover { background: var(--sage-dark); transform: translateY(-1px); box-shadow: 0 8px 24px rgba(122,139,111,0.25); }
    .btn-secondary { display: inline-flex; align-items: center; gap: 8px; background: transparent; color: var(--charcoal); padding: 16px 32px; border-radius: 8px; font-size: 15px; font-weight: 600; text-decoration: none; border: 1.5px solid rgba(0,0,0,0.15); transition: all 0.2s; }
    .btn-secondary:hover { border-color: var(--sage); color: var(--sage); }
    .hero-image-placeholder { width: 100%; aspect-ratio: 4/5; border-radius: 16px; background: linear-gradient(135deg, var(--warm-cream-dark) 0%, rgba(122,139,111,0.15) 100%); display: flex; align-items: center; justify-content: center; font-family: var(--font-heading); font-size: 24px; color: var(--sage); font-style: italic; text-align: center; padding: 40px; }
    .hero-float-card { position: absolute; bottom: -20px; left: -30px; background: var(--white); border-radius: 12px; padding: 20px 24px; box-shadow: 0 12px 40px rgba(0,0,0,0.08); display: flex; align-items: center; gap: 16px; }
    .hero-float-number { font-family: var(--font-heading); font-size: 42px; font-weight: 700; color: var(--sage); }
    .hero-float-label { font-size: 13px; color: var(--text-secondary); }
    .hero-float-label strong { display: block; color: var(--charcoal); font-size: 14px; }

    .section { padding: 100px 24px; }
    .section-alt { background: var(--warm-cream); }
    .section-inner { max-width: 1200px; margin: 0 auto; }
    .section-header { text-align: center; margin-bottom: 64px; }
    .section-label { display: inline-block; font-size: 12px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: var(--sage); margin-bottom: 16px; }
    .section-header h2 { font-family: var(--font-heading); font-size: 44px; font-weight: 600; color: var(--charcoal); line-height: 1.15; margin-bottom: 16px; }
    .section-header p { font-size: 17px; color: var(--text-secondary); max-width: 600px; margin: 0 auto; }

    .problem-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; }
    .problem-card { background: var(--white); border-radius: 16px; padding: 40px 32px; border: 1px solid rgba(0,0,0,0.06); }
    .problem-card h3 { font-family: var(--font-heading); font-size: 24px; font-weight: 600; color: var(--charcoal); margin-bottom: 16px; }
    .problem-card p { font-size: 15px; color: var(--text-secondary); line-height: 1.7; }

    .solution-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; }
    .solution-card { background: var(--white); border-radius: 16px; padding: 40px 32px; border: 1px solid rgba(0,0,0,0.06); transition: all 0.3s; position: relative; overflow: hidden; }
    .solution-card:hover { transform: translateY(-4px); box-shadow: 0 20px 60px rgba(0,0,0,0.08); border-color: rgba(122,139,111,0.2); }
    .solution-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: var(--sage); transform: scaleX(0); transition: transform 0.3s; }
    .solution-card:hover::before { transform: scaleX(1); }
    .solution-icon { width: 56px; height: 56px; border-radius: 12px; background: rgba(122,139,111,0.1); display: flex; align-items: center; justify-content: center; margin-bottom: 24px; }
    .solution-icon svg { width: 28px; height: 28px; stroke: var(--sage); fill: none; stroke-width: 1.5; }
    .solution-card h3 { font-family: var(--font-heading); font-size: 24px; font-weight: 600; color: var(--charcoal); margin-bottom: 12px; }
    .solution-card p { font-size: 15px; color: var(--text-secondary); line-height: 1.7; }

    .benefits-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
    .benefits-list { list-style: none; }
    .benefits-list li { display: flex; align-items: flex-start; gap: 16px; margin-bottom: 24px; font-size: 16px; color: var(--text-secondary); }
    .benefits-list li::before { content: '✓'; display: flex; align-items: center; justify-content: center; width: 24px; height: 24px; border-radius: 50%; background: rgba(122,139,111,0.15); color: var(--sage-dark); font-weight: 700; flex-shrink: 0; }
    .benefits-image { width: 100%; aspect-ratio: 1; border-radius: 16px; background: linear-gradient(135deg, var(--warm-cream-dark) 0%, rgba(122,139,111,0.15) 100%); display: flex; align-items: center; justify-content: center; font-family: var(--font-heading); font-size: 20px; color: var(--sage); font-style: italic; text-align: center; padding: 40px; }

    .how-it-works { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; }
    .how-card { text-align: center; }
    .how-number { font-family: var(--font-heading); font-size: 56px; font-weight: 700; color: var(--sage); margin-bottom: 16px; }
    .how-card h3 { font-family: var(--font-heading); font-size: 24px; font-weight: 600; color: var(--charcoal); margin-bottom: 12px; }
    .how-card p { font-size: 15px; color: var(--text-secondary); line-height: 1.7; }

    .stats-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; }
    .stat-card { text-align: center; padding: 40px 24px; }
    .stat-number { font-family: var(--font-heading); font-size: 52px; font-weight: 700; color: var(--sage); margin-bottom: 8px; }
    .stat-label { font-size: 15px; color: var(--text-secondary); font-weight: 500; }

    .form-section { background: var(--warm-cream); border-radius: 16px; padding: 60px; max-width: 600px; margin: 0 auto; }
    .form-section h2 { font-family: var(--font-heading); font-size: 32px; font-weight: 600; color: var(--charcoal); margin-bottom: 24px; text-align: center; }
    .form-group { margin-bottom: 20px; }
    .form-group label { display: block; font-size: 14px; font-weight: 600; color: var(--charcoal); margin-bottom: 8px; }
    .form-group input, .form-group textarea { width: 100%; padding: 12px; border: 1px solid rgba(0,0,0,0.12); border-radius: 8px; font-family: var(--font-body); font-size: 14px; color: var(--charcoal); }
    .form-group textarea { resize: vertical; min-height: 120px; }
    .form-submit { width: 100%; background: var(--sage); color: var(--white); padding: 16px; border: none; border-radius: 8px; font-size: 15px; font-weight: 600; cursor: pointer; transition: background 0.2s; }
    .form-submit:hover { background: var(--sage-dark); }

    .cta-banner { background: linear-gradient(135deg, var(--sage) 0%, var(--sage-dark) 100%); padding: 80px 24px; text-align: center; }
    .cta-banner h2 { font-family: var(--font-heading); font-size: 40px; font-weight: 600; color: var(--white); margin-bottom: 16px; }
    .cta-banner p { font-size: 17px; color: rgba(255,255,255,0.85); max-width: 560px; margin: 0 auto 32px; }
    .btn-white { background: var(--white); color: var(--sage-dark); padding: 16px 32px; border-radius: 8px; font-size: 15px; font-weight: 600; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; transition: all 0.2s; }
    .btn-white:hover { transform: translateY(-1px); box-shadow: 0 8px 24px rgba(0,0,0,0.15); }

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
      .problem-grid, .solution-grid, .how-it-works, .stats-grid { grid-template-columns: 1fr; }
      .benefits-two-col { grid-template-columns: 1fr; gap: 48px; }
      .footer-grid { grid-template-columns: 1fr 1fr; }
      .nav-links { display: none; }
      .mobile-menu { display: block; }
      .hero-float-card { position: static; margin-top: 24px; }
    }
    @media (min-width: 600px) and (max-width: 968px) {
      .problem-grid, .solution-grid, .how-it-works { grid-template-columns: repeat(2, 1fr); }
    }`;

const PAGE_HTML = String.raw`<section class="hero">
    <div class="hero-inner">
      <div class="hero-content">
        <div class="hero-badge">For Seniors, Centers & Facilities</div>
        <h1>Gentle, Safe Yoga for <em>Active Aging</em></h1>
        <p class="hero-sub">Chair yoga, balance training, and mindfulness programs designed for older adults. Improve mobility, reduce fall risk, manage chronic pain, and build community through group practice.</p>
        <div class="hero-actions">
          <a href="#cta-form" class="btn-primary">
            Start a Senior Wellness Program
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <a href="#benefits" class="btn-secondary">Learn More</a>
        </div>
      </div>
      <div>
        <div class="hero-image-placeholder">Seniors practicing gentle yoga together</div>
        <div class="hero-float-card">
          <div class="hero-float-number">40%</div>
          <div class="hero-float-label"><strong>Fall</strong>Reduction</div>
        </div>
      </div>
    </div>
  </section>

  <section class="section section-alt">
    <div class="section-inner">
      <div class="section-header">
        <span class="section-label">The Challenge</span>
        <h2>Aging in Place With Dignity & Independence</h2>
        <p>Seniors face unique physical and emotional wellness challenges.</p>
      </div>
      <div class="problem-grid">
        <div class="problem-card">
          <h3>Fall Risk</h3>
          <p>Falls are the leading cause of injury for seniors. One in four older adults experience falls. Loss of balance and strength increases risk.</p>
        </div>
        <div class="problem-card">
          <h3>Chronic Pain</h3>
          <p>Arthritis, back pain, and joint issues reduce mobility and independence. Many seniors over-rely on medication for pain management.</p>
        </div>
        <div class="problem-card">
          <h3>Isolation & Loss</h3>
          <p>Social isolation, loss of purpose, and reduced activity lead to depression and cognitive decline. Community and connection are vital.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="section-inner">
      <div class="section-header">
        <span class="section-label">Our Solution</span>
        <h2>Gentle Yoga & Wellness for Seniors</h2>
        <p>Evidence-based programs designed for aging bodies and minds.</p>
      </div>
      <div class="solution-grid">
        <div class="solution-card">
          <div class="solution-icon">
            <svg viewBox="0 0 24 24"><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16z"/><path d="M12 6v6h4"/></svg>
          </div>
          <h3>Chair Yoga</h3>
          <p>Seated and supported poses improve flexibility, strength, and balance. Perfect for seniors with limited mobility or balance concerns.</p>
        </div>
        <div class="solution-card">
          <div class="solution-icon">
            <svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm3.5-9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-7 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/></svg>
          </div>
          <h3>Balance & Strength</h3>
          <p>Specialized exercises that build lower body strength and proprioception. Reduces fall risk and improves confidence in daily activities.</p>
        </div>
        <div class="solution-card">
          <div class="solution-icon">
            <svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/></svg>
          </div>
          <h3>Breathing & Mindfulness</h3>
          <p>Gentle breathing practices and meditation for calm, focus, and pain management. Proven to reduce anxiety and improve sleep.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="section section-alt">
    <div class="section-inner">
      <div class="benefits-two-col">
        <div id="benefits">
          <h2 style="font-family: var(--font-heading); font-size: 40px; font-weight: 600; color: var(--charcoal); line-height: 1.15; margin-bottom: 40px;">Why Seniors Love Our Program</h2>
          <ul class="benefits-list">
            <li>40% reduction in falls and fall risk</li>
            <li>Improved balance, flexibility, and strength</li>
            <li>Natural pain management without medication</li>
            <li>Better sleep quality and restfulness</li>
            <li>Increased confidence and independence</li>
            <li>Social connection and community building</li>
            <li>Enhanced mental clarity and mood</li>
            <li>Support for maintaining active lifestyle</li>
          </ul>
        </div>
        <div class="benefits-image">Photo: Senior yoga group session</div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="section-inner">
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-number">40%</div>
          <div class="stat-label">Fall Reduction</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">35%</div>
          <div class="stat-label">Pain Reduction</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">92%</div>
          <div class="stat-label">Satisfaction Rate</div>
        </div>
      </div>
    </div>
  </section>

  <section class="section section-alt">
    <div class="section-inner">
      <div class="section-header">
        <span class="section-label">Getting Started</span>
        <h2>How Our Senior Programs Work</h2>
      </div>
      <div class="how-it-works">
        <div class="how-card">
          <div class="how-number">1</div>
          <h3>Needs Assessment</h3>
          <p>We evaluate your facility, participant ages and abilities, mobility levels, and wellness goals. No two programs are exactly the same.</p>
        </div>
        <div class="how-card">
          <div class="how-number">2</div>
          <h3>Customized Program</h3>
          <p>We design classes that meet your seniors where they are. Chair yoga, standing balance, group meditation, or a combination approach.</p>
        </div>
        <div class="how-card">
          <div class="how-number">3</div>
          <h3>Ongoing Classes & Support</h3>
          <p>Weekly classes with experienced, compassionate instructors. Flexible scheduling and modifications ensure accessibility for all participants.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="section-inner">
      <div class="form-section" id="cta-form">
        <h2>Start a Senior Wellness Program</h2>
        <form onsubmit="return handleFormSubmit(event)">
          <div class="form-group">
            <label for="name">Your Name</label>
            <input type="text" id="name" name="name" placeholder="Robert Johnson" required>
          </div>
          <div class="form-group">
            <label for="email">Email Address</label>
            <input type="email" id="email" name="email" placeholder="robert@seniorcare.org" required>
          </div>
          <div class="form-group">
            <label for="organization">Facility Name</label>
            <input type="text" id="organization" name="organization" placeholder="Long Beach Senior Center" required>
          </div>
          <div class="form-group">
            <label for="role">Your Role</label>
            <input type="text" id="role" name="role" placeholder="Director / Program Manager" required>
          </div>
          <div class="form-group">
            <label for="message">Tell Us About Your Needs</label>
            <textarea id="message" name="message" placeholder="Number of participants, age range, mobility levels, schedule preferences..."></textarea>
          </div>
          <button type="submit" class="form-submit">Start Program Today</button>
        </form>
      </div>
    </div>
  </section>

  <section class="cta-banner">
    <h2>Help Your Seniors Live Independently</h2>
    <p>Gentle yoga programs that improve balance, reduce pain, and build community. Contact us today to start.</p>
    <a href="#cta-form" class="btn-white">
      Start Your Program
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
    </a>
  </section>

  <script>
    function handleFormSubmit(e) {
      e.preventDefault();
      alert('Thank you! We will contact you soon to discuss your senior wellness program.');
      e.target.reset();
      return false;
    }
  </script>`;

const PAGE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Long Beach School of Yoga - Senior Wellness Programs",
    "description": "Gentle yoga and wellness programs for seniors in Long Beach. Chair yoga, balance, and flexibility for active aging.",
    "url": "https://longbeachschoolofyoga.com/senior-wellness",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Long Beach",
      "addressRegion": "CA",
      "addressCountry": "US"
    }
  };

export const metadata: Metadata = buildMetadata({
  title: 'Senior Yoga Long Beach | Gentle Yoga for Older Adults',
  description: 'Gentle, safe yoga programs for seniors in Long Beach. Chair yoga, balance training, and mindfulness for active aging. Reduce falls, manage pain, and stay independent.',
  path: "/senior-wellness",
  keywords: ["senior yoga", "gentle yoga for seniors", "yoga for older adults", "fall prevention", "aging", "senior wellness programs"],
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
