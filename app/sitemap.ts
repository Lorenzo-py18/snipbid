import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: "https://snipbid.com", lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: "https://snipbid.com/signup", lastModified: now, changeFrequency: "yearly", priority: 0.9 },
    { url: "https://snipbid.com/login", lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    // Commercial landing pages
    { url: "https://snipbid.com/handyman-quote-software", lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: "https://snipbid.com/quote-to-invoice-software", lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    // Template pages
    { url: "https://snipbid.com/templates/handyman-quote-template", lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    // Blog posts
    { url: "https://snipbid.com/blog/how-to-write-a-handyman-estimate", lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: "https://snipbid.com/blog/quote-vs-invoice-for-handymen", lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];
}
