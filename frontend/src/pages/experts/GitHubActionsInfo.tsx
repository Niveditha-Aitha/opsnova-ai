type GitHubActionsInfoProps = {
  onLaunch: () => void;
  onBack: () => void;
};

function GitHubActionsInfo({
  onLaunch,
  onBack,
}: GitHubActionsInfoProps) {

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      <div className="mb-8">
  <button
    onClick={onBack}
    className="flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 text-white transition hover:bg-slate-700"
  >
    ← Back to Home
  </button>
</div>

      {/* Hero */}

      <section className="mx-auto max-w-7xl px-8 pt-16">

        <div className="flex items-center gap-5">

          <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-600 to-slate-400 text-5xl shadow-xl">
            ⚙
          </div>

          <div>

            <h1 className="text-5xl font-bold">
              GitHub Actions
            </h1>

            <p className="mt-2 text-xl text-slate-400">
              CI/CD Automation Platform
            </p>

          </div>

        </div>

      </section>

      {/* Quote */}

      <section className="mx-auto mt-10 max-w-6xl rounded-3xl border border-slate-800 bg-slate-900 p-8">

        <h2 className="text-3xl font-semibold">
          "Automate Every Commit."
        </h2>

      </section>

      {/* Overview */}

      <section className="mx-auto mt-10 max-w-6xl rounded-3xl border border-slate-800 bg-slate-900 p-8">

        <h2 className="text-3xl font-bold">
          📖 What is GitHub Actions?
        </h2>

        <p className="mt-6 text-lg leading-9 text-slate-300">

          GitHub Actions is GitHub's built-in CI/CD platform that
          automates software development workflows directly from
          your repository.

          <br /><br />

          It enables developers to automatically build, test,
          package and deploy applications whenever code changes
          are pushed to GitHub.

        </p>

      </section>

      {/* Benefits */}

      <section className="mx-auto mt-10 max-w-6xl">

        <h2 className="mb-8 text-3xl font-bold">
          ✨ Why Use GitHub Actions?
        </h2>

        <div className="grid gap-6 md:grid-cols-3">

          {[
            "⚙ Built into GitHub",
            "🚀 CI/CD Automation",
            "📦 Marketplace Actions",
            "☁ Cloud Hosted Runners",
            "🔄 Event Driven Workflows",
            "📈 Easy Integration",
          ].map((item) => (

            <div
              key={item}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
            >
              <p className="text-lg">{item}</p>
            </div>

          ))}

        </div>

      </section>

      {/* Workflow */}

      <section className="mx-auto mt-14 max-w-6xl rounded-3xl border border-slate-800 bg-slate-900 p-10">

        <h2 className="text-3xl font-bold mb-10">
          🏗 GitHub Actions Workflow
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-6 text-center">

          {[
            "Developer",
            "Git Push",
            "Workflow",
            "Build",
            "Test",
            "Deploy",
            "Production",
          ].map((step, index) => (

            <div
              key={step}
              className="flex items-center gap-6"
            >

              <div className="rounded-xl bg-slate-800 px-6 py-4 font-semibold">
                {step}
              </div>

              {index !== 6 && (
                <span className="text-3xl text-blue-400">
                  ➜
                </span>
              )}

            </div>

          ))}

        </div>

      </section>

      {/* Commands */}

      <section className="mx-auto mt-14 max-w-6xl rounded-3xl border border-slate-800 bg-slate-900 p-8">

        <h2 className="text-3xl font-bold mb-8">
          ⚡ Common GitHub Actions Concepts
        </h2>

        <div className="space-y-4 font-mono">

          <div className="rounded-xl bg-slate-800 p-4">
            on: push
          </div>

          <div className="rounded-xl bg-slate-800 p-4">
            on: pull_request
          </div>

          <div className="rounded-xl bg-slate-800 p-4">
            jobs:
          </div>

          <div className="rounded-xl bg-slate-800 p-4">
            runs-on: ubuntu-latest
          </div>

          <div className="rounded-xl bg-slate-800 p-4">
            uses: actions/checkout@v4
          </div>

          <div className="rounded-xl bg-slate-800 p-4">
            uses: actions/setup-node@v4
          </div>

        </div>

      </section>

      {/* Best Practices */}

      <section className="mx-auto mt-14 max-w-6xl rounded-3xl border border-slate-800 bg-slate-900 p-8">

        <h2 className="text-3xl font-bold">
          💡 Best Practices
        </h2>

        <ul className="mt-6 space-y-4 text-lg text-slate-300">

          <li>✅ Keep Workflows Small</li>

          <li>✅ Use GitHub Secrets</li>

          <li>✅ Cache Dependencies</li>

          <li>✅ Reuse Actions</li>

          <li>✅ Use Matrix Builds</li>

          <li>✅ Protect Main Branch</li>

        </ul>

      </section>

      {/* Official Resources */}

      <section className="mx-auto mt-14 mb-20 max-w-6xl rounded-3xl border border-slate-800 bg-slate-900 p-8">

        <h2 className="text-3xl font-bold mb-8">
          📚 Official Resources
        </h2>

        <div className="space-y-5">

          <a
            href="https://github.com/features/actions"
            target="_blank"
            rel="noreferrer"
            className="block text-blue-400 hover:text-blue-300"
          >
            🌐 GitHub Actions Official Website
          </a>

          <a
            href="https://docs.github.com/actions"
            target="_blank"
            rel="noreferrer"
            className="block text-blue-400 hover:text-blue-300"
          >
            📖 GitHub Actions Documentation
          </a>

          <a
            href="https://github.com/actions"
            target="_blank"
            rel="noreferrer"
            className="block text-blue-400 hover:text-blue-300"
          >
            💻 GitHub Actions Repository
          </a>

          <a
            href="https://github.com/marketplace?type=actions"
            target="_blank"
            rel="noreferrer"
            className="block text-blue-400 hover:text-blue-300"
          >
            📦 GitHub Actions Marketplace
          </a>

        </div>

        {/* Launch */}

<section className="mx-auto mt-16 mb-20 max-w-6xl rounded-3xl border border-blue-500 bg-slate-900 p-10 text-center">

  <h2 className="text-3xl font-bold">
    Ready to Generate GitHub Actions Workflow?
  </h2>

  <p className="mt-5 text-slate-400">
    Launch the GitHub Actions Expert to generate automated CI/CD workflow files for your GitHub repositories.
  </p>

  <button
    onClick={onLaunch}
    className="mt-10 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 text-lg font-semibold transition hover:scale-105"
  >
    ⚙ Launch GitHub Actions Expert
  </button>

</section>

      </section>

    </main>
  );
}

export default GitHubActionsInfo;