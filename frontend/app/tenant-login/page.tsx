"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function TenantLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("tenant@test.com");
  const [password, setPassword] = useState("123456");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setLoading(true);

      const res = await fetch("https://bhive-platform-production.up.railway.app/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        if (data.role !== "tenant") {
          alert("This is not a tenant account");
          return;
        }

        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.role);
        localStorage.setItem("email", email);

        alert("Tenant login successful ✅");
        router.push("/app");
      } else {
        alert(data.message || "Login failed ❌");
      }
    } catch (error) {
      console.error(error);
      alert("Server error ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#060b17] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.10),transparent_22%),linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:auto,80px_80px,80px_80px] pointer-events-none" />

      <div className="relative flex min-h-screen items-center justify-center px-5">
        <div className="w-full max-w-md rounded-[32px] border border-[#1f2740] bg-[#0c1322] p-8 shadow-2xl">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500 font-black text-black">
              💬
            </div>
            <div>
              <h1 className="text-3xl font-semibold">Bhive</h1>
              <p className="text-sm text-gray-400">Tenant Workspace Login</p>
            </div>
          </div>

          <h2 className="text-4xl font-semibold">Tenant Sign In</h2>
          <p className="mt-3 text-gray-400">
            Access your workspace dashboard, inbox, CRM, AI settings, funnels, bookings, and payments.
          </p>

          <div className="mt-8 space-y-5">
            <div>
              <label className="mb-2 block text-sm text-gray-400">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="team@business.com"
                className="w-full rounded-2xl border border-[#26304a] bg-[#09111e] px-4 py-3 text-white outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-gray-400">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full rounded-2xl border border-[#26304a] bg-[#09111e] px-4 py-3 text-white outline-none"
              />
            </div>

            <button
              onClick={handleLogin}
              disabled={loading}
              className="w-full rounded-2xl bg-emerald-500 px-5 py-3.5 font-semibold text-black shadow-[0_0_28px_rgba(16,185,129,0.25)]"
            >
              {loading ? "Loading..." : "Sign In to Workspace"}
            </button>
          </div>

          <div className="mt-6 flex items-center justify-between text-sm text-gray-400">
            <button>Forgot password?</button>
            <a href="/app" className="text-emerald-300">
              Demo tenant page →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}