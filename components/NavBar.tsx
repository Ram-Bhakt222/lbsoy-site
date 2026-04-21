import Link from "next/link";
import { siteConfig } from "@/lib/site";

export default function NavBar() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link href="/" className="nav-logo">
          Long Beach <span>School of Yoga</span>
        </Link>
        <div className="nav-links">
          {siteConfig.nav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <Link href="/free-consultation" className="nav-cta">
            Free Consultation
          </Link>
        </div>
        <button className="mobile-menu" aria-label="Menu" type="button">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
