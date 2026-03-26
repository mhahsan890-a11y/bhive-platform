export default function AdminLoginPage() {
  return (
    <div className="min-h-screen bg-[#060b17] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(97,55,190,0.14),transparent_24%),linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:auto,80px_80px,80px_80px] pointer-events-none" />

      <div className="relative flex min-h-screen items-center justify-center px-5">
        <div className="w-full max-w-md rounded-[32px] border border-[#1f2740] bg-[#0c1322] p-8 shadow-2xl">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400 font-black text-black">
              B
            </div>
            <div>
              <h1 className="text-3xl font-semibold">Bhive</h1>
              <p className="text-sm text-gray-400">Admin Portal Login</p>
            </div>
          </div>

          <h2 className="text-4xl font-semibold">Admin Sign In</h2>
          <p className="mt-3 text-gray-400">
            Use your platform admin credentials to access analytics, tenant controls, billing, and logs.
          </p>

          <div className="mt-8 space-y-5">
            <div>
              <label className="mb-2 block text-sm text-gray-400">Admin Email</label>
              <input
                type="email"
                placeholder="admin@bhive.ai"
                className="w-full rounded-2xl border border-[#26304a] bg-[#09111e] px-4 py-3 text-white outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-gray-400">Password</label>
              <input
                type="password"
                placeholder="Enter password"
                className="w-full rounded-2xl border border-[#26304a] bg-[#09111e] px-4 py-3 text-white outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-gray-400">MFA Code</label>
              <input
                type="text"
                placeholder="6-digit code"
                className="w-full rounded-2xl border border-[#26304a] bg-[#09111e] px-4 py-3 text-white outline-none"
              />
            </div>

            <button className="w-full rounded-2xl bg-yellow-400 px-5 py-3.5 font-semibold text-black shadow-[0_0_28px_rgba(250,204,21,0.25)]">
              Sign In to Admin
            </button>
          </div>

          <div className="mt-6 flex items-center justify-between text-sm text-gray-400">
            <button>Forgot password?</button>
            <a href="/admin" className="text-yellow-300">
              Demo admin page →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}