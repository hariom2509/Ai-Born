"use client";

import React from "react";
import CountdownTimer from "./CountdownTimer";
import StatusBadge from "./StatusBadge";
import OpenSeaIcon from "./OpenSeaIcon";
import { Cpu, Lock, Layers, ArrowUpRight } from "lucide-react";

export default function GenesisSection() {
  const openseaUrl =
    process.env.NEXT_PUBLIC_OPENSEA_URL ||
    "https://opensea.io/collection/aiborn-genesis/overview";

  return (
    <section id="genesis" className="py-24 sm:py-32 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Content */}
          <div className="lg:col-span-6">
            <div className="text-xs font-mono-code text-purple-400 uppercase tracking-widest mb-3">
              / GENERATION 01
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

            <div className="mt-8 flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <CountdownTimer variant="compact" />
              </div>

              {/* OpenSea Upcoming Collection CTA Card */}
              <div className="pt-2">
                <a
                  href={openseaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-[#2081e2]/10 hover:bg-[#2081e2]/20 border border-[#2081e2]/30 hover:border-[#2081e2]/60 shadow-[0_0_25px_rgba(32,129,226,0.15)] transition-all duration-300 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#2081e2]/20 flex items-center justify-center text-[#2081E2] shrink-0">
                    <OpenSeaIcon className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono-code font-bold text-white tracking-wider">
                        OPENSEA COLLECTION
                      </span>
                      <span className="text-[9px] px-1.5 py-0.2 rounded bg-[#2081e2]/30 text-[#93c5fd] font-mono-code font-semibold uppercase tracking-wider">
                        Upcoming
                      </span>
                    </div>
                    <div className="text-[11px] font-mono-code text-zinc-400 group-hover:text-blue-200 transition-colors">
                      opensea.io/collection/aiborn-genesis
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#6cb2eb] ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
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
                  PROGRAMMATIC COMBINATION / DETERMINISTIC PYTHON ENGINE / VERIFIABLE METADATA
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
