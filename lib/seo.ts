import type { Metadata } from "next";
import { siteConfig } from "./site";

interface BuildMetadataInput {
  title: string;
  description: string;
  path: string; // e.g. "/yoga-therapy"
  image?: string; // absolute or site-relative
  noindex?: boolean;
  keywords?: string[];
}

/**
 * Shared metadata builder. Every page should call this.
 * Mirrors the pattern from myn.com so SEO stays consistent across sister sites.
 */
export function buildMetadata({
  title,
  description,
  path,
  image,
  noindex,
  keywords,
}: BuildMetadataInput): Metadata {
  const url = new URL(path, siteConfig.url).toString();
  const fullTitle =
    title === siteConfig.name ? title : `${title} | ${siteConfig.name}`;

  const ogImage = image
    ? (image.startsWith("http") ? image : new URL(image, siteConfig.url).toString())
    : undefined;

  return {
    title: fullTitle,
    description,
    keywords,
    alternates: { canonical: url },
    robots: noindex
      ? { index: false, follow: false }
      : { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
    openGraph: {
      type: "website",
      url,
      siteName: siteConfig.name,
      title: fullTitle,
      description,
      images: ogImage ? [{ url: ogImage }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ogImage ? [ogImage] : undefined,
    },
  };
}

/**
 * JSON-LD: LocalBusiness + HealthAndBeautyBusiness schema for the LBSOY entity.
 * Rendered on every page via the RootLayout for strong local SEO signals.
 */
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HealthAndBeautyBusiness"],
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    description: siteConfig.description,
    url: siteConfig.url,
    image: `${siteConfig.url}/og-default.png`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address.streetAddress || undefined,
      addressLocality: siteConfig.contact.address.addressLocality,
      addressRegion: siteConfig.contact.address.addressRegion,
      postalCode: siteConfig.contact.address.postalCode || undefined,
      addressCountry: siteConfig.contact.address.addressCountry,
    },
    areaServed: siteConfig.locality.serviceArea.map((city) => ({
      "@type": "City",
      name: city,
    })),
    sameAs: [siteConfig.social.instagram, siteConfig.social.facebook].filter(Boolean),
  };
}

/**
 * Breadcrumb JSON-LD helper for interior pages.
 */
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: new URL(item.path, siteConfig.url).toString(),
    })),
  };
}
