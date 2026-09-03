"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import StatusBadge from "./StatusBadge";
import CountdownTimer from "./CountdownTimer";
import { ArrowRight, Terminal, Sparkles, ChevronRight, ShieldCheck } from "lucide-react";

export default function HeroSection() {
  const [terminalStep, setTerminalStep] = useState(0);
  const xUrl = process.env.NEXT_PUBLIC_X_URL || "https://x.com/BornAI__";

  // Typewriter step progression for AI identity generation
  useEffect(() => {
    const timer = setInterval(() => {
      setTerminalStep((prev) => (prev < 6 ? prev + 1 : prev));
    }, 1100);
    return () => clearInterval(timer);
  }, []);

  const terminalLines = [
    { text: "initializing AIBORN kernel v0.9.4...", color: "text-zinc-500" },
    { text: "> scanning agent identity space...", color: "text-purple-400" },
    { text: "> compiling synthetic traits [ORIGIN: SYNTHETIC_01]...", color: "text-cyan-400" },
    { text: "> binding neural core: NEURAL_ALPHA // 0x42f9b8...", color: "text-purple-300" },
    { text: "> assembling personality matrix: [STRATEGIST / ANALYTICAL]...", color: "text-blue-300" },
    { text: "> AI CORE: ONLINE // VERIFYING ONCHAIN IDENTITY...", color: "text-emerald-400" },
    { text: "> IDENTITY INITIALIZED: AIBORN_0421 [GENESIS ACCESS KEY]", color: "text-white font-semibold" },
  ];

  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-44 lg:pb-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Early Beta System Banner */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 mb-6 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-ping" />
              <span className="text-xs font-mono-code text-zinc-300 tracking-wider">
                AIBORN // EXPERIMENTAL BUILD
              </span>
              <span className="text-zinc-600">|</span>
              <span className="text-[11px] font-mono-code text-purple-400">
                ARC ECOSYSTEM
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4.15rem] font-extrabold tracking-[-0.03em] leading-[1.08] text-white">
              WHAT IF YOUR AI <br />
              <span className="text-gradient-purple">HAD AN IDENTITY</span> <br />
              YOU COULD OWN?
            </h1>

            {/* Tagline */}
            <p className="mt-6 text-lg sm:text-xl font-display font-medium text-purple-200/90 tracking-wide">
              Born in Python. Shaped by AI. Built on Arc.
            </p>

            {/* Supporting Copy */}
            <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl font-sans font-light">
              AIBORN explores a new generation of AI agents, each with a unique identity, 
              generated through code and AI, represented onchain through a Genesis NFT.
            </p>

            {/* Early Access Phase Note */}
            <div className="mt-6 p-3.5 rounded-lg bg-white/[0.02] border-l-2 border-purple-500/60 border-y border-r border-white/5 max-w-xl">
              <div className="flex items-center gap-2 text-xs font-mono-code text-purple-300 uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
                <span>Early Access Phase</span>
              </div>
              <p className="mt-1 text-xs text-zinc-400 font-sans leading-relaxed">
                The AIBORN application is currently being built. Genesis holders will be among the first to access the agent experience.
              </p>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <Link
                href="#genesis"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-mono-code text-sm font-semibold tracking-wider text-white bg-purple-600 hover:bg-purple-500 shadow-[0_0_30px_rgba(147,51,234,0.4)] transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>EXPLORE GENESIS</span>
                <ChevronRight className="w-4 h-4 text-white/80" />
              </Link>

              <a
                href={xUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-mono-code text-sm text-zinc-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-purple-500/40 transition-all duration-300"
              >
                <span>FOLLOW THE BUILD</span>
                <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            {/* System Status HUD Indicator */}
            <div className="mt-10 pt-6 border-t border-white/10 w-full max-w-xl">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono-code text-xs">
                <div>
                  <div className="text-zinc-500 text-[10px] uppercase">SYSTEM</div>
                  <div className="text-white font-medium mt-0.5">AIBORN // v0.9</div>
                </div>
                <div>
                  <div className="text-zinc-500 text-[10px] uppercase">STATUS</div>
                  <div className="text-emerald-400 font-medium mt-0.5 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    BETA
                  </div>
                </div>
                <div>
                  <div className="text-zinc-500 text-[10px] uppercase">GENESIS</div>
                  <div className="text-purple-300 font-medium mt-0.5">IN DEVELOPMENT</div>
                </div>
                <div>
                  <div className="text-zinc-500 text-[10px] uppercase">NETWORK</div>
                  <div className="text-cyan-400 font-medium mt-0.5">ARC</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: AI Core Initialization & Countdown */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Live Countdown Timer Component */}
            <CountdownTimer variant="hero" />

            {/* Interactive Terminal Identity Generator Visual */}
            <div className="rounded-xl hud-card hud-corners p-5 overflow-hidden shadow-2xl">
              
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/5 font-mono-code text-xs">
                <div className="flex items-center gap-2 text-zinc-400">
                  <Terminal className="w-3.5 h-3.5 text-purple-400" />
                  <span>IDENTITY_INITIALIZER.PY</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
                </div>
              </div>

              {/* Terminal Output Log */}
              <div className="space-y-2 min-h-[160px] font-mono-code text-[11px] leading-relaxed">
                {terminalLines.slice(0, terminalStep + 1).map((line, idx) => (
                  <div
                    key={idx}
                    className={`${line.color} transition-all duration-300`}
                  >
                    {line.text}
                  </div>
                ))}
                {terminalStep < 6 && (
                  <div className="inline-flex items-center gap-1 text-purple-400">
                    <span>&gt;</span>
                    <span className="w-2 h-3.5 bg-purple-400 inline-block animate-pulse" />
                  </div>
                )}
              </div>

              {/* Abstract AI Core Nexus Graphic */}
              <div className="relative mt-4 pt-4 border-t border-white/5 flex items-center justify-center h-48 sm:h-52 overflow-hidden rounded-lg bg-black/60">
                
                {/* Rotating holographic rings */}
                <div className="absolute w-40 h-40 rounded-full border border-purple-500/20 border-dashed animate-spin-slow" />
                <div className="absolute w-32 h-32 rounded-full border border-cyan-500/30 border-t-transparent animate-spin-reverse-slow" />
                <div className="absolute w-24 h-24 rounded-full border border-purple-400/40" />
                
                {/* Glowing AI Core Node */}
                <div className="relative z-10 flex flex-col items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-purple-600/30 border border-purple-400/80 flex items-center justify-center shadow-[0_0_25px_rgba(168,85,247,0.7)] animate-pulse">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <span className="mt-2.5 font-mono-code text-[10px] text-purple-300 uppercase tracking-widest">
                    AI_CORE_0421
                  </span>
                  <span className="text-[9px] font-mono-code text-zinc-400">
                    STATUS: SYNCHRONIZED
                  </span>
                </div>

                {/* Subdued HUD coordinate markers */}
                <div className="absolute top-2 left-2 font-mono-code text-[9px] text-zinc-600">
                  LAT: 44.92 // LON: 93.26
                </div>
                <div className="absolute bottom-2 right-2 font-mono-code text-[9px] text-zinc-600">
                  HASH: 0x8f2a...c014
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
