import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "SnipBid — AI Quotes for Contractors in 30 Seconds",
    template: "%s | SnipBid",
  },
  description: "AI-powered quoting and invoicing built for plumbers, electricians, and HVAC contractors. Generate professional quotes in 30 seconds, get paid faster.",
  keywords: ["contractor quote software", "plumber invoice app", "electrician quoting tool", "HVAC estimate software", "contractor invoicing", "AI quote generator"],
  authors: [{ name: "SnipBid" }],
  creator: "SnipBid",
  metadataBase: new URL("https://snipbid.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://snipbid.com",
    siteName: "SnipBid",
    title: "SnipBid — AI Quotes for Contractors in 30 Seconds",
    description: "Stop wasting hours on paperwork. AI generates professional contractor quotes in 30 seconds. Get paid faster with online approvals and Stripe payments.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "SnipBid — AI Quotes for Contractors" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SnipBid — AI Quotes for Contractors in 30 Seconds",
    description: "Stop wasting hours on paperwork. AI generates professional contractor quotes in 30 seconds.",
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
      </body>
    </html>
  );
}
