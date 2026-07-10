import type {
  SelectHTMLAttributes,
  ReactNode,
} from "react";

interface SelectProps
  extends SelectHTMLAttributes<HTMLSelectElement> {
  children: ReactNode;
}

function Select({
  children,
  className = "",
  ...props
}: SelectProps) {
  return (
    <select
      className={`w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-blue-500 ${className}`}
      {...props}
    >
      {children}
    </select>
  );
}

export default Select;