import { useState } from "react";
import toast from "react-hot-toast";

import CodeEditor from "../../components/CodeEditor";
import AwsButtonGroup from "./AwsButtonGroup";
import { saveVaultItem } from "../../services/vaultService";

type Props = {
  cloudformation: string;
  awsCli: string;
  iamPolicy: string;
  architecture: string;
};

function AwsOutput({
  cloudformation,
  awsCli,
  iamPolicy,
  architecture,
}: Props) {
  const [activeTab, setActiveTab] = useState<
    "cloudformation" | "awscli" | "policy" | "architecture"
  >("cloudformation");

  let code = "";

  switch (activeTab) {
    case "cloudformation":
      code = cloudformation;
      break;

    case "awscli":
      code = awsCli;
      break;

    case "policy":
      code = iamPolicy;
      break;

    case "architecture":
      code = architecture;
      break;
  }

  const fileName =
    activeTab === "cloudformation"
      ? "cloudformation.yaml"
      : activeTab === "awscli"
      ? "aws-cli.sh"
      : activeTab === "policy"
      ? "iam-policy.json"
      : "architecture.md";

  const handleSave = () => {
    saveVaultItem({
      id: crypto.randomUUID(),
      title: fileName,
      expert: "AWS",
      fileName,
      content: code,
      createdAt: new Date().toLocaleString(),
    });

    toast.success(`${fileName} saved to OpsNova Vault!`);
  };

  if (!cloudformation) {
    return (
      <div className="w-1/2 bg-slate-900 rounded-2xl border border-slate-800 p-6 flex flex-col items-center justify-center">

        <div className="text-7xl mb-6">☁</div>

        <h2 className="text-2xl font-bold text-white mb-3">
          AWS Expert
        </h2>

        <p className="text-slate-400 text-center">
          Configure your AWS resource
          <br />
          and click
          <br />
          <span className="text-blue-400 font-semibold">
            Generate AWS Configuration
          </span>
        </p>

      </div>
    );
  }

  return (
    <div className="w-1/2 bg-slate-900 rounded-2xl border border-slate-800 p-6">

      <h2 className="text-2xl font-bold mb-4">
        ☁ Generated Files
      </h2>

      <div className="flex gap-2 mb-4 flex-wrap">

        <button
          onClick={() => setActiveTab("cloudformation")}
          className={`px-4 py-2 rounded-lg ${
            activeTab === "cloudformation"
              ? "bg-blue-600"
              : "bg-slate-700"
          }`}
        >
          cloudformation.yaml
        </button>

        <button
          onClick={() => setActiveTab("awscli")}
          className={`px-4 py-2 rounded-lg ${
            activeTab === "awscli"
              ? "bg-blue-600"
              : "bg-slate-700"
          }`}
        >
          aws-cli.sh
        </button>

        <button
          onClick={() => setActiveTab("policy")}
          className={`px-4 py-2 rounded-lg ${
            activeTab === "policy"
              ? "bg-blue-600"
              : "bg-slate-700"
          }`}
        >
          iam-policy.json
        </button>

        <button
          onClick={() => setActiveTab("architecture")}
          className={`px-4 py-2 rounded-lg ${
            activeTab === "architecture"
              ? "bg-blue-600"
              : "bg-slate-700"
          }`}
        >
          architecture.md
        </button>

      </div>

      <AwsButtonGroup
        content={code}
        filename={fileName}
        cloudformation={cloudformation}
        awsCli={awsCli}
        iamPolicy={iamPolicy}
        architecture={architecture}
        onSave={handleSave}
      />

      <CodeEditor code={code} />

    </div>
  );
}

export default AwsOutput;