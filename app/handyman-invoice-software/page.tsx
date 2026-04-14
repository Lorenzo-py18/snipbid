import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Handyman Invoice Software That Starts With a Better Quote",
  description: "SnipBid is handyman invoice software built around the full quote-to-invoice workflow. Create a quote, get it approved, and convert it to an invoice — without retyping anything.",
  alternates: { canonical: "https://snipbid.com/handyman-invoice-software" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is handyman invoice software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Handyman invoice software helps handymen create, send, and track invoices for completed or approved jobs. The best handyman invoice tools also connect to your quoting workflow so you don't have to re-enter job details when it's time to invoice.",
      },
    },
    {
      "@type": "Question",
      name: "Can clients pay invoices online with SnipBid?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. SnipBid invoices include an online payment link powered by Stripe. Clients can pay by card directly from the invoice — no account needed.",
      },
    },
    {
      "@type": "Question",
      name: "How does SnipBid convert a quote into an invoice?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "When a client approves your quote, you click 'Convert to Invoice' and all the line items, pricing, and job details carry over automatically. The invoice is ready to send in seconds.",
      },
    },
    {
      "@type": "Question",
      name: "Is SnipBid only for invoicing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. SnipBid handles the full workflow: customer request → quote draft → client approval → invoice → online payment. It's built to reduce the gap between quoting and getting paid.",
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

export default function HandymanInvoiceSoftwarePage() {
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
          Built for handymen and solo operators
        </div>
        <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800, lineHeight: 1.15, maxWidth: 720, margin: "0 auto 20px" }}>
          Handyman Invoice Software Built Around Faster Quotes
        </h1>
        <p style={{ color: "#8888aa", fontSize: 17, maxWidth: 560, margin: "0 auto 16px", lineHeight: 1.7 }}>
          Create a quote, send it to your client, and convert it into a payable invoice when they approve — without retyping anything. Clients pay online via Stripe.
        </p>
        <p style={{ color: "#666688", fontSize: 14, marginBottom: 36 }}>Quote first. Invoice faster. Get paid sooner.</p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/signup" style={{ backgroundColor: "#f97316", color: "#fff", padding: "14px 32px", borderRadius: 10, textDecoration: "none", fontSize: 16, fontWeight: 700 }}>Start Free</Link>
          <Link href="/quote-to-invoice-software" style={{ backgroundColor: "#16162a", color: "#e0e0ef", padding: "14px 32px", borderRadius: 10, textDecoration: "none", fontSize: 16, border: "1px solid #222244" }}>See Quote-to-Invoice Workflow</Link>
        </div>
        <p style={{ color: "#555577", fontSize: 13, marginTop: 14 }}>Free 14-day trial — no credit card required</p>
      </section>

      {/* Why quotes and invoices should be connected */}
      <section style={s.wrap}>
        <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 16, textAlign: "center" }}>Why quotes and invoices should be connected</h2>
        <p style={{ ...s.muted, textAlign: "center", fontSize: 15, marginBottom: 40 }}>Most handymen quote in one place and invoice in another. That gap wastes time and slows down payment.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
          {[
            { icon: "🔀", title: "No more double data entry", desc: "When your invoice is built from your approved quote, you never re-enter job details. Line items and pricing carry over automatically." },
            { icon: "⚡", title: "Invoice faster after every job", desc: "The sooner you invoice after completing a job, the sooner you get paid. One click is all it takes." },
            { icon: "✅", title: "Consistent documents build trust", desc: "Clients compare the invoice to what they approved. When the numbers match, payment disputes disappear." },
            { icon: "💳", title: "Online payments reduce chasing", desc: "Every invoice includes a Stripe payment link. Clients pay by card from any device — no checks, no bank transfers." },
          ].map((item) => (
            <div key={item.title} style={s.card}>
              <div style={{ fontSize: 24, marginBottom: 10 }}>{item.icon}</div>
              <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 8 }}>{item.title}</h3>
              <p style={{ ...s.muted, fontSize: 13, lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Workflow */}
      <section style={{ ...s.wrap, paddingTop: 20 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 36, textAlign: "center" }}>From customer request to paid invoice</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {[
            { step: "1", title: "Paste the customer message", desc: "Paste any customer text, email, or note. SnipBid extracts the job details and builds a quote draft automatically." },
            { step: "2", title: "Review and send the quote", desc: "Adjust line items and pricing, then send the quote as a link or email." },
            { step: "3", title: "Client approves online", desc: "Your client clicks the link and approves the quote. No account needed." },
            { step: "4", title: "Convert to invoice in one click", desc: "All line items and pricing carry over. Add a Stripe payment link and send." },
            { step: "5", title: "Client pays online", desc: "Your client pays by card directly from the invoice. You get notified when payment clears." },
          ].map((item) => (
            <div key={item.step} style={{ ...s.card, display: "flex", gap: 16 }}>
              <div style={{ width: 32, height: 32, minWidth: 32, backgroundColor: "#f9731622", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", color: "#f97316", fontWeight: 700, fontSize: 14 }}>{item.step}</div>
              <div>
                <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 6 }}>{item.title}</h3>
                <p style={{ ...s.muted, fontSize: 13, lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
              </div>
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
        <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 14 }}>Start quoting and invoicing faster</h2>
        <p style={{ ...s.muted, marginBottom: 32, fontSize: 15 }}>Free 14-day trial. No credit card required.</p>
        <Link href="/signup" style={{ backgroundColor: "#f97316", color: "#fff", padding: "14px 36px", borderRadius: 10, textDecoration: "none", fontSize: 16, fontWeight: 700 }}>Start Free</Link>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid #222244", padding: "24px 40px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
        <Link href="/" style={{ color: "#f97316", fontWeight: 700, textDecoration: "none" }}>SnipBid</Link>
        <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
          <Link href="/handyman-quote-software" style={{ color: "#8888aa", fontSize: 13, textDecoration: "none" }}>Handyman Quote Software</Link>
          <Link href="/quote-to-invoice-software" style={{ color: "#8888aa", fontSize: 13, textDecoration: "none" }}>Quote to Invoice</Link>
          <Link href="/templates/handyman-invoice-template" style={{ color: "#8888aa", fontSize: 13, textDecoration: "none" }}>Invoice Template</Link>
          <Link href="/blog/quote-vs-invoice-for-handymen" style={{ color: "#8888aa", fontSize: 13, textDecoration: "none" }}>Quote vs Invoice</Link>
        </div>
        <span style={{ color: "#555577", fontSize: 13 }}>© 2026 SnipBid</span>
      </footer>
    </div>
  );
}
