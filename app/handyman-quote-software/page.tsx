import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Handyman Quote Software for Small Businesses",
  description: "Turn customer texts and job notes into clean, editable handyman quotes in minutes. Built for solo pros and small home service teams.",
  alternates: { canonical: "https://snipbid.com/handyman-quote-software" },
  openGraph: {
    title: "Handyman Quote Software for Small Businesses | SnipBid",
    description: "Turn customer texts and job notes into clean, editable handyman quotes in minutes. Built for solo pros and small home service teams.",
    url: "https://snipbid.com/handyman-quote-software",
    siteName: "SnipBid",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Handyman Quote Software for Small Businesses | SnipBid",
    description: "Turn customer texts into professional quotes in minutes. Free to try.",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is handyman quote software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Handyman quote software is a tool that helps handymen and small home service businesses create professional quotes quickly. Instead of writing estimates by hand or using generic templates, quote software lets you enter job details, generate a professional quote, and send it to clients — often in minutes.",
      },
    },
    {
      "@type": "Question",
      name: "How does SnipBid help handymen create quotes faster?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SnipBid lets you paste a customer text message or job note, and AI automatically extracts the job details and builds a professional quote draft. You review and adjust the pricing and line items, then send the quote directly to your client by link or email.",
      },
    },
    {
      "@type": "Question",
      name: "Can I convert a quote into an invoice in SnipBid?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. When a client approves your quote, you can convert it into a payable invoice in one click. SnipBid carries over all the line items, pricing, and job details — no need to start over.",
      },
    },
    {
      "@type": "Question",
      name: "Does SnipBid work for solo handymen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. SnipBid is built specifically for solo owner-operators and small 1–5 person crews who need a faster, more professional quoting workflow without the complexity of a full CRM.",
      },
    },
    {
      "@type": "Question",
      name: "Is SnipBid free to try?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. SnipBid offers a free 14-day trial with 10 quotes included. No credit card is required to start.",
      },
    },
  ],
};

const styles = {
  page: { backgroundColor: "#0e0e1a", color: "#e0e0ef", minHeight: "100vh", fontFamily: "Inter, sans-serif" },
  nav: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 40px", borderBottom: "1px solid #222244" } as React.CSSProperties,
  section: { padding: "60px 20px", maxWidth: 860, margin: "0 auto" } as React.CSSProperties,
  h2: { fontSize: 28, fontWeight: 700, marginBottom: 16 } as React.CSSProperties,
  card: { backgroundColor: "#16162a", border: "1px solid #222244", borderRadius: 14, padding: 24 } as React.CSSProperties,
  muted: { color: "#8888aa" } as React.CSSProperties,
};

