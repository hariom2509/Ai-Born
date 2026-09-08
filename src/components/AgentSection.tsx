import React from "react";
import StatusBadge from "./StatusBadge";
import { MessageSquare, BrainCircuit, UserCheck, Sliders, Wrench, Coins } from "lucide-react";

export default function AgentSection() {
  const capabilities = [
    {
      title: "Conversation",
      status: "PLANNED",
      statusVariant: "planned" as const,
      desc: "Natural language reasoning and interactive dialogue conditioned on your agent's unique behavioral matrix.",
      icon: MessageSquare,
    },
    {
      title: "Memory",
      status: "PLANNED",
      statusVariant: "planned" as const,
      desc: "Persistent state preservation that remembers conversations, context, and project instructions across sessions.",
      icon: BrainCircuit,
    },
    {
      title: "Personality",
      status: "PLANNED",
      statusVariant: "planned" as const,
      desc: "Distinct tone, analytical style, and problem-solving patterns derived from your Genesis trait signature.",
      icon: UserCheck,
    },
    {
      title: "Agent Configuration",
      status: "PLANNED",
      statusVariant: "planned" as const,
      desc: "Customizable operating parameters, knowledge embeddings, and user-defined workflow instructions.",
      icon: Sliders,
    },
    {
      title: "Approved Tools",
      status: "PLANNED",
      statusVariant: "planned" as const,
      desc: "Integration with verified external APIs, code execution sandboxes, and data ingestion pipelines.",
      icon: Wrench,
    },
    {
      title: "Onchain Capabilities",
      status: "FUTURE",
      statusVariant: "future" as const,
      desc: "Controlled interactions with programmable Arc/Robinhood financial primitives and smart contracts via strict permission boundaries.",
      icon: Coins,
    },
  ];

  return (
    <section id="agents" className="py-24 sm:py-32 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-mono-code text-purple-400 uppercase tracking-widest mb-3">
            / INTENDED EXPERIENCE
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            YOUR AGENT. YOUR IDENTITY.
          </h2>
          <p className="mt-4 text-zinc-400 text-base sm:text-lg leading-relaxed font-light">
            The future AIBORN application is designed to give you direct access to your agent. 
            Below are the intended capabilities being engineered for the platform roadmap.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap) => {
            const IconComp = cap.icon;
            return (
              <div
                key={cap.title}
                className="p-6 sm:p-7 rounded-xl hud-card hud-corners flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-white/5">
                    <div className="p-2 rounded-lg bg-white/[0.03] border border-white/10 text-purple-400">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <StatusBadge label={cap.status} variant={cap.statusVariant} />
                  </div>

                  <h3 className="mt-5 font-display font-bold text-xl text-white">
                    {cap.title}
                  </h3>

                  <p className="mt-3 text-sm text-zinc-400 leading-relaxed font-sans font-light">
                    {cap.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono-code text-zinc-400">
                  <span>STATE: IN ROADMAP</span>
                  <span>TIER: {cap.status}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Clear Planned Notice */}
        <div className="mt-10 p-4 rounded-xl bg-white/[0.02] border border-white/5 text-center font-mono-code text-xs text-zinc-400">
          NOTE: CAPABILITIES ARE PLANNED / FUTURE SPECIFICATIONS CURRENTLY IN ACTIVE DEVELOPMENT AND ARE NOT YET LIVE.
        </div>

      </div>
    </section>
  );
}
