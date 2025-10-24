"use client";

import { useFormStatus } from "react-dom";

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="w-full px-4 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-bold transition-colors disabled:opacity-50"
      aria-disabled={pending}
      disabled={pending}
    >
      {pending ? "Generating..." : "Generate"}
    </button>
  );
}
