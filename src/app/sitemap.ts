import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes = [
    "/menu3-1",
    "/menu3-2",
    "/menu3-3",
    "/menu3-3/hair-removal",
    "/menu3-3/whitening",
    "/menu3-3/clitoris",
    "/menu3-4",
    "/menu3-4/monalisa",
    "/menu3-4/revive",
    "/menu3-5",
    "/sling",
  ] as const;

  const HOME = "/menu3-1";

  return routes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: path === HOME ? ("daily" as const) : ("weekly" as const),
    priority: path === HOME ? 1 : 0.9,
  }));
}
