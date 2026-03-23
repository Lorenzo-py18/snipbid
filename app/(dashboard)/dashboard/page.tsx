"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";

interface Stats {
  totalQuotes: number;
  pendingQuotes: number;
  approvedQuotes: number;
  totalRevenue: number;
}

export default function DashboardPage() {
  const [stats, setStats] = useState<Stats>({ totalQuotes: 0, pendingQuotes: 0, approvedQuotes: 0, totalRevenue: 0 });
  const [recentQuotes, setRecentQuotes] = useState<any[]>([]);

  useEffect(() => {
    async function load() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { data: quotes } = await supabase.from("quotes").select("*").eq("user_id", user.id).order("created_at", { ascending: false }).limit(5);
      if (quotes) {
        setRecentQuotes(quotes);
        setStats({
          totalQuotes: quotes.length,
          pendingQuotes: quotes.filter((q) => q.status === "sent").length,
          approvedQuotes: quotes.filter((q) => q.status === "approved" || q.status === "paid").length,
          totalRevenue: quotes.filter((q) => q.status === "paid").reduce((sum, q) => sum + (q.total || 0), 0),
        });
      }
    }
    load();
  }, []);

  const statusColor: Record<string, string> = {
    draft: "#8888aa",
    sent: "#3b82f6",
    approved: "#22c55e",
    declined: "#ef4444",
    paid: "#f97316",
    overdue: "#ef4444",
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold" style={{ color: "#e0e0ef" }}>Dashboard</h2>
        <Link href="/dashboard/quotes/new" className="px-4 py-2 rounded-lg text-sm font-medium text-white" style={{ backgroundColor: "#f97316" }}>
          + New Quote
        </Link>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Total Quotes", value: stats.totalQuotes },
          { label: "Pending", value: stats.pendingQuotes },
          { label: "Approved", value: stats.approvedQuotes },
          { label: "Revenue", value: `$${stats.totalRevenue.toFixed(0)}` },
        ].map((s) => (
          <div key={s.label} className="p-4 rounded-xl" style={{ backgroundColor: "#16162a", border: "1px solid #222244" }}>
            <p className="text-sm" style={{ color: "#8888aa" }}>{s.label}</p>
            <p className="text-2xl font-bold mt-1" style={{ color: "#e0e0ef" }}>{s.value}</p>
          </div>
        ))}
      </div>

      <div className="rounded-xl overflow-hidden" style={{ backgroundColor: "#16162a", border: "1px solid #222244" }}>
        <div className="p-4 border-b flex items-center justify-between" style={{ borderColor: "#222244" }}>
          <h3 className="font-medium" style={{ color: "#e0e0ef" }}>Recent Quotes</h3>
          <Link href="/dashboard/quotes" className="text-sm" style={{ color: "#f97316" }}>View all</Link>
        </div>
        {recentQuotes.length === 0 ? (
          <div className="p-8 text-center" style={{ color: "#8888aa" }}>
            No quotes yet.{" "}
            <Link href="/dashboard/quotes/new" style={{ color: "#f97316" }}>Create your first quote →</Link>
          </div>
        ) : (
          <div className="divide-y" style={{ borderColor: "#222244" }}>
            {recentQuotes.map((q) => (
              <Link key={q.id} href={`/dashboard/quotes/${q.id}`} className="flex items-center justify-between p-4 hover:bg-opacity-50 transition-colors" style={{ borderColor: "#222244" }}>
                <div>
                  <p className="font-medium text-sm" style={{ color: "#e0e0ef" }}>{q.client_name}</p>
                  <p className="text-xs mt-0.5" style={{ color: "#8888aa" }}>{new Date(q.created_at).toLocaleDateString()}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-sm" style={{ color: "#e0e0ef" }}>${(q.total || 0).toFixed(2)}</p>
                  <span className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: statusColor[q.status] + "22", color: statusColor[q.status] }}>
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
