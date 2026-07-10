function AnsibleInfo() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Hero */}

      <section className="mx-auto max-w-7xl px-8 pt-16">

        <div className="flex items-center gap-5">

          <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 text-5xl shadow-xl">
            📘
          </div>

          <div>

            <h1 className="text-5xl font-bold">
              Ansible
            </h1>

            <p className="mt-2 text-xl text-slate-400">
              IT Automation Platform
            </p>

          </div>

        </div>

      </section>

      {/* Quote */}

      <section className="mx-auto mt-10 max-w-6xl rounded-3xl border border-slate-800 bg-slate-900 p-8">

        <h2 className="text-3xl font-semibold">
          "Automate Everything. Manage Anywhere."
        </h2>

      </section>

      {/* Overview */}

      <section className="mx-auto mt-10 max-w-6xl rounded-3xl border border-slate-800 bg-slate-900 p-8">

        <h2 className="text-3xl font-bold">
          📖 What is Ansible?
        </h2>

        <p className="mt-6 text-lg leading-9 text-slate-300">

          Ansible is an open-source automation tool used for
          configuration management, application deployment,
          infrastructure provisioning and orchestration.

          <br /><br />

          It uses simple YAML playbooks and communicates over SSH,
          making automation agentless, lightweight and easy to manage.

        </p>

      </section>

      {/* Benefits */}

      <section className="mx-auto mt-10 max-w-6xl">

        <h2 className="mb-8 text-3xl font-bold">
          ✨ Why Use Ansible?
        </h2>

        <div className="grid gap-6 md:grid-cols-3">

          {[
            "📘 Agentless Automation",
            "⚡ Simple YAML Playbooks",
            "🚀 Fast Deployment",
            "🔐 Secure SSH Communication",
            "☁ Cloud Automation",
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
          🏗 Ansible Workflow
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-6 text-center">

          {[
            "Developer",
            "Inventory",
            "Playbook",
            "SSH",
            "Managed Nodes",
            "Configured Servers",
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
          ⚡ Common Ansible Commands
        </h2>

        <div className="space-y-4 font-mono">

          <div className="rounded-xl bg-slate-800 p-4">
            ansible --version
          </div>

          <div className="rounded-xl bg-slate-800 p-4">
            ansible all -m ping
          </div>

          <div className="rounded-xl bg-slate-800 p-4">
            ansible-playbook playbook.yml
          </div>

          <div className="rounded-xl bg-slate-800 p-4">
            ansible-inventory --list
          </div>

          <div className="rounded-xl bg-slate-800 p-4">
            ansible-galaxy install
          </div>

          <div className="rounded-xl bg-slate-800 p-4">
            ansible-vault encrypt secrets.yml
          </div>

        </div>

      </section>

      {/* Best Practices */}

      <section className="mx-auto mt-14 max-w-6xl rounded-3xl border border-slate-800 bg-slate-900 p-8">

        <h2 className="text-3xl font-bold">
          💡 Best Practices
        </h2>

        <ul className="mt-6 space-y-4 text-lg text-slate-300">

          <li>✅ Keep Playbooks Modular</li>

          <li>✅ Use Roles for Reusability</li>

          <li>✅ Encrypt Sensitive Data with Ansible Vault</li>

          <li>✅ Maintain Clean Inventory Files</li>

          <li>✅ Use Variables Instead of Hardcoding</li>

          <li>✅ Test Playbooks Before Production</li>

        </ul>

      </section>

      {/* Official Resources */}

      <section className="mx-auto mt-14 mb-20 max-w-6xl rounded-3xl border border-slate-800 bg-slate-900 p-8">

        <h2 className="text-3xl font-bold mb-8">
          📚 Official Resources
        </h2>

        <div className="space-y-5">

          <a
            href="https://www.ansible.com/"
            target="_blank"
            rel="noreferrer"
            className="block text-blue-400 hover:text-blue-300"
          >
            🌐 Ansible Official Website
          </a>

          <a
            href="https://docs.ansible.com/"
            target="_blank"
            rel="noreferrer"
            className="block text-blue-400 hover:text-blue-300"
          >
            📖 Ansible Documentation
          </a>

          <a
            href="https://github.com/ansible/ansible"
            target="_blank"
            rel="noreferrer"
            className="block text-blue-400 hover:text-blue-300"
          >
            💻 Ansible GitHub Repository
          </a>

          <a
            href="https://galaxy.ansible.com/"
            target="_blank"
            rel="noreferrer"
            className="block text-blue-400 hover:text-blue-300"
          >
            🌌 Ansible Galaxy
          </a>

        </div>

      </section>

    </main>
  );
}

export default AnsibleInfo;