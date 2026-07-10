import toast from "react-hot-toast";

type Props = {
  report: string;
  onSave: () => void;
};

function TroubleshooterButtonGroup({
  report,
  onSave,
}: Props) {

  const handleCopy = async () => {
    if (!report) return;

    try {
      await navigator.clipboard.writeText(report);
      toast.success("Analysis copied!");
    } catch {
      toast.error("Copy failed");
    }
  };

  const handleDownload = () => {
    if (!report) return;

    const blob = new Blob([report], {
      type: "text/plain;charset=utf-8",
    });

    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;
    a.download = "analysis.md";

    a.click();

    window.URL.revokeObjectURL(url);

    toast.success("Analysis downloaded!");
  };

  return (
    <div className="flex gap-3 mb-4">

      <button
        onClick={handleCopy}
        disabled={!report}
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition disabled:bg-gray-600"
      >
        📋 Copy
      </button>

      <button
        onClick={handleDownload}
        disabled={!report}
        className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition disabled:bg-gray-600"
      >
        ⬇ Download
      </button>

      <button
        onClick={onSave}
        disabled={!report}
        className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 rounded-lg transition disabled:bg-gray-600"
      >
        💾 Save
      </button>

    </div>
  );
}

export default TroubleshooterButtonGroup;