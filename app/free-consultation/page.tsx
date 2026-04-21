import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";


/* =====================================================================
   PAGE: free-consultation
   Ported from LBSOY_Site_Build/free-consultation.html during the GitHub migration.
   TODO (next session): replace dangerouslySetInnerHTML with real JSX and
   rewrite copy for Long Beach local SEO + MYN CTA routing.
   ===================================================================== */

const PAGE_CSS = String.raw`:root{--sage:#7A8B6F;--sage-light:#9AAD8E;--sage-dark:#5C6B52;--warm-cream:#FAF6F0;--warm-cream-dark:#F0E8DC;--charcoal:#2D2D2D;--charcoal-light:#4A4A4A;--terracotta:#C17B5E;--gold:#C4A76C;--white:#FFFFFF;--text-primary:#2D2D2D;--text-secondary:#5A5A5A;--text-light:#8A8A8A;--font-heading:'Cormorant Garamond',Georgia,serif;--font-body:'Plus Jakarta Sans',-apple-system,sans-serif}
    *{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth}body{font-family:var(--font-body);color:var(--text-primary);background:var(--white);line-height:1.7;font-size:16px}
    .nav{position:fixed;top:0;left:0;right:0;z-index:1000;background:rgba(255,255,255,0.97);backdrop-filter:blur(10px);border-bottom:1px solid rgba(0,0,0,0.06)}.nav-inner{max-width:1200px;margin:0 auto;padding:0 24px;display:flex;align-items:center;justify-content:space-between;height:72px}.nav-logo{font-family:var(--font-heading);font-size:22px;font-weight:600;color:var(--charcoal);text-decoration:none}.nav-logo span{color:var(--sage)}.nav-links{display:flex;gap:32px;align-items:center}.nav-links a{font-size:14px;font-weight:500;color:var(--text-secondary);text-decoration:none;transition:color 0.2s}.nav-links a:hover{color:var(--sage)}.nav-cta{background:var(--sage);color:var(--white)!important;padding:10px 24px;border-radius:6px;font-weight:600}

    .page-hero{padding:140px 24px 80px;background:linear-gradient(165deg,var(--warm-cream) 0%,var(--white) 60%,rgba(122,139,111,0.06) 100%);text-align:center}
    .page-hero h1{font-family:var(--font-heading);font-size:48px;font-weight:600;color:var(--charcoal);margin-bottom:16px;letter-spacing:-0.5px}
    .page-hero p{font-size:18px;color:var(--text-secondary);max-width:600px;margin:0 auto 40px}

    .booking-section{padding:0 24px 100px;margin-top:-20px}
    .booking-inner{max-width:900px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:start}
    .booking-info{padding:40px 0}
    .booking-info h2{font-family:var(--font-heading);font-size:32px;font-weight:600;color:var(--charcoal);margin-bottom:20px}
    .booking-info p{font-size:15px;color:var(--text-secondary);margin-bottom:24px;line-height:1.7}

    .what-to-expect{list-style:none;margin:0}
    .what-to-expect li{display:flex;align-items:flex-start;gap:14px;padding:14px 0;border-bottom:1px solid rgba(0,0,0,0.06);font-size:15px;color:var(--text-secondary)}
    .what-to-expect li:last-child{border-bottom:none}
    .expect-icon{width:32px;height:32px;border-radius:8px;background:rgba(122,139,111,0.1);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:16px}
    .expect-text strong{display:block;color:var(--charcoal);font-size:14px;margin-bottom:2px}

    .calendar-embed{background:var(--white);border:1px solid rgba(0,0,0,0.08);border-radius:16px;padding:48px;box-shadow:0 8px 40px rgba(0,0,0,0.06);text-align:center}
    .calendar-placeholder{width:100%;min-height:400px;background:var(--warm-cream);border-radius:12px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;font-family:var(--font-heading);font-size:20px;color:var(--sage);padding:40px}
    .calendar-placeholder small{font-family:var(--font-body);font-size:13px;color:var(--text-light);font-style:normal;max-width:280px}

    .consult-types{padding:60px 24px 100px}
    .consult-types-inner{max-width:900px;margin:0 auto}
    .consult-types h2{font-family:var(--font-heading);font-size:32px;font-weight:600;color:var(--charcoal);text-align:center;margin-bottom:40px}
    .type-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
    .type-card{background:var(--warm-cream);border-radius:12px;padding:32px 24px;text-align:center;transition:all 0.3s}
    .type-card:hover{transform:translateY(-2px);box-shadow:0 8px 30px rgba(0,0,0,0.06)}
    .type-card-icon{font-size:32px;margin-bottom:16px}
    .type-card h3{font-family:var(--font-heading);font-size:22px;font-weight:600;color:var(--charcoal);margin-bottom:8px}
    .type-card p{font-size:14px;color:var(--text-secondary);line-height:1.6}
    .type-card .duration{display:inline-block;margin-top:12px;font-size:13px;font-weight:600;color:var(--sage);background:rgba(122,139,111,0.1);padding:4px 12px;border-radius:100px}

    .footer{background:var(--charcoal);color:rgba(255,255,255,0.7);padding:80px 24px 40px}.footer-inner{max-width:1200px;margin:0 auto}.footer-grid{display:grid;grid-template-columns:1.5fr 1fr 1fr 1fr;gap:48px;margin-bottom:48px}.footer-brand{font-family:var(--font-heading);font-size:22px;font-weight:600;color:var(--white);margin-bottom:16px}.footer-brand span{color:var(--sage-light)}.footer-desc{font-size:14px;line-height:1.7;margin-bottom:20px}.footer-col h4{font-family:var(--font-heading);font-size:18px;font-weight:600;color:var(--white);margin-bottom:20px}.footer-col a{display:block;font-size:14px;color:rgba(255,255,255,0.6);text-decoration:none;padding:6px 0;transition:color 0.2s}.footer-col a:hover{color:var(--sage-light)}.footer-bottom{border-top:1px solid rgba(255,255,255,0.08);padding-top:32px;display:flex;justify-content:space-between;align-items:center;font-size:13px}
    @media(max-width:768px){.booking-inner{grid-template-columns:1fr}.type-grid{grid-template-columns:1fr}.nav-links{display:none}.footer-grid{grid-template-columns:1fr 1fr}}`;

