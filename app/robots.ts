import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    host: "https://www.fizzy.blog",
    sitemap: "https://www.fizzy.blog/sitemap.xml",
  };
}
