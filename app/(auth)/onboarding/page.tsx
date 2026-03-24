"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

const WORK_TYPES = [
  { label: "Handyman", value: "handyman", icon: "🔧" },
  { label: "Cleaning", value: "cleaning", icon: "🧹" },
  { label: "Plumbing", value: "plumbing", icon: "🚰" },
  { label: "Electrical", value: "electrical", icon: "⚡" },
  { label: "HVAC", value: "hvac", icon: "❄️" },
  { label: "Other", value: "other", icon: "🏠" },
];

const TEMPLATES_BY_CATEGORY: Record<string, any[]> = {
  handyman: [
    { name: "Service Call / Assessment", default_price: 75, default_quantity: 1, category: "handyman" },
    { name: "Drywall Repair (per patch)", default_price: 150, default_quantity: 1, category: "handyman" },
    { name: "Door Installation", default_price: 200, default_quantity: 1, category: "handyman" },
    { name: "Furniture Assembly", default_price: 80, default_quantity: 1, category: "handyman" },
    { name: "TV Mounting", default_price: 100, default_quantity: 1, category: "handyman" },
    { name: "Pressure Washing (per hour)", default_price: 85, default_quantity: 1, category: "handyman" },
    { name: "General Labor (per hour)", default_price: 65, default_quantity: 1, category: "handyman" },
  ],
  cleaning: [
    { name: "Standard Cleaning (per room)", default_price: 45, default_quantity: 1, category: "cleaning" },
    { name: "Deep Cleaning (per room)", default_price: 80, default_quantity: 1, category: "cleaning" },
    { name: "Move-In/Move-Out Clean", default_price: 350, default_quantity: 1, category: "cleaning" },
    { name: "Carpet Cleaning (per room)", default_price: 60, default_quantity: 1, category: "cleaning" },
    { name: "Window Cleaning (per window)", default_price: 15, default_quantity: 1, category: "cleaning" },
  ],
  plumbing: [
    { name: "Diagnostic / Service Call", default_price: 150, default_quantity: 1, category: "plumbing" },
    { name: "Faucet Replacement", default_price: 265, default_quantity: 1, category: "plumbing" },
    { name: "Toilet Install", default_price: 480, default_quantity: 1, category: "plumbing" },
    { name: "Drain Cleaning", default_price: 195, default_quantity: 1, category: "plumbing" },
    { name: "Water Heater Install", default_price: 2000, default_quantity: 1, category: "plumbing" },
  ],
  electrical: [
    { name: "Service Call / Diagnostic", default_price: 125, default_quantity: 1, category: "electrical" },
    { name: "Outlet Installation", default_price: 175, default_quantity: 1, category: "electrical" },
    { name: "Panel Inspection", default_price: 200, default_quantity: 1, category: "electrical" },
    { name: "Light Fixture Install", default_price: 150, default_quantity: 1, category: "electrical" },
  ],
  hvac: [
    { name: "AC Tune-Up", default_price: 125, default_quantity: 1, category: "hvac" },
    { name: "Filter Replacement", default_price: 75, default_quantity: 1, category: "hvac" },
    { name: "Duct Cleaning", default_price: 400, default_quantity: 1, category: "hvac" },
    { name: "System Diagnostic", default_price: 150, default_quantity: 1, category: "hvac" },
  ],
  other: [
    { name: "Service Call", default_price: 75, default_quantity: 1, category: "other" },
    { name: "Custom Service", default_price: 0, default_quantity: 1, category: "other" },
  ],
};

