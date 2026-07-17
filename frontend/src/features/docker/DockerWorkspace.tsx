import { useState } from "react";
import DockerForm from "./DockerForm";
import DockerOutput from "./DockerOutput";
import {
  generateDockerfile,
   generateCompose,
   generateDockerIgnore,
  type DockerRequest,
} from "../../api/dockerApi";

type DockerWorkspaceProps = {
  onRequireLogin: () => void;
  onBack: () => void;
};

function DockerWorkspace({
  onRequireLogin,
   onBack,
}: DockerWorkspaceProps) {

  const [dockerfile, setDockerfile] = useState("");
  const [compose, setCompose] = useState("");
  const [dockerignore, setDockerIgnore] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async (config: DockerRequest) => {
  const currentUser = localStorage.getItem("opsnova_current_user");

  if (!currentUser) {
    onRequireLogin();
    return;
  }

  try {
    setLoading(true);

    const dockerfile = await generateDockerfile(config);
    setDockerfile(dockerfile);

    const compose = await generateCompose(config);

    const dockerignore = await generateDockerIgnore(config);

    setCompose(compose);
    setDockerIgnore(dockerignore);
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
    ← Back to Docker Expert
  </button>
</div>

      <DockerForm
        onGenerate={handleGenerate}
         loading={loading}
           />
      <DockerOutput dockerfile={dockerfile} 
      compose={compose}
      dockerignore={dockerignore} />
    </div>
  );
}

export default DockerWorkspace;