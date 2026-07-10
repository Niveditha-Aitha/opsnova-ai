import { useState } from "react";

import JenkinsForm from "./JenkinsForm";
import JenkinsOutput from "./JenkinsOutput";

import {
  generateJenkinsfile,
  type JenkinsRequest,
} from "../../api/jenkinsApi";

type WorkspaceProps = {
  onRequireLogin: () => void;
};

function JenkinsWorkspace({
  onRequireLogin,
}: WorkspaceProps) {
  const [jenkinsfile, setJenkinsfile] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async (config: JenkinsRequest) => {
    const currentUser = localStorage.getItem("opsnova_current_user");

if (!currentUser) {
  onRequireLogin();
  return;
}
    try {
      setLoading(true);

      const result = await generateJenkinsfile(config);

      console.log("Jenkins Success:", result);

      setJenkinsfile(result);
    } catch (error) {
      console.error("ERROR:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-1 gap-6 p-6">
      <JenkinsForm
        onGenerate={handleGenerate}
        loading={loading}
      />

      <JenkinsOutput jenkinsfile={jenkinsfile} />
    </div>
  );
}

export default JenkinsWorkspace;