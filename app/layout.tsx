import type { Metadata, Viewport } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { localBusinessSchema } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `Yoga Therapy & Corporate Wellness | ${siteConfig.name}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "yoga long beach",
    "yoga therapy long beach",
    "corporate wellness long beach",
    "yoga classes long beach",
    "yoga near me",
    "long beach wellness",
    "belmont shore yoga",
    "signal hill yoga",
  ],
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
  icons: { icon: "/favicon.ico" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#7A8B6F",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <JsonLd data={localBusinessSchema()} />
      </head>
      <body>
        <NavBar />
        <main>{children}</main>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
