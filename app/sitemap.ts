import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://cosduck.com";

  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/services/setup`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/automation`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/review-program`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/cases`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/cases/us-skincare-t5-in-4-months`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/cases/us-beauty-t4-in-6-weeks`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/cases/us-cosmetics-1000-samples-weekly`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/cases/id-beauty-20m-daily-revenue`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/privacy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];
}
