import { useState } from "react";

import type {
  LinuxRequest,
} from "../../api/linuxApi";

type Props = {
  onGenerate: (
    config: LinuxRequest
  ) => void;

  loading: boolean;
};

function LinuxForm({
  onGenerate,
  loading,
}: Props) {

  const [category, setCategory] =
    useState("Networking");

  const [distribution, setDistribution] =
    useState("Ubuntu");

  const [username, setUsername] =
    useState("developer");

 const groupName = "developers";

  const [packageName, setPackageName] =
    useState("nginx");

  const [serviceName, setServiceName] =
    useState("nginx");

  const sourcePath = "/tmp/source";

  const destinationPath = "/tmp/destination";

  const directoryName = "/opt/demo";

  const processName = "python";

 const port = 8080;

  const networkInterface = "eth0";

  const backupDirectory = "/backup";

  const handleSubmit = () => {
    onGenerate({
      category,
      distribution,
      username,
      group_name: groupName,
      package_name: packageName,
      service_name: serviceName,
      source_path: sourcePath,
      destination_path: destinationPath,
      directory_name: directoryName,
      process_name: processName,
      port,
      network_interface: networkInterface,
      backup_directory: backupDirectory,
    });
  };

  return (
    <div className="w-1/2 bg-slate-900 rounded-2xl border border-slate-800 p-6">

      <h2 className="text-2xl font-bold mb-6">
        🐧 Linux Expert
      </h2>

      <div className="space-y-5">

        <select
          className="w-full bg-slate-800 p-3 rounded-xl"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>User Management</option>
          <option>File Management</option>
          <option>Permissions</option>
          <option>Package Management</option>
          <option>Networking</option>
          <option>Process Management</option>
          <option>Service Management</option>
          <option>Disk Management</option>
          <option>Monitoring</option>
        </select>

        <select
          className="w-full bg-slate-800 p-3 rounded-xl"
          value={distribution}
          onChange={(e) => setDistribution(e.target.value)}
        >
          <option>Ubuntu</option>
          <option>CentOS</option>
          <option>RHEL</option>
          <option>Debian</option>
        </select>

        <input
          className="w-full bg-slate-800 p-3 rounded-xl"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          className="w-full bg-slate-800 p-3 rounded-xl"
          placeholder="Package Name"
          value={packageName}
          onChange={(e) => setPackageName(e.target.value)}
        />

        <input
          className="w-full bg-slate-800 p-3 rounded-xl"
          placeholder="Service Name"
          value={serviceName}
          onChange={(e) => setServiceName(e.target.value)}
        />

        <button
          type="button"
          onClick={handleSubmit}
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg disabled:opacity-50"
        >
          {loading
            ? "⏳ Generating..."
            : "🚀 Generate Linux Commands"}
        </button>

      </div>

    </div>
  );
}

export default LinuxForm;