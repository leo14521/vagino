import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes = ["/", "/laser", "/perineum", "/sling"] as const;

  return routes.map((path) => ({
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    lastModified: now,
    changeFrequency: path === "/" ? ("daily" as const) : ("weekly" as const),
    priority: path === "/" ? 1 : path.startsWith("/perineum") ? 0.88 : 0.9,
  }));
}
