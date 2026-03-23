"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function ResetPasswordPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (password !== confirm) {
      setError("Passwords do not match");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }
    setLoading(true);
    setError("");
    const { error } = await supabase.auth.updateUser({ password });
    setLoading(false);
    if (error) {
      setError(error.message);
    } else {
      router.push("/dashboard");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#0e0e1a" }}>
      <div className="w-full max-w-md p-8 rounded-xl" style={{ backgroundColor: "#16162a", border: "1px solid #222244" }}>
        <h1 className="text-2xl font-bold mb-2" style={{ color: "#f97316" }}>SnipBid</h1>
        <p className="text-sm mb-8" style={{ color: "#8888aa" }}>Set a new password</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1" style={{ color: "#e0e0ef" }}>New Password</label>
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
          <div>
            <label className="block text-sm mb-1" style={{ color: "#e0e0ef" }}>Confirm Password</label>
            <input
              type="password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              required
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
            {loading ? "Updating..." : "Update Password"}
          </button>
        </form>
      </div>
    </div>
  );
}
