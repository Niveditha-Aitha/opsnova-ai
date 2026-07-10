import { useState } from "react";
import toast from "react-hot-toast";

import CodeEditor from "../../components/CodeEditor";
import LinuxButtonGroup from "./LinuxButtonGroup";
import { saveVaultItem } from "../../services/vaultService";

type Props = {
  commands: string;
  automation: string;
  readme: string;
  cheatsheet: string;
};

function LinuxOutput({
  commands,
  automation,
  readme,
  cheatsheet,
}: Props) {

  const [activeTab, setActiveTab] = useState<
    "commands" | "automation" | "readme" | "cheatsheet"
  >("commands");

  let code = "";

  switch (activeTab) {
    case "commands":
      code = commands;
      break;

    case "automation":
      code = automation;
      break;

    case "readme":
      code = readme;
      break;

    case "cheatsheet":
      code = cheatsheet;
      break;
  }

  const fileName =
    activeTab === "commands"
      ? "commands.sh"
      : activeTab === "automation"
      ? "automation.sh"
      : activeTab === "readme"
      ? "README.md"
      : "cheatsheet.md";

  const handleSave = () => {
    saveVaultItem({
      id: crypto.randomUUID(),
      title: fileName,
      expert: "Linux",
      fileName,
      content: code,
      createdAt: new Date().toLocaleString(),
    });

    toast.success(`${fileName} saved to OpsNova Vault!`);
  };

  if (!commands) {
    return (
      <div className="w-1/2 bg-slate-900 rounded-2xl border border-slate-800 p-6 flex flex-col items-center justify-center">

        <div className="text-7xl mb-6">
          🐧
        </div>

        <h2 className="text-2xl font-bold text-white mb-3">
          Linux Expert
        </h2>

        <p className="text-slate-400 text-center">
          Configure Linux options
          <br />
          and click
          <br />
          <span className="text-blue-400 font-semibold">
            Generate Linux Commands
          </span>
        </p>

      </div>
    );
  }

  return (
    <div className="w-1/2 bg-slate-900 rounded-2xl border border-slate-800 p-6">

      <h2 className="text-2xl font-bold mb-4">
        🐧 Generated Files
      </h2>

      <div className="flex gap-2 mb-4 flex-wrap">

        <button
          onClick={() => setActiveTab("commands")}
          className={`px-4 py-2 rounded-lg ${
            activeTab === "commands"
              ? "bg-blue-600"
              : "bg-slate-700"
          }`}
        >
          commands.sh
        </button>

        <button
          onClick={() => setActiveTab("automation")}
          className={`px-4 py-2 rounded-lg ${
            activeTab === "automation"
              ? "bg-blue-600"
              : "bg-slate-700"
          }`}
        >
          automation.sh
        </button>

        <button
          onClick={() => setActiveTab("readme")}
          className={`px-4 py-2 rounded-lg ${
            activeTab === "readme"
              ? "bg-blue-600"
              : "bg-slate-700"
          }`}
        >
          README.md
        </button>

        <button
          onClick={() => setActiveTab("cheatsheet")}
          className={`px-4 py-2 rounded-lg ${
            activeTab === "cheatsheet"
              ? "bg-blue-600"
              : "bg-slate-700"
          }`}
        >
          cheatsheet.md
        </button>

      </div>

      <LinuxButtonGroup
        content={code}
        filename={fileName}
        commands={commands}
        automation={automation}
        readme={readme}
        cheatsheet={cheatsheet}
        onSave={handleSave}
      />

      <CodeEditor code={code} />

    </div>
  );
}

export default LinuxOutput;