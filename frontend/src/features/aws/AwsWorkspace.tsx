import { useState } from "react";

import AwsForm from "./AwsForm";
import AwsOutput from "./AwsOutput";

import {
  generateAWS,
  type AWSRequest,
} from "../../api/awsApi";

type WorkspaceProps = {
  onRequireLogin: () => void;
};
function AwsWorkspace({
  onRequireLogin,
}: WorkspaceProps) {
  const [cloudformation, setCloudFormation] = useState("");
  const [awsCli, setAwsCli] = useState("");
  const [iamPolicy, setIamPolicy] = useState("");
  const [architecture, setArchitecture] = useState("");

  const [loading, setLoading] = useState(false);

  const handleGenerate = async (
    config: AWSRequest
  ) => {
    const currentUser = localStorage.getItem("opsnova_current_user");

if (!currentUser) {
  onRequireLogin();
  return;
}
    try {
      setLoading(true);

      const result = await generateAWS(config);

      setCloudFormation(result.cloudformation);
      setAwsCli(result.aws_cli);
      setIamPolicy(result.iam_policy);
      setArchitecture(result.architecture);

    } catch (error) {
      console.error("AWS Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-1 gap-6 p-6">

      <AwsForm
        onGenerate={handleGenerate}
        loading={loading}
      />

      <AwsOutput
        cloudformation={cloudformation}
        awsCli={awsCli}
        iamPolicy={iamPolicy}
        architecture={architecture}
      />

    </div>
  );
}

export default AwsWorkspace;