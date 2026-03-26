"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { isTenant, clearAuth } from "../lib/auth";

const checklist = [
  { label: "Verify WhatsApp Number", done: true, color: "text-emerald-400" },
  { label: "Verify Phone Number", done: true, color: "text-emerald-400" },
  { label: "Configure AI Settings", done: true, color: "text-emerald-400" },
  { label: "Add Knowledge Base", done: true, color: "text-emerald-400" },
  { label: "Create First Funnel", done: false, color: "text-yellow-300" },
  { label: "Set Up Your Team", done: false, color: "text-gray-400" },
];

const metrics = [
  {
    title: "ACTIVE CONVERSATIONS",
    value: "243",
    change: "↑ 18% vs last week",
    color: "text-white",
    changeColor: "text-emerald-400",
  },
  {
    title: "VOICE CALLS TODAY",
    value: "41",
    change: "↑ 9% vs yesterday",
    color: "text-white",
    changeColor: "text-emerald-400",
  },
  {
    title: "FUNNEL SUBMISSIONS",
    value: "89",
    change: "↑ 34% this month",
    color: "text-white",
    changeColor: "text-emerald-400",
  },
  {
    title: "REVENUE MTD",
    value: "AED 18,420",
    change: "↓ 3% vs last month",
    color: "text-white",
    changeColor: "text-red-400",
  },
];

const inboxItems = [
  {
    initials: "AM",
    name: "Ahmed Al-Mansoori",
    text: "هل يمكنني الدفع بالتقسيط؟",
    badge: "AI",
    unread: 2,
    color: "bg-orange-500",
  },
  {
    initials: "SN",
    name: "Sara Nadeem",
    text: "Can you confirm tomorrow’s slot?",
    badge: "Human",
    unread: 0,
    color: "bg-purple-500",
  },
  {
    initials: "RK",
    name: "Rohan Khanna",
    text: "Need payment link for the premium package.",
    badge: "AI",
    unread: 1,
    color: "bg-emerald-500",
  },
];

const aiToday = [
  { label: "Resolution Rate", value: "91%" },
  { label: "Avg Response Time", value: "2.4s" },
  { label: "Escalations", value: "14" },
];

