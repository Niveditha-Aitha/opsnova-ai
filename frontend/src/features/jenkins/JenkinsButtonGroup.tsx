import toast from "react-hot-toast";

type Props = {
  jenkinsfile: string;
  onSave: () => void;
};

function JenkinsButtonGroup({
  jenkinsfile,
  onSave,
}: Props) {
  const handleCopy = async () => {
    if (!jenkinsfile) return;

    try {
      await navigator.clipboard.writeText(jenkinsfile);
      toast.success("Jenkinsfile copied!");
    } catch {
      toast.error("Failed to copy Jenkinsfile");
    }
  };

  const handleDownload = () => {
    if (!jenkinsfile) return;

    const blob = new Blob([jenkinsfile], {
      type: "text/plain;charset=utf-8",
    });

    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "Jenkinsfile";

    a.click();

    window.URL.revokeObjectURL(url);

    toast.success("Jenkinsfile downloaded!");
  };

  return (
    <div className="flex gap-3 mb-4">

      <button
        onClick={handleCopy}
        disabled={!jenkinsfile}
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition disabled:bg-gray-600 disabled:cursor-not-allowed"
      >
        📋 Copy
      </button>

      <button
        onClick={handleDownload}
        disabled={!jenkinsfile}
        className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition disabled:bg-gray-600 disabled:cursor-not-allowed"
      >
        ⬇ Download
      </button>

      <button
        onClick={onSave}
        disabled={!jenkinsfile}
        className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 rounded-lg transition disabled:bg-gray-600 disabled:cursor-not-allowed"
      >
        💾 Save
      </button>

    </div>
  );
}

export default JenkinsButtonGroup;