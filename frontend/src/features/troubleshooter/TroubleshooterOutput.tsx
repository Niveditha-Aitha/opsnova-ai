import CodeEditor from "../../components/CodeEditor";
import TroubleshooterButtonGroup from "./TroubleshooterButtonGroup";
import { saveVaultItem } from "../../services/vaultService";
import toast from "react-hot-toast";

type Props = {
  technology: string;
  severity: string;
  rootCause: string;
  explanation: string;
  solution: string;
  bestPractice: string;
};

function TroubleshooterOutput({
  technology,
  severity,
  rootCause,
  explanation,
  solution,
  bestPractice,
}: Props) {

  if (!technology) {
    return (
      <div className="w-1/2 bg-slate-900 rounded-2xl border border-slate-800 p-6 flex flex-col items-center justify-center">

        <div className="text-7xl mb-6">
          🔍
        </div>

        <h2 className="text-2xl font-bold text-white mb-3">
          DevOps AI Troubleshooter
        </h2>

        <p className="text-slate-400 text-center">
          Paste an error log
          <br />
          and click
          <br />
          <span className="text-blue-400 font-semibold">
            Analyze Error
          </span>
        </p>

      </div>
    );
  }

  const report = `# DevOps AI Troubleshooting Report

Technology
----------
${technology}

Severity
--------
${severity}

Root Cause
----------
${rootCause}

Explanation
-----------
${explanation}

Solution
--------
${solution}

Best Practice
-------------
${bestPractice}
`;

  const handleSave = () => {
    saveVaultItem({
      id: crypto.randomUUID(),
      title: "analysis.md",
      expert: "Troubleshooter",
      fileName: "analysis.md",
      content: report,
      createdAt: new Date().toLocaleString(),
    });

    toast.success("Analysis saved to OpsNova Vault!");
  };

  return (
    <div className="w-1/2 bg-slate-900 rounded-2xl border border-slate-800 p-6">

      <h2 className="text-2xl font-bold mb-4">
        🔍 Analysis Report
      </h2>

      <TroubleshooterButtonGroup
        report={report}
        onSave={handleSave}
      />

      <CodeEditor code={report} />

    </div>
  );
}

export default TroubleshooterOutput;