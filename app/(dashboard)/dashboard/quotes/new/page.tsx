"use client";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { nanoid } from "nanoid";

const SERVICE_TEMPLATES = [
  { name: "Diagnostic", labor: 150, material: 0, hours: 1 },
  { name: "Faucet Replacement", labor: 180, material: 85, hours: 2 },
  { name: "Water Heater Install", labor: 800, material: 1200, hours: 6 },
  { name: "Pipe Repair", labor: 250, material: 60, hours: 3 },
  { name: "Toilet Install", labor: 200, material: 280, hours: 2.5 },
  { name: "Drain Cleaning", labor: 175, material: 20, hours: 1.5 },
  { name: "Custom Service", labor: 0, material: 0, hours: 0 },
];

interface LineItem {
  id: string;
  serviceName: string;
  description: string;
  laborCost: number;
  materialCost: number;
  hours: number;
}

function newItem(): LineItem {
  return { id: nanoid(), serviceName: "", description: "", laborCost: 0, materialCost: 0, hours: 0 };
}

export default function NewQuotePage() {
  const router = useRouter();
  const [profile, setProfile] = useState<any>(null);
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [lineItems, setLineItems] = useState<LineItem[]>([newItem()]);
  const [aiDescription, setAiDescription] = useState("");
  const [generating, setGenerating] = useState(false);
  const [saving, setSaving] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (!user) return;
      supabase.from("profiles").select("*").eq("id", user.id).single()
        .then(({ data }) => setProfile(data));
    });
  }, []);

  function updateItem(id: string, field: keyof LineItem, value: string | number) {
    setLineItems((items) => items.map((item) => item.id === id ? { ...item, [field]: value } : item));
  }

  function applyTemplate(id: string, templateName: string) {
    const tpl = SERVICE_TEMPLATES.find((t) => t.name === templateName);
    if (!tpl) return;
    setLineItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, serviceName: tpl.name, laborCost: tpl.labor, materialCost: tpl.material, hours: tpl.hours } : item
      )
    );
  }

  const subtotal = lineItems.reduce((s, i) => s + i.laborCost + i.materialCost, 0);
  const taxRate = profile?.tax_rate || 8.75;
  const taxAmount = subtotal * (taxRate / 100);
  const total = subtotal + taxAmount;

  async function generateAI() {
    if (!clientName) { setError("Enter client name first"); return; }
    if (lineItems.every((i) => !i.serviceName)) { setError("Add at least one service"); return; }
    setError("");
    setGenerating(true);
    try {
      const res = await fetch("/api/quotes/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          clientName, clientAddress,
          businessName: profile?.business_name || "Contractor",
          businessLicense: profile?.license_number || "N/A",
          paymentTerms: profile?.payment_terms || "Due within 14 days",
          quoteValidityDays: profile?.quote_validity_days || 30,
          lineItems: lineItems.filter((i) => i.serviceName),
        }),
      });
      const data = await res.json();
      setAiDescription(data.description || "");
    } catch {
      setError("AI generation failed. Check your DeepSeek API key.");
    }
    setGenerating(false);
  }

  async function saveQuote(status: "draft" | "sent" = "draft") {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return null;

    const token = nanoid(12);
    const { data: quote, error: qErr } = await supabase.from("quotes").insert({
      user_id: user.id,
      client_name: clientName,
      client_email: clientEmail,
      client_phone: clientPhone,
      client_address: clientAddress,
      status,
      subtotal,
      tax_amount: taxAmount,
      total,
      ai_description: aiDescription,
      public_token: token,
      ...(status === "sent" ? { sent_at: new Date().toISOString() } : {}),
    }).select().single();

    if (qErr || !quote) { setError("Failed to save quote"); return null; }

    await supabase.from("line_items").insert(
      lineItems.filter((i) => i.serviceName).map((item, idx) => ({
        quote_id: quote.id,
        service_name: item.serviceName,
        description: item.description,
        labor_cost: item.laborCost,
        material_cost: item.materialCost,
        hours: item.hours,
        sort_order: idx,
      }))
    );

    return quote;
  }

  async function handleSaveDraft() {
    setSaving(true);
    const quote = await saveQuote("draft");
    setSaving(false);
    if (quote) router.push(`/dashboard/quotes/${quote.id}`);
  }

  async function handleSendToClient() {
    if (!clientEmail) { setError("Client email is required to send"); return; }
    setSending(true);
    const quote = await saveQuote("sent");
    if (!quote) { setSending(false); return; }

    try {
      await fetch("/api/quotes/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ quoteId: quote.id }),
      });
    } catch {}

    setSending(false);
    router.push(`/dashboard/quotes/${quote.id}`);
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6" style={{ color: "#e0e0ef" }}>New Quote</h2>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* LEFT: Form */}
        <div className="space-y-6">
          {/* Client Info */}
          <div className="p-5 rounded-xl" style={{ backgroundColor: "#16162a", border: "1px solid #222244" }}>
            <h3 className="font-medium mb-4" style={{ color: "#e0e0ef" }}>Client Information</h3>
            <div className="space-y-3">
              {[
                { label: "Client Name *", value: clientName, setter: setClientName, placeholder: "John Smith" },
                { label: "Email", value: clientEmail, setter: setClientEmail, placeholder: "john@email.com" },
                { label: "Phone", value: clientPhone, setter: setClientPhone, placeholder: "(555) 000-0000" },
                { label: "Job Address", value: clientAddress, setter: setClientAddress, placeholder: "123 Main St, City, State" },
              ].map(({ label, value, setter, placeholder }) => (
                <div key={label}>
                  <label className="block text-xs mb-1" style={{ color: "#8888aa" }}>{label}</label>
                  <input
                    type="text"
                    value={value}
                    onChange={(e) => setter(e.target.value)}
                    placeholder={placeholder}
                    className="w-full px-3 py-2 rounded-lg text-sm outline-none"
                    style={{ backgroundColor: "#0e0e1a", border: "1px solid #222244", color: "#e0e0ef" }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="p-5 rounded-xl" style={{ backgroundColor: "#16162a", border: "1px solid #222244" }}>
            <h3 className="font-medium mb-4" style={{ color: "#e0e0ef" }}>Services</h3>
            <div className="space-y-4">
              {lineItems.map((item) => (
                <div key={item.id} className="p-3 rounded-lg space-y-2" style={{ backgroundColor: "#0e0e1a", border: "1px solid #222244" }}>
                  <div className="flex gap-2">
                    <select
                      value={item.serviceName}
                      onChange={(e) => applyTemplate(item.id, e.target.value)}
                      className="flex-1 px-2 py-1.5 rounded text-sm outline-none"
                      style={{ backgroundColor: "#16162a", border: "1px solid #222244", color: "#e0e0ef" }}
                    >
                      <option value="">Select service...</option>
                      {SERVICE_TEMPLATES.map((t) => <option key={t.name} value={t.name}>{t.name}</option>)}
                    </select>
                    <button onClick={() => setLineItems((items) => items.filter((i) => i.id !== item.id))} className="px-2 text-red-400 text-lg">×</button>
                  </div>
                  <input
                    type="text"
                    value={item.serviceName}
                    onChange={(e) => updateItem(item.id, "serviceName", e.target.value)}
                    placeholder="Service name"
                    className="w-full px-2 py-1.5 rounded text-sm outline-none"
                    style={{ backgroundColor: "#16162a", border: "1px solid #222244", color: "#e0e0ef" }}
                  />
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { label: "Labor $", field: "laborCost" as const },
                      { label: "Material $", field: "materialCost" as const },
                      { label: "Hours", field: "hours" as const },
                    ].map(({ label, field }) => (
                      <div key={field}>
                        <label className="text-xs" style={{ color: "#8888aa" }}>{label}</label>
                        <input
                          type="number"
                          value={item[field]}
                          onChange={(e) => updateItem(item.id, field, parseFloat(e.target.value) || 0)}
                          className="w-full px-2 py-1 rounded text-sm outline-none mt-0.5"
                          style={{ backgroundColor: "#16162a", border: "1px solid #222244", color: "#e0e0ef" }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              <button onClick={() => setLineItems((i) => [...i, newItem()])} className="w-full py-2 rounded-lg text-sm border border-dashed" style={{ borderColor: "#222244", color: "#8888aa" }}>
                + Add Service
              </button>
            </div>

            {/* Totals */}
            <div className="mt-4 pt-4 border-t space-y-1" style={{ borderColor: "#222244" }}>
              {[
                { label: "Subtotal", value: subtotal },
                { label: `Tax (${taxRate}%)`, value: taxAmount },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between text-sm" style={{ color: "#8888aa" }}>
                  <span>{label}</span>
                  <span>${value.toFixed(2)}</span>
                </div>
              ))}
              <div className="flex justify-between font-bold pt-1" style={{ color: "#e0e0ef" }}>
                <span>Total</span>
                <span style={{ color: "#f97316" }}>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: AI Preview */}
        <div className="space-y-4">
          <div className="p-5 rounded-xl" style={{ backgroundColor: "#16162a", border: "1px solid #222244" }}>
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-medium" style={{ color: "#e0e0ef" }}>AI Quote Preview</h3>
              <button onClick={generateAI} disabled={generating} className="px-3 py-1.5 rounded-lg text-sm font-medium text-white" style={{ backgroundColor: "#f97316", opacity: generating ? 0.7 : 1 }}>
                {generating ? "Generating..." : "Generate Quote"}
              </button>
            </div>

            {error && <p className="text-red-400 text-sm mb-3">{error}</p>}

            <div className="min-h-48 p-3 rounded-lg text-sm whitespace-pre-wrap" style={{ backgroundColor: "#0e0e1a", border: "1px solid #222244", color: aiDescription ? "#e0e0ef" : "#8888aa" }}>
              {aiDescription || "Click 'Generate Quote' to have AI write a professional quote description..."}
            </div>

            {aiDescription && (
              <button onClick={generateAI} disabled={generating} className="mt-2 text-xs" style={{ color: "#8888aa" }}>
                Regenerate
              </button>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button onClick={handleSaveDraft} disabled={saving} className="flex-1 py-2.5 rounded-lg text-sm font-medium border" style={{ borderColor: "#222244", color: "#e0e0ef", opacity: saving ? 0.7 : 1 }}>
              {saving ? "Saving..." : "Save Draft"}
            </button>
            <button onClick={handleSendToClient} disabled={sending} className="flex-1 py-2.5 rounded-lg text-sm font-medium text-white" style={{ backgroundColor: "#f97316", opacity: sending ? 0.7 : 1 }}>
              {sending ? "Sending..." : "Send to Client"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
