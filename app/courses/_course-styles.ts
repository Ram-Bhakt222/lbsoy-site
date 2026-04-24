/**
 * Shared CSS for course landing pages.
 * Mirrors the sage/cream palette from /yoga-therapy so the visual language
 * stays consistent across the site until the WordPress re-skin lands.
 */
export const COURSE_PAGE_CSS = String.raw`:root {
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
.course-page * { box-sizing: border-box; }
.course-page { font-family: var(--font-body); color: var(--text-primary); line-height: 1.7; font-size: 16px; }
.course-page a { color: var(--sage-dark); text-decoration: underline; text-decoration-color: rgba(122,139,111,0.3); text-underline-offset: 3px; }
.course-page a:hover { text-decoration-color: var(--sage); }

/* Hero */
.course-hero { padding: 140px 24px 80px; background: linear-gradient(165deg, var(--warm-cream) 0%, var(--white) 60%, rgba(122,139,111,0.06) 100%); position: relative; overflow: hidden; }
.course-hero::before { content: ''; position: absolute; top: -200px; right: -200px; width: 600px; height: 600px; background: radial-gradient(circle, rgba(122,139,111,0.08) 0%, transparent 70%); }
.course-hero-inner { max-width: 1100px; margin: 0 auto; position: relative; }
.course-breadcrumbs { display: flex; gap: 8px; font-size: 13px; color: var(--text-light); margin-bottom: 24px; flex-wrap: wrap; }
.course-breadcrumbs a { color: var(--text-secondary); text-decoration: none; }
.course-breadcrumbs a:hover { color: var(--sage); }
.course-breadcrumbs span { color: var(--text-light); }
.course-badge { display: inline-flex; align-items: center; gap: 8px; background: rgba(122,139,111,0.1); color: var(--sage-dark); padding: 8px 16px; border-radius: 100px; font-size: 13px; font-weight: 600; letter-spacing: 0.5px; text-transform: uppercase; margin-bottom: 20px; }
.course-badge::before { content: ''; width: 6px; height: 6px; background: var(--sage); border-radius: 50%; }
.course-hero h1 { font-family: var(--font-heading); font-size: 52px; line-height: 1.1; font-weight: 600; color: var(--charcoal); margin-bottom: 20px; letter-spacing: -1px; max-width: 820px; }
.course-hero h1 em { font-style: italic; color: var(--sage); }
.course-hero-sub { font-size: 19px; line-height: 1.7; color: var(--text-secondary); max-width: 720px; margin-bottom: 32px; }
.course-hero-actions { display: flex; gap: 12px; flex-wrap: wrap; }
.course-btn-primary { display: inline-flex; align-items: center; gap: 8px; background: var(--sage); color: var(--white); padding: 14px 28px; border-radius: 8px; font-size: 15px; font-weight: 600; text-decoration: none; transition: all 0.2s; }
.course-btn-primary:hover { background: var(--sage-dark); transform: translateY(-1px); box-shadow: 0 8px 24px rgba(122,139,111,0.25); color: var(--white); }
.course-btn-secondary { display: inline-flex; align-items: center; gap: 8px; background: transparent; color: var(--charcoal); padding: 14px 28px; border-radius: 8px; font-size: 15px; font-weight: 600; text-decoration: none; border: 1.5px solid rgba(0,0,0,0.15); transition: all 0.2s; }
.course-btn-secondary:hover { border-color: var(--sage); color: var(--sage); }

/* TL;DR — speakable target */
.course-tldr { max-width: 900px; margin: -40px auto 0; background: var(--white); border: 1px solid rgba(122,139,111,0.2); border-left: 4px solid var(--sage); border-radius: 12px; padding: 28px 32px; box-shadow: 0 12px 40px rgba(0,0,0,0.05); position: relative; z-index: 2; }
.course-tldr h2 { font-family: var(--font-heading); font-size: 18px; font-weight: 700; color: var(--sage-dark); letter-spacing: 2px; text-transform: uppercase; margin-bottom: 12px; }
.course-tldr p { font-size: 17px; color: var(--text-primary); line-height: 1.7; margin: 0; }

/* Section */
.course-section { padding: 80px 24px; }
.course-section-alt { background: var(--warm-cream); }
.course-section-inner { max-width: 1000px; margin: 0 auto; }
.course-section-header { margin-bottom: 40px; }
.course-section-label { display: inline-block; font-size: 12px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: var(--sage); margin-bottom: 12px; }
.course-section-header h2 { font-family: var(--font-heading); font-size: 38px; font-weight: 600; color: var(--charcoal); line-height: 1.15; letter-spacing: -0.5px; margin-bottom: 14px; }
.course-section-header p { font-size: 17px; color: var(--text-secondary); max-width: 700px; }
.course-prose p { font-size: 17px; color: var(--text-secondary); line-height: 1.8; margin-bottom: 20px; }
.course-prose h3 { font-family: var(--font-heading); font-size: 24px; font-weight: 600; color: var(--charcoal); margin-top: 32px; margin-bottom: 12px; }
.course-prose ul { margin-bottom: 20px; padding-left: 24px; }
.course-prose li { font-size: 16px; color: var(--text-secondary); line-height: 1.7; margin-bottom: 8px; }

/* Benefits grid */
.course-benefits-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 32px; }
.course-benefit-card { background: var(--white); border: 1px solid rgba(0,0,0,0.06); border-radius: 12px; padding: 24px; transition: all 0.3s; }
.course-benefit-card:hover { transform: translateY(-2px); box-shadow: 0 12px 32px rgba(0,0,0,0.06); border-color: rgba(122,139,111,0.25); }
.course-benefit-card h3 { font-family: var(--font-heading); font-size: 20px; font-weight: 600; color: var(--charcoal); margin-bottom: 10px; }
.course-benefit-card p { font-size: 14px; color: var(--text-secondary); line-height: 1.6; margin: 0; }

/* Module / curriculum list */
.course-modules { margin-top: 28px; }
.course-module { display: flex; gap: 20px; padding: 20px 0; border-bottom: 1px solid rgba(0,0,0,0.08); }
.course-module:last-child { border-bottom: none; }
.course-module-number { flex-shrink: 0; width: 44px; height: 44px; border-radius: 50%; background: rgba(122,139,111,0.12); color: var(--sage-dark); display: flex; align-items: center; justify-content: center; font-family: var(--font-heading); font-size: 20px; font-weight: 700; }
.course-module-body h3 { font-family: var(--font-heading); font-size: 20px; font-weight: 600; color: var(--charcoal); margin-bottom: 6px; }
.course-module-body p { font-size: 15px; color: var(--text-secondary); line-height: 1.65; margin: 0; }

/* Good-fit callout */
.course-fit { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; margin-top: 28px; }
.course-fit-card { background: var(--white); border-radius: 12px; padding: 28px; border: 1px solid rgba(0,0,0,0.06); }
.course-fit-card h3 { font-family: var(--font-heading); font-size: 22px; font-weight: 600; margin-bottom: 14px; }
.course-fit-card.yes h3 { color: var(--sage-dark); }
.course-fit-card.no h3 { color: var(--terracotta); }
.course-fit-card ul { list-style: none; padding: 0; margin: 0; }
.course-fit-card li { display: flex; gap: 10px; padding: 7px 0; font-size: 15px; color: var(--text-secondary); line-height: 1.55; }
.course-fit-card.yes li::before { content: '✓'; color: var(--sage); font-weight: 700; flex-shrink: 0; }
.course-fit-card.no li::before { content: '×'; color: var(--terracotta); font-weight: 700; flex-shrink: 0; font-size: 18px; line-height: 1.4; }

/* Long Beach local block */
.course-local { background: linear-gradient(135deg, rgba(122,139,111,0.08) 0%, rgba(196,167,108,0.06) 100%); border-radius: 16px; padding: 36px; margin-top: 24px; }
.course-local h3 { font-family: var(--font-heading); font-size: 24px; font-weight: 600; color: var(--charcoal); margin-bottom: 14px; }
.course-local p { font-size: 16px; color: var(--text-secondary); line-height: 1.75; margin-bottom: 14px; }

/* FAQ */
.course-faq { max-width: 820px; margin: 0 auto; }
.course-faq-item { background: var(--white); border: 1px solid rgba(0,0,0,0.08); border-radius: 12px; margin-bottom: 14px; padding: 22px 26px; }
.course-faq-item h3 { font-family: var(--font-heading); font-size: 20px; font-weight: 600; color: var(--charcoal); margin-bottom: 10px; }
.course-faq-item p { font-size: 16px; color: var(--text-secondary); line-height: 1.7; margin: 0; }

/* Instructor block */
.course-instructor { display: grid; grid-template-columns: 1fr 2fr; gap: 40px; align-items: start; margin-top: 24px; }
.course-instructor-avatar { aspect-ratio: 1/1; border-radius: 16px; background: linear-gradient(135deg, var(--warm-cream-dark) 0%, rgba(122,139,111,0.2) 100%); display: flex; align-items: center; justify-content: center; font-family: var(--font-heading); font-size: 18px; color: var(--sage); font-style: italic; text-align: center; padding: 24px; }
.course-instructor-body p { font-size: 16px; color: var(--text-secondary); line-height: 1.75; margin-bottom: 14px; }
.course-instructor-credentials { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 16px; }
.course-instructor-credentials span { background: rgba(122,139,111,0.12); color: var(--sage-dark); padding: 6px 14px; border-radius: 100px; font-size: 13px; font-weight: 600; }

/* CTA */
.course-cta { background: linear-gradient(135deg, var(--sage) 0%, var(--sage-dark) 100%); color: var(--white); padding: 72px 24px; text-align: center; }
.course-cta h2 { font-family: var(--font-heading); font-size: 36px; font-weight: 600; color: var(--white); margin-bottom: 14px; }
.course-cta p { font-size: 17px; color: rgba(255,255,255,0.9); max-width: 620px; margin: 0 auto 28px; line-height: 1.7; }
.course-cta-actions { display: inline-flex; gap: 14px; flex-wrap: wrap; justify-content: center; }
.course-cta-btn-primary { background: var(--white); color: var(--sage-dark); padding: 14px 30px; border-radius: 8px; font-size: 15px; font-weight: 600; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; transition: all 0.2s; }
.course-cta-btn-primary:hover { transform: translateY(-1px); box-shadow: 0 8px 24px rgba(0,0,0,0.15); color: var(--sage-dark); }
.course-cta-btn-ghost { background: transparent; border: 1.5px solid rgba(255,255,255,0.4); color: var(--white); padding: 14px 30px; border-radius: 8px; font-size: 15px; font-weight: 600; text-decoration: none; transition: all 0.2s; }
.course-cta-btn-ghost:hover { background: rgba(255,255,255,0.1); border-color: var(--white); color: var(--white); }

/* Related */
.course-related { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 32px; }
.course-related-card { background: var(--white); border: 1px solid rgba(0,0,0,0.06); border-radius: 12px; padding: 22px; text-decoration: none; color: inherit; transition: all 0.3s; display: block; }
.course-related-card:hover { transform: translateY(-2px); box-shadow: 0 12px 32px rgba(0,0,0,0.06); border-color: rgba(122,139,111,0.25); }
.course-related-card h3 { font-family: var(--font-heading); font-size: 18px; font-weight: 600; color: var(--charcoal); margin-bottom: 8px; }
.course-related-card p { font-size: 14px; color: var(--text-secondary); line-height: 1.55; margin: 0; }

/* Responsive */
@media (max-width: 968px) {
  .course-hero h1 { font-size: 38px; }
  .course-section-header h2 { font-size: 30px; }
  .course-benefits-grid { grid-template-columns: 1fr; }
  .course-fit { grid-template-columns: 1fr; }
  .course-instructor { grid-template-columns: 1fr; }
  .course-related { grid-template-columns: 1fr; }
  .course-cta h2 { font-size: 28px; }
}`;
