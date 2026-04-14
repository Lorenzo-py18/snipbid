import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Quote Small Repair Jobs Without Underselling Yourself",
  description: "Learn how to price small handyman repair jobs accurately so you stop leaving money on the table. Includes pricing strategies, common mistakes, and a faster way to send quotes.",
  alternates: { canonical: "https://snipbid.com/blog/how-to-quote-small-repair-jobs" },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Quote Small Repair Jobs Without Underselling Yourself",
  description: "A practical guide for handymen on how to price small repair jobs correctly — covering minimum charges, material markup, time estimates, and how to stop underselling.",
  author: { "@type": "Organization", name: "SnipBid" },
  publisher: { "@type": "Organization", name: "SnipBid", url: "https://snipbid.com" },
  url: "https://snipbid.com/blog/how-to-quote-small-repair-jobs",
  datePublished: "2026-04-07",
  dateModified: "2026-04-07",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Should I set a minimum charge for small handyman jobs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. A minimum charge (typically $75–$150 depending on your market) protects you from jobs where travel and setup time cost more than the work itself. Most customers understand and accept a minimum once you explain it clearly.",
      },
    },
    {
      "@type": "Question",
      name: "How do I price a repair job I've never done before?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Estimate your labor time conservatively (add a buffer), look up material costs, add your markup (typically 15–25%), and compare against local market rates. When in doubt, quote slightly higher — it's easier to discount than to ask for more after the fact.",
      },
    },
    {
      "@type": "Question",
      name: "Why do handymen undersell small jobs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The most common reasons: underestimating time, forgetting to include travel and setup, not marking up materials, and feeling pressure to be the cheapest option. A structured quote forces you to account for every cost before sending.",
      },
    },
  ],
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

