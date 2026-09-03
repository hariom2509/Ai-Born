import React from "react";
import { ArrowDown, Fingerprint, Bot, Brain, Wrench, Link as LinkIcon } from "lucide-react";

export default function TheIdeaSection() {
  const stackSteps = [
    {
      title: "IDENTITY",
      label: "STEP 01",
      desc: "Genesis onchain token providing a permanent, unique agent identity.",
      icon: Fingerprint,
      accent: "border-purple-500/40 text-purple-300",
    },
    {
      title: "AI AGENT",
      label: "STEP 02",
      desc: "Intelligent core characterized by distinct personality and instruction logic.",
      icon: Bot,
      accent: "border-cyan-500/40 text-cyan-300",
    },
    {
      title: "MEMORY",
      label: "STEP 03",
      desc: "Persistent user context and interaction history built across sessions.",
      icon: Brain,
      accent: "border-indigo-500/40 text-indigo-300",
    },
    {
      title: "TOOLS",
      label: "STEP 04",
      desc: "Execution capabilities, APIs, and authorized system workflows.",
      icon: Wrench,
      accent: "border-amber-500/40 text-amber-300",
    },
    {
      title: "ONCHAIN",
      label: "STEP 05",
      desc: "Agentic infrastructure built for the emerging Arc ecosystem.",
      icon: LinkIcon,
      accent: "border-emerald-500/40 text-emerald-300",
    },
  ];

  return (
    <section id="the-idea" className="py-24 sm:py-32 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-mono-code text-purple-400 uppercase tracking-widest mb-3">
            // ARCHITECTURE & VISION
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            THE IDEA
          </h2>
          <div className="mt-6 space-y-4 text-zinc-400 text-base sm:text-lg leading-relaxed font-light">
            <p>
              AI agents are becoming increasingly capable. They can reason, remember, use tools and execute complex tasks.
            </p>
            <p>
              But most agents still exist entirely inside the application that created them, ephemeral, locked into a single database, and disconnected from your ownership.
            </p>
            <p className="text-white font-medium text-lg sm:text-xl pt-2">
              AIBORN explores a different direction: <br className="hidden sm:inline" />
              <span className="text-gradient-purple">
                What if an AI agent had a persistent identity from the moment it was born?
              </span>
            </p>
          </div>
        </div>

        {/* Visual Architecture Flow Diagram */}
        <div className="mt-16 sm:mt-20">
          <div className="p-6 sm:p-10 rounded-2xl hud-card hud-corners">
            <div className="text-xs font-mono-code text-zinc-400 uppercase tracking-widest mb-8 text-center">
              SYSTEM TOPOLOGY // FROM IDENTIFIER TO AUTONOMY
            </div>

            {/* Desktop horizontal flow / Mobile vertical flow */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
              {stackSteps.map((step, idx) => {
                const IconComponent = step.icon;
                return (
                  <div key={step.title} className="flex flex-col items-center text-center relative group">
                    
                    {/* Node Card */}
                    <div className="w-full p-5 rounded-xl bg-black/60 border border-white/8 hover:border-purple-500/50 transition-all duration-300 flex flex-col items-center">
                      <div className="text-[10px] font-mono-code text-zinc-400 tracking-wider mb-2">
                        {step.label}
                      </div>
                      <div className={`p-3 rounded-lg bg-white/[0.03] border ${step.accent} mb-3 group-hover:scale-110 transition-transform`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <h3 className="font-display font-bold text-base text-white tracking-wider">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-xs text-zinc-400 leading-relaxed font-sans">
                        {step.desc}
                      </p>
                    </div>

                    {/* Arrow connector between nodes */}
                    {idx < stackSteps.length - 1 && (
                      <div className="hidden md:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 text-purple-400/60 font-mono-code text-sm">
                        →
                      </div>
                    )}

                    {idx < stackSteps.length - 1 && (
                      <div className="md:hidden flex justify-center py-2 text-purple-400/60">
                        <ArrowDown className="w-4 h-4 animate-bounce" />
                      </div>
                    )}

                  </div>
                );
              })}
            </div>

            {/* Bottom summary statement */}
            <div className="mt-10 pt-6 border-t border-white/5 text-center font-mono-code text-xs text-zinc-400">
              PERSISTENT OWNERSHIP // PORTABLE INTELLIGENCE // ONCHAIN VERIFIABLE
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
