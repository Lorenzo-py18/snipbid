import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Write a Handyman Estimate (With Example) | SnipBid",
  description: "A step-by-step guide to writing a professional handyman estimate. Learn what to include, see a real example, and discover how to quote faster with SnipBid.",
  alternates: { canonical: "https://snipbid.com/blog/how-to-write-a-handyman-estimate" },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Write a Handyman Estimate",
  description: "A step-by-step guide to writing a professional handyman estimate with a real example and common mistakes to avoid.",
  author: { "@type": "Organization", name: "SnipBid" },
  publisher: { "@type": "Organization", name: "SnipBid", url: "https://snipbid.com" },
  url: "https://snipbid.com/blog/how-to-write-a-handyman-estimate",
  datePublished: "2026-03-25",
  dateModified: "2026-03-25",
};

const s = {
  page: { backgroundColor: "#0e0e1a", color: "#e0e0ef", minHeight: "100vh", fontFamily: "Inter, sans-serif" },
  nav: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 40px", borderBottom: "1px solid #222244" } as React.CSSProperties,
  article: { padding: "60px 20px", maxWidth: 720, margin: "0 auto" } as React.CSSProperties,
  card: { backgroundColor: "#16162a", border: "1px solid #222244", borderRadius: 14, padding: 24 } as React.CSSProperties,
  muted: { color: "#8888aa" } as React.CSSProperties,
  h2: { fontSize: 24, fontWeight: 700, marginTop: 48, marginBottom: 16 } as React.CSSProperties,
  p: { color: "#ccccdd", fontSize: 15, lineHeight: 1.8, marginBottom: 16 } as React.CSSProperties,
};

