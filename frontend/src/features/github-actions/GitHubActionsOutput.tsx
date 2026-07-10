import CodeEditor from "../../components/CodeEditor";
import GitHubActionsButtonGroup from "./GitHubActionsButtonGroup";
import { saveVaultItem } from "../../services/vaultService";
import toast from "react-hot-toast";

type Props = {
  workflow: string;
};

function GitHubActionsOutput({ workflow }: Props) {

  const handleSave = () => {
    saveVaultItem({
      id: crypto.randomUUID(),
      title: "ci.yml",
      expert: "GitHub Actions",
      fileName: "ci.yml",
      content: workflow,
      createdAt: new Date().toLocaleString(),
    });

    toast.success("Workflow saved to OpsNova Vault!");
  };

  if (!workflow) {
    return (
      <div className="w-1/2 bg-slate-900 rounded-2xl border border-slate-800 p-6 flex flex-col items-center justify-center">

        <div className="text-7xl mb-6">
          ⚙️
        </div>

        <h2 className="text-2xl font-bold text-white mb-3">
          GitHub Actions Expert
        </h2>

        <p className="text-slate-400 text-center">
          Configure your workflow
          <br />
          and click
          <br />
          <span className="text-blue-400 font-semibold">
            Generate Workflow
          </span>
        </p>

      </div>
    );
  }

  return (
    <div className="w-1/2 bg-slate-900 rounded-2xl border border-slate-800 p-6">

      <h2 className="text-2xl font-bold mb-4">
        ⚙️ Generated Workflow
      </h2>

      <GitHubActionsButtonGroup
        workflow={workflow}
        onSave={handleSave}
      />

      <CodeEditor code={workflow} />

    </div>
  );
}

export default GitHubActionsOutput;