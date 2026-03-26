"use client";

const leads = [
  {
    name: "Ahmed Al-Mansoori",
    phone: "+971 50 123 4567",
    stage: "New",
    source: "Ramadan Funnel",
  },
  {
    name: "Sara Nadeem",
    phone: "+971 55 888 2211",
    stage: "Qualified",
    source: "Website",
  },
  {
    name: "Rohan Khanna",
    phone: "+971 58 777 9922",
    stage: "Booked",
    source: "Ad Campaign",
  },
];

const stages = ["New", "Contacted", "Qualified", "Booked", "Converted", "Lost"];

export default function CRMPage() {
  return (
    <div className="min-h-screen bg-[#060b17] text-white p-6">
      <h1 className="text-4xl font-semibold mb-6">CRM Pipeline</h1>

      <div className="grid grid-cols-6 gap-4">
        {stages.map((stage) => (
          <div key={stage} className="bg-[#0c1322] p-4 rounded-2xl border border-[#1f2740]">
            <h2 className="mb-4 text-lg font-semibold">{stage}</h2>

            <div className="space-y-3">
              {leads
                .filter((lead) => lead.stage === stage)
                .map((lead, index) => (
                  <div
                    key={index}
                    className="bg-[#0a111e] p-4 rounded-xl border border-[#1b2234]"
                  >
                    <p className="font-semibold">{lead.name}</p>
                    <p className="text-sm text-gray-400">{lead.phone}</p>
                    <p className="text-xs text-emerald-400 mt-1">
                      {lead.source}
                    </p>

                    <div className="mt-3 flex gap-2">
                      <button className="text-xs bg-emerald-500 px-2 py-1 rounded">
                        WhatsApp
                      </button>
                      <button className="text-xs border px-2 py-1 rounded">
                        Move
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}