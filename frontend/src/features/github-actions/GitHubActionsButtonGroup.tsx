import toast from "react-hot-toast";

type Props = {
  workflow: string;
  onSave: () => void;
};

function GitHubActionsButtonGroup({
  workflow,
  onSave,
}: Props) {

  const handleCopy = async () => {
    if (!workflow) return;

    try {
      await navigator.clipboard.writeText(workflow);
      toast.success("Workflow copied!");
    } catch {
      toast.error("Failed to copy workflow");
    }
  };

  const handleDownload = () => {
    if (!workflow) return;

    const blob = new Blob([workflow], {
      type: "text/plain;charset=utf-8",
    });

    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "ci.yml";

    a.click();

    window.URL.revokeObjectURL(url);

    toast.success("Workflow downloaded!");
  };

  return (
    <div className="flex gap-3 mb-4">

      <button
        onClick={handleCopy}
        disabled={!workflow}
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition disabled:bg-gray-600 disabled:cursor-not-allowed"
      >
        📋 Copy
      </button>

      <button
        onClick={handleDownload}
        disabled={!workflow}
        className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition disabled:bg-gray-600 disabled:cursor-not-allowed"
      >
        ⬇ Download
      </button>

      <button
        onClick={onSave}
        disabled={!workflow}
        className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 rounded-lg transition disabled:bg-gray-600 disabled:cursor-not-allowed"
      >
        💾 Save
      </button>

    </div>
  );
}

export default GitHubActionsButtonGroup;