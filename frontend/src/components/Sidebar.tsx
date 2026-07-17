

import { useEffect } from "react";

type SidebarProps = {
  selectedExpert: string;
  setSelectedExpert: React.Dispatch<React.SetStateAction<string>>;
  onBack: () => void;
};

const menu = [
  {
    category: "📦 Containers",
    items: [
      { id: "docker", label: "🐳 Docker" },
      { id: "kubernetes", label: "☸ Kubernetes" },
    ],
  },
  {
    category: "🔄 CI/CD",
    items: [
      { id: "jenkins", label: "🔧 Jenkins" },
      { id: "github-actions", label: "⚙ GitHub Actions" },
      { id: "cicd", label: "🚀 CI/CD" },
    ],
  },
  {
    category: "☁ Cloud",
    items: [
      { id: "terraform", label: "☁ Terraform" },
      { id: "aws", label: "🌩 AWS" },
    ],
  },
  {
    category: "🤖 Automation",
    items: [
      { id: "ansible", label: "📘 Ansible" },
      { id: "linux", label: "🐧 Linux" },
    ],
  },
  {
    category: "🛠 Tools",
    items: [
      { id: "troubleshooter", label: "🔍 Troubleshooter" },
    ],
  },
];

function Sidebar({
  selectedExpert,
  setSelectedExpert,
   onBack,
}: SidebarProps) {

  useEffect(() => {
  const element = document.getElementById(`expert-${selectedExpert}`);

  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }
}, [selectedExpert]);

  return (
    <aside className="w-80 bg-slate-950 border-r border-slate-800 flex flex-col">

      {/* Header */}

      {/* <div className="p-6 border-b border-slate-800">

        <div className="flex items-center gap-3">

          <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-xl">
            🚀
          </div>

          <div>
            <h2 className="text-xl font-bold">
              OpsNova AI
            </h2>

            <p className="text-xs text-slate-400">
              DevOps Platform
            </p>
          </div>

        </div>

      </div> */}

      <div className="p-5 border-b border-slate-800">
  <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
    AI Experts
  </p>
</div>

      {/* Back button*/}

      <button
  onClick={onBack}
  className="mb-4 flex w-full items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-800 px-3 py-3 text-base font-medium text-white transition hover:bg-slate-700"
>
  🏠 HOME
</button>

      {/* Menu */}

      <div className="flex-1 overflow-y-auto px-4 pb-4">

        {menu.map((section) => (
          <div
            key={section.category}
            className="mb-6"
          >
            <h3 className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
              {section.category}
            </h3>

            <div className="space-y-2">

              {section.items.map((item) => (
                <button

                  id={`expert-${item.id}`}
                  key={item.id}
                  onClick={() => setSelectedExpert(item.id)}
                  className={`group flex w-full items-center rounded-xl px-4 py-3 text-left transition-all duration-200 ${
                    selectedExpert === item.id
                      ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg"
                      : "text-slate-300 hover:bg-slate-900 hover:text-white"
                  }`}
                >
                  <span className="font-medium">
                    {item.label}
                  </span>

                  <span className="ml-auto opacity-0 transition group-hover:opacity-100">
                    →
                  </span>
                </button>
              ))}

            </div>

          </div>
        ))}

      </div>

      {/* Footer */}

      <div className="border-t border-slate-800 p-5">

        <div className="rounded-xl bg-slate-900 p-4">

          <p className="text-sm font-semibold">
            OpsNova AI
          </p>

          <p className="mt-1 text-xs text-slate-400">
            Version 1.0.0
          </p>

          <div className="mt-3 flex items-center gap-2">

            <span className="h-2 w-2 rounded-full bg-green-500"></span>

            <span className="text-xs text-slate-400">
              All Experts Online
            </span>

          </div>

        </div>

      </div>

    </aside>
  );
}

export default Sidebar;