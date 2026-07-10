function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 px-8 py-20 text-center shadow-2xl">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_60%)] pointer-events-none"></div>

      <div className="relative z-10">

        {/* Badge */}
        <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400 mb-8">
          🚀 AI-Powered DevOps Automation Platform
        </div>

        {/* Title */}
        <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight">

          OpsNova{" "}

          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            AI
          </span>

        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-xl text-slate-300 max-w-3xl mx-auto leading-8">
          Generate Infrastructure, Automate Deployments, Build CI/CD Pipelines,
          and Troubleshoot DevOps issues using intelligent automation.
        </p>

        {/* Tags */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">

          {[
            "🐳 Docker",
            "☸ Kubernetes",
            "🔧 Jenkins",
            "☁ Terraform",
            "⚙ GitHub Actions",
            "📘 Ansible",
            "☁ AWS",
            "🚀 CI/CD",
            "🐧 Linux",
            "🔍 Troubleshooter",
          ].map((item) => (
            <span
              key={item}
              className="rounded-full border border-slate-700 bg-slate-800 px-4 py-2 text-sm text-slate-300 hover:border-blue-500 hover:text-white transition"
            >
              {item}
            </span>
          ))}

        </div>

        {/* Action Buttons */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">

          <button className="rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700">
            🚀 Explore Experts
          </button>

          <button className="rounded-xl border border-slate-700 bg-slate-900 px-8 py-3 font-semibold text-slate-300 transition hover:border-blue-500 hover:text-white">
            📦 Generate Project
          </button>

        </div>

        {/* Platform Stats */}
        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <h3 className="text-3xl font-bold text-blue-400">10</h3>
            <p className="mt-2 text-slate-400">AI Experts</p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <h3 className="text-3xl font-bold text-green-400">500+</h3>
            <p className="mt-2 text-slate-400">Templates</p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <h3 className="text-3xl font-bold text-yellow-400">100+</h3>
            <p className="mt-2 text-slate-400">Commands</p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <h3 className="text-3xl font-bold text-purple-400">24×7</h3>
            <p className="mt-2 text-slate-400">AI Assistance</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;