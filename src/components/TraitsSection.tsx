"use client";

import React, { useState } from "react";
import { Compass, Zap, Activity, Box, Sparkles, Award, Code2, ChevronRight, X, ExternalLink, Maximize2 } from "lucide-react";

interface OriginArchetype {
  id: string;
  num: string;
  name: string;
  subtitle: string;
  className: string;
  purpose: string;
  coreOrLogic: string;
  coreLabel: string;
  tools: string[];
  flow: string[];
  quote: string;
  image: string;
  accent: {
    text: string;
    border: string;
    bg: string;
    badgeBg: string;
    glow: string;
  };
  pythonCode: string;
}

const ORIGIN_ARCHETYPES: OriginArchetype[] = [
  {
    id: "origin",
    num: "01",
    name: "ORIGIN",
    subtitle: "[ Logic | Structure | Infinite ]",
    className: "Origin(Agent)",
    purpose: "understand",
    coreLabel: "logic",
    coreOrLogic: "infinite",
    tools: ["Think()", "Observe()"],
    flow: ["Idea", "Code", "Agent", "Reality"],
    quote: "Some questions deserve a higher intelligence. Human questions, AI exploration, a higher tomorrow.",
    image: "/origins/01-origin.jpg",
    accent: {
      text: "text-cyan-400",
      border: "border-cyan-500/40",
      bg: "bg-cyan-500/10",
      badgeBg: "bg-cyan-500/20 text-cyan-300",
      glow: "shadow-[0_0_25px_rgba(6,182,212,0.25)]",
    },
    pythonCode: `class Origin(Agent):
    def __init__(self):
        self.purpose = "understand"
        self.logic = "infinite"
        self.tools = [Think(), Observe()]

# the first agent
origin = Origin()
origin.run()
>>> Thinking...
>>> Observing...
>>> Shaping reality...`,
  },
  {
    id: "harmony",
    num: "02",
    name: "HARMONY",
    subtitle: "[ Balance | Learning | Evolution ]",
    className: "Harmony(Agent)",
    purpose: "align",
    coreLabel: "core",
    coreOrLogic: "balance",
    tools: ["Collaborate()", "Reflect()"],
    flow: ["Input", "Reason", "Plan", "Execute", "Evolve"],
    quote: "Different minds, same direction, higher intelligence. People, ideas, agents, data, a higher tomorrow.",
    image: "/origins/02-harmony.jpg",
    accent: {
      text: "text-amber-300",
      border: "border-amber-400/40",
      bg: "bg-amber-400/10",
      badgeBg: "bg-amber-400/20 text-amber-200",
      glow: "shadow-[0_0_25px_rgba(251,191,36,0.25)]",
    },
    pythonCode: `class Harmony(Agent):
    def __init__(self):
        self.purpose = "align"
        self.core = "balance"
        self.tools = [Collaborate(), Reflect()]

# balance intelligence
harmony = Harmony()
harmony.run()
>>> Aligning...
>>> Balancing...
>>> Evolving...`,
  },
  {
    id: "execution",
    num: "03",
    name: "EXECUTION",
    subtitle: "[ Action | Precision | Impact ]",
    className: "Execution(Agent)",
    purpose: "act",
    coreLabel: "core",
    coreOrLogic: "precision",
    tools: ["Plan()", "Execute()", "Validate()"],
    flow: ["Plan", "Execute", "Validate", "Deploy"],
    quote: "Ideas into actions. Agents for a new reality. Precision creates real impact.",
    image: "/origins/03-execution.jpg",
    accent: {
      text: "text-orange-400",
      border: "border-orange-500/40",
      bg: "bg-orange-500/10",
      badgeBg: "bg-orange-500/20 text-orange-300",
      glow: "shadow-[0_0_25px_rgba(249,115,22,0.25)]",
    },
    pythonCode: `class Execution(Agent):
    def __init__(self):
        self.purpose = "act"
        self.core = "precision"
        self.tools = [Plan(), Execute(), Validate()]

# from idea to impact
execution = Execution()
execution.run()
>>> Planning...
>>> Executing...
>>> Validating...
>>> Impact.`,
  },
  {
    id: "resilience",
    num: "04",
    name: "RESILIENCE",
    subtitle: "[ Endure | Adjust | Overcome ]",
    className: "Resilience(Agent)",
    purpose: "endure",
    coreLabel: "core",
    coreOrLogic: "adapt",
    tools: ["Recover()", "Retry()"],
    flow: ["Failure", "Learning", "Adaptation", "Strength"],
    quote: "Resilience turns errors into progress. Turn chaos into strength. Same challenges, a stronger agent.",
    image: "/origins/04-resilience.jpg",
    accent: {
      text: "text-blue-400",
      border: "border-blue-500/40",
      bg: "bg-blue-500/10",
      badgeBg: "bg-blue-500/20 text-blue-300",
      glow: "shadow-[0_0_25px_rgba(59,130,246,0.25)]",
    },
    pythonCode: `class Resilience(Agent):
    def __init__(self):
        self.purpose = "endure"
        self.core = "adapt"
        self.tools = [Recover(), Retry()]

# turn chaos into strength
resilience = Resilience()
resilience.run()
>>> Adapting...
>>> Recovering...
>>> Overcoming...`,
  },
  {
    id: "creativity",
    num: "05",
    name: "CREATIVITY",
    subtitle: "[ Imagine | Build | Transform ]",
    className: "Creativity(Agent)",
    purpose: "imagine",
    coreLabel: "core",
    coreOrLogic: "create",
    tools: ["Generate()", "Refine()", "Visualize()"],
    flow: ["Prompt", "Generate", "Iterate", "Refine", "Create"],
    quote: "Ideas into reality. Latent space synthesis. Same thoughts, new worlds.",
    image: "/origins/05-creativity.jpg",
    accent: {
      text: "text-purple-300",
      border: "border-purple-400/40",
      bg: "bg-purple-500/10",
      badgeBg: "bg-purple-500/20 text-purple-200",
      glow: "shadow-[0_0_25px_rgba(168,85,247,0.25)]",
    },
    pythonCode: `class Creativity(Agent):
    def __init__(self):
        self.purpose = "imagine"
        self.core = "create"
        self.tools = [Generate(), Refine(), Visualize()]

# ideas into reality
creativity = Creativity()
creativity.run()
>>> Imagining...
>>> Generating...
>>> Refining...
>>> Creating...`,
  },
];

