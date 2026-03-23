"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function SettingsPage() {
  const [form, setForm] = useState({
    business_name: "", license_number: "", phone: "", email: "",
    address: "", tax_rate: 8.75, quote_validity_days: 30, payment_terms: "Due within 14 days",
  });
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (!user) return;
      supabase.from("profiles").select("*").eq("id", user.id).single()
        .then(({ data }) => { if (data) setForm((prev) => ({ ...prev, ...data })); });
    });
  }, []);

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;
    await supabase.from("profiles").upsert({ id: user.id, ...form });
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <div className="max-w-lg">
      <h2 className="text-xl font-semibold mb-6" style={{ color: "#e0e0ef" }}>Settings</h2>
      <form onSubmit={handleSave} className="p-6 rounded-xl space-y-4" style={{ backgroundColor: "#16162a", border: "1px solid #222244" }}>
        {[
          { label: "Business Name", key: "business_name", placeholder: "Pro Plumbing Solutions" },
          { label: "License Number", key: "license_number", placeholder: "PLB-12345" },
          { label: "Phone", key: "phone", placeholder: "(555) 000-0000" },
          { label: "Email", key: "email", placeholder: "you@business.com" },
          { label: "Business Address", key: "address", placeholder: "123 Main St" },
          { label: "Payment Terms", key: "payment_terms", placeholder: "Due within 14 days" },
        ].map(({ label, key, placeholder }) => (
          <div key={key}>
            <label className="block text-xs mb-1" style={{ color: "#8888aa" }}>{label}</label>
            <input
              type="text"
              value={(form as any)[key]}
              onChange={(e) => setForm({ ...form, [key]: e.target.value })}
              placeholder={placeholder}
              className="w-full px-3 py-2 rounded-lg text-sm outline-none"
              style={{ backgroundColor: "#0e0e1a", border: "1px solid #222244", color: "#e0e0ef" }}
            />
          </div>
        ))}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs mb-1" style={{ color: "#8888aa" }}>Tax Rate (%)</label>
            <input type="number" step="0.01" value={form.tax_rate} onChange={(e) => setForm({ ...form, tax_rate: parseFloat(e.target.value) })}
              className="w-full px-3 py-2 rounded-lg text-sm outline-none"
              style={{ backgroundColor: "#0e0e1a", border: "1px solid #222244", color: "#e0e0ef" }} />
          </div>
          <div>
            <label className="block text-xs mb-1" style={{ color: "#8888aa" }}>Quote Valid (days)</label>
            <input type="number" value={form.quote_validity_days} onChange={(e) => setForm({ ...form, quote_validity_days: parseInt(e.target.value) })}
              className="w-full px-3 py-2 rounded-lg text-sm outline-none"
              style={{ backgroundColor: "#0e0e1a", border: "1px solid #222244", color: "#e0e0ef" }} />
          </div>
        </div>
        <button type="submit" disabled={saving} className="w-full py-2.5 rounded-lg text-sm font-medium text-white"
          style={{ backgroundColor: "#f97316", opacity: saving ? 0.7 : 1 }}>
          {saved ? "Saved!" : saving ? "Saving..." : "Save Settings"}
        </button>
      </form>
    </div>
  );
}
