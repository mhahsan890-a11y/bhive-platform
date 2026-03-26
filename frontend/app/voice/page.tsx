"use client";

const activeCalls = [
  {
    caller: "+971 50 321 8890",
    language: "Arabic",
    duration: "02:14",
    status: "AI Handling",
    outcome: "In Progress",
  },
  {
    caller: "+971 55 908 1120",
    language: "English",
    duration: "04:52",
    status: "Transferred",
    outcome: "Human Handoff",
  },
  {
    caller: "+971 58 111 2234",
    language: "Hindi",
    duration: "01:37",
    status: "Completed",
    outcome: "Resolved",
  },
];

const callLogs = [
  {
    caller: "+971 50 123 4567",
    language: "Arabic",
    duration: "03:21",
    outcome: "Resolved by AI",
    time: "10:14 AM",
  },
  {
    caller: "+971 55 444 2211",
    language: "English",
    duration: "05:10",
    outcome: "Transferred to human",
    time: "09:48 AM",
  },
  {
    caller: "+971 58 889 3321",
    language: "Hindi",
    duration: "02:08",
    outcome: "Payment link sent",
    time: "09:10 AM",
  },
  {
    caller: "+971 52 000 9182",
    language: "Tagalog",
    duration: "01:49",
    outcome: "Booking confirmed",
    time: "Yesterday",
  },
];

const transcript = [
  {
    speaker: "AI",
    text: "Hello, thank you for calling Al Baraka Trading. How can I help you today?",
  },
  {
    speaker: "Caller",
    text: "I want to know if I can pay for the premium package in installments.",
  },
  {
    speaker: "AI",
    text: "Yes, installment options are available. I can also send you a payment link via WhatsApp right after this call.",
  },
  {
    speaker: "Caller",
    text: "That would be perfect. Also, can someone confirm the booking slot for tomorrow?",
  },
  {
    speaker: "AI",
    text: "Absolutely. I’ve noted your request and can arrange confirmation for tomorrow’s slot.",
  },
];

function badgeClasses(status: string) {
  if (status === "AI Handling") {
    return "bg-emerald-500/15 text-emerald-300 border border-emerald-500/20";
  }
  if (status === "Transferred") {
    return "bg-yellow-500/15 text-yellow-300 border border-yellow-500/20";
  }
  if (status === "Completed") {
    return "bg-purple-500/15 text-purple-300 border border-purple-500/20";
  }
  return "bg-slate-500/15 text-slate-300 border border-slate-500/20";
}

