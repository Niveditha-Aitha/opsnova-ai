import { useState } from "react";
import toast from "react-hot-toast";

import CodeEditor from "../../components/CodeEditor";
import AnsibleButtonGroup from "./AnsibleButtonGroup";
import { saveVaultItem } from "../../services/vaultService";

type Props = {
  playbook: string;
  inventory: string;
  config: string;
  requirements: string;
};

function AnsibleOutput({
  playbook,
  inventory,
  config,
  requirements,
}: Props) {

  const [activeTab, setActiveTab] = useState<
    "playbook" | "inventory" | "config" | "requirements"
  >("playbook");

  let code = "";

  switch (activeTab) {
    case "playbook":
      code = playbook;
      break;

    case "inventory":
      code = inventory;
      break;

    case "config":
      code = config;
      break;

    case "requirements":
      code = requirements;
      break;
  }

  const fileName =
    activeTab === "playbook"
      ? "playbook.yml"
      : activeTab === "inventory"
      ? "inventory.ini"
      : activeTab === "config"
      ? "ansible.cfg"
      : "requirements.yml";

  const handleSave = () => {
    saveVaultItem({
      id: crypto.randomUUID(),
      title: fileName,
      expert: "Ansible",
      fileName,
      content: code,
      createdAt: new Date().toLocaleString(),
    });

    toast.success(`${fileName} saved to OpsNova Vault!`);
  };

  if (!playbook) {
    return (
      <div className="w-1/2 bg-slate-900 rounded-2xl border border-slate-800 p-6 flex flex-col items-center justify-center">

        <div className="text-7xl mb-6">
          📘
        </div>

        <h2 className="text-2xl font-bold text-white mb-3">
          Ansible Expert
        </h2>

        <p className="text-slate-400 text-center">
          Configure your playbook
          <br />
          and click
          <br />
          <span className="text-blue-400 font-semibold">
            Generate Playbook
          </span>
        </p>

      </div>
    );
  }

  return (
    <div className="w-1/2 bg-slate-900 rounded-2xl border border-slate-800 p-6">

      <h2 className="text-2xl font-bold mb-4">
        📘 Generated Files
      </h2>

      <div className="flex gap-2 mb-4 flex-wrap">

        <button
          onClick={() => setActiveTab("playbook")}
          className={`px-4 py-2 rounded-lg ${
            activeTab === "playbook"
              ? "bg-blue-600"
              : "bg-slate-700"
          }`}
        >
          playbook.yml
        </button>

        <button
          onClick={() => setActiveTab("inventory")}
          className={`px-4 py-2 rounded-lg ${
            activeTab === "inventory"
              ? "bg-blue-600"
              : "bg-slate-700"
          }`}
        >
          inventory.ini
        </button>

        <button
          onClick={() => setActiveTab("config")}
          className={`px-4 py-2 rounded-lg ${
            activeTab === "config"
              ? "bg-blue-600"
              : "bg-slate-700"
          }`}
        >
          ansible.cfg
        </button>

        <button
          onClick={() => setActiveTab("requirements")}
          className={`px-4 py-2 rounded-lg ${
            activeTab === "requirements"
              ? "bg-blue-600"
              : "bg-slate-700"
          }`}
        >
          requirements.yml
        </button>

      </div>

      <AnsibleButtonGroup
        content={code}
        filename={fileName}
        playbook={playbook}
        inventory={inventory}
        config={config}
        requirements={requirements}
        onSave={handleSave}
      />

      <CodeEditor code={code} />

    </div>
  );
}

export default AnsibleOutput;