export default function HowToWriteAHandymanEstimatePage() {
  return (
    <div style={s.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Nav */}
      <nav style={s.nav}>
        <Link href="/" style={{ color: "#f97316", fontWeight: 700, fontSize: 20, textDecoration: "none" }}>SnipBid</Link>
        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <Link href="/login" style={{ color: "#8888aa", textDecoration: "none", fontSize: 14 }}>Sign In</Link>
          <Link href="/signup" style={{ backgroundColor: "#f97316", color: "#fff", padding: "8px 20px", borderRadius: 8, textDecoration: "none", fontSize: 14, fontWeight: 600 }}>Start Free</Link>
        </div>
      </nav>

      <article style={s.article}>
        {/* Breadcrumb */}
        <div style={{ ...s.muted, fontSize: 13, marginBottom: 24 }}>
          <Link href="/" style={{ color: "#8888aa", textDecoration: "none" }}>SnipBid</Link>
          {" / "}
          <Link href="/blog" style={{ color: "#8888aa", textDecoration: "none" }}>Blog</Link>
          {" / "}
          <span style={{ color: "#e0e0ef" }}>How to Write a Handyman Estimate</span>
        </div>

        <h1 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 800, lineHeight: 1.2, marginBottom: 16 }}>
          How to Write a Handyman Estimate
        </h1>
        <p style={{ ...s.muted, fontSize: 14, marginBottom: 40 }}>By SnipBid · March 25, 2026 · 5 min read</p>

        {/* Direct answer */}
        <div style={{ ...s.card, borderLeft: "3px solid #f97316", marginBottom: 32 }}>
          <p style={{ color: "#e0e0ef", fontSize: 15, lineHeight: 1.7, margin: 0 }}>
            <strong>The short answer:</strong> A professional handyman estimate should include your business info, the client&apos;s details, a line-item breakdown of tasks and materials, a scope of work, payment terms, and a validity period. Use a quote number for tracking. Send it as a link or PDF so the client can approve it easily.
          </p>
        </div>

        <p style={s.p}>
          Most handymen lose jobs not because of price — but because they&apos;re too slow to send a quote, or the quote looks informal. A well-structured estimate builds trust and makes it easier for clients to say yes.
        </p>

        <h2 style={s.h2}>What&apos;s the difference between an estimate and a quote?</h2>
        <p style={s.p}>
          An <strong>estimate</strong> is an informal approximation — &ldquo;probably around $300–400.&rdquo; A <strong>quote</strong> is a formal, specific offer: exact line items, exact pricing, clear terms. Most clients prefer a quote because it removes uncertainty.
        </p>
        <p style={s.p}>
          For the purpose of this guide, we&apos;ll focus on writing a professional quote — the kind that looks like it came from a real business, not a handwritten note.
        </p>

        <h2 style={s.h2}>Step-by-step: How to write a handyman estimate</h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 32 }}>
          {[
            {
              step: "1",
              title: "Start with the job details",
              body: "Review the customer's request carefully. What work needs to be done? What materials will be required? If anything is unclear, ask before quoting — guessing leads to disputes later.",
            },
            {
              step: "2",
              title: "Break the work into line items",
              body: "Don't lump everything into one total. Create a separate line item for each distinct task and each material. Include a quantity, unit price, and total for each. This transparency builds trust and reduces pushback on price.",
            },
            {
              step: "3",
              title: "Write a scope of work",
              body: "In plain English, describe exactly what work will be done, what's included, and — importantly — what's not included. This protects you from scope creep and sets clear expectations for the client.",
            },
            {
              step: "4",
              title: "Add your payment terms",
              body: "State when payment is due. Common options: 'Due within 14 days of invoice,' 'Deposit required before work begins,' or '50% upfront, 50% on completion.'",
            },
            {
              step: "5",
              title: "Set a validity period",
              body: "Add a line like 'This quote is valid for 30 days.' This protects you from being held to old pricing months later.",
            },
            {
              step: "6",
              title: "Include your contact info and a quote number",
              body: "Your business name, phone, and email. A unique quote number for easy reference (e.g., SB-1042). A date.",
            },
            {
              step: "7",
              title: "Send it professionally",
              body: "Don't text a number. Send a formatted quote as a link or PDF. Clients are more likely to approve — and pay — when it looks professional.",
            },
          ].map((item) => (
            <div key={item.step} style={{ ...s.card, display: "flex", gap: 16 }}>
              <div style={{ width: 32, height: 32, minWidth: 32, backgroundColor: "#f9731622", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", color: "#f97316", fontWeight: 700, fontSize: 14 }}>{item.step}</div>
              <div>
                <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 6 }}>{item.title}</h3>
                <p style={{ ...s.muted, fontSize: 13, lineHeight: 1.6, margin: 0 }}>{item.body}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 style={s.h2}>Example handyman estimate</h2>
        <p style={s.p}>Here&apos;s what a professional handyman estimate looks like for a typical two-task job:</p>

        <div style={{ backgroundColor: "#16162a", border: "1px solid #222244", borderRadius: 16, padding: 28, marginBottom: 32 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20, flexWrap: "wrap", gap: 12 }}>
            <div>
              <div style={{ fontWeight: 700, color: "#f97316" }}>Mike&apos;s Home Repairs</div>
              <div style={{ ...s.muted, fontSize: 13 }}>mike@mikeshomerepairs.com · (512) 555-0182</div>
            </div>
            <div style={{ textAlign: "right" as const }}>
              <div style={{ fontWeight: 600, fontSize: 14 }}>Quote #SB-1042</div>
              <div style={{ ...s.muted, fontSize: 13 }}>March 25, 2026 · Valid 30 days</div>
            </div>
          </div>
          <div style={{ borderTop: "1px solid #222244", paddingTop: 16, marginBottom: 16 }}>
            <div style={{ ...s.muted, fontSize: 13 }}>Client: Jane Smith — 123 Oak St, Austin TX 78701</div>
          </div>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13, marginBottom: 16 }}>
            <thead>
              <tr style={{ borderBottom: "1px solid #222244" }}>
                {["Description", "Qty", "Unit", "Total"].map((h) => (
                  <th key={h} style={{ textAlign: "left" as const, padding: "8px 4px", color: "#8888aa", fontWeight: 600 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["Replace bathroom faucet (labor)", "1", "$120", "$120"],
                ["Faucet fixture materials", "1", "$85", "$85"],
                ["Patch drywall hole (labor)", "1", "$95", "$95"],
                ["Drywall patch materials", "1", "$25", "$25"],
              ].map((row) => (
                <tr key={row[0]} style={{ borderBottom: "1px solid #1a1a2e" }}>
                  {row.map((cell, i) => (
                    <td key={i} style={{ padding: "10px 4px", color: "#ccccdd" }}>{cell}</td>
                  ))}
                </tr>
              ))}
              <tr>
                <td colSpan={3} style={{ padding: "12px 4px", textAlign: "right" as const, fontWeight: 700 }}>Total</td>
                <td style={{ padding: "12px 4px", fontWeight: 700, color: "#f97316" }}>$325.00</td>
              </tr>
            </tbody>
          </table>
          <div style={{ borderTop: "1px solid #222244", paddingTop: 14 }}>
            <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 8 }}>Scope of Work</div>
            <p style={{ ...s.muted, fontSize: 13, lineHeight: 1.6 }}>Replace existing bathroom faucet with client-supplied fixture. Includes removal of old faucet, supply line replacement, and installation. Patch 6&rdquo;×6&rdquo; drywall hole in hallway wall. Includes compound, sanding, and primer. Final paint coat not included. Work guaranteed for 90 days.</p>
            <div style={{ ...s.muted, fontSize: 13, marginTop: 12 }}>Payment terms: Due within 14 days of invoice.</div>
          </div>
        </div>

        <h2 style={s.h2}>Common mistakes handymen make with estimates</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 32 }}>
          {[
            "Texting a single number with no breakdown — looks unprofessional and invites price negotiation",
            "No scope of work — clients assume you'll do more than you planned",
            "No expiry date — clients can accept an old quote at old prices",
            "No payment terms — late payments become common when nothing is specified",
            "Sending a Word doc or spreadsheet — clients can't easily approve or pay online",
          ].map((mistake) => (
            <div key={mistake} style={{ display: "flex", gap: 10, color: "#ccccdd", fontSize: 14 }}>
              <span style={{ color: "#ff4444", marginTop: 2 }}>✗</span>
              <span>{mistake}</span>
            </div>
          ))}
        </div>

        <h2 style={s.h2}>When to use a template or software</h2>
        <p style={s.p}>
          A template is a starting point. It still requires you to fill in every field by hand, write the scope of work, and format everything yourself. For one or two jobs a week, that might be fine.
        </p>
        <p style={s.p}>
          If you&apos;re quoting multiple jobs a week, the manual work adds up fast. <Link href="/handyman-quote-software" style={{ color: "#f97316" }}>Handyman quote software</Link> like SnipBid lets you paste the customer&apos;s message and get a complete, editable quote draft — line items, scope of work, and terms — in under a minute.
        </p>

        {/* CTA box */}
        <div style={{ ...s.card, textAlign: "center", padding: 36, margin: "32px 0" }}>
          <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 10 }}>Build your next estimate in SnipBid</div>
          <p style={{ ...s.muted, fontSize: 14, marginBottom: 24 }}>Paste a customer message — SnipBid builds the quote draft. You review the pricing before sending.</p>
          <Link href="/signup" style={{ backgroundColor: "#f97316", color: "#fff", padding: "12px 28px", borderRadius: 8, textDecoration: "none", fontSize: 15, fontWeight: 700 }}>Start Free</Link>
        </div>

        {/* Internal links */}
        <h2 style={s.h2}>Related resources</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {[
            { href: "/templates/handyman-quote-template", label: "Free Handyman Quote Template" },
            { href: "/quote-to-invoice-software", label: "Quote to Invoice Software for Small Businesses" },
            { href: "/blog/quote-vs-invoice-for-handymen", label: "Quote vs Invoice for Handymen: What's the Difference?" },
            { href: "/handyman-quote-software", label: "Handyman Quote Software" },
            { href: "/handyman-estimate-software", label: "Handyman Estimate Software" },
            { href: "/handyman-invoice-software", label: "Handyman Invoice Software" },
          ].map((link) => (
            <Link key={link.href} href={link.href} style={{ color: "#f97316", fontSize: 14, textDecoration: "none" }}>→ {link.label}</Link>
          ))}
        </div>
      </article>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid #222244", padding: "24px 40px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12, marginTop: 40 }}>
        <Link href="/" style={{ color: "#f97316", fontWeight: 700, textDecoration: "none" }}>SnipBid</Link>
        <span style={{ color: "#555577", fontSize: 13 }}>© 2026 SnipBid</span>
      </footer>
    </div>
  );
}
