import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: "https://snipbid.com", lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: "https://snipbid.com/demo", lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    // Commercial landing pages
    { url: "https://snipbid.com/handyman-quote-software", lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: "https://snipbid.com/quote-to-invoice-software", lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: "https://snipbid.com/handyman-estimate-software", lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: "https://snipbid.com/handyman-invoice-software", lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: "https://snipbid.com/home-service-quote-software", lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    // Template pages
    { url: "https://snipbid.com/templates/handyman-quote-template", lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: "https://snipbid.com/templates/handyman-invoice-template", lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    // Blog posts
    { url: "https://snipbid.com/blog/how-to-write-a-handyman-estimate", lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: "https://snipbid.com/blog/quote-vs-invoice-for-handymen", lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: "https://snipbid.com/blog/how-to-send-a-quote-over-text", lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: "https://snipbid.com/blog/how-to-convert-quote-to-invoice", lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: "https://snipbid.com/blog/how-to-respond-to-customer-quote-request", lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: "https://snipbid.com/blog/text-message-to-professional-quote", lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: "https://snipbid.com/blog/how-to-quote-small-repair-jobs", lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: "https://snipbid.com/blog/flat-rate-vs-hourly-for-handymen", lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: "https://snipbid.com/blog/how-to-follow-up-after-sending-a-handyman-quote", lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: "https://snipbid.com/blog/how-to-price-a-handyman-job-youve-never-done-before", lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: "https://snipbid.com/blog/should-you-give-free-estimates-as-a-handyman", lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];
}
