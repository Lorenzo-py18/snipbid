import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/llms.txt", "/sitemap.xml"],
        disallow: [
          "/dashboard",
          "/api/",
          "/q/",
          "/i/",
          "/login",
          "/signup",
          "/onboarding",
          "/forgot-password",
          "/reset-password",
        ],
      },
    ],
    sitemap: "https://snipbid.com/sitemap.xml",
  };
}
