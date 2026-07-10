import { useState } from "react";

import CicdForm from "./CicdForm";
import CicdOutput from "./CicdOutput";

import {
  generateCICD,
  type CICDRequest,
} from "../../api/cicdApi";

type WorkspaceProps = {
  onRequireLogin: () => void;
};
function CicdWorkspace({
  onRequireLogin,
}: WorkspaceProps) {
  const [jenkinsfile, setJenkinsfile] = useState("");
  const [githubActions, setGithubActions] = useState("");
  const [readme, setReadme] = useState("");
  const [pipelineDiagram, setPipelineDiagram] = useState("");

  const [loading, setLoading] = useState(false);

  const handleGenerate = async (
    config: CICDRequest
  ) => {
    const currentUser = localStorage.getItem("opsnova_current_user");

if (!currentUser) {
  onRequireLogin();
  return;
}
    try {
      setLoading(true);

      const result = await generateCICD(config);

      setJenkinsfile(result.jenkinsfile);
      setGithubActions(result.github_actions);
      setReadme(result.readme);
      setPipelineDiagram(result.pipeline_diagram);

    } catch (error) {
      console.error("CI/CD Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-1 gap-6 p-6">

      <CicdForm
        onGenerate={handleGenerate}
        loading={loading}
      />

      <CicdOutput
        jenkinsfile={jenkinsfile}
        githubActions={githubActions}
        readme={readme}
        pipelineDiagram={pipelineDiagram}
      />

    </div>
  );
}

export default CicdWorkspace;