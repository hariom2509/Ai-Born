"use client";

import React, { useState, useEffect } from "react";
import StatusBadge from "./StatusBadge";

interface CountdownTimerProps {
  variant?: "hero" | "compact";
  className?: string;
}

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
}

export default function CountdownTimer({
  variant = "hero",
  className = "",
}: CountdownTimerProps) {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeRemaining>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
  });

  const targetDateStr =
    process.env.NEXT_PUBLIC_GENESIS_LAUNCH || "2026-09-16T14:15:00Z";

  useEffect(() => {
    setMounted(true);
    const target = new Date(targetDateStr).getTime();

    const calculate = () => {
      const now = new Date().getTime();
      const distance = target - now;

      if (distance <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isExpired: false });
    };

    calculate();
    const interval = setInterval(calculate, 1000);
    return () => clearInterval(interval);
  }, [targetDateStr]);

  const pad = (num: number) => String(num).padStart(2, "0");

  if (!mounted) {
    return (
      <div
        className={`p-4 rounded-lg bg-zinc-950/60 border border-white/10 ${className}`}
      >
        <div className="h-16 flex items-center justify-center text-zinc-500 font-mono-code text-xs">
          SYNCHRONIZING GENESIS COUNTDOWN CLOCK...
        </div>
      </div>
    );
  }

  if (timeLeft.isExpired) {
    return (
      <div
        className={`p-4 rounded-xl hud-card border-emerald-500/40 text-center ${className}`}
      >
        <StatusBadge label="GENESIS LAUNCH PHASE" variant="active" />
        <p className="mt-2 text-sm text-emerald-400 font-mono-code">
          GENESIS MINT WINDOW IS ACTIVE
        </p>
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <div
        className={`inline-flex flex-wrap items-center gap-3 px-4 py-2.5 rounded-lg hud-card hud-corners ${className}`}
      >
        <span className="text-[11px] font-mono-code text-zinc-400 uppercase tracking-wider">
          GENESIS COUNTDOWN:
        </span>
        <div className="flex items-center gap-2 font-mono-code text-sm font-semibold text-white">
          <span className="text-purple-400">{pad(timeLeft.days)}d</span>
          <span className="text-zinc-600">:</span>
          <span className="text-purple-400">{pad(timeLeft.hours)}h</span>
          <span className="text-zinc-600">:</span>
          <span className="text-purple-400">{pad(timeLeft.minutes)}m</span>
          <span className="text-zinc-600">:</span>
          <span className="text-cyan-400">{pad(timeLeft.seconds)}s</span>
        </div>
        <span className="text-[10px] font-mono-code text-zinc-500">
          [ 16 SEPT / 14:15 UTC ]
        </span>
      </div>
    );
  }

  return (
    <div
      className={`p-4 sm:p-5 rounded-xl hud-card hud-corners relative overflow-hidden ${className}`}
    >
      {/* HUD Header */}
      <div className="flex items-center justify-between gap-2 border-b border-white/5 pb-2.5 mb-3.5">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-sm bg-purple-500/80 animate-ping" />
          <span className="text-[11px] font-mono-code text-zinc-400 tracking-wider uppercase">
            GENESIS INITIALIZATION / COUNTDOWN
          </span>
        </div>
        <StatusBadge label="16 SEPT 2026" variant="dev" />
      </div>

      {/* Digits Grid */}
      <div className="grid grid-cols-4 gap-2 sm:gap-3 text-center">
        {/* Days */}
        <div className="p-2 sm:p-3 rounded-lg bg-black/50 border border-white/5">
          <div className="text-2xl sm:text-3xl font-mono-code font-bold text-white tracking-tight">
            {pad(timeLeft.days)}
          </div>
          <div className="text-[10px] font-mono-code text-zinc-400 uppercase tracking-widest mt-1">
            DAYS
          </div>
        </div>

        {/* Hours */}
        <div className="p-2 sm:p-3 rounded-lg bg-black/50 border border-white/5">
          <div className="text-2xl sm:text-3xl font-mono-code font-bold text-purple-200 tracking-tight">
            {pad(timeLeft.hours)}
          </div>
          <div className="text-[10px] font-mono-code text-zinc-400 uppercase tracking-widest mt-1">
            HOURS
          </div>
        </div>

        {/* Minutes */}
        <div className="p-2 sm:p-3 rounded-lg bg-black/50 border border-white/5">
          <div className="text-2xl sm:text-3xl font-mono-code font-bold text-purple-200 tracking-tight">
            {pad(timeLeft.minutes)}
          </div>
          <div className="text-[10px] font-mono-code text-zinc-400 uppercase tracking-widest mt-1">
            MINS
          </div>
        </div>

        {/* Seconds */}
        <div className="p-2 sm:p-3 rounded-lg bg-black/50 border border-white/5">
          <div className="text-2xl sm:text-3xl font-mono-code font-bold text-cyan-300 tracking-tight">
            {pad(timeLeft.seconds)}
          </div>
          <div className="text-[10px] font-mono-code text-cyan-400/80 uppercase tracking-widest mt-1">
            SECS
          </div>
        </div>
      </div>

      {/* HUD Footer note */}
      <div className="mt-3.5 flex items-center justify-between text-[11px] font-mono-code text-zinc-400 pt-2 border-t border-white/5">
        <span>TARGET: 14:15 UTC</span>
        <span>NETWORK: ARC/ROBINHOOD</span>
      </div>
    </div>
  );
}
