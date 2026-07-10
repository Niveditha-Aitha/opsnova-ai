import { useState } from "react";
import type { JenkinsRequest } from "../../api/jenkinsApi";

type Props = {
  onGenerate: (config: JenkinsRequest) => void;
  loading: boolean;
};

function JenkinsForm({ onGenerate, loading }: Props) {
  const [pipelineType, setPipelineType] = useState("Declarative");
  const [projectType, setProjectType] = useState("React");
  const [projectName, setProjectName] = useState("");
  const [repositoryUrl, setRepositoryUrl] = useState("");
  const [branch, setBranch] = useState("main");

  const handleSubmit = () => {
    onGenerate({
      pipeline_type: pipelineType,
      project_type: projectType,
      project_name: projectName,
      repository_url: repositoryUrl,
      branch: branch,
      docker_image: "",
      kubernetes_namespace: "default",
      build_command: "",
      test_command: "",
      deploy_command: "",
      include_docker: false,
      include_kubernetes: false,
      include_notifications: false,
    });
  };

  return (
    <div className="w-1/2 bg-slate-900 rounded-2xl p-6 border border-slate-800">

      <h2 className="text-2xl font-bold mb-6">
        🔧 Jenkins Expert
      </h2>

      <div className="space-y-5">

        <select
          className="w-full bg-slate-800 p-3 rounded-xl"
          value={pipelineType}
          onChange={(e) => setPipelineType(e.target.value)}
        >
          <option>Declarative</option>
          <option>Scripted</option>
          <option>Multibranch</option>
        </select>

        <select
          className="w-full bg-slate-800 p-3 rounded-xl"
          value={projectType}
          onChange={(e) => setProjectType(e.target.value)}
        >
          <option>React</option>
          <option>Node.js</option>
          <option>Python</option>
          <option>Java</option>
          <option>Maven</option>
          <option>Gradle</option>
          <option>.NET</option>
          <option>Go</option>
        </select>

        <input
          className="w-full bg-slate-800 p-3 rounded-xl"
          placeholder="Project Name"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />

        <input
          className="w-full bg-slate-800 p-3 rounded-xl"
          placeholder="Repository URL"
          value={repositoryUrl}
          onChange={(e) => setRepositoryUrl(e.target.value)}
        />

        <input
          className="w-full bg-slate-800 p-3 rounded-xl"
          placeholder="Branch"
          value={branch}
          onChange={(e) => setBranch(e.target.value)}
        />

        <button
          type="button"
          onClick={handleSubmit}
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg disabled:opacity-50"
        >
          {loading
            ? "⏳ Generating..."
            : "🚀 Generate Jenkinsfile"}
        </button>

      </div>

    </div>
  );
}

export default JenkinsForm;