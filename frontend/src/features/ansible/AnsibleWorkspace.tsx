import { useState } from "react";

import AnsibleForm from "./AnsibleForm";
import AnsibleOutput from "./AnsibleOutput";

import {
  generateAnsible,
  type AnsibleRequest,
} from "../../api/ansibleApi";

type WorkspaceProps = {
  onRequireLogin: () => void;
};
function AnsibleWorkspace({
  onRequireLogin,
}: WorkspaceProps) {
  const [playbook, setPlaybook] = useState("");
  const [inventory, setInventory] = useState("");
  const [config, setConfig] = useState("");
  const [requirements, setRequirements] = useState("");

  const [loading, setLoading] = useState(false);

  const handleGenerate = async (
    configData: AnsibleRequest
  ) => {
    const currentUser = localStorage.getItem("opsnova_current_user");

if (!currentUser) {
  onRequireLogin();
  return;
}
    try {
      setLoading(true);

      const result = await generateAnsible(configData);

      setPlaybook(result.playbook);
      setInventory(result.inventory);
      setConfig(result.config);
      setRequirements(result.requirements);

    } catch (error) {
      console.error("Ansible Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-1 gap-6 p-6">

      <AnsibleForm
        onGenerate={handleGenerate}
        loading={loading}
      />

      <AnsibleOutput
        playbook={playbook}
        inventory={inventory}
        config={config}
        requirements={requirements}
      />

    </div>
  );
}

export default AnsibleWorkspace;