import { useState } from "react";

import GitHubActionsForm from "./GitHubActionsForm";
import GitHubActionsOutput from "./GitHubActionsOutput";

import {
  generateWorkflow,
  type GitHubActionsRequest,
} from "../../api/githubActionsApi";

type WorkspaceProps = {
  onRequireLogin: () => void;
};
function GitHubActionsWorkspace({
  onRequireLogin,
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