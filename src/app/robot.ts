import { MetadataRoute } from "next";

export default function robot(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/ru", "/uz"],
      disallow: "/api/sendMessage",
    },
    sitemap: "https://horeca-seo.vercel.app/sitemap.xml",
  };
}