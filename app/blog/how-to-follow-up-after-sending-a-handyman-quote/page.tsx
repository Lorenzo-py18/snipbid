import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Follow Up After Sending a Handyman Quote (Templates Included)",
  description: "Learn how to follow up after sending a handyman quote without sounding pushy. Includes text and email follow-up templates, timing tips, and common mistakes to avoid.",
  alternates: { canonical: "https://snipbid.com/blog/how-to-follow-up-after-sending-a-handyman-quote" },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Follow Up After Sending a Handyman Quote (Templates Included)",
  description: "Learn when and how to follow up after sending a handyman quote, with templates and practical advice for small home service businesses.",
  author: { "@type": "Organization", name: "SnipBid" },
  publisher: { "@type": "Organization", name: "SnipBid", url: "https://snipbid.com" },
  url: "https://snipbid.com/blog/how-to-follow-up-after-sending-a-handyman-quote",
  datePublished: "2026-04-07",
  dateModified: "2026-04-07",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How soon should a handyman follow up after sending a quote?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A good rule is to follow up within 24 to 48 hours for smaller jobs. If the customer said they needed time to think, follow up on the timeline they mentioned."
      }
    },
    {
      "@type": "Question",
      name: "What should I say when following up on a quote?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Keep it short and easy to reply to. Remind the customer what the quote was for, ask if they have any questions, and give them a simple next step if they want to move forward."
      }
    },
    {
      "@type": "Question",
      name: "How many times should I follow up on a handyman quote?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For most small handyman jobs, one or two follow-ups is enough. More than that can feel pushy unless the customer has already been actively engaged."
      }
    }
  ]
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