export default function VoiceAIPage() {
  return (
    <div className="min-h-screen bg-[#060b17] text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.08),transparent_20%),linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:auto,80px_80px,80px_80px]" />

      <div className="relative p-6">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <h1 className="text-4xl font-semibold">Voice AI</h1>
            <p className="mt-2 text-gray-400">
              Monitor live calls, transcripts, language detection, and human handoff.
            </p>
          </div>

          <div className="flex gap-3">
            <button className="rounded-2xl border border-[#27304a] bg-[#0a111e] px-5 py-3 text-gray-300">
              Export Logs
            </button>
            <button className="rounded-2xl bg-emerald-500 px-5 py-3 font-semibold text-black">
              Voice Settings
            </button>
          </div>
        </div>

        <div className="mb-6 grid gap-4 md:grid-cols-4">
          <div className="rounded-[24px] border border-[#1f2740] bg-[#0c1322] p-5">
            <p className="text-sm uppercase tracking-[0.18em] text-gray-500">Active Calls</p>
            <p className="mt-4 text-5xl font-bold">4</p>
            <p className="mt-2 text-emerald-400">Live now</p>
          </div>

          <div className="rounded-[24px] border border-[#1f2740] bg-[#0c1322] p-5">
            <p className="text-sm uppercase tracking-[0.18em] text-gray-500">Calls Today</p>
            <p className="mt-4 text-5xl font-bold">41</p>
            <p className="mt-2 text-emerald-400">↑ 9% vs yesterday</p>
          </div>

          <div className="rounded-[24px] border border-[#1f2740] bg-[#0c1322] p-5">
            <p className="text-sm uppercase tracking-[0.18em] text-gray-500">AI Resolution</p>
            <p className="mt-4 text-5xl font-bold">88%</p>
            <p className="mt-2 text-purple-300">Voice channel</p>
          </div>

          <div className="rounded-[24px] border border-[#1f2740] bg-[#0c1322] p-5">
            <p className="text-sm uppercase tracking-[0.18em] text-gray-500">Avg Response</p>
            <p className="mt-4 text-5xl font-bold">2.1s</p>
            <p className="mt-2 text-yellow-300">Initial pickup latency</p>
          </div>
        </div>

        <div className="mb-6 grid gap-6 xl:grid-cols-[1fr_360px]">
          <div className="rounded-[30px] border border-[#1f2740] bg-[#0c1322] p-6">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-3xl font-semibold">Live Call Monitor</h2>
              <span className="rounded-full bg-emerald-500/15 px-4 py-2 text-sm text-emerald-300">
                ● Voice Agent Live
              </span>
            </div>

            <div className="space-y-4">
              {activeCalls.map((call, index) => (
                <div
                  key={`${call.caller}-${index}`}
                  className="rounded-[24px] border border-[#1b2234] bg-[#0a111e] p-5"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <p className="text-xl font-medium">{call.caller}</p>
                      <p className="mt-1 text-sm text-gray-500">
                        Language detected: {call.language}
                      </p>
                    </div>

                    <span className={`inline-flex rounded-full px-3 py-1 text-xs ${badgeClasses(call.status)}`}>
                      {call.status}
                    </span>
                  </div>

                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="rounded-2xl bg-[#11192b] p-4">
                      <p className="text-sm text-gray-500">Duration</p>
                      <p className="mt-1 text-lg text-white">{call.duration}</p>
                    </div>
                    <div className="rounded-2xl bg-[#11192b] p-4">
                      <p className="text-sm text-gray-500">Outcome</p>
                      <p className="mt-1 text-lg text-white">{call.outcome}</p>
                    </div>
                    <div className="rounded-2xl bg-[#11192b] p-4">
                      <p className="text-sm text-gray-500">Agent</p>
                      <p className="mt-1 text-lg text-white">Default Voice AI</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[30px] border border-[#1f2740] bg-[#0c1322] p-6">
              <h2 className="text-3xl font-semibold">Voice Settings</h2>

              <div className="mt-5 space-y-4">
                <div className="rounded-2xl bg-[#0a111e] p-4">
                  <p className="text-sm text-gray-500">Primary Language</p>
                  <p className="mt-1 text-white">Arabic / English</p>
                </div>

                <div className="rounded-2xl bg-[#0a111e] p-4">
                  <p className="text-sm text-gray-500">Fallback Language</p>
                  <p className="mt-1 text-white">English</p>
                </div>

                <div className="rounded-2xl bg-[#0a111e] p-4">
                  <p className="text-sm text-gray-500">Transfer Number</p>
                  <p className="mt-1 text-white">+971 50 111 9988</p>
                </div>

                <div className="rounded-2xl bg-[#0a111e] p-4">
                  <p className="text-sm text-gray-500">Voice Mode</p>
                  <p className="mt-1 text-emerald-400">Natural · Conversational</p>
                </div>
              </div>
            </div>

            <div className="rounded-[30px] border border-[#1f2740] bg-[#0c1322] p-6">
              <h2 className="text-3xl font-semibold">Quick Actions</h2>

              <div className="mt-5 grid gap-3">
                <button className="rounded-2xl border border-[#27304a] bg-[#0a111e] px-4 py-3 text-left text-gray-300">
                  Force Human Takeover
                </button>
                <button className="rounded-2xl border border-[#27304a] bg-[#0a111e] px-4 py-3 text-left text-gray-300">
                  Send Payment Link
                </button>
                <button className="rounded-2xl border border-[#27304a] bg-[#0a111e] px-4 py-3 text-left text-gray-300">
                  Confirm Booking
                </button>
                <button className="rounded-2xl border border-[#27304a] bg-[#0a111e] px-4 py-3 text-left text-gray-300">
                  Update Voice Tone
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[30px] border border-[#1f2740] bg-[#0c1322] p-6">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-3xl font-semibold">Call Logs</h2>
              <button className="rounded-2xl border border-[#27304a] bg-[#0a111e] px-4 py-2 text-sm text-gray-300">
                Filter
              </button>
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#1b2234]">
              <div className="grid grid-cols-[1.1fr_0.8fr_0.8fr_1fr_0.8fr] bg-[#0a111e] px-5 py-4 text-sm uppercase tracking-[0.18em] text-gray-500">
                <span>Caller</span>
                <span>Language</span>
                <span>Duration</span>
                <span>Outcome</span>
                <span>Time</span>
              </div>

              {callLogs.map((log, index) => (
                <div
                  key={`${log.caller}-${index}`}
                  className="grid grid-cols-[1.1fr_0.8fr_0.8fr_1fr_0.8fr] items-center border-t border-[#1b2234] bg-[#0c1322] px-5 py-5"
                >
                  <span className="text-white">{log.caller}</span>
                  <span className="text-gray-300">{log.language}</span>
                  <span className="text-gray-300">{log.duration}</span>
                  <span className="text-gray-200">{log.outcome}</span>
                  <span className="text-gray-500">{log.time}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[30px] border border-[#1f2740] bg-[#0c1322] p-6">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-3xl font-semibold">Latest Transcript</h2>
              <button className="rounded-2xl bg-emerald-500/15 px-4 py-2 text-sm text-emerald-300">
                View Full Transcript
              </button>
            </div>

            <div className="space-y-4">
              {transcript.map((line, index) => (
                <div
                  key={index}
                  className={`rounded-[22px] p-4 ${
                    line.speaker === "AI"
                      ? "border border-emerald-500/20 bg-emerald-500/10"
                      : "border border-[#1b2234] bg-[#0a111e]"
                  }`}
                >
                  <p
                    className={`text-sm ${
                      line.speaker === "AI" ? "text-emerald-300" : "text-yellow-300"
                    }`}
                  >
                    {line.speaker}
                  </p>
                  <p className="mt-2 leading-7 text-gray-200">{line.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-[24px] border border-[#1b2234] bg-[#0a111e] p-5">
              <p className="text-sm text-gray-500">Call Summary</p>
              <p className="mt-2 text-gray-300">
                Caller asked about premium package installments and booking confirmation.
                AI handled pricing inquiry successfully and prepared next-step payment action.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}