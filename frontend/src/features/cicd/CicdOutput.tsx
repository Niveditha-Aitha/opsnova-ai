import { useState } from "react";
import toast from "react-hot-toast";

import CodeEditor from "../../components/CodeEditor";
import CicdButtonGroup from "./CicdButtonGroup";
import { saveVaultItem } from "../../services/vaultService";

type Props = {
  jenkinsfile: string;
  githubActions: string;
  readme: string;
  pipelineDiagram: string;
};

function CicdOutput({
  jenkinsfile,
  githubActions,
  readme,
  pipelineDiagram,
}: Props) {
  const [activeTab, setActiveTab] = useState<
    "jenkins" | "github" | "readme" | "diagram"
  >("jenkins");

  let code = "";

  switch (activeTab) {
    case "jenkins":
      code = jenkinsfile;
      break;

    case "github":
      code = githubActions;
      break;

    case "readme":
      code = readme;
      break;

    case "diagram":
      code = pipelineDiagram;
      break;
  }

  const fileName =
    activeTab === "jenkins"
      ? "Jenkinsfile"
      : activeTab === "github"
      ? "ci.yml"
      : activeTab === "readme"
      ? "README.md"
      : "pipeline-diagram.md";

  const handleSave = () => {
    saveVaultItem({
      id: crypto.randomUUID(),
      title: fileName,
      expert: "CI/CD",
      fileName,
      content: code,
      createdAt: new Date().toLocaleString(),
    });

    toast.success(`${fileName} saved to OpsNova Vault!`);
  };

  if (!jenkinsfile) {
    return (
      <div className="w-1/2 bg-slate-900 rounded-2xl border border-slate-800 p-6 flex flex-col items-center justify-center">

        <div className="text-7xl mb-6">
          🚀
        </div>

        <h2 className="text-2xl font-bold text-white mb-3">
          CI/CD Expert
        </h2>

        <p className="text-slate-400 text-center">
          Configure your pipeline
          <br />
          and click
          <br />
          <span className="text-blue-400 font-semibold">
            Generate Pipeline
          </span>
        </p>

      </div>
    );
  }

  return (
    <div className="w-1/2 bg-slate-900 rounded-2xl border border-slate-800 p-6">

      <h2 className="text-2xl font-bold mb-4">
        🚀 Generated Pipeline
      </h2>

      <div className="flex gap-2 mb-4 flex-wrap">

        <button
          onClick={() => setActiveTab("jenkins")}
          className={`px-4 py-2 rounded-lg ${
            activeTab === "jenkins"
              ? "bg-blue-600"
              : "bg-slate-700"
          }`}
        >
          Jenkinsfile
        </button>

        <button
          onClick={() => setActiveTab("github")}
          className={`px-4 py-2 rounded-lg ${
            activeTab === "github"
              ? "bg-blue-600"
              : "bg-slate-700"
          }`}
        >
          GitHub Actions
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
          onClick={() => setActiveTab("diagram")}
          className={`px-4 py-2 rounded-lg ${
            activeTab === "diagram"
              ? "bg-blue-600"
              : "bg-slate-700"
          }`}
        >
          Pipeline Diagram
        </button>

      </div>

      <CicdButtonGroup
        content={code}
        filename={fileName}
        jenkinsfile={jenkinsfile}
        githubActions={githubActions}
        readme={readme}
        pipelineDiagram={pipelineDiagram}
        onSave={handleSave}
      />

      <CodeEditor code={code} />

    </div>
  );
}

export default CicdOutput;