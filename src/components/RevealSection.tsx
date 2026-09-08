import React from "react";
import Image from "next/image";
import StatusBadge from "./StatusBadge";
import OpenSeaIcon from "./OpenSeaIcon";
import { EyeOff, Sparkles, Shield, Cpu, Lock, ArrowUpRight } from "lucide-react";

export default function RevealSection() {
  const openseaUrl =
    process.env.NEXT_PUBLIC_OPENSEA_URL ||
    "https://opensea.io/collection/aiborn-genesis/overview";

  return (
    <section className="py-24 sm:py-32 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Explanation */}
          <div className="lg:col-span-6">
            <div className="text-xs font-mono-code text-purple-400 uppercase tracking-widest mb-3">
              / POST-MINT DISCOVERY
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
              YOU DON&apos;T KNOW <br />
              <span className="text-gradient-purple">YOUR AGENT YET.</span>
            </h2>

            <div className="mt-6 space-y-4 text-zinc-400 text-base sm:text-lg leading-relaxed font-light">
              <p>
                Genesis identities will be revealed after mint.
              </p>
              <p>
                Each NFT begins as an undisclosed combination of traits, secured onchain.
              </p>
              <p>
                After the reveal event, collectors discover the true identity, specialized characteristics, and rarity of their AIBORN agent.
              </p>
            </div>

            {/* Sequence Flow */}
            <div className="mt-8 p-5 rounded-xl bg-black/40 border border-white/5 space-y-3 font-mono-code text-xs">
              <div className="text-zinc-500 uppercase tracking-wider text-[10px]">
                REVEAL SEQUENCE:
              </div>
              <div className="flex items-center gap-2 text-zinc-300">
                <span className="text-purple-400">01.</span>
                <span>MINT UNREVEALED GENESIS IDENTITY KEY</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-300">
                <span className="text-purple-400">02.</span>
                <span>GLOBAL REVEAL SYNCHRONIZATION EVENT</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-300">
                <span className="text-purple-400">03.</span>
                <span>DYNAMIC ARTWORK + METADATA ACTIVATION</span>
              </div>
              <div className="flex items-center gap-2 text-cyan-300">
                <span className="text-cyan-400">04.</span>
                <span>AGENT MAPPING UNLOCKED IN FUTURE APPLICATION</span>
              </div>
            </div>

          </div>

          {/* Right Column: Concept Preview NFT Card */}
          <div className="lg:col-span-6 flex flex-col items-center">
            
            {/* The Demo Card */}
            <div className="w-full max-w-md rounded-2xl hud-card hud-corners p-4 sm:p-5 relative group">
              
              {/* Concept Preview Badge */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 font-mono-code text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                  <span className="text-amber-300 font-bold tracking-wider">
                    CONCEPT PREVIEW
                  </span>
                </div>
                <span className="text-[10px] text-zinc-400 tracking-wider">
                  NON-FINAL DEMO
                </span>
              </div>

              {/* Artwork Container with Scanline */}
              <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-black scanlines border border-purple-500/20 group-hover:border-purple-500/50 transition-colors">
                <Image
                  src="/agent-preview.png"
                  alt="AIBORN Genesis Agent Concept Art Preview"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 420px"
                  priority
                />

                {/* Overlaid HUD Watermark */}
                <div className="absolute top-3 left-3 px-2 py-1 rounded bg-black/70 backdrop-blur-md border border-white/10 font-mono-code text-[10px] text-white">
                  AIBORN #????
                </div>

                <div className="absolute top-3 right-3 px-2 py-1 rounded bg-black/70 backdrop-blur-md border border-white/10 font-mono-code text-[10px] text-amber-300 flex items-center gap-1">
                  <EyeOff className="w-3 h-3" />
                  <span>UNREVEALED</span>
                </div>

                <div className="absolute bottom-3 inset-x-3 p-2.5 rounded-lg bg-black/80 backdrop-blur-md border border-white/10 flex items-center justify-between text-[11px] font-mono-code">
                  <span className="text-purple-300">GENESIS MATRIX</span>
                  <span className="text-zinc-400">HASH: 0xUNDISCLOSED</span>
                </div>
              </div>

              {/* Card Metadata Section */}
              <div className="mt-4 pt-3 border-t border-white/10">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="font-display font-bold text-lg text-white">
                      AIBORN GENESIS #0421
                    </h3>
                    <p className="text-xs font-mono-code text-zinc-400">
                      ONCHAIN AI AGENT IDENTITY KEY
                    </p>
                  </div>
                  <StatusBadge label="PRE-REVEAL" variant="planned" />
                </div>

                {/* Simulated Trait Grid (Obfuscated) */}
                <div className="grid grid-cols-3 gap-2 text-[11px] font-mono-code">
                  <div className="p-2 rounded bg-white/[0.02] border border-white/5">
                    <div className="text-zinc-400 text-[9px]">ORIGIN</div>
                    <div className="text-zinc-300 truncate">01_ORIGIN</div>
                  </div>
                  <div className="p-2 rounded bg-white/[0.02] border border-white/5">
                    <div className="text-zinc-400 text-[9px]">CORE</div>
                    <div className="text-zinc-300 truncate">NEURAL_ALPHA</div>
                  </div>
                  <div className="p-2 rounded bg-white/[0.02] border border-white/5">
                    <div className="text-zinc-400 text-[9px]">CLASS</div>
                    <div className="text-purple-300 font-bold">RARE</div>
                  </div>
                </div>

                <div className="mt-3 text-center text-[10px] font-mono-code text-zinc-400">
                  * FOR VISUAL DEMONSTRATION ONLY. DOES NOT REPRESENT A LIVE MINTED NFT.
                </div>
              </div>

            </div>

            {/* Link to OpenSea collection */}
            <div className="mt-4">
              <a
                href={openseaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono-code text-zinc-400 hover:text-[#6cb2eb] transition-colors group"
              >
                <OpenSeaIcon className="w-3.5 h-3.5 text-[#2081E2]" />
                <span>View Upcoming Genesis Collection on OpenSea</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-[#6cb2eb] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
