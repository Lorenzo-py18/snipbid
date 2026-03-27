import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Handyman Invoice Template | SnipBid",
  description: "Download or use a free handyman invoice template. Learn what every handyman invoice should include and how SnipBid converts approved quotes into invoices automatically.",
  alternates: { canonical: "https://snipbid.com/templates/handyman-invoice-template" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What should a handyman invoice include?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A handyman invoice should include: your business name and contact info, the client's name and address, an invoice number and date, a list of line items with descriptions and prices, the total amount due, payment terms (due date), and a way for the client to pay — ideally an online payment link.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between a handyman quote and an invoice?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A quote is sent before the work and asks the client to approve the proposed price. An invoice is sent after approval or completion and requests payment. Quotes should come first — invoices follow.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use SnipBid to create handyman invoices?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. SnipBid lets you create a quote, get it approved by the client, and convert it to an invoice in one click. All line items and pricing carry over automatically. The invoice includes an online Stripe payment link.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get paid faster as a handyman?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Send invoices immediately after job completion, include an online payment link, and set a clear due date (e.g., due within 14 days). Clients who can pay by card online pay faster than those who need to write a check.",
      },
    },
  ],
};

const s = {
  page: { backgroundColor: "#0e0e1a", color: "#e0e0ef", minHeight: "100vh", fontFamily: "Inter, sans-serif" },
  nav: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 40px", borderBottom: "1px solid #222244" } as React.CSSProperties,
  wrap: { padding: "60px 20px", maxWidth: 860, margin: "0 auto" } as React.CSSProperties,
  card: { backgroundColor: "#16162a", border: "1px solid #222244", borderRadius: 14, padding: 24 } as React.CSSProperties,
  muted: { color: "#8888aa" } as React.CSSProperties,
};

