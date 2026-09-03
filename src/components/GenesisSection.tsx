"use client";

import React from "react";
import CountdownTimer from "./CountdownTimer";
import StatusBadge from "./StatusBadge";
import { Cpu, Lock, Layers } from "lucide-react";

export default function GenesisSection() {
  return (
    <section id="genesis" className="py-24 sm:py-32 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Content */}
          <div className="lg:col-span-6">
            <div className="text-xs font-mono-code text-purple-400 uppercase tracking-widest mb-3">
              // GENERATION 01
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
              5,000 GENESIS AGENTS
            </h2>
            
            <div className="mt-6 space-y-4 text-zinc-400 text-base sm:text-lg leading-relaxed font-light">
              <p>
                Genesis is the first generation of AIBORN identities.
              </p>
              <p>
                5,000 unique agents will be created through a programmable combination of traits, rarity, and AI-generated characteristics.
              </p>
              <p>
                Once the Genesis collection is complete, new generations will be treated separately from Genesis. Genesis identities carry permanent origin provenance.
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <CountdownTimer variant="compact" />
            </div>
          </div>

          {/* Right: Large Graphic Display Card */}
          <div className="lg:col-span-6">
            <div className="p-8 sm:p-12 rounded-2xl hud-card hud-corners text-center relative overflow-hidden bg-gradient-to-b from-purple-950/20 via-black/80 to-black/90">
              
              {/* Background ambient glow */}
              <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-64 h-64 bg-purple-600/10 rounded-full blur-[80px] pointer-events-none" />

              <div className="relative z-10 flex flex-col items-center">
                <StatusBadge label="FIXED SUPPLY" variant="beta" className="mb-6" />

                {/* Big 5,000 Metric Display */}
                <div className="font-display text-7xl sm:text-8xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-600 tracking-tighter leading-none">
                  5,000
                </div>

                <div className="mt-4 font-mono-code text-sm sm:text-base text-purple-300 tracking-[0.25em] uppercase font-semibold">
                  UNIQUE GENESIS IDENTITIES
                </div>

                <div className="mt-6 max-w-sm text-xs text-zinc-400 font-mono-code leading-relaxed">
                  PROGRAMMATIC COMBINATION // DETERMINISTIC PYTHON ENGINE // VERIFIABLE METADATA
                </div>

                {/* 3 Pillars */}
                <div className="mt-8 pt-8 border-t border-white/8 grid grid-cols-3 gap-4 w-full">
                  <div className="flex flex-col items-center">
                    <Cpu className="w-5 h-5 text-purple-400 mb-1.5" />
                    <span className="text-[11px] font-mono-code text-white">PYTHON ENGINE</span>
                    <span className="text-[10px] text-zinc-400">Structured logic</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Layers className="w-5 h-5 text-cyan-400 mb-1.5" />
                    <span className="text-[11px] font-mono-code text-white">6 TRAIT TIERS</span>
                    <span className="text-[10px] text-zinc-400">Layered identity</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Lock className="w-5 h-5 text-emerald-400 mb-1.5" />
                    <span className="text-[11px] font-mono-code text-white">DELAYED REVEAL</span>
                    <span className="text-[10px] text-zinc-400">Post-mint reveal</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
