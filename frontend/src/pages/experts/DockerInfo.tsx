

type DockerInfoProps = {
  onLaunch: () => void;
};

function DockerInfo({
  onLaunch,
}: DockerInfoProps) {


 return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Hero */}

      <section className="mx-auto max-w-7xl px-8 pt-16">

        <div className="flex items-center gap-5">

          <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 text-5xl shadow-xl">
            🐳
          </div>

          <div>

            <h1 className="text-5xl font-bold">
              Docker
            </h1>

            <p className="mt-2 text-xl text-slate-400">
              Containerization Platform
            </p>

          </div>

        </div>

      </section>

      {/* Quote */}

      <section className="mx-auto mt-10 max-w-6xl rounded-3xl border border-slate-800 bg-slate-900 p-8">

        <h2 className="text-3xl font-semibold">
          "Build Once. Run Anywhere."
        </h2>

      </section>

      {/* Overview */}

      <section className="mx-auto mt-10 max-w-6xl rounded-3xl border border-slate-800 bg-slate-900 p-8">

        <h2 className="text-3xl font-bold">
          📖 What is Docker?
        </h2>

        <p className="mt-6 text-lg leading-9 text-slate-300">

          Docker is an open-source containerization platform that allows
          developers to package applications together with all required
          libraries, dependencies and configurations into lightweight,
          portable containers.

          <br /><br />

          Containers ensure applications run consistently across
          development, testing and production environments.

        </p>

      </section>

      {/* Benefits */}

      <section className="mx-auto mt-10 max-w-6xl">

        <h2 className="mb-8 text-3xl font-bold">
          ✨ Why Use Docker?
        </h2>

        <div className="grid gap-6 md:grid-cols-3">

          {[
            "🚀 Faster Deployment",
            "📦 Lightweight Containers",
            "💻 Platform Independent",
            "⚡ Better Resource Usage",
            "📈 Easy Scaling",
            "🔒 Consistent Environments",
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

      {/* Architecture */}

      <section className="mx-auto mt-14 max-w-6xl rounded-3xl border border-slate-800 bg-slate-900 p-10">

        <h2 className="text-3xl font-bold mb-10">
          🏗 Docker Workflow
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-6 text-center">

          {[
            "Developer",
            "Dockerfile",
            "Docker Image",
            "Container",
            "Production",
          ].map((step, index) => (
            <div key={step} className="flex items-center gap-6">
              <div className="rounded-xl bg-slate-800 px-6 py-4 font-semibold">
                {step}
              </div>

              {index !== 4 && (
                <span className="text-3xl text-blue-400">➜</span>
              )}
            </div>
          ))}

        </div>

      </section>

      {/* Commands */}

      <section className="mx-auto mt-14 max-w-6xl rounded-3xl border border-slate-800 bg-slate-900 p-8">

        <h2 className="text-3xl font-bold mb-8">
          ⚡ Common Docker Commands
        </h2>

        <div className="space-y-4 font-mono">

          <div className="rounded-xl bg-slate-800 p-4">
            docker build -t my-app .
          </div>

          <div className="rounded-xl bg-slate-800 p-4">
            docker run -p 8000:8000 my-app
          </div>

          <div className="rounded-xl bg-slate-800 p-4">
            docker ps
          </div>

          <div className="rounded-xl bg-slate-800 p-4">
            docker images
          </div>

          <div className="rounded-xl bg-slate-800 p-4">
            docker compose up -d
          </div>

        </div>

      </section>

      {/* Best Practices */}

      <section className="mx-auto mt-14 max-w-6xl rounded-3xl border border-slate-800 bg-slate-900 p-8">

        <h2 className="text-3xl font-bold">
          💡 Best Practices
        </h2>

        <ul className="mt-6 space-y-4 text-lg text-slate-300">

          <li>✅ Use official base images</li>

          <li>✅ Use multi-stage builds</li>

          <li>✅ Never store secrets inside images</li>

          <li>✅ Use .dockerignore</li>

          <li>✅ Keep images small</li>

          <li>✅ Pin image versions</li>

        </ul>

      </section>

      {/* Official Resources */}

      <section className="mx-auto mt-14 max-w-6xl rounded-3xl border border-slate-800 bg-slate-900 p-8">

        <h2 className="text-3xl font-bold mb-8">
          📚 Official Resources
        </h2>

        <div className="space-y-5">

          <a
            href="https://www.docker.com/"
            target="_blank"
            rel="noreferrer"
            className="block text-blue-400 hover:text-blue-300"
          >
            🌐 Docker Official Website
          </a>

          <a
            href="https://docs.docker.com/"
            target="_blank"
            rel="noreferrer"
            className="block text-blue-400 hover:text-blue-300"
          >
            📖 Docker Documentation
          </a>

          <a
            href="https://hub.docker.com/"
            target="_blank"
            rel="noreferrer"
            className="block text-blue-400 hover:text-blue-300"
          >
            📦 Docker Hub
          </a>

        </div>

      </section>

      {/* Launch */}

      <section className="mx-auto mt-16 mb-20 max-w-6xl rounded-3xl border border-blue-500 bg-slate-900 p-10 text-center">

        <h2 className="text-3xl font-bold">
          Ready to Generate Docker Files?
        </h2>

        <p className="mt-5 text-slate-400">
          Launch the Docker Expert and generate Dockerfiles,
          Docker Compose files and .dockerignore instantly.
        </p>

        <button
  onClick={onLaunch}
  className="mt-10 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 text-lg font-semibold transition hover:scale-105"
>
  🚀 Launch Docker Expert
</button>

      </section>

    </main>
  );
}

export default DockerInfo;