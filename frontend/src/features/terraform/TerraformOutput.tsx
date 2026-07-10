import { useState } from "react";
import toast from "react-hot-toast";

import CodeEditor from "../../components/CodeEditor";
import TerraformButtonGroup from "./TerraformButtonGroup";
import { saveVaultItem } from "../../services/vaultService";

type Props = {
  provider: string;
  main: string;
  variables: string;
  outputs: string;
};

function TerraformOutput({
  provider,
  main,
  variables,
  outputs,
}: Props) {
  const [activeTab, setActiveTab] = useState<
    "provider" | "main" | "variables" | "outputs"
  >("provider");

  let code = "";

  switch (activeTab) {
    case "provider":
      code = provider;
      break;

    case "main":
      code = main;
      break;

    case "variables":
      code = variables;
      break;

    case "outputs":
      code = outputs;
      break;
  }

  const fileName =
    activeTab === "provider"
      ? "provider.tf"
      : activeTab === "main"
      ? "main.tf"
      : activeTab === "variables"
      ? "variables.tf"
      : "outputs.tf";

  const handleSave = () => {
    saveVaultItem({
      id: crypto.randomUUID(),
      title: fileName,
      expert: "Terraform",
      fileName,
      content: code,
      createdAt: new Date().toLocaleString(),
    });

    toast.success(`${fileName} saved to OpsNova Vault!`);
  };

  if (!provider && !main) {
    return (
      <div className="w-1/2 bg-slate-900 rounded-2xl border border-slate-800 p-6 flex flex-col items-center justify-center">
        <div className="text-7xl mb-6">
          ☁
        </div>

        <h2 className="text-2xl font-bold text-white mb-3">
          Terraform Expert
        </h2>

        <p className="text-slate-400 text-center">
          Configure your infrastructure
          <br />
          and click
          <br />
          <span className="text-blue-400 font-semibold">
            Generate Terraform
          </span>
        </p>
      </div>
    );
  }

  return (
    <div className="w-1/2 bg-slate-900 rounded-2xl border border-slate-800 p-6">

      <h2 className="text-2xl font-bold mb-4">
        ☁ Generated Terraform Files
      </h2>

      <div className="flex gap-2 mb-4 flex-wrap">

        <button
          onClick={() => setActiveTab("provider")}
          className={`px-4 py-2 rounded-lg ${
            activeTab === "provider"
              ? "bg-blue-600"
              : "bg-slate-700"
          }`}
        >
          provider.tf
        </button>

        <button
          onClick={() => setActiveTab("main")}
          className={`px-4 py-2 rounded-lg ${
            activeTab === "main"
              ? "bg-blue-600"
              : "bg-slate-700"
          }`}
        >
          main.tf
        </button>

        <button
          onClick={() => setActiveTab("variables")}
          className={`px-4 py-2 rounded-lg ${
            activeTab === "variables"
              ? "bg-blue-600"
              : "bg-slate-700"
          }`}
        >
          variables.tf
        </button>

        <button
          onClick={() => setActiveTab("outputs")}
          className={`px-4 py-2 rounded-lg ${
            activeTab === "outputs"
              ? "bg-blue-600"
              : "bg-slate-700"
          }`}
        >
          outputs.tf
        </button>

      </div>

      <TerraformButtonGroup
        content={code}
        filename={fileName}
        provider={provider}
        main={main}
        variables={variables}
        outputs={outputs}
        onSave={handleSave}
      />

      <CodeEditor code={code} />

    </div>
  );
}

export default TerraformOutput;