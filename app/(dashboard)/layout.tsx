"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: "⊞" },
  { href: "/dashboard/quotes/new", label: "New Quote", icon: "+" },
  { href: "/dashboard/quotes", label: "Quotes", icon: "≡" },
  { href: "/dashboard/invoices", label: "Invoices", icon: "📄" },
  { href: "/dashboard/customers", label: "Customers", icon: "👥" },
  { href: "/dashboard/templates", label: "Templates", icon: "⭐" },
  { href: "/dashboard/settings", label: "Settings", icon: "⚙" },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [businessName, setBusinessName] = useState("SnipBid");

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (!user) { router.push("/login"); return; }
      supabase.from("profiles").select("business_name").eq("id", user.id).single()
        .then(({ data }) => { if (data?.business_name) setBusinessName(data.business_name); });
    });
  }, [router]);

  async function handleLogout() {
    await supabase.auth.signOut();
    router.push("/login");
  }

  return (
    <div className="flex h-screen" style={{ backgroundColor: "#0e0e1a" }}>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-56 border-r" style={{ backgroundColor: "#16162a", borderColor: "#222244" }}>
        <div className="p-4 border-b" style={{ borderColor: "#222244" }}>
          <h1 className="font-bold text-lg" style={{ color: "#f97316" }}>SnipBid</h1>
          <p className="text-xs truncate mt-0.5" style={{ color: "#8888aa" }}>{businessName}</p>
        </div>
        <nav className="flex-1 p-3 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors"
              style={{
                backgroundColor: pathname === item.href ? "#f97316" : "transparent",
                color: pathname === item.href ? "#fff" : "#e0e0ef",
              }}
            >
              <span>{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="p-3 border-t" style={{ borderColor: "#222244" }}>
          <button
            onClick={handleLogout}
            className="w-full text-left px-3 py-2 rounded-lg text-sm"
            style={{ color: "#8888aa" }}
          >
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <div className="flex-1 overflow-y-auto p-6">{children}</div>

        {/* Mobile Bottom Nav */}
        <nav className="md:hidden flex border-t" style={{ backgroundColor: "#16162a", borderColor: "#222244" }}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex-1 flex flex-col items-center py-3 text-xs"
              style={{ color: pathname === item.href ? "#f97316" : "#8888aa" }}
            >
              <span className="text-lg">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>
      </main>
    </div>
  );
}
