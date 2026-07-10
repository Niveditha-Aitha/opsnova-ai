import { useState } from "react";

import type {
  TroubleshooterRequest,
} from "../../api/troubleshooterApi";

type Props = {
  onAnalyze: (
    config: TroubleshooterRequest
  ) => void;

  loading: boolean;
};

function TroubleshooterForm({
  onAnalyze,
  loading,
}: Props) {

  const [technology, setTechnology] =
    useState("Docker");

  const [errorMessage, setErrorMessage] =
    useState("");

  const [command, setCommand] =
    useState("");

  const [operatingSystem, setOperatingSystem] =
    useState("Linux");

  const [environment, setEnvironment] =
    useState("Local");

  const handleSubmit = () => {
    onAnalyze({
      technology,
      error_message: errorMessage,
      command,
      operating_system: operatingSystem,
      environment,
    });
  };

  return (
    <div className="w-1/2 bg-slate-900 rounded-2xl border border-slate-800 p-6">

      <h2 className="text-2xl font-bold mb-6">
        🔍 DevOps AI Troubleshooter
      </h2>

      <div className="space-y-5">

        <select
          className="w-full bg-slate-800 p-3 rounded-xl"
          value={technology}
          onChange={(e) => setTechnology(e.target.value)}
        >
          <option>Docker</option>
          <option>Kubernetes</option>
          <option>Jenkins</option>
          <option>Terraform</option>
          <option>Linux</option>
          <option>GitHub Actions</option>
          <option>Ansible</option>
          <option>AWS</option>
          <option>CI/CD</option>
          
        </select>

        <textarea
          className="w-full bg-slate-800 p-3 rounded-xl h-44"
          placeholder="Paste complete error log..."
          value={errorMessage}
          onChange={(e) =>
            setErrorMessage(e.target.value)
          }
        />

        <input
          className="w-full bg-slate-800 p-3 rounded-xl"
          placeholder="Command Executed"
          value={command}
          onChange={(e) =>
            setCommand(e.target.value)
          }
        />

        <select
          className="w-full bg-slate-800 p-3 rounded-xl"
          value={operatingSystem}
          onChange={(e) =>
            setOperatingSystem(e.target.value)
          }
        >
          <option>Linux</option>
          <option>Windows</option>
          <option>macOS</option>
        </select>

        <select
          className="w-full bg-slate-800 p-3 rounded-xl"
          value={environment}
          onChange={(e) =>
            setEnvironment(e.target.value)
          }
        >
          <option>Local</option>
          <option>AWS</option>
          <option>Azure</option>
          <option>GCP</option>
          <option>Kubernetes</option>
        </select>

        <button
          type="button"
          onClick={handleSubmit}
          disabled={loading}
          className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg disabled:opacity-50"
        >
          {loading
            ? "🔍 Analyzing..."
            : "🚀 Analyze Error"}
        </button>

      </div>

    </div>
  );
}

export default TroubleshooterForm;