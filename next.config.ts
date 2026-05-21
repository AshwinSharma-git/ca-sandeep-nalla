import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "motion"],
  },
  async redirects() {
    return [
      {
        source: "/services/company-registration",
        destination: "/services/private-limited-company",
        permanent: true,
      },
      // Old combined URLs → new dedicated landing pages
      {
        source: "/services/society-trust",
        destination: "/services/society",
        permanent: true,
      },
      {
        source: "/services/payroll-compliance",
        destination: "/services/esic-returns",
        permanent: true,
      },
      {
        source: "/services/gst-notices-refunds",
        destination: "/services/gst-notices",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
