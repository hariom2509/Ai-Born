"use client";

import React from "react";
import Link from "next/link";
import StatusBadge from "./StatusBadge";
import OpenSeaIcon from "./OpenSeaIcon";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const xUrl = process.env.NEXT_PUBLIC_X_URL || "https://x.com/BornAI__";
  const openseaUrl =
    process.env.NEXT_PUBLIC_OPENSEA_URL ||
    "https://opensea.io/collection/aiborn-genesis/overview";

  const handleScrollToGenesis = (e: React.MouseEvent) => {
    if (typeof window !== "undefined" && (window.location.pathname === "/" || window.location.pathname === "")) {
      const elem = document.getElementById("genesis");
      if (elem) {
        e.preventDefault();
        elem.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", "#genesis");
      }
    }
  };

  return (
    <footer className="border-t border-white/8 py-16 sm:py-20 bg-[#030306] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          {/* Left: Brand + Tagline + Beta Status */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-lg bg-zinc-950 border border-purple-500/40 flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-purple-400" />
              </div>
              <span className="font-display font-bold text-xl tracking-[0.2em] text-white">
                AIBORN
              </span>
            </div>

            <div className="font-mono-code text-xs text-zinc-400 leading-relaxed space-y-1">
              <div>Python-born.</div>
              <div>AI-shaped.</div>
              <div>Arc/Robinhood-native.</div>
            </div>

            <div className="pt-2">
              <StatusBadge label="STATUS: BETA" variant="beta" />
            </div>
          </div>

          {/* Right: Minimal Navigation */}
          <div className="md:col-span-6 flex flex-col md:items-end justify-between h-full space-y-6">
            <div className="flex flex-wrap items-center gap-5 sm:gap-6 font-mono-code text-xs">
              <a
                href={openseaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6cb2eb] hover:text-white flex items-center gap-1.5 transition-colors group"
                title="View Upcoming Genesis Collection on OpenSea"
              >
                <OpenSeaIcon className="w-3.5 h-3.5 text-[#2081E2]" />
                <span>OpenSea (Upcoming)</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href={xUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white flex items-center gap-1 transition-colors"
              >
                <span>X (@BornAI__)</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
              </a>

              <Link
                href="/#genesis"
                onClick={handleScrollToGenesis}
                className="text-zinc-400 hover:text-white transition-colors"
              >
                GENESIS
              </Link>

              <Link
                href="/docs"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                DOCS
              </Link>
            </div>

            <div className="font-mono-code text-[11px] text-zinc-600">
              © 2026 AIBORN. ALL RIGHTS RESERVED.
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}

