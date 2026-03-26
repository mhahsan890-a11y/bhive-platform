"use client";

const conversations = [
  {
    id: 1,
    name: "Ahmed Al-Mansoori",
    phone: "+971 50 123 4567",
    lastMessage: "هل يمكنني الدفع بالتقسيط؟",
    time: "2 min ago",
    status: "AI",
    unread: 2,
    color: "bg-orange-500",
  },
  {
    id: 2,
    name: "Sara Nadeem",
    phone: "+971 55 444 2211",
    lastMessage: "Can you confirm tomorrow’s booking?",
    time: "10 min ago",
    status: "Human",
    unread: 0,
    color: "bg-purple-500",
  },
  {
    id: 3,
    name: "Rohan Khanna",
    phone: "+971 58 889 3321",
    lastMessage: "Need payment link for premium package.",
    time: "18 min ago",
    status: "AI",
    unread: 1,
    color: "bg-emerald-500",
  },
  {
    id: 4,
    name: "Fatima Noor",
    phone: "+971 52 000 9182",
    lastMessage: "Please share available appointment slots.",
    time: "25 min ago",
    status: "AI",
    unread: 0,
    color: "bg-pink-500",
  },
];

const messages = [
  {
    from: "customer",
    text: "Hello, I want to know more about the package.",
    time: "10:02 AM",
  },
  {
    from: "ai",
    text: "Of course. We offer starter, growth, and premium packages. Which one would you like details about?",
    time: "10:02 AM",
  },
  {
    from: "customer",
    text: "Premium package. Can I pay in installments?",
    time: "10:03 AM",
  },
  {
    from: "ai",
    text: "Yes, installment options are available. I can also generate a payment link for you right now.",
    time: "10:03 AM",
  },
];

