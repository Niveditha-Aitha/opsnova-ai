import { useState } from "react";

import GitHubActionsForm from "./GitHubActionsForm";
import GitHubActionsOutput from "./GitHubActionsOutput";

import {
  generateWorkflow,
  type GitHubActionsRequest,
} from "../../api/githubActionsApi";

type WorkspaceProps = {
  onRequireLogin: () => void;
  onBack: () => void;
};
function GitHubActionsWorkspace({
  onRequireLogin,
  onBack,
}: WorkspaceProps) {
  const [workflow, setWorkflow] = useState("");

  const [loading, setLoading] = useState(false);

  const handleGenerate = async (
    config: GitHubActionsRequest
  ) => {
    const currentUser = localStorage.getItem("opsnova_current_user");

if (!currentUser) {
  onRequireLogin();
  return;
}
    try {
      setLoading(true);

      const result = await generateWorkflow(config);

      setWorkflow(result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-1 gap-6 p-6">

      <div className="mb-6">
  <button
    onClick={onBack}
    className="flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 text-white transition hover:bg-slate-700"
  >
    ← Back to Github-actions Expert
  </button>
</div>

      <GitHubActionsForm
        onGenerate={handleGenerate}
        loading={loading}
      />

      <GitHubActionsOutput
        workflow={workflow}
      />
    </div>
  );
}

export default GitHubActionsWorkspace;