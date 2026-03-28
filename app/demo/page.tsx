"use client";

import Link from "next/link";
import { useState } from "react";

const DEMO_MESSAGE = `Hi, I need help replacing a bathroom faucet and patching a small drywall hole near the hallway. I'm available Thursday afternoon. Can you send me a quote?`;

export default function DemoPage() {
  const [message, setMessage] = useState(DEMO_MESSAGE);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState("");

  async function handleGenerate() {
    setLoading(true);
    setError("");
    setResult(null);
    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to generate");
      setResult(data);
    } catch (e: any) {
      setError(e.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const total = result?.suggested_line_items?.reduce(
    (sum: number, item: any) => sum + item.quantity * item.unit_price,
    0
  ) ?? 0;

  return (
    <div style={{ backgroundColor: "#0e0e1a", color: "#e0e0ef", minHeight: "100vh", fontFamily: "Inter, sans-serif" }}>

      {/* Nav */}
      <nav className="snip-nav">
        <Link href="/" style={{ color: "#f97316", fontWeight: 700, fontSize: 20, textDecoration: "none" }}>SnipBid</Link>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <Link href="/signup" style={{ backgroundColor: "#f97316", color: "#fff", padding: "8px 20px", borderRadius: 8, textDecoration: "none", fontSize: 14, fontWeight: 600 }}>
            Start Free
          </Link>
        </div>
      </nav>

      <div style={{ maxWidth: 860, margin: "0 auto", padding: "48px 20px 80px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ display: "inline-block", backgroundColor: "#f9731622", color: "#f97316", padding: "5px 14px", borderRadius: 20, fontSize: 13, marginBottom: 16, border: "1px solid #f9731444" }}>
            No signup required
          </div>
          <h1 style={{ fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 800, lineHeight: 1.2, marginBottom: 12 }}>
            See how SnipBid turns a customer message into a quote
          </h1>
          <p style={{ color: "#8888aa", fontSize: 15, maxWidth: 520, margin: "0 auto" }}>
            Edit the message below or paste your own, then click Generate Quote.
          </p>
        </div>

        <div className="hero-grid" style={{ gap: 32 }}>

          {/* Left: input */}
          <div>
            <div style={{ marginBottom: 8, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <label style={{ color: "#8888aa", fontSize: 13, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1 }}>
                Customer message
              </label>
              <button
                onClick={() => setMessage(DEMO_MESSAGE)}
                style={{ background: "none", border: "none", color: "#f97316", fontSize: 12, cursor: "pointer", padding: 0 }}
              >
                Reset example
              </button>
            </div>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={7}
              style={{
                width: "100%",
                backgroundColor: "#16162a",
                border: "1px solid #222244",
                borderRadius: 12,
                padding: "16px",
                color: "#e0e0ef",
                fontSize: 14,
                lineHeight: 1.7,
                resize: "vertical",
                fontFamily: "inherit",
                boxSizing: "border-box",
              }}
              placeholder="Paste a customer text, email, or job note here..."
            />
            <button
              onClick={handleGenerate}
              disabled={loading || message.trim().length < 10}
              style={{
                width: "100%",
                marginTop: 12,
                backgroundColor: loading ? "#7a3a08" : "#f97316",
                color: "#fff",
                border: "none",
                borderRadius: 10,
                padding: "14px 0",
                fontSize: 16,
                fontWeight: 700,
                cursor: loading ? "not-allowed" : "pointer",
                transition: "background 0.2s",
              }}
            >
              {loading ? "Generating quote..." : "Generate Quote →"}
            </button>
            {error && (
              <p style={{ color: "#ff5544", fontSize: 13, marginTop: 10 }}>{error}</p>
            )}
            <p style={{ color: "#555577", fontSize: 12, marginTop: 10, textAlign: "center" }}>
              AI drafts the quote. You review every price before sending.
            </p>
          </div>

          {/* Right: result */}
          <div>
            {!result && !loading && (
              <div style={{
                backgroundColor: "#16162a",
                border: "1px dashed #222244",
                borderRadius: 16,
                padding: 40,
                textAlign: "center",
                color: "#555577",
                minHeight: 300,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 12,
              }}>
                <div style={{ fontSize: 36 }}>📋</div>
                <p style={{ fontSize: 14 }}>Your quote draft will appear here</p>
              </div>
            )}

            {loading && (
              <div style={{
                backgroundColor: "#16162a",
                border: "1px solid #222244",
                borderRadius: 16,
                padding: 40,
                textAlign: "center",
                minHeight: 300,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 16,
              }}>
                <div style={{ width: 36, height: 36, border: "3px solid #222244", borderTopColor: "#f97316", borderRadius: "50%", animation: "spin 0.8s linear infinite" }} />
                <p style={{ color: "#8888aa", fontSize: 14 }}>Reading job details and building your quote...</p>
                <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
              </div>
            )}

            {result && (
              <div style={{ backgroundColor: "#16162a", border: "1px solid #222244", borderRadius: 16, overflow: "hidden" }}>
                {/* Quote header */}
                <div style={{ padding: "16px 20px", borderBottom: "1px solid #222244", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <div style={{ color: "#f97316", fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1 }}>Quote Draft</div>
                    {result.customer_name && (
                      <div style={{ color: "#ccccdd", fontSize: 14, marginTop: 2 }}>For: {result.customer_name}</div>
                    )}
                  </div>
                  <div style={{ backgroundColor: "#f9731622", color: "#f97316", padding: "4px 10px", borderRadius: 6, fontSize: 12, fontWeight: 600 }}>
                    All prices editable
                  </div>
                </div>

                {/* Line items */}
                <div style={{ padding: "0 20px" }}>
                  <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
                    <thead>
                      <tr style={{ borderBottom: "1px solid #222244" }}>
                        <th style={{ textAlign: "left", padding: "12px 0 8px", color: "#8888aa", fontWeight: 600 }}>Description</th>
                        <th style={{ textAlign: "right", padding: "12px 0 8px", color: "#8888aa", fontWeight: 600 }}>Qty</th>
                        <th style={{ textAlign: "right", padding: "12px 0 8px", color: "#8888aa", fontWeight: 600 }}>Price</th>
                        <th style={{ textAlign: "right", padding: "12px 0 8px", color: "#8888aa", fontWeight: 600 }}>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {result.suggested_line_items?.map((item: any, i: number) => (
                        <tr key={i} style={{ borderBottom: "1px solid #1a1a2e" }}>
                          <td style={{ padding: "10px 0", color: "#ccccdd" }}>
                            <div style={{ fontWeight: 500 }}>{item.service_name}</div>
                            {item.description && (
                              <div style={{ color: "#666688", fontSize: 12, marginTop: 2 }}>{item.description}</div>
                            )}
                          </td>
                          <td style={{ padding: "10px 0", textAlign: "right", color: "#8888aa" }}>{item.quantity}</td>
                          <td style={{ padding: "10px 0", textAlign: "right", color: "#8888aa" }}>${item.unit_price}</td>
                          <td style={{ padding: "10px 0", textAlign: "right", color: "#f97316", fontWeight: 600 }}>
                            ${(item.quantity * item.unit_price).toFixed(0)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Total */}
                <div style={{ padding: "12px 20px", borderTop: "1px solid #222244", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontWeight: 700, fontSize: 15 }}>Total</span>
                  <span style={{ color: "#f97316", fontWeight: 800, fontSize: 20 }}>${total.toFixed(0)}</span>
                </div>

                {/* Notes */}
                {result.notes && (
                  <div style={{ padding: "12px 20px", borderTop: "1px solid #222244", backgroundColor: "#0e0e1a" }}>
                    <div style={{ color: "#8888aa", fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1, marginBottom: 6 }}>Notes from customer</div>
                    <p style={{ color: "#aaaacc", fontSize: 13, lineHeight: 1.6, margin: 0 }}>{result.notes}</p>
                  </div>
                )}

                {/* CTA to save */}
                <div style={{ padding: 20, borderTop: "1px solid #222244", backgroundColor: "#12122a", textAlign: "center" }}>
                  <p style={{ color: "#8888aa", fontSize: 13, marginBottom: 12 }}>
                    Want to save this quote, edit it, and send it to your client?
                  </p>
                  <Link href="/signup" style={{
                    display: "block",
                    backgroundColor: "#f97316",
                    color: "#fff",
                    padding: "12px 0",
                    borderRadius: 8,
                    textDecoration: "none",
                    fontWeight: 700,
                    fontSize: 15,
                    textAlign: "center",
                  }}>
                    Create a free account to save this quote
                  </Link>
                  <p style={{ color: "#555577", fontSize: 12, marginTop: 8 }}>Free for 14 days · No credit card required</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Trust line */}
        <div style={{ textAlign: "center", marginTop: 48, color: "#555577", fontSize: 13 }}>
          <span style={{ color: "#22cc88" }}>●</span> Prices are suggestions only — you control every number before sending
        </div>
      </div>
    </div>
  );
}
