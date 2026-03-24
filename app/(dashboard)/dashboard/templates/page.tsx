"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

const DEFAULT_TEMPLATES = [
  { name: "Service Call / Assessment", default_price: 75, category: "handyman" },
  { name: "Drywall Repair (per patch)", default_price: 150, category: "handyman" },
  { name: "General Labor (per hour)", default_price: 65, category: "handyman" },
  { name: "Standard Cleaning (per room)", default_price: 45, category: "cleaning" },
  { name: "Deep Cleaning (per room)", default_price: 80, category: "cleaning" },
  { name: "Diagnostic / Service Call", default_price: 150, category: "plumbing" },
  { name: "Faucet Replacement", default_price: 265, category: "plumbing" },
  { name: "Drain Cleaning", default_price: 195, category: "plumbing" },
];

const CATEGORY_COLORS: Record<string, string> = {
  handyman: "#f97316", cleaning: "#3b82f6", plumbing: "#22c55e",
  electrical: "#a855f7", hvac: "#06b6d4", other: "#8888aa",
};

export default function TemplatesPage() {
  const [templates, setTemplates] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAdd, setShowAdd] = useState(false);
  const [form, setForm] = useState({ name: "", description: "", default_price: 0, category: "handyman" });
  const [saving, setSaving] = useState(false);

  useEffect(() => { loadTemplates(); }, []);

  async function loadTemplates() {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;
    const { data } = await supabase.from("service_templates").select("*").eq("user_id", user.id).order("sort_order");
    setTemplates(data || []);
    setLoading(false);
  }

  async function handleAdd(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;
    await supabase.from("service_templates").insert({ user_id: user.id, default_quantity: 1, ...form });
    setForm({ name: "", description: "", default_price: 0, category: "handyman" });
    setShowAdd(false);
    setSaving(false);
    loadTemplates();
  }

  async function handleDelete(id: string) {
    await supabase.from("service_templates").delete().eq("id", id);
    setTemplates(t => t.filter(t => t.id !== id));
  }

  async function seedDefaults() {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;
    await supabase.from("service_templates").insert(DEFAULT_TEMPLATES.map(t => ({ ...t, user_id: user.id, default_quantity: 1 })));
    loadTemplates();
  }

  const inputStyle = { backgroundColor: "#0e0e1a", border: "1px solid #222244", color: "#e0e0ef" };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold" style={{ color: "#e0e0ef" }}>Service Templates</h2>
        <div className="flex gap-2">
          {templates.length === 0 && (
            <button onClick={seedDefaults} className="px-4 py-2 rounded-lg text-sm border" style={{ borderColor: "#222244", color: "#8888aa" }}>
              Load Defaults
            </button>
          )}
          <button onClick={() => setShowAdd(!showAdd)} className="px-4 py-2 rounded-lg text-sm font-medium text-white"
            style={{ backgroundColor: "#f97316" }}>+ Add Template</button>
        </div>
      </div>

      {showAdd && (
        <form onSubmit={handleAdd} className="p-5 rounded-xl mb-6 space-y-3" style={{ backgroundColor: "#16162a", border: "1px solid #222244" }}>
          <h3 className="font-medium" style={{ color: "#e0e0ef" }}>New Template</h3>
          <div>
            <label className="block text-xs mb-1" style={{ color: "#8888aa" }}>Service Name *</label>
            <input type="text" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required
              placeholder="Faucet Replacement" className="w-full px-3 py-2 rounded-lg text-sm outline-none" style={inputStyle} />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs mb-1" style={{ color: "#8888aa" }}>Default Price $</label>
              <input type="number" value={form.default_price} onChange={e => setForm({ ...form, default_price: parseFloat(e.target.value) || 0 })}
                className="w-full px-3 py-2 rounded-lg text-sm outline-none" style={inputStyle} />
            </div>
            <div>
              <label className="block text-xs mb-1" style={{ color: "#8888aa" }}>Category</label>
              <select value={form.category} onChange={e => setForm({ ...form, category: e.target.value })}
                className="w-full px-3 py-2 rounded-lg text-sm outline-none" style={inputStyle}>
                {["handyman", "cleaning", "plumbing", "electrical", "hvac", "other"].map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex gap-2">
            <button type="submit" disabled={saving} className="px-4 py-2 rounded-lg text-sm font-medium text-white"
              style={{ backgroundColor: "#f97316" }}>Save</button>
            <button type="button" onClick={() => setShowAdd(false)} className="px-4 py-2 rounded-lg text-sm" style={{ color: "#8888aa" }}>Cancel</button>
          </div>
        </form>
      )}

      <div className="rounded-xl overflow-hidden" style={{ backgroundColor: "#16162a", border: "1px solid #222244" }}>
        {loading ? (
          <div className="p-8 text-center" style={{ color: "#8888aa" }}>Loading...</div>
        ) : templates.length === 0 ? (
          <div className="p-8 text-center" style={{ color: "#8888aa" }}>
            No templates yet.{" "}
            <button onClick={seedDefaults} style={{ color: "#f97316" }}>Load default templates →</button>
          </div>
        ) : (
          <div className="divide-y" style={{ borderColor: "#222244" }}>
            {templates.map(t => (
              <div key={t.id} className="flex items-center justify-between p-4">
                <div>
                  <p className="font-medium text-sm" style={{ color: "#e0e0ef" }}>{t.name}</p>
                  <span className="text-xs px-2 py-0.5 rounded-full mt-1 inline-block capitalize"
                    style={{ backgroundColor: (CATEGORY_COLORS[t.category] || "#8888aa") + "22", color: CATEGORY_COLORS[t.category] || "#8888aa" }}>
                    {t.category}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <p className="font-bold text-sm" style={{ color: "#f97316" }}>${(t.default_price || 0).toFixed(0)}</p>
                  <button onClick={() => handleDelete(t.id)} className="text-xs" style={{ color: "#ef444488" }}>✕</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
