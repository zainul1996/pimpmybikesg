import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/"],
      }
    ],
    sitemap: "https://www.pimpmybike.sg/sitemap.xml",
    host: "https://www.pimpmybike.sg",
  };
} 