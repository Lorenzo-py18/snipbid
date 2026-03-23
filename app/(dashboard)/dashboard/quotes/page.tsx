"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";

const STATUS_COLORS: Record<string, string> = {
  draft: "#8888aa", sent: "#3b82f6", approved: "#22c55e",
  declined: "#ef4444", invoiced: "#a855f7", paid: "#f97316", overdue: "#ef4444",
};

export default function QuotesPage() {
  const [quotes, setQuotes] = useState<any[]>([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;
      const { data } = await supabase.from("quotes").select("*").eq("user_id", user.id).order("created_at", { ascending: false });
      setQuotes(data || []);
      setLoading(false);
    }
    load();
  }, []);

  const filtered = filter === "all" ? quotes : quotes.filter((q) => q.status === filter);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold" style={{ color: "#e0e0ef" }}>Quotes</h2>
        <Link href="/dashboard/quotes/new" className="px-4 py-2 rounded-lg text-sm font-medium text-white" style={{ backgroundColor: "#f97316" }}>
          + New Quote
        </Link>
      </div>

      <div className="flex gap-2 mb-4 flex-wrap">
        {["all", "draft", "sent", "approved", "paid", "overdue"].map((s) => (
          <button
            key={s}
            onClick={() => setFilter(s)}
            className="px-3 py-1 rounded-full text-xs capitalize"
            style={{
              backgroundColor: filter === s ? "#f97316" : "#16162a",
              color: filter === s ? "#fff" : "#8888aa",
              border: "1px solid #222244",
            }}
          >
            {s}
          </button>
        ))}
      </div>

      <div className="rounded-xl overflow-hidden" style={{ backgroundColor: "#16162a", border: "1px solid #222244" }}>
        {loading ? (
          <div className="p-8 text-center" style={{ color: "#8888aa" }}>Loading...</div>
        ) : filtered.length === 0 ? (
          <div className="p-8 text-center" style={{ color: "#8888aa" }}>No quotes found.</div>
        ) : (
          <div className="divide-y" style={{ borderColor: "#222244" }}>
            {filtered.map((q) => (
              <Link key={q.id} href={`/dashboard/quotes/${q.id}`} className="flex items-center justify-between p-4 hover:opacity-80 transition-opacity">
                <div>
                  <p className="font-medium text-sm" style={{ color: "#e0e0ef" }}>{q.client_name}</p>
                  <p className="text-xs mt-0.5" style={{ color: "#8888aa" }}>{q.client_address || "No address"} · {new Date(q.created_at).toLocaleDateString()}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-sm" style={{ color: "#e0e0ef" }}>${(q.total || 0).toFixed(2)}</p>
                  <span className="text-xs px-2 py-0.5 rounded-full mt-1 inline-block" style={{ backgroundColor: (STATUS_COLORS[q.status] || "#8888aa") + "22", color: STATUS_COLORS[q.status] || "#8888aa" }}>
                    {q.status}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
