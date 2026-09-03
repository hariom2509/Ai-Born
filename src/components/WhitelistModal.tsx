"use client";

import React, { useState, useEffect } from "react";
import { X, Check, ArrowUpRight, ShieldCheck, Sparkles, AlertCircle, Link as LinkIcon } from "lucide-react";

interface WhitelistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WhitelistModal({ isOpen, onClose }: WhitelistModalProps) {
  const [xHandle, setXHandle] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [postLink, setPostLink] = useState("");
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const pinnedPostUrl = "https://x.com/BornAI__/status/2095613724107452735";

  // Check localStorage for existing confirmation
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("aiborn_checkpoint_confirmed");
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          setXHandle(parsed.xHandle || "");
          setWalletAddress(parsed.wallet || "");
          setPostLink(parsed.postLink || "");
          setHasInteracted(true);
          setIsConfirmed(true);
        } catch {
          // Ignore parse errors
        }
      }
    }
  }, []);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    const cleanHandle = xHandle.trim();
    const cleanWallet = walletAddress.trim();
    const cleanPostLink = postLink.trim();

    if (!cleanHandle) {
      setErrorMsg("Please provide your X user handle.");
      return;
    }

    if (!cleanWallet) {
      setErrorMsg("Please provide your EVM wallet address.");
      return;
    }

    if (!cleanWallet.startsWith("0x") || cleanWallet.length < 10) {
      setErrorMsg("Please provide a valid EVM address starting with 0x.");
      return;
    }

    if (!hasInteracted) {
      setErrorMsg("Please confirm that you have liked, reposted, and tagged 3 friends on our pinned post.");
      return;
    }

    if (!cleanPostLink) {
      setErrorMsg("Please paste the link to your quote tweet or comment.");
      return;
    }

    if (!cleanPostLink.includes("x.com") && !cleanPostLink.includes("twitter.com") && !cleanPostLink.includes("http")) {
      setErrorMsg("Please provide a valid link from X / Twitter.");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/whitelist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          xHandle: cleanHandle.startsWith("@") ? cleanHandle : `@${cleanHandle}`,
          walletAddress: cleanWallet,
          postLink: cleanPostLink,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Failed to submit checkpoint registration.");
      }

      setIsConfirmed(true);
      if (typeof window !== "undefined") {
        localStorage.setItem(
          "aiborn_checkpoint_confirmed",
          JSON.stringify({
            xHandle: cleanHandle.startsWith("@") ? cleanHandle : `@${cleanHandle}`,
            wallet: cleanWallet,
            postLink: cleanPostLink,
            timestamp: new Date().toISOString(),
          })
        );
      }
    } catch (err: any) {
      setErrorMsg(err.message || "Failed to register checkpoint. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleShareOnX = () => {
    const tweetText = encodeURIComponent(
      `I just confirmed my Early Supporter Checkpoint for @BornAI__ Genesis!\n\n5,000 Genesis AI Agents with onchain identity built on Arc.\n\nApply for whitelist: https://aibornprotocol.xyz`
    );
    window.open(`https://x.com/intent/tweet?text=${tweetText}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Dark backdrop blur */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-xl rounded-2xl bg-[#08080e] border border-purple-500/30 shadow-[0_0_50px_rgba(139,92,246,0.15)] overflow-hidden z-10 my-auto">
        
        {/* Top Decorative Line */}
        <div className="h-1 w-full bg-gradient-to-r from-purple-500 via-cyan-400 to-purple-600" />

        {/* Modal Header */}
        <div className="p-6 sm:p-8 pb-4 flex items-start justify-between gap-4 border-b border-white/5">
          <div>
            <div className="text-[11px] font-mono-code text-purple-400 uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>GENESIS WHITELIST VERIFICATION</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight uppercase">
              EARLY SUPPORTER CHECKPOINT
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-zinc-400 font-sans font-light leading-relaxed">
              Connect your X, drop your Ethereum wallet, and provide proof of interaction to confirm your checkpoint.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white border border-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 pt-6">
          {isConfirmed ? (
            /* Success View */
            <div className="py-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/80 flex items-center justify-center mb-4 shadow-[0_0_30px_rgba(52,211,153,0.4)]">
                <Check className="w-8 h-8 text-emerald-400" />
              </div>

              <span className="text-xs font-mono-code text-emerald-400 tracking-wider uppercase font-semibold">
                CHECKPOINT CONFIRMED // RECORDED
              </span>

              <h3 className="mt-2 font-display font-bold text-2xl text-white">
                You Are On The Genesis Whitelist
              </h3>

              <p className="mt-2 text-xs sm:text-sm text-zinc-400 max-w-md font-sans">
                Your credentials and wallet address have been saved directly to the Genesis whitelist registry for Generation 01.
              </p>

              {/* Registered Details Card */}
              <div className="mt-6 w-full p-4 rounded-xl bg-black/60 border border-white/10 text-left font-mono-code text-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-zinc-500">X HANDLE:</span>
                  <span className="text-purple-300 font-semibold">{xHandle.startsWith("@") ? xHandle : `@${xHandle}`}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-500">EVM WALLET:</span>
                  <span className="text-cyan-300 truncate max-w-[200px]">{walletAddress}</span>
                </div>
                {postLink && (
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-500">POST PROOF:</span>
                    <a
                      href={postLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 underline truncate max-w-[200px] inline-flex items-center gap-1"
                    >
                      <span>View Submission</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                )}
                <div className="flex items-center justify-between pt-1 border-t border-white/5 text-[11px]">
                  <span className="text-zinc-500">STATUS:</span>
                  <span className="text-emerald-400 font-semibold">ALLOCATION PENDING</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex flex-col sm:flex-row gap-3 w-full">
                <button
                  type="button"
                  onClick={handleShareOnX}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-mono-code text-xs font-semibold tracking-wider transition-colors"
                >
                  <span>SHARE ON X</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="py-3 px-5 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white border border-white/10 font-mono-code text-xs transition-colors"
                >
                  CLOSE
                </button>
              </div>
            </div>
          ) : (
            /* Form View */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Error Message */}
              {errorMsg && (
                <div className="p-3 rounded-xl bg-red-950/40 border border-red-500/40 text-red-300 text-xs flex items-center gap-2 font-mono-code">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Step 1: Connect X & Provide Wallet */}
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-sm font-mono-code font-bold text-white shrink-0 mt-0.5">
                  1
                </div>

                <div className="flex-1 space-y-3">
                  <div>
                    <h3 className="font-display font-bold text-base text-white tracking-wide">
                      Connect X &amp; Provide Wallet
                    </h3>
                    <p className="text-xs text-zinc-400 font-sans font-light mt-0.5">
                      Enter your X handle and EVM address to register your identity.
                    </p>
                  </div>

                  {/* X Handle Input */}
                  <div>
                    <label className="block text-[11px] font-mono-code text-zinc-400 mb-1">
                      X User Handle
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="@username"
                        value={xHandle}
                        onChange={(e) => setXHandle(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-black/60 border border-white/10 focus:border-purple-500 focus:outline-none text-xs font-mono-code text-white placeholder:text-zinc-600 transition-colors"
                        required
                      />
                      {xHandle.trim().length > 1 && (
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-emerald-400 text-xs font-mono-code flex items-center gap-1">
                          <Check className="w-3.5 h-3.5" />
                        </span>
                      )}
                    </div>
                  </div>

                  {/* EVM Wallet Address Input */}
                  <div>
                    <label className="block text-[11px] font-mono-code text-zinc-400 mb-1">
                      EVM Wallet Address
                    </label>
                    <input
                      type="text"
                      placeholder="0x..."
                      value={walletAddress}
                      onChange={(e) => setWalletAddress(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-black/60 border border-white/10 focus:border-purple-500 focus:outline-none text-xs font-mono-code text-white placeholder:text-zinc-600 transition-colors"
                      required
                    />
                  </div>
                </div>
              </div>

              <hr className="border-white/5 my-4" />

              {/* Step 2: Like, Repost & Tag 3 Friends */}
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-sm font-mono-code font-bold text-white shrink-0 mt-0.5">
                  2
                </div>

                <div className="flex-1 space-y-3">
                  <div>
                    <h3 className="font-display font-bold text-base text-white tracking-wide">
                      Like, Repost &amp; Tag 3 Friends
                    </h3>
                    <p className="text-xs text-zinc-400 font-sans font-light mt-0.5">
                      Support on X, tag 3 friends, and paste the link to your quote or comment.
                    </p>
                  </div>

                  {/* Checkbox */}
                  <label className="flex items-start gap-3 p-3 rounded-lg bg-black/40 border border-white/8 hover:border-purple-500/30 cursor-pointer transition-colors group">
                    <input
                      type="checkbox"
                      checked={hasInteracted}
                      onChange={(e) => setHasInteracted(e.target.checked)}
                      className="mt-0.5 w-4 h-4 rounded bg-black border-white/20 text-purple-600 focus:ring-0 focus:ring-offset-0 cursor-pointer accent-purple-600"
                    />
                    <span className="text-xs font-sans text-zinc-300 leading-relaxed">
                      Liked, Reposted &amp; Tagged 3 Friends on{" "}
                      <a
                        href={pinnedPostUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-purple-400 hover:text-purple-300 underline font-medium inline-flex items-center gap-0.5"
                      >
                        our pinned post
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    </span>
                  </label>

                  {/* Quote / Comment Link Input */}
                  <div>
                    <label className="block text-[11px] font-mono-code text-zinc-400 mb-1 flex items-center gap-1.5">
                      <LinkIcon className="w-3 h-3 text-purple-400" />
                      <span>Quote / Comment Proof Link</span>
                    </label>
                    <input
                      type="url"
                      placeholder="https://x.com/your_handle/status/..."
                      value={postLink}
                      onChange={(e) => setPostLink(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-black/60 border border-white/10 focus:border-purple-500 focus:outline-none text-xs font-mono-code text-white placeholder:text-zinc-600 transition-colors"
                      required
                    />
                    <p className="text-[10px] font-mono-code text-zinc-500 mt-1">
                      Paste the URL of your quote tweet or reply tagging 3 friends.
                    </p>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl font-mono-code text-xs sm:text-sm font-bold tracking-widest text-white uppercase bg-purple-600 hover:bg-purple-500 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_30px_rgba(147,51,234,0.35)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
                >
                  {isSubmitting ? "VERIFYING & RECORDING CHECKPOINT..." : "CONFIRM MY CHECKPOINT"}
                </button>
              </div>

            </form>
          )}
        </div>

        {/* Modal Footer Note */}
        <div className="px-6 sm:px-8 py-3 bg-black/60 border-t border-white/5 text-[10px] font-mono-code text-zinc-500 flex items-center justify-between">
          <span>AIBORN // GENESIS ALLOCATION</span>
          <span>5000 AGENT SLOTS</span>
        </div>

      </div>
    </div>
  );
}
