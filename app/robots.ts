import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/app/", "/api/", "/_next/"],
    },
    sitemap: "https://colemak.pro/sitemap.xml",
  };
}
