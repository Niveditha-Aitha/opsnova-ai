import { useEffect, useState } from "react";
import { getVaultItems, deleteVaultItem } from "../services/vaultService";
import type { VaultItem } from "../types/vault";

type Props = {
  onEdit: (item: VaultItem) => void;
};

function Vault({ onEdit }: Props) {
  const [items, setItems] = useState<VaultItem[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setItems(getVaultItems());
  }, []);

  const handleDelete = (id: string) => {
    deleteVaultItem(id);
    setItems(getVaultItems());
  };

  const filteredItems = items.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.expert.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-slate-950 text-white px-8 py-10">

      <h1 className="text-4xl font-bold">
        💾 OpsNova Vault
      </h1>

      <p className="mt-2 text-slate-400">
        Store and manage all your generated DevOps files.
      </p>

      <input
        type="text"
        placeholder="🔍 Search saved files..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mt-8 w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 outline-none focus:border-blue-500"
      />

      <div className="mt-10 space-y-6">

        {filteredItems.length === 0 ? (

          <div className="rounded-2xl border border-dashed border-slate-700 p-10 text-center">

            <h2 className="text-2xl font-semibold">
              No Saved Files
            </h2>

            <p className="mt-3 text-slate-400">
              Generate a file and click 💾 Save to store it here.
            </p>

          </div>

        ) : (

          filteredItems.map((item) => (

            <div
              key={item.id}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
            >

              <div className="flex items-center justify-between">

                <div>

                  <h2 className="text-2xl font-semibold">
                    {item.title}
                  </h2>

                  <p className="mt-2 text-slate-400">
                    {item.expert}
                  </p>

                  <p className="text-sm text-slate-500">
                    {item.createdAt}
                  </p>

                </div>

                <div className="flex gap-3">


  <div className="flex gap-3">

  <button
  onClick={() => onEdit(item)}
  className="rounded-lg bg-amber-600 px-4 py-2 hover:bg-amber-700"
>
  ✏️ Edit
</button>

  <button
  onClick={async () => {
    try {
      await navigator.clipboard.writeText(item.content);
      alert("✅ Copied successfully!");
    } catch {
      alert("❌ Failed to copy.");
    }
  }}
  className="rounded-lg bg-cyan-600 px-4 py-2 hover:bg-cyan-700"
>
  📋 Copy
</button>
  <button
    onClick={() => {
      const blob = new Blob([item.content], {
        type: "text/plain",
      });

      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = item.fileName;
      a.click();

      URL.revokeObjectURL(url);
    }}
    className="rounded-lg bg-purple-600 px-4 py-2 hover:bg-purple-700"
  >
    ⬇ Download
  </button>

  <button
    onClick={() => handleDelete(item.id)}
    className="rounded-lg bg-red-600 px-4 py-2 hover:bg-red-700"
  >
    🗑 Delete
  </button>

</div>

</div>

              </div>

            </div>

          ))

        )}

      </div>

    </main>
  );
}

export default Vault;