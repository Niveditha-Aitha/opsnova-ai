import { useState } from "react";
import Editor from "@monaco-editor/react";
import toast from "react-hot-toast";
import JSZip from "jszip";
import { saveVaultItem } from "../../services/vaultService";

type KubernetesOutputProps = {
  output: {
    deployment: string;
    service: string;
    configmap: string;
    secret: string;
    ingress: string;
    hpa: string;
  } | null;
};

const tabs = [
  "deployment",
  "service",
  "configmap",
  "secret",
  "ingress",
  "hpa",
] as const;

const tabTitles = {
  deployment: "📦 Deployment",
  service: "🌐 Service",
  configmap: "⚙️ ConfigMap",
  secret: "🔒 Secret",
  ingress: "🚪 Ingress",
  hpa: "📈 HPA",
};

function KubernetesOutput({ output }: KubernetesOutputProps) {
  const [activeTab, setActiveTab] =
    useState<(typeof tabs)[number]>("deployment");

  if (!output) {
    return (
      <div className="bg-slate-900 border border-slate-800 rounded-xl h-[760px] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            ☸ Kubernetes Expert
          </h2>

          <p className="text-slate-400">
            Fill in the form and click
          </p>

          <p className="text-blue-400 font-semibold mt-2">
            Generate Kubernetes
          </p>

          <p className="text-slate-500 mt-4">
            Deployment, Service, ConfigMap,
          </p>

          <p className="text-slate-500">
            Secret, Ingress and HPA
          </p>

          <p className="text-slate-500">
            will appear here.
          </p>
        </div>
      </div>
    );
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(output[activeTab]);
      toast.success(`${activeTab}.yaml copied successfully!`);
    } catch {
      toast.error("Failed to copy YAML");
    }
  };

  const handleDownload = () => {
    const blob = new Blob([output[activeTab]], {
      type: "text/yaml",
    });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;
    a.download = `${activeTab}.yaml`;

    document.body.appendChild(a);

    a.click();

    document.body.removeChild(a);

    URL.revokeObjectURL(url);

    toast.success(`${activeTab}.yaml downloaded`);
  };

  const handleDownloadAll = async () => {
    const zip = new JSZip();

    zip.file("deployment.yaml", output.deployment);
    zip.file("service.yaml", output.service);
    zip.file("configmap.yaml", output.configmap);
    zip.file("secret.yaml", output.secret);
    zip.file("ingress.yaml", output.ingress);
    zip.file("hpa.yaml", output.hpa);

    const content = await zip.generateAsync({
      type: "blob",
    });

    const url = URL.createObjectURL(content);

    const a = document.createElement("a");

    a.href = url;
    a.download = "kubernetes-manifests.zip";

    document.body.appendChild(a);

    a.click();

    document.body.removeChild(a);

    URL.revokeObjectURL(url);

    toast.success("Downloaded all Kubernetes manifests!");
  };

  const handleSave = () => {
  saveVaultItem({
    id: crypto.randomUUID(),
    title: `${activeTab}.yaml`,
    expert: "Kubernetes",
    fileName: `${activeTab}.yaml`,
    content: output[activeTab],
    createdAt: new Date().toLocaleString(),
  });

  toast.success(`${activeTab}.yaml saved to OpsNova Vault!`);
};

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-lg">

      {/* Tabs */}

      <div className="flex overflow-x-auto border-b border-slate-700 bg-slate-950">

        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-3 whitespace-nowrap transition font-medium ${
              activeTab === tab
                ? "bg-blue-600 text-white"
                : "hover:bg-slate-800 text-slate-300"
            }`}
          >
            {tabTitles[tab]}
          </button>
        ))}

      </div>

      {/* Toolbar */}

      <div className="flex justify-between items-center px-5 py-3 border-b border-slate-700">

        <h2 className="text-lg font-semibold">
          {tabTitles[activeTab]}
        </h2>

        <div className="flex gap-3">

          <button
            onClick={handleCopy}
            className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg transition"
          >
            📋 Copy
          </button>

          <button
            onClick={handleDownload}
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition"
          >
            ⬇ Download
          </button>

          <button
  onClick={handleSave}
  className="bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-lg transition"
>
  💾 Save
</button>

          <button
            onClick={handleDownloadAll}
            className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition"
          >
            📦 Download All
          </button>

        </div>

      </div>

      {/* Monaco */}

      <Editor
        height="650px"
        language="yaml"
        theme="vs-dark"
        value={output[activeTab]}
        options={{
          readOnly: true,
          minimap: {
            enabled: false,
          },
          fontSize: 14,
          wordWrap: "on",
          automaticLayout: true,
          scrollBeyondLastLine: false,
          fontLigatures: true,
          padding: {
            top: 12,
          },
        }}
      />

    </div>
  );
}

export default KubernetesOutput;