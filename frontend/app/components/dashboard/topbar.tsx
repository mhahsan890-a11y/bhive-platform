export default function Topbar() {
  return (
    <div className="flex justify-end items-center gap-4 p-4 border-b border-white/10">
      <span className="text-green-400">● WhatsApp Live</span>
      <button className="bg-yellow-500 px-4 py-2 rounded">Upgrade</button>
    </div>
  );
}