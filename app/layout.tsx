import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const GA_ID = "G-6K5XSV0H61";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://snipbid.com/#organization",
  name: "SnipBid",
  url: "https://snipbid.com",
  logo: "https://snipbid.com/og-image.png",
  sameAs: ["https://snipbid.com"],
  description:
    "SnipBid is handyman quote software for small home service pros who need to turn customer messages into professional quotes and invoices quickly.",
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://snipbid.com/#website",
  name: "SnipBid",
  url: "https://snipbid.com",
  publisher: { "@id": "https://snipbid.com/#organization" },
  inLanguage: "en-US",
  description:
    "Handyman quote and invoice software for turning customer texts, notes, and job details into editable quotes and invoices.",
};

export const metadata: Metadata = {
  title: {
    default: "Handyman Quote & Invoice Software for Small Service Pros | SnipBid",
    template: "%s | SnipBid",
  },
  description: "SnipBid helps handymen and small home service pros turn customer texts, notes, and job details into editable quotes, then convert approved quotes into invoices.",
  keywords: ["handyman quote software", "quote to invoice software", "handyman estimate software", "home service quote software", "handyman invoicing app"],
  authors: [{ name: "SnipBid" }],
  creator: "SnipBid",
  metadataBase: new URL("https://snipbid.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://snipbid.com",
    siteName: "SnipBid",
    title: "Handyman Quote & Invoice Software for Small Service Pros | SnipBid",
    description: "SnipBid helps handymen and small home service pros turn customer texts, notes, and job details into editable quotes, then convert approved quotes into invoices.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "SnipBid — Handyman Quote Software" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Handyman Quote & Invoice Software | SnipBid",
    description: "Turn customer texts into professional quotes in under a minute. Free to try.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "business software",
  alternates: {
    canonical: "https://snipbid.com",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: "#0e0e1a", color: "#e0e0ef", fontFamily: "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
        {children}
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="ga-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}</Script>
      </body>
    </html>
  );
}
