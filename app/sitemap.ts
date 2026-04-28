import type { MetadataRoute } from "next";

const baseUrl = "https://snipbid.com";
const lastModified = new Date("2026-04-28T00:00:00.000Z");

type PublicRoute = {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
};

const routes: PublicRoute[] = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/demo", changeFrequency: "weekly", priority: 0.85 },
  { path: "/handyman-quote-software", changeFrequency: "monthly", priority: 0.95 },
  { path: "/handyman-estimate-software", changeFrequency: "monthly", priority: 0.9 },
  { path: "/handyman-invoice-software", changeFrequency: "monthly", priority: 0.9 },
  { path: "/quote-to-invoice-software", changeFrequency: "monthly", priority: 0.9 },
  { path: "/home-service-quote-software", changeFrequency: "monthly", priority: 0.85 },
  { path: "/templates/handyman-quote-template", changeFrequency: "monthly", priority: 0.8 },
  { path: "/templates/handyman-invoice-template", changeFrequency: "monthly", priority: 0.8 },
  { path: "/blog/how-to-write-a-handyman-estimate", changeFrequency: "monthly", priority: 0.75 },
  { path: "/blog/how-to-quote-small-repair-jobs", changeFrequency: "monthly", priority: 0.75 },
  { path: "/blog/how-to-send-a-quote-over-text", changeFrequency: "monthly", priority: 0.75 },
  { path: "/blog/text-message-to-professional-quote", changeFrequency: "monthly", priority: 0.72 },
  { path: "/blog/how-to-respond-to-customer-quote-request", changeFrequency: "monthly", priority: 0.72 },
  { path: "/blog/how-to-follow-up-after-sending-a-handyman-quote", changeFrequency: "monthly", priority: 0.72 },
  { path: "/blog/how-to-price-a-handyman-job-youve-never-done-before", changeFrequency: "monthly", priority: 0.72 },
  { path: "/blog/flat-rate-vs-hourly-for-handymen", changeFrequency: "monthly", priority: 0.72 },
  { path: "/blog/quote-vs-invoice-for-handymen", changeFrequency: "monthly", priority: 0.72 },
  { path: "/blog/how-to-convert-quote-to-invoice", changeFrequency: "monthly", priority: 0.72 },
  { path: "/blog/should-you-give-free-estimates-as-a-handyman", changeFrequency: "monthly", priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