export default function HandymanQuoteSoftwarePage() {
  return (
    <div style={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Nav */}
      <nav style={styles.nav}>
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
        <h1 style={{ fontSize: "clamp(32px, 5vw, 54px)", fontWeight: 800, lineHeight: 1.15, maxWidth: 700, margin: "0 auto 20px" }}>
          Handyman Quote Software for Small Businesses
        </h1>
        <p style={{ color: "#8888aa", fontSize: 18, maxWidth: 560, margin: "0 auto 16px", lineHeight: 1.7 }}>
          Turn customer texts and job notes into editable professional quotes — then convert them into invoices when the job is approved.
        </p>
        <p style={{ color: "#666688", fontSize: 14, marginBottom: 36 }}>AI drafts the quote. You review the pricing before sending.</p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/signup" style={{ backgroundColor: "#f97316", color: "#fff", padding: "14px 32px", borderRadius: 10, textDecoration: "none", fontSize: 16, fontWeight: 700 }}>Start Free</Link>
          <Link href="/templates/handyman-quote-template" style={{ backgroundColor: "#16162a", color: "#e0e0ef", padding: "14px 32px", borderRadius: 10, textDecoration: "none", fontSize: 16, border: "1px solid #222244" }}>See Quote Template</Link>
        </div>
        <p style={{ color: "#555577", fontSize: 13, marginTop: 14 }}>Free 14-day trial — no credit card required</p>
      </section>

      {/* Why handymen need faster quoting */}
      <section style={styles.section}>
        <h2 style={{ ...styles.h2, textAlign: "center" }}>Why handymen need faster quoting</h2>
        <p style={{ ...styles.muted, textAlign: "center", marginBottom: 40, fontSize: 15 }}>Most handymen lose jobs not because of price — but because they quote too slowly.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 16 }}>
          {[
            { icon: "📱", title: "Requests come from everywhere", desc: "Texts, Facebook messages, phone calls, referrals — there's no standard format. You're constantly re-reading and re-interpreting requests." },
            { icon: "⏱️", title: "Manual quoting takes too long", desc: "Building a quote from scratch in Word, Excel, or Google Docs takes 20–45 minutes per job. By then, the customer has already called someone else." },
            { icon: "📄", title: "Generic templates look unprofessional", desc: "Static templates have no scope of work, no warranty terms, and no structured line items. Clients get confused and trust you less." },
            { icon: "🔄", title: "Quotes and invoices are disconnected", desc: "Most handymen quote in one tool and invoice in another — or re-type everything. That's extra work after every single job." },
          ].map((item) => (
            <div key={item.title} style={styles.card}>
              <div style={{ fontSize: 24, marginBottom: 10 }}>{item.icon}</div>
              <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 8 }}>{item.title}</h3>
              <p style={{ ...styles.muted, fontSize: 13, lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How SnipBid works */}
      <section style={{ ...styles.section, paddingTop: 20 }}>
        <h2 style={{ ...styles.h2, textAlign: "center" }}>How SnipBid works for handymen</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16, marginTop: 36 }}>
          {[
            { step: "1", title: "Paste the customer message", desc: "Paste a text, email, or rough job note directly into SnipBid." },
            { step: "2", title: "AI builds the quote draft", desc: "SnipBid reads the message and generates a professional quote with line items, scope of work, and terms." },
            { step: "3", title: "Review your pricing", desc: "Check every line item and price. Adjust anything before the client sees it — you stay in full control." },
            { step: "4", title: "Send, approve, and invoice", desc: "Email the quote to your client. When approved, convert it to a payable invoice in one click." },
          ].map((item) => (
            <div key={item.step} style={styles.card}>
              <div style={{ width: 34, height: 34, backgroundColor: "#f9731622", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", color: "#f97316", fontWeight: 700, marginBottom: 12 }}>{item.step}</div>
              <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 8 }}>{item.title}</h3>
              <p style={{ ...styles.muted, fontSize: 13, lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Before/After */}
      <section style={{ ...styles.section, paddingTop: 20 }}>
        <h2 style={{ ...styles.h2, textAlign: "center" }}>From customer message to client-ready quote</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 0, borderRadius: 16, overflow: "hidden", border: "1px solid #222244", marginTop: 32 }}>
          <div style={{ backgroundColor: "#16162a", padding: 28 }}>
            <div style={{ color: "#8888aa", fontSize: 12, fontWeight: 600, textTransform: "uppercase" as const, letterSpacing: 1, marginBottom: 14 }}>Customer message</div>
            <div style={{ backgroundColor: "#0e0e1a", borderRadius: 10, padding: 18, border: "1px solid #222244" }}>
              <p style={{ color: "#ccccdd", fontSize: 14, lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>
                &ldquo;Hi, I need help replacing a bathroom faucet and patching a small drywall hole. I&apos;m available Thursday afternoon. Can you send me a quote?&rdquo;
              </p>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "0 8px", backgroundColor: "#0e0e1a" }}>
            <span style={{ color: "#f97316", fontSize: 24 }}>→</span>
          </div>
          <div style={{ backgroundColor: "#16162a", padding: 28, borderLeft: "1px solid #222244" }}>
            <div style={{ color: "#f97316", fontSize: 12, fontWeight: 600, textTransform: "uppercase" as const, letterSpacing: 1, marginBottom: 14 }}>SnipBid quote draft</div>
            {[
              "Replace bathroom faucet — labor + materials",
              "Patch drywall hole — materials + finish",
              "Scope of work written professionally",
              "Editable pricing and terms",
              "Ready to review and send",
            ].map((line) => (
              <div key={line} style={{ display: "flex", gap: 8, marginBottom: 10, alignItems: "flex-start" }}>
                <span style={{ color: "#f97316", marginTop: 1 }}>✓</span>
                <span style={{ fontSize: 13, color: "#ccccdd" }}>{line}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{ ...styles.section, paddingTop: 20 }}>
        <h2 style={{ ...styles.h2, textAlign: "center" }}>Everything handymen need to quote faster</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16, marginTop: 32 }}>
          {[
            { icon: "📥", title: "Paste & Go", desc: "Paste any customer message — SnipBid handles the rest." },
            { icon: "✏️", title: "Editable drafts", desc: "Review every line item and price before sending." },
            { icon: "🔁", title: "Quote to invoice", desc: "Convert approved quotes to invoices in one click." },
            { icon: "📤", title: "Send by link or email", desc: "Share a clean quote link or email it directly." },
            { icon: "💳", title: "Online payments", desc: "Clients pay from the invoice link via Stripe." },
            { icon: "📄", title: "PDF export", desc: "Download a polished quote or invoice PDF." },
          ].map((f) => (
            <div key={f.title} style={styles.card}>
              <div style={{ fontSize: 24, marginBottom: 10 }}>{f.icon}</div>
              <h4 style={{ fontSize: 14, fontWeight: 600, marginBottom: 6 }}>{f.title}</h4>
              <p style={{ ...styles.muted, fontSize: 13, lineHeight: 1.5, margin: 0 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section style={{ ...styles.section, paddingTop: 20 }}>
        <h2 style={{ ...styles.h2, textAlign: "center" }}>Frequently asked questions</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 32 }}>
          {faqSchema.mainEntity.map((q) => (
            <div key={q.name} style={styles.card}>
              <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 8 }}>{q.name}</h3>
              <p style={{ ...styles.muted, fontSize: 14, lineHeight: 1.6, margin: 0 }}>{q.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ textAlign: "center", padding: "40px 20px 80px" }}>
        <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 14 }}>Start quoting faster today</h2>
        <p style={{ ...styles.muted, marginBottom: 32, fontSize: 15 }}>Join handymen already using SnipBid to win more jobs with less paperwork.</p>
        <Link href="/signup" style={{ backgroundColor: "#f97316", color: "#fff", padding: "14px 36px", borderRadius: 10, textDecoration: "none", fontSize: 16, fontWeight: 700 }}>Start Free</Link>
        <p style={{ color: "#555577", fontSize: 13, marginTop: 14 }}>14-day free trial. No credit card required.</p>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid #222244", padding: "24px 40px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
        <Link href="/" style={{ color: "#f97316", fontWeight: 700, textDecoration: "none" }}>SnipBid</Link>
        <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
          <Link href="/quote-to-invoice-software" style={{ color: "#8888aa", fontSize: 13, textDecoration: "none" }}>Quote to Invoice Software</Link>
          <Link href="/templates/handyman-quote-template" style={{ color: "#8888aa", fontSize: 13, textDecoration: "none" }}>Handyman Quote Template</Link>
          <Link href="/blog/how-to-write-a-handyman-estimate" style={{ color: "#8888aa", fontSize: 13, textDecoration: "none" }}>How to Write an Estimate</Link>
        </div>
        <span style={{ color: "#555577", fontSize: 13 }}>© 2026 SnipBid</span>
      </footer>
    </div>
  );
}
