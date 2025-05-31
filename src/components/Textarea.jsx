import { forwardRef } from "react";

const Textarea = forwardRef(({ className = "", ...props }, ref) => {
  const combinedClassName =
    "flex min-h-[80px] w-full rounded-md border border-zinc-200 border-gray-300 bg-white px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" +
    (className ? ` ${className}` : "");

  return <textarea ref={ref} className={combinedClassName} {...props} />;
});

Textarea.displayName = "Textarea";

export { Textarea };
