import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { servicePages } from "@/lib/service-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/services/audit",
    "/services/gst",
    "/services/income-tax",
    "/contact",
  ];

  const dynamicRoutes = Object.keys(servicePages).map(
    (slug) => `/services/${slug}`,
  );

  return [...staticRoutes, ...dynamicRoutes].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.startsWith("/services") ? 0.8 : 0.7,
  }));
}
