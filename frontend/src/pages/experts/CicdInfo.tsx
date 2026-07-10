function CicdInfo() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Hero */}

      <section className="mx-auto max-w-7xl px-8 pt-16">

        <div className="flex items-center gap-5">

          <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-red-500 text-5xl shadow-xl">
            🚀
          </div>

          <div>

            <h1 className="text-5xl font-bold">
              CI/CD
            </h1>

            <p className="mt-2 text-xl text-slate-400">
              Continuous Integration & Continuous Delivery
            </p>

          </div>

        </div>

      </section>

      {/* Quote */}

      <section className="mx-auto mt-10 max-w-6xl rounded-3xl border border-slate-800 bg-slate-900 p-8">

        <h2 className="text-3xl font-semibold">
          "Build Faster. Test Smarter. Deploy Confidently."
        </h2>

      </section>

      {/* Overview */}

      <section className="mx-auto mt-10 max-w-6xl rounded-3xl border border-slate-800 bg-slate-900 p-8">

        <h2 className="text-3xl font-bold">
          📖 What is CI/CD?
        </h2>

        <p className="mt-6 text-lg leading-9 text-slate-300">

          CI/CD (Continuous Integration and Continuous Delivery /
          Continuous Deployment) is a software development practice
          that automates the process of building, testing and deploying
          applications.

          <br /><br />

          It enables development teams to release software faster,
          improve code quality and reduce manual deployment errors
          through automated pipelines.

        </p>

      </section>

      {/* Benefits */}

      <section className="mx-auto mt-10 max-w-6xl">

        <h2 className="mb-8 text-3xl font-bold">
          ✨ Why Use CI/CD?
        </h2>

        <div className="grid gap-6 md:grid-cols-3">

          {[
            "🚀 Faster Releases",
            "🧪 Automated Testing",
            "⚡ Continuous Integration",
            "📦 Continuous Deployment",
            "🔒 Improved Code Quality",
            "📈 Faster Feedback",
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
          🏗 CI/CD Pipeline Workflow
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-6 text-center">

          {[
            "Developer",
            "Git",
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

              {index !== 5 && (
                <span className="text-3xl text-blue-400">
                  ➜
                </span>
              )}

            </div>

          ))}

        </div>

      </section>

      {/* Concepts */}

      <section className="mx-auto mt-14 max-w-6xl rounded-3xl border border-slate-800 bg-slate-900 p-8">

        <h2 className="text-3xl font-bold mb-8">
          ⚡ CI/CD Pipeline Stages
        </h2>

        <div className="space-y-4 font-mono">

          <div className="rounded-xl bg-slate-800 p-4">
            Source Code
          </div>

          <div className="rounded-xl bg-slate-800 p-4">
            Build
          </div>

          <div className="rounded-xl bg-slate-800 p-4">
            Unit Testing
          </div>

          <div className="rounded-xl bg-slate-800 p-4">
            Integration Testing
          </div>

          <div className="rounded-xl bg-slate-800 p-4">
            Deploy to Staging
          </div>

          <div className="rounded-xl bg-slate-800 p-4">
            Deploy to Production
          </div>

        </div>

      </section>

      {/* Best Practices */}

      <section className="mx-auto mt-14 max-w-6xl rounded-3xl border border-slate-800 bg-slate-900 p-8">

        <h2 className="text-3xl font-bold">
          💡 Best Practices
        </h2>

        <ul className="mt-6 space-y-4 text-lg text-slate-300">

          <li>✅ Commit Code Frequently</li>

          <li>✅ Automate Testing</li>

          <li>✅ Keep Pipelines Fast</li>

          <li>✅ Deploy to Staging Before Production</li>

          <li>✅ Monitor Every Deployment</li>

          <li>✅ Roll Back Failed Releases Quickly</li>

        </ul>

      </section>

      {/* Official Resources */}

      <section className="mx-auto mt-14 mb-20 max-w-6xl rounded-3xl border border-slate-800 bg-slate-900 p-8">

        <h2 className="text-3xl font-bold mb-8">
          📚 Official Resources
        </h2>

        <div className="space-y-5">

          <a
            href="https://martinfowler.com/articles/continuousIntegration.html"
            target="_blank"
            rel="noreferrer"
            className="block text-blue-400 hover:text-blue-300"
          >
            🌐 Continuous Integration by Martin Fowler
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
            href="https://www.jenkins.io/doc/"
            target="_blank"
            rel="noreferrer"
            className="block text-blue-400 hover:text-blue-300"
          >
            💻 Jenkins Documentation
          </a>

          <a
            href="https://about.gitlab.com/topics/ci-cd/"
            target="_blank"
            rel="noreferrer"
            className="block text-blue-400 hover:text-blue-300"
          >
            🚀 GitLab CI/CD Guide
          </a>

        </div>

      </section>

    </main>
  );
}

export default CicdInfo;