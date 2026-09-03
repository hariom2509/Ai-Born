"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import StatusBadge from "./StatusBadge";
import { ArrowUpRight, Menu, X, Cpu, Activity } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cycleCount, setCycleCount] = useState(24800);

  const xUrl = process.env.NEXT_PUBLIC_X_URL || "https://x.com/BornAI__";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCycleCount((prev) => prev + Math.floor(Math.random() * 9) + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { name: "Genesis", href: "/#genesis" },
    { name: "The Idea", href: "/#the-idea" },
    { name: "Agents", href: "/#agents" },
    { name: "Roadmap", href: "/#roadmap" },
    { name: "Docs", href: "/docs" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      
      {/* Top AI Telemetry Strip */}
      <div className="w-full bg-[#030306]/95 backdrop-blur-md border-b border-purple-500/20 text-[10px] font-mono-code text-zinc-400 py-1 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-emerald-300 font-semibold tracking-wider">
              SYNTHETIC AI RUNTIME
            </span>
            <span className="text-zinc-600">//</span>
            <span className="text-zinc-400 hidden sm:inline">
              KERNEL: AIBORN_v0.9.4
            </span>
          </div>

          <div className="hidden md:flex items-center gap-6 text-zinc-500">
            <div>
              <span className="text-zinc-400">NODES: </span>
              <span className="text-purple-300">5000_GENESIS</span>
            </div>
            <div>
              <span className="text-zinc-400">CYCLE: </span>
              <span className="text-cyan-300">{cycleCount}.4MHz</span>
            </div>
            <div>
              <span className="text-zinc-400">NETWORK: </span>
              <span className="text-purple-300">ARC_ECOSYSTEM</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-zinc-400">
            <span className="text-zinc-500 hidden sm:inline">[ AUTONOMOUS AI SYSTEM ]</span>
            <span className="px-1.5 py-0.2 rounded bg-purple-950/60 border border-purple-500/30 text-purple-300 text-[9px] font-semibold">
              BETA
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar Bar */}
      <div
        className={`w-full transition-all duration-300 ${
          scrolled
            ? "bg-[#040407]/90 backdrop-blur-xl border-b border-white/8 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.6)]"
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Wordmark */}
            <Link
              href="/"
              className="group flex items-center gap-3 focus:outline-none"
              aria-label="AIBORN Home"
            >
              <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-zinc-950 border border-purple-500/30 group-hover:border-purple-500/70 transition-colors">
                <span className="w-2 h-2 rounded-full bg-purple-400 group-hover:scale-125 transition-transform" />
                <div className="absolute inset-0 rounded-lg bg-purple-500/10 blur-sm group-hover:bg-purple-500/20 transition-all" />
              </div>
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-lg tracking-[0.2em] text-white group-hover:text-purple-200 transition-colors">
                  AIBORN
                </span>
              </div>
            </Link>

            {/* Center Navigation Links (Desktop) */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[13px] font-mono-code tracking-wider text-zinc-400 hover:text-white transition-colors duration-200 relative group py-1"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-purple-400 group-hover:w-full transition-all duration-300 ease-out" />
                </Link>
              ))}
            </nav>

            {/* Right side CTAs */}
            <div className="hidden sm:flex items-center gap-3">
              <div className="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/10 text-[10px] font-mono-code text-cyan-300 flex items-center gap-1.5">
                <Activity className="w-3 h-3 text-cyan-400 animate-pulse" />
                <span>NEURAL SYNC: 99.8%</span>
              </div>

              <a
                href={xUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono-code bg-white/5 hover:bg-white/10 text-zinc-200 hover:text-white border border-white/10 hover:border-purple-500/40 transition-all duration-200"
              >
                <span>Follow on X</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
              </a>
            </div>

            {/* Mobile menu hamburger button */}
            <div className="flex items-center gap-2.5 sm:hidden">
              <StatusBadge label="BETA" variant="beta" />
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-white/5 border border-white/10 text-zinc-300 hover:text-white focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#07070d]/98 backdrop-blur-2xl border-b border-white/10 px-6 py-6 transition-all">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-mono-code text-zinc-300 hover:text-purple-300 tracking-wider py-1.5 border-b border-white/5"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-3">
              <a
                href={xUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between w-full px-4 py-2.5 rounded-lg text-xs font-mono-code bg-purple-950/30 text-purple-300 border border-purple-500/30"
              >
                <span>Follow @BornAI__ on X</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
