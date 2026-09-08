"use client";

import React, { useState, useEffect } from "react";
import { Cpu, Activity, ShieldCheck, Terminal } from "lucide-react";

export default function AiTelemetryBar() {
  const [cycleCount, setCycleCount] = useState(24800);
  const [entropy, setEntropy] = useState("0.00142");

  useEffect(() => {
    const interval = setInterval(() => {
      setCycleCount((prev) => prev + Math.floor(Math.random() * 7) + 1);
      setEntropy((0.0014 + Math.random() * 0.00008).toFixed(5));
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-[#030306] border-b border-purple-500/20 text-[10px] font-mono-code text-zinc-400 py-1.5 px-4 sm:px-6 relative z-50 overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Left Telemetry Group */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="flex items-center gap-1.5 text-purple-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="font-semibold tracking-wider text-emerald-300">
              SYNTHETIC AI RUNTIME
            </span>
          </div>
          <span className="text-zinc-600 hidden sm:inline">/</span>
          <span className="text-zinc-400 hidden sm:inline">
            CORE: AIBORN_KERNEL_v0.9.4
          </span>
        </div>

        {/* Center Live Ticker (Marquee-like or stats) */}
        <div className="hidden lg:flex items-center gap-6 text-zinc-500">
          <div>
            <span className="text-zinc-400">NODES: </span>
            <span className="text-purple-300">5000_GENESIS</span>
          </div>
          <div>
            <span className="text-zinc-400">CLK: </span>
            <span className="text-cyan-300">{cycleCount}.8MHz</span>
          </div>
          <div>
            <span className="text-zinc-400">ENTROPY: </span>
            <span className="text-zinc-300">{entropy}</span>
          </div>
          <div>
            <span className="text-zinc-400">TARGET_NET: </span>
            <span className="text-purple-300">ARC_ROBINHOOD_ECOSYSTEM</span>
          </div>
        </div>

        {/* Right Status */}
        <div className="flex items-center gap-2 text-zinc-400 shrink-0">
          <span className="text-zinc-500 hidden sm:inline">[ AUTONOMOUS AI BUILD ]</span>
          <span className="px-1.5 py-0.5 rounded bg-purple-950/60 border border-purple-500/30 text-purple-300 text-[9px] font-semibold">
            STATUS: BETA
          </span>
        </div>

      </div>
    </div>
  );
}
