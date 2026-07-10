import { useState } from "react";

import type {
  AnsibleRequest,
} from "../../api/ansibleApi";

type Props = {
  onGenerate: (
    config: AnsibleRequest
  ) => void;

  loading: boolean;
};

function AnsibleForm({
  onGenerate,
  loading,
}: Props) {

  const [playbookName, setPlaybookName] =
    useState("Install NGINX");

  const [playbookType, setPlaybookType] =
    useState("Nginx");

  const [hosts, setHosts] =
    useState("all");

  const [become, setBecome] =
    useState(true);

  const [packageManager, setPackageManager] =
    useState("apt");

  const [serviceName, setServiceName] =
    useState("nginx");

  const [serviceState, setServiceState] =
    useState("started");

  const [packageName, setPackageName] =
    useState("");

  const [username, setUsername] =
    useState("");

  const [filePath, setFilePath] =
    useState("");

  const [destinationPath, setDestinationPath] =
    useState("");

  const handleSubmit = () => {
    onGenerate({
      playbook_name: playbookName,
      playbook_type: playbookType,
      hosts,
      become,
      package_manager: packageManager,
      service_name: serviceName,
      service_state: serviceState,
      package_name: packageName,
      username,
      file_path: filePath,
      destination_path: destinationPath,
    });
  };

  return (
    <div className="w-1/2 bg-slate-900 rounded-2xl border border-slate-800 p-6">

      <h2 className="text-2xl font-bold mb-6">
        📘 Ansible Expert
      </h2>

      <div className="space-y-5">

        <input
          className="w-full bg-slate-800 p-3 rounded-xl"
          placeholder="Playbook Name"
          value={playbookName}
          onChange={(e) =>
            setPlaybookName(e.target.value)
          }
        />

        <select
          className="w-full bg-slate-800 p-3 rounded-xl"
          value={playbookType}
          onChange={(e) =>
            setPlaybookType(e.target.value)
          }
        >
          <option>Nginx</option>
          <option>Apache</option>
          <option>Docker</option>
          <option>Kubernetes</option>
          <option>Package</option>
          <option>Service</option>
          <option>User</option>
          <option>Copy</option>
        </select>

        <input
          className="w-full bg-slate-800 p-3 rounded-xl"
          placeholder="Hosts"
          value={hosts}
          onChange={(e) =>
            setHosts(e.target.value)
          }
        />

        <select
          className="w-full bg-slate-800 p-3 rounded-xl"
          value={packageManager}
          onChange={(e) =>
            setPackageManager(e.target.value)
          }
        >
          <option>apt</option>
          <option>yum</option>
          <option>dnf</option>
        </select>

        <input
          className="w-full bg-slate-800 p-3 rounded-xl"
          placeholder="Service Name"
          value={serviceName}
          onChange={(e) =>
            setServiceName(e.target.value)
          }
        />

        <select
          className="w-full bg-slate-800 p-3 rounded-xl"
          value={serviceState}
          onChange={(e) =>
            setServiceState(e.target.value)
          }
        >
          <option>started</option>
          <option>stopped</option>
          <option>restarted</option>
        </select>

        {playbookType === "Package" && (
  <input
    className="w-full bg-slate-800 p-3 rounded-xl"
    placeholder="Package Name"
    value={packageName}
    onChange={(e) => setPackageName(e.target.value)}
  />
)}

{playbookType === "User" && (
  <input
    className="w-full bg-slate-800 p-3 rounded-xl"
    placeholder="Username"
    value={username}
    onChange={(e) => setUsername(e.target.value)}
  />
)}

{playbookType === "Copy" && (
  <>
    <input
      className="w-full bg-slate-800 p-3 rounded-xl"
      placeholder="Source File Path"
      value={filePath}
      onChange={(e) => setFilePath(e.target.value)}
    />

    <input
      className="w-full bg-slate-800 p-3 rounded-xl"
      placeholder="Destination Path"
      value={destinationPath}
      onChange={(e) => setDestinationPath(e.target.value)}
    />
  </>
)}

        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={become}
            onChange={(e) =>
              setBecome(e.target.checked)
            }
          />

          Become (sudo)
        </label>

        <button
          type="button"
          onClick={handleSubmit}
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg disabled:opacity-50"
        >
          {loading
            ? "⏳ Generating..."
            : "🚀 Generate Playbook"}
        </button>

      </div>

    </div>
  );
}

export default AnsibleForm;