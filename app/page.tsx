import Link from "next/link";
import type { Metadata } from "next";
import UseCaseTabs from "./components/UseCaseTabs";

export const metadata: Metadata = {
  title: "SnipBid | Handyman Quote Software & Quote-to-Invoice Workflow",
  description: "SnipBid helps handymen and small home service businesses turn texts, notes, and job details into editable quotes — then convert them into invoices when approved. AI drafts the quote. You review every price before sending.",
  alternates: { canonical: "https://snipbid.com" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "SnipBid",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: "https://snipbid.com",
  description: "A quote-to-invoice workflow tool for handymen and small home service businesses.",
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
      <nav className="snip-nav">
        <span style={{ color: "#f97316", fontWeight: 700, fontSize: 20 }}>SnipBid</span>
        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <Link href="/login" style={{ color: "#8888aa", textDecoration: "none", fontSize: 14 }} className="hide-on-mobile">Sign In</Link>
          <Link href="/demo" style={{ color: "#e0e0ef", textDecoration: "none", fontSize: 14, padding: "8px 16px", borderRadius: 8, border: "1px solid #222244" }} className="hide-on-mobile">Try Demo</Link>
          <Link href="/signup" style={{ backgroundColor: "#f97316", color: "#fff", padding: "8px 20px", borderRadius: 8, textDecoration: "none", fontSize: 14, fontWeight: 600 }}>
            Start Free
          </Link>
        </div>
      </nav>

      {/* Hero — two column */}
      <section style={{ padding: "72px 40px 60px", maxWidth: 1100, margin: "0 auto" }}>
        <div className="hero-grid">
          {/* Left: copy */}
          <div>
            <div style={{ display: "inline-block", backgroundColor: "#f9731622", color: "#f97316", padding: "5px 14px", borderRadius: 20, fontSize: 13, marginBottom: 20, border: "1px solid #f9731644" }}>
              For handymen and small home service pros
            </div>
            <h1 style={{ fontSize: "clamp(30px, 4vw, 52px)", fontWeight: 800, lineHeight: 1.15, marginBottom: 20 }}>
              Turn messy customer texts into professional quotes{" "}
              <span style={{ color: "#f97316" }}>in under a minute</span>
            </h1>
            <p style={{ color: "#8888aa", fontSize: 17, lineHeight: 1.7, marginBottom: 12 }}>
              SnipBid helps handymen and small home service pros turn texts, notes, and job details into editable quotes — then convert them into invoices when the job is approved.
            </p>
            <p style={{ color: "#666688", fontSize: 14, marginBottom: 32 }}>
              AI drafts the quote. You review every price before sending.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href="/demo" style={{ backgroundColor: "#f97316", color: "#fff", padding: "13px 28px", borderRadius: 10, textDecoration: "none", fontSize: 15, fontWeight: 700 }}>
                Try it now — no signup
              </Link>
              <Link href="/signup" style={{ backgroundColor: "#16162a", color: "#e0e0ef", padding: "13px 28px", borderRadius: 10, textDecoration: "none", fontSize: 15, border: "1px solid #222244" }}>
                Start Free
              </Link>
            </div>
            <p style={{ color: "#555577", fontSize: 13, marginTop: 14 }}>No credit card required · Free for 14 days</p>
          </div>

          {/* Right: quote mockup */}
          <div style={{ backgroundColor: "#16162a", border: "1px solid #222244", borderRadius: 18, padding: 28, fontSize: 13 }}>
            <div style={{ backgroundColor: "#0e0e1a", borderRadius: 10, padding: 16, marginBottom: 16, border: "1px solid #1a1a30" }}>
              <div style={{ color: "#8888aa", fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>Customer message</div>
              <p style={{ color: "#aaaacc", fontSize: 13, lineHeight: 1.6, margin: 0, fontStyle: "italic" }}>
                &ldquo;Hi, I need help replacing a bathroom faucet and patching a small drywall hole. Available Thursday afternoon. Can you send a quote?&rdquo;
              </p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16, color: "#f97316", fontSize: 12, fontWeight: 600 }}>
              <span style={{ flex: 1, height: 1, backgroundColor: "#222244" }} />
              SnipBid quote draft
              <span style={{ flex: 1, height: 1, backgroundColor: "#222244" }} />
            </div>
            <div style={{ marginBottom: 14 }}>
              <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid #1a1a30", color: "#ccccdd" }}>
                <span>Replace bathroom faucet</span><span style={{ color: "#f97316" }}>$205</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid #1a1a30", color: "#ccccdd" }}>
                <span>Patch drywall hole</span><span style={{ color: "#f97316" }}>$120</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", fontWeight: 700 }}>
                <span style={{ color: "#e0e0ef" }}>Total</span><span style={{ color: "#f97316" }}>$325</span>
              </div>
            </div>
            <div style={{ backgroundColor: "#0e0e1a", borderRadius: 8, padding: "10px 14px", fontSize: 12, color: "#8888aa", marginBottom: 14, lineHeight: 1.6 }}>
              <strong style={{ color: "#ccccdd" }}>Scope of work:</strong> Replace bathroom faucet incl. labor and supply lines. Patch 6&rdquo;×6&rdquo; drywall hole with compound, sanding, and primer. Final paint not included. 90-day workmanship guarantee.
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <div style={{ flex: 1, backgroundColor: "#f97316", color: "#fff", padding: "9px 0", borderRadius: 8, textAlign: "center", fontWeight: 700, fontSize: 13 }}>Send Quote</div>
              <div style={{ backgroundColor: "#222244", color: "#8888aa", padding: "9px 14px", borderRadius: 8, fontSize: 13 }}>PDF</div>
            </div>
            <div style={{ marginTop: 12, display: "flex", alignItems: "center", gap: 6, color: "#555577", fontSize: 12 }}>
              <span style={{ color: "#22cc88" }}>●</span> All prices editable before sending
            </div>
          </div>
        </div>
      </section>

      {/* Positioning strip */}
      <div style={{ borderTop: "1px solid #222244", borderBottom: "1px solid #222244", backgroundColor: "#12122a" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "16px 40px", textAlign: "center", color: "#8888aa", fontSize: 14, letterSpacing: 0.3 }}>
          Not a CRM. Not scheduling software. Just a faster way to draft quotes and send invoices.
        </div>
      </div>

      {/* Problem section */}
      <section style={{ padding: "72px 20px 48px", maxWidth: 760, margin: "0 auto" }}>
        <h2 style={{ fontSize: "clamp(26px, 4vw, 36px)", fontWeight: 800, marginBottom: 24 }}>
          Still turning job texts into quotes by hand?
        </h2>
        <p style={{ color: "#ccccdd", fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
          If you&apos;re a handyman or small home service business, you probably get quote requests while you&apos;re on the job — by text, email, Facebook, or a quick phone note.
        </p>
        <p style={{ color: "#ccccdd", fontSize: 16, lineHeight: 1.8, marginBottom: 32 }}>
          The problem isn&apos;t just writing the quote. It&apos;s stopping what you&apos;re doing, organizing the details, making it look professional, and then rewriting it later as an invoice.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
          {[
            "Customer messages come in messy and incomplete",
            "Writing estimates from scratch takes too long",
            "Delayed replies can cost you the job",
            "Rewriting quotes into invoices wastes time",
          ].map((bullet) => (
            <div key={bullet} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <span style={{ color: "#ff5544", marginTop: 3, fontSize: 16 }}>✗</span>
              <span style={{ color: "#ccccdd", fontSize: 15 }}>{bullet}</span>
            </div>
          ))}
        </div>
        <p style={{ color: "#f97316", fontSize: 15, fontWeight: 600, borderLeft: "3px solid #f97316", paddingLeft: 16 }}>
          SnipBid helps you go from rough request → clean quote → invoice without the extra admin work.
        </p>
      </section>

      {/* Before / After */}
      <section style={{ padding: "0 20px 72px", maxWidth: 900, margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", fontSize: 28, fontWeight: 700, marginBottom: 40 }}>From rough message to client-ready quote</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: 0, borderRadius: 16, overflow: "hidden", border: "1px solid #222244" }}>
          <div style={{ backgroundColor: "#16162a", padding: 28 }}>
            <div style={{ color: "#8888aa", fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1, marginBottom: 14 }}>Customer message</div>
            <div style={{ backgroundColor: "#0e0e1a", borderRadius: 10, padding: 18, border: "1px solid #222244" }}>
              <p style={{ color: "#ccccdd", fontSize: 14, lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>
                &ldquo;Hi, I need help replacing a bathroom faucet and patching a small drywall hole. I&apos;m available Thursday afternoon. Can you send me a quote?&rdquo;
              </p>
            </div>
            <div style={{ marginTop: 14, color: "#555577", fontSize: 12 }}>📱 Paste from text, email, or Facebook</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "0 12px", backgroundColor: "#0e0e1a" }}>
            <span style={{ color: "#f97316", fontSize: 22 }}>→</span>
          </div>
          <div style={{ backgroundColor: "#16162a", padding: 28, borderLeft: "1px solid #222244" }}>
            <div style={{ color: "#f97316", fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1, marginBottom: 14 }}>SnipBid quote draft</div>
            {[
              "Replace bathroom faucet — labor + materials, editable",
              "Patch drywall hole — materials + finish, editable",
              "Scope of work drafted — professional description included",
              "Pricing & terms editable — you control every number",
            ].map((line) => (
              <div key={line} style={{ display: "flex", gap: 10, marginBottom: 10 }}>
                <span style={{ color: "#f97316", marginTop: 1 }}>✓</span>
                <span style={{ fontSize: 13, color: "#ccccdd" }}>{line}</span>
              </div>
            ))}
            <div style={{ marginTop: 16, backgroundColor: "#f9731622", border: "1px solid #f9731444", borderRadius: 8, padding: "9px 14px", fontSize: 13, color: "#f97316", fontWeight: 600 }}>
              Ready to review and send
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section style={{ padding: "0 20px 72px", maxWidth: 900, margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", fontSize: 28, fontWeight: 700, marginBottom: 40 }}>How SnipBid works</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
          {[
            { step: "1", title: "Paste the customer message", body: "Drop in a text, email, or rough job note." },
            { step: "2", title: "Get a quote draft in seconds", body: "SnipBid extracts the job details and builds a professional draft with line items, scope, and pricing fields." },
            { step: "3", title: "Review your numbers", body: "Adjust pricing, scope, terms, and notes before the customer sees anything." },
            { step: "4", title: "Send it — then convert to invoice when approved", body: "No rewriting. No starting over." },
          ].map((item) => (
            <div key={item.step} style={{ backgroundColor: "#16162a", border: "1px solid #222244", borderRadius: 14, padding: 22 }}>
              <div style={{ width: 34, height: 34, backgroundColor: "#f9731622", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", color: "#f97316", fontWeight: 700, fontSize: 15, marginBottom: 14 }}>
                {item.step}
              </div>
              <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 8 }}>{item.title}</h3>
              <p style={{ color: "#8888aa", fontSize: 13, lineHeight: 1.6, margin: 0 }}>{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Use Cases */}
      <UseCaseTabs />

      {/* Why SnipBid */}
      <section style={{ padding: "0 20px 72px", maxWidth: 900, margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", fontSize: 28, fontWeight: 700, marginBottom: 40 }}>Why small home service pros use SnipBid</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
          {[
            { icon: "⚡", title: "Respond before the lead goes cold", body: "When a customer texts you, you can turn it into a clean quote fast — even if you're still on the job." },
            { icon: "📋", title: "Look more professional without extra admin", body: "Send a polished quote instead of a rushed text or half-finished template." },
            { icon: "🔒", title: "Keep pricing under your control", body: "SnipBid drafts the structure. You decide what to charge." },
            { icon: "🔁", title: "Stop rewriting the same job twice", body: "Turn approved quotes into invoices without copying everything over again." },
          ].map((item) => (
            <div key={item.title} style={{ backgroundColor: "#16162a", border: "1px solid #222244", borderRadius: 14, padding: 22 }}>
              <div style={{ fontSize: 26, marginBottom: 12 }}>{item.icon}</div>
              <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 8 }}>{item.title}</h3>
              <p style={{ color: "#8888aa", fontSize: 13, lineHeight: 1.6, margin: 0 }}>{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who it's for */}
      <section style={{ padding: "0 20px 72px", maxWidth: 860, margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", fontSize: 28, fontWeight: 700, marginBottom: 40 }}>Built for small home service businesses — not office-heavy systems</h2>
        <div className="two-col-grid">
          <div style={{ backgroundColor: "#16162a", border: "1px solid #222244", borderRadius: 14, padding: 28 }}>
            <div style={{ color: "#22cc88", fontSize: 13, fontWeight: 600, marginBottom: 16, textTransform: "uppercase", letterSpacing: 1 }}>Best for</div>
            {[
              "Handymen",
              "Solo contractors",
              "Small repair crews",
              "Home service businesses that quote from texts, calls, and notes",
            ].map((item) => (
              <div key={item} style={{ display: "flex", gap: 10, marginBottom: 12, color: "#ccccdd", fontSize: 14 }}>
                <span style={{ color: "#22cc88" }}>✓</span>{item}
              </div>
            ))}
          </div>
          <div style={{ backgroundColor: "#16162a", border: "1px solid #222244", borderRadius: 14, padding: 28 }}>
            <div style={{ color: "#8888aa", fontSize: 13, fontWeight: 600, marginBottom: 16, textTransform: "uppercase", letterSpacing: 1 }}>Not built for</div>
            {[
              "Large multi-crew dispatch teams",
              "Complex commercial project management",
              "Full back-office operations software",
            ].map((item) => (
              <div key={item} style={{ display: "flex", gap: 10, marginBottom: 12, color: "#666688", fontSize: 14 }}>
                <span>✗</span>{item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: "0 20px 72px", maxWidth: 900, margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", fontSize: 28, fontWeight: 700, marginBottom: 12 }}>Everything you need to quote faster and invoice cleanly</h2>
        <p style={{ textAlign: "center", color: "#8888aa", fontSize: 14, marginBottom: 40 }}>Built for fast-moving small jobs — not bloated office workflows.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
          {[
            { icon: "📥", title: "Paste & Go", body: "Paste a customer message and let SnipBid build the first draft for you." },
            { icon: "✏️", title: "Editable Quote Drafts", body: "Review and update line items, pricing, scope, and notes before sending." },
            { icon: "🔁", title: "Quote to Invoice", body: "Turn approved quotes into invoices without starting over." },
            { icon: "📤", title: "Share Your Way", body: "Send by link, export as PDF, or email your quote directly to the client." },
            { icon: "💳", title: "Online Payments", body: "Clients pay directly from their invoice link via Stripe." },
            { icon: "📄", title: "PDF Export", body: "Download a polished quote or invoice PDF anytime." },
          ].map((f) => (
            <div key={f.title} style={{ backgroundColor: "#16162a", border: "1px solid #222244", borderRadius: 12, padding: 20 }}>
              <div style={{ fontSize: 24, marginBottom: 10 }}>{f.icon}</div>
              <h4 style={{ fontSize: 14, fontWeight: 600, marginBottom: 6 }}>{f.title}</h4>
              <p style={{ color: "#8888aa", fontSize: 13, lineHeight: 1.5, margin: 0 }}>{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section style={{ padding: "0 20px 72px", maxWidth: 860, margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", fontSize: 28, fontWeight: 700, marginBottom: 8 }}>Simple pricing for small businesses</h2>
        <p style={{ textAlign: "center", color: "#8888aa", marginBottom: 48, fontSize: 15 }}>Start free, upgrade when you&apos;re ready</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: 20 }}>
          {[
            {
              name: "Free Trial",
              price: "$0",
              period: "14 days",
              positioning: "Best for trying SnipBid on real leads",
              features: ["Unlimited quotes for 14 days", "AI generation", "PDF export", "Client approval link"],
              cta: "Start Free",
              href: "/signup",
              highlight: false,
            },
            {
              name: "Starter",
              price: "$19",
              period: "/month",
              positioning: "For solo operators who need quotes out fast",
              features: ["50 quotes / month", "Email delivery", "Stripe payments", "Payment reminders"],
              cta: "Get Starter",
              href: "/signup",
              highlight: true,
            },
            {
              name: "Pro",
              price: "$39",
              period: "/month",
              positioning: "For growing home service businesses",
              features: ["Unlimited quotes", "Custom branding", "Quote to invoice", "Priority support"],
              cta: "Get Pro",
              href: "/signup",
              highlight: false,
            },
          ].map((plan) => (
            <div key={plan.name} style={{
              backgroundColor: plan.highlight ? "#f9731611" : "#16162a",
              border: `1px solid ${plan.highlight ? "#f97316" : "#222244"}`,
              borderRadius: 16,
              padding: 28,
            }}>
              {plan.highlight && (
                <div style={{ color: "#f97316", fontSize: 11, fontWeight: 600, marginBottom: 8, textTransform: "uppercase", letterSpacing: 1 }}>Most Popular</div>
              )}
              <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 4 }}>{plan.name}</h3>
              <p style={{ color: "#8888aa", fontSize: 12, marginBottom: 16 }}>{plan.positioning}</p>
              <div style={{ marginBottom: 20 }}>
                <span style={{ fontSize: 34, fontWeight: 800, color: plan.highlight ? "#f97316" : "#e0e0ef" }}>{plan.price}</span>
                <span style={{ color: "#8888aa", fontSize: 14 }}>{plan.period}</span>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px" }}>
                {plan.features.map((f) => (
                  <li key={f} style={{ color: "#8888aa", fontSize: 14, paddingBottom: 8, display: "flex", gap: 8 }}>
                    <span style={{ color: "#f97316" }}>✓</span>{f}
                  </li>
                ))}
              </ul>
              <Link href={plan.href} style={{
                display: "block", textAlign: "center", padding: "10px 0", borderRadius: 8, textDecoration: "none",
                backgroundColor: plan.highlight ? "#f97316" : "transparent",
                color: plan.highlight ? "#fff" : "#e0e0ef",
                border: plan.highlight ? "none" : "1px solid #222244",
                fontWeight: 600, fontSize: 14,
              }}>{plan.cta}</Link>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "0 20px 72px", maxWidth: 760, margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", fontSize: 28, fontWeight: 700, marginBottom: 40 }}>Frequently asked questions</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {[
            { q: "Does SnipBid choose my pricing?", a: "No. SnipBid drafts the quote structure, but you review and adjust every number before sending." },
            { q: "Is SnipBid a CRM or scheduling app?", a: "No. SnipBid is built for fast quotes and invoices — not full business management." },
            { q: "Can I edit everything before sending?", a: "Yes. You can edit pricing, line items, scope, terms, and notes before the client sees anything." },
            { q: "What kind of businesses is SnipBid for?", a: "SnipBid is best for handymen and small home service businesses that need to send quotes fast without using a heavy system." },
            { q: "Can I turn a quote into an invoice?", a: "Yes. Once approved, you can convert the quote into an invoice without starting over." },
            { q: "Can clients pay online?", a: "Yes. SnipBid supports Stripe-powered invoice payments." },
          ].map((item) => (
            <div key={item.q} style={{ backgroundColor: "#16162a", border: "1px solid #222244", borderRadius: 12, padding: "18px 22px" }}>
              <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 8, color: "#e0e0ef" }}>{item.q}</h3>
              <p style={{ color: "#8888aa", fontSize: 14, lineHeight: 1.6, margin: 0 }}>{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ textAlign: "center", padding: "60px 20px 80px", maxWidth: 660, margin: "0 auto" }}>
        <h2 style={{ fontSize: "clamp(24px, 4vw, 32px)", fontWeight: 800, marginBottom: 16 }}>
          Spend less time writing quotes and more time on jobs
        </h2>
        <p style={{ color: "#8888aa", fontSize: 16, lineHeight: 1.7, marginBottom: 12 }}>
          SnipBid helps small home service businesses draft cleaner quotes, send them faster, and convert them into invoices when the job is approved.
        </p>
        <p style={{ color: "#666688", fontSize: 14, marginBottom: 36 }}>AI drafts the quote. You review the pricing before sending.</p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/demo" style={{ backgroundColor: "#f97316", color: "#fff", padding: "14px 36px", borderRadius: 10, textDecoration: "none", fontSize: 16, fontWeight: 700 }}>
            Try it now — no signup
          </Link>
          <Link href="/signup" style={{ backgroundColor: "#16162a", color: "#e0e0ef", padding: "14px 36px", borderRadius: 10, textDecoration: "none", fontSize: 16, border: "1px solid #222244" }}>
            Start Free
          </Link>
        </div>
        <p style={{ color: "#555577", fontSize: 13, marginTop: 16 }}>No credit card required · Free for 14 days</p>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid #222244", padding: "32px 40px" }}>
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
