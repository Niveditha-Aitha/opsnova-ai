import { useState } from "react";

import LinuxForm from "./LinuxForm";
import LinuxOutput from "./LinuxOutput";

import {
  generateLinux,
  type LinuxRequest,
} from "../../api/linuxApi";

type WorkspaceProps = {
  onRequireLogin: () => void;
};
function LinuxWorkspace({
  onRequireLogin,
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