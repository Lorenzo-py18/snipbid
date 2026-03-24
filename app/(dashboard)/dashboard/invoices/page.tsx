"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";

const STATUS_COLORS: Record<string, string> = {
  unpaid: "#3b82f6", paid: "#22c55e", overdue: "#ef4444", cancelled: "#8888aa",
};

export default function InvoicesPage() {
  const [invoices, setInvoices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;
      const { data } = await supabase.from("invoices").select("*").eq("user_id", user.id).order("created_at", { ascending: false });
      setInvoices(data || []);
      setLoading(false);
    }
    load();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6" style={{ color: "#e0e0ef" }}>Invoices</h2>
      <div className="rounded-xl overflow-hidden" style={{ backgroundColor: "#16162a", border: "1px solid #222244" }}>
        {loading ? (
          <div className="p-8 text-center" style={{ color: "#8888aa" }}>Loading...</div>
        ) : invoices.length === 0 ? (
          <div className="p-8 text-center" style={{ color: "#8888aa" }}>
            No invoices yet. Convert an approved quote to create one.
          </div>
        ) : (
          <div className="divide-y" style={{ borderColor: "#222244" }}>
            {invoices.map(inv => (
              <div key={inv.id} className="flex items-center justify-between p-4">
                <div>
                  <p className="font-medium text-sm" style={{ color: "#e0e0ef" }}>{inv.invoice_number} · {inv.client_name}</p>
                  <p className="text-xs mt-0.5" style={{ color: "#8888aa" }}>
                    Due: {inv.due_date ? new Date(inv.due_date).toLocaleDateString() : "N/A"} · {new Date(inv.created_at).toLocaleDateString()}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-sm" style={{ color: "#e0e0ef" }}>${(inv.total || 0).toFixed(2)}</p>
                  <span className="text-xs px-2 py-0.5 rounded-full mt-1 inline-block"
                    style={{ backgroundColor: (STATUS_COLORS[inv.status] || "#8888aa") + "22", color: STATUS_COLORS[inv.status] || "#8888aa" }}>
                    {inv.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
