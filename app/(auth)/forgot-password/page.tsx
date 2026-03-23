"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });
    setLoading(false);
    if (error) {
      setError(error.message);
    } else {
      setSent(true);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#0e0e1a" }}>
      <div className="w-full max-w-md p-8 rounded-xl" style={{ backgroundColor: "#16162a", border: "1px solid #222244" }}>
        <h1 className="text-2xl font-bold mb-2" style={{ color: "#f97316" }}>SnipBid</h1>
        <p className="text-sm mb-8" style={{ color: "#8888aa" }}>Reset your password</p>

        {sent ? (
          <div className="text-center">
            <div className="text-4xl mb-4">📧</div>
            <p className="font-medium mb-2" style={{ color: "#e0e0ef" }}>Check your email</p>
            <p className="text-sm mb-6" style={{ color: "#8888aa" }}>
              We sent a reset link to <strong>{email}</strong>
            </p>
            <Link href="/login" style={{ color: "#f97316", fontSize: 14 }}>Back to Sign In</Link>
          </div>
        ) : (
          <>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm mb-1" style={{ color: "#e0e0ef" }}>Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="you@example.com"
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
                {loading ? "Sending..." : "Send Reset Link"}
              </button>
            </form>
            <p className="text-sm mt-6 text-center" style={{ color: "#8888aa" }}>
              <Link href="/login" style={{ color: "#f97316" }}>Back to Sign In</Link>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
