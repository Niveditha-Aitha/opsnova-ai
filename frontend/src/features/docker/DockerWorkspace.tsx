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
};

function DockerWorkspace({
  onRequireLogin,
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