export default function HowToQuoteSmallRepairJobsPage() {
  return (
    <div style={s.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <nav style={s.nav}>
        <Link href="/" style={{ color: "#f97316", fontWeight: 700, fontSize: 20, textDecoration: "none" }}>SnipBid</Link>
        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <Link href="/login" style={{ color: "#8888aa", textDecoration: "none", fontSize: 14 }}>Sign In</Link>
          <Link href="/signup" style={{ backgroundColor: "#f97316", color: "#fff", padding: "8px 20px", borderRadius: 8, textDecoration: "none", fontSize: 14, fontWeight: 600 }}>Start Free</Link>
        </div>
      </nav>

      <article style={s.article}>
        <div style={{ ...s.muted, fontSize: 13, marginBottom: 24 }}>
          <Link href="/" style={{ color: "#8888aa", textDecoration: "none" }}>SnipBid</Link>{" / "}
          <Link href="/blog" style={{ color: "#8888aa", textDecoration: "none" }}>Blog</Link>{" / "}
          <span style={{ color: "#e0e0ef" }}>How to Quote Small Repair Jobs</span>
        </div>

        <h1 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 800, lineHeight: 1.2, marginBottom: 16 }}>
          How to Quote Small Repair Jobs Without Underselling Yourself
        </h1>
        <p style={{ ...s.muted, fontSize: 14, marginBottom: 40 }}>By SnipBid · April 7, 2026 · 6 min read</p>

        <div style={{ ...s.card, borderLeft: "3px solid #f97316", marginBottom: 32 }}>
          <p style={{ color: "#e0e0ef", fontSize: 15, lineHeight: 1.7, margin: 0 }}>
            <strong>The short answer:</strong> Set a minimum charge, account for travel and setup time, mark up your materials, and build your quote from line items rather than gut feel. Small jobs are where most handymen lose the most money — not because the work is hard, but because the pricing is rushed.
          </p>
        </div>

        <p style={s.p}>
          Small repair jobs — a leaky faucet, a drywall patch, a door that won&apos;t close — are the bread and butter of most handyman businesses. They&apos;re quick to complete and easy to book. They&apos;re also the jobs most likely to be underpriced.
        </p>
        <p style={s.p}>
          The problem is usually not that you don&apos;t know your trade. It&apos;s that small jobs feel like they should be cheap, so you rush the quote, skip a few cost items, and end up doing $120 worth of work for $80.
        </p>
        <p style={s.p}>
          Here&apos;s how to stop that from happening.
        </p>

        <h2 style={s.h2}>Why small jobs are the easiest to underprice</h2>
        <p style={s.p}>
          There are a few patterns that consistently lead to underpricing on small jobs:
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 32 }}>
          {[
            { reason: "You price the task, not the job", detail: "A faucet swap is 45 minutes of work — but there's also 20 minutes driving, 10 minutes loading tools, and 15 minutes diagnosing what's actually wrong." },
            { reason: "You don't charge for materials realistically", detail: "A $15 supply run plus your time to get it is really a $35–$40 cost. Not charging a markup means you're subsidizing the customer's materials." },
            { reason: "You feel pressure to be cheap", detail: "Competing on price with every other handyman in your area is a race to the bottom. Customers who care only about price are usually the hardest to work with." },
            { reason: "You quote from memory instead of from numbers", detail: "Gut-feel pricing tends to drift low over time, especially for jobs you do often." },
          ].map((item) => (
            <div key={item.reason} style={{ ...s.card, padding: 18 }}>
              <p style={{ color: "#e0e0ef", fontSize: 14, fontWeight: 600, margin: "0 0 6px" }}>{item.reason}</p>
              <p style={{ ...s.muted, fontSize: 13, lineHeight: 1.6, margin: 0 }}>{item.detail}</p>
            </div>
          ))}
        </div>

        <h2 style={s.h2}>Set a minimum job charge — and stick to it</h2>
        <p style={s.p}>
          The single most effective thing most solo handymen can do is establish a minimum charge. This is the least you&apos;ll accept for any job, regardless of how small — typically somewhere between $75 and $150 depending on your market.
        </p>
        <p style={s.p}>
          Why does it matter? Because every job has fixed costs: driving there, loading your truck, parking, setting up, cleaning up, and invoicing afterward. A $50 job that takes two hours of your day isn&apos;t a $50 job.
        </p>
        <div style={{ ...s.card, borderLeft: "3px solid #f97316", marginBottom: 32 }}>
          <p style={{ color: "#e0e0ef", fontSize: 14, lineHeight: 1.7, margin: 0 }}>
            <strong>Sample minimum charge language:</strong> <span style={{ color: "#aaaacc", fontStyle: "italic" }}>&ldquo;My minimum for any job is $100. That covers up to one hour of labor plus travel. Additional time is billed at $75/hr.&rdquo;</span>
          </p>
        </div>
        <p style={s.p}>
          Most customers accept this without pushback once it&apos;s stated clearly upfront — in your quote, not at the door.
        </p>

        <h2 style={s.h2}>Build your price from the bottom up</h2>
        <p style={s.p}>
          Instead of starting with a number in your head, build it from four components:
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
          {[
            { n: "1", label: "Labor time", detail: "Estimate realistically, then add 20% as a buffer. Jobs almost always take longer than expected." },
            { n: "2", label: "Materials cost", detail: "List every item you'll need. Add a 15–25% markup to cover sourcing time, handling, and the occasional waste." },
            { n: "3", label: "Travel and setup", detail: "Include drive time both ways and the time to unload and set up. This is real work time, even if customers don't see it." },
            { n: "4", label: "Overhead contribution", detail: "Tools wear out, insurance costs money, your phone plan is a business expense. Build a small buffer into every job to cover this." },
          ].map((item) => (
            <div key={item.n} style={{ ...s.card, display: "flex", gap: 16 }}>
              <div style={{ width: 32, height: 32, minWidth: 32, backgroundColor: "#f9731622", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", color: "#f97316", fontWeight: 700, fontSize: 14 }}>{item.n}</div>
              <div>
                <p style={{ color: "#e0e0ef", fontSize: 14, fontWeight: 600, margin: "0 0 4px" }}>{item.label}</p>
                <p style={{ ...s.muted, fontSize: 13, lineHeight: 1.6, margin: 0 }}>{item.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 style={s.h2}>A real pricing example: faucet replacement</h2>
        <div style={{ backgroundColor: "#16162a", border: "1px solid #222244", borderRadius: 16, padding: 28, marginBottom: 32 }}>
          <p style={{ ...s.muted, fontSize: 12, fontWeight: 600, textTransform: "uppercase" as const, letterSpacing: 1, marginBottom: 16 }}>Job: Replace a bathroom faucet (customer-supplied fixture)</p>
          <table style={{ width: "100%", borderCollapse: "collapse" as const, fontSize: 13 }}>
            <thead>
              <tr style={{ borderBottom: "1px solid #222244" }}>
                {["Cost item", "Time / Amount", "Rate", "Total"].map((h) => (
                  <th key={h} style={{ textAlign: "left" as const, padding: "8px 4px", color: "#8888aa", fontWeight: 600 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["Labor (install + test)", "1.5 hrs", "$75/hr", "$112"],
                ["Travel (round trip)", "0.5 hrs", "$75/hr", "$37"],
                ["Supply lines + fittings", "materials", "+20%", "$18"],
                ["Minimum job buffer", "—", "—", "$18"],
              ].map((row) => (
                <tr key={row[0]} style={{ borderBottom: "1px solid #1a1a2e" }}>
                  {row.map((cell, i) => (
                    <td key={i} style={{ padding: "10px 4px", color: "#ccccdd" }}>{cell}</td>
                  ))}
                </tr>
              ))}
              <tr>
                <td colSpan={3} style={{ padding: "12px 4px", textAlign: "right" as const, fontWeight: 700, color: "#e0e0ef" }}>Total</td>
                <td style={{ padding: "12px 4px", fontWeight: 700, color: "#f97316" }}>$185</td>
              </tr>
            </tbody>
          </table>
          <p style={{ ...s.muted, fontSize: 13, marginTop: 16, marginBottom: 0 }}>
            This is significantly more than a gut-feel quote of &ldquo;$100 for a faucet swap&rdquo; — and it&apos;s the number that actually covers your costs.
          </p>
        </div>

        <h2 style={s.h2}>How to present your price without losing the job</h2>
        <p style={s.p}>
          Higher prices are easier to accept when the quote looks professional. A structured quote with line items, a clear scope, and your terms communicates that you know what you&apos;re doing — and that the price isn&apos;t arbitrary.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 32 }}>
          {[
            "Break the price into line items — customers accept $185 more easily when they see what each part costs",
            "Write a scope that explains what's included — removes the feeling that you're overcharging for something simple",
            "State what's NOT included — prevents the customer from expecting extra work at the same price",
            "Send a formatted quote, not a text — a professional document justifies a professional price",
          ].map((item) => (
            <div key={item} style={{ display: "flex", gap: 10, color: "#ccccdd", fontSize: 14 }}>
              <span style={{ color: "#22c55e", marginTop: 2 }}>✓</span>
              <span>{item}</span>
            </div>
          ))}
        </div>

        <h2 style={s.h2}>FAQ</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
          {[
            {
              q: "Should I set a minimum charge for small handyman jobs?",
              a: "Yes. A minimum charge ($75–$150 depending on your market) protects you from jobs where travel and setup cost more than the work itself. Most customers understand it when explained upfront.",
            },
            {
              q: "How do I price a repair job I've never done before?",
              a: "Estimate your labor time conservatively, add a 20% buffer, look up material costs with markup, and compare against local market rates. Quote slightly higher — it's easier to adjust down than to ask for more after.",
            },
            {
              q: "Why do handymen undersell small jobs?",
              a: "Underestimating time, forgetting travel and setup costs, skipping material markup, and gut-feel pricing. A structured quote forces you to account for every cost before sending.",
            },
          ].map((item) => (
            <div key={item.q} style={{ ...s.card }}>
              <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 8, color: "#e0e0ef" }}>{item.q}</h3>
              <p style={{ ...s.muted, fontSize: 14, lineHeight: 1.6, margin: 0 }}>{item.a}</p>
            </div>
          ))}
        </div>

        <div style={{ ...s.card, textAlign: "center", padding: 36, margin: "32px 0" }}>
          <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 10 }}>Build accurate quotes in seconds — not gut feel</div>
          <p style={{ ...s.muted, fontSize: 14, marginBottom: 24 }}>SnipBid turns customer messages into structured quote drafts with line items and pricing. You review every number before sending.</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/demo" style={{ backgroundColor: "#f97316", color: "#fff", padding: "12px 28px", borderRadius: 8, textDecoration: "none", fontSize: 15, fontWeight: 700 }}>Try the Demo</Link>
            <Link href="/signup" style={{ border: "1px solid #f97316", color: "#f97316", padding: "12px 28px", borderRadius: 8, textDecoration: "none", fontSize: 15, fontWeight: 600 }}>Start Free</Link>
          </div>
        </div>

        <h2 style={s.h2}>Related resources</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {[
            { href: "/blog/how-to-write-a-handyman-estimate", label: "How to Write a Handyman Estimate (With Example)" },
            { href: "/blog/how-to-respond-to-customer-quote-request", label: "How to Respond When a Customer Texts You for a Quote" },
            { href: "/blog/how-to-send-a-quote-over-text", label: "How to Send a Professional Quote Over Text" },
            { href: "/blog/text-message-to-professional-quote", label: "From Text Message to Professional Quote in Under a Minute" },
            { href: "/handyman-quote-software", label: "Handyman Quote Software" },
            { href: "/handyman-estimate-software", label: "Handyman Estimate Software" },
          ].map((link) => (
            <Link key={link.href} href={link.href} style={{ color: "#f97316", fontSize: 14, textDecoration: "none" }}>→ {link.label}</Link>
          ))}
        </div>
      </article>

      <footer style={{ borderTop: "1px solid #222244", padding: "24px 40px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12, marginTop: 40 }}>
        <Link href="/" style={{ color: "#f97316", fontWeight: 700, textDecoration: "none" }}>SnipBid</Link>
        <span style={{ color: "#555577", fontSize: 13 }}>© 2026 SnipBid</span>
      </footer>
    </div>
  );
}
