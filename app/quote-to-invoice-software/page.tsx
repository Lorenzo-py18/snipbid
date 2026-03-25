import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quote to Invoice Software for Small Service Businesses | SnipBid",
  description: "Create a professional quote fast, send it to your client, and convert it into an invoice when approved. Built for handymen and small home service businesses.",
  alternates: { canonical: "https://snipbid.com/quote-to-invoice-software" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is quote to invoice software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Quote to invoice software lets you create a professional quote, send it to your client, and convert it into a payable invoice once the job is approved — all in one place. It eliminates the need to re-enter job details or switch between separate tools for quoting and invoicing.",
      },
    },
    {
      "@type": "Question",
      name: "How does SnipBid convert a quote to an invoice?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "When a client approves your quote in SnipBid, you can click 'Convert to Invoice' and all the line items, pricing, and job details are carried over automatically. The invoice is ready to send immediately — with an online payment link included.",
      },
    },
    {
      "@type": "Question",
      name: "Do clients need to create an account to approve a quote or pay an invoice?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Clients receive a simple link. They can view the quote, approve or decline it, and pay the invoice — all without creating an account. No friction for your clients.",
      },
    },
    {
      "@type": "Question",
      name: "Is SnipBid a full CRM or accounting platform?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. SnipBid is deliberately focused on one workflow: quote to invoice. It is not a CRM, scheduling tool, or accounting suite. It does one job well — helping small home service businesses turn customer requests into quotes and invoices faster.",
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

export default function QuoteToInvoiceSoftwarePage() {
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
        <div style={{ display: "inline-block", backgroundColor: "#f9731622", color: "#f97316", padding: "5px 14px", borderRadius: 20, fontSize: 13, marginBottom: 20, border: "1px solid #f9731644" }}>
          Not a CRM. Just a faster quote-to-invoice workflow.
        </div>
        <h1 style={{ fontSize: "clamp(32px, 5vw, 54px)", fontWeight: 800, lineHeight: 1.15, maxWidth: 700, margin: "0 auto 20px" }}>
          Quote to Invoice Software for Small Service Businesses
        </h1>
        <p style={{ color: "#8888aa", fontSize: 18, maxWidth: 560, margin: "0 auto 16px", lineHeight: 1.7 }}>
          Create a professional quote, send it to your client, and convert it into a payable invoice when approved — without switching tools or retyping anything.
        </p>
        <p style={{ color: "#666688", fontSize: 14, marginBottom: 36 }}>AI drafts the quote. You review the pricing before sending.</p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/signup" style={{ backgroundColor: "#f97316", color: "#fff", padding: "14px 32px", borderRadius: 10, textDecoration: "none", fontSize: 16, fontWeight: 700 }}>Start Free</Link>
          <Link href="/handyman-quote-software" style={{ backgroundColor: "#16162a", color: "#e0e0ef", padding: "14px 32px", borderRadius: 10, textDecoration: "none", fontSize: 16, border: "1px solid #222244" }}>Handyman Quote Software</Link>
        </div>
        <p style={{ color: "#555577", fontSize: 13, marginTop: 14 }}>Free 14-day trial — no credit card required</p>
      </section>

      {/* Why fragmented workflows delay payment */}
      <section style={s.wrap}>
        <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 12, textAlign: "center" }}>Why disconnected quoting and invoicing slows you down</h2>
        <p style={{ ...s.muted, textAlign: "center", fontSize: 15, marginBottom: 40 }}>Most small service businesses use completely separate tools for quotes and invoices. That gap costs time and money.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 16 }}>
          {[
            { icon: "🔀", title: "You re-enter data twice", desc: "Quote in one tool, invoice in another. Same job details entered twice. Every. Single. Time." },
            { icon: "⏳", title: "Delays between quote and invoice", desc: "The longer the gap between approval and invoice, the longer you wait to get paid." },
            { icon: "📋", title: "Inconsistent documents", desc: "When quotes and invoices are in different formats, clients get confused and trust you less." },
            { icon: "💸", title: "No online payment option", desc: "Sending a PDF invoice with no payment link means chasing clients for checks or bank transfers." },
          ].map((item) => (
            <div key={item.title} style={s.card}>
              <div style={{ fontSize: 24, marginBottom: 10 }}>{item.icon}</div>
              <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 8 }}>{item.title}</h3>
              <p style={{ ...s.muted, fontSize: 13, lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SnipBid workflow */}
      <section style={{ ...s.wrap, paddingTop: 20 }}>
        <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 40, textAlign: "center" }}>The SnipBid quote-to-invoice workflow</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {[
            { step: "1", title: "Paste the customer request", desc: "Paste any customer message — text, email, or notes. SnipBid reads it and builds a quote draft automatically." },
            { step: "2", title: "Review and send the quote", desc: "Adjust line items and pricing, then send the quote to your client as a link or email." },
            { step: "3", title: "Client approves online", desc: "Your client clicks the link, reviews the quote, and approves it — no account needed." },
            { step: "4", title: "Convert to invoice in one click", desc: "Click 'Convert to Invoice.' All line items, pricing, and details carry over. Add a payment link and send." },
            { step: "5", title: "Client pays online", desc: "Your client pays directly from the invoice link via Stripe. You get notified when payment clears." },
          ].map((item) => (
            <div key={item.step} style={{ ...s.card, display: "flex", gap: 16, alignItems: "flex-start" }}>
              <div style={{ width: 32, height: 32, minWidth: 32, backgroundColor: "#f9731622", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", color: "#f97316", fontWeight: 700, fontSize: 14 }}>{item.step}</div>
              <div>
                <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 6 }}>{item.title}</h3>
                <p style={{ ...s.muted, fontSize: 13, lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section style={{ ...s.wrap, paddingTop: 20 }}>
        <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 32, textAlign: "center" }}>What&apos;s included</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
          {[
            { icon: "📥", title: "Paste & Go", desc: "Turn any customer message into a quote draft instantly." },
            { icon: "✏️", title: "Editable quotes", desc: "Full control over every line item, price, and description." },
            { icon: "🔁", title: "One-click conversion", desc: "Quote to invoice in one click — no re-entry." },
            { icon: "💳", title: "Online payments", desc: "Clients pay directly from the invoice link." },
            { icon: "📤", title: "Email delivery", desc: "Send quotes and invoices directly to clients." },
            { icon: "📄", title: "PDF export", desc: "Download polished PDFs for any quote or invoice." },
          ].map((f) => (
            <div key={f.title} style={s.card}>
              <div style={{ fontSize: 24, marginBottom: 10 }}>{f.icon}</div>
              <h4 style={{ fontSize: 14, fontWeight: 600, marginBottom: 6 }}>{f.title}</h4>
              <p style={{ ...s.muted, fontSize: 13, lineHeight: 1.5, margin: 0 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section style={{ ...s.wrap, paddingTop: 20 }}>
        <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 32, textAlign: "center" }}>Frequently asked questions</h2>
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
        <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 14 }}>Ready to close the gap between quote and payment?</h2>
        <p style={{ ...s.muted, marginBottom: 32, fontSize: 15 }}>Try SnipBid free and see how fast the quote-to-invoice workflow can be.</p>
        <Link href="/signup" style={{ backgroundColor: "#f97316", color: "#fff", padding: "14px 36px", borderRadius: 10, textDecoration: "none", fontSize: 16, fontWeight: 700 }}>Start Free</Link>
        <p style={{ color: "#555577", fontSize: 13, marginTop: 14 }}>14-day free trial. No credit card required.</p>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid #222244", padding: "24px 40px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
        <Link href="/" style={{ color: "#f97316", fontWeight: 700, textDecoration: "none" }}>SnipBid</Link>
        <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
          <Link href="/handyman-quote-software" style={{ color: "#8888aa", fontSize: 13, textDecoration: "none" }}>Handyman Quote Software</Link>
          <Link href="/templates/handyman-quote-template" style={{ color: "#8888aa", fontSize: 13, textDecoration: "none" }}>Quote Template</Link>
          <Link href="/blog/quote-vs-invoice-for-handymen" style={{ color: "#8888aa", fontSize: 13, textDecoration: "none" }}>Quote vs Invoice</Link>
        </div>
        <span style={{ color: "#555577", fontSize: 13 }}>© 2026 SnipBid</span>
      </footer>
    </div>
  );
}
