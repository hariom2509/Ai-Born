import React from "react";

interface StatusBadgeProps {
  label?: string;
  variant?: "beta" | "planned" | "future" | "active" | "dev";
  className?: string;
}

export default function StatusBadge({
  label = "BETA",
  variant = "beta",
  className = "",
}: StatusBadgeProps) {
  const configs = {
    beta: {
      border: "border-purple-500/30",
      bg: "bg-purple-950/20",
      text: "text-purple-300",
      dot: "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]",
    },
    active: {
      border: "border-emerald-500/30",
      bg: "bg-emerald-950/20",
      text: "text-emerald-300",
      dot: "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]",
    },
    dev: {
      border: "border-cyan-500/30",
      bg: "bg-cyan-950/20",
      text: "text-cyan-300",
      dot: "bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]",
    },
    planned: {
      border: "border-amber-500/30",
      bg: "bg-amber-950/20",
      text: "text-amber-300",
      dot: "bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]",
    },
    future: {
      border: "border-zinc-700/50",
      bg: "bg-zinc-900/40",
      text: "text-zinc-400",
      dot: "bg-zinc-500",
    },
  };

  const current = configs[variant] || configs.beta;

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border text-[11px] font-mono-code uppercase tracking-wider ${current.border} ${current.bg} ${current.text} ${className}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${current.dot}`} />
      <span>{label}</span>
    </span>
  );
}
