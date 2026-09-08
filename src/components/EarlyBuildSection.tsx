import React from "react";
import Link from "next/link";
import OpenSeaIcon from "./OpenSeaIcon";
import { ArrowRight, BookOpen, ArrowUpRight } from "lucide-react";

export default function EarlyBuildSection() {
  const xUrl = process.env.NEXT_PUBLIC_X_URL || "https://x.com/BornAI__";
  const openseaUrl =
    process.env.NEXT_PUBLIC_OPENSEA_URL ||
    "https://opensea.io/collection/aiborn-genesis/overview";

  return (
    <section className="py-24 sm:py-36 border-t border-white/5 relative overflow-hidden">
      
      {/* Centered purple glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-purple-900/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 mb-8 backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-mono-code text-zinc-300 tracking-widest uppercase">
            AIBORN / SYSTEM STATUS: EXPERIMENTAL BETA
          </span>
        </div>

        {/* Large Headline */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold text-white tracking-tight">
          YOU&apos;RE EARLY.
        </h2>

        {/* Copy */}
        <div className="mt-8 space-y-3 text-lg sm:text-xl text-zinc-300 max-w-2xl mx-auto font-light leading-relaxed">
          <p>AIBORN is still being built.</p>
          <p>This is the experimental phase.</p>
          <p>The Genesis collection is the first step.</p>
          <p className="text-white font-medium">The application comes next.</p>
          <p className="text-purple-300 font-mono-code text-base sm:text-lg pt-2">
            Follow the build. Watch the agents come to life.
          </p>
        </div>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={openseaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-mono-code text-sm font-semibold tracking-wider text-white bg-[#2081e2]/20 hover:bg-[#2081e2]/30 border border-[#2081e2]/40 hover:border-[#2081e2]/80 shadow-[0_0_35px_rgba(32,129,226,0.3)] transition-all duration-300 transform hover:-translate-y-0.5 group"
          >
            <OpenSeaIcon className="w-4 h-4 text-[#2081E2]" />
            <span>OPENSEA COLLECTION (UPCOMING)</span>
            <ArrowUpRight className="w-4 h-4 text-blue-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <a
            href={xUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-mono-code text-sm font-semibold tracking-wider text-white bg-purple-600 hover:bg-purple-500 shadow-[0_0_35px_rgba(147,51,234,0.4)] transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <span>FOLLOW @BornAI__</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <Link
            href="/docs"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-mono-code text-sm text-zinc-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-purple-500/40 transition-all duration-300"
          >
            <BookOpen className="w-4 h-4 text-purple-400" />
            <span>GENESIS DOCS</span>
            <ArrowRight className="w-4 h-4 text-zinc-400" />
          </Link>
        </div>

      </div>
    </section>
  );
}

