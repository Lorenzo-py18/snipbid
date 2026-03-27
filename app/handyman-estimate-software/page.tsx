import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Handyman Estimate Software for Small Businesses | SnipBid",
  description: "SnipBid helps handymen write professional estimates fast. Paste a customer message, get an editable estimate draft in seconds, then convert it to an invoice when approved.",
  alternates: { canonical: "https://snipbid.com/handyman-estimate-software" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is handyman estimate software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Handyman estimate software helps handymen and small home service businesses create professional estimates quickly from customer requests. Instead of writing estimates by hand, you enter job details and the software builds a formatted, editable document you can send to clients.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between an estimate and a quote?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An estimate is an informal approximation of cost. A quote is a formal offer with specific pricing. SnipBid generates detailed quote drafts — not vague estimates — so clients know exactly what they're approving.",
      },
    },
    {
      "@type": "Question",
      name: "How fast can I write a handyman estimate with SnipBid?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Typically under a minute. Paste the customer's message, review the AI-generated draft, adjust any pricing, and send. Most handymen go from raw customer text to sent estimate in 60–90 seconds.",
      },
    },
    {
      "@type": "Question",
      name: "Can I turn estimates into invoices in SnipBid?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. When a client approves your estimate, you can convert it to a payable invoice in one click. All line items and pricing carry over automatically.",
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

export default function HandymanEstimateSoftwarePage() {
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
        <div style={{ display: "inline-block", backgroundColor: "#f9731622", color: "#f97316", padding: "5px 14px", borderRadius: 20, fontSize: 13, marginBottom: 20, border: "1px solid #f9731644" }}>
          For handymen and small home service businesses
        </div>
        <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800, lineHeight: 1.15, maxWidth: 700, margin: "0 auto 20px" }}>
          Handyman Estimate Software for Small Businesses
        </h1>
        <p style={{ color: "#8888aa", fontSize: 17, maxWidth: 560, margin: "0 auto 16px", lineHeight: 1.7 }}>
          Write professional estimates in under a minute. Paste a customer message — SnipBid builds an editable draft with line items, scope of work, and pricing fields.
        </p>
        <p style={{ color: "#666688", fontSize: 14, marginBottom: 36 }}>AI drafts the estimate. You review every price before sending.</p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/signup" style={{ backgroundColor: "#f97316", color: "#fff", padding: "14px 32px", borderRadius: 10, textDecoration: "none", fontSize: 16, fontWeight: 700 }}>Start Free</Link>
          <Link href="/templates/handyman-quote-template" style={{ backgroundColor: "#16162a", color: "#e0e0ef", padding: "14px 32px", borderRadius: 10, textDecoration: "none", fontSize: 16, border: "1px solid #222244" }}>See Estimate Template</Link>
        </div>
        <p style={{ color: "#555577", fontSize: 13, marginTop: 14 }}>Free 14-day trial — no credit card required</p>
      </section>

      {/* Pain points */}
      <section style={s.wrap}>
        <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 32, textAlign: "center" }}>Why handymen need faster estimating</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
          {[
            { icon: "📱", title: "Requests come in from everywhere", desc: "Texts, Facebook, emails, referrals — every message is different and needs to be interpreted before you can even start writing." },
            { icon: "⏱️", title: "Manual estimating takes too long", desc: "Writing an estimate from scratch in Word or Excel takes 20–45 minutes. By then, another handyman has already responded." },
            { icon: "💸", title: "Slow estimates lose jobs", desc: "Customers often go with whoever responds first. A faster estimate means more jobs won." },
            { icon: "🔄", title: "Estimates and invoices stay disconnected", desc: "Most handymen re-enter the same job details when creating the invoice. That's wasted time on every single job." },
          ].map((item) => (
            <div key={item.title} style={s.card}>
              <div style={{ fontSize: 24, marginBottom: 10 }}>{item.icon}</div>
              <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 8 }}>{item.title}</h3>
              <p style={{ ...s.muted, fontSize: 13, lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section style={{ ...s.wrap, paddingTop: 20 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 36, textAlign: "center" }}>How SnipBid works</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
          {[
            { step: "1", title: "Paste the customer message", desc: "Drop in a text, email, or rough job note from any source." },
            { step: "2", title: "Get an estimate draft in seconds", desc: "SnipBid reads the message and builds a complete estimate with line items, scope, and pricing fields." },
            { step: "3", title: "Review your numbers", desc: "Adjust every line item and price before the customer sees anything. You stay in full control." },
            { step: "4", title: "Send it — then invoice when approved", desc: "One click converts your estimate into a payable invoice. No rewriting." },
          ].map((item) => (
            <div key={item.step} style={s.card}>
              <div style={{ width: 34, height: 34, backgroundColor: "#f9731622", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", color: "#f97316", fontWeight: 700, marginBottom: 12 }}>{item.step}</div>
              <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 8 }}>{item.title}</h3>
              <p style={{ ...s.muted, fontSize: 13, lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section style={{ ...s.wrap, paddingTop: 20 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 32, textAlign: "center" }}>Frequently asked questions</h2>
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
        <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 14 }}>Start writing faster estimates today</h2>
        <p style={{ ...s.muted, marginBottom: 32, fontSize: 15 }}>Free 14-day trial. No credit card required.</p>
        <Link href="/signup" style={{ backgroundColor: "#f97316", color: "#fff", padding: "14px 36px", borderRadius: 10, textDecoration: "none", fontSize: 16, fontWeight: 700 }}>Start Free</Link>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid #222244", padding: "24px 40px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
        <Link href="/" style={{ color: "#f97316", fontWeight: 700, textDecoration: "none" }}>SnipBid</Link>
        <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
          <Link href="/handyman-quote-software" style={{ color: "#8888aa", fontSize: 13, textDecoration: "none" }}>Handyman Quote Software</Link>
          <Link href="/quote-to-invoice-software" style={{ color: "#8888aa", fontSize: 13, textDecoration: "none" }}>Quote to Invoice</Link>
          <Link href="/templates/handyman-quote-template" style={{ color: "#8888aa", fontSize: 13, textDecoration: "none" }}>Quote Template</Link>
          <Link href="/blog/how-to-write-a-handyman-estimate" style={{ color: "#8888aa", fontSize: 13, textDecoration: "none" }}>How to Write an Estimate</Link>
        </div>
        <span style={{ color: "#555577", fontSize: 13 }}>© 2026 SnipBid</span>
      </footer>
    </div>
  );
}
