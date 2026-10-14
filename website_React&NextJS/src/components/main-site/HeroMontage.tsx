"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useMainSiteLanguage } from "@/context/MainSiteLanguageContext";

export default function HeroMontage() {
  const { language } = useMainSiteLanguage();
  const isMs = language === "ms";

  return (
    <div className="relative w-full max-w-lg lg:max-w-none mx-auto h-[480px] sm:h-[540px] select-none">
      {/* Dynamic ambient aurora glows */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-emerald-500/20 blur-[100px] pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-blue-600/25 blur-[90px] pointer-events-none -z-10" />

      {/* Layer 1: The Modern High-Tech Web UI Mockup (Backdrop Left) */}
      <div className="absolute top-2 sm:top-4 left-0 sm:left-2 w-[310px] sm:w-[360px] rounded-2xl bg-[#0E1424]/90 backdrop-blur-2xl border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(16,185,129,0.15)] overflow-hidden transform -rotate-2 hover:rotate-0 transition-all duration-500 z-10 group">
        {/* Sleek Browser chrome */}
        <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#0A0E1A] border-b border-white/10">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
          </div>
          <div className="px-3 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-cyan-300/80 truncate flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            danialsystem.com
          </div>
          <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
            {isMs ? "Web Rasmi" : "Live Web"}
          </span>
        </div>
        {/* Real Generated Showcase Image */}
        <div className="relative w-full h-[190px] sm:h-[210px] bg-[#070A12] overflow-hidden">
          <Image
            src="/main-site/images/hero_web_showcase.jpg"
            alt="Web Showcase Preview"
            fill
            sizes="400px"
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E1424] via-transparent to-transparent opacity-80" />
          <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-xs">
            <span className="font-bold text-white tracking-tight drop-shadow-md">
              {isMs ? "Landing Starter dari RM79" : "Landing Starter from RM79"}
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/80 text-white font-bold backdrop-blur-sm">
              {isMs ? "2x Semakan" : "2 Revisions"}
            </span>
          </div>
        </div>
      </div>

      {/* Layer 2: The Art-Directed Poster Sample (Foreground Right) */}
      <div className="absolute top-16 sm:top-20 right-0 sm:right-2 w-[220px] sm:w-[250px] rounded-2xl bg-[#0E1424]/95 backdrop-blur-2xl border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_25px_rgba(6,182,212,0.2)] p-2.5 transform rotate-3 hover:rotate-0 transition-all duration-500 z-20 group">
        <div className="relative w-full h-[280px] sm:h-[310px] rounded-xl overflow-hidden bg-[#000]">
          <Image
            src="/main-site/images/hero_poster_art.jpg"
            alt="Graphic Design Poster Showcase"
            fill
            sizes="300px"
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            priority
          />
          <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-[9px] font-bold text-amber-300">
            ✦ DESIGN CUSTOM
          </div>
          <div className="absolute bottom-2.5 left-2.5 right-2.5 p-2 rounded-lg bg-black/80 backdrop-blur-md border border-white/10 flex items-center justify-between text-[10px]">
            <div>
              <div className="font-extrabold text-white">Poster &amp; Menu</div>
              <div className="text-amber-400 font-bold">Dari RM35</div>
            </div>
            <span className="text-[9px] text-zinc-300 bg-white/10 px-1.5 py-0.5 rounded">300 DPI</span>
          </div>
        </div>
      </div>

      {/* Layer 3: The Express Edit Before & After Pill (Overlap Center Bottom) */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[310px] sm:w-[350px] rounded-2xl bg-[#0E1424]/95 backdrop-blur-2xl border border-emerald-500/40 shadow-[0_15px_40px_rgba(0,0,0,0.8),0_0_30px_rgba(16,185,129,0.25)] p-2.5 z-30 flex items-center gap-3 transform hover:scale-103 transition-all duration-300 group">
        {/* Image thumbnail showing real before/after */}
        <div className="relative w-16 h-16 rounded-xl overflow-hidden border border-emerald-500/30 shrink-0 bg-[#070A12]">
          <Image
            src="/main-site/images/hero_edit_sample.jpg"
            alt="Express RM5 Edit Sample"
            fill
            sizes="100px"
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 mb-0.5">
            <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-black text-[10px] tracking-wider">
              RM5 / GAMBAR
            </span>
            <span className="text-[10px] font-bold text-cyan-300">DESIGN EXPRESS</span>
          </div>
          <p className="text-[11px] font-bold text-white truncate">
            {isMs ? "Buang Background & Sunting Gambar" : "Background Removal & Retouching"}
          </p>
          <p className="text-[10px] text-zinc-400 truncate">
            {isMs ? "Termasuk 2x suntingan kecil" : "Includes 2 minor revisions"}
          </p>
        </div>
        <Link
          href="/services/design"
          className="w-8 h-8 rounded-full bg-emerald-500 text-black flex items-center justify-center font-bold text-sm hover:bg-emerald-400 hover:scale-110 transition-all shrink-0 shadow-lg"
          title="Lihat Servis Design"
        >
          →
        </Link>
      </div>

      {/* Floating Pill: Live Transparency */}
      <div className="absolute -top-3 right-8 sm:right-16 z-30 hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0E1424]/90 backdrop-blur-md border border-cyan-500/40 shadow-lg text-[10px] font-bold text-cyan-300 animate-float-slow">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
        {isMs ? "Skop Telus • Tiada Caj Rahsia" : "100% Transparent Scope"}
      </div>
    </div>
  );
}
