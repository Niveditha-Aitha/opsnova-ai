import FeatureGrid from "../components/FeatureGrid";

type Props = {
  onSelectExpert: (expert: string) => void;
};

function Home({onSelectExpert,}: Props) {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Hero Section */}

      <section className="mx-auto max-w-7xl px-8 pt-10 pb-16 text-center">

        <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm text-blue-300">
          🚀 Welcome to OpsNova AI
        </div>

        <h1 className="mt-8 text-5xl md:text-6xl font-bold tracking-tight">
          Intelligent{" "}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            DevOps
          </span>{" "}
          Starts Here
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-xl leading-8 text-slate-400">
          Generate production-ready Dockerfiles, Kubernetes manifests,
          Terraform code, CI/CD pipelines, cloud infrastructure and more —
          all from one intelligent platform.
        </p>

        <div className="mt-10 flex justify-center gap-4 text-slate-400 text-sm">

          <span>⚡ Build Faster</span>

          <span>•</span>

          <span>🚀 Deploy Smarter</span>

          <span>•</span>

          <span>🔒 Secure Infrastructure</span>

          <span>•</span>

          <span>📈 Scale Confidently</span>

        </div>

      </section>

      {/* Statistics */}

      <section className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-8 md:grid-cols-4">

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 text-center">
          <h2 className="text-4xl font-bold text-blue-400">10</h2>
          <p className="mt-2 text-slate-400">AI Experts</p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 text-center">
          <h2 className="text-4xl font-bold text-cyan-400">50+</h2>
          <p className="mt-2 text-slate-400">Templates</p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 text-center">
          <h2 className="text-4xl font-bold text-green-400">100%</h2>
          <p className="mt-2 text-slate-400">Open Source</p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 text-center">
          <h2 className="text-4xl font-bold text-purple-400">v1.0</h2>
          <p className="mt-2 text-slate-400">Current Release</p>
        </div>

      </section>

      {/* AI Experts */}

      <section className="mt-10">

        <div className="text-center">

          <h2 className="text-4xl font-bold">
            Choose Your AI Expert
          </h2>

          <p className="mt-4 text-slate-400">
            Select any DevOps expert below to start generating production-ready configurations.
          </p>

        </div>

     <FeatureGrid
    onSelectExpert={onSelectExpert}
/>

      </section>

    </main>
  );
}

export default Home;