export default function TenantDashboardPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isTenant()) {
      router.push("/tenant-login");
      return;
    }

    setLoading(false);
  }, [router]);

  const handleLogout = () => {
    clearAuth();
    router.push("/tenant-login");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#060b17] text-white flex items-center justify-center text-2xl">
        Checking tenant access...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#060b17] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.08),transparent_20%),linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:auto,80px_80px,80px_80px] pointer-events-none" />

      <div className="relative flex min-h-screen">
        <aside className="w-[330px] border-r border-[#1b2234] bg-[#08101d]">
          <div className="border-b border-[#1b2234] px-7 py-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500 text-xl font-bold text-black">
                💬
              </div>
              <div>
                <h1 className="text-3xl font-semibold">Bhive</h1>
              </div>
            </div>
          </div>

          <div className="p-5">
            <div className="rounded-[28px] border border-emerald-500/20 bg-emerald-500/8 p-5">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-xl font-semibold text-emerald-400">SETUP CHECKLIST</p>
                <p className="text-lg text-gray-300">4 / 6</p>
              </div>
              <div className="mb-5 h-2 rounded-full bg-[#1a2240]">
                <div className="h-2 w-[66%] rounded-full bg-purple-300" />
              </div>

              <div className="space-y-4">
                {checklist.map((item) => (
                  <div key={item.label} className="flex items-center gap-3 text-xl">
                    <span
                      className={`flex h-7 w-7 items-center justify-center rounded-full border ${
                        item.done
                          ? "border-emerald-500/25 bg-emerald-500/15 text-emerald-400"
                          : item.label === "Create First Funnel"
                          ? "border-yellow-500/25 bg-yellow-500/15 text-yellow-300"
                          : "border-gray-500/25 bg-transparent text-gray-500"
                      }`}
                    >
                      {item.done ? "✓" : item.label === "Create First Funnel" ? "!" : ""}
                    </span>
                    <span className={item.color}>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 text-xs uppercase tracking-[0.28em] text-gray-500">
              Workspace
            </div>

            <nav className="mt-4 space-y-2">
              <a
                href="/app"
                className="flex w-full items-center justify-between rounded-2xl border border-emerald-500/15 bg-emerald-500/12 px-5 py-4 text-left text-emerald-300"
              >
                <span className="text-2xl">🏠</span>
                <span className="ml-4 flex-1 text-xl">Overview</span>
              </a>

              <a
                href="/inbox"
                className="flex w-full items-center justify-between rounded-2xl px-5 py-4 text-left text-gray-300 hover:bg-[#11192b]"
              >
                <span className="text-2xl">💬</span>
                <span className="ml-4 flex-1 text-xl">Inbox</span>
                <span className="rounded-full bg-red-500/15 px-3 py-1 text-sm text-red-300">12</span>
              </a>

              <a
                href="/voice"
                className="flex w-full items-center justify-between rounded-2xl px-5 py-4 text-left text-gray-300 hover:bg-[#11192b]"
              >
                <span className="text-2xl">🎙️</span>
                <span className="ml-4 flex-1 text-xl">Voice AI</span>
                <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-sm text-emerald-300">Live</span>
              </a>

              <a
                href="/crm"
                className="flex w-full items-center justify-between rounded-2xl px-5 py-4 text-left text-gray-300 hover:bg-[#11192b]"
              >
                <span className="text-2xl">👥</span>
                <span className="ml-4 flex-1 text-xl">CRM</span>
              </a>
            </nav>

            <div className="mt-8 text-xs uppercase tracking-[0.28em] text-gray-500">
              Acquisition
            </div>

            <nav className="mt-4 space-y-2">
              <a
                href="/funnel"
                className="block w-full rounded-2xl px-5 py-4 text-left text-xl text-gray-300 hover:bg-[#11192b]"
              >
                Funnels
              </a>
            </nav>

            <div className="mt-8 rounded-[28px] border border-[#1b2234] bg-[#0c1322] p-5">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-400/30 text-2xl font-semibold text-blue-200">
                  AB
                </div>
                <div>
                  <p className="text-2xl font-semibold">Al Baraka Trading</p>
                  <p className="mt-1 text-lg text-emerald-400">Growth Plan · Active</p>
                </div>
              </div>
            </div>
          </div>
        </aside>

        <main className="flex-1 p-8">
          <div className="mb-8 flex items-center justify-between gap-4">
            <h2 className="text-4xl font-semibold">Overview</h2>

            <div className="flex items-center gap-4">
              <div className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-5 py-3 text-xl text-emerald-400">
                ● WhatsApp Live
              </div>
              <button className="rounded-2xl border border-[#27304a] bg-[#0c1424] px-4 py-3 text-xl">
                🔔
              </button>
              <button className="rounded-2xl border border-[#27304a] bg-[#0c1424] px-4 py-3 text-xl text-orange-400">
                ?
              </button>
              <button
                onClick={handleLogout}
                className="rounded-2xl bg-red-500 px-5 py-3 text-lg font-semibold text-white"
              >
                Logout
              </button>
            </div>
          </div>

          <div className="mb-6 rounded-2xl border border-emerald-500/15 bg-emerald-500/5 px-5 py-4 text-lg text-gray-300">
            <div className="flex flex-wrap items-center gap-8">
              <span className="text-emerald-400">⚡ LIVE</span>
              <span>Ahmed Al-Mansoori replied in Arabic — AI responding</span>
              <span>📞 Inbound call answered — Arabic detected — AI handling</span>
              <span>📨 New submission: Ramadan Promo 20</span>
            </div>
          </div>

          <div className="mb-8 rounded-[30px] border border-[#1f2740] bg-gradient-to-r from-[#151c34] to-[#0c1424] px-8 py-7">
            <div className="flex items-center justify-between">
              <div className="flex items-start gap-4">
                <div className="mt-1 text-4xl text-yellow-300">⚡</div>
                <div>
                  <h3 className="text-3xl font-semibold">Growth Plan — Active</h3>
                  <p className="mt-2 text-xl text-gray-400">
                    Next billing: 21 Apr 2026 · AED 499/mo · PayTabs
                  </p>
                </div>
              </div>

              <button className="rounded-2xl bg-purple-500/20 px-5 py-3 text-xl font-semibold text-purple-200">
                Upgrade to Pro
              </button>
            </div>
          </div>

          <div className="mb-8 grid gap-5 xl:grid-cols-4">
            <a
              href="/inbox"
              className="rounded-[28px] border border-[#1f2740] bg-[#0c1322] p-8 text-center hover:bg-[#11192b]"
            >
              <div className="mb-5 text-4xl">📣</div>
              <div className="text-2xl text-gray-300">New Broadcast</div>
            </a>

            <a
              href="/funnel"
              className="rounded-[28px] border border-[#1f2740] bg-[#0c1322] p-8 text-center hover:bg-[#11192b]"
            >
              <div className="mb-5 text-4xl">🪄</div>
              <div className="text-2xl text-gray-300">Build Funnel</div>
            </a>

            <a
              href="/crm"
              className="rounded-[28px] border border-[#1f2740] bg-[#0c1322] p-8 text-center hover:bg-[#11192b]"
            >
              <div className="mb-5 text-4xl">🗓️</div>
              <div className="text-2xl text-gray-300">New Booking</div>
            </a>

            <a
              href="/inbox"
              className="rounded-[28px] border border-[#1f2740] bg-[#0c1322] p-8 text-center hover:bg-[#11192b]"
            >
              <div className="mb-5 text-4xl">💳</div>
              <div className="text-2xl text-gray-300">Payment Link</div>
            </a>
          </div>

          <div className="mb-8 grid gap-5 xl:grid-cols-4">
            {metrics.map((item) => (
              <div
                key={item.title}
                className="rounded-[28px] border border-[#1f2740] bg-[#0c1322] p-6"
              >
                <p className="text-sm uppercase tracking-[0.18em] text-gray-500">
                  {item.title}
                </p>
                <h3 className={`mt-4 text-6xl font-bold ${item.color}`}>{item.value}</h3>
                <p className={`mt-3 text-xl ${item.changeColor}`}>{item.change}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[30px] border border-[#1f2740] bg-[#0c1322] p-6">
              <div className="mb-6 flex items-start justify-between">
                <div>
                  <h3 className="text-3xl font-semibold">💬 Recent Inbox</h3>
                  <p className="mt-2 text-lg text-gray-400">Click any thread to open</p>
                </div>
                <a
                  href="/inbox"
                  className="rounded-2xl bg-emerald-500/15 px-5 py-3 text-xl font-semibold text-emerald-400"
                >
                  Open Inbox →
                </a>
              </div>

              <div className="space-y-4">
                {inboxItems.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between rounded-[24px] border border-[#1b2234] bg-[#0a111e] px-5 py-5"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`flex h-14 w-14 items-center justify-center rounded-full text-xl font-semibold text-white ${item.color}`}
                      >
                        {item.initials}
                      </div>
                      <div>
                        <p className="text-2xl font-medium">{item.name}</p>
                        <p className="mt-1 text-lg text-gray-400">{item.text}</p>
                        <div className="mt-2 flex items-center gap-3">
                          <span
                            className={`rounded-full px-3 py-1 text-sm ${
                              item.badge === "AI"
                                ? "bg-emerald-500/15 text-emerald-300"
                                : "bg-purple-500/15 text-purple-300"
                            }`}
                          >
                            {item.badge}
                          </span>
                          {item.unread > 0 && (
                            <span className="rounded-full bg-red-500/15 px-3 py-1 text-sm text-red-300">
                              {item.unread}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <a
                      href="/inbox"
                      className="rounded-2xl border border-[#27304a] bg-[#0c1424] px-4 py-3 text-gray-300"
                    >
                      Open
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[30px] border border-[#1f2740] bg-[#0c1322] p-6">
              <div className="mb-6 flex items-start justify-between">
                <h3 className="text-3xl font-semibold">🤖 AI Today</h3>
                <a
                  href="/crm"
                  className="rounded-2xl bg-emerald-500/15 px-5 py-3 text-xl font-semibold text-emerald-400"
                >
                  Full Report
                </a>
              </div>

              <div className="space-y-5">
                {aiToday.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[24px] border border-[#1b2234] bg-[#0a111e] p-5"
                  >
                    <p className="text-lg text-gray-400">{item.label}</p>
                    <p className="mt-3 text-5xl font-bold">{item.value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-[28px] border border-[#27304a] bg-[#11192b] p-6 shadow-2xl">
                <div className="mb-2 text-2xl">💬</div>
                <p className="text-2xl text-gray-200">New message from Ahmed Al-Mansoori:</p>
                <p className="mt-3 text-3xl font-medium text-white">
                  "هل يمكنني الدفع بالتقسيط؟"
                </p>
              </div>

              <div className="mt-8">
                <p className="mb-3 text-xl text-gray-400">View State</p>
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full bg-emerald-500 px-5 py-3 text-lg font-semibold text-black">
                    Normal
                  </span>
                  <span className="rounded-full border border-[#27304a] px-5 py-3 text-lg text-gray-400">
                    Empty (New Tenant)
                  </span>
                  <span className="rounded-full border border-[#27304a] px-5 py-3 text-lg text-gray-400">
                    Loading
                  </span>
                  <span className="rounded-full border border-[#27304a] px-5 py-3 text-lg text-gray-400">
                    Error
                  </span>
                  <span className="rounded-full border border-[#27304a] px-5 py-3 text-lg text-gray-400">
                    First Run
                  </span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}