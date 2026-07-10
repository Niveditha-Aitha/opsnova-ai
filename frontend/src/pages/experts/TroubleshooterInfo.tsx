function TroubleshooterInfo() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Hero */}

      <section className="mx-auto max-w-7xl px-8 pt-16">

        <div className="flex items-center gap-5">

          <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 text-5xl shadow-xl">
            🔍
          </div>

          <div>

            <h1 className="text-5xl font-bold">
              DevOps Troubleshooter
            </h1>

            <p className="mt-2 text-xl text-slate-400">
              Diagnose • Analyze • Resolve
            </p>

          </div>

        </div>

      </section>

      {/* Quote */}

      <section className="mx-auto mt-10 max-w-6xl rounded-3xl border border-slate-800 bg-slate-900 p-8">

        <h2 className="text-3xl font-semibold">
          "Every Problem Has a Root Cause."
        </h2>

      </section>

      {/* Overview */}

      <section className="mx-auto mt-10 max-w-6xl rounded-3xl border border-slate-800 bg-slate-900 p-8">

        <h2 className="text-3xl font-bold">
          📖 What is DevOps Troubleshooting?
        </h2>

        <p className="mt-6 text-lg leading-9 text-slate-300">

          DevOps troubleshooting is the process of identifying,
          analyzing and resolving issues that occur across
          applications, infrastructure, CI/CD pipelines,
          containers and cloud environments.

          <br /><br />

          Effective troubleshooting minimizes downtime,
          improves system reliability and helps teams
          quickly restore production services.

        </p>

      </section>

      {/* Benefits */}

      <section className="mx-auto mt-10 max-w-6xl">

        <h2 className="mb-8 text-3xl font-bold">
          ✨ Why Use a Troubleshooter?
        </h2>

        <div className="grid gap-6 md:grid-cols-3">

          {[
            "🔍 Root Cause Analysis",
            "⚡ Faster Issue Resolution",
            "📋 Log Analysis",
            "🚀 Reduced Downtime",
            "🛠 Infrastructure Debugging",
            "📈 Improved Reliability",
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
          🏗 Troubleshooting Workflow
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-6 text-center">

          {[
            "Issue",
            "Collect Logs",
            "Analyze",
            "Identify Cause",
            "Fix",
            "Verify",
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

      {/* Common Tools */}

      <section className="mx-auto mt-14 max-w-6xl rounded-3xl border border-slate-800 bg-slate-900 p-8">

        <h2 className="text-3xl font-bold mb-8">
          ⚡ Common Troubleshooting Tools
        </h2>

        <div className="space-y-4 font-mono">

          <div className="rounded-xl bg-slate-800 p-4">
            docker logs container-name
          </div>

          <div className="rounded-xl bg-slate-800 p-4">
            kubectl logs pod-name
          </div>

          <div className="rounded-xl bg-slate-800 p-4">
            kubectl describe pod pod-name
          </div>

          <div className="rounded-xl bg-slate-800 p-4">
            journalctl -xe
          </div>

          <div className="rounded-xl bg-slate-800 p-4">
            systemctl status service-name
          </div>

          <div className="rounded-xl bg-slate-800 p-4">
            ping google.com
          </div>

          <div className="rounded-xl bg-slate-800 p-4">
            curl http://localhost:8080
          </div>

          <div className="rounded-xl bg-slate-800 p-4">
            netstat -tulpn
          </div>

        </div>

      </section>

      {/* Best Practices */}

      <section className="mx-auto mt-14 max-w-6xl rounded-3xl border border-slate-800 bg-slate-900 p-8">

        <h2 className="text-3xl font-bold">
          💡 Best Practices
        </h2>

        <ul className="mt-6 space-y-4 text-lg text-slate-300">

          <li>✅ Always check logs first</li>

          <li>✅ Reproduce the issue before fixing</li>

          <li>✅ Monitor system resources</li>

          <li>✅ Verify configuration files</li>

          <li>✅ Test fixes in staging first</li>

          <li>✅ Document root causes and resolutions</li>

        </ul>

      </section>

      {/* Official Resources */}

      <section className="mx-auto mt-14 mb-20 max-w-6xl rounded-3xl border border-slate-800 bg-slate-900 p-8">

        <h2 className="text-3xl font-bold mb-8">
          📚 Official Resources
        </h2>

        <div className="space-y-5">

          <a
            href="https://kubernetes.io/docs/tasks/debug/"
            target="_blank"
            rel="noreferrer"
            className="block text-blue-400 hover:text-blue-300"
          >
            ☸ Kubernetes Debugging Guide
          </a>

          <a
            href="https://docs.docker.com/config/containers/logging/"
            target="_blank"
            rel="noreferrer"
            className="block text-blue-400 hover:text-blue-300"
          >
            🐳 Docker Logging Documentation
          </a>

          <a
            href="https://www.jenkins.io/doc/"
            target="_blank"
            rel="noreferrer"
            className="block text-blue-400 hover:text-blue-300"
          >
            🔧 Jenkins Documentation
          </a>

          <a
            href="https://linuxcommand.org/"
            target="_blank"
            rel="noreferrer"
            className="block text-blue-400 hover:text-blue-300"
          >
            🐧 Linux Command Reference
          </a>

        </div>

      </section>

    </main>
  );
}

export default TroubleshooterInfo;