const PAGE_HTML = String.raw`<section class="page-hero">
    <h1>Book Your Free Consultation</h1>
    <p>Whether you're exploring yoga therapy for yourself or wellness programs for your organization, let's start with a conversation. No pressure, no commitment &mdash; just clarity.</p>
  </section>

  <section class="booking-section">
    <div class="booking-inner">
      <div class="booking-info">
        <h2>What to Expect</h2>
        <p>Your free 20-minute consultation is a chance to share what you're looking for and learn how LBSOY can help. Here's what we'll cover:</p>
        <ul class="what-to-expect">
          <li>
            <div class="expect-icon">1</div>
            <div class="expect-text"><strong>Your Goals</strong>Tell us what brought you here &mdash; chronic pain, stress, team wellness, or just curiosity.</div>
          </li>
          <li>
            <div class="expect-icon">2</div>
            <div class="expect-text"><strong>Your Options</strong>We'll explain which of our services best fits your situation and budget.</div>
          </li>
          <li>
            <div class="expect-icon">3</div>
            <div class="expect-text"><strong>Your Questions</strong>Ask anything &mdash; about yoga therapy, corporate programs, online courses, or our approach.</div>
          </li>
          <li>
            <div class="expect-icon">4</div>
            <div class="expect-text"><strong>Next Steps</strong>If it's a fit, we'll outline a clear path forward. If not, no hard feelings.</div>
          </li>
        </ul>
      </div>
      <div class="calendar-embed">
        <div class="calendar-placeholder">
          GHL Calendar Embed
          <small>Replace this placeholder with your GHL "LBSOY Free Consultation" calendar embed code</small>
        </div>
      </div>
    </div>
  </section>

  <section class="consult-types">
    <div class="consult-types-inner">
      <h2>Consultations Available For</h2>
      <div class="type-grid">
        <div class="type-card">
          <div class="type-card-icon">&#x1F9D8;</div>
          <h3>Individuals</h3>
          <p>Exploring yoga therapy for chronic pain, stress, anxiety, injury recovery, or general wellness.</p>
          <span class="duration">20 min &middot; Free</span>
        </div>
        <div class="type-card">
          <div class="type-card-icon">&#x1F3E2;</div>
          <h3>Businesses</h3>
          <p>Interested in corporate wellness, workplace yoga, or team retreat programs for your organization.</p>
          <span class="duration">30 min &middot; Free</span>
        </div>
        <div class="type-card">
          <div class="type-card-icon">&#x1F393;</div>
          <h3>Organizations</h3>
          <p>Schools, senior centers, hotels, or healthcare facilities looking to add yoga and wellness services.</p>
          <span class="duration">30 min &middot; Free</span>
        </div>
      </div>
    </div>
  </section>`;



export const metadata: Metadata = buildMetadata({
  title: 'Free Yoga Consultation Long Beach',
  description: 'Book a free yoga therapy or wellness consultation with Long Beach School of Yoga. Discover how personalized yoga can help you heal, grow, or transform your workplace.',
  path: "/free-consultation",
  keywords: [],
});

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: PAGE_CSS }} />
      <div dangerouslySetInnerHTML={{ __html: PAGE_HTML }} />
      
    </>
  );
}
