import JSZip from "jszip";
import toast from "react-hot-toast";

type Props = {
  content: string;
  filename: string;

  playbook: string;
  inventory: string;
  config: string;
  requirements: string;

  onSave: () => void;
};

function AnsibleButtonGroup({
  content,
  filename,
  playbook,
  inventory,
  config,
  requirements,
  onSave,
}: Props) {

  const handleCopy = async () => {
    if (!content) return;

    try {
      await navigator.clipboard.writeText(content);
      toast.success(`${filename} copied!`);
    } catch {
      toast.error("Copy failed");
    }
  };

  const handleDownload = () => {
    if (!content) return;

    const blob = new Blob([content], {
      type: "text/plain;charset=utf-8",
    });

    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = filename;

    a.click();

    window.URL.revokeObjectURL(url);

    toast.success(`${filename} downloaded!`);
  };

  const handleDownloadAll = async () => {
    const zip = new JSZip();

    zip.file("playbook.yml", playbook);
    zip.file("inventory.ini", inventory);
    zip.file("ansible.cfg", config);
    zip.file("requirements.yml", requirements);

    const zipBlob = await zip.generateAsync({
      type: "blob",
    });

    const url = window.URL.createObjectURL(zipBlob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "ansible-project.zip";

    a.click();

    window.URL.revokeObjectURL(url);

    toast.success("Ansible project downloaded!");
  };

  return (
    <div className="flex gap-3 mb-4 flex-wrap">

      <button
        onClick={handleCopy}
        disabled={!content}
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition disabled:bg-gray-600"
      >
        📋 Copy
      </button>

      <button
        onClick={handleDownload}
        disabled={!content}
        className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition disabled:bg-gray-600"
      >
        ⬇ Download
      </button>

      <button
        onClick={onSave}
        disabled={!content}
        className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 rounded-lg transition disabled:bg-gray-600"
      >
        💾 Save
      </button>

      <button
        onClick={handleDownloadAll}
        disabled={!playbook}
        className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition disabled:bg-gray-600"
      >
        📦 Download All
      </button>

    </div>
  );
}

export default AnsibleButtonGroup;