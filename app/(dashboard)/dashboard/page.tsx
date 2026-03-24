"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";

const STATUS_COLORS: Record<string, string> = {
  draft: "#8888aa", sent: "#3b82f6", approved: "#22c55e",
  declined: "#ef4444", invoiced: "#a855f7", paid: "#f97316", overdue: "#ef4444",
};

export default function DashboardPage() {
  const [quotes, setQuotes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;
      const { data } = await supabase.from("quotes").select("*").eq("user_id", user.id).order("created_at", { ascending: false }).limit(10);
      setQuotes(data || []);
      setLoading(false);
    }
    load();
  }, []);

  const needsAttention = quotes.filter(q => q.status === "sent" || q.status === "overdue");

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6" style={{ color: "#e0e0ef" }}>Dashboard</h2>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-3 mb-8">
        <Link href="/dashboard/quotes/new" className="p-4 rounded-xl text-center font-semibold text-white text-sm" style={{ backgroundColor: "#f97316" }}>
          + New Quote
        </Link>
        <Link href="/dashboard/quotes/new?mode=paste" className="p-4 rounded-xl text-center font-semibold text-sm border" style={{ borderColor: "#f97316", color: "#f97316", backgroundColor: "#f9731611" }}>
          📋 Paste Customer Message
        </Link>
      </div>

      {/* Needs Attention */}
      {needsAttention.length > 0 && (
        <div className="mb-6 p-4 rounded-xl" style={{ backgroundColor: "#1a1a2e", border: "1px solid #f9731644" }}>
          <h3 className="text-sm font-medium mb-3" style={{ color: "#f97316" }}>Needs Attention ({needsAttention.length})</h3>
          <div className="space-y-2">
            {needsAttention.map(q => (
              <Link key={q.id} href={`/dashboard/quotes/${q.id}`} className="flex items-center justify-between text-sm py-1">
                <span style={{ color: "#e0e0ef" }}>{q.client_name}</span>
                <span className="px-2 py-0.5 rounded-full text-xs" style={{ backgroundColor: (STATUS_COLORS[q.status] || "#8888aa") + "22", color: STATUS_COLORS[q.status] || "#8888aa" }}>
                  {q.status}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Recent Quotes */}
      <div className="rounded-xl overflow-hidden" style={{ backgroundColor: "#16162a", border: "1px solid #222244" }}>
        <div className="p-4 border-b flex items-center justify-between" style={{ borderColor: "#222244" }}>
          <h3 className="font-medium" style={{ color: "#e0e0ef" }}>Recent Quotes</h3>
          <Link href="/dashboard/quotes" className="text-sm" style={{ color: "#f97316" }}>View all</Link>
        </div>
        {loading ? (
          <div className="p-8 text-center" style={{ color: "#8888aa" }}>Loading...</div>
        ) : quotes.length === 0 ? (
          <div className="p-8 text-center" style={{ color: "#8888aa" }}>
            No quotes yet.{" "}
            <Link href="/dashboard/quotes/new" style={{ color: "#f97316" }}>Create your first →</Link>
          </div>
        ) : (
          <div className="divide-y" style={{ borderColor: "#222244" }}>
            {quotes.map(q => (
              <Link key={q.id} href={`/dashboard/quotes/${q.id}`} className="flex items-center justify-between p-4 hover:opacity-80">
                <div>
                  <p className="font-medium text-sm" style={{ color: "#e0e0ef" }}>{q.client_name}</p>
                  <p className="text-xs mt-0.5" style={{ color: "#8888aa" }}>{new Date(q.created_at).toLocaleDateString()}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-sm" style={{ color: "#e0e0ef" }}>${(q.total || 0).toFixed(2)}</p>
                  <span className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: (STATUS_COLORS[q.status] || "#8888aa") + "22", color: STATUS_COLORS[q.status] || "#8888aa" }}>
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
