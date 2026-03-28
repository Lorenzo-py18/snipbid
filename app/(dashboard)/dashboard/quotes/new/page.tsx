"use client";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter, useSearchParams } from "next/navigation";
import { nanoid } from "nanoid";
import { Suspense } from "react";

const DEMO_MESSAGE = `Hi, I need someone to fix a leaky faucet in my kitchen and also patch a hole in the hallway drywall. I'm at 742 Evergreen Terrace. Can you come this week? - Sarah`;

interface LineItem {
  id: string;
  serviceName: string;
  description: string;
  quantity: number;
  unitPrice: number;
}

function newItem(): LineItem {
  return { id: nanoid(), serviceName: "", description: "", quantity: 1, unitPrice: 0 };
}

function NewQuoteContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialMode = searchParams.get("mode") === "paste" ? "paste" : "paste";

  const [mode, setMode] = useState<"paste" | "manual">(initialMode);
  const [profile, setProfile] = useState<any>(null);
  const [customerMessage, setCustomerMessage] = useState("");
  const [parsing, setParsing] = useState(false);
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
  const [parsed, setParsed] = useState(false);
  const [toast, setToast] = useState("");

  function showToast(msg: string) {
    setToast(msg);
    setTimeout(() => setToast(""), 3000);
  }

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (!user) return;
      supabase.from("profiles").select("*").eq("id", user.id).single()
        .then(({ data }) => setProfile(data));
    });
  }, []);

  async function handleParseMessage() {
    if (!customerMessage.trim()) { setError("Please paste a customer message first"); return; }
    if (customerMessage.trim().length < 25) {
      setError("Message is too short. Please describe the job in more detail — include what needs to be done, where, and any relevant info.");
      return;
    }
    setError("");
    setParsing(true);
    try {
      const res = await fetch("/api/quotes/parse", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: customerMessage }),
      });
      const data = await res.json();
      if (!data.suggested_line_items || data.suggested_line_items.length === 0) {
        setError("SnipBid couldn't identify a specific job from this message. Try adding what needs to be done — e.g. \"Replace kitchen faucet and patch drywall at 742 Evergreen Terrace\"");
        setParsing(false);
        return;
      }
      if (data.customer_name) setClientName(data.customer_name);
      if (data.address) setClientAddress(data.address);
      setLineItems(data.suggested_line_items.map((item: any) => ({
        id: nanoid(),
        serviceName: item.service_name,
        description: item.description || "",
        quantity: item.quantity || 1,
        unitPrice: item.unit_price || 0,
      })));
      setParsed(true);
      setMode("manual");
    } catch {
      setError("Failed to parse message. Check your DeepSeek API key.");
    }
    setParsing(false);
  }

  function updateItem(id: string, field: keyof LineItem, value: string | number) {
    setLineItems(items => items.map(item => item.id === id ? { ...item, [field]: value } : item));
  }

  const subtotal = lineItems.reduce((s, i) => s + (i.quantity * i.unitPrice), 0);
  const taxRate = profile?.tax_rate || 8.75;
  const taxAmount = subtotal * (taxRate / 100);
  const total = subtotal + taxAmount;

  async function generateAI() {
    if (!clientName) { setError("Enter client name first"); return; }
    if (lineItems.every(i => !i.serviceName)) { setError("Add at least one service"); return; }
    setError("");
    setGenerating(true);
    try {
      const res = await fetch("/api/quotes/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          clientName, clientAddress,
          businessName: profile?.business_name || "Contractor",
          businessLicense: profile?.license_number,
          paymentTerms: profile?.payment_terms || "Due within 14 days",
          quoteValidityDays: profile?.quote_validity_days || 30,
          lineItems: lineItems.filter(i => i.serviceName).map(i => ({
            serviceName: i.serviceName,
            description: i.description,
            quantity: i.quantity,
            unitPrice: i.unitPrice,
          })),
        }),
      });
      const data = await res.json();
      setAiDescription(data.description || "");
    } catch {
      setError("AI generation failed.");
    }
    setGenerating(false);
  }

  async function saveQuote(status: "draft" | "sent" = "draft") {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return null;

    const { count } = await supabase.from("quotes").select("*", { count: "exact", head: true }).eq("user_id", user.id);
    const quoteNumber = `SB-${1001 + (count || 0)}`;
    const token = nanoid(12);

    const { data: quote, error: qErr } = await supabase.from("quotes").insert({
      user_id: user.id,
      quote_number: quoteNumber,
      client_name: clientName,
      client_email: clientEmail,
      client_phone: clientPhone,
      client_address: clientAddress,
      status,
      subtotal,
      tax_rate: taxRate,
      tax_amount: taxAmount,
      total,
      ai_description: aiDescription,
      raw_customer_message: customerMessage || null,
      public_token: token,
      ...(status === "sent" ? { sent_at: new Date().toISOString() } : {}),
    }).select().single();

    if (qErr || !quote) { setError("Failed to save quote"); return null; }

    await supabase.from("line_items").insert(
      lineItems.filter(i => i.serviceName).map((item, idx) => ({
        quote_id: quote.id,
        service_name: item.serviceName,
        description: item.description,
        quantity: item.quantity,
        unit_price: item.unitPrice,
        amount: item.quantity * item.unitPrice,
        labor_cost: item.unitPrice,
        material_cost: 0,
        hours: item.quantity,
        sort_order: idx,
      }))
    );

    // Auto-populate customers
    if (clientName) {
      const { data: existing } = await supabase
        .from("customers")
        .select("id")
        .eq("user_id", user.id)
        .eq("name", clientName)
        .maybeSingle();
      if (!existing) {
        await supabase.from("customers").insert({
          user_id: user.id,
          name: clientName,
          email: clientEmail || null,
          phone: clientPhone || null,
          address: clientAddress || null,
        });
      }
    }

    return quote;
  }

  async function handleSaveDraft() {
    setSaving(true);
    const quote = await saveQuote("draft");
    setSaving(false);
    if (quote) {
      showToast("Draft saved!");
      setTimeout(() => router.push(`/dashboard/quotes/${quote.id}`), 800);
    }
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
      showToast("Quote sent to client!");
    } catch {}
    setSending(false);
    setTimeout(() => router.push(`/dashboard/quotes/${quote.id}`), 1000);
  }

  const inputStyle = { backgroundColor: "#0e0e1a", border: "1px solid #222244", color: "#e0e0ef" };

  return (
    <div>
      {toast && (
        <div className="fixed top-4 right-4 z-50 px-4 py-3 rounded-lg text-sm font-medium text-white shadow-lg"
          style={{ backgroundColor: "#22c55e" }}>
          ✓ {toast}
        </div>
      )}
      <h2 className="text-xl font-semibold mb-6" style={{ color: "#e0e0ef" }}>New Quote</h2>

      {/* Mode Toggle */}
      <div className="flex gap-2 mb-6">
        <button onClick={() => setMode("paste")} className="px-4 py-2 rounded-lg text-sm font-medium"
          style={{ backgroundColor: mode === "paste" ? "#f97316" : "#16162a", color: mode === "paste" ? "#fff" : "#8888aa", border: "1px solid #222244" }}>
          📋 Paste Customer Message
        </button>
        <button onClick={() => setMode("manual")} className="px-4 py-2 rounded-lg text-sm font-medium"
          style={{ backgroundColor: mode === "manual" ? "#f97316" : "#16162a", color: mode === "manual" ? "#fff" : "#8888aa", border: "1px solid #222244" }}>
          ✏️ Manual Entry
        </button>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="space-y-5">

          {/* Mode A: Paste Message */}
          {mode === "paste" && (
            <div className="p-5 rounded-xl" style={{ backgroundColor: "#16162a", border: "1px solid #222244" }}>
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-medium" style={{ color: "#e0e0ef" }}>Paste Customer Message</h3>
                <button
                  onClick={() => setCustomerMessage(DEMO_MESSAGE)}
                  className="text-xs px-2 py-1 rounded"
                  style={{ color: "#f97316", backgroundColor: "#f9731622", border: "1px solid #f9731444" }}>
                  Load example
                </button>
              </div>
              <p className="text-xs mb-3" style={{ color: "#8888aa" }}>Paste a text, email, or DM from your customer — AI will extract the details</p>
              <textarea
                value={customerMessage}
                onChange={e => setCustomerMessage(e.target.value)}
                placeholder="Paste your customer's message here, e.g. 'Hi, I need help replacing a faucet and patching drywall. Can you send a quote? - Sarah'"
                rows={5}
                className="w-full px-3 py-2 rounded-lg text-sm outline-none resize-none"
                style={inputStyle}
              />
              {error && <p className="text-red-400 text-xs mt-2">{error}</p>}
              <button onClick={handleParseMessage} disabled={parsing || !customerMessage.trim()}
                className="mt-3 w-full py-2.5 rounded-lg text-sm font-medium text-white"
                style={{ backgroundColor: "#f97316", opacity: (parsing || !customerMessage.trim()) ? 0.5 : 1, cursor: !customerMessage.trim() ? "not-allowed" : "pointer" }}>
                {parsing ? "Analyzing message..." : "⚡ Generate Quote from Message"}
              </button>
            </div>
          )}

          {/* Client Info */}
          {(mode === "manual" || parsed) && (
            <div className="p-5 rounded-xl" style={{ backgroundColor: "#16162a", border: "1px solid #222244" }}>
              <h3 className="font-medium mb-4" style={{ color: "#e0e0ef" }}>
                Client Information
                {parsed && <span className="ml-2 text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: "#22c55e22", color: "#22c55e" }}>AI filled</span>}
              </h3>
              <div className="space-y-3">
                {[
                  { label: "Client Name *", value: clientName, setter: setClientName, placeholder: "Sarah Johnson" },
                  { label: "Email", value: clientEmail, setter: setClientEmail, placeholder: "sarah@email.com" },
                  { label: "Phone", value: clientPhone, setter: setClientPhone, placeholder: "(555) 000-0000" },
                  { label: "Job Address", value: clientAddress, setter: setClientAddress, placeholder: "742 Evergreen Terrace" },
                ].map(({ label, value, setter, placeholder }) => (
                  <div key={label}>
                    <label className="block text-xs mb-1" style={{ color: "#8888aa" }}>{label}</label>
                    <input type="text" value={value} onChange={e => setter(e.target.value)} placeholder={placeholder}
                      className="w-full px-3 py-2 rounded-lg text-sm outline-none" style={inputStyle} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Line Items */}
          {(mode === "manual" || parsed) && (
            <div className="p-5 rounded-xl" style={{ backgroundColor: "#16162a", border: "1px solid #222244" }}>
              <h3 className="font-medium mb-4" style={{ color: "#e0e0ef" }}>
                Services
                {parsed && <span className="ml-2 text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: "#22c55e22", color: "#22c55e" }}>AI suggested</span>}
              </h3>
              <div className="space-y-3">
                {lineItems.map(item => (
                  <div key={item.id} className="p-3 rounded-lg space-y-2" style={{ backgroundColor: "#0e0e1a", border: "1px solid #222244" }}>
                    <div className="flex gap-2">
                      <input type="text" value={item.serviceName} onChange={e => updateItem(item.id, "serviceName", e.target.value)}
                        placeholder="Service name" className="flex-1 px-2 py-1.5 rounded text-sm outline-none" style={inputStyle} />
                      <button onClick={() => setLineItems(items => items.filter(i => i.id !== item.id))} className="px-2 text-red-400 text-lg">×</button>
                    </div>
                    <input type="text" value={item.description} onChange={e => updateItem(item.id, "description", e.target.value)}
                      placeholder="Description (optional)" className="w-full px-2 py-1.5 rounded text-sm outline-none" style={inputStyle} />
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="text-xs" style={{ color: "#8888aa" }}>Qty</label>
                        <input type="number" value={item.quantity} onChange={e => updateItem(item.id, "quantity", parseFloat(e.target.value) || 0)}
                          className="w-full px-2 py-1 rounded text-sm outline-none mt-0.5" style={inputStyle} />
                      </div>
                      <div>
                        <label className="text-xs" style={{ color: "#8888aa" }}>Unit Price $</label>
                        <input type="number" value={item.unitPrice} onChange={e => updateItem(item.id, "unitPrice", parseFloat(e.target.value) || 0)}
                          className="w-full px-2 py-1 rounded text-sm outline-none mt-0.5" style={inputStyle} />
                      </div>
                    </div>
                    <div className="text-right text-sm" style={{ color: "#f97316" }}>
                      ${(item.quantity * item.unitPrice).toFixed(2)}
                    </div>
                  </div>
                ))}
                <button onClick={() => setLineItems(i => [...i, newItem()])} className="w-full py-2 rounded-lg text-sm border border-dashed"
                  style={{ borderColor: "#222244", color: "#8888aa" }}>+ Add Service</button>
              </div>

              <div className="mt-4 pt-4 border-t space-y-1" style={{ borderColor: "#222244" }}>
                {[{ label: "Subtotal", value: subtotal }, { label: `Tax (${taxRate}%)`, value: taxAmount }].map(({ label, value }) => (
                  <div key={label} className="flex justify-between text-sm" style={{ color: "#8888aa" }}>
                    <span>{label}</span><span>${value.toFixed(2)}</span>
                  </div>
                ))}
                <div className="flex justify-between font-bold pt-1" style={{ color: "#e0e0ef" }}>
                  <span>Total</span><span style={{ color: "#f97316" }}>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right Panel: AI Preview */}
        {(mode === "manual" || parsed) && (
          <div className="space-y-4">
            <div className="p-5 rounded-xl" style={{ backgroundColor: "#16162a", border: "1px solid #222244" }}>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-medium" style={{ color: "#e0e0ef" }}>Scope of Work</h3>
                <button onClick={generateAI} disabled={generating} className="px-3 py-1.5 rounded-lg text-sm font-medium text-white"
                  style={{ backgroundColor: "#f97316", opacity: generating ? 0.7 : 1 }}>
                  {generating ? "Writing..." : "✨ AI Write"}
                </button>
              </div>
              {error && <p className="text-red-400 text-sm mb-3">{error}</p>}
              <textarea
                value={aiDescription}
                onChange={e => setAiDescription(e.target.value)}
                placeholder="Click 'AI Write' to generate a professional scope of work, or type it yourself..."
                rows={10}
                className="w-full px-3 py-2 rounded-lg text-sm outline-none resize-none"
                style={inputStyle}
              />
            </div>

            <div className="flex gap-3">
              <button onClick={handleSaveDraft} disabled={saving} className="flex-1 py-2.5 rounded-lg text-sm font-medium border"
                style={{ borderColor: "#222244", color: "#e0e0ef", opacity: saving ? 0.7 : 1 }}>
                {saving ? "Saving..." : "Save Draft"}
              </button>
              <button onClick={handleSendToClient} disabled={sending} className="flex-1 py-2.5 rounded-lg text-sm font-medium text-white"
                style={{ backgroundColor: "#f97316", opacity: sending ? 0.7 : 1 }}>
                {sending ? "Sending..." : "Send to Client"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function NewQuotePage() {
  return (
    <Suspense fallback={<div style={{ color: "#8888aa", padding: "2rem" }}>Loading...</div>}>
      <NewQuoteContent />
    </Suspense>
  );
}
