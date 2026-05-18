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
    ];
  },
};

export default nextConfig;