export default function HowToFollowUpAfterSendingAHandymanQuotePage() {
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
          <Link href="/" style={{ color: "#8888aa", textDecoration: "none" }}>SnipBid</Link>
          {" / "}
          <Link href="/blog" style={{ color: "#8888aa", textDecoration: "none" }}>Blog</Link>
          {" / "}
          <span style={{ color: "#e0e0ef" }}>How to Follow Up After Sending a Handyman Quote</span>
        </div>

        <h1 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 800, lineHeight: 1.2, marginBottom: 16 }}>
          How to Follow Up After Sending a Handyman Quote (Templates Included)
        </h1>
        <p style={{ ...s.muted, fontSize: 14, marginBottom: 40 }}>By SnipBid · April 7, 2026 · 6 min read</p>

        <div style={{ ...s.card, borderLeft: "3px solid #f97316", marginBottom: 32 }}>
          <p style={{ color: "#e0e0ef", fontSize: 15, lineHeight: 1.7, margin: 0 }}>
            <strong>The short answer:</strong> follow up within 24 to 48 hours, keep the message short, remind the customer what the quote was for, and make it easy for them to reply with a yes, a question, or a preferred time.
          </p>
        </div>

        <p style={s.p}>
          A lot of handyman quotes do not get rejected. They just go quiet. The customer gets busy, forgets to reply, keeps shopping around, or means to answer later and never does. If you never follow up, a lot of perfectly good jobs simply disappear.
        </p>
        <p style={s.p}>
          The goal of a good follow-up is not to pressure people. It is to bring the quote back to the top of their inbox, remind them you are ready, and make the next step easy.
        </p>

        <h2 style={s.h2}>Why follow-up matters more than most handymen think</h2>
        <p style={s.p}>
          For small repair jobs, customers are often comparing a few options quickly. If you send a quote and then disappear, the most responsive person often wins, even when their price is not the lowest. A clean follow-up signals professionalism and keeps the conversation moving.
        </p>

        <h2 style={s.h2}>When to follow up</h2>
        <p style={s.p}>
          For smaller jobs like faucet replacement, drywall patching, door repair, or basic installations, follow up within 24 to 48 hours. For larger or more detailed jobs, you can give the customer a little more time if they said they needed to discuss it or review options.
        </p>
        <p style={s.p}>
          A simple rhythm that works well for small service businesses is:
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 32 }}>
          {[
            "First follow-up: 1 to 2 days after sending the quote",
            "Second follow-up: 3 to 5 days later if there was no reply",
            "Stop after that unless the customer re-engages",
          ].map((item) => (
            <div key={item} style={{ display: "flex", gap: 10, color: "#ccccdd", fontSize: 14 }}>
              <span style={{ color: "#f97316", marginTop: 2 }}>✓</span>
              <span>{item}</span>
            </div>
          ))}
        </div>

        <h2 style={s.h2}>What a good follow-up message should include</h2>
        <p style={s.p}>A strong follow-up should be short and easy to answer. In most cases, it should include:</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 32 }}>
          {[
            "A reminder of the job",
            "A check-in question",
            "A simple next step",
            "A tone that feels helpful, not pushy",
          ].map((item) => (
            <div key={item} style={{ ...s.card, display: "flex", gap: 12, alignItems: "center" }}>
              <span style={{ color: "#f97316", fontWeight: 700 }}>•</span>
              <span style={{ color: "#ccccdd", fontSize: 14 }}>{item}</span>
            </div>
          ))}
        </div>

        <h2 style={s.h2}>Follow-up text templates you can copy</h2>
        <p style={s.p}>Here are three practical examples you can adapt.</p>

        <div style={{ ...s.card, borderLeft: "3px solid #3b82f6", marginBottom: 20 }}>
          <p style={{ color: "#e0e0ef", fontSize: 14, lineHeight: 1.8, margin: 0, fontStyle: "italic" }}>
            Hi Sarah — just checking in on the quote I sent for the faucet replacement and drywall patch. Let me know if you have any questions or if you’d like to get it scheduled.
          </p>
        </div>

        <div style={{ ...s.card, borderLeft: "3px solid #22c55e", marginBottom: 20 }}>
          <p style={{ color: "#e0e0ef", fontSize: 14, lineHeight: 1.8, margin: 0, fontStyle: "italic" }}>
            Hey John — wanted to follow up on the quote for the small repair work. If you want to move forward, I still have availability later this week.
          </p>
        </div>

        <div style={{ ...s.card, borderLeft: "3px solid #f97316", marginBottom: 32 }}>
          <p style={{ color: "#e0e0ef", fontSize: 14, lineHeight: 1.8, margin: 0, fontStyle: "italic" }}>
            Hi — just making sure you saw the quote I sent over. Happy to answer any questions if you’re still deciding.
          </p>
        </div>

        <h2 style={s.h2}>What to avoid</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 32 }}>
          {[
            "Do not send long paragraphs that feel like pressure",
            "Do not ask the customer multiple questions in one message",
            "Do not follow up too many times on small jobs",
            "Do not sound frustrated if they have not replied",
          ].map((item) => (
            <div key={item} style={{ display: "flex", gap: 10, color: "#ccccdd", fontSize: 14 }}>
              <span style={{ color: "#ff4444", marginTop: 2 }}>✗</span>
              <span>{item}</span>
            </div>
          ))}
        </div>

        <h2 style={s.h2}>How a better quote makes follow-up easier</h2>
        <p style={s.p}>
          If your original quote is vague, follow-up becomes harder because the customer is still unclear on what they are approving. But if the quote already looks clean and professional, your follow-up can stay short because the customer already understands the scope, price, and next step.
        </p>
        <p style={s.p}>
          That is one reason a structured quote-to-invoice workflow matters so much for small service businesses. It reduces confusion on the front end and saves you from rewriting everything on the back end.
        </p>

        <div style={{ ...s.card, textAlign: "center", padding: 36, margin: "32px 0" }}>
          <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 10 }}>Send cleaner quotes and follow up with less friction</div>
          <p style={{ ...s.muted, fontSize: 14, marginBottom: 24 }}>SnipBid helps you turn rough customer requests into professional quotes you can send fast — and convert into invoices when the customer approves.</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/demo" style={{ backgroundColor: "#f97316", color: "#fff", padding: "12px 28px", borderRadius: 8, textDecoration: "none", fontSize: 15, fontWeight: 700 }}>Try the Demo</Link>
            <Link href="/signup" style={{ border: "1px solid #f97316", color: "#f97316", padding: "12px 28px", borderRadius: 8, textDecoration: "none", fontSize: 15, fontWeight: 600 }}>Start Free</Link>
          </div>
        </div>

        <h2 style={s.h2}>Related resources</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {[
            { href: "/blog/how-to-respond-to-customer-quote-request", label: "How to Respond When a Customer Texts You for a Quote" },
            { href: "/blog/how-to-send-a-quote-over-text", label: "How to Send a Professional Quote Over Text" },
            { href: "/blog/how-to-convert-quote-to-invoice", label: "How to Convert a Quote Into an Invoice" },
            { href: "/handyman-quote-software", label: "Handyman Quote Software" },
            { href: "/quote-to-invoice-software", label: "Quote to Invoice Software" },
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
