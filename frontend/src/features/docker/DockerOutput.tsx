import { useState } from "react";
import CodeEditor from "../../components/CodeEditor";
import ButtonGroup from "./ButtonGroup";
import { saveVaultItem } from "../../services/vaultService";

type Props = {
  dockerfile: string;
  compose: string;
  dockerignore: string;
};

function DockerOutput({
  dockerfile,
  compose,
  dockerignore,
}: Props) {
  const [activeTab, setActiveTab] = useState<
    "dockerfile" | "compose" | "dockerignore"
  >("dockerfile");

  let code = dockerfile;
  let fileName = "Dockerfile";

  if (activeTab === "compose") {
    code = compose;
    fileName = "docker-compose.yml";
  }

  if (activeTab === "dockerignore") {
    code = dockerignore;
    fileName = ".dockerignore";
  }

  const handleSave = () => {
    saveVaultItem({
      id: crypto.randomUUID(),
      title: fileName,
      expert: "Docker",
      fileName,
      content: code,
      createdAt: new Date().toLocaleString(),
    });

    alert("✅ Saved to OpsNova Vault");
  };

  return (
    <div className="w-1/2 bg-slate-900 rounded-2xl border border-slate-800 p-6">

      <h2 className="text-2xl font-bold mb-4">
        📦 Generated Files
      </h2>

      {/* Tabs */}

      <div className="flex gap-2 mb-4">

        <button
          onClick={() => setActiveTab("dockerfile")}
          className={`px-4 py-2 rounded-lg ${
            activeTab === "dockerfile"
              ? "bg-blue-600"
              : "bg-slate-700"
          }`}
        >
          📄 Dockerfile
        </button>

        <button
          onClick={() => setActiveTab("compose")}
          className={`px-4 py-2 rounded-lg ${
            activeTab === "compose"
              ? "bg-blue-600"
              : "bg-slate-700"
          }`}
        >
          📦 Docker Compose
        </button>

        <button
          onClick={() => setActiveTab("dockerignore")}
          className={`px-4 py-2 rounded-lg ${
            activeTab === "dockerignore"
              ? "bg-blue-600"
              : "bg-slate-700"
          }`}
        >
          🚫 .dockerignore
        </button>

      </div>

      {/* Buttons */}

      <ButtonGroup
        dockerfile={code}
        onSave={handleSave}
      />

      {/* Monaco Editor */}

      <CodeEditor code={code} />

    </div>
  );
}

export default DockerOutput;