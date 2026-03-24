"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useParams } from "next/navigation";
import Link from "next/link";

const STATUS_COLORS: Record<string, string> = {
  unpaid: "#3b82f6", paid: "#22c55e", overdue: "#ef4444", cancelled: "#8888aa",
};

export default function InvoiceDetailPage() {
  const { id } = useParams();
  const [invoice, setInvoice] = useState<any>(null);
  const [lineItems, setLineItems] = useState<any[]>([]);

  useEffect(() => {
    async function load() {
      const { data: inv } = await supabase.from("invoices").select("*").eq("id", id).single();
      const { data: items } = await supabase.from("invoice_line_items").select("*").eq("invoice_id", id).order("sort_order");
      setInvoice(inv);
      setLineItems(items || []);
    }
    load();
  }, [id]);

  if (!invoice) return <div className="p-8 text-center" style={{ color: "#8888aa" }}>Loading...</div>;

  const appUrl = process.env.NEXT_PUBLIC_APP_URL || "https://snipbid.com";

  return (
    <div className="max-w-2xl">
      <div className="flex items-center gap-3 mb-6">
        <Link href="/dashboard/invoices" style={{ color: "#8888aa" }}>← Back</Link>
        <span style={{ color: "#222244" }}>|</span>
        <span className="font-medium" style={{ color: "#e0e0ef" }}>{invoice.invoice_number}</span>
        <span className="px-2 py-0.5 rounded-full text-xs" style={{ backgroundColor: (STATUS_COLORS[invoice.status] || "#8888aa") + "22", color: STATUS_COLORS[invoice.status] || "#8888aa" }}>
          {invoice.status}
        </span>
      </div>

      <div className="p-6 rounded-xl mb-4" style={{ backgroundColor: "#16162a", border: "1px solid #222244" }}>
        <h2 className="text-lg font-semibold mb-1" style={{ color: "#e0e0ef" }}>{invoice.client_name}</h2>
        <p className="text-sm" style={{ color: "#8888aa" }}>{invoice.client_email}</p>
        <p className="text-sm" style={{ color: "#8888aa" }}>{invoice.client_address}</p>
        <div className="grid grid-cols-2 gap-4 mt-3">
          <div>
            <p className="text-xs" style={{ color: "#8888aa" }}>Created</p>
            <p className="text-sm" style={{ color: "#e0e0ef" }}>{new Date(invoice.created_at).toLocaleDateString()}</p>
          </div>
          <div>
            <p className="text-xs" style={{ color: "#8888aa" }}>Due Date</p>
            <p className="text-sm" style={{ color: "#e0e0ef" }}>{invoice.due_date ? new Date(invoice.due_date).toLocaleDateString() : "On receipt"}</p>
          </div>
        </div>
      </div>

      <div className="p-6 rounded-xl mb-4" style={{ backgroundColor: "#16162a", border: "1px solid #222244" }}>
        <h3 className="font-medium mb-4" style={{ color: "#e0e0ef" }}>Line Items</h3>
        <div className="space-y-3">
          {lineItems.map(item => (
            <div key={item.id} className="flex justify-between text-sm">
              <div>
                <p style={{ color: "#e0e0ef" }}>{item.service_name}</p>
                <p style={{ color: "#8888aa" }}>Qty {item.quantity} × ${item.unit_price}</p>
              </div>
              <p style={{ color: "#e0e0ef" }}>${(item.amount || item.quantity * item.unit_price).toFixed(2)}</p>
            </div>
          ))}
        </div>
        <div className="border-t mt-4 pt-4 space-y-1" style={{ borderColor: "#222244" }}>
          <div className="flex justify-between text-sm" style={{ color: "#8888aa" }}>
            <span>Subtotal</span><span>${(invoice.subtotal || 0).toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm" style={{ color: "#8888aa" }}>
            <span>Tax ({invoice.tax_rate || 8.75}%)</span><span>${(invoice.tax_amount || 0).toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-bold" style={{ color: "#f97316" }}>
            <span>Total</span><span>${(invoice.total || 0).toFixed(2)}</span>
          </div>
        </div>
      </div>

      <div className="flex gap-3">
        {invoice.public_token && (
          <Link href={`/i/${invoice.public_token}`} target="_blank"
            className="flex-1 py-2.5 rounded-lg text-sm font-medium text-center border"
            style={{ borderColor: "#222244", color: "#e0e0ef" }}>
            Preview Invoice
          </Link>
        )}
        {invoice.public_token && (
          <button onClick={() => navigator.clipboard.writeText(`${appUrl}/i/${invoice.public_token}`)}
            className="flex-1 py-2.5 rounded-lg text-sm font-medium border"
            style={{ borderColor: "#f97316", color: "#f97316" }}>
            Copy Payment Link
          </button>
        )}
      </div>
    </div>
  );
}
