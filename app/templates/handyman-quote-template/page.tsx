import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Handyman Quote Template",
  description: "Download or use a free handyman quote template. Learn what every handyman quote should include — and how SnipBid can build it for you in under a minute.",
  alternates: { canonical: "https://snipbid.com/templates/handyman-quote-template" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What should a handyman quote include?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A professional handyman quote should include: your business name and contact info, the client's name and address, a quote number and date, a list of line items with descriptions and prices, a scope of work describing what will be done, payment terms, quote validity period, and your signature or approval field.",
      },
    },
    {
      "@type": "Question",
      name: "How do I write a handyman quote?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Start with the client's job details. Break the work into line items — each task or material with a quantity and unit price. Write a short scope of work describing what is included. Add your payment terms and how long the quote is valid. Then review the total before sending.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between a handyman quote and an estimate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An estimate is an informal approximation of the cost. A quote is a formal, binding offer with specific pricing. Clients are more likely to approve a detailed quote than a rough estimate because it shows professionalism and removes ambiguity.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use SnipBid instead of a static template?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. SnipBid replaces static templates entirely. Instead of filling in a blank template manually, you paste the customer's message and SnipBid builds an editable quote draft for you — with line items, scope of work, and terms already included.",
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

export default function HandymanQuoteTemplatePage() {
  return (
    <div style={s.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Nav */}
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
          Free Handyman Quote Template
        </h1>
        <p style={{ color: "#8888aa", fontSize: 17, maxWidth: 540, margin: "0 auto 16px", lineHeight: 1.7 }}>
          Learn what every professional handyman quote should include — and use SnipBid to generate one from a customer message in under a minute.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginTop: 32 }}>
          <Link href="/signup" style={{ backgroundColor: "#f97316", color: "#fff", padding: "14px 32px", borderRadius: 10, textDecoration: "none", fontSize: 16, fontWeight: 700 }}>Use This Template in SnipBid</Link>
          <Link href="/handyman-quote-software" style={{ backgroundColor: "#16162a", color: "#e0e0ef", padding: "14px 32px", borderRadius: 10, textDecoration: "none", fontSize: 16, border: "1px solid #222244" }}>See Handyman Quote Software</Link>
        </div>
      </section>

      {/* What a handyman quote should include */}
      <section style={s.wrap}>
        <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 16 }}>What every handyman quote should include</h2>
        <p style={{ ...s.muted, fontSize: 15, marginBottom: 32, lineHeight: 1.7 }}>
          A professional quote builds trust, reduces back-and-forth, and makes it easier for clients to say yes. Every handyman quote should include these sections:
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {[
            { num: "1", title: "Your business information", desc: "Business name, phone number, email, and optionally your license or insurance number." },
            { num: "2", title: "Client information", desc: "Client's name, service address, and contact details." },
            { num: "3", title: "Quote number and date", desc: "A unique quote number for tracking and the date the quote was issued." },
            { num: "4", title: "Line items with pricing", desc: "Each task or material as a separate line item with quantity, unit price, and total. Never lump everything into one number." },
            { num: "5", title: "Scope of work", desc: "A plain-English description of exactly what work will be done, what is included, and what is not." },
            { num: "6", title: "Payment terms", desc: "When payment is due — e.g., 'Due within 14 days of invoice' or 'Deposit required before work begins.'" },
            { num: "7", title: "Quote validity period", desc: "How long the quote is valid — typically 14–30 days. This protects you from price increases." },
            { num: "8", title: "Approval field", desc: "A way for the client to approve the quote — either a signature line or an online approval link." },
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

      {/* Example template */}
      <section style={{ ...s.wrap, paddingTop: 20 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 16 }}>Example handyman quote structure</h2>
        <div style={{ backgroundColor: "#16162a", border: "1px solid #222244", borderRadius: 16, padding: 32, fontFamily: "monospace" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 24, flexWrap: "wrap", gap: 12 }}>
            <div>
              <div style={{ fontWeight: 700, color: "#f97316", fontSize: 16 }}>Your Business Name</div>
              <div style={{ ...s.muted, fontSize: 13 }}>your@email.com · (555) 123-4567</div>
            </div>
            <div style={{ textAlign: "right" as const }}>
              <div style={{ fontWeight: 600, fontSize: 14 }}>Quote #SB-1042</div>
              <div style={{ ...s.muted, fontSize: 13 }}>Date: March 25, 2026</div>
              <div style={{ ...s.muted, fontSize: 13 }}>Valid for: 30 days</div>
            </div>
          </div>
          <div style={{ borderTop: "1px solid #222244", paddingTop: 20, marginBottom: 20 }}>
            <div style={{ fontWeight: 600, marginBottom: 8, fontSize: 14 }}>Client</div>
            <div style={{ ...s.muted, fontSize: 13 }}>Jane Smith — 123 Oak Street, Austin TX 78701</div>
          </div>
          <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: 20, fontSize: 13 }}>
            <thead>
              <tr style={{ borderBottom: "1px solid #222244" }}>
                {["Description", "Qty", "Unit Price", "Total"].map((h) => (
                  <th key={h} style={{ textAlign: "left" as const, padding: "8px 4px", color: "#8888aa", fontWeight: 600 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["Replace bathroom faucet", "1", "$120.00", "$120.00"],
                ["Faucet materials", "1", "$85.00", "$85.00"],
                ["Patch drywall hole (6\" x 6\")", "1", "$95.00", "$95.00"],
                ["Drywall patch materials", "1", "$25.00", "$25.00"],
              ].map((row) => (
                <tr key={row[0]} style={{ borderBottom: "1px solid #1a1a2e" }}>
                  {row.map((cell, i) => (
                    <td key={i} style={{ padding: "10px 4px", color: "#ccccdd" }}>{cell}</td>
                  ))}
                </tr>
              ))}
              <tr>
                <td colSpan={3} style={{ padding: "12px 4px", textAlign: "right" as const, fontWeight: 700, color: "#e0e0ef" }}>Total</td>
                <td style={{ padding: "12px 4px", fontWeight: 700, color: "#f97316" }}>$325.00</td>
              </tr>
            </tbody>
          </table>
          <div style={{ borderTop: "1px solid #222244", paddingTop: 16 }}>
            <div style={{ fontWeight: 600, marginBottom: 8, fontSize: 14 }}>Scope of Work</div>
            <p style={{ ...s.muted, fontSize: 13, lineHeight: 1.6 }}>
              Replace existing bathroom faucet with client-supplied fixture. Includes removal of old faucet, supply line replacement, and installation. Patch 6&rdquo;×6&rdquo; drywall hole in hallway wall — includes joint compound application, sanding, and primer coat. Final paint coat not included.
            </p>
          </div>
          <div style={{ borderTop: "1px solid #222244", paddingTop: 16, marginTop: 16 }}>
            <div style={{ ...s.muted, fontSize: 13 }}>Payment terms: Due within 14 days of invoice</div>
          </div>
        </div>
      </section>

      {/* Common mistakes */}
      <section style={{ ...s.wrap, paddingTop: 20 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 32 }}>Common handyman quote mistakes to avoid</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 16 }}>
          {[
            { icon: "❌", title: "Sending a number with no breakdown", desc: "A single total with no line items looks unprofessional and invites pushback on price." },
            { icon: "❌", title: "No scope of work", desc: "Without a description of what's included, clients assume more than you planned to deliver." },
            { icon: "❌", title: "No expiry date", desc: "Without a validity period, clients can accept a months-old quote at old prices." },
            { icon: "❌", title: "No payment terms", desc: "Clients who don't know when to pay will pay whenever they feel like it — which is often late." },
          ].map((item) => (
            <div key={item.title} style={s.card}>
              <div style={{ fontSize: 22, marginBottom: 10 }}>{item.icon}</div>
              <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 8 }}>{item.title}</h3>
              <p style={{ ...s.muted, fontSize: 13, lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why SnipBid instead of static template */}
      <section style={{ ...s.wrap, paddingTop: 20 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 16 }}>Why SnipBid beats a static template</h2>
        <div style={{ backgroundColor: "#16162a", border: "1px solid #222244", borderRadius: 16, overflow: "hidden" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
            <div style={{ padding: 24, borderRight: "1px solid #222244" }}>
              <div style={{ color: "#8888aa", fontSize: 13, fontWeight: 600, marginBottom: 16, textTransform: "uppercase" as const, letterSpacing: 1 }}>Static template</div>
              {["Fill in every field by hand", "Write scope of work from scratch", "No online approval", "No payment link", "Convert to invoice manually"].map((item) => (
                <div key={item} style={{ display: "flex", gap: 8, marginBottom: 10, color: "#555577", fontSize: 14 }}>
                  <span>✗</span><span>{item}</span>
                </div>
              ))}
            </div>
            <div style={{ padding: 24 }}>
              <div style={{ color: "#f97316", fontSize: 13, fontWeight: 600, marginBottom: 16, textTransform: "uppercase" as const, letterSpacing: 1 }}>SnipBid</div>
              {["Paste customer message — AI fills it", "Scope of work drafted automatically", "Client approves with one click", "Online payment link included", "Quote to invoice in one click"].map((item) => (
                <div key={item} style={{ display: "flex", gap: 8, marginBottom: 10, color: "#ccccdd", fontSize: 14 }}>
                  <span style={{ color: "#f97316" }}>✓</span><span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ ...s.wrap, paddingTop: 20 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 32 }}>Frequently asked questions</h2>
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
        <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 14 }}>Use this template in SnipBid — free</h2>
        <p style={{ ...s.muted, marginBottom: 32, fontSize: 15 }}>Stop filling in blank templates. Paste a customer message and let SnipBid build the quote for you.</p>
        <Link href="/signup" style={{ backgroundColor: "#f97316", color: "#fff", padding: "14px 36px", borderRadius: 10, textDecoration: "none", fontSize: 16, fontWeight: 700 }}>Use This Template in SnipBid</Link>
        <p style={{ color: "#555577", fontSize: 13, marginTop: 14 }}>Free 14-day trial. No credit card required.</p>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid #222244", padding: "24px 40px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
        <Link href="/" style={{ color: "#f97316", fontWeight: 700, textDecoration: "none" }}>SnipBid</Link>
        <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
          <Link href="/handyman-quote-software" style={{ color: "#8888aa", fontSize: 13, textDecoration: "none" }}>Handyman Quote Software</Link>
          <Link href="/quote-to-invoice-software" style={{ color: "#8888aa", fontSize: 13, textDecoration: "none" }}>Quote to Invoice</Link>
          <Link href="/blog/how-to-write-a-handyman-estimate" style={{ color: "#8888aa", fontSize: 13, textDecoration: "none" }}>How to Write an Estimate</Link>
        </div>
        <span style={{ color: "#555577", fontSize: 13 }}>© 2026 SnipBid</span>
      </footer>
    </div>
  );
}
