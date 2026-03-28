"use client";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

export default function ClientQuotePage({ quote, lineItems, profile }: { quote: any; lineItems: any[]; profile: any }) {
  const [feedback, setFeedback] = useState("");
  const [showFeedback, setShowFeedback] = useState(false);
  const [status, setStatus] = useState(quote.status);
  const [processing, setProcessing] = useState(false);
  const [isPrint, setIsPrint] = useState(false);
  const [toast, setToast] = useState("");

  function showToast(msg: string) {
    setToast(msg);
    setTimeout(() => setToast(""), 3000);
  }

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("print") === "1") {
      setIsPrint(true);
      setTimeout(() => window.print(), 500);
    }
  }, []);

  async function handleApprove() {
    await supabase.from("quotes").update({ status: "approved", approved_at: new Date().toISOString() }).eq("id", quote.id);
    setStatus("approved");
    showToast("Quote approved! You can now proceed to payment.");
  }

  async function handlePay() {
    setProcessing(true);
    try {
      const res = await fetch("/api/quotes/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ quoteId: quote.id }),
      });
      const { url } = await res.json();
      if (url) window.location.href = url;
    } catch {
      setProcessing(false);
    }
  }

  async function handleFeedback() {
    await supabase.from("quotes").update({ status: "declined", feedback_notes: feedback }).eq("id", quote.id);
    setStatus("declined");
    setShowFeedback(false);
    showToast("Changes requested. The contractor will be in touch.");
  }

  const STATUS_COLORS: Record<string, string> = {
    sent: "#3b82f6", approved: "#22c55e", declined: "#ef4444", paid: "#f97316",
  };

  return (
    <div className="min-h-screen py-8 px-4" style={{ backgroundColor: "#0e0e1a" }}>
      {toast && (
        <div className="fixed top-4 right-4 z-50 px-4 py-3 rounded-lg text-sm font-medium text-white shadow-lg no-print"
          style={{ backgroundColor: "#22c55e" }}>
          ✓ {toast}
        </div>
      )}
      <style>{`
        @media print {
          body { background: #fff !important; }
          .no-print { display: none !important; }
          .print-page { background: #fff !important; color: #111 !important; border: none !important; }
          .print-text { color: #111 !important; }
          .print-muted { color: #555 !important; }
        }
      `}</style>
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="p-6 rounded-xl mb-4" style={{ backgroundColor: "#16162a", border: "1px solid #222244" }}>
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-xl font-bold" style={{ color: "#f97316" }}>{profile?.business_name || "Contractor"}</h1>
              {profile?.license_number && <p className="text-sm" style={{ color: "#8888aa" }}>License: {profile.license_number}</p>}
              {profile?.phone && <p className="text-sm" style={{ color: "#8888aa" }}>{profile.phone}</p>}
            </div>
            <span className="px-3 py-1 rounded-full text-sm" style={{ backgroundColor: (STATUS_COLORS[status] || "#8888aa") + "22", color: STATUS_COLORS[status] || "#8888aa" }}>
              {status}
            </span>
          </div>
        </div>

        {/* Client Info */}
        <div className="p-6 rounded-xl mb-4" style={{ backgroundColor: "#16162a", border: "1px solid #222244" }}>
          <h2 className="font-medium mb-2" style={{ color: "#e0e0ef" }}>Quote For</h2>
          <p style={{ color: "#e0e0ef" }}>{quote.client_name}</p>
          <p className="text-sm" style={{ color: "#8888aa" }}>{quote.client_address}</p>
        </div>

        {/* AI Description */}
        {quote.ai_description && (
          <div className="p-6 rounded-xl mb-4" style={{ backgroundColor: "#16162a", border: "1px solid #222244" }}>
            <h2 className="font-medium mb-3" style={{ color: "#e0e0ef" }}>Scope of Work</h2>
            <p className="text-sm whitespace-pre-wrap leading-relaxed" style={{ color: "#e0e0ef" }}>{quote.ai_description}</p>
          </div>
        )}

        {/* Line Items */}
        <div className="p-6 rounded-xl mb-4" style={{ backgroundColor: "#16162a", border: "1px solid #222244" }}>
          <h2 className="font-medium mb-4" style={{ color: "#e0e0ef" }}>Pricing Breakdown</h2>
          <div className="space-y-3">
            {lineItems.map((item) => (
              <div key={item.id} className="flex justify-between text-sm pb-3 border-b" style={{ borderColor: "#222244" }}>
                <div>
                  <p style={{ color: "#e0e0ef" }}>{item.service_name}</p>
                  <p style={{ color: "#8888aa" }}>Qty: {item.quantity} × ${Number(item.unit_price || 0).toFixed(2)}</p>
                </div>
                <p className="font-medium" style={{ color: "#e0e0ef" }}>${Number(item.amount || 0).toFixed(2)}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 space-y-1">
            <div className="flex justify-between text-sm" style={{ color: "#8888aa" }}>
              <span>Subtotal</span><span>${(quote.subtotal || 0).toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm" style={{ color: "#8888aa" }}>
              <span>Tax</span><span>${(quote.tax_amount || 0).toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-xl font-bold pt-2 border-t" style={{ color: "#f97316", borderColor: "#222244" }}>
              <span>Total</span><span>${(quote.total || 0).toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* PDF Download */}
        <div className="flex justify-end mb-2 no-print">
          <button
            onClick={() => window.print()}
            className="px-4 py-2 rounded-lg text-sm border"
            style={{ borderColor: "#222244", color: "#8888aa" }}
          >
            ⬇ Download / Print PDF
          </button>
        </div>

        {/* Actions */}
        {status === "sent" && (
          <div className="flex gap-3 no-print">
            <button onClick={handleApprove} className="flex-1 py-3 rounded-xl font-medium text-white" style={{ backgroundColor: "#22c55e" }}>
              Approve Quote
            </button>
            <button onClick={() => setShowFeedback(true)} className="flex-1 py-3 rounded-xl font-medium border" style={{ borderColor: "#222244", color: "#e0e0ef" }}>
              Request Changes
            </button>
          </div>
        )}

        {status === "approved" && (
          <button onClick={handlePay} disabled={processing} className="no-print w-full py-3 rounded-xl font-medium text-white" style={{ backgroundColor: "#f97316" }}>
            {processing ? "Processing..." : `Pay Now — $${(quote.total || 0).toFixed(2)}`}
          </button>
        )}

        {showFeedback && (
          <div className="no-print mt-4 p-4 rounded-xl" style={{ backgroundColor: "#16162a", border: "1px solid #222244" }}>
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Describe the changes you'd like..."
              className="w-full p-3 rounded-lg text-sm outline-none min-h-24"
              style={{ backgroundColor: "#0e0e1a", border: "1px solid #222244", color: "#e0e0ef" }}
            />
            <div className="flex gap-2 mt-2">
              <button onClick={handleFeedback} className="px-4 py-2 rounded-lg text-sm font-medium text-white" style={{ backgroundColor: "#f97316" }}>
                Submit
              </button>
              <button onClick={() => setShowFeedback(false)} className="px-4 py-2 rounded-lg text-sm" style={{ color: "#8888aa" }}>
                Cancel
              </button>
            </div>
          </div>
        )}

        <p className="text-center text-xs mt-6" style={{ color: "#8888aa" }}>Powered by SnipBid</p>
      </div>
    </div>
  );
}