export default function HandymanInvoiceTemplatePage() {
  return (
    <div style={s.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <nav style={s.nav}>
        <Link href="/" style={{ color: "#f97316", fontWeight: 700, fontSize: 20, textDecoration: "none" }}>SnipBid</Link>
        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <Link href="/login" style={{ color: "#8888aa", textDecoration: "none", fontSize: 14 }}>Sign In</Link>
          <Link href="/signup" style={{ backgroundColor: "#f97316", color: "#fff", padding: "8px 20px", borderRadius: 8, textDecoration: "none", fontSize: 14, fontWeight: 600 }}>Start Free</Link>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ textAlign: "center", padding: "72px 20px 52px" }}>
        <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800, lineHeight: 1.15, maxWidth: 680, margin: "0 auto 20px" }}>
          Free Handyman Invoice Template
        </h1>
        <p style={{ color: "#8888aa", fontSize: 17, maxWidth: 540, margin: "0 auto 32px", lineHeight: 1.7 }}>
          Learn what every professional handyman invoice should include — and use SnipBid to generate one automatically from an approved quote.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/signup" style={{ backgroundColor: "#f97316", color: "#fff", padding: "14px 32px", borderRadius: 10, textDecoration: "none", fontSize: 16, fontWeight: 700 }}>Start Free</Link>
          <Link href="/templates/handyman-quote-template" style={{ backgroundColor: "#16162a", color: "#e0e0ef", padding: "14px 32px", borderRadius: 10, textDecoration: "none", fontSize: 16, border: "1px solid #222244" }}>Quote Template</Link>
        </div>
      </section>

      {/* What to include */}
      <section style={s.wrap}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>What every handyman invoice should include</h2>
        <p style={{ ...s.muted, fontSize: 15, lineHeight: 1.7, marginBottom: 32 }}>A clear, professional invoice gets paid faster. Here's what to include:</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {[
            { num: "1", title: "Your business name and contact info", desc: "Business name, phone, and email. Clients need to know who sent the invoice." },
            { num: "2", title: "Client name and address", desc: "Name and service address. Keeps records clean for both sides." },
            { num: "3", title: "Invoice number and date", desc: "A unique invoice number for tracking and the date issued." },
            { num: "4", title: "Line items with descriptions and prices", desc: "Each task or material as a separate line item — quantity, unit price, and total. Never lump it all into one number." },
            { num: "5", title: "Total amount due", desc: "Clear, visible total. Include tax if applicable." },
            { num: "6", title: "Payment due date", desc: "E.g. 'Due within 14 days.' Clients without a deadline pay whenever they feel like it." },
            { num: "7", title: "Payment method", desc: "How can they pay? A Stripe link, bank transfer, or check. Online links get paid fastest." },
          ].map((item) => (
            <div key={item.num} style={{ ...s.card, display: "flex", gap: 16 }}>
              <div style={{ width: 30, height: 30, minWidth: 30, backgroundColor: "#f9731622", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", color: "#f97316", fontWeight: 700, fontSize: 13 }}>{item.num}</div>
              <div>
                <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 6 }}>{item.title}</h3>
                <p style={{ ...s.muted, fontSize: 13, lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Example invoice */}
      <section style={{ ...s.wrap, paddingTop: 20 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>Example handyman invoice</h2>
        <div style={{ backgroundColor: "#16162a", border: "1px solid #222244", borderRadius: 16, padding: 32 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20, flexWrap: "wrap", gap: 12 }}>
            <div>
              <div style={{ fontWeight: 700, color: "#f97316", fontSize: 16 }}>Mike&apos;s Home Repairs</div>
              <div style={{ ...s.muted, fontSize: 13 }}>mike@mikeshomerepairs.com · (512) 555-0182</div>
            </div>
            <div style={{ textAlign: "right" as const }}>
              <div style={{ fontWeight: 600, color: "#e0e0ef" }}>INVOICE #INV-1042</div>
              <div style={{ ...s.muted, fontSize: 13 }}>Date: March 27, 2026</div>
              <div style={{ ...s.muted, fontSize: 13 }}>Due: April 10, 2026</div>
            </div>
          </div>
          <div style={{ borderTop: "1px solid #222244", paddingTop: 16, marginBottom: 16 }}>
            <div style={{ ...s.muted, fontSize: 13 }}>Bill to: Jane Smith — 123 Oak St, Austin TX 78701</div>
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
                <td colSpan={3} style={{ padding: "12px 4px", textAlign: "right" as const, fontWeight: 700, color: "#e0e0ef" }}>Total Due</td>
                <td style={{ padding: "12px 4px", fontWeight: 700, color: "#f97316", fontSize: 16 }}>$325.00</td>
              </tr>
            </tbody>
          </table>
          <div style={{ borderTop: "1px solid #222244", paddingTop: 14, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
            <div style={{ ...s.muted, fontSize: 13 }}>Payment due within 14 days</div>
            <div style={{ backgroundColor: "#f97316", color: "#fff", padding: "10px 20px", borderRadius: 8, fontSize: 13, fontWeight: 700 }}>Pay Now →</div>
          </div>
        </div>
      </section>

      {/* Quote vs invoice */}
      <section style={{ ...s.wrap, paddingTop: 20 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 32 }}>Quote vs invoice: when to use each</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <div style={s.card}>
            <div style={{ color: "#f97316", fontSize: 13, fontWeight: 600, marginBottom: 12, textTransform: "uppercase" as const, letterSpacing: 1 }}>Quote</div>
            <p style={{ ...s.muted, fontSize: 14, lineHeight: 1.6 }}>Send <strong style={{ color: "#ccccdd" }}>before</strong> the work. Proposes a price and asks the client to approve. Becomes the basis for the invoice.</p>
          </div>
          <div style={s.card}>
            <div style={{ color: "#22cc88", fontSize: 13, fontWeight: 600, marginBottom: 12, textTransform: "uppercase" as const, letterSpacing: 1 }}>Invoice</div>
            <p style={{ ...s.muted, fontSize: 14, lineHeight: 1.6 }}>Send <strong style={{ color: "#ccccdd" }}>after</strong> approval or completion. Requests payment. Should match the approved quote line-for-line.</p>
          </div>
        </div>
        <p style={{ ...s.muted, fontSize: 14, marginTop: 16 }}>
          See full breakdown: <Link href="/blog/quote-vs-invoice-for-handymen" style={{ color: "#f97316" }}>Quote vs Invoice for Handymen</Link>
        </p>
      </section>

      {/* FAQ */}
      <section style={{ ...s.wrap, paddingTop: 20 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 32 }}>Frequently asked questions</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {faqSchema.mainEntity.map((q) => (
            <div key={q.name} style={s.card}>
              <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 8 }}>{q.name}</h3>
              <p style={{ ...s.muted, fontSize: 14, lineHeight: 1.6, margin: 0 }}>{q.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ textAlign: "center", padding: "40px 20px 80px" }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 14 }}>Generate invoices automatically in SnipBid</h2>
        <p style={{ ...s.muted, marginBottom: 32, fontSize: 15 }}>Quote → approve → invoice in one workflow. No retyping. Free to start.</p>
        <Link href="/signup" style={{ backgroundColor: "#f97316", color: "#fff", padding: "14px 36px", borderRadius: 10, textDecoration: "none", fontSize: 16, fontWeight: 700 }}>Start Free</Link>
        <p style={{ color: "#555577", fontSize: 13, marginTop: 14 }}>Free 14-day trial. No credit card required.</p>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid #222244", padding: "24px 40px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
        <Link href="/" style={{ color: "#f97316", fontWeight: 700, textDecoration: "none" }}>SnipBid</Link>
        <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
          <Link href="/handyman-invoice-software" style={{ color: "#8888aa", fontSize: 13, textDecoration: "none" }}>Handyman Invoice Software</Link>
          <Link href="/templates/handyman-quote-template" style={{ color: "#8888aa", fontSize: 13, textDecoration: "none" }}>Quote Template</Link>
          <Link href="/blog/quote-vs-invoice-for-handymen" style={{ color: "#8888aa", fontSize: 13, textDecoration: "none" }}>Quote vs Invoice</Link>
          <Link href="/quote-to-invoice-software" style={{ color: "#8888aa", fontSize: 13, textDecoration: "none" }}>Quote to Invoice Software</Link>
        </div>
        <span style={{ color: "#555577", fontSize: 13 }}>© 2026 SnipBid</span>
      </footer>
    </div>
  );
}
