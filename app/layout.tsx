import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export const metadata: Metadata = {
  title: {
    default: "SnipBid | Handyman Quote Software & Quote-to-Invoice Workflow",
    template: "%s | SnipBid",
  },
  description: "SnipBid helps handymen and small home service businesses turn customer texts into professional quotes in under a minute — then convert them into invoices when approved.",
  keywords: ["handyman quote software", "quote to invoice software", "handyman estimate software", "home service quote software", "handyman invoicing app"],
  authors: [{ name: "SnipBid" }],
  creator: "SnipBid",
  metadataBase: new URL("https://snipbid.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://snipbid.com",
    siteName: "SnipBid",
    title: "SnipBid | Handyman Quote Software & Quote-to-Invoice Workflow",
    description: "Turn messy customer texts into professional quotes in under a minute. AI drafts the quote. You review every price before sending.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "SnipBid — Handyman Quote Software" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SnipBid | Handyman Quote Software",
    description: "Turn customer texts into professional quotes in under a minute. Free to try.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: "https://snipbid.com" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ backgroundColor: "#0e0e1a", color: "#e0e0ef" }}>
        {children}
        {GA_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
            <Script id="ga-init" strategy="afterInteractive">{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `}</Script>
          </>
        )}
      </body>
    </html>
  );
}
