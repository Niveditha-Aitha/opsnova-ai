
import GitHubLogin from "./github/GitHubLogin";

type NavbarProps = {
  onSearch: (value: string) => void;
  onDashboard: () => void;
  onHome: () => void;
  onVault: () => void;
  onLogin: () => void;
};

function Navbar({
  onVault,
  onSearch,
  onDashboard,
  onHome,
  onLogin,
}: NavbarProps) {
  

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">

          {/* Logo */}

          <div
            onClick={onHome}
            className="flex cursor-pointer items-center gap-3"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-xl shadow-lg">
              🚀
            </div>

            <div>
              <h1 className="text-2xl font-extrabold tracking-wide">
                OpsNova{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  AI
                </span>
              </h1>

              <p className="text-xs text-slate-400">
                AI Powered DevOps Platform
              </p>
            </div>
          </div>

          {/* Search */}

          <div className="hidden w-96 lg:flex">
            <input
              type="text"
              placeholder="🔍 Search experts..."
              className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 outline-none transition focus:border-blue-500"
              onChange={(e) => onSearch(e.target.value)}
            />
          </div>

          {/* Navigation */}

          <div className="flex items-center gap-4">

           <button
  onClick={onDashboard}
  className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-4 py-2.5 text-base font-semibold text-white transition-all duration-300 hover:border-blue-500 hover:bg-slate-800"
>
  🖥️ Dashboard
</button>

            <GitHubLogin />

            <button
  onClick={onVault}
  className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-4 py-2.5 text-base font-semibold text-white transition-all duration-300 hover:border-cyan-500 hover:bg-slate-800"
>
  🧰 Vault
</button>

            <button
  onClick={onLogin}
  className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-2.5 text-base font-semibold text-white transition-all duration-300 hover:shadow-lg"
>
  🔐 Login
</button>

          </div>
        </div>
      </nav>

    </>
  );
}

export default Navbar;