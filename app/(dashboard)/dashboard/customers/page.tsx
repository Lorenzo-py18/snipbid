"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function CustomersPage() {
  const [customers, setCustomers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAdd, setShowAdd] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", address: "", notes: "" });
  const [saving, setSaving] = useState(false);

  useEffect(() => { loadCustomers(); }, []);

  async function loadCustomers() {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;
    const { data } = await supabase.from("customers").select("*").eq("user_id", user.id).order("name");
    setCustomers(data || []);
    setLoading(false);
  }

  async function handleAdd(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;
    await supabase.from("customers").insert({ user_id: user.id, ...form });
    setForm({ name: "", email: "", phone: "", address: "", notes: "" });
    setShowAdd(false);
    setSaving(false);
    loadCustomers();
  }

  const inputStyle = { backgroundColor: "#0e0e1a", border: "1px solid #222244", color: "#e0e0ef" };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold" style={{ color: "#e0e0ef" }}>Customers</h2>
        <button onClick={() => setShowAdd(!showAdd)} className="px-4 py-2 rounded-lg text-sm font-medium text-white"
          style={{ backgroundColor: "#f97316" }}>+ Add Customer</button>
      </div>

      {showAdd && (
        <form onSubmit={handleAdd} className="p-5 rounded-xl mb-6 space-y-3" style={{ backgroundColor: "#16162a", border: "1px solid #222244" }}>
          <h3 className="font-medium" style={{ color: "#e0e0ef" }}>New Customer</h3>
          {[
            { label: "Name *", key: "name", placeholder: "Sarah Johnson" },
            { label: "Email", key: "email", placeholder: "sarah@email.com" },
            { label: "Phone", key: "phone", placeholder: "(555) 000-0000" },
            { label: "Address", key: "address", placeholder: "742 Evergreen Terrace" },
          ].map(({ label, key, placeholder }) => (
            <div key={key}>
              <label className="block text-xs mb-1" style={{ color: "#8888aa" }}>{label}</label>
              <input type="text" value={(form as any)[key]} onChange={e => setForm({ ...form, [key]: e.target.value })}
                placeholder={placeholder} required={key === "name"}
                className="w-full px-3 py-2 rounded-lg text-sm outline-none" style={inputStyle} />
            </div>
          ))}
          <div className="flex gap-2">
            <button type="submit" disabled={saving} className="px-4 py-2 rounded-lg text-sm font-medium text-white"
              style={{ backgroundColor: "#f97316" }}>Save</button>
            <button type="button" onClick={() => setShowAdd(false)} className="px-4 py-2 rounded-lg text-sm"
              style={{ color: "#8888aa" }}>Cancel</button>
          </div>
        </form>
      )}

      <div className="rounded-xl overflow-hidden" style={{ backgroundColor: "#16162a", border: "1px solid #222244" }}>
        {loading ? (
          <div className="p-8 text-center" style={{ color: "#8888aa" }}>Loading...</div>
        ) : customers.length === 0 ? (
          <div className="p-8 text-center" style={{ color: "#8888aa" }}>No customers yet. Add your first customer above.</div>
        ) : (
          <div className="divide-y" style={{ borderColor: "#222244" }}>
            {customers.map(c => (
              <div key={c.id} className="flex items-center justify-between p-4">
                <div>
                  <p className="font-medium text-sm" style={{ color: "#e0e0ef" }}>{c.name}</p>
                  <p className="text-xs mt-0.5" style={{ color: "#8888aa" }}>{c.email} {c.phone ? `· ${c.phone}` : ""}</p>
                </div>
                <p className="text-xs" style={{ color: "#8888aa" }}>{c.address}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
