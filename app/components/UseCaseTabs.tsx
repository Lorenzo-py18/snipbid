"use client";
import { useState } from "react";

const USE_CASES = [
  {
    tab: "🔧 Handyman",
    label: "General Handyman",
    message: "Hi, I need help replacing a bathroom faucet and patching a small drywall hole. Available Thursday afternoon. Can you send a quote?",
    items: [
      { name: "Replace bathroom faucet", price: "$205" },
      { name: "Patch drywall hole", price: "$120" },
    ],
    total: "$325",
    scope: "Replace existing bathroom faucet incl. labor and supply lines. Patch drywall hole with compound, sanding, and primer. Final paint not included.",
  },
  {
    tab: "🪠 Plumber",
    label: "Plumber",
    message: "Hey, my kitchen sink has been leaking for a few days and the garbage disposal isn't working either. Can you take a look and give me a price?",
    items: [
      { name: "Diagnose & repair sink leak", price: "$150" },
      { name: "Replace garbage disposal", price: "$280" },
    ],
    total: "$430",
    scope: "Inspect and repair kitchen sink leak — source diagnosis, re-seal or replace P-trap as needed. Remove old garbage disposal and install new unit. Labor and standard fittings included.",
  },
  {
    tab: "⚡ Electrician",
    label: "Electrician",
    message: "I need 3 new outlets installed in my garage and one outdoor GFCI outlet by the patio. When can you come out?",
    items: [
      { name: "Install 3 garage outlets", price: "$360" },
      { name: "Install outdoor GFCI outlet", price: "$185" },
    ],
    total: "$545",
    scope: "Install 3 standard 120V duplex outlets in garage with wire run from existing panel circuit. Install 1 weatherproof GFCI outlet on patio exterior wall. Permit not included.",
  },
  {
    tab: "🖌 Painter",
    label: "Painter",
    message: "Looking to get my living room and hallway repainted. Walls only, no ceiling. Rooms are pretty standard size. What would that run?",
    items: [
      { name: "Paint living room (walls only)", price: "$480" },
      { name: "Paint hallway (walls only)", price: "$220" },
    ],
    total: "$700",
    scope: "Two coats of client-supplied or standard interior latex paint on living room and hallway walls. Ceilings, trim, and doors not included. Furniture moving not included.",
  },
  {
    tab: "🧹 Cleaner",
    label: "Cleaner / Property Maintenance",
    message: "Hi, I manage a duplex and need a move-out deep clean on unit B plus some touch-up paint in the hallway. Tenant leaves Friday.",
    items: [
      { name: "Move-out deep clean (unit B)", price: "$350" },
      { name: "Touch-up paint hallway", price: "$120" },
    ],
    total: "$470",
    scope: "Full move-out deep clean of unit B including kitchen appliances, bathrooms, floors, and fixtures. Touch-up paint in hallway with matching paint — minor scuffs and nail holes.",
  },
];

export default function UseCaseTabs() {
  const [active, setActive] = useState(0);
  const uc = USE_CASES[active];

  return (
    <section style={{ padding: "0 20px 72px", maxWidth: 900, margin: "0 auto" }}>
      <h2 style={{ textAlign: "center", fontSize: 28, fontWeight: 700, marginBottom: 12 }}>
        Works for every type of home service job
      </h2>
      <p style={{ textAlign: "center", color: "#8888aa", fontSize: 14, marginBottom: 32 }}>
        Paste any customer message — SnipBid figures out the job type and builds the quote.
      </p>

      {/* Tab bar — horizontally scrollable on mobile */}
      <div style={{ overflowX: "auto", paddingBottom: 4, marginBottom: 24 }}>
        <div style={{ display: "flex", gap: 8, minWidth: "max-content" }}>
          {USE_CASES.map((uc, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                padding: "8px 16px",
                borderRadius: 8,
                border: `1px solid ${active === i ? "#f97316" : "#222244"}`,
                backgroundColor: active === i ? "#f9731622" : "#16162a",
                color: active === i ? "#f97316" : "#8888aa",
                fontSize: 13,
                fontWeight: active === i ? 600 : 400,
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "all 0.15s",
              }}
            >
              {uc.tab}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 16,
        backgroundColor: "#16162a",
        border: "1px solid #222244",
        borderRadius: 18,
        padding: 24,
      }}
        className="use-case-grid"
      >
        {/* Left: SMS bubble */}
        <div>
          <div style={{ color: "#8888aa", fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1, marginBottom: 14 }}>
            Customer message
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {/* SMS bubble */}
            <div style={{
              backgroundColor: "#e5e5ea",
              color: "#111",
              borderRadius: "18px 18px 18px 4px",
              padding: "12px 16px",
              fontSize: 13,
              lineHeight: 1.65,
              maxWidth: "90%",
            }}>
              {uc.message}
            </div>
            <div style={{ color: "#555577", fontSize: 11, paddingLeft: 4 }}>
              📱 Received via text
            </div>
          </div>

          <div style={{
            marginTop: 24,
            display: "flex",
            alignItems: "center",
            gap: 8,
            color: "#f97316",
            fontSize: 12,
            fontWeight: 600,
          }}>
            <span style={{ flex: 1, height: 1, backgroundColor: "#222244" }} />
            SnipBid processes in seconds
            <span style={{ flex: 1, height: 1, backgroundColor: "#222244" }} />
          </div>
        </div>

        {/* Right: Quote draft */}
        <div>
          <div style={{ color: "#f97316", fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1, marginBottom: 14 }}>
            SnipBid quote draft
          </div>

          {/* Line items */}
          <div style={{ marginBottom: 12 }}>
            {uc.items.map((item) => (
              <div key={item.name} style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "8px 0",
                borderBottom: "1px solid #1a1a30",
                fontSize: 13,
              }}>
                <span style={{ color: "#ccccdd" }}>{item.name}</span>
                <span style={{ color: "#f97316", fontWeight: 600 }}>{item.price}</span>
              </div>
            ))}
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "10px 0",
              fontWeight: 700,
              fontSize: 14,
            }}>
              <span style={{ color: "#e0e0ef" }}>Total</span>
              <span style={{ color: "#f97316" }}>{uc.total}</span>
            </div>
          </div>

          {/* Scope */}
          <div style={{
            backgroundColor: "#0e0e1a",
            borderRadius: 8,
            padding: "10px 14px",
            fontSize: 12,
            color: "#8888aa",
            lineHeight: 1.6,
            marginBottom: 12,
          }}>
            <strong style={{ color: "#ccccdd" }}>Scope: </strong>
            {uc.scope}
          </div>

          {/* Editable badge */}
          <div style={{ display: "flex", alignItems: "center", gap: 6, color: "#22cc88", fontSize: 12 }}>
            <span>●</span> All prices editable before sending
          </div>
        </div>
      </div>

      {/* Caption */}
      <p style={{ textAlign: "center", color: "#555577", fontSize: 13, marginTop: 16 }}>
        SnipBid extracts job details from any message — text, email, or Facebook — and drafts a quote you can edit and send.
      </p>
    </section>
  );
}
