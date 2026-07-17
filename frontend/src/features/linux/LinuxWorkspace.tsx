import { useState } from "react";

import LinuxForm from "./LinuxForm";
import LinuxOutput from "./LinuxOutput";

import {
  generateLinux,
  type LinuxRequest,
} from "../../api/linuxApi";

type WorkspaceProps = {
  onRequireLogin: () => void;
  onBack: () => void;
};
function LinuxWorkspace({
  onRequireLogin,
  onBack,
}: WorkspaceProps) {
  const [commands, setCommands] = useState("");
  const [automation, setAutomation] = useState("");
  const [readme, setReadme] = useState("");
  const [cheatsheet, setCheatsheet] = useState("");

  const [loading, setLoading] = useState(false);

  const handleGenerate = async (
    config: LinuxRequest
  ) => {
    const currentUser = localStorage.getItem("opsnova_current_user");

if (!currentUser) {
  onRequireLogin();
  return;
}
    try {
      setLoading(true);

      const result = await generateLinux(config);

      setCommands(result.commands);
      setAutomation(result.automation);
      setReadme(result.readme);
      setCheatsheet(result.cheatsheet);

    } catch (error) {
      console.error("Linux Error:", error);
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
    ← Back to Linux Expert
  </button>
</div>

      <LinuxForm
        onGenerate={handleGenerate}
        loading={loading}
      />

      <LinuxOutput
        commands={commands}
        automation={automation}
        readme={readme}
        cheatsheet={cheatsheet}
      />

    </div>
  );
}

export default LinuxWorkspace;