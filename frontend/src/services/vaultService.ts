import type { VaultItem } from "../types/vault";

const STORAGE_KEY = "opsnova-vault";

export function getVaultItems(): VaultItem[] {
  const data = localStorage.getItem(STORAGE_KEY);

  if (!data) return [];

  return JSON.parse(data);
}

export function saveVaultItem(item: VaultItem) {
  const items = getVaultItems();

  items.unshift(item);

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(items)
  );
}

export function deleteVaultItem(id: string) {
  const items = getVaultItems().filter(
    (item) => item.id !== id
  );

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(items)
  );
}

export function updateVaultItem(updatedItem: VaultItem) {
  const items = getVaultItems().map((item) =>
    item.id === updatedItem.id ? updatedItem : item
  );

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(items)
  );
}