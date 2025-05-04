import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.pimpmybike.sg";
  const currentDate = new Date().toISOString();

  // Only include the main homepage since it's now a single-page application
  const routes = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 1,
    }
  ];

  return routes;
} 