"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { business_name: businessName },
        emailRedirectTo: "https://snipbid.com/dashboard",
      },
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    if (data.user) {
      await supabase.from("profiles").upsert({
        id: data.user.id,
        business_name: businessName,
        email,
        quote_validity_days: 30,
        payment_terms: "Due within 14 days",
        tax_rate: 8.75,
      });
      router.push("/dashboard");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#0e0e1a" }}>
      <div className="w-full max-w-md p-8 rounded-xl" style={{ backgroundColor: "#16162a", border: "1px solid #222244" }}>
        <h1 className="text-2xl font-bold mb-2" style={{ color: "#f97316" }}>QuickBid Pro</h1>
        <p className="text-sm mb-8" style={{ color: "#8888aa" }}>Create your free account</p>

        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <label className="block text-sm mb-1" style={{ color: "#e0e0ef" }}>Business Name</label>
            <input
              type="text"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              required
              placeholder="Pro Plumbing Solutions"
              className="w-full px-3 py-2 rounded-lg text-sm outline-none"
              style={{ backgroundColor: "#0e0e1a", border: "1px solid #222244", color: "#e0e0ef" }}
            />
          </div>
          <div>
            <label className="block text-sm mb-1" style={{ color: "#e0e0ef" }}>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 rounded-lg text-sm outline-none"
              style={{ backgroundColor: "#0e0e1a", border: "1px solid #222244", color: "#e0e0ef" }}
            />
          </div>
          <div>
            <label className="block text-sm mb-1" style={{ color: "#e0e0ef" }}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
              className="w-full px-3 py-2 rounded-lg text-sm outline-none"
              style={{ backgroundColor: "#0e0e1a", border: "1px solid #222244", color: "#e0e0ef" }}
            />
          </div>
          {error && <p className="text-red-400 text-sm">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 rounded-lg font-medium text-white"
            style={{ backgroundColor: "#f97316", opacity: loading ? 0.7 : 1 }}
          >
            {loading ? "Creating account..." : "Start Free Trial"}
          </button>
        </form>

        <p className="text-sm mt-6 text-center" style={{ color: "#8888aa" }}>
          Already have an account?{" "}
          <Link href="/login" style={{ color: "#f97316" }}>Sign in</Link>
        </p>
      </div>
    </div>
  );
}
