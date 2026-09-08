import React from "react";
import StatusBadge from "./StatusBadge";

export default function RoadmapSection() {
  const phases = [
    {
      number: "PHASE 01",
      title: "ORIGIN",
      status: "ACTIVE",
      statusVariant: "active" as const,
      desc: "AIBORN introduction, architecture definition, community formation, and Genesis campaign launch.",
      highlights: ["Concept verification", "Python generation system", "Beta web presence"],
    },
    {
      number: "PHASE 02",
      title: "GENESIS",
      status: "ACTIVE",
      statusVariant: "active" as const,
      desc: "5,000 Genesis identities minted. Programmable traits, rarity matrix, and animated onchain artwork.",
      highlights: ["5,000 agent supply", "Trait distribution", "Mint event (16 Sept 2026)"],
    },
    {
      number: "PHASE 03",
      title: "REVEAL",
      status: "IN DEVELOPMENT",
      statusVariant: "dev" as const,
      desc: "Global reveal event. Traits, rarity tiers, and unique AI agent names are officially decrypted and displayed.",
      highlights: ["Metadata activation", "Visual reveal", "Identity mapping"],
    },
    {
      number: "PHASE 04",
      title: "APPLICATION",
      status: "IN DEVELOPMENT",
      statusVariant: "dev" as const,
      desc: "AIBORN application beta opens to Genesis holders. Wallet-based verification connects holders to their agents.",
      highlights: ["Wallet auth gate", "NFT verification", "Early app beta"],
    },
    {
      number: "PHASE 05",
      title: "AGENTS",
      status: "PLANNED",
      statusVariant: "planned" as const,
      desc: "Direct agent interaction. Activation of behavioral matrix, persistent memory context, and authorized tools.",
      highlights: ["Memory persistence", "Personality behavior", "API sandboxes"],
    },
    {
      number: "PHASE 06",
      title: "ONCHAIN AGENTS",
      status: "PLANNED",
      statusVariant: "future" as const,
      desc: "Explore controlled interactions between AI agents and onchain Arc/Robinhood infrastructure with strict permission boundaries.",
      highlights: ["Arc/Robinhood primitives", "Permission limits", "Agent transactions"],
    },
  ];

  return (
    <section id="roadmap" className="py-24 sm:py-32 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-mono-code text-purple-400 uppercase tracking-widest mb-3">
            / DEVELOPMENT PROGRESSION
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            ROADMAP
          </h2>
          <p className="mt-4 text-zinc-400 text-base sm:text-lg leading-relaxed font-light">
            A progressive roadmap built around technical validation rather than arbitrary speculative dates. 
            Phases advance as foundational engineering milestones are achieved.
          </p>
        </div>

        {/* Phases Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {phases.map((phase) => (
            <div
              key={phase.number}
              className="p-6 sm:p-7 rounded-xl hud-card hud-corners flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-white/5">
                  <span className="text-xs font-mono-code text-zinc-500">
                    {phase.number}
                  </span>
                  <StatusBadge label={phase.status} variant={phase.statusVariant} />
                </div>

                <h3 className="mt-4 font-display font-bold text-xl text-white tracking-wide">
                  {phase.title}
                </h3>

                <p className="mt-3 text-sm text-zinc-400 leading-relaxed font-sans font-light">
                  {phase.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 space-y-1.5">
                {phase.highlights.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs font-mono-code text-zinc-300">
                    <span className="w-1 h-1 rounded-full bg-purple-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 p-4 rounded-xl bg-white/[0.02] border border-white/5 text-center font-mono-code text-xs text-zinc-400">
          ROADMAP ADVANCEMENT IS ANNOUNCED VIA OFFICIAL COMMUNICATION CHANNELS AS RELEASES ARE TESTED
        </div>

      </div>
    </section>
  );
}