export default function TenantInboxPage() {
  return (
    <div className="min-h-screen bg-[#060b17] text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.08),transparent_20%),linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:auto,80px_80px,80px_80px]" />

      <div className="relative flex min-h-screen">
        <aside className="w-[320px] border-r border-[#1b2234] bg-[#08101d] p-5">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500 text-xl font-bold text-black">
              💬
            </div>
            <div>
              <h1 className="text-3xl font-semibold">Inbox</h1>
              <p className="text-sm text-gray-400">WhatsApp & Voice Threads</p>
            </div>
          </div>

          <div className="mb-5 flex gap-3">
            <button className="rounded-2xl bg-emerald-500/15 px-4 py-2 text-sm font-semibold text-emerald-400">
              All
            </button>
            <button className="rounded-2xl border border-[#27304a] px-4 py-2 text-sm text-gray-300">
              AI
            </button>
            <button className="rounded-2xl border border-[#27304a] px-4 py-2 text-sm text-gray-300">
              Human
            </button>
          </div>

          <div className="mb-5">
            <input
              type="text"
              placeholder="Search conversation..."
              className="w-full rounded-2xl border border-[#26304a] bg-[#09111e] px-4 py-3 text-white outline-none"
            />
          </div>

          <div className="space-y-4">
            {conversations.map((item) => (
              <div
                key={item.id}
                className="rounded-[24px] border border-[#1b2234] bg-[#0a111e] p-4"
              >
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-full text-sm font-semibold text-white ${item.color}`}
                    >
                      {item.name
                        .split(" ")
                        .map((part) => part[0])
                        .slice(0, 2)
                        .join("")}
                    </div>
                    <div>
                      <p className="text-lg font-medium">{item.name}</p>
                      <p className="text-sm text-gray-500">{item.phone}</p>
                    </div>
                  </div>
                  {item.unread > 0 && (
                    <span className="rounded-full bg-red-500/15 px-3 py-1 text-xs text-red-300">
                      {item.unread}
                    </span>
                  )}
                </div>

                <p className="text-sm text-gray-300">{item.lastMessage}</p>

                <div className="mt-3 flex items-center justify-between">
                  <span
                    className={`rounded-full px-3 py-1 text-xs ${
                      item.status === "AI"
                        ? "bg-emerald-500/15 text-emerald-300"
                        : "bg-purple-500/15 text-purple-300"
                    }`}
                  >
                    {item.status}
                  </span>
                  <span className="text-xs text-gray-500">{item.time}</span>
                </div>
              </div>
            ))}
          </div>
        </aside>

        <main className="flex-1 p-6">
          <div className="mb-6 flex items-center justify-between rounded-[28px] border border-[#1f2740] bg-[#0c1322] px-6 py-5">
            <div>
              <h2 className="text-3xl font-semibold">Ahmed Al-Mansoori</h2>
              <p className="mt-1 text-gray-400">
                WhatsApp Conversation · AI active · Arabic/English supported
              </p>
            </div>

            <div className="flex gap-3">
              <button className="rounded-2xl border border-[#27304a] bg-[#0a111e] px-4 py-3 text-gray-300">
                Assign Human
              </button>
              <button className="rounded-2xl bg-emerald-500 px-4 py-3 font-semibold text-black">
                AI ON
              </button>
            </div>
          </div>

          <div className="grid gap-6 xl:grid-cols-[1fr_340px]">
            <div className="rounded-[30px] border border-[#1f2740] bg-[#0c1322] p-6">
              <div className="space-y-4">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      msg.from === "customer" ? "justify-start" : "justify-end"
                    }`}
                  >
                    <div
                      className={`max-w-[70%] rounded-[24px] px-5 py-4 ${
                        msg.from === "customer"
                          ? "bg-[#11192b] text-white"
                          : "bg-emerald-500/15 text-emerald-100 border border-emerald-500/20"
                      }`}
                    >
                      <p className="text-base leading-7">{msg.text}</p>
                      <p className="mt-2 text-xs text-gray-400">{msg.time}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 border-t border-[#1b2234] pt-5">
                <div className="flex gap-3">
                  <input
                    type="text"
                    placeholder="Type a reply..."
                    className="flex-1 rounded-2xl border border-[#26304a] bg-[#09111e] px-4 py-3 text-white outline-none"
                  />
                  <button className="rounded-2xl border border-[#27304a] bg-[#0a111e] px-5 py-3 text-gray-300">
                    Template
                  </button>
                  <button className="rounded-2xl bg-emerald-500 px-6 py-3 font-semibold text-black">
                    Send
                  </button>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-[30px] border border-[#1f2740] bg-[#0c1322] p-6">
                <h3 className="text-2xl font-semibold">Conversation Details</h3>

                <div className="mt-5 space-y-4 text-sm">
                  <div className="rounded-2xl bg-[#0a111e] p-4">
                    <p className="text-gray-500">Status</p>
                    <p className="mt-1 text-emerald-400">AI Handling Active</p>
                  </div>

                  <div className="rounded-2xl bg-[#0a111e] p-4">
                    <p className="text-gray-500">Language</p>
                    <p className="mt-1 text-white">Arabic / English</p>
                  </div>

                  <div className="rounded-2xl bg-[#0a111e] p-4">
                    <p className="text-gray-500">Lead Source</p>
                    <p className="mt-1 text-white">Ramadan Promo Funnel</p>
                  </div>

                  <div className="rounded-2xl bg-[#0a111e] p-4">
                    <p className="text-gray-500">Payment Intent</p>
                    <p className="mt-1 text-yellow-300">Premium Package</p>
                  </div>
                </div>
              </div>

              <div className="rounded-[30px] border border-[#1f2740] bg-[#0c1322] p-6">
                <h3 className="text-2xl font-semibold">Quick Actions</h3>

                <div className="mt-5 grid gap-3">
                  <button className="rounded-2xl border border-[#27304a] bg-[#0a111e] px-4 py-3 text-left text-gray-300">
                    Generate Payment Link
                  </button>
                  <button className="rounded-2xl border border-[#27304a] bg-[#0a111e] px-4 py-3 text-left text-gray-300">
                    Create Booking
                  </button>
                  <button className="rounded-2xl border border-[#27304a] bg-[#0a111e] px-4 py-3 text-left text-gray-300">
                    Move to CRM
                  </button>
                  <button className="rounded-2xl border border-[#27304a] bg-[#0a111e] px-4 py-3 text-left text-gray-300">
                    Mark as Resolved
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}