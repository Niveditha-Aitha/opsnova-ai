function LinuxInfo() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Hero */}

      <section className="mx-auto max-w-7xl px-8 pt-16">

        <div className="flex items-center gap-5">

          <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-lime-500 to-green-500 text-5xl shadow-xl">
            🐧
          </div>

          <div>

            <h1 className="text-5xl font-bold">
              Linux
            </h1>

            <p className="mt-2 text-xl text-slate-400">
              Open Source Operating System
            </p>

          </div>

        </div>

      </section>

      {/* Quote */}

      <section className="mx-auto mt-10 max-w-6xl rounded-3xl border border-slate-800 bg-slate-900 p-8">

        <h2 className="text-3xl font-semibold">
          "Everything is a File."
        </h2>

      </section>

      {/* Overview */}

      <section className="mx-auto mt-10 max-w-6xl rounded-3xl border border-slate-800 bg-slate-900 p-8">

        <h2 className="text-3xl font-bold">
          📖 What is Linux?
        </h2>

        <p className="mt-6 text-lg leading-9 text-slate-300">

          Linux is an open-source operating system widely used for
          servers, cloud platforms, networking devices and DevOps
          environments. It is known for its stability, security,
          flexibility and powerful command-line interface.

          <br /><br />

          Linux powers most cloud infrastructure, Kubernetes clusters,
          Docker hosts and enterprise applications around the world.

        </p>

      </section>

      {/* Benefits */}

      <section className="mx-auto mt-10 max-w-6xl">

        <h2 className="mb-8 text-3xl font-bold">
          ✨ Why Use Linux?
        </h2>

        <div className="grid gap-6 md:grid-cols-3">

          {[
            "🐧 Open Source",
            "⚡ High Performance",
            "🔐 Secure & Stable",
            "☁ Cloud Ready",
            "💰 Free to Use",
            "🛠 Powerful CLI",
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
          🏗 Linux Administration Workflow
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-6 text-center">

          {[
            "User",
            "Shell",
            "Commands",
            "Kernel",
            "System Resources",
            "Applications",
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

      {/* Commands */}

      <section className="mx-auto mt-14 max-w-6xl rounded-3xl border border-slate-800 bg-slate-900 p-8">

        <h2 className="text-3xl font-bold mb-8">
          ⚡ Common Linux Commands
        </h2>

        <div className="space-y-4 font-mono">

          <div className="rounded-xl bg-slate-800 p-4">
            ls -la
          </div>

          <div className="rounded-xl bg-slate-800 p-4">
            cd /path
          </div>

          <div className="rounded-xl bg-slate-800 p-4">
            pwd
          </div>

          <div className="rounded-xl bg-slate-800 p-4">
            mkdir project
          </div>

          <div className="rounded-xl bg-slate-800 p-4">
            cp source destination
          </div>

          <div className="rounded-xl bg-slate-800 p-4">
            mv old new
          </div>

          <div className="rounded-xl bg-slate-800 p-4">
            rm -rf folder
          </div>

          <div className="rounded-xl bg-slate-800 p-4">
            chmod +x script.sh
          </div>

          <div className="rounded-xl bg-slate-800 p-4">
            chown user:user file
          </div>

          <div className="rounded-xl bg-slate-800 p-4">
            systemctl status nginx
          </div>

          <div className="rounded-xl bg-slate-800 p-4">
            journalctl -xe
          </div>

          <div className="rounded-xl bg-slate-800 p-4">
            top
          </div>

        </div>

      </section>

      {/* Best Practices */}

      <section className="mx-auto mt-14 max-w-6xl rounded-3xl border border-slate-800 bg-slate-900 p-8">

        <h2 className="text-3xl font-bold">
          💡 Best Practices
        </h2>

        <ul className="mt-6 space-y-4 text-lg text-slate-300">

          <li>✅ Keep the system updated</li>

          <li>✅ Follow least privilege access</li>

          <li>✅ Use SSH keys instead of passwords</li>

          <li>✅ Monitor logs regularly</li>

          <li>✅ Backup important data</li>

          <li>✅ Automate repetitive tasks with Bash</li>

        </ul>

      </section>

      {/* Official Resources */}

      <section className="mx-auto mt-14 mb-20 max-w-6xl rounded-3xl border border-slate-800 bg-slate-900 p-8">

        <h2 className="text-3xl font-bold mb-8">
          📚 Official Resources
        </h2>

        <div className="space-y-5">

          <a
            href="https://kernel.org/"
            target="_blank"
            rel="noreferrer"
            className="block text-blue-400 hover:text-blue-300"
          >
            🌐 Linux Kernel Official Website
          </a>

          <a
            href="https://linuxcommand.org/"
            target="_blank"
            rel="noreferrer"
            className="block text-blue-400 hover:text-blue-300"
          >
            📖 Linux Command Guide
          </a>

          <a
            href="https://www.gnu.org/"
            target="_blank"
            rel="noreferrer"
            className="block text-blue-400 hover:text-blue-300"
          >
            💻 GNU Project
          </a>

          <a
            href="https://ubuntu.com/tutorials"
            target="_blank"
            rel="noreferrer"
            className="block text-blue-400 hover:text-blue-300"
          >
            🐧 Ubuntu Tutorials
          </a>

        </div>

      </section>

    </main>
  );
}

export default LinuxInfo;