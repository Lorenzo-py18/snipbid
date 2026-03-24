"use client";
import { useState } from "react";

export default function ClientInvoicePage({ invoice, lineItems, profile }: { invoice: any; lineItems: any[]; profile: any }) {
  const [processing, setProcessing] = useState(false);

  async function handlePay() {
    setProcessing(true);
    try {
      const res = await fetch("/api/quotes/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ invoiceId: invoice.id }),
      });
      const { url } = await res.json();
      if (url) window.location.href = url;
    } catch {
      setProcessing(false);
    }
  }

  const STATUS_COLORS: Record<string, string> = {
    unpaid: "#3b82f6", paid: "#22c55e", overdue: "#ef4444", cancelled: "#8888aa",
  };

  return (
    <div className="min-h-screen py-8 px-4" style={{ backgroundColor: "#0e0e1a" }}>
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="p-6 rounded-xl mb-4" style={{ backgroundColor: "#16162a", border: "1px solid #222244" }}>
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-xl font-bold" style={{ color: "#f97316" }}>{profile?.business_name || "Contractor"}</h1>
              <p className="text-sm font-medium mt-1" style={{ color: "#e0e0ef" }}>{invoice.invoice_number}</p>
              {profile?.phone && <p className="text-sm" style={{ color: "#8888aa" }}>{profile.phone}</p>}
            </div>
            <span className="px-3 py-1 rounded-full text-sm font-medium" style={{ backgroundColor: (STATUS_COLORS[invoice.status] || "#8888aa") + "22", color: STATUS_COLORS[invoice.status] || "#8888aa" }}>
              {invoice.status}
            </span>
          </div>
        </div>

        {/* Client + Due Date */}
        <div className="p-6 rounded-xl mb-4" style={{ backgroundColor: "#16162a", border: "1px solid #222244" }}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs mb-1" style={{ color: "#8888aa" }}>Bill To</p>
              <p className="font-medium" style={{ color: "#e0e0ef" }}>{invoice.client_name}</p>
              {invoice.client_address && <p className="text-sm" style={{ color: "#8888aa" }}>{invoice.client_address}</p>}
            </div>
            <div className="text-right">
              <p className="text-xs mb-1" style={{ color: "#8888aa" }}>Due Date</p>
              <p className="font-medium" style={{ color: invoice.status === "overdue" ? "#ef4444" : "#e0e0ef" }}>
                {invoice.due_date ? new Date(invoice.due_date).toLocaleDateString() : "On receipt"}
              </p>
            </div>
          </div>
        </div>

        {/* Line Items */}
        <div className="p-6 rounded-xl mb-4" style={{ backgroundColor: "#16162a", border: "1px solid #222244" }}>
          <h2 className="font-medium mb-4" style={{ color: "#e0e0ef" }}>Services</h2>
          <div className="space-y-3">
            {lineItems.map(item => (
              <div key={item.id} className="flex justify-between text-sm pb-3 border-b last:border-0" style={{ borderColor: "#222244" }}>
                <div>
                  <p style={{ color: "#e0e0ef" }}>{item.service_name}</p>
                  {item.description && <p className="text-xs mt-0.5" style={{ color: "#8888aa" }}>{item.description}</p>}
                  <p className="text-xs mt-0.5" style={{ color: "#8888aa" }}>Qty: {item.quantity} × ${item.unit_price}</p>
                </div>
                <p className="font-medium" style={{ color: "#e0e0ef" }}>${(item.amount || item.quantity * item.unit_price).toFixed(2)}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 space-y-1">
            <div className="flex justify-between text-sm" style={{ color: "#8888aa" }}>
              <span>Subtotal</span><span>${(invoice.subtotal || 0).toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm" style={{ color: "#8888aa" }}>
              <span>Tax ({invoice.tax_rate || 8.75}%)</span><span>${(invoice.tax_amount || 0).toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-xl font-bold pt-2 border-t" style={{ color: "#f97316", borderColor: "#222244" }}>
              <span>Total Due</span><span>${(invoice.total || 0).toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Pay Button */}
        {invoice.status === "unpaid" || invoice.status === "overdue" ? (
          <button onClick={handlePay} disabled={processing}
            className="w-full py-4 rounded-xl font-bold text-white text-lg"
            style={{ backgroundColor: "#f97316", opacity: processing ? 0.7 : 1 }}>
            {processing ? "Processing..." : `Pay Now — $${(invoice.total || 0).toFixed(2)}`}
          </button>
        ) : invoice.status === "paid" ? (
          <div className="p-4 rounded-xl text-center" style={{ backgroundColor: "#22c55e22", border: "1px solid #22c55e44" }}>
            <p className="font-bold" style={{ color: "#22c55e" }}>✓ Paid</p>
            {invoice.paid_at && <p className="text-sm mt-1" style={{ color: "#8888aa" }}>Paid on {new Date(invoice.paid_at).toLocaleDateString()}</p>}
          </div>
        ) : null}

        <p className="text-center text-xs mt-6" style={{ color: "#8888aa" }}>Powered by SnipBid</p>
      </div>
    </div>
  );
}
