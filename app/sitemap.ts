import type { MetadataRoute } from "next";
import { getPostSlugs } from "@/lib/posts";

const baseUrl = "https://fizzy.blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const postEntries = getPostSlugs().map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    ...postEntries,
  ];
}
