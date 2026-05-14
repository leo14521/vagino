import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes = ["/women", "/laser", "/perineum", "/sling"] as const;

  return routes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: path === "/women" ? ("daily" as const) : ("weekly" as const),
    priority: path === "/women" ? 1 : path.startsWith("/perineum") ? 0.88 : 0.9,
  }));
}
