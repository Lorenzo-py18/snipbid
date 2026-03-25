import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SnipBid — Turn Customer Requests Into Professional Quotes in Under a Minute",
  description: "SnipBid helps handymen and small home service businesses turn texts, notes, and job details into editable quotes — then convert them into invoices when approved. AI drafts the quote. You review the pricing before sending.",
  alternates: { canonical: "https://snipbid.com" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "SnipBid",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: "https://snipbid.com",
  description: "A quote-to-invoice workflow tool for handymen and small home service businesses. Turn customer requests into professional quotes in under a minute.",
  offers: [
    { "@type": "Offer", price: "0", priceCurrency: "USD", name: "Free Trial" },
    { "@type": "Offer", price: "19", priceCurrency: "USD", name: "Starter", billingIncrement: "month" },
    { "@type": "Offer", price: "39", priceCurrency: "USD", name: "Pro", billingIncrement: "month" },
  ],
};

export default function HomePage() {
  return (
    <div style={{ backgroundColor: "#0e0e1a", color: "#e0e0ef", minHeight: "100vh", fontFamily: "Inter, sans-serif" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Nav */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 40px", borderBottom: "1px solid #222244" }}>
        <span style={{ color: "#f97316", fontWeight: 700, fontSize: 20 }}>SnipBid</span>
        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <Link href="/login" style={{ color: "#8888aa", textDecoration: "none", fontSize: 14 }}>Sign In</Link>
          <Link href="/signup" style={{ backgroundColor: "#f97316", color: "#fff", padding: "8px 20px", borderRadius: 8, textDecoration: "none", fontSize: 14, fontWeight: 600 }}>
            Start Free
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ textAlign: "center", padding: "80px 20px 60px" }}>
        <div style={{ display: "inline-block", backgroundColor: "#f9731622", color: "#f97316", padding: "6px 16px", borderRadius: 20, fontSize: 13, marginBottom: 24, border: "1px solid #f9731644" }}>
          Not a CRM. Not scheduling software. Just a faster way to draft quotes and send invoices.
        </div>
        <h1 style={{ fontSize: "clamp(36px, 6vw, 60px)", fontWeight: 800, lineHeight: 1.1, marginBottom: 20, maxWidth: 720, margin: "0 auto 20px" }}>
          Turn customer requests into professional quotes{" "}
          <span style={{ color: "#f97316" }}>in under a minute</span>
        </h1>
        <p style={{ color: "#8888aa", fontSize: 18, maxWidth: 580, margin: "0 auto 16px", lineHeight: 1.7 }}>
          SnipBid helps handymen and small home service businesses turn texts, notes, and job details into editable quotes — then convert them into invoices when approved.
        </p>
        <p style={{ color: "#6666888", fontSize: 14, marginBottom: 40 }}>
          AI drafts the quote. You review the pricing before sending.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/signup" style={{ backgroundColor: "#f97316", color: "#fff", padding: "14px 32px", borderRadius: 10, textDecoration: "none", fontSize: 16, fontWeight: 700 }}>
            Start Free
          </Link>
          <a href="#how-it-works" style={{ backgroundColor: "#16162a", color: "#e0e0ef", padding: "14px 32px", borderRadius: 10, textDecoration: "none", fontSize: 16, border: "1px solid #222244" }}>
            See How It Works
          </a>
        </div>
        <p style={{ color: "#555577", fontSize: 13, marginTop: 16 }}>Free to start — no credit card required</p>
      </section>

      {/* Before / After */}
      <section id="how-it-works" style={{ padding: "60px 20px", maxWidth: 860, margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", fontSize: 28, fontWeight: 700, marginBottom: 12 }}>See how it works</h2>
        <p style={{ textAlign: "center", color: "#8888aa", fontSize: 15, marginBottom: 40 }}>A rough customer message becomes a client-ready quote in seconds.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 0, borderRadius: 16, overflow: "hidden", border: "1px solid #222244" }}>
          {/* Before */}
          <div style={{ backgroundColor: "#16162a", padding: 32 }}>
            <div style={{ color: "#8888aa", fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1, marginBottom: 16 }}>Customer message</div>
            <div style={{ backgroundColor: "#0e0e1a", borderRadius: 12, padding: 20, border: "1px solid #222244" }}>
              <p style={{ color: "#ccccdd", fontSize: 14, lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>
                "Hi, I need help replacing a bathroom faucet and patching a small drywall hole. I'm available Thursday afternoon. Can you send me a quote?"
              </p>
            </div>
            <div style={{ marginTop: 16, display: "flex", alignItems: "center", gap: 8, color: "#555577", fontSize: 13 }}>
              <span>📱</span> Paste from text, email, or Facebook
            </div>
          </div>
          {/* Arrow divider */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#12122200", padding: "0 12px", minWidth: 48 }}>
            <div style={{ color: "#f97316", fontSize: 28, fontWeight: 700 }}>→</div>
          </div>
          {/* After */}
          <div style={{ backgroundColor: "#16162a", padding: 32, borderLeft: "1px solid #222244" }}>
            <div style={{ color: "#f97316", fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1, marginBottom: 16 }}>SnipBid quote draft</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { label: "Replace bathroom faucet", sub: "Labor + materials, editable" },
                { label: "Patch drywall hole", sub: "Materials + finish, editable" },
                { label: "Scope of work drafted", sub: "Professional description included" },
                { label: "Pricing & terms editable", sub: "You control every number" },
              ].map((item) => (
                <div key={item.label} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                  <span style={{ color: "#f97316", marginTop: 2 }}>✓</span>
                  <div>
                    <div style={{ fontSize: 14, color: "#e0e0ef", fontWeight: 500 }}>{item.label}</div>
                    <div style={{ fontSize: 12, color: "#8888aa" }}>{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 20, backgroundColor: "#f9731622", border: "1px solid #f9731644", borderRadius: 8, padding: "10px 14px", fontSize: 13, color: "#f97316" }}>
              Ready to review and send
            </div>
          </div>
        </div>
      </section>

      {/* How it works — 4 steps */}
      <section style={{ padding: "40px 20px 60px", maxWidth: 900, margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", fontSize: 28, fontWeight: 700, marginBottom: 48 }}>How It Works</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20 }}>
          {[
            { step: "1", title: "Paste the request", desc: "Paste a customer text, email, or rough job note into SnipBid." },
            { step: "2", title: "AI drafts the quote", desc: "SnipBid extracts job details and builds an editable professional quote draft." },
            { step: "3", title: "Review and adjust", desc: "Update pricing, line items, scope, and terms before the client ever sees it." },
            { step: "4", title: "Send and invoice", desc: "Share the quote with your client, then convert it to an invoice once approved." },
          ].map((item) => (
            <div key={item.step} style={{ backgroundColor: "#16162a", border: "1px solid #222244", borderRadius: 16, padding: 24 }}>
              <div style={{ width: 38, height: 38, backgroundColor: "#f9731622", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", color: "#f97316", fontWeight: 700, fontSize: 16, marginBottom: 14 }}>
                {item.step}
              </div>
              <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 8 }}>{item.title}</h3>
              <p style={{ color: "#8888aa", fontSize: 13, lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Value Messaging */}
      <section style={{ padding: "40px 20px 60px", maxWidth: 900, margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", fontSize: 28, fontWeight: 700, marginBottom: 12 }}>Why small home service businesses use SnipBid</h2>
        <p style={{ textAlign: "center", color: "#8888aa", fontSize: 15, marginBottom: 48 }}>Built for handymen and solo operators — not enterprise contractors.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
          {[
            {
              icon: "⚡",
              title: "Respond faster to leads",
              desc: "Don't lose jobs while you're still formatting estimates by hand. Quote before your competition does.",
            },
            {
              icon: "📋",
              title: "Turn messy requests into clean quotes",
              desc: "Convert texts, notes, and rough job details into professional client-ready quotes — without starting from scratch.",
            },
            {
              icon: "🔒",
              title: "Keep pricing in your control",
              desc: "SnipBid drafts the structure. You review every number before anything gets sent to the client.",
            },
            {
              icon: "🔁",
              title: "Quote to invoice in one click",
              desc: "When the customer approves, convert the quote into a payable invoice without starting over.",
            },
          ].map((v) => (
            <div key={v.title} style={{ backgroundColor: "#16162a", border: "1px solid #222244", borderRadius: 14, padding: 24 }}>
              <div style={{ fontSize: 26, marginBottom: 12 }}>{v.icon}</div>
              <h4 style={{ fontSize: 15, fontWeight: 600, marginBottom: 8 }}>{v.title}</h4>
              <p style={{ color: "#8888aa", fontSize: 13, lineHeight: 1.6, margin: 0 }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Block */}
      <section style={{ padding: "40px 20px 60px", maxWidth: 900, margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", fontSize: 28, fontWeight: 700, marginBottom: 48 }}>What's included</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
          {[
            { icon: "📥", title: "Paste & Go", desc: "Paste a customer message and let SnipBid build the first draft for you." },
            { icon: "✏️", title: "Editable Quote Drafts", desc: "Review and update line items, pricing, scope, and notes before sending." },
            { icon: "🔁", title: "Quote to Invoice", desc: "Turn approved quotes into invoices without starting over." },
            { icon: "📤", title: "Share Your Way", desc: "Send by link, export as PDF, or email your quote directly to the client." },
            { icon: "💳", title: "Online Payments", desc: "Clients pay directly from their invoice link via Stripe." },
            { icon: "📄", title: "PDF Export", desc: "Download a polished quote or invoice PDF anytime." },
          ].map((f) => (
            <div key={f.title} style={{ backgroundColor: "#16162a", border: "1px solid #222244", borderRadius: 12, padding: 20 }}>
              <div style={{ fontSize: 26, marginBottom: 10 }}>{f.icon}</div>
              <h4 style={{ fontSize: 14, fontWeight: 600, marginBottom: 6 }}>{f.title}</h4>
              <p style={{ color: "#8888aa", fontSize: 13, lineHeight: 1.5, margin: 0 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section style={{ padding: "40px 20px 60px", maxWidth: 800, margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", fontSize: 28, fontWeight: 700, marginBottom: 12 }}>Simple Pricing</h2>
        <p style={{ textAlign: "center", color: "#8888aa", marginBottom: 48, fontSize: 15 }}>Start free, upgrade when you&apos;re ready</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
          {[
            {
              name: "Free Trial",
              price: "$0",
              period: "14 days",
              features: ["10 quotes", "AI generation", "PDF export", "Client approval link"],
              cta: "Start Free",
              href: "/signup",
              highlight: false,
            },
            {
              name: "Starter",
              price: "$19",
              period: "/month",
              features: ["50 quotes/month", "Email delivery", "Stripe payments", "Payment reminders"],
              cta: "Get Starter",
              href: "/signup",
              highlight: false,
            },
            {
              name: "Pro",
              price: "$39",
              period: "/month",
              features: ["Unlimited quotes", "Custom branding", "Quote to invoice", "Priority support"],
              cta: "Get Pro",
              href: "/signup",
              highlight: true,
            },
          ].map((plan) => (
            <div key={plan.name} style={{
              backgroundColor: plan.highlight ? "#f9731611" : "#16162a",
              border: `1px solid ${plan.highlight ? "#f97316" : "#222244"}`,
              borderRadius: 16,
              padding: 28,
            }}>
              {plan.highlight && (
                <div style={{ color: "#f97316", fontSize: 12, fontWeight: 600, marginBottom: 8, textTransform: "uppercase", letterSpacing: 1 }}>Most Popular</div>
              )}
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>{plan.name}</h3>
              <div style={{ marginBottom: 20 }}>
                <span style={{ fontSize: 36, fontWeight: 800, color: plan.highlight ? "#f97316" : "#e0e0ef" }}>{plan.price}</span>
                <span style={{ color: "#8888aa", fontSize: 14 }}>{plan.period}</span>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px" }}>
                {plan.features.map((f) => (
                  <li key={f} style={{ color: "#8888aa", fontSize: 14, paddingBottom: 8, display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ color: "#f97316" }}>✓</span> {f}
                  </li>
                ))}
              </ul>
              <Link href={plan.href} style={{
                display: "block", textAlign: "center", padding: "10px 0", borderRadius: 8, textDecoration: "none",
                backgroundColor: plan.highlight ? "#f97316" : "transparent",
                color: plan.highlight ? "#fff" : "#e0e0ef",
                border: plan.highlight ? "none" : "1px solid #222244",
                fontWeight: 600, fontSize: 14,
              }}>
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ textAlign: "center", padding: "60px 20px 80px", maxWidth: 640, margin: "0 auto" }}>
        <h2 style={{ fontSize: 30, fontWeight: 700, marginBottom: 16 }}>Spend less time writing quotes and more time on jobs</h2>
        <p style={{ color: "#8888aa", marginBottom: 12, lineHeight: 1.7, fontSize: 16 }}>
          SnipBid helps small home service businesses draft cleaner quotes, send them faster, and convert them into invoices when the job is approved.
        </p>
        <p style={{ color: "#666688", fontSize: 14, marginBottom: 36 }}>AI drafts the quote. You review the pricing before sending.</p>
        <Link href="/signup" style={{ backgroundColor: "#f97316", color: "#fff", padding: "16px 40px", borderRadius: 10, textDecoration: "none", fontSize: 18, fontWeight: 700 }}>
          Start Free
        </Link>
        <p style={{ color: "#555577", fontSize: 13, marginTop: 16 }}>No credit card required. Free for 14 days.</p>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid #222244", padding: "32px 40px", flexWrap: "wrap", gap: 20 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 24, marginBottom: 24 }}>
          <div>
            <span style={{ color: "#f97316", fontWeight: 700, fontSize: 16 }}>SnipBid</span>
            <p style={{ color: "#555577", fontSize: 13, marginTop: 6, maxWidth: 280 }}>A quote-to-invoice workflow tool for handymen and small home service businesses.</p>
          </div>
          <div style={{ display: "flex", gap: 40, flexWrap: "wrap" }}>
            <div>
              <div style={{ color: "#8888aa", fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1, marginBottom: 10 }}>Software</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <Link href="/handyman-quote-software" style={{ color: "#8888aa", fontSize: 13, textDecoration: "none" }}>Handyman Quote Software</Link>
                <Link href="/quote-to-invoice-software" style={{ color: "#8888aa", fontSize: 13, textDecoration: "none" }}>Quote to Invoice Software</Link>
              </div>
            </div>
            <div>
              <div style={{ color: "#8888aa", fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1, marginBottom: 10 }}>Templates</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <Link href="/templates/handyman-quote-template" style={{ color: "#8888aa", fontSize: 13, textDecoration: "none" }}>Handyman Quote Template</Link>
              </div>
            </div>
            <div>
              <div style={{ color: "#8888aa", fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1, marginBottom: 10 }}>Resources</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <Link href="/blog/how-to-write-a-handyman-estimate" style={{ color: "#8888aa", fontSize: 13, textDecoration: "none" }}>How to Write an Estimate</Link>
                <Link href="/blog/quote-vs-invoice-for-handymen" style={{ color: "#8888aa", fontSize: 13, textDecoration: "none" }}>Quote vs Invoice</Link>
              </div>
            </div>
          </div>
        </div>
        <div style={{ borderTop: "1px solid #1a1a2e", paddingTop: 20 }}>
          <span style={{ color: "#555577", fontSize: 13 }}>© 2026 SnipBid. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}
