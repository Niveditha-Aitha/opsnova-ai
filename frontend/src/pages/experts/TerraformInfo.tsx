function TerraformInfo() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Hero */}

      <section className="mx-auto max-w-7xl px-8 pt-16">

        <div className="flex items-center gap-5">

          <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 text-5xl shadow-xl">
            ☁
          </div>

          <div>

            <h1 className="text-5xl font-bold">
              Terraform
            </h1>

            <p className="mt-2 text-xl text-slate-400">
              Infrastructure as Code Platform
            </p>

          </div>

        </div>

      </section>

      {/* Quote */}

      <section className="mx-auto mt-10 max-w-6xl rounded-3xl border border-slate-800 bg-slate-900 p-8">

        <h2 className="text-3xl font-semibold">
          "Build Infrastructure with Code."
        </h2>

      </section>

      {/* Overview */}

      <section className="mx-auto mt-10 max-w-6xl rounded-3xl border border-slate-800 bg-slate-900 p-8">

        <h2 className="text-3xl font-bold">
          📖 What is Terraform?
        </h2>

        <p className="mt-6 text-lg leading-9 text-slate-300">

          Terraform is an open-source Infrastructure as Code (IaC)
          tool developed by HashiCorp that allows you to define,
          provision and manage cloud infrastructure using simple
          configuration files.

          <br /><br />

          It supports multiple cloud providers including AWS,
          Azure, Google Cloud and Kubernetes through providers.

        </p>

      </section>

      {/* Benefits */}

      <section className="mx-auto mt-10 max-w-6xl">

        <h2 className="mb-8 text-3xl font-bold">
          ✨ Why Use Terraform?
        </h2>

        <div className="grid gap-6 md:grid-cols-3">

          {[
            "☁ Infrastructure as Code",
            "🚀 Multi Cloud Support",
            "⚡ Automation",
            "📦 Reusable Modules",
            "🔄 Version Controlled",
            "📈 Scalable Infrastructure",
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
          🏗 Terraform Workflow
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-6 text-center">

          {[
            "Developer",
            ".tf Files",
            "terraform init",
            "terraform plan",
            "terraform apply",
            "Cloud Resources",
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
          ⚡ Common Terraform Commands
        </h2>

        <div className="space-y-4 font-mono">

          <div className="rounded-xl bg-slate-800 p-4">
            terraform init
          </div>

          <div className="rounded-xl bg-slate-800 p-4">
            terraform validate
          </div>

          <div className="rounded-xl bg-slate-800 p-4">
            terraform plan
          </div>

          <div className="rounded-xl bg-slate-800 p-4">
            terraform apply
          </div>

          <div className="rounded-xl bg-slate-800 p-4">
            terraform destroy
          </div>

          <div className="rounded-xl bg-slate-800 p-4">
            terraform fmt
          </div>

        </div>

      </section>

      {/* Best Practices */}

      <section className="mx-auto mt-14 max-w-6xl rounded-3xl border border-slate-800 bg-slate-900 p-8">

        <h2 className="text-3xl font-bold">
          💡 Best Practices
        </h2>

        <ul className="mt-6 space-y-4 text-lg text-slate-300">

          <li>✅ Store State Files Securely</li>

          <li>✅ Use Remote Backend</li>

          <li>✅ Organize Infrastructure into Modules</li>

          <li>✅ Never Hardcode Secrets</li>

          <li>✅ Use Variables and Outputs</li>

          <li>✅ Review terraform plan Before Apply</li>

        </ul>

      </section>

      {/* Official Resources */}

      <section className="mx-auto mt-14 mb-20 max-w-6xl rounded-3xl border border-slate-800 bg-slate-900 p-8">

        <h2 className="text-3xl font-bold mb-8">
          📚 Official Resources
        </h2>

        <div className="space-y-5">

          <a
            href="https://developer.hashicorp.com/terraform"
            target="_blank"
            rel="noreferrer"
            className="block text-blue-400 hover:text-blue-300"
          >
            🌐 Terraform Official Website
          </a>

          <a
            href="https://developer.hashicorp.com/terraform/docs"
            target="_blank"
            rel="noreferrer"
            className="block text-blue-400 hover:text-blue-300"
          >
            📖 Terraform Documentation
          </a>

          <a
            href="https://github.com/hashicorp/terraform"
            target="_blank"
            rel="noreferrer"
            className="block text-blue-400 hover:text-blue-300"
          >
            💻 Terraform GitHub Repository
          </a>

          <a
            href="https://registry.terraform.io/"
            target="_blank"
            rel="noreferrer"
            className="block text-blue-400 hover:text-blue-300"
          >
            📦 Terraform Registry
          </a>

        </div>

      </section>

    </main>
  );
}

export default TerraformInfo;