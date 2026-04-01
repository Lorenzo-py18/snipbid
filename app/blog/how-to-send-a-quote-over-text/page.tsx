import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Send a Professional Quote Over Text (Handyman Guide) | SnipBid",
  description: "Learn how to send a professional quote by text message as a handyman. Includes a ready-to-use template, common mistakes to avoid, and when to upgrade to a formal quote.",
  alternates: { canonical: "https://snipbid.com/blog/how-to-send-a-quote-over-text" },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Send a Professional Quote Over Text (Handyman Guide)",
  description: "Learn how to send a professional quote by text message as a handyman, including a template, common mistakes, and when to send a formal quote instead.",
  author: { "@type": "Organization", name: "SnipBid" },
  publisher: { "@type": "Organization", name: "SnipBid", url: "https://snipbid.com" },
  url: "https://snipbid.com/blog/how-to-send-a-quote-over-text",
  datePublished: "2026-04-01",
  dateModified: "2026-04-01",
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

export default function HowToSendQuoteOverTextPage() {
  return (
    <div style={s.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Nav */}
      <nav style={s.nav}>
        <Link href="/" style={{ color: "#f97316", fontWeight: 700, fontSize: 20, textDecoration: "none" }}>SnipBid</Link>
        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <Link href="/login" style={{ color: "#8888aa", textDecoration: "none", fontSize: 14 }}>Sign In</Link>
          <Link href="/signup" style={{ backgroundColor: "#f97316", color: "#fff", padding: "8px 20px", borderRadius: 8, textDecoration: "none", fontSize: 14, fontWeight: 600 }}>Start Free</Link>
        </div>
      </nav>

      <article style={s.article}>
        {/* Breadcrumb */}
        <div style={{ ...s.muted, fontSize: 13, marginBottom: 24 }}>
          <Link href="/" style={{ color: "#8888aa", textDecoration: "none" }}>SnipBid</Link>
          {" / "}
          <Link href="/blog" style={{ color: "#8888aa", textDecoration: "none" }}>Blog</Link>
          {" / "}
          <span style={{ color: "#e0e0ef" }}>How to Send a Professional Quote Over Text</span>
        </div>

        <h1 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 800, lineHeight: 1.2, marginBottom: 16 }}>
          How to Send a Professional Quote Over Text (Handyman Guide)
        </h1>
        <p style={{ ...s.muted, fontSize: 14, marginBottom: 40 }}>By SnipBid · April 1, 2026 · 5 min read</p>

        {/* Direct answer */}
        <div style={{ ...s.card, borderLeft: "3px solid #f97316", marginBottom: 32 }}>
          <p style={{ color: "#e0e0ef", fontSize: 15, lineHeight: 1.7, margin: 0 }}>
            <strong>The short answer:</strong> A professional text quote should include a short job description, what&apos;s included and excluded, the price, your availability, and a clear next step for the client to approve. Keep it brief but structured — a number alone creates confusion and invites negotiation.
          </p>
        </div>

        <p style={s.p}>
          If you&apos;re a handyman or run a small home service business, you probably get quote requests in the least convenient way possible: text messages while you&apos;re on a job, Facebook messages late at night, or a customer sending a few photos with almost no detail.
        </p>
        <p style={s.p}>
          The problem is not just pricing the work. The real problem is turning a messy customer message into something clear, professional, and easy to approve. In this guide, you&apos;ll learn how to send a professional quote over text without sounding sloppy, underpricing the job, or creating confusion later.
        </p>

        <h2 style={s.h2}>Why texting quotes can be risky</h2>
        <p style={s.p}>
          Texting is fast, but it often creates problems when done casually. A quick message like &ldquo;$250&rdquo; may feel efficient, but it leaves too much open to interpretation. Customers may not know what is included, whether materials are extra, or if that number is a firm quote or just an estimate.
        </p>
        <p style={s.p}>
          That confusion is what leads to scope disputes, price pushback, and awkward conversations after the work is done.
        </p>

        <h2 style={s.h2}>When a text quote is okay</h2>
        <p style={s.p}>
          For very small, well-defined jobs, texting a quote can work well. Examples include a faucet replacement, a small drywall patch, a garbage disposal swap, or a simple door adjustment. If the scope is obvious and the risk of surprises is low, a text quote may be enough.
        </p>
        <p style={s.p}>
          But even then, the quote should still feel structured and professional.
        </p>

        <h2 style={s.h2}>What to include in a professional quote by text</h2>
        <p style={s.p}>A strong quote by text should include five things:</p>

        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
          {[
            { n: "1", label: "A short description of the work" },
            { n: "2", label: "What is included and not included" },
            { n: "3", label: "The price or price range" },
            { n: "4", label: "Timing or availability" },
            { n: "5", label: "A simple next step for approval" },
          ].map((item) => (
            <div key={item.n} style={{ ...s.card, display: "flex", gap: 14, alignItems: "center" }}>
              <div style={{ width: 30, height: 30, minWidth: 30, backgroundColor: "#f9731622", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", color: "#f97316", fontWeight: 700, fontSize: 13 }}>{item.n}</div>
              <span style={{ color: "#ccccdd", fontSize: 14 }}>{item.label}</span>
            </div>
          ))}
        </div>

        <p style={s.p}>For example, instead of sending &ldquo;Drywall repair is $180,&rdquo; you could send:</p>

        <div style={{ ...s.card, borderLeft: "3px solid #3b82f6", marginBottom: 32 }}>
          <p style={{ color: "#e0e0ef", fontSize: 14, lineHeight: 1.8, margin: 0, fontStyle: "italic" }}>
            Hi John — for patching the drywall hole in the hallway, the quote is $180 total. That includes patch material, compound, sanding, and primer. Final paint touch-up is not included. I&apos;m available Thursday afternoon if you&apos;d like me to take care of it.
          </p>
        </div>

        <p style={s.p}>That version is still short, but it feels much more trustworthy.</p>

        <h2 style={s.h2}>How to avoid common mistakes</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 32 }}>
          {[
            "Being too vague — if you don't define scope, the customer fills in the blanks themselves",
            "Replying too casually — makes you look unorganized even if your work is excellent",
            "Quoting too quickly when scope is unclear — ask a clarifying question before locking in a number",
            "Sending a single number with no breakdown — invites negotiation and creates disputes later",
          ].map((mistake) => (
            <div key={mistake} style={{ display: "flex", gap: 10, color: "#ccccdd", fontSize: 14 }}>
              <span style={{ color: "#ff4444", marginTop: 2 }}>✗</span>
              <span>{mistake}</span>
            </div>
          ))}
        </div>

        <h2 style={s.h2}>A simple quote text template</h2>
        <p style={s.p}>Here is a practical template you can adapt for almost any small job:</p>

        <div style={{ ...s.card, borderLeft: "3px solid #f97316", marginBottom: 32 }}>
          <p style={{ color: "#e0e0ef", fontSize: 14, lineHeight: 1.9, margin: 0, fontStyle: "italic" }}>
            Hi [Customer Name] — based on what you sent over, the quote for [job] is [price]. That includes [included items]. It does not include [excluded items]. I should be able to do it on [day/time]. If you want, I can send over a more formal version and get you booked in.
          </p>
        </div>

        <h2 style={s.h2}>When to stop texting and send a formal quote</h2>
        <p style={s.p}>
          If the job has multiple line items, material uncertainty, possible hidden damage, or a customer who seems detail-oriented, move from text into a proper quote format. Text is a good intake channel, but it is not always the best final document.
        </p>
        <p style={s.p}>
          For many small operators, the ideal workflow is: customer texts the request, you organize the details, send a clean quote, and then turn that quote into an invoice later if the customer approves. That flow protects you and makes the whole process feel more professional.
        </p>

        {/* CTA box */}
        <div style={{ ...s.card, textAlign: "center", padding: 36, margin: "32px 0" }}>
          <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 10 }}>Turn any customer text into a clean quote in seconds</div>
          <p style={{ ...s.muted, fontSize: 14, marginBottom: 24 }}>Paste the customer&apos;s message into SnipBid — AI drafts the line items, scope of work, and pricing. You review before sending.</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/demo" style={{ backgroundColor: "#f97316", color: "#fff", padding: "12px 28px", borderRadius: 8, textDecoration: "none", fontSize: 15, fontWeight: 700 }}>Try the Demo</Link>
            <Link href="/signup" style={{ border: "1px solid #f97316", color: "#f97316", padding: "12px 28px", borderRadius: 8, textDecoration: "none", fontSize: 15, fontWeight: 600 }}>Start Free</Link>
          </div>
        </div>

        {/* Internal links */}
        <h2 style={s.h2}>Related resources</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {[
            { href: "/blog/how-to-write-a-handyman-estimate", label: "How to Write a Handyman Estimate (With Example)" },
            { href: "/blog/quote-vs-invoice-for-handymen", label: "Quote vs Invoice for Handymen: What's the Difference?" },
            { href: "/blog/how-to-convert-quote-to-invoice", label: "How to Convert a Quote Into an Invoice (Without Rewriting Everything)" },
            { href: "/templates/handyman-quote-template", label: "Free Handyman Quote Template" },
            { href: "/handyman-quote-software", label: "Handyman Quote Software" },
          ].map((link) => (
            <Link key={link.href} href={link.href} style={{ color: "#f97316", fontSize: 14, textDecoration: "none" }}>→ {link.label}</Link>
          ))}
        </div>
      </article>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid #222244", padding: "24px 40px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12, marginTop: 40 }}>
        <Link href="/" style={{ color: "#f97316", fontWeight: 700, textDecoration: "none" }}>SnipBid</Link>
        <span style={{ color: "#555577", fontSize: 13 }}>© 2026 SnipBid</span>
      </footer>
    </div>
  );
}
