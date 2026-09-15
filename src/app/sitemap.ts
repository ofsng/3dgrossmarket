import type { MetadataRoute } from "next";
import { categories, toyPages } from "@/lib/products";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    { path: "", priority: 1 },
    { path: "/urunler", priority: 0.9 },
    { path: "/oyuncaklar", priority: 0.9 },
    { path: "/hakkimizda", priority: 0.6 },
    { path: "/iletisim", priority: 0.7 },
  ];

  return [
    ...staticRoutes.map((r) => ({
      url: `${site.url}${r.path}`,
      lastModified: now,
      priority: r.priority,
    })),
    ...categories
      .filter((c) => c.id !== "oyuncaklar")
      .map((c) => ({
        url: `${site.url}/urunler/${c.id}`,
        lastModified: now,
        priority: 0.8,
      })),
    ...toyPages().map((p) => ({
      url: `${site.url}/oyuncaklar/${p.slug}`,
      lastModified: now,
      priority: 0.8,
    })),
  ];
}
