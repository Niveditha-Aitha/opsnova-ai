import type { InputHTMLAttributes } from "react";

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

function Input({
  className = "",
  ...props
}: InputProps) {
  return (
    <input
      className={`w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-blue-500 ${className}`}
      {...props}
    />
  );
}

export default Input;