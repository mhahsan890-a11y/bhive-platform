"use client";

const statCards = [
  { title: "ACTIVE TENANTS", value: "5", sub: "of 8 total", color: "text-emerald-400" },
  { title: "MONTHLY REVENUE", value: "8,820", sub: "AED MRR", color: "text-yellow-300" },
  { title: "AI RESOLUTION", value: "87.4%", sub: "Cross-tenant avg", color: "text-emerald-400" },
  { title: "CONVERSATIONS", value: "22.5k", sub: "Platform-wide", color: "text-white" },
  { title: "VOICE CALLS", value: "763", sub: "This month", color: "text-purple-300" },
  { title: "OVERDUE", value: "AED 890", sub: "Outstanding", color: "text-orange-300" },
];

const tenantRows = [
  {
    name: "Al Baraka Trading",
    plan: "Growth",
    status: "Active",
    numbers: "+971 50 000 1111",
    lastActive: "2 hours ago",
    revenue: "AED 18,420",
  },
  {
    name: "Sara Beauty Lounge",
    plan: "Pro",
    status: "Grace Period",
    numbers: "+971 50 000 2222",
    lastActive: "Today",
    revenue: "AED 9,880",
  },
  {
    name: "North Shore Dental",
    plan: "Starter",
    status: "Suspended",
    numbers: "+1 604 555 0102",
    lastActive: "3 days ago",
    revenue: "AED 0",
  },
  {
    name: "Prime Estate Group",
    plan: "Pro",
    status: "Active",
    numbers: "+971 50 000 3333",
    lastActive: "18 mins ago",
    revenue: "AED 26,100",
  },
];

const events = [
  "Tenant Al Baraka Trading entered active status.",
  "Grace period reminder sent to Sara Beauty Lounge.",
  "Payment failure received from Stripe webhook.",
  "North Shore Dental manually suspended by admin.",
  "Daily analytics snapshot generated successfully.",
];

