import CodeEditor from "../../components/CodeEditor";
import JenkinsButtonGroup from "./JenkinsButtonGroup";
import { saveVaultItem } from "../../services/vaultService";
import toast from "react-hot-toast";

type Props = {
  jenkinsfile: string;
};

function JenkinsOutput({ jenkinsfile }: Props) {
  if (!jenkinsfile) {
    return (
      <div className="w-1/2 bg-slate-900 rounded-2xl border border-slate-800 p-6 flex flex-col items-center justify-center">
        <div className="text-7xl mb-6">🔧</div>

        <h2 className="text-2xl font-bold mb-3 text-white">
          Jenkins Expert
        </h2>

        <p className="text-slate-400 text-center">
          Configure your pipeline on the left and click
          <br />
          <span className="font-semibold text-blue-400">
            Generate Jenkinsfile
          </span>
        </p>
      </div>
    );
  }

  const handleSave = () => {
    saveVaultItem({
      id: crypto.randomUUID(),
      title: "Jenkinsfile",
      expert: "Jenkins",
      fileName: "Jenkinsfile",
      content: jenkinsfile,
      createdAt: new Date().toLocaleString(),
    });

    toast.success("Jenkinsfile saved to OpsNova Vault!");
  };

  return (
    <div className="w-1/2 bg-slate-900 rounded-2xl border border-slate-800 p-6">
      <h2 className="text-2xl font-bold mb-4 text-white">
        🔧 Generated Jenkinsfile
      </h2>

      <JenkinsButtonGroup
        jenkinsfile={jenkinsfile}
        onSave={handleSave}
      />

      <CodeEditor code={jenkinsfile} />
    </div>
  );
}

export default JenkinsOutput;