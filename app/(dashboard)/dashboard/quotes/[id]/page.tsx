"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

const STATUS_COLORS: Record<string, string> = {
  draft: "#8888aa", sent: "#3b82f6", approved: "#22c55e",
  declined: "#ef4444", invoiced: "#a855f7", paid: "#f97316", overdue: "#ef4444",
};

export default function QuoteDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const router = useRouter();
  const [quote, setQuote] = useState<any>(null);
  const [lineItems, setLineItems] = useState<any[]>([]);
  const [sending, setSending] = useState(false);
  const [converting, setConverting] = useState(false);
  const [toast, setToast] = useState("");

  function showToast(msg: string) {
    setToast(msg);
    setTimeout(() => setToast(""), 3000);
  }

  useEffect(() => {
    async function load() {
      const { data: q } = await supabase.from("quotes").select("*").eq("id", id).single();
      const { data: items } = await supabase.from("line_items").select("*").eq("quote_id", id).order("sort_order");
      setQuote(q);
      setLineItems(items || []);
    }
    load();
  }, [id]);

  async function handleSend() {
    setSending(true);
    await supabase.from("quotes").update({ status: "sent", sent_at: new Date().toISOString() }).eq("id", id);
    try {
      await fetch("/api/quotes/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ quoteId: id }),
      });
      showToast("Quote sent to client!");
    } catch {
      showToast("Sent (email delivery may be delayed)");
    }
    setQuote((q: any) => ({ ...q, status: "sent" }));
    setSending(false);
  }

  async function handleConvertToInvoice() {
    setConverting(true);
    const res = await fetch("/api/invoices/from-quote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ quoteId: id }),
    });
    const data = await res.json();
    setConverting(false);
    if (data.invoice) {
      setQuote((q: any) => ({ ...q, status: "invoiced" }));
      router.push("/dashboard/invoices");
    }
  }

  async function handleDelete() {
    if (!confirm("Delete this quote? This cannot be undone.")) return;
    const { error } = await supabase.from("quotes").delete().eq("id", id);
    if (error) {
      showToast("Delete failed. Please try again.");
      return;
    }
    await supabase.from("line_items").delete().eq("quote_id", id);
    router.push("/dashboard/quotes");
  }

  if (!quote) return <div className="p-8 text-center" style={{ color: "#8888aa" }}>Loading...</div>;

  return (
    <div className="max-w-2xl">
      {toast && (
        <div className="fixed top-4 right-4 z-50 px-4 py-3 rounded-lg text-sm font-medium text-white shadow-lg"
          style={{ backgroundColor: toast.includes("failed") || toast.includes("Failed") ? "#ef4444" : "#22c55e" }}>
          {toast.includes("failed") || toast.includes("Failed") ? "✕" : "✓"} {toast}
        </div>
      )}
      <div className="flex items-center gap-3 mb-6">
        <Link href="/dashboard/quotes" style={{ color: "#8888aa" }}>← Back</Link>
        <span style={{ color: "#222244" }}>|</span>
        <span className="px-2 py-0.5 rounded-full text-xs" style={{ backgroundColor: (STATUS_COLORS[quote.status] || "#8888aa") + "22", color: STATUS_COLORS[quote.status] || "#8888aa" }}>
          {quote.status}
        </span>
      </div>

      <div className="p-6 rounded-xl mb-4" style={{ backgroundColor: "#16162a", border: "1px solid #222244" }}>
        <h2 className="text-lg font-semibold mb-1" style={{ color: "#e0e0ef" }}>{quote.client_name}</h2>
        <p className="text-sm" style={{ color: "#8888aa" }}>{quote.client_email} · {quote.client_phone}</p>
        <p className="text-sm" style={{ color: "#8888aa" }}>{quote.client_address}</p>
        <p className="text-xs mt-2" style={{ color: "#8888aa" }}>Created {new Date(quote.created_at).toLocaleDateString()}</p>
      </div>

      <div className="p-6 rounded-xl mb-4" style={{ backgroundColor: "#16162a", border: "1px solid #222244" }}>
        <h3 className="font-medium mb-3" style={{ color: "#e0e0ef" }}>Services</h3>
        <div className="space-y-3">
          {lineItems.map((item) => (
            <div key={item.id} className="flex justify-between text-sm">
              <div>
                <p style={{ color: "#e0e0ef" }}>{item.service_name}</p>
                <p style={{ color: "#8888aa" }}>Qty: {item.quantity} × ${Number(item.unit_price || 0).toFixed(2)}</p>
              </div>
              <p style={{ color: "#e0e0ef" }}>${Number(item.amount || 0).toFixed(2)}</p>
            </div>
          ))}
        </div>
        <div className="border-t mt-4 pt-4 space-y-1" style={{ borderColor: "#222244" }}>
          <div className="flex justify-between text-sm" style={{ color: "#8888aa" }}>
            <span>Subtotal</span><span>${(quote.subtotal || 0).toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm" style={{ color: "#8888aa" }}>
            <span>Tax</span><span>${(quote.tax_amount || 0).toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-bold" style={{ color: "#f97316" }}>
            <span>Total</span><span>${(quote.total || 0).toFixed(2)}</span>
          </div>
        </div>
      </div>

      {quote.ai_description && (
        <div className="p-6 rounded-xl mb-4" style={{ backgroundColor: "#16162a", border: "1px solid #222244" }}>
          <h3 className="font-medium mb-3" style={{ color: "#e0e0ef" }}>Quote Description</h3>
          <p className="text-sm whitespace-pre-wrap" style={{ color: "#e0e0ef" }}>{quote.ai_description}</p>
        </div>
      )}

      <div className="flex gap-3 flex-wrap">
        {quote.status === "draft" && (
          <button onClick={handleSend} disabled={sending} className="flex-1 py-2.5 rounded-lg text-sm font-medium text-white" style={{ backgroundColor: "#f97316" }}>
            {sending ? "Sending..." : "Send to Client"}
          </button>
        )}
        {quote.public_token && (
          <Link href={`/q/${quote.public_token}`} target="_blank" className="flex-1 py-2.5 rounded-lg text-sm font-medium text-center border" style={{ borderColor: "#222244", color: "#e0e0ef" }}>
            Preview Client View
          </Link>
        )}
        {quote.public_token && (
          <Link href={`/q/${quote.public_token}?print=1`} target="_blank" className="px-4 py-2.5 rounded-lg text-sm font-medium text-center border" style={{ borderColor: "#222244", color: "#8888aa" }}>
            ⬇ PDF
          </Link>
        )}
        {(quote.status === "approved") && (
          <button onClick={handleConvertToInvoice} disabled={converting} className="flex-1 py-2.5 rounded-lg text-sm font-medium text-white" style={{ backgroundColor: "#a855f7" }}>
            {converting ? "Creating..." : "Convert to Invoice"}
          </button>
        )}
        <button onClick={handleDelete} className="px-4 py-2.5 rounded-lg text-sm" style={{ color: "#ef4444" }}>
          Delete
        </button>
      </div>
    </div>
  );
}
