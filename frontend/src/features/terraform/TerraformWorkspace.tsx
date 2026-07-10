import { useState } from "react";

import TerraformForm from "./TerraformForm";
import TerraformOutput from "./TerraformOutput";

import {
  generateTerraform,
  type TerraformRequest,
} from "../../api/terraformApi";

type WorkspaceProps = {
  onRequireLogin: () => void;
};
function TerraformWorkspace({
  onRequireLogin,
}: WorkspaceProps) {
  const [provider, setProvider] = useState("");
  const [main, setMain] = useState("");
  const [variables, setVariables] = useState("");
  const [outputs, setOutputs] = useState("");

  const [loading, setLoading] = useState(false);

  const handleGenerate = async (config: TerraformRequest) => {
    const currentUser = localStorage.getItem("opsnova_current_user");

if (!currentUser) {
  onRequireLogin();
  return;
}
    try {
      setLoading(true);

      const result = await generateTerraform(config);

      setProvider(result.provider);
      setMain(result.main);
      setVariables(result.variables);
      setOutputs(result.outputs);
    } catch (error) {
      console.error("Terraform Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-1 gap-6 p-6">
      <TerraformForm
        onGenerate={handleGenerate}
        loading={loading}
      />

      <TerraformOutput
        provider={provider}
        main={main}
        variables={variables}
        outputs={outputs}
      />
    </div>
  );
}

export default TerraformWorkspace;