import { useState } from "react";

import TroubleshooterForm from "./TroubleshooterForm";
import TroubleshooterOutput from "./TroubleshooterOutput";

import {
  analyzeError,
  type TroubleshooterRequest,
} from "../../api/troubleshooterApi";

type WorkspaceProps = {
  onRequireLogin: () => void;
  onBack: () => void;
};
function TroubleshooterWorkspace({
  onRequireLogin,
  onBack,
}: WorkspaceProps) {
  const [technology, setTechnology] = useState("");
  const [severity, setSeverity] = useState("");
  const [rootCause, setRootCause] = useState("");
  const [explanation, setExplanation] = useState("");
  const [solution, setSolution] = useState("");
  const [bestPractice, setBestPractice] = useState("");

  const [loading, setLoading] = useState(false);

  const handleAnalyze = async (
    config: TroubleshooterRequest
  ) => {
    const currentUser = localStorage.getItem("opsnova_current_user");

if (!currentUser) {
  onRequireLogin();
  return;
}
    try {
      setLoading(true);

      const result = await analyzeError(config);

      setTechnology(result.technology);
      setSeverity(result.severity);
      setRootCause(result.root_cause);
      setExplanation(result.explanation);
      setSolution(result.solution);
      setBestPractice(result.best_practice);

    } catch (error) {
      console.error(error);
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
    ← Back to Troubleshooter Expert
  </button>
</div>

      <TroubleshooterForm
        onAnalyze={handleAnalyze}
        loading={loading}
      />

      <TroubleshooterOutput
        technology={technology}
        severity={severity}
        rootCause={rootCause}
        explanation={explanation}
        solution={solution}
        bestPractice={bestPractice}
      />

    </div>
  );
}

export default TroubleshooterWorkspace;