import Link from "next/link";
import { siteConfig } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              Long Beach <span>School of Yoga</span>
            </div>
            <p className="footer-desc">
              Long Beach's trusted source for yoga therapy, corporate wellness programs, and
              holistic healing. Serving {siteConfig.locality.city} and the greater South Bay.
            </p>
            <p className="footer-address">
              {siteConfig.contact.address.addressLocality}, {siteConfig.contact.address.addressRegion}
              <br />
              {siteConfig.contact.email && <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>}
            </p>
            <div className="footer-social" style={{ marginTop: 16 }}>
              {siteConfig.social.instagram && (
                <a href={siteConfig.social.instagram} aria-label="Instagram" target="_blank" rel="noopener noreferrer">IG</a>
              )}
              {siteConfig.social.facebook && (
                <a href={siteConfig.social.facebook} aria-label="Facebook" target="_blank" rel="noopener noreferrer">FB</a>
              )}
            </div>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            {siteConfig.footerLinks.services.map((l) => (
              <Link key={l.href} href={l.href}>{l.label}</Link>
            ))}
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            {siteConfig.footerLinks.company.map((l) => (
              <Link key={l.href} href={l.href}>{l.label}</Link>
            ))}
          </div>

          <div className="footer-col">
            <h4>Resources</h4>
            {siteConfig.footerLinks.resources.map((l) =>
              l.href.startsWith("http") ? (
                <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</a>
              ) : (
                <Link key={l.href} href={l.href}>{l.label}</Link>
              )
            )}
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Long Beach School of Yoga. All rights reserved.</span>
          <span>
            Part of the <a href={siteConfig.mynUrl} target="_blank" rel="noopener noreferrer">My Yoga Network</a>.
          </span>
        </div>
      </div>
    </footer>
  );
}
