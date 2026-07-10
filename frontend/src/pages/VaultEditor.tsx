import { useState } from "react";
import CodeEditor from "../components/CodeEditor";
import type { VaultItem } from "../types/vault";
import { updateVaultItem } from "../services/vaultService";
import toast from "react-hot-toast";

type Props = {
  item: VaultItem;
  onBack: () => void;
};

function VaultEditor({ item, onBack }: Props) {
  const [code, setCode] = useState(item.content);

  const handleSave = () => {
    updateVaultItem({
      ...item,
      content: code,
    });

    toast.success("Vault updated successfully!");
    onBack();
  };

  const handleDownload = () => {
    const blob = new Blob([code], {
      type: "text/plain;charset=utf-8",
    });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = item.fileName;
    a.click();

    URL.revokeObjectURL(url);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">

      <div className="flex items-center justify-between mb-6">

        <div>
          <h1 className="text-3xl font-bold">
            ✏️ Edit {item.fileName}
          </h1>

          <p className="text-slate-400">
            {item.expert}
          </p>
        </div>

        <button
          onClick={onBack}
          className="rounded-lg bg-slate-700 px-5 py-2 hover:bg-slate-600"
        >
          ← Back
        </button>

      </div>

         <CodeEditor
          code={code}
           editable={true}
           onChange={setCode}
           height="65vh"
            />

      <div className="flex gap-3 mt-6">

        <button
          onClick={handleSave}
          className="rounded-lg bg-green-600 px-5 py-2 hover:bg-green-700"
        >
          💾 Save Changes
        </button>

        <button
          onClick={handleDownload}
          className="rounded-lg bg-purple-600 px-5 py-2 hover:bg-purple-700"
        >
          ⬇ Download
        </button>

      </div>

    </main>
  );
}

export default VaultEditor;