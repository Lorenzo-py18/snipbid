import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/login", "/signup"],
        disallow: ["/dashboard", "/api/", "/q/"],
      },
    ],
    sitemap: "https://snipbid.com/sitemap.xml",
  };
}
