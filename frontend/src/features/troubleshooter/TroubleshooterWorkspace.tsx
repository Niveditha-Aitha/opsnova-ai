import { useState } from "react";

import TroubleshooterForm from "./TroubleshooterForm";
import TroubleshooterOutput from "./TroubleshooterOutput";

import {
  analyzeError,
  type TroubleshooterRequest,
} from "../../api/troubleshooterApi";

type WorkspaceProps = {
  onRequireLogin: () => void;
};
function TroubleshooterWorkspace({
  onRequireLogin,
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