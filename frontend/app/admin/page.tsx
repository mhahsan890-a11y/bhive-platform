"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { isAdmin, clearAuth } from "../lib/auth";

export default function AdminPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isAdmin()) {
      router.push("/admin-login");
      return;
    }

    setLoading(false);
  }, [router]);

  const handleLogout = () => {
    clearAuth();
    router.push("/admin-login");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#060b17] text-white flex items-center justify-center">
        Checking admin access...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#060b17] text-white p-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold">Admin Dashboard</h1>
            <p className="mt-2 text-gray-400">
              Protected admin area using reusable auth system.
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="rounded-xl bg-red-500 px-5 py-3 font-semibold text-white"
          >
            Logout
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-[#1f2740] bg-[#0c1322] p-6">
            <p className="text-sm text-gray-400">Active Tenants</p>
            <h2 className="mt-3 text-3xl font-bold text-yellow-400">5</h2>
          </div>

          <div className="rounded-2xl border border-[#1f2740] bg-[#0c1322] p-6">
            <p className="text-sm text-gray-400">Monthly Revenue</p>
            <h2 className="mt-3 text-3xl font-bold text-green-400">AED 8,820</h2>
          </div>

          <div className="rounded-2xl border border-[#1f2740] bg-[#0c1322] p-6">
            <p className="text-sm text-gray-400">AI Resolution</p>
            <h2 className="mt-3 text-3xl font-bold text-cyan-400">87.4%</h2>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-[#1f2740] bg-[#0c1322] p-6">
          <h3 className="text-2xl font-semibold">Reusable Auth Working ✅</h3>
          <p className="mt-3 text-gray-400">
            This page is now protected using a shared auth utility.
          </p>
        </div>
      </div>
    </div>
  );
}