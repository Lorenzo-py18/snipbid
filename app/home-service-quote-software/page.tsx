import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Service Quote Software for Small Businesses",
  description: "SnipBid is home service quote software for small businesses. Turn customer texts and job notes into professional quotes, then convert them into invoices when approved.",
  alternates: { canonical: "https://snipbid.com/home-service-quote-software" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is home service quote software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Home service quote software helps small home service businesses — handymen, repair crews, cleaners, and other service providers — create and send professional quotes quickly. It replaces manual quoting in Word, Excel, or generic templates.",
      },
    },
    {
      "@type": "Question",
      name: "Who is SnipBid built for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SnipBid is built for handymen, solo contractors, and small home service businesses with 1–5 person crews. It is not a CRM or scheduling platform — it focuses on one job: turning customer requests into quotes and invoices fast.",
      },
    },
    {
      "@type": "Question",
      name: "Does SnipBid work for different types of home service jobs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. SnipBid works for any small home service job — repairs, installations, maintenance, cleaning, and more. You describe the job in the customer message and SnipBid builds the quote draft around it.",
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

export default function HomeServiceQuoteSoftwarePage() {
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
          Not a CRM. Just faster quotes and invoices.
        </div>
        <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800, lineHeight: 1.15, maxWidth: 700, margin: "0 auto 20px" }}>
          Home Service Quote Software for Small Businesses
        </h1>
        <p style={{ color: "#8888aa", fontSize: 17, maxWidth: 560, margin: "0 auto 16px", lineHeight: 1.7 }}>
          Turn customer texts, emails, and job notes into professional quotes — then convert them into invoices when approved. Built for small home service businesses that need to move fast.
        </p>
        <p style={{ color: "#666688", fontSize: 14, marginBottom: 36 }}>AI drafts the quote. You review every price before sending.</p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/signup" style={{ backgroundColor: "#f97316", color: "#fff", padding: "14px 32px", borderRadius: 10, textDecoration: "none", fontSize: 16, fontWeight: 700 }}>Start Free</Link>
          <Link href="/handyman-quote-software" style={{ backgroundColor: "#16162a", color: "#e0e0ef", padding: "14px 32px", borderRadius: 10, textDecoration: "none", fontSize: 16, border: "1px solid #222244" }}>Handyman Quote Software</Link>
        </div>
        <p style={{ color: "#555577", fontSize: 13, marginTop: 14 }}>Free 14-day trial — no credit card required</p>
      </section>

      {/* Who it's for */}
      <section style={s.wrap}>
        <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 40, textAlign: "center" }}>Who SnipBid is built for</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
          {[
            { icon: "🔧", title: "Handymen", desc: "Small repair jobs, installations, maintenance — quote and invoice without the overhead." },
            { icon: "🏠", title: "Home repair crews", desc: "1–5 person crews that quote from customer texts and job notes." },
            { icon: "🪛", title: "Solo contractors", desc: "Independent operators who need professional documents without a full office system." },
            { icon: "📞", title: "Service businesses that quote by request", desc: "Any small home service business that fields quote requests by text, email, or phone." },
          ].map((item) => (
            <div key={item.title} style={s.card}>
              <div style={{ fontSize: 26, marginBottom: 12 }}>{item.icon}</div>
              <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 8 }}>{item.title}</h3>
              <p style={{ ...s.muted, fontSize: 13, lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section style={{ ...s.wrap, paddingTop: 20 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 36, textAlign: "center" }}>How it works</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
          {[
            { step: "1", title: "Paste the customer request", desc: "Any message format — text, email, or notes. SnipBid handles it." },
            { step: "2", title: "AI drafts the quote", desc: "Line items, scope, and pricing fields — built from the customer's message." },
            { step: "3", title: "Review and send", desc: "You control every number before the client sees anything." },
            { step: "4", title: "Convert to invoice when approved", desc: "One click. No rewriting. Client pays online." },
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
        <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 14 }}>Try SnipBid free for 14 days</h2>
        <p style={{ ...s.muted, marginBottom: 32, fontSize: 15 }}>No credit card required.</p>
        <Link href="/signup" style={{ backgroundColor: "#f97316", color: "#fff", padding: "14px 36px", borderRadius: 10, textDecoration: "none", fontSize: 16, fontWeight: 700 }}>Start Free</Link>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid #222244", padding: "24px 40px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
        <Link href="/" style={{ color: "#f97316", fontWeight: 700, textDecoration: "none" }}>SnipBid</Link>
        <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
          <Link href="/handyman-quote-software" style={{ color: "#8888aa", fontSize: 13, textDecoration: "none" }}>Handyman Quote Software</Link>
          <Link href="/handyman-estimate-software" style={{ color: "#8888aa", fontSize: 13, textDecoration: "none" }}>Handyman Estimate Software</Link>
          <Link href="/quote-to-invoice-software" style={{ color: "#8888aa", fontSize: 13, textDecoration: "none" }}>Quote to Invoice</Link>
        </div>
        <span style={{ color: "#555577", fontSize: 13 }}>© 2026 SnipBid</span>
      </footer>
    </div>
  );
}