const DEMO_MESSAGE = `Hi, I need someone to fix a leaky faucet in my kitchen and also patch a hole in the hallway drywall. I'm at 742 Evergreen Terrace. Can you come this week? - Sarah`;

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [workType, setWorkType] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [saving, setSaving] = useState(false);

  async function handleStep1(type: string) {
    setWorkType(type);
    setStep(2);
  }

  async function handleStep2(e: React.FormEvent) {
    e.preventDefault();
    if (!businessName.trim()) return;
    setSaving(true);
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    // Save business name
    await supabase.from("profiles").upsert({ id: user.id, business_name: businessName, email: user.email });

    // Seed templates
    const templates = TEMPLATES_BY_CATEGORY[workType] || TEMPLATES_BY_CATEGORY.other;
    await supabase.from("service_templates").insert(templates.map(t => ({ ...t, user_id: user.id })));

    setSaving(false);
    setStep(3);
  }

  async function handleTryNow() {
    router.push(`/dashboard/quotes/new?mode=paste&demo=1`);
  }

  async function handleSkip() {
    router.push("/dashboard");
  }

  const cardStyle = { backgroundColor: "#16162a", border: "1px solid #222244", borderRadius: 16 };
  const inputStyle = { backgroundColor: "#0e0e1a", border: "1px solid #222244", color: "#e0e0ef" };

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ backgroundColor: "#0e0e1a" }}>
      <div className="w-full max-w-lg">
        {/* Progress */}
        <div className="flex items-center gap-2 mb-8">
          {[1, 2, 3].map(n => (
            <div key={n} className="flex-1 h-1 rounded-full" style={{ backgroundColor: n <= step ? "#f97316" : "#222244" }} />
          ))}
        </div>

        {/* Step 1: Work Type */}
        {step === 1 && (
          <div>
            <h1 className="text-2xl font-bold mb-2" style={{ color: "#e0e0ef" }}>What kind of work do you do?</h1>
            <p className="text-sm mb-6" style={{ color: "#8888aa" }}>We'll set up templates that match your business.</p>
            <div className="grid grid-cols-2 gap-3">
              {WORK_TYPES.map(t => (
                <button key={t.value} onClick={() => handleStep1(t.value)}
                  className="p-4 rounded-xl text-left transition-all"
                  style={{ ...cardStyle, border: workType === t.value ? "1px solid #f97316" : "1px solid #222244" }}>
                  <div className="text-2xl mb-2">{t.icon}</div>
                  <p className="font-medium text-sm" style={{ color: "#e0e0ef" }}>{t.label}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Business Name */}
        {step === 2 && (
          <div>
            <h1 className="text-2xl font-bold mb-2" style={{ color: "#e0e0ef" }}>What's your business name?</h1>
            <p className="text-sm mb-6" style={{ color: "#8888aa" }}>This appears on your quotes and invoices.</p>
            <form onSubmit={handleStep2} className="space-y-4">
              <input
                type="text"
                value={businessName}
                onChange={e => setBusinessName(e.target.value)}
                placeholder="Mike's Handyman Services"
                autoFocus
                required
                className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                style={inputStyle}
              />
              <button type="submit" disabled={saving || !businessName.trim()}
                className="w-full py-3 rounded-xl font-semibold text-white"
                style={{ backgroundColor: "#f97316", opacity: saving || !businessName.trim() ? 0.6 : 1 }}>
                {saving ? "Setting up..." : "Continue →"}
              </button>
            </form>
          </div>
        )}

        {/* Step 3: Try it now */}
        {step === 3 && (
          <div>
            <h1 className="text-2xl font-bold mb-2" style={{ color: "#e0e0ef" }}>You're all set! Try it now.</h1>
            <p className="text-sm mb-6" style={{ color: "#8888aa" }}>Here's a sample customer request. See how fast SnipBid turns it into a quote.</p>
            <div className="p-4 rounded-xl mb-6" style={cardStyle}>
              <p className="text-xs mb-2" style={{ color: "#8888aa" }}>Sample customer message:</p>
              <p className="text-sm italic" style={{ color: "#e0e0ef" }}>"{DEMO_MESSAGE}"</p>
            </div>
            <div className="space-y-3">
              <button onClick={handleTryNow}
                className="w-full py-3 rounded-xl font-semibold text-white"
                style={{ backgroundColor: "#f97316" }}>
                ⚡ Generate Quote from This Message
              </button>
              <button onClick={handleSkip}
                className="w-full py-3 rounded-xl text-sm"
                style={{ color: "#8888aa" }}>
                Skip, go to dashboard
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
