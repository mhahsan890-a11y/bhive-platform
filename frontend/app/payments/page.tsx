"use client";

const paymentStats = [
  {
    title: "TODAY'S COLLECTION",
    value: "AED 12,840",
    sub: "7 successful payments",
    color: "text-emerald-400",
    subColor: "text-gray-400",
  },
  {
    title: "PENDING LINKS",
    value: "18",
    sub: "Awaiting customer action",
    color: "text-yellow-300",
    subColor: "text-gray-400",
  },
  {
    title: "FAILED PAYMENTS",
    value: "3",
    sub: "Retry required",
    color: "text-red-400",
    subColor: "text-gray-400",
  },
  {
    title: "THIS MONTH",
    value: "AED 48,220",
    sub: "Across all channels",
    color: "text-white",
    subColor: "text-gray-400",
  },
];

const transactions = [
  {
    customer: "Ahmed Al-Mansoori",
    amount: "AED 4,500",
    gateway: "Stripe",
    type: "Payment Link",
    status: "Paid",
    date: "26 Mar 2026 · 11:12 AM",
  },
  {
    customer: "Sara Nadeem",
    amount: "AED 1,200",
    gateway: "PayTabs",
    type: "Booking Payment",
    status: "Pending",
    date: "26 Mar 2026 · 09:48 AM",
  },
  {
    customer: "Rohan Khanna",
    amount: "AED 2,100",
    gateway: "Stripe",
    type: "Premium Package",
    status: "Failed",
    date: "25 Mar 2026 · 06:17 PM",
  },
  {
    customer: "Fatima Noor",
    amount: "AED 980",
    gateway: "Stripe",
    type: "Consultation",
    status: "Paid",
    date: "25 Mar 2026 · 02:33 PM",
  },
];

const paymentLinks = [
  {
    customer: "Mariam Khan",
    item: "Consultation Package",
    amount: "AED 850",
    status: "Pending",
  },
  {
    customer: "Imran Sheikh",
    item: "Premium Package Deposit",
    amount: "AED 1,500",
    status: "Sent",
  },
  {
    customer: "Noor Al-Hassan",
    item: "Follow-up Session",
    amount: "AED 420",
    status: "Paid",
  },
];

function statusClass(status: string) {
  if (status === "Paid") {
    return "bg-emerald-500/15 text-emerald-300 border border-emerald-500/20";
  }
  if (status === "Pending" || status === "Sent") {
    return "bg-yellow-500/15 text-yellow-300 border border-yellow-500/20";
  }
  if (status === "Failed") {
    return "bg-red-500/15 text-red-300 border border-red-500/20";
  }
  return "bg-slate-500/15 text-slate-300 border border-slate-500/20";
}

