import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "QuickBid Pro",
  description: "AI-powered quoting & invoicing for contractors",
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
