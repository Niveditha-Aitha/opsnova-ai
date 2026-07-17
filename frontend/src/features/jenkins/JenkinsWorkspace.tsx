import { useState } from "react";

import JenkinsForm from "./JenkinsForm";
import JenkinsOutput from "./JenkinsOutput";

import {
  generateJenkinsfile,
  type JenkinsRequest,
} from "../../api/jenkinsApi";

type WorkspaceProps = {
  onRequireLogin: () => void;
  onBack: () => void;
};

function JenkinsWorkspace({
  onRequireLogin,
  onBack,
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

      <div className="mb-6">
  <button
    onClick={onBack}
    className="flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 text-white transition hover:bg-slate-700"
  >
    ← Back to Jenkins Expert
  </button>
</div>
      <JenkinsForm
        onGenerate={handleGenerate}
        loading={loading}
      />

      <JenkinsOutput jenkinsfile={jenkinsfile} />
    </div>
  );
}

export default JenkinsWorkspace;