"use client";

const bookingStats = [
  {
    title: "TODAY'S BOOKINGS",
    value: "12",
    sub: "3 pending confirmation",
    color: "text-white",
    subColor: "text-yellow-300",
  },
  {
    title: "CONFIRMED",
    value: "28",
    sub: "This week",
    color: "text-emerald-400",
    subColor: "text-gray-400",
  },
  {
    title: "CANCELLED",
    value: "4",
    sub: "This week",
    color: "text-red-400",
    subColor: "text-gray-400",
  },
  {
    title: "REMINDERS SENT",
    value: "31",
    sub: "48h + 2h reminders",
    color: "text-purple-300",
    subColor: "text-gray-400",
  },
];

const bookings = [
  {
    customer: "Ahmed Al-Mansoori",
    service: "Premium Consultation",
    date: "26 Mar 2026",
    time: "11:00 AM",
    channel: "WhatsApp AI",
    status: "Confirmed",
    reminder: "Sent",
  },
  {
    customer: "Sara Nadeem",
    service: "Follow-up Appointment",
    date: "26 Mar 2026",
    time: "02:30 PM",
    channel: "Voice AI",
    status: "Pending",
    reminder: "Scheduled",
  },
  {
    customer: "Rohan Khanna",
    service: "Demo Session",
    date: "27 Mar 2026",
    time: "10:00 AM",
    channel: "Funnel Booking",
    status: "Confirmed",
    reminder: "Pending",
  },
  {
    customer: "Fatima Noor",
    service: "Product Consultation",
    date: "27 Mar 2026",
    time: "04:15 PM",
    channel: "WhatsApp AI",
    status: "Cancelled",
    reminder: "Stopped",
  },
];

const upcoming = [
  {
    slot: "11:00 AM",
    name: "Ahmed Al-Mansoori",
    type: "Premium Consultation",
  },
  {
    slot: "02:30 PM",
    name: "Sara Nadeem",
    type: "Follow-up Appointment",
  },
  {
    slot: "04:15 PM",
    name: "Mariam Khan",
    type: "Voice AI Callback",
  },
];

function statusClass(status: string) {
  if (status === "Confirmed") {
    return "bg-emerald-500/15 text-emerald-300 border border-emerald-500/20";
  }
  if (status === "Pending") {
    return "bg-yellow-500/15 text-yellow-300 border border-yellow-500/20";
  }
  if (status === "Cancelled") {
    return "bg-red-500/15 text-red-300 border border-red-500/20";
  }
  return "bg-slate-500/15 text-slate-300 border border-slate-500/20";
}

function reminderClass(reminder: string) {
  if (reminder === "Sent") {
    return "text-emerald-400";
  }
  if (reminder === "Scheduled" || reminder === "Pending") {
    return "text-yellow-300";
  }
  if (reminder === "Stopped") {
    return "text-red-400";
  }
  return "text-gray-400";
}

