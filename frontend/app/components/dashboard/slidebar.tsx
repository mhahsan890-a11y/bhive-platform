export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-[#0b0f1a] border-r border-white/10 p-5 fixed">
      <h2 className="text-xl font-bold mb-6">Bhive</h2>

      <div className="space-y-3">
        <p className="text-green-400 text-sm">● LIVE</p>

        <div className="mt-6">
          <p className="text-gray-400 text-xs mb-2">WORKSPACE</p>
          <div className="bg-green-500/10 text-green-400 p-2 rounded">
            Overview
          </div>
          <p className="text-gray-300 mt-2">Inbox</p>
          <p className="text-gray-300 mt-2">Voice AI</p>
          <p className="text-gray-300 mt-2">CRM</p>
        </div>
      </div>
    </div>
  );
}