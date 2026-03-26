export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#060b17] text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold">Bhive Frontend Working ✅</h1>
        <p className="mt-4 text-gray-400">
          Root page fixed. Ab tum baki routes check kar sakte ho.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="/funnel"
            className="rounded-2xl bg-yellow-400 px-6 py-3 font-semibold text-black"
          >
            Funnel
          </a>

          <a
            href="/admin"
            className="rounded-2xl border border-white/20 px-6 py-3"
          >
            Admin
          </a>

          <a
            href="/app"
            className="rounded-2xl border border-white/20 px-6 py-3"
          >
            Tenant App
          </a>
        </div>
      </div>
    </div>
  );
}