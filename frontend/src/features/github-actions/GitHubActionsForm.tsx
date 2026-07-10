import { useState } from "react";

import type {
  GitHubActionsRequest,
} from "../../api/githubActionsApi";

type Props = {
  onGenerate: (
    config: GitHubActionsRequest
  ) => void;

  loading: boolean;
};

function GitHubActionsForm({
  onGenerate,
  loading,
}: Props) {

  const [workflowName, setWorkflowName] =
    useState("CI Pipeline");

  const [projectType, setProjectType] =
    useState("React");

  const [branch, setBranch] =
    useState("main");

  const [runner, setRunner] =
    useState("ubuntu-latest");

  const handleSubmit = () => {
    onGenerate({
      workflow_name: workflowName,
      project_type: projectType,
      branch: branch,
      os_runner: runner,

      node_version: "20",
      python_version: "3.12",
      java_version: "21",
      dotnet_version: "8.0",
      go_version: "1.22",

      include_tests: true,
      include_lint: false,
      include_docker: false,
      include_kubernetes: false,
      include_terraform: false,
    });
  };

  return (
    <div className="w-1/2 bg-slate-900 rounded-2xl border border-slate-800 p-6">

      <h2 className="text-2xl font-bold mb-6">
        ⚙️ GitHub Actions Expert
      </h2>

      <div className="space-y-5">

        <input
          className="w-full bg-slate-800 p-3 rounded-xl"
          placeholder="Workflow Name"
          value={workflowName}
          onChange={(e) =>
            setWorkflowName(e.target.value)
          }
        />

        <select
          className="w-full bg-slate-800 p-3 rounded-xl"
          value={projectType}
          onChange={(e) =>
            setProjectType(e.target.value)
          }
        >
          <option>React</option>
          <option>Node.js</option>
          <option>Python</option>
          <option>Java</option>
          <option>.NET</option>
          <option>Go</option>
        </select>

        <input
          className="w-full bg-slate-800 p-3 rounded-xl"
          placeholder="Branch"
          value={branch}
          onChange={(e) =>
            setBranch(e.target.value)
          }
        />

        <select
          className="w-full bg-slate-800 p-3 rounded-xl"
          value={runner}
          onChange={(e) =>
            setRunner(e.target.value)
          }
        >
          <option>ubuntu-latest</option>
          <option>windows-latest</option>
          <option>macos-latest</option>
        </select>

        <button
          type="button"
          onClick={handleSubmit}
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg disabled:opacity-50"
        >
          {loading
            ? "⏳ Generating..."
            : "🚀 Generate Workflow"}
        </button>

      </div>

    </div>
  );
}

export default GitHubActionsForm;