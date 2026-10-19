import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://Wecollect.tech";

  const routes = [
    "",
    "/platform",
    "/pricing",
    "/request",
    "/faqs",
    "/blog",
    "/privacy-policy",
    "/terms-of-use",
    "/cookie-policy",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  return routes;
}