export default function BookingsPage() {
  return (
    <div className="min-h-screen bg-[#060b17] p-6 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_20%),linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:auto,80px_80px,80px_80px]" />

      <div className="relative">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <h1 className="text-4xl font-semibold">Bookings</h1>
            <p className="mt-2 text-gray-400">
              Manage appointments, confirmations, reminders, and booking status.
            </p>
          </div>

          <div className="flex gap-3">
            <button className="rounded-2xl border border-[#27304a] bg-[#0a111e] px-5 py-3 text-gray-300">
              Calendar View
            </button>
            <button className="rounded-2xl bg-emerald-500 px-5 py-3 font-semibold text-black">
              + New Booking
            </button>
          </div>
        </div>

        <div className="mb-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {bookingStats.map((item) => (
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
              <h2 className="text-3xl font-semibold">Booking List</h2>
              <div className="flex gap-3">
                <button className="rounded-2xl border border-[#27304a] bg-[#0a111e] px-4 py-2 text-sm text-gray-300">
                  Filter
                </button>
                <button className="rounded-2xl border border-[#27304a] bg-[#0a111e] px-4 py-2 text-sm text-gray-300">
                  Export
                </button>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#1b2234]">
              <div className="grid grid-cols-[1.2fr_1fr_0.9fr_0.9fr_0.9fr_0.8fr] bg-[#0a111e] px-5 py-4 text-sm uppercase tracking-[0.18em] text-gray-500">
                <span>Customer</span>
                <span>Service</span>
                <span>Date</span>
                <span>Channel</span>
                <span>Status</span>
                <span>Reminder</span>
              </div>

              {bookings.map((booking, index) => (
                <div
                  key={`${booking.customer}-${index}`}
                  className="grid grid-cols-[1.2fr_1fr_0.9fr_0.9fr_0.9fr_0.8fr] items-center border-t border-[#1b2234] bg-[#0c1322] px-5 py-5"
                >
                  <div>
                    <p className="font-medium text-white">{booking.customer}</p>
                    <p className="mt-1 text-sm text-gray-500">{booking.time}</p>
                  </div>
                  <span className="text-gray-300">{booking.service}</span>
                  <span className="text-gray-300">{booking.date}</span>
                  <span className="text-gray-300">{booking.channel}</span>
                  <span>
                    <span className={`inline-flex rounded-full px-3 py-1 text-xs ${statusClass(booking.status)}`}>
                      {booking.status}
                    </span>
                  </span>
                  <span className={`text-sm font-medium ${reminderClass(booking.reminder)}`}>
                    {booking.reminder}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[30px] border border-[#1f2740] bg-[#0c1322] p-6">
              <h2 className="text-3xl font-semibold">Upcoming Today</h2>

              <div className="mt-5 space-y-4">
                {upcoming.map((item, index) => (
                  <div
                    key={`${item.name}-${index}`}
                    className="rounded-[24px] border border-[#1b2234] bg-[#0a111e] p-4"
                  >
                    <p className="text-sm text-gray-500">{item.slot}</p>
                    <p className="mt-2 text-xl font-medium">{item.name}</p>
                    <p className="mt-1 text-gray-400">{item.type}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[30px] border border-[#1f2740] bg-[#0c1322] p-6">
              <h2 className="text-3xl font-semibold">Quick Actions</h2>

              <div className="mt-5 grid gap-3">
                <button className="rounded-2xl border border-[#27304a] bg-[#0a111e] px-4 py-3 text-left text-gray-300">
                  Confirm Booking
                </button>
                <button className="rounded-2xl border border-[#27304a] bg-[#0a111e] px-4 py-3 text-left text-gray-300">
                  Reschedule Appointment
                </button>
                <button className="rounded-2xl border border-[#27304a] bg-[#0a111e] px-4 py-3 text-left text-gray-300">
                  Cancel Booking
                </button>
                <button className="rounded-2xl border border-[#27304a] bg-[#0a111e] px-4 py-3 text-left text-gray-300">
                  Send Reminder Now
                </button>
              </div>
            </div>

            <div className="rounded-[30px] border border-[#1f2740] bg-[#0c1322] p-6">
              <h2 className="text-3xl font-semibold">Selected Booking</h2>

              <div className="mt-5 space-y-4">
                <div className="rounded-2xl bg-[#0a111e] p-4">
                  <p className="text-sm text-gray-500">Customer</p>
                  <p className="mt-1 text-white">Ahmed Al-Mansoori</p>
                </div>

                <div className="rounded-2xl bg-[#0a111e] p-4">
                  <p className="text-sm text-gray-500">Service</p>
                  <p className="mt-1 text-white">Premium Consultation</p>
                </div>

                <div className="rounded-2xl bg-[#0a111e] p-4">
                  <p className="text-sm text-gray-500">Reminder Status</p>
                  <p className="mt-1 text-emerald-400">48h reminder sent</p>
                </div>

                <div className="rounded-2xl bg-[#0a111e] p-4">
                  <p className="text-sm text-gray-500">Source</p>
                  <p className="mt-1 text-white">WhatsApp AI</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}