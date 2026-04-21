/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  // Image domains (add Supabase or CDN hosts here if needed later).
  images: {
    remotePatterns: [],
  },

  // Redirects from the old WordPress/HostGator URL structure.
  // Preserves SEO equity for any pages that were previously indexed.
  async redirects() {
    return [
      // Legacy WordPress paths -> new routes
      { source: "/yoga-teacher-training", destination: "/", permanent: true },
      { source: "/ytt", destination: "/", permanent: true },
      { source: "/200-hour-yoga-teacher-training", destination: "/", permanent: true },

      // Plural/singular normalization
      { source: "/blogs", destination: "/blog", permanent: true },
      { source: "/posts", destination: "/blog", permanent: true },

      // Path cleanup
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/about-us", destination: "/about", permanent: true },

      // Programs consolidated
      { source: "/kids-yoga", destination: "/school-yoga", permanent: true },
      { source: "/workplace-wellness", destination: "/workplace-yoga", permanent: true },
    ];
  },

  // Security + SEO headers.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