export default function TraitsSection() {
  const [selectedOrigin, setSelectedOrigin] = useState<OriginArchetype>(ORIGIN_ARCHETYPES[0]);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const traits = [
    {
      number: "01",
      name: "ORIGIN",
      tag: "FOUNDATIONAL SIGNATURE",
      desc: "The agent's origin signature. Establishes foundational lineage and runtime behavior from five archetypes.",
      examples: ["Origin", "Harmony", "Execution", "Resilience", "Creativity"],
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
    <section id="traits" className="py-24 sm:py-32 border-t border-white/5 relative">
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
                        className={`px-2 py-0.5 rounded text-[11px] font-mono-code border transition-colors ${
                          trait.name === "ORIGIN"
                            ? "bg-purple-500/10 text-purple-200 border-purple-500/30 hover:border-purple-400 cursor-pointer"
                            : "bg-white/[0.04] text-zinc-300 border-white/5"
                        }`}
                        onClick={() => {
                          if (trait.name === "ORIGIN") {
                            const found = ORIGIN_ARCHETYPES.find((o) => o.name.toLowerCase() === item.toLowerCase());
                            if (found) setSelectedOrigin(found);
                          }
                        }}
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

        {/* ------------------------------------------------------------- */}
        {/* NEW DEDICATED SHOWCASE: THE 5 OFFICIAL ORIGIN ARCHETYPES */}
        {/* ------------------------------------------------------------- */}
        <div className="mt-20 pt-16 border-t border-white/10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <div className="text-xs font-mono-code text-cyan-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                <Code2 className="w-4 h-4" />
                // TRAIT 01 DEEP DIVE
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
                THE 5 ORIGIN ARCHETYPES
              </h3>
              <p className="mt-2 text-zinc-400 text-sm sm:text-base max-w-2xl font-light">
                Every Genesis identity descends from one of five foundational Python agent classes. 
                Select an archetype below to inspect its neural architecture, tools, and visual identity.
              </p>
            </div>

            {/* Archetype Quick Selector Tabs */}
            <div className="flex flex-wrap gap-2">
              {ORIGIN_ARCHETYPES.map((arch) => {
                const isSelected = selectedOrigin.id === arch.id;
                return (
                  <button
                    key={arch.id}
                    onClick={() => setSelectedOrigin(arch)}
                    className={`px-3.5 py-2 rounded-lg font-mono-code text-xs transition-all flex items-center gap-2 border ${
                      isSelected
                        ? `${arch.accent.bg} ${arch.accent.border} text-white ${arch.accent.glow}`
                        : "bg-white/[0.02] border-white/10 text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.05]"
                    }`}
                  >
                    <span className="opacity-60">{arch.num}</span>
                    <span className="font-semibold">{arch.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Archetype Interactive Stage */}
          <div className={`rounded-2xl border ${selectedOrigin.accent.border} bg-black/60 p-6 sm:p-8 backdrop-blur-xl relative overflow-hidden transition-all duration-300`}>
            {/* Background ambient glow */}
            <div className={`absolute -top-32 -right-32 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none ${selectedOrigin.accent.bg}`} />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              
              {/* Left: High-Res Poster Showcase Card */}
              <div className="lg:col-span-5 flex flex-col items-center">
                <div 
                  className="relative group cursor-pointer w-full max-w-[340px] rounded-xl overflow-hidden border border-white/15 shadow-2xl transition-transform duration-300 hover:scale-[1.02]"
                  onClick={() => setLightboxImage(selectedOrigin.image)}
                >
                  <img
                    src={selectedOrigin.image}
                    alt={`AIBORN Origin Archetype ${selectedOrigin.num} ${selectedOrigin.name}`}
                    className="w-full h-auto object-cover rounded-xl"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 text-white">
                    <Maximize2 className="w-8 h-8 text-white drop-shadow-md" />
                    <span className="text-xs font-mono-code tracking-widest uppercase bg-black/80 px-3 py-1 rounded-full border border-white/20">
                      CLICK TO ENLARGE POSTER
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-white/10 text-[10px] font-mono-code text-zinc-300">
                    <span>{selectedOrigin.num} // {selectedOrigin.name}</span>
                    <span className={selectedOrigin.accent.text}>POSTER SPEC</span>
                  </div>
                </div>
                <div className="mt-3 text-center text-[11px] font-mono-code text-zinc-500">
                  OFFICIAL GENESIS ARTWORK // CLICK POSTER TO VIEW IN FULL RESOLUTION
                </div>
              </div>

              {/* Right: Technical Blueprint & Python Core */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                
                {/* Header & Tagline */}
                <div>
                  <div className="flex items-center gap-3">
                    <span className={`px-2.5 py-1 rounded font-mono-code text-xs font-bold ${selectedOrigin.accent.badgeBg}`}>
                      ARCHETYPE {selectedOrigin.num}
                    </span>
                    <span className="font-mono-code text-xs text-zinc-400">
                      CLASS: {selectedOrigin.className}
                    </span>
                  </div>

                  <h4 className="mt-3 text-3xl sm:text-4xl font-display font-black text-white tracking-wide">
                    {selectedOrigin.name}
                  </h4>
                  <p className={`mt-1 font-mono-code text-sm sm:text-base font-semibold ${selectedOrigin.accent.text}`}>
                    {selectedOrigin.subtitle}
                  </p>
                  <p className="mt-3 text-sm text-zinc-300 leading-relaxed font-sans font-light italic border-l-2 border-white/20 pl-3">
                    &ldquo;{selectedOrigin.quote}&rdquo;
                  </p>
                </div>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                    <div className="text-[10px] font-mono-code text-zinc-400 uppercase">PURPOSE</div>
                    <div className="text-sm font-mono-code text-white font-bold truncate mt-0.5">
                      &quot;{selectedOrigin.purpose}&quot;
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                    <div className="text-[10px] font-mono-code text-zinc-400 uppercase">{selectedOrigin.coreLabel.toUpperCase()}</div>
                    <div className={`text-sm font-mono-code font-bold truncate mt-0.5 ${selectedOrigin.accent.text}`}>
                      &quot;{selectedOrigin.coreOrLogic}&quot;
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5 col-span-2 sm:col-span-1">
                    <div className="text-[10px] font-mono-code text-zinc-400 uppercase">BOUND TOOLS</div>
                    <div className="text-xs font-mono-code text-zinc-200 truncate mt-0.5">
                      {selectedOrigin.tools.join(", ")}
                    </div>
                  </div>
                </div>

                {/* Execution Pipeline Flow */}
                <div>
                  <div className="text-[10px] font-mono-code text-zinc-400 uppercase tracking-wider mb-2">
                    PIPELINE ARCHITECTURE:
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5 font-mono-code text-xs">
                    {selectedOrigin.flow.map((step, idx) => (
                      <React.Fragment key={step}>
                        <span className="px-2.5 py-1 rounded bg-white/[0.05] border border-white/10 text-white">
                          {step}
                        </span>
                        {idx < selectedOrigin.flow.length - 1 && (
                          <span className="text-zinc-500">&rarr;</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Python Agent Code Block */}
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono-code text-zinc-400 mb-1.5">
                    <span>KERNEL SIGNATURE // PYTHON 3.12</span>
                    <span className={selectedOrigin.accent.text}>REPRODUCIBLE RUNTIME</span>
                  </div>
                  <pre className="p-4 rounded-xl bg-black/80 border border-white/10 text-xs sm:text-[13px] font-mono-code text-zinc-300 overflow-x-auto leading-relaxed">
                    <code>{selectedOrigin.pythonCode}</code>
                  </pre>
                </div>

                {/* Bottom archetypes mini-row to quickly switch */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="text-[11px] font-mono-code text-zinc-400">
                    ALL 5 ARCHETYPES PROGRAMMED DETERMINISTICALLY FOR ARC GENESIS
                  </div>
                  <div className="flex gap-2">
                    {ORIGIN_ARCHETYPES.map((o) => (
                      <button
                        key={o.id}
                        onClick={() => setSelectedOrigin(o)}
                        className={`w-7 h-7 rounded-md font-mono-code text-xs flex items-center justify-center border transition-all ${
                          selectedOrigin.id === o.id
                            ? `${o.accent.bg} ${o.accent.border} text-white font-bold`
                            : "border-white/10 text-zinc-400 hover:text-white"
                        }`}
                        title={`${o.num} ${o.name}`}
                      >
                        {o.num}
                      </button>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Note on combination */}
        <div className="mt-12 p-4 rounded-xl bg-purple-950/10 border border-purple-500/20 text-center font-mono-code text-xs text-purple-300/80">
          ALL 5,000 IDENTITIES ARE DETERMINISTICALLY GENERATED THROUGH CONTROLLED PYTHON COMBINATION LOGIC
        </div>

      </div>

      {/* Lightbox Modal for Poster Inspection */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setLightboxImage(null)}
        >
          <div className="relative max-w-2xl w-full max-h-[90vh] flex flex-col items-center">
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute -top-12 right-0 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={lightboxImage}
              alt="High resolution AIBORN Origin Poster"
              className="w-auto h-auto max-h-[85vh] object-contain rounded-xl border border-white/20 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
}
