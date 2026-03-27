"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("admin@test.com");
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
        if (data.role !== "admin") {
          alert("This is not an admin account");
          return;
        }

        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.role);
        localStorage.setItem("email", email);

        alert("Admin login successful ✅");
        router.push("/admin");
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
      <div className="relative flex min-h-screen items-center justify-center px-5">
        <div className="w-full max-w-md rounded-[32px] border border-[#1f2740] bg-[#0c1322] p-8 shadow-2xl">
          <h2 className="mb-6 text-3xl font-semibold">Admin Login</h2>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="mb-4 w-full rounded-xl bg-[#09111e] px-4 py-3"
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="mb-6 w-full rounded-xl bg-[#09111e] px-4 py-3"
          />

          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full rounded-xl bg-yellow-400 py-3 text-black"
          >
            {loading ? "Loading..." : "Sign In"}
          </button>
        </div>
      </div>
    </div>
  );
}