"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      router.push("/dashboard");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#0e0e1a" }}>
      <div className="w-full max-w-md p-8 rounded-xl" style={{ backgroundColor: "#16162a", border: "1px solid #222244" }}>
        <h1 className="text-2xl font-bold mb-2" style={{ color: "#f97316" }}>QuickBid Pro</h1>
        <p className="text-sm mb-8" style={{ color: "#8888aa" }}>Sign in to your account</p>

        <form onSubmit={handleLogin} className="space-y-4">
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
              className="w-full px-3 py-2 rounded-lg text-sm outline-none"
              style={{ backgroundColor: "#0e0e1a", border: "1px solid #222244", color: "#e0e0ef" }}
            />
          </div>
          {error && <p className="text-red-400 text-sm">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 rounded-lg font-medium text-white transition-opacity"
            style={{ backgroundColor: "#f97316", opacity: loading ? 0.7 : 1 }}
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <div className="mt-6 space-y-2 text-center">
          <p className="text-sm" style={{ color: "#8888aa" }}>
            <Link href="/forgot-password" style={{ color: "#f97316" }}>
              Forgot password?
            </Link>
          </p>
          <p className="text-sm" style={{ color: "#8888aa" }}>
            No account?{" "}
            <Link href="/signup" style={{ color: "#f97316" }}>
              Create one free
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
