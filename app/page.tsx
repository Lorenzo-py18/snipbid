import Link from "next/link";

export default function HomePage() {
  return (
    <div style={{ backgroundColor: "#0e0e1a", color: "#e0e0ef", minHeight: "100vh", fontFamily: "Inter, sans-serif" }}>

      {/* Nav */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 40px", borderBottom: "1px solid #222244" }}>
        <span style={{ color: "#f97316", fontWeight: 700, fontSize: 20 }}>SnipBid</span>
        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <Link href="/login" style={{ color: "#8888aa", textDecoration: "none", fontSize: 14 }}>Sign In</Link>
          <Link href="/signup" style={{ backgroundColor: "#f97316", color: "#fff", padding: "8px 20px", borderRadius: 8, textDecoration: "none", fontSize: 14, fontWeight: 600 }}>
            Get Started Free
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ textAlign: "center", padding: "80px 20px 60px" }}>
        <div style={{ display: "inline-block", backgroundColor: "#f9731622", color: "#f97316", padding: "6px 16px", borderRadius: 20, fontSize: 13, marginBottom: 24, border: "1px solid #f9731644" }}>
          Free to start — no credit card required
        </div>
        <h1 style={{ fontSize: "clamp(36px, 6vw, 64px)", fontWeight: 800, lineHeight: 1.1, marginBottom: 20, maxWidth: 700, margin: "0 auto 20px" }}>
          Professional Quotes in{" "}
          <span style={{ color: "#f97316" }}>30 Seconds</span>
        </h1>
        <p style={{ color: "#8888aa", fontSize: 18, maxWidth: 520, margin: "0 auto 40px", lineHeight: 1.6 }}>
          AI-powered quoting and invoicing built for contractors. Stop wasting hours on paperwork — get paid faster.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/signup" style={{ backgroundColor: "#f97316", color: "#fff", padding: "14px 32px", borderRadius: 10, textDecoration: "none", fontSize: 16, fontWeight: 700 }}>
            Start Free Trial
          </Link>
          <Link href="/login" style={{ backgroundColor: "#16162a", color: "#e0e0ef", padding: "14px 32px", borderRadius: 10, textDecoration: "none", fontSize: 16, border: "1px solid #222244" }}>
            Sign In
          </Link>
        </div>
        <p style={{ color: "#8888aa", fontSize: 13, marginTop: 16 }}>14-day free trial · No setup fees</p>
      </section>

      {/* How it works */}
      <section style={{ padding: "60px 20px", maxWidth: 900, margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", fontSize: 32, fontWeight: 700, marginBottom: 48 }}>How It Works</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
          {[
            { step: "1", title: "Enter Job Details", desc: "Add client info and select services from pre-built templates for plumbers, electricians, and HVAC techs." },
            { step: "2", title: "AI Writes the Quote", desc: "Our AI generates a professional, detailed quote with scope of work, warranty terms, and pricing breakdown." },
            { step: "3", title: "Client Approves & Pays", desc: "Send via email. Client views, approves, and pays online with one click. No chasing required." },
          ].map((item) => (
            <div key={item.step} style={{ backgroundColor: "#16162a", border: "1px solid #222244", borderRadius: 16, padding: 28 }}>
              <div style={{ width: 40, height: 40, backgroundColor: "#f9731622", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", color: "#f97316", fontWeight: 700, fontSize: 18, marginBottom: 16 }}>
                {item.step}
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 10 }}>{item.title}</h3>
              <p style={{ color: "#8888aa", fontSize: 14, lineHeight: 1.6 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: "60px 20px", maxWidth: 900, margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", fontSize: 32, fontWeight: 700, marginBottom: 48 }}>Everything You Need</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20 }}>
          {[
            { icon: "⚡", title: "AI Quote Generation", desc: "Professional quotes written in seconds" },
            { icon: "📄", title: "PDF Export", desc: "Download and share polished quote PDFs" },
            { icon: "💳", title: "Online Payments", desc: "Accept cards via Stripe — get paid faster" },
            { icon: "📧", title: "Email Delivery", desc: "Send quotes directly to clients" },
            { icon: "✅", title: "Client Approval", desc: "Clients approve online with one click" },
            { icon: "📊", title: "Dashboard", desc: "Track all quotes and revenue in one place" },
          ].map((f) => (
            <div key={f.title} style={{ backgroundColor: "#16162a", border: "1px solid #222244", borderRadius: 12, padding: 20 }}>
              <div style={{ fontSize: 28, marginBottom: 10 }}>{f.icon}</div>
              <h4 style={{ fontSize: 15, fontWeight: 600, marginBottom: 6 }}>{f.title}</h4>
              <p style={{ color: "#8888aa", fontSize: 13, lineHeight: 1.5 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section style={{ padding: "60px 20px", maxWidth: 800, margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", fontSize: 32, fontWeight: 700, marginBottom: 12 }}>Simple Pricing</h2>
        <p style={{ textAlign: "center", color: "#8888aa", marginBottom: 48 }}>Start free, upgrade when you're ready</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
          {[
            {
              name: "Free Trial",
              price: "$0",
              period: "14 days",
              features: ["10 quotes", "AI generation", "PDF export", "Client approval"],
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
              features: ["Unlimited quotes", "Custom branding", "Priority AI", "Analytics dashboard"],
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

      {/* CTA */}
      <section style={{ textAlign: "center", padding: "60px 20px 80px" }}>
        <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 16 }}>Ready to save hours every week?</h2>
        <p style={{ color: "#8888aa", marginBottom: 32 }}>Join contractors already using SnipBid to win more jobs.</p>
        <Link href="/signup" style={{ backgroundColor: "#f97316", color: "#fff", padding: "16px 40px", borderRadius: 10, textDecoration: "none", fontSize: 18, fontWeight: 700 }}>
          Start Free Trial
        </Link>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid #222244", padding: "24px 40px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
        <span style={{ color: "#f97316", fontWeight: 700 }}>SnipBid</span>
        <span style={{ color: "#8888aa", fontSize: 13 }}>© 2026 SnipBid. All rights reserved.</span>
      </footer>

    </div>
  );
}
