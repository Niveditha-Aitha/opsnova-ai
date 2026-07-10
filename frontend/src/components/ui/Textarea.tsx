import type {
  TextareaHTMLAttributes,
} from "react";

interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

function Textarea({
  className = "",
  ...props
}: TextareaProps) {
  return (
    <textarea
      className={`w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-blue-500 ${className}`}
      {...props}
    />
  );
}

export default Textarea;