import toast from "react-hot-toast";

type Props = {
  dockerfile: string;
  onSave: () => void;
};

function ButtonGroup({ dockerfile, onSave }: Props) {
  const handleCopy = async () => {
    if (!dockerfile) return;

    try {
      await navigator.clipboard.writeText(dockerfile);
      toast.success("Copied successfully!");
    } catch (err) {
      toast.error("Failed to copy");
    }
  };

  const handleDownload = () => {
    if (!dockerfile) return;

    const blob = new Blob([dockerfile], {
      type: "text/plain;charset=utf-8",
    });

    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "Dockerfile";

    a.click();

    window.URL.revokeObjectURL(url);

    toast.success("Downloaded successfully!");
  };

  return (
    <div className="flex gap-3 mb-4">

      <button
        onClick={handleCopy}
        className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        📋 Copy
      </button>

      <button
        onClick={handleDownload}
        className="rounded-lg bg-purple-600 px-4 py-2 text-white hover:bg-purple-700"
      >
        ⬇ Download
      </button>

      <button
        onClick={onSave}
        className="rounded-lg bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700"
      >
        💾 Save
      </button>

    </div>
  );
}

export default ButtonGroup;