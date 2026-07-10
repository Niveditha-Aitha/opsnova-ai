import { useState } from "react";

import type {
  CICDRequest,
} from "../../api/cicdApi";

type Props = {
  onGenerate: (
    config: CICDRequest
  ) => void;

  loading: boolean;
};

function CicdForm({
  onGenerate,
  loading,
}: Props) {

  const [pipelineName, setPipelineName] =
    useState("Full DevOps Pipeline");

  const [pipelineType, setPipelineType] =
    useState("Full Pipeline");

  const [language, setLanguage] =
    useState("Python");

  const [framework, setFramework] =
    useState("FastAPI");

  const [ciTool, setCiTool] =
    useState("GitHub Actions");

  const [cloudProvider] = useState("AWS");

  const [registry] = useState("Docker Hub");

  const [deploymentTarget] = useState("Kubernetes");

  const handleSubmit = () => {
    onGenerate({
      pipeline_name: pipelineName,
      pipeline_type: pipelineType,
      language,
      framework,
      ci_tool: ciTool,
      cloud_provider: cloudProvider,
      registry,
      deployment_target: deploymentTarget,
      repository_name: "opsnova-ai",
      docker_image: "opsnova-ai:latest",
      kubernetes_namespace: "default",
      enable_tests: true,
      enable_security_scan: true,
      enable_notifications: false,
    });
  };

  return (
    <div className="w-1/2 bg-slate-900 rounded-2xl border border-slate-800 p-6">

      <h2 className="text-2xl font-bold mb-6">
        🚀 CI/CD Expert
      </h2>

      <div className="space-y-5">

        <input
          className="w-full bg-slate-800 p-3 rounded-xl"
          placeholder="Pipeline Name"
          value={pipelineName}
          onChange={(e) => setPipelineName(e.target.value)}
        />

        <select
          className="w-full bg-slate-800 p-3 rounded-xl"
          value={pipelineType}
          onChange={(e) => setPipelineType(e.target.value)}
        >
          <option>Full Pipeline</option>
          <option>CI Only</option>
          <option>CD Only</option>
        </select>

        <select
          className="w-full bg-slate-800 p-3 rounded-xl"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option>Python</option>
          <option>Node.js</option>
          <option>Java</option>
          <option>.NET</option>
          <option>Go</option>
        </select>

        <input
          className="w-full bg-slate-800 p-3 rounded-xl"
          placeholder="Framework"
          value={framework}
          onChange={(e) => setFramework(e.target.value)}
        />

        <select
          className="w-full bg-slate-800 p-3 rounded-xl"
          value={ciTool}
          onChange={(e) => setCiTool(e.target.value)}
        >
          <option>GitHub Actions</option>
          <option>Jenkins</option>
        </select>

        <button
          type="button"
          onClick={handleSubmit}
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg disabled:opacity-50"
        >
          {loading
            ? "⏳ Generating..."
            : "🚀 Generate Pipeline"}
        </button>

      </div>

    </div>
  );
}

export default CicdForm;