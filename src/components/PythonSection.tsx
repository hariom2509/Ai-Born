import React from "react";
import { Terminal, Code, Cpu, FileCode } from "lucide-react";

export default function PythonSection() {
  return (
    <section className="py-24 sm:py-32 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Copy */}
          <div className="lg:col-span-6">
            <div className="text-xs font-mono-code text-purple-400 uppercase tracking-widest mb-3">
              // PROGRAMMATIC ORIGINS
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
              BORN IN PYTHON
            </h2>

            <div className="mt-6 space-y-4 text-zinc-400 text-base sm:text-lg leading-relaxed font-light">
              <p>
                Python is part of the AIBORN origin.
              </p>
              <p>
                Traits, identities, and generation logic are designed programmatically, allowing thousands of unique agent identities to emerge from a controlled system rather than simple random image generation.
              </p>
              <p>
                A deterministic generation pipeline calculates rarity distributions, generates agent attributes, and structures the metadata schema before anything touches the blockchain.
              </p>
            </div>

            {/* Micro specs */}
            <div className="mt-8 grid grid-cols-2 gap-4 font-mono-code text-xs">
              <div className="p-3 rounded-lg bg-black/40 border border-white/5">
                <div className="text-zinc-500 text-[10px]">PARADIGM</div>
                <div className="text-white mt-0.5">DETERMINISTIC PIPELINE</div>
              </div>
              <div className="p-3 rounded-lg bg-black/40 border border-white/5">
                <div className="text-zinc-500 text-[10px]">INTELLIGENCE</div>
                <div className="text-purple-300 mt-0.5">HYBRID AI SYNTHESIS</div>
              </div>
            </div>
          </div>

          {/* Right: Interactive Terminal Code Display */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl hud-card hud-corners p-6 overflow-hidden shadow-2xl bg-[#07070c]">
              
              {/* Terminal Tab Bar */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/8 font-mono-code text-xs">
                <div className="flex items-center gap-2 text-zinc-300">
                  <FileCode className="w-4 h-4 text-purple-400" />
                  <span>generator_core.py</span>
                </div>
                <div className="text-[10px] text-zinc-400 tracking-wider">
                  PYTHON 3.12 // AIBORN_SYSTEM
                </div>
              </div>

              {/* Code Pre Block with Syntax Styling */}
              <pre className="font-mono-code text-xs sm:text-[13px] leading-relaxed text-zinc-300 overflow-x-auto p-4 rounded-xl bg-black/70 border border-white/5">
                <code>
                  <span className="text-purple-400">from</span> <span className="text-cyan-300">aiborn_engine</span> <span className="text-purple-400">import</span> IdentityGenerator, RarityMatrix{"\n\n"}
                  <span className="text-zinc-500"># Instantiate programmatic generator engine</span>{"\n"}
                  generator = IdentityGenerator(seed=<span className="text-amber-300">&quot;ARC_GENESIS_5000&quot;</span>){"\n\n"}
                  <span className="text-zinc-500"># Synthesize agent profile with neural traits</span>{"\n"}
                  agent = generator.create_identity(id=<span className="text-amber-300">421</span>){"\n\n"}
                  <span className="text-purple-400">print</span>(agent.origin)       <span className="text-zinc-500"># &rarr; &quot;01_ORIGIN&quot;</span>{"\n"}
                  <span className="text-purple-400">print</span>(agent.core)         <span className="text-zinc-500"># &rarr; &quot;NEURAL_ALPHA&quot;</span>{"\n"}
                  <span className="text-purple-400">print</span>(agent.personality)  <span className="text-zinc-500"># &rarr; &quot;STRATEGIST&quot;</span>{"\n"}
                  <span className="text-purple-400">print</span>(agent.energy)       <span className="text-zinc-500"># &rarr; &quot;VIOLET_PULSE&quot;</span>{"\n"}
                  <span className="text-purple-400">print</span>(agent.rarity_class) <span className="text-zinc-500"># &rarr; &quot;EPIC&quot;</span>{"\n\n"}
                  <span className="text-zinc-500"># Compile reproducible cryptographic manifest</span>{"\n"}
                  metadata = agent.compile_onchain_manifest()
                </code>
              </pre>

              <div className="mt-4 flex items-center justify-between text-[11px] font-mono-code text-zinc-400 pt-3 border-t border-white/5">
                <span>// ARCHITECTURAL CONCEPT</span>
                <span className="text-purple-400">REPRODUCIBLE &amp; SCALABLE</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
