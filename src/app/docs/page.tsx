import React from "react";
import Link from "next/link";
import StatusBadge from "@/components/StatusBadge";
import { ArrowLeft, BookOpen, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AIBORN Genesis Documentation // AI Agents With an Onchain Identity",
  description:
    "Official Genesis technical document: 5,000 Genesis AI Agents, programmable trait taxonomy, Python engine, and Arc ecosystem roadmap.",
};

export default function DocsPage() {
  const xUrl = process.env.NEXT_PUBLIC_X_URL || "https://x.com/BornAI__";

  return (
    <div className="min-h-screen pt-28 pb-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link & Meta Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-10 border-b border-white/10 font-mono-code text-xs">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-purple-400" />
            <span>RETURN TO OVERVIEW</span>
          </Link>

          <div className="flex items-center gap-3">
            <StatusBadge label="EXPERIMENTAL / BETA" variant="beta" />
            <a
              href={xUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white flex items-center gap-1"
            >
              <span>@BornAI__</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Document Header */}
        <header className="mb-14">
          <div className="text-xs font-mono-code text-purple-400 uppercase tracking-widest mb-3">
            TECHNICAL SPECIFICATION // GENESIS WHITEPAPER
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight">
            AIBORN
          </h1>
          <h2 className="mt-3 text-xl sm:text-2xl font-display font-medium text-purple-200/90">
            Genesis // AI Agents With an Onchain Identity
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 font-sans">
            Born in Python. Shaped by AI. Built for an agentic future on Arc.
          </p>

          <div className="mt-6 flex flex-wrap gap-4 font-mono-code text-xs">
            <div className="px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/10 text-zinc-300">
              <span className="text-zinc-500">STATUS:</span> Experimental / Beta
            </div>
            <div className="px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/10 text-zinc-300">
              <span className="text-zinc-500">GENESIS SUPPLY:</span> 5,000
            </div>
          </div>
        </header>

        <hr className="border-white/10 my-10" />

        {/* Documentation Content */}
        <article className="prose prose-invert max-w-none space-y-12 text-zinc-300 text-base leading-relaxed font-light font-sans">
          
          {/* 01 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight border-b border-white/5 pb-2">
              01 // What is AIBORN?
            </h2>
            <p>AIBORN is an experimental project exploring a simple question:</p>
            <blockquote className="p-4 rounded-xl bg-purple-950/20 border-l-4 border-purple-500 text-purple-200 font-medium my-4">
              What if an AI agent had an identity you could own?
            </blockquote>
            <p>
              Today, AI agents primarily exist inside applications. An agent can reason, remember information, use tools, and perform tasks, but its identity is generally controlled by the application that provides it.
            </p>
            <p>AIBORN explores a different model.</p>
            <p>Each AIBORN Genesis NFT represents a unique AI agent identity.</p>
            <p>The NFT is not intended to be the entire product.</p>
            <p className="text-white font-medium">
              It is the <span className="text-purple-300">identity and entry point</span> into the AIBORN ecosystem.
            </p>
            <p>The long term vision is to connect:</p>
            <div className="p-4 rounded-xl bg-black/60 border border-white/8 font-mono-code text-sm text-purple-300">
              Onchain identity + AI agents + memory + tools + applications
            </div>
            <p>into a single user owned experience.</p>
          </section>

          <hr className="border-white/5 my-8" />

          {/* 02 */}
          <section className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight border-b border-white/5 pb-2">
              02 // The Core Concept
            </h2>
            <p>AIBORN has three fundamental layers.</p>

            <div className="space-y-3 p-5 rounded-xl bg-white/[0.02] border border-white/5">
              <h3 className="text-lg font-display font-bold text-white">
                Layer 1 // Identity
              </h3>
              <p>The Genesis NFT represents a unique AIBORN identity.</p>
              <p>Each NFT has:</p>
              <ul className="list-disc list-inside space-y-1 text-sm text-zinc-400 font-mono-code">
                <li>A unique token ID</li>
                <li>A generated identity</li>
                <li>A set of traits</li>
                <li>A rarity profile</li>
                <li>A visual representation</li>
                <li>A corresponding agent identity</li>
              </ul>
              <p className="text-sm text-zinc-300">
                The NFT establishes which AIBORN agent belongs to the holder.
              </p>
            </div>

            <div className="space-y-3 p-5 rounded-xl bg-white/[0.02] border border-white/5">
              <h3 className="text-lg font-display font-bold text-white">
                Layer 2 // Intelligence
              </h3>
              <p>The NFT is connected to an AI agent experience.</p>
              <p>The corresponding agent can eventually have:</p>
              <ul className="list-disc list-inside space-y-1 text-sm text-zinc-400 font-mono-code">
                <li>Personality</li>
                <li>Instructions</li>
                <li>Memory</li>
                <li>Context</li>
                <li>Capabilities</li>
                <li>Approved tools</li>
                <li>Agent specific behavior</li>
              </ul>
              <p className="text-sm text-zinc-300">
                The objective is to make each identity feel more like an individual agent rather than simply another NFT image.
              </p>
            </div>

            <div className="space-y-3 p-5 rounded-xl bg-white/[0.02] border border-white/5">
              <h3 className="text-lg font-display font-bold text-white">
                Layer 3 // Application
              </h3>
              <p>A dedicated AIBORN application is being developed.</p>
              <p>Genesis holders will be among the first users of the application.</p>
              <p className="font-mono-code text-sm text-purple-300">
                Connect Wallet &rarr; Verify Genesis NFT &rarr; Unlock Agent &rarr; Interact
              </p>
              <p className="text-sm text-amber-300/90 font-mono-code">
                The application is currently not live. It is being developed as part of the AIBORN roadmap.
              </p>
            </div>
          </section>

          <hr className="border-white/5 my-8" />

          {/* 03 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight border-b border-white/5 pb-2">
              03 // Why an NFT?
            </h2>
            <p>The NFT provides a simple, public and portable ownership layer.</p>
            <p>
              Instead of an AI identity existing only inside a centralized database, the Genesis identity is represented onchain.
            </p>
            <p>This allows the application to verify:</p>
            <blockquote className="p-4 rounded-xl bg-black/60 border-l-4 border-cyan-500 text-cyan-200 font-mono-code text-sm">
              Which wallet owns which AIBORN identity?
            </blockquote>
            <p>For example:</p>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 font-mono-code text-sm">
              <span className="text-zinc-400">Wallet A</span> owns <span className="text-purple-300 font-bold">AIBORN #0421</span>
            </div>
            <p>The AIBORN application can then associate that wallet with the corresponding agent.</p>
            <p>
              The NFT therefore acts as an <strong className="text-white">onchain identity credential and access mechanism</strong> for the future application.
            </p>
            <p>The artwork is the visual representation.</p>
            <p>The underlying token is the identity.</p>
            <p>The application is where the utility lives.</p>
          </section>

          <hr className="border-white/5 my-8" />

          {/* 04 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight border-b border-white/5 pb-2">
              04 // Genesis Collection
            </h2>
            <p>The first AIBORN collection will contain:</p>
            <div className="text-3xl sm:text-4xl font-display font-extrabold text-white py-2">
              5,000 Genesis Agents
            </div>
            <p>
              Each Genesis NFT will be generated through a controlled combination of programmable traits.
            </p>
            <p>The objective is not simply to randomly generate 5,000 images.</p>
            <p className="text-white font-medium">
              The objective is to generate 5,000 distinct agent identities.
            </p>
            <p>Each identity can have a different combination of:</p>
            <ul className="list-disc list-inside space-y-1 text-sm text-zinc-400 font-mono-code">
              <li>Visual characteristics</li>
              <li>Agent characteristics</li>
              <li>Personality</li>
              <li>Rarity</li>
              <li>Identity class</li>
            </ul>
            <p>Genesis represents the first generation of AIBORN.</p>
            <p>Once the Genesis collection is complete, new generations will be treated separately from Genesis.</p>
          </section>

          <hr className="border-white/5 my-8" />

          {/* 05 */}
          <section className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight border-b border-white/5 pb-2">
              05 // The Trait System
            </h2>
            <p>AIBORN Genesis will use six primary trait categories.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <h3 className="font-display font-bold text-white text-base">01 // ORIGIN</h3>
                <p className="text-sm text-zinc-400 mt-1">The origin signature of the agent. Establishes foundational identity.</p>
                <div className="text-xs font-mono-code text-purple-300 mt-2">6 Official Archetypes: 01 Origin, 02 Harmony, 03 Execution, 04 Resilience, 05 Creativity, 06 Observation</div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <h3 className="font-display font-bold text-white text-base">02 // CORE</h3>
                <p className="text-sm text-zinc-400 mt-1">The central AI identity. Visual and conceptual center of computation.</p>
                <div className="text-xs font-mono-code text-cyan-300 mt-2">Different Core types have distinct rarity distributions.</div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <h3 className="font-display font-bold text-white text-base">03 // PERSONALITY</h3>
                <p className="text-sm text-zinc-400 mt-1">Determines behavioral identity and problem solving mannerisms.</p>
                <div className="text-xs font-mono-code text-indigo-300 mt-2">Examples: Explorer, Builder, Strategist, Creator, Observer</div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <h3 className="font-display font-bold text-white text-base">04 // FRAME</h3>
                <p className="text-sm text-zinc-400 mt-1">Structural visual identity surrounding the agent across classes.</p>
                <div className="text-xs font-mono-code text-pink-300 mt-2">Defines silhouette while keeping individuals unique.</div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <h3 className="font-display font-bold text-white text-base">05 // ENERGY</h3>
                <p className="text-sm text-zinc-400 mt-1">Dynamic visual signature: motion, particles, pulses, light patterns.</p>
                <div className="text-xs font-mono-code text-amber-300 mt-2">Moves collection beyond static artwork.</div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <h3 className="font-display font-bold text-white text-base">06 // CLASS</h3>
                <p className="text-sm text-zinc-400 mt-1">Overall rarity tier determined by trait distribution.</p>
                <div className="text-xs font-mono-code text-emerald-300 mt-2">Common, Uncommon, Rare, Epic, Legendary</div>
              </div>
            </div>
          </section>

          <hr className="border-white/5 my-8" />

          {/* 06 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight border-b border-white/5 pb-2">
              06 // Animated NFTs
            </h2>
            <p>AIBORN Genesis identities are designed to be animated.</p>
            <p>The final NFT can be represented as a GIF or another supported animated format.</p>
            <p>The animation is not intended to be random movement added to a static image.</p>
            <p>Instead, individual layers can contribute to the identity:</p>
            <div className="p-4 rounded-xl bg-black/60 border border-white/8 font-mono-code text-xs space-y-1 text-purple-200">
              <div>Core &rarr; pulses</div>
              <div>Energy &rarr; moves</div>
              <div>Frame &rarr; reacts</div>
              <div>Particles &rarr; evolves</div>
            </div>
            <p>The result is a visual identity that feels active rather than static.</p>
            <p>The exact animation implementation will be finalized before Genesis mint.</p>
          </section>

          <hr className="border-white/5 my-8" />

          {/* 07 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight border-b border-white/5 pb-2">
              07 // AI Generated Identity
            </h2>
            <p>AI is part of the creation process.</p>
            <p>AIBORN combines programmatic generation with AI assisted identity creation.</p>
            <p>Python controls the generation system, trait combinations and deterministic logic.</p>
            <p>AI can contribute to:</p>
            <ul className="list-disc list-inside space-y-1 text-sm text-zinc-400 font-mono-code">
              <li>Agent naming</li>
              <li>Personality concepts</li>
              <li>Visual generation</li>
              <li>Identity characteristics</li>
              <li>Agent configuration</li>
            </ul>
            <p className="text-white font-medium">
              The objective is to create a collection where code provides structure and AI provides variation.
            </p>
          </section>

          <hr className="border-white/5 my-8" />

          {/* 08 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight border-b border-white/5 pb-2">
              08 // Generated With Python
            </h2>
            <p>Python is part of AIBORN&apos;s technical identity.</p>
            <p>The generation system can define:</p>
            <pre className="p-4 rounded-xl bg-black/70 border border-white/10 font-mono-code text-xs text-zinc-300">
              {`Agent
 │  Origin
 │  Core
 │  Personality
 │  Frame
 │  Energy
 └  Class`}
            </pre>
            <p>A generation engine can combine these components according to predefined rules.</p>
            <pre className="p-4 rounded-xl bg-black/70 border border-white/10 font-mono-code text-xs text-purple-300">
              {`generate_identity()
        ↓
select_traits()
        ↓
calculate_rarity()
        ↓
generate_agent_profile()
        ↓
generate_visual()
        ↓
generate_metadata()
        ↓
mint`}
            </pre>
            <p>The objective is to make the collection reproducible, structured and scalable.</p>
          </section>

          <hr className="border-white/5 my-8" />

          {/* 09 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight border-b border-white/5 pb-2">
              09 // The Reveal
            </h2>
            <p>AIBORN Genesis will use a delayed reveal experience.</p>
            <p>At mint, the collector receives their Genesis NFT.</p>
            <p>The final combination of traits is initially hidden.</p>
            <p>The collector knows they have acquired a Genesis identity, but does not immediately know:</p>
            <ul className="list-disc list-inside space-y-1 text-sm text-zinc-400 font-mono-code">
              <li>Their Core</li>
              <li>Their Personality</li>
              <li>Their Energy</li>
              <li>Their Frame</li>
              <li>Their Class</li>
              <li>Their final rarity</li>
            </ul>
            <p>After the reveal event, the metadata and visual identity become visible.</p>
            <p className="font-mono-code text-purple-300 text-sm">
              Mint &rarr; Wait &rarr; Reveal &rarr; Discover
            </p>
          </section>

          <hr className="border-white/5 my-8" />

          {/* 10 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight border-b border-white/5 pb-2">
              10 // What Happens After Reveal?
            </h2>
            <p>Once revealed, each Genesis NFT becomes a recognizable AIBORN identity.</p>
            <div className="p-5 rounded-xl bg-black/60 border border-purple-500/30 font-mono-code text-xs space-y-1">
              <div className="text-white font-bold text-sm">AIBORN #0421 // NOVA</div>
              <div className="text-zinc-400">Origin: 01 Origin [Logic | Structure | Infinite]</div>
              <div className="text-zinc-400">Core: Rare</div>
              <div className="text-zinc-400">Personality: Explorer</div>
              <div className="text-zinc-400">Frame: Quantum</div>
              <div className="text-zinc-400">Energy: Pulse</div>
              <div className="text-purple-300 font-bold">Class: Epic</div>
            </div>
            <p>The collector can then associate their identity with the corresponding AIBORN agent.</p>
            <p>The exact agent naming and attribute system will be finalized as development progresses.</p>
          </section>

          <hr className="border-white/5 my-8" />

          {/* 11 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight border-b border-white/5 pb-2">
              11 // The AIBORN Application
            </h2>
            <p>The most important utility of Genesis is access to the future AIBORN application.</p>
            <p className="text-amber-300 font-mono-code text-sm">The application is currently in development.</p>
            <pre className="p-4 rounded-xl bg-black/70 border border-white/10 font-mono-code text-xs text-zinc-300">
              {`USER
 │
 ▼
CONNECT WALLET
 │
 ▼
VERIFY NFT OWNERSHIP
 │
 ▼
IDENTIFY AIBORN
 │
 ▼
LOAD AGENT PROFILE
 │
 ▼
AI AGENT
 │
 │  Conversation
 │  Memory
 │  Personality
 │  Context
 └  Approved Tools`}
            </pre>
            <p>If a wallet owns AIBORN #0421, the application recognizes that identity and loads the corresponding agent.</p>
          </section>

          <hr className="border-white/5 my-8" />

          {/* 12 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight border-b border-white/5 pb-2">
              12 // Agent Memory
            </h2>
            <p>One of the longer term goals is to give AIBORN agents persistent memory.</p>
            <p>The agent can potentially remember information that the user explicitly chooses to preserve.</p>
            <ul className="list-disc list-inside space-y-1 text-sm text-zinc-400 font-mono-code">
              <li>Preferences</li>
              <li>Previous conversations</li>
              <li>Projects</li>
              <li>Important context</li>
              <li>Agent interactions</li>
            </ul>
            <p>This means the agent&apos;s experience can evolve over time.</p>
            <p>The NFT establishes the initial identity. The interactions build the history.</p>
          </section>

          <hr className="border-white/5 my-8" />

          {/* 13 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight border-b border-white/5 pb-2">
              13 // Agent Personality
            </h2>
            <p>Personality can eventually become more than a metadata field.</p>
            <p>
              An Explorer may be optimized for discovery and experimentation. A Builder may be more execution oriented. A Strategist may prioritize structured analysis.
            </p>
            <p>
              The objective is to make the trait system meaningful inside the future application:
            </p>
            <div className="p-3 rounded-lg bg-black/60 border border-white/10 font-mono-code text-xs text-purple-300">
              NFT trait &rarr; Agent identity &rarr; Agent behavior
            </div>
            <p>rather than treating traits as purely cosmetic.</p>
          </section>

          <hr className="border-white/5 my-8" />

          {/* 14 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight border-b border-white/5 pb-2">
              14 // Future Agent Capabilities
            </h2>
            <p>AIBORN is exploring the possibility of allowing agents to interact with approved tools and services.</p>
            <p>Potential future capabilities include:</p>
            <ul className="list-disc list-inside space-y-1 text-sm text-zinc-400 font-mono-code">
              <li>Tool usage</li>
              <li>External API interaction</li>
              <li>Agent workflows</li>
              <li>Application integrations</li>
              <li>Onchain interactions</li>
              <li>Controlled transactions</li>
            </ul>
            <p className="text-amber-300/90 font-mono-code text-xs">
              These capabilities are future development areas, not promises that all functionality exists at Genesis launch.
            </p>
            <p>
              Any financial or onchain capability would require explicit permission systems, spending limits, security controls and appropriate technical validation.
            </p>
          </section>

          <hr className="border-white/5 my-8" />

          {/* 15 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight border-b border-white/5 pb-2">
              15 // Why Arc?
            </h2>
            <p>AIBORN is being developed with Arc in mind.</p>
            <p>Arc provides an environment for exploring stablecoin based applications and agentic economic activity.</p>
            <blockquote className="p-4 rounded-xl bg-cyan-950/20 border-l-4 border-cyan-500 text-cyan-200">
              What happens when an AI agent has both an identity and access to programmable onchain infrastructure?
            </blockquote>
            <p>
              The immediate goal is not to create autonomous financial agents. The goal is to explore the infrastructure and user experience required for agents to eventually interact with onchain applications in a controlled manner.
            </p>
            <p className="text-xs font-mono-code text-zinc-400">
              AIBORN is not claiming an official partnership or endorsement from Arc unless separately confirmed.
            </p>
          </section>

          <hr className="border-white/5 my-8" />

          {/* 16 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight border-b border-white/5 pb-2">
              16 // Genesis Holder Utility
            </h2>
            <p>Genesis holders are intended to receive the earliest access to the AIBORN ecosystem.</p>
            <div className="space-y-2 text-sm">
              <div><strong className="text-white">Application Access:</strong> Early access to the AIBORN application.</div>
              <div><strong className="text-white">Agent Access:</strong> Access to the AI agent associated with the Genesis identity.</div>
              <div><strong className="text-white">Early Features:</strong> First access to new agent capabilities as they are released.</div>
              <div><strong className="text-white">Genesis Identity:</strong> Permanent recognition as an early AIBORN participant.</div>
              <div><strong className="text-white">Community Participation:</strong> Opportunities to influence the development of future AIBORN features.</div>
            </div>
            <p className="text-xs text-zinc-400">The exact benefits will be announced as the corresponding features become available.</p>
          </section>

          <hr className="border-white/5 my-8" />

          {/* 17 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight border-b border-white/5 pb-2">
              17 // Why 5,000?
            </h2>
            <p>
              Genesis is intended to be large enough to create a community while remaining limited enough for each identity to remain meaningful.
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm text-zinc-400 font-mono-code">
              <li>A defined first generation</li>
              <li>A manageable initial community</li>
              <li>A meaningful rarity system</li>
              <li>Enough identity combinations</li>
              <li>A foundation for application testing</li>
            </ul>
            <p>Genesis is the first generation, not the entire AIBORN ecosystem.</p>
          </section>

          <hr className="border-white/5 my-8" />

          {/* 18 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight border-b border-white/5 pb-2">
              18 // Security &amp; Ownership
            </h2>
            <p>AIBORN is designed around wallet based ownership.</p>
            <p>The application should not rely only on a username or email to determine Genesis access.</p>
            <div className="p-3 rounded-lg bg-black/60 border border-white/10 font-mono-code text-xs text-purple-300">
              Wallet &rarr; NFT ownership &rarr; AIBORN identity
            </div>
            <p>The application can verify ownership through blockchain data.</p>
            <p>Future agent capabilities should use permissioned access rather than unrestricted wallet control.</p>
            <p className="text-white font-medium">
              Users should never be expected to give an AI agent unrestricted control of their wallet.
            </p>
            <p>Any future transaction capability should use explicit permissions and appropriate safeguards.</p>
          </section>

          <hr className="border-white/5 my-8" />

          {/* 19 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight border-b border-white/5 pb-2">
              19 // Development Status
            </h2>
            <p>AIBORN is currently in an <strong className="text-emerald-300">experimental / beta phase</strong>.</p>
            <p>The public website represents the project before the full application is released.</p>
            <p>Current focus areas include:</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 font-mono-code text-xs text-zinc-300">
              <div className="p-2 rounded bg-white/[0.03] border border-white/5">&bull; Genesis architecture</div>
              <div className="p-2 rounded bg-white/[0.03] border border-white/5">&bull; Trait generation</div>
              <div className="p-2 rounded bg-white/[0.03] border border-white/5">&bull; AI identity system</div>
              <div className="p-2 rounded bg-white/[0.03] border border-white/5">&bull; NFT infrastructure</div>
              <div className="p-2 rounded bg-white/[0.03] border border-white/5">&bull; Application development</div>
              <div className="p-2 rounded bg-white/[0.03] border border-white/5">&bull; Agent architecture</div>
            </div>
            <p>The project will be developed progressively. The goal is to build the product in public and allow the earliest community to experience the system as it evolves.</p>
          </section>

          <hr className="border-white/5 my-8" />

          {/* 20 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight border-b border-white/5 pb-2">
              20 // Roadmap
            </h2>
            <div className="space-y-4 font-mono-code text-xs">
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                <div className="text-purple-300 font-bold">PHASE 01 // ORIGIN</div>
                <div className="text-zinc-400 mt-1">AIBORN introduction. Technical concept. Community formation. Genesis campaign.</div>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                <div className="text-purple-300 font-bold">PHASE 02 // GENESIS</div>
                <div className="text-zinc-400 mt-1">5,000 Genesis identities. Programmable traits. Rarity system. Animated artwork. Mint.</div>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                <div className="text-purple-300 font-bold">PHASE 03 // REVEAL</div>
                <div className="text-zinc-400 mt-1">Genesis identities become visible. Traits are revealed. Agent identities are established.</div>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                <div className="text-purple-300 font-bold">PHASE 04 // APPLICATION</div>
                <div className="text-zinc-400 mt-1">AIBORN application opens to Genesis holders. Wallet based authentication. NFT ownership verification. Agent access.</div>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                <div className="text-purple-300 font-bold">PHASE 05 // AGENTS</div>
                <div className="text-zinc-400 mt-1">Agent interaction. Personality. Memory. Context. Approved tools.</div>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                <div className="text-purple-300 font-bold">PHASE 06 // ONCHAIN AGENTS</div>
                <div className="text-zinc-400 mt-1">Explore controlled interactions between AI agents and onchain infrastructure. Depends on technical development, security validation and ecosystem readiness.</div>
              </div>
            </div>
          </section>

          <hr className="border-white/5 my-8" />

          {/* 21 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight border-b border-white/5 pb-2">
              21 // The Long Term Vision
            </h2>
            <p>AIBORN starts with NFTs. But NFTs are not the destination.</p>
            <p>The long term idea is:</p>
            <blockquote className="p-4 rounded-xl bg-purple-950/20 border-l-4 border-purple-500 text-purple-200 font-medium">
              AI agents should have identities.
            </blockquote>
            <p>Those identities should be:</p>
            <div className="font-mono-code text-sm text-zinc-300 space-y-1">
              <div>&bull; Persistent.</div>
              <div>&bull; Recognizable.</div>
              <div>&bull; Programmable.</div>
              <div>&bull; User owned.</div>
              <div>&bull; And potentially onchain.</div>
            </div>
            <p>AIBORN is an experiment exploring what happens when those ideas come together.</p>
          </section>

          <hr className="border-white/5 my-8" />

          {/* 22 */}
          <section className="space-y-4 pb-12">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight border-b border-white/5 pb-2">
              22 // Genesis Is The Beginning
            </h2>
            <p>5,000 identities will form the first AIBORN generation.</p>
            <p>Each one begins as a collection of traits.</p>
            <p>Each one receives a unique visual identity.</p>
            <p>Each one can eventually become an AI agent.</p>
            <p>And each one starts with a single moment:</p>
            <div className="text-2xl sm:text-3xl font-display font-extrabold text-white">
              Genesis.
            </div>
            <p>The NFT is the beginning. The agent is what comes next.</p>

            <div className="mt-8 p-6 rounded-2xl bg-black/80 border border-purple-500/30 text-center font-mono-code space-y-2">
              <div className="text-lg font-bold text-white font-display">AIBORN</div>
              <div className="text-xs text-purple-300">Python born. AI shaped. Arc native.</div>
              <div className="text-xs text-zinc-400 pt-2">5,000 Genesis Agents. The first identities are about to be born.</div>
              <div className="text-[11px] text-emerald-400 font-semibold pt-1">Status: Experimental / Beta</div>
            </div>
          </section>

        </article>

        {/* Bottom Navigation */}
        <div className="pt-10 border-t border-white/10 flex justify-between items-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-mono-code text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>BACK TO LANDING PAGE</span>
          </Link>

          <a
            href={xUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-xs font-mono-code text-white transition-colors"
          >
            <span>FOLLOW @BornAI__</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </div>
  );
}
