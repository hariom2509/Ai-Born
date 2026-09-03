import React from "react";
import { Cpu, ShieldAlert, Network, Layers } from "lucide-react";

export default function ArcSection() {
  return (
    <section className="py-24 sm:py-32 border-t border-white/5 relative overflow-hidden">
      
      {/* Subtle Arc background geometric ring */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-cyan-500/10 pointer-events-none blur-sm" />
      <div className="absolute right-12 top-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full border border-purple-500/10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="text-xs font-mono-code text-cyan-400 uppercase tracking-widest mb-3">
            // ONCHAIN INFRASTRUCTURE
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            BUILT FOR AN AGENTIC FUTURE
          </h2>

          <div className="mt-6 space-y-4 text-zinc-400 text-base sm:text-lg leading-relaxed font-light">
            <p>
              AIBORN is being developed with Arc in mind, exploring the intersection of AI agents and onchain infrastructure.
            </p>
            <p>
              As agents become increasingly capable of interacting with applications and programmable financial primitives, AIBORN aims to explore what an onchain identity layer for those agents could look like.
            </p>
            <p>
              What happens when an AI agent has both a persistent identity and access to stable, programmable rails? The goal is to explore the identity and security layer necessary before autonomous agents can operate on behalf of users.
            </p>
          </div>

          {/* Core Principles */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono-code text-xs">
            <div className="p-4 rounded-xl hud-card flex items-start gap-3">
              <Network className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-white font-semibold">AGENTIC RAILS</div>
                <p className="mt-1 text-zinc-400 font-sans text-xs">
                  Investigating stable, high-throughput execution environments designed for autonomous software.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl hud-card flex items-start gap-3">
              <Layers className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-white font-semibold">IDENTITY FIRST</div>
                <p className="mt-1 text-zinc-400 font-sans text-xs">
                  Separating verifiable ownership credentials from ephemeral execution memory.
                </p>
              </div>
            </div>
          </div>

          {/* Clear Disclaimer per prompt instructions */}
          <div className="mt-8 p-3.5 rounded-lg bg-white/[0.02] border border-white/5 font-mono-code text-[11px] text-zinc-400 flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-zinc-400 shrink-0" />
            <span>
              DISCLAIMER: AIBORN is an independent research and product initiative developed with Arc architecture in mind; does not imply official partnership or endorsement.
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
