import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import LeadForm from "@/components/LeadForm";

/* =====================================================================
   PAGE: contact
   Ported from LBSOY_Site_Build/contact.html during the GitHub migration.
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
    .hero-sub { font-size: 18px; line-height: 1.7; color: var(--text-secondary); margin-bottom: 40px; max-width: 700px; margin-left: auto; margin-right: auto; }

    /* === SECTIONS === */
    .section { padding: 100px 24px; }
    .section-alt { background: var(--warm-cream); }
    .section-inner { max-width: 1200px; margin: 0 auto; }
    .section-header { text-align: center; margin-bottom: 64px; }
    .section-label { display: inline-block; font-size: 12px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: var(--sage); margin-bottom: 16px; }
    .section-header h2 { font-family: var(--font-heading); font-size: 44px; font-weight: 600; color: var(--charcoal); line-height: 1.15; letter-spacing: -0.5px; margin-bottom: 16px; }

    /* === CONTACT OPTIONS === */
    .contact-options { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; margin-bottom: 80px; }
    .contact-card { background: var(--white); border-radius: 16px; padding: 40px 32px; border: 1px solid rgba(0,0,0,0.06); text-align: center; transition: all 0.3s; }
    .contact-card:hover { transform: translateY(-4px); box-shadow: 0 20px 60px rgba(0,0,0,0.08); }
    .contact-icon { width: 64px; height: 64px; border-radius: 12px; background: rgba(122,139,111,0.1); display: flex; align-items: center; justify-content: center; margin: 0 auto 24px; }
    .contact-icon svg { width: 32px; height: 32px; stroke: var(--sage); fill: none; stroke-width: 1.5; }
    .contact-card h3 { font-family: var(--font-heading); font-size: 24px; font-weight: 600; color: var(--charcoal); margin-bottom: 12px; }
    .contact-card p { font-size: 15px; color: var(--text-secondary); margin-bottom: 16px; }
    .contact-card a { color: var(--sage); font-weight: 600; text-decoration: none; display: inline-flex; align-items: center; gap: 6px; }
    .contact-card a:hover { gap: 10px; }

    /* === FORM SECTION === */
    .form-section { max-width: 700px; margin: 0 auto 80px; }
    .form-group { margin-bottom: 24px; }
    .form-label { display: block; font-size: 14px; font-weight: 600; color: var(--charcoal); margin-bottom: 8px; }
    .form-input, .form-select, .form-textarea { width: 100%; padding: 12px 16px; border: 1px solid rgba(0,0,0,0.12); border-radius: 8px; font-family: var(--font-body); font-size: 15px; color: var(--text-primary); transition: all 0.2s; }
    .form-input:focus, .form-select:focus, .form-textarea:focus { outline: none; border-color: var(--sage); box-shadow: 0 0 0 3px rgba(122,139,111,0.1); }
    .form-textarea { min-height: 160px; resize: vertical; }
    .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }

    /* === MAP === */
    .map-placeholder { width: 100%; aspect-ratio: 16/9; border-radius: 16px; background: linear-gradient(135deg, var(--warm-cream-dark) 0%, rgba(122,139,111,0.15) 100%); display: flex; align-items: center; justify-content: center; font-family: var(--font-heading); font-size: 20px; color: var(--sage); font-style: italic; margin-bottom: 80px; }

    /* === FAQ === */
    .faq-section { max-width: 800px; margin: 0 auto; }
    .faq-item { margin-bottom: 32px; }
    .faq-question { font-family: var(--font-heading); font-size: 20px; font-weight: 600; color: var(--charcoal); margin-bottom: 12px; }
    .faq-answer { font-size: 15px; color: var(--text-secondary); line-height: 1.7; }

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
      .contact-options { grid-template-columns: 1fr; }
      .form-row { grid-template-columns: 1fr; }
      .footer-grid { grid-template-columns: 1fr 1fr; }
      .nav-links { display: none; }
      .mobile-menu { display: block; }
      .hero h1 { font-size: 40px; }
    }`;

const PAGE_HTML_TOP = String.raw`<!-- Navigation -->
  <!-- Hero -->
  <section class="hero">
    <div class="hero-inner">
      <div class="hero-badge">We're Here to Help</div>
      <h1>Get in Touch</h1>
      <p class="hero-sub">Have questions about our yoga services? Want to book a session or discuss a corporate wellness program? We'd love to hear from you. Reach out using any method below.</p>
    </div>
  </section>

  <!-- Contact Options -->
  <section class="section">
    <div class="section-inner">
      <div class="contact-options">
        <div class="contact-card">
          <div class="contact-icon">
            <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          </div>
          <h3>Call or Text Us</h3>
          <p>Have a quick question? Call or text us directly to chat with our team.</p>
          <a href="tel:+1-562-555-0123">(562) 555-0123</a>
        </div>
        <div class="contact-card">
          <div class="contact-icon">
            <svg viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          </div>
          <h3>Email Us</h3>
          <p>Send us an email and we'll get back to you within 24 hours, typically much sooner.</p>
          <a href="mailto:longbeachschoolofyoga@gmail.com">longbeachschoolofyoga@gmail.com</a>
        </div>
        <div class="contact-card">
          <div class="contact-icon">
            <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          </div>
          <h3>Visit Us</h3>
          <p>Walk-ins welcome! Visit our studio in Long Beach to experience our space in person.</p>
          <a href="#">Long Beach, CA</a>
        </div>
      </div>
    </div>
  </section>

