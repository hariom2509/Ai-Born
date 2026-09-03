import React from "react";
import { Compass, Zap, Activity, Box, Sparkles, Award } from "lucide-react";

export default function TraitsSection() {
  const traits = [
    {
      number: "01",
      name: "ORIGIN",
      tag: "FOUNDATIONAL SIGNATURE",
      desc: "The agent's origin signature. Establishes the foundational technical heritage and system lineage.",
      examples: ["Core", "Synthetic", "Experimental", "Autonomous", "Unknown"],
      icon: Compass,
      borderGlow: "group-hover:border-purple-500/50",
      accentColor: "text-purple-400",
    },
    {
      number: "02",
      name: "CORE",
      tag: "CENTRAL INTELLIGENCE",
      desc: "The defining AI core. Represents the conceptual and visual center of the agent's computation engine.",
      examples: ["Neural Alpha", "Nexus Prime", "Quantum Mesh", "Void Engine", "Sovereign"],
      icon: Zap,
      borderGlow: "group-hover:border-cyan-500/50",
      accentColor: "text-cyan-400",
    },
    {
      number: "03",
      name: "PERSONALITY",
      tag: "BEHAVIORAL MATRIX",
      desc: "How the agent behaves. Not merely cosmetic; directly influences how the AI agent communicates and solves problems.",
      examples: ["Explorer", "Builder", "Strategist", "Creator", "Observer"],
      icon: Activity,
      borderGlow: "group-hover:border-indigo-500/50",
      accentColor: "text-indigo-400",
    },
    {
      number: "04",
      name: "FRAME",
      tag: "STRUCTURAL LAYER",
      desc: "The structural visual layer surrounding the agent, defining architectural silhouette and chassis.",
      examples: ["Carbon Mono", "Exo Lattice", "Quantum Void", "Hyper Ring", "Spectral"],
      icon: Box,
      borderGlow: "group-hover:border-pink-500/50",
      accentColor: "text-pink-400",
    },
    {
      number: "05",
      name: "ENERGY",
      tag: "DYNAMIC SIGNATURE",
      desc: "The agent's visual energy signature. Expressed through animated particle emissions, light pulses, and motion.",
      examples: ["Violet Pulse", "Cyan Plasma", "Solar Flare", "Dark Matter", "Zero Wave"],
      icon: Sparkles,
      borderGlow: "group-hover:border-amber-500/50",
      accentColor: "text-amber-400",
    },
    {
      number: "06",
      name: "CLASS",
      tag: "RARITY TIER",
      desc: "The overall rarity tier calculated by the distribution and algorithmic rarity of combined traits.",
      examples: ["Common", "Uncommon", "Rare", "Epic", "Legendary"],
      icon: Award,
      borderGlow: "group-hover:border-emerald-500/50",
      accentColor: "text-emerald-400",
    },
  ];

  return (
    <section className="py-24 sm:py-32 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-mono-code text-purple-400 uppercase tracking-widest mb-3">
            // PROGRAMMABLE TAXONOMY
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            THE TRAIT SYSTEM
          </h2>
          <p className="mt-4 text-zinc-400 text-base sm:text-lg leading-relaxed font-light">
            AIBORN Genesis uses six primary trait categories. Each trait contains multiple distinct variants, 
            programmatically assembled into a singular, balanced agent identity.
          </p>
        </div>

        {/* 6 Trait Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {traits.map((trait) => {
            const IconComp = trait.icon;
            return (
              <div
                key={trait.name}
                className={`group p-6 sm:p-7 rounded-xl hud-card hud-corners flex flex-col justify-between ${trait.borderGlow}`}
              >
                <div>
                  {/* Top Bar with Number and Tag */}
                  <div className="flex items-center justify-between pb-3 border-b border-white/5">
                    <span className="font-mono-code text-xs text-zinc-400">
                      TRAIT // {trait.number}
                    </span>
                    <span className="font-mono-code text-[10px] text-purple-400/80 tracking-wider">
                      {trait.tag}
                    </span>
                  </div>

                  {/* Trait Header */}
                  <div className="mt-5 flex items-center gap-3">
                    <div className={`p-2.5 rounded-lg bg-white/[0.03] border border-white/10 ${trait.accentColor} group-hover:scale-110 transition-transform`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-bold text-xl text-white tracking-wide">
                      {trait.name}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="mt-3 text-sm text-zinc-400 leading-relaxed font-sans">
                    {trait.desc}
                  </p>
                </div>

                {/* Trait Variants List */}
                <div className="mt-6 pt-4 border-t border-white/5">
                  <div className="text-[10px] font-mono-code text-zinc-400 uppercase tracking-wider mb-2">
                    VARIANT SAMPLES:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {trait.examples.map((item) => (
                      <span
                        key={item}
                        className="px-2 py-0.5 rounded text-[11px] font-mono-code bg-white/[0.04] text-zinc-300 border border-white/5"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Note on combination */}
        <div className="mt-10 p-4 rounded-xl bg-purple-950/10 border border-purple-500/20 text-center font-mono-code text-xs text-purple-300/80">
          ALL 5,000 IDENTITIES ARE DETERMINISTICALLY GENERATED THROUGH CONTROLLED PYTHON COMBINATION LOGIC
        </div>

      </div>
    </section>
  );
}
