import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/config";
import { GUIDES } from "@/lib/guides";
import { COMPARISONS } from "@/lib/comparisons";

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
    { path: "/resources", changeFrequency: "monthly", priority: 0.7 },
    { path: "/guides", changeFrequency: "monthly", priority: 0.7 },
    /* One entry per published guide — new guides are picked up automatically. */
    ...GUIDES.map((guide) => ({
      path: `/guides/${guide.slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
    { path: "/compare", changeFrequency: "monthly", priority: 0.7 },
    /* One entry per published comparison — new ones are picked up automatically. */
    ...COMPARISONS.map((comparison) => ({
      path: `/compare/${comparison.slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
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