`;

const PAGE_HTML_BOTTOM = String.raw`  <!-- Map -->
  <section class="section">
    <div class="section-inner">
      <div class="map-placeholder">Google Maps embed goes here</div>
    </div>
  </section>

  <!-- FAQ -->
  <section class="section section-alt">
    <div class="section-inner">
      <div class="section-header">
        <span class="section-label">Questions?</span>
        <h2>Frequently Asked Questions</h2>
      </div>
      <div class="faq-section">
        <div class="faq-item">
          <h3 class="faq-question">How do I book a yoga therapy session?</h3>
          <p class="faq-answer">The simplest way to reach us is by email at longbeachschoolofyoga@gmail.com or through the contact form above. Use a clear subject line — "Yoga therapy inquiry," "Teacher training waitlist," "Senior yoga inquiry," "Online courses," or "Graduates board" — and we'll route your message to the right person. We typically reply within a few days.</p>
        </div>
        <div class="faq-item">
          <h3 class="faq-question">What is your cancellation policy?</h3>
          <p class="faq-answer">We ask for at least 24 hours notice for cancellations. Cancellations made less than 24 hours before your scheduled session may be subject to a cancellation fee equal to 50% of the session rate. We understand that life happens, so we offer one free reschedule per month for all clients in good standing.</p>
        </div>
        <div class="faq-item">
          <h3 class="faq-question">Is there parking available at your studio?</h3>
          <p class="faq-answer">Yes, we have free parking available in our studio lot. The lot is located directly behind our building. If street parking is needed, there is ample free parking available in the surrounding blocks in our Long Beach neighborhood.</p>
        </div>
        <div class="faq-item">
          <h3 class="faq-question">What should I bring to my yoga session?</h3>
          <p class="faq-answer">Please bring comfortable, loose-fitting clothing that allows for movement. Bring a water bottle to stay hydrated. We provide yoga mats, blankets, blocks, and bolsters, but you're welcome to bring your own mat if you prefer. If you have a specific injury or condition, please bring any relevant medical documentation so we can better assist you.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="cta-banner">
    <h2>Not Sure Where to Start?</h2>
    <p>Book a free consultation and let's discuss your goals and find the perfect service for your needs.</p>
    <a href="/free-consultation" class="btn-white">
      Book Your Free Consultation
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
    </a>
  </section>

  <!-- Footer -->`;

const PAGE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "EducationalOrganization"],
    "name": "Long Beach School of Yoga",
    "description": "A yoga school for the city of Long Beach. Yoga teacher training (RYT-200), yoga therapy, senior wellness, and online continuing education.",
    "url": "https://longbeachschoolofyoga.com",
    "email": "longbeachschoolofyoga@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Long Beach",
      "addressRegion": "CA",
      "addressCountry": "US"
    },
    "areaServed": [
      { "@type": "City", "name": "Long Beach" },
      { "@type": "City", "name": "Signal Hill" },
      { "@type": "City", "name": "Seal Beach" },
      { "@type": "City", "name": "Lakewood" },
      { "@type": "City", "name": "Los Alamitos" }
    ],
    "image": "https://longbeachschoolofyoga.com/images/lbsoy-hero.jpg",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "email": "longbeachschoolofyoga@gmail.com"
    },
    "sameAs": [
      "https://www.facebook.com/longbeachschoolofyoga/",
      "https://www.instagram.com/lbsoy/",
      "https://www.yelp.com/biz/long-beach-school-of-yoga-long-beach-2"
    ]
  };

export const metadata: Metadata = buildMetadata({
  title: 'Contact Long Beach School of Yoga | Book a Session',
  description: 'Get in touch with Long Beach School of Yoga. Book a yoga therapy session, request a corporate wellness proposal, or ask us anything. Located in Long Beach, CA.',
  path: "/contact",
  keywords: ["contact yoga long beach", "book yoga session", "yoga therapy appointment", "corporate wellness proposal"],
});

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: PAGE_CSS }} />
      <div dangerouslySetInnerHTML={{ __html: PAGE_HTML_TOP }} />

      <section className="section section-alt">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-label">Let&apos;s Connect</span>
            <h2>Send Us a Message</h2>
          </div>
          <LeadForm source="contact" submitLabel="Send Message" messageRequired />
        </div>
      </section>

      <div dangerouslySetInnerHTML={{ __html: PAGE_HTML_BOTTOM }} />
      <JsonLd data={PAGE_SCHEMA} />
    </>
  );
}