export default function PaymentsPage() {
  return (
    <div className="min-h-screen bg-[#060b17] p-6 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(250,204,21,0.08),transparent_20%),linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:auto,80px_80px,80px_80px]" />

      <div className="relative">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <h1 className="text-4xl font-semibold">Payments</h1>
            <p className="mt-2 text-gray-400">
              Manage transactions, payment links, gateway status, and collection flow.
            </p>
          </div>

          <div className="flex gap-3">
            <button className="rounded-2xl border border-[#27304a] bg-[#0a111e] px-5 py-3 text-gray-300">
              Export Report
            </button>
            <button className="rounded-2xl bg-yellow-400 px-5 py-3 font-semibold text-black">
              + Generate Payment Link
            </button>
          </div>
        </div>

        <div className="mb-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {paymentStats.map((item) => (
            <div
              key={item.title}
              className="rounded-[24px] border border-[#1f2740] bg-[#0c1322] p-5"
            >
              <p className="text-sm uppercase tracking-[0.18em] text-gray-500">
                {item.title}
              </p>
              <p className={`mt-4 text-5xl font-bold ${item.color}`}>{item.value}</p>
              <p className={`mt-2 ${item.subColor}`}>{item.sub}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[30px] border border-[#1f2740] bg-[#0c1322] p-6">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-3xl font-semibold">Transaction Log</h2>
              <div className="flex gap-3">
                <button className="rounded-2xl border border-[#27304a] bg-[#0a111e] px-4 py-2 text-sm text-gray-300">
                  Filter
                </button>
                <button className="rounded-2xl border border-[#27304a] bg-[#0a111e] px-4 py-2 text-sm text-gray-300">
                  Gateway View
                </button>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#1b2234]">
              <div className="grid grid-cols-[1.2fr_0.8fr_0.8fr_1fr_0.8fr_1fr] bg-[#0a111e] px-5 py-4 text-sm uppercase tracking-[0.18em] text-gray-500">
                <span>Customer</span>
                <span>Amount</span>
                <span>Gateway</span>
                <span>Type</span>
                <span>Status</span>
                <span>Date</span>
              </div>

              {transactions.map((item, index) => (
                <div
                  key={`${item.customer}-${index}`}
                  className="grid grid-cols-[1.2fr_0.8fr_0.8fr_1fr_0.8fr_1fr] items-center border-t border-[#1b2234] bg-[#0c1322] px-5 py-5"
                >
                  <span className="font-medium text-white">{item.customer}</span>
                  <span className="text-gray-300">{item.amount}</span>
                  <span className="text-gray-300">{item.gateway}</span>
                  <span className="text-gray-300">{item.type}</span>
                  <span>
                    <span className={`inline-flex rounded-full px-3 py-1 text-xs ${statusClass(item.status)}`}>
                      {item.status}
                    </span>
                  </span>
                  <span className="text-gray-500">{item.date}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[30px] border border-[#1f2740] bg-[#0c1322] p-6">
              <h2 className="text-3xl font-semibold">Payment Links</h2>

              <div className="mt-5 space-y-4">
                {paymentLinks.map((item, index) => (
                  <div
                    key={`${item.customer}-${index}`}
                    className="rounded-[24px] border border-[#1b2234] bg-[#0a111e] p-4"
                  >
                    <p className="text-xl font-medium">{item.customer}</p>
                    <p className="mt-1 text-gray-400">{item.item}</p>

                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-yellow-300">{item.amount}</span>
                      <span className={`inline-flex rounded-full px-3 py-1 text-xs ${statusClass(item.status)}`}>
                        {item.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[30px] border border-[#1f2740] bg-[#0c1322] p-6">
              <h2 className="text-3xl font-semibold">Quick Actions</h2>

              <div className="mt-5 grid gap-3">
                <button className="rounded-2xl border border-[#27304a] bg-[#0a111e] px-4 py-3 text-left text-gray-300">
                  Generate New Payment Link
                </button>
                <button className="rounded-2xl border border-[#27304a] bg-[#0a111e] px-4 py-3 text-left text-gray-300">
                  Retry Failed Transaction
                </button>
                <button className="rounded-2xl border border-[#27304a] bg-[#0a111e] px-4 py-3 text-left text-gray-300">
                  Mark as Paid Manually
                </button>
                <button className="rounded-2xl border border-[#27304a] bg-[#0a111e] px-4 py-3 text-left text-gray-300">
                  Send Reminder for Pending Link
                </button>
              </div>
            </div>

            <div className="rounded-[30px] border border-[#1f2740] bg-[#0c1322] p-6">
              <h2 className="text-3xl font-semibold">Gateway Summary</h2>

              <div className="mt-5 space-y-4">
                <div className="rounded-2xl bg-[#0a111e] p-4">
                  <p className="text-sm text-gray-500">Primary Gateway</p>
                  <p className="mt-1 text-white">Stripe</p>
                </div>

                <div className="rounded-2xl bg-[#0a111e] p-4">
                  <p className="text-sm text-gray-500">Fallback Gateway</p>
                  <p className="mt-1 text-white">PayTabs</p>
                </div>

                <div className="rounded-2xl bg-[#0a111e] p-4">
                  <p className="text-sm text-gray-500">Success Rate</p>
                  <p className="mt-1 text-emerald-400">93.4%</p>
                </div>

                <div className="rounded-2xl bg-[#0a111e] p-4">
                  <p className="text-sm text-gray-500">Pending Recovery</p>
                  <p className="mt-1 text-yellow-300">AED 3,620</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}