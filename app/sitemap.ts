import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/config";

/** Static sitemap covering all marketing routes. */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes: {
    path: string;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
  }[] = [
    { path: "/", changeFrequency: "monthly", priority: 1 },
    { path: "/features", changeFrequency: "monthly", priority: 0.9 },
    { path: "/pricing", changeFrequency: "monthly", priority: 0.9 },
    { path: "/faq", changeFrequency: "monthly", priority: 0.7 },
    { path: "/support", changeFrequency: "yearly", priority: 0.6 },
    { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
    { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route.path === "/" ? "" : route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