function statusClasses(status: string) {
  if (status === "Active") {
    return "bg-emerald-500/15 text-emerald-300 border border-emerald-500/20";
  }
  if (status === "Grace Period") {
    return "bg-yellow-500/15 text-yellow-300 border border-yellow-500/20";
  }
  if (status === "Suspended") {
    return "bg-red-500/15 text-red-300 border border-red-500/20";
  }
  return "bg-slate-500/15 text-slate-300 border border-slate-500/20";
}

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-[#060b17] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(97,55,190,0.14),transparent_24%),linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:auto,80px_80px,80px_80px] pointer-events-none" />

      <div className="relative flex min-h-screen">
        <aside className="w-[290px] border-r border-[#1b2234] bg-[#08101d] p-6">
          <div className="mb-10 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400 font-black text-black">
              B
            </div>
            <div>
              <h1 className="text-3xl font-semibold">Bhive</h1>
              <p className="text-sm text-gray-400">Admin Portal</p>
            </div>
          </div>

          <div className="mb-8 flex gap-4 text-sm text-gray-300">
            <span className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              LIVE
            </span>
            <span className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-cyan-400" />
              MFA
            </span>
            <span className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-teal-400" />
              API
            </span>
            <span className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-lime-400" />
              AI
            </span>
          </div>

          <div className="mb-6 text-xs uppercase tracking-[0.28em] text-gray-500">
            Platform
          </div>

          <nav className="space-y-2">
            <button className="flex w-full items-center justify-between rounded-2xl bg-yellow-500/12 px-4 py-4 text-left text-yellow-300 border border-yellow-500/15">
              <span>Analytics</span>
            </button>
            <button className="flex w-full items-center justify-between rounded-2xl px-4 py-4 text-left text-gray-300 hover:bg-[#11192b]">
              <span>Tenants</span>
              <span className="rounded-full bg-yellow-500/15 px-2 py-0.5 text-xs text-yellow-300">8</span>
            </button>
            <button className="flex w-full items-center justify-between rounded-2xl px-4 py-4 text-left text-gray-300 hover:bg-[#11192b]">
              <span>New Tenant Setup</span>
            </button>
            <button className="flex w-full items-center justify-between rounded-2xl px-4 py-4 text-left text-gray-300 hover:bg-[#11192b]">
              <span>Billing</span>
            </button>
            <button className="flex w-full items-center justify-between rounded-2xl px-4 py-4 text-left text-gray-300 hover:bg-[#11192b]">
              <span>Payment Reminders</span>
              <span className="rounded-full bg-red-500/15 px-2 py-0.5 text-xs text-red-300">3</span>
            </button>
            <button className="flex w-full items-center justify-between rounded-2xl px-4 py-4 text-left text-gray-300 hover:bg-[#11192b]">
              <span>Event Log</span>
            </button>
          </nav>

          <div className="mt-10 mb-6 text-xs uppercase tracking-[0.28em] text-gray-500">
            Tenant Features
          </div>

          <nav className="space-y-2">
            <button className="w-full rounded-2xl px-4 py-4 text-left text-gray-300 hover:bg-[#11192b]">
              Inbox
            </button>
            <button className="w-full rounded-2xl px-4 py-4 text-left text-gray-300 hover:bg-[#11192b]">
              CRM & Leads
            </button>
            <button className="w-full rounded-2xl px-4 py-4 text-left text-gray-300 hover:bg-[#11192b]">
              Voice Log
            </button>
            <button className="w-full rounded-2xl px-4 py-4 text-left text-gray-300 hover:bg-[#11192b]">
              Funnels
            </button>
          </nav>

          <div className="mt-10 rounded-t-3xl border-t border-[#1b2234] pt-6">
            <p className="text-3xl font-semibold">Super Admin</p>
            <p className="mt-2 text-yellow-300">ADMIN-001 · Bhive</p>
          </div>
        </aside>

        <main className="flex-1 p-8">
          <div className="mb-8 flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-4">
                <h2 className="text-4xl font-semibold">Analytics</h2>
                <p className="text-gray-400">Platform overview · March 21 2026</p>
              </div>
            </div>

            <div className="flex gap-3">
              <button className="rounded-2xl border border-[#27304a] bg-[#0c1424] px-5 py-3 text-gray-300">
                ↓ Export
              </button>
              <button className="rounded-2xl bg-yellow-400 px-5 py-3 font-semibold text-black">
                + New Tenant
              </button>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-6">
            {statCards.map((card) => (
              <div
                key={card.title}
                className="rounded-[28px] border border-[#1f2740] bg-[#0c1322] p-6"
              >
                <p className="text-sm uppercase tracking-[0.18em] text-gray-500">
                  {card.title}
                </p>
                <h3 className={`mt-3 text-5xl font-bold ${card.color}`}>{card.value}</h3>
                <p className="mt-2 text-gray-400">{card.sub}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-[28px] border border-[#1f2740] bg-[#0c1322] p-6">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-3xl font-semibold">Daily Conversation Volume · 30 days</h3>
              <div className="text-6xl font-bold text-yellow-300">860</div>
            </div>

            <div className="relative h-48 overflow-hidden rounded-3xl border border-[#1b2234] bg-[#0a111e]">
              <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/10 to-transparent" />
              <svg viewBox="0 0 100 30" className="h-full w-full">
                <polyline
                  fill="none"
                  stroke="rgb(250 204 21)"
                  strokeWidth="0.8"
                  points="4,24 10,25 16,21 22,22 28,18 34,19 40,16 46,14 52,17 58,14 64,13 70,15 76,11 82,12 88,10 96,9"
                />
              </svg>
            </div>
          </div>

          <div className="mt-6 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[28px] border border-[#1f2740] bg-[#0c1322] p-6">
              <h3 className="mb-6 text-3xl font-semibold">Revenue by Plan</h3>

              <div className="space-y-6">
                <div>
                  <div className="mb-2 flex items-center justify-between text-xl">
                    <span>Pro</span>
                    <span className="text-purple-300">AED 6,600</span>
                  </div>
                  <div className="h-3 rounded-full bg-[#1a2240]">
                    <div className="h-3 w-[75%] rounded-full bg-purple-400" />
                  </div>
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between text-xl">
                    <span>Growth</span>
                    <span className="text-yellow-300">AED 2,220</span>
                  </div>
                  <div className="h-3 rounded-full bg-[#1a2240]">
                    <div className="h-3 w-[25%] rounded-full bg-yellow-400" />
                  </div>
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between text-xl">
                    <span>Starter</span>
                    <span className="text-gray-500">AED 0</span>
                  </div>
                  <div className="h-3 rounded-full bg-[#1a2240]">
                    <div className="h-3 w-[0%] rounded-full bg-slate-400" />
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[28px] border border-[#1f2740] bg-[#0c1322] p-6">
              <h3 className="mb-6 text-3xl font-semibold">Account Status</h3>

              <div className="space-y-5">
                {[
                  { label: "Active", count: 5, color: "bg-emerald-400" },
                  { label: "Grace Period", count: 1, color: "bg-yellow-400" },
                  { label: "Suspended", count: 1, color: "bg-pink-500" },
                  { label: "Deactivated", count: 1, color: "bg-slate-400" },
                ].map((item) => (
                  <div key={item.label} className="grid grid-cols-[1fr_auto_100px] items-center gap-4">
                    <div className="flex items-center gap-3 text-xl">
                      <span className={`h-3 w-3 rounded-full ${item.color}`} />
                      <span>{item.label}</span>
                    </div>
                    <span className="text-3xl font-semibold">{item.count}</span>
                    <div className="h-3 rounded-full bg-[#1a2240]">
                      <div
                        className={`h-3 rounded-full ${item.color}`}
                        style={{ width: `${Math.max(item.count * 16, 10)}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[28px] border border-[#1f2740] bg-[#0c1322] p-6">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-3xl font-semibold">Tenant Management</h3>
                <button className="rounded-2xl border border-[#27304a] bg-[#0a111e] px-4 py-2 text-sm text-gray-300">
                  View All
                </button>
              </div>

              <div className="overflow-hidden rounded-3xl border border-[#1b2234]">
                <div className="grid grid-cols-[1.5fr_0.7fr_0.9fr_1fr_0.9fr_0.9fr] bg-[#0a111e] px-5 py-4 text-sm uppercase tracking-[0.18em] text-gray-500">
                  <span>Tenant</span>
                  <span>Plan</span>
                  <span>Status</span>
                  <span>Phone</span>
                  <span>Last Active</span>
                  <span>Revenue</span>
                </div>

                {tenantRows.map((row) => (
                  <div
                    key={row.name}
                    className="grid grid-cols-[1.5fr_0.7fr_0.9fr_1fr_0.9fr_0.9fr] items-center border-t border-[#1b2234] bg-[#0c1322] px-5 py-5 text-sm"
                  >
                    <span className="font-medium text-white">{row.name}</span>
                    <span className="text-gray-300">{row.plan}</span>
                    <span>
                      <span className={`inline-flex rounded-full px-3 py-1 text-xs ${statusClasses(row.status)}`}>
                        {row.status}
                      </span>
                    </span>
                    <span className="text-gray-300">{row.numbers}</span>
                    <span className="text-gray-400">{row.lastActive}</span>
                    <span className="text-gray-200">{row.revenue}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-[#1f2740] bg-[#0c1322] p-6">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-3xl font-semibold">Event Log</h3>
                <button className="rounded-2xl border border-[#27304a] bg-[#0a111e] px-4 py-2 text-sm text-gray-300">
                  Filter
                </button>
              </div>

              <div className="space-y-4">
                {events.map((event, index) => (
                  <div
                    key={event}
                    className="rounded-2xl border border-[#1b2234] bg-[#0a111e] p-4"
                  >
                    <div className="mb-2 flex items-center gap-3">
                      <span
                        className={`h-3 w-3 rounded-full ${
                          index === 0
                            ? "bg-emerald-400"
                            : index === 1
                            ? "bg-yellow-400"
                            : index === 2
                            ? "bg-purple-400"
                            : index === 3
                            ? "bg-red-400"
                            : "bg-cyan-400"
                        }`}
                      />
                      <span className="text-sm text-gray-500">System Event</span>
                    </div>
                    <p className="text-gray-200">{event}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}