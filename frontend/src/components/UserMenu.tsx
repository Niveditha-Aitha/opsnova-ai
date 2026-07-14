import { useState } from "react";
import { logout } from "../services/authService";

type Props = {
  user: {
    name: string;
    email: string;
  };
  onLogout: () => void;
};

function UserMenu({ user, onLogout }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">

      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-green-600 to-emerald-500 px-5 py-2.5 font-semibold text-white"
      >
        👤 {user.name}
        <span className="text-sm">{open ? "▲" : "▼"}</span>
      </button>

      {open && (
        <div className="absolute right-0 mt-3 w-72 rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl">

          <div className="border-b border-slate-700 p-5">

            <h3 className="font-semibold text-white">
              {user.name}
            </h3>

            <p className="mt-1 text-sm text-slate-400">
              {user.email}
            </p>

          </div>

          <button
            onClick={() => {
              logout();
              onLogout();
            }}
            className="flex w-full items-center gap-3 rounded-b-2xl px-5 py-4 text-left text-red-400 transition hover:bg-slate-800"
          >
            🚪 Logout
          </button>

        </div>
      )}

    </div>
  );
}

export default UserMenu;