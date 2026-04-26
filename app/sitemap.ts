import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";

const baseUrl = "https://fizzy.blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const postEntries = getAllPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : now,
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
