"use client";

import { useCallback, useState } from "react";

type Props = {
  text: string;
  label?: string;
  className?: string;
};

export function CopyButton({ text, label = "Copy", className = "" }: Props) {
  const [done, setDone] = useState(false);

  const onCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text);
      setDone(true);
      window.setTimeout(() => setDone(false), 2000);
    } catch {
      setDone(false);
    }
  }, [text]);

  return (
    <button
      type="button"
      onClick={onCopy}
      className={`rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-zinc-200 transition hover:bg-white/10 ${className}`}
    >
      {done ? "Copied" : label}
    </button>
  );
}
