import React from "react";
import StatusBadge from "./StatusBadge";
import { Wallet, CheckCircle, Unlock, MessageSquareCode, Sparkles, ArrowRight } from "lucide-react";

export default function UtilitySection() {
  const flowSteps = [
    {
      num: "01",
      title: "GENESIS NFT",
      subtitle: "Onchain Identity Asset",
      icon: Sparkles,
      color: "text-purple-400",
    },
    {
      num: "02",
      title: "CONNECT WALLET",
      subtitle: "Web3 Authentication",
      icon: Wallet,
      color: "text-blue-400",
    },
    {
      num: "03",
      title: "VERIFY OWNERSHIP",
      subtitle: "Cryptographic Proof",
      icon: CheckCircle,
      color: "text-emerald-400",
    },
    {
      num: "04",
      title: "UNLOCK AGENT",
      subtitle: "Map Token to Agent Engine",
      icon: Unlock,
      color: "text-amber-400",
    },
    {
      num: "05",
      title: "INTERACT",
      subtitle: "Memory, Tools & Tasks",
      icon: MessageSquareCode,
      color: "text-cyan-400",
    },
  ];

  return (
    <section className="py-24 sm:py-32 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header & Disclaimer */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="text-xs font-mono-code text-purple-400 uppercase tracking-widest mb-3">
              / UTILITY & ACCESS ARCHITECTURE
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
              THE NFT IS THE BEGINNING.
            </h2>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-amber-950/20 border border-amber-500/30">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
            <div>
              <div className="text-[11px] font-mono-code text-amber-300 font-bold tracking-wider">
                APPLICATION: IN DEVELOPMENT
              </div>
              <div className="text-[10px] text-zinc-400">
                Genesis holders receive earliest access upon release
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Copy */}
        <div className="mt-8 max-w-3xl text-zinc-400 text-base sm:text-lg leading-relaxed font-light">
          <p>
            The future AIBORN application will use Genesis NFT ownership as the authenticating entry point to the agent experience.
          </p>
          <p className="mt-3">
            Holders will connect the wallet containing their Genesis identity. The platform verifies ownership onchain and unlocks the corresponding individual AI agent, initialized with its unique traits, personality profile, and persistent context.
          </p>
        </div>

        {/* 5-Step Visual Flow Stepper */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl hud-card hud-corners">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {flowSteps.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <div
                  key={step.num}
                  className="flex flex-col items-center text-center p-4 rounded-xl bg-black/60 border border-white/5 hover:border-purple-500/30 transition-all relative group"
                >
                  <div className="text-[10px] font-mono-code text-zinc-400 tracking-wider mb-2">
                    PHASE {step.num}
                  </div>
                  <div className={`p-3 rounded-xl bg-white/[0.03] border border-white/10 ${step.color} mb-3 group-hover:scale-110 transition-transform`}>
                    <IconComp className="w-6 h-6" />
                  </div>
                  <div className="font-display font-bold text-sm sm:text-base text-white tracking-wide">
                    {step.title}
                  </div>
                  <div className="mt-1 text-xs text-zinc-400 font-mono-code">
                    {step.subtitle}
                  </div>

                  {idx < flowSteps.length - 1 && (
                    <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-zinc-600 font-mono-code text-sm">
                      →
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-8 pt-4 border-t border-white/5 text-center text-xs font-mono-code text-zinc-400">
            OWNERSHIP CREDENTIAL / ZERO CENTRALIZED PASSWORDS / VERIFIABLE ONCHAIN ACCESS
          </div>
        </div>

      </div>
    </section>
  );
}
