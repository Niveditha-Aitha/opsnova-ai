function JenkinsInfo() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Hero */}

      <section className="mx-auto max-w-7xl px-8 pt-16">

        <div className="flex items-center gap-5">

          <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 text-5xl shadow-xl">
            🔧
          </div>

          <div>

            <h1 className="text-5xl font-bold">
              Jenkins
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
          "Automate Everything."
        </h2>

      </section>

      {/* Overview */}

      <section className="mx-auto mt-10 max-w-6xl rounded-3xl border border-slate-800 bg-slate-900 p-8">

        <h2 className="text-3xl font-bold">
          📖 What is Jenkins?
        </h2>

        <p className="mt-6 text-lg leading-9 text-slate-300">

          Jenkins is an open-source automation server used to build,
          test and deploy applications automatically. It enables
          Continuous Integration (CI) and Continuous Delivery (CD)
          through powerful pipelines and thousands of plugins.

          <br /><br />

          Jenkins integrates with Git, Docker, Kubernetes, Maven,
          Gradle, Terraform, AWS and many other DevOps tools.

        </p>

      </section>

      {/* Benefits */}

      <section className="mx-auto mt-10 max-w-6xl">

        <h2 className="mb-8 text-3xl font-bold">
          ✨ Why Use Jenkins?
        </h2>

        <div className="grid gap-6 md:grid-cols-3">

          {[
            "🚀 Continuous Integration",
            "📦 Continuous Delivery",
            "⚡ Pipeline Automation",
            "🔌 2000+ Plugins",
            "📈 Scalable Builds",
            "🤝 Easy Tool Integration",
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
          🏗 Jenkins Pipeline Workflow
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-6 text-center">

          {[
            "Developer",
            "Git Repository",
            "Jenkins",
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
          ⚡ Common Jenkins Commands
        </h2>

        <div className="space-y-4 font-mono">

          <div className="rounded-xl bg-slate-800 p-4">
            systemctl start jenkins
          </div>

          <div className="rounded-xl bg-slate-800 p-4">
            systemctl stop jenkins
          </div>

          <div className="rounded-xl bg-slate-800 p-4">
            systemctl restart jenkins
          </div>

          <div className="rounded-xl bg-slate-800 p-4">
            systemctl status jenkins
          </div>

          <div className="rounded-xl bg-slate-800 p-4">
            jenkins-cli list-jobs
          </div>

          <div className="rounded-xl bg-slate-800 p-4">
            jenkins-cli build job-name
          </div>

        </div>

      </section>

      {/* Best Practices */}

      <section className="mx-auto mt-14 max-w-6xl rounded-3xl border border-slate-800 bg-slate-900 p-8">

        <h2 className="text-3xl font-bold">
          💡 Best Practices
        </h2>

        <ul className="mt-6 space-y-4 text-lg text-slate-300">

          <li>✅ Store Jenkinsfiles in Git</li>

          <li>✅ Keep Plugins Updated</li>

          <li>✅ Use Distributed Build Agents</li>

          <li>✅ Secure Credentials with Credentials Manager</li>

          <li>✅ Backup Jenkins Regularly</li>

          <li>✅ Monitor Build Performance</li>

        </ul>

      </section>

      {/* Official Resources */}

      <section className="mx-auto mt-14 mb-20 max-w-6xl rounded-3xl border border-slate-800 bg-slate-900 p-8">

        <h2 className="text-3xl font-bold mb-8">
          📚 Official Resources
        </h2>

        <div className="space-y-5">

          <a
            href="https://www.jenkins.io/"
            target="_blank"
            rel="noreferrer"
            className="block text-blue-400 hover:text-blue-300"
          >
            🌐 Jenkins Official Website
          </a>

          <a
            href="https://www.jenkins.io/doc/"
            target="_blank"
            rel="noreferrer"
            className="block text-blue-400 hover:text-blue-300"
          >
            📖 Jenkins Documentation
          </a>

          <a
            href="https://github.com/jenkinsci/jenkins"
            target="_blank"
            rel="noreferrer"
            className="block text-blue-400 hover:text-blue-300"
          >
            💻 Jenkins GitHub Repository
          </a>

          <a
            href="https://plugins.jenkins.io/"
            target="_blank"
            rel="noreferrer"
            className="block text-blue-400 hover:text-blue-300"
          >
            🔌 Jenkins Plugin Index
          </a>

        </div>

      </section>

    </main>
  );
}

export default JenkinsInfo;