"use client";

import React from "react";
import Link from "next/link";
import { useMainSiteLanguage } from "@/context/MainSiteLanguageContext";

export default function HeroMontage() {
  const { language } = useMainSiteLanguage();

  return (
    <div className="relative w-full max-w-lg lg:max-w-none mx-auto h-[440px] sm:h-[480px] lg:h-[520px] select-none">
      {/* Decorative ambient background blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-[#E8F0EB] blur-3xl pointer-events-none -z-10" />

      {/* Layer 1: The Modern Website Preview (Backdrop Left) */}
      <div className="absolute top-4 left-0 sm:left-4 w-[290px] sm:w-[330px] rounded-xl bg-[#FFFFFF] border border-[#DDE1DA] shadow-xl overflow-hidden transform -rotate-2 hover:rotate-0 transition-transform duration-500 z-10">
        {/* Browser header */}
        <div className="flex items-center gap-1.5 px-3 py-2 bg-[#F0EFEA] border-b border-[#DDE1DA]">
          <div className="w-2.5 h-2.5 rounded-full bg-[#E17055]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FDCB6E]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#00B894]" />
          <div className="ml-2 px-2.5 py-0.5 rounded bg-[#FFFFFF] text-[9px] font-mono text-[#52605A] border border-[#DDE1DA] w-36 truncate">
            danialsystem.com/preview
          </div>
        </div>
        {/* Mockup website content */}
        <div className="p-4 space-y-3 bg-[#FAF9F5]">
          <div className="flex items-center justify-between">
            <span className="font-extrabold text-[11px] text-[#18201D] tracking-tight">STUDIO JAPANDI</span>
            <span className="text-[9px] px-2 py-0.5 rounded bg-[#EEF2FF] text-[#2457E6] font-bold">
              {language === "ms" ? "Demo Konsep" : "Concept Demo"}
            </span>
          </div>
          <div className="space-y-1">
            <div className="h-4 w-4/5 bg-[#18201D] rounded-xs" />
            <div className="h-2 w-3/5 bg-[#A3B1AB] rounded-xs" />
          </div>
          <div className="grid grid-cols-2 gap-2 pt-1">
            <div className="h-16 rounded-lg bg-[#E8F0EB] border border-[#DDE1DA] flex items-center justify-center p-2">
              <span className="text-[9px] font-bold text-[#087A68]">Web Responsif</span>
            </div>
            <div className="h-16 rounded-lg bg-[#FFFFFF] border border-[#DDE1DA] flex flex-col justify-center px-2 space-y-1">
              <div className="h-2 w-full bg-[#DDE1DA] rounded-xs" />
              <div className="h-2 w-2/3 bg-[#DDE1DA] rounded-xs" />
            </div>
          </div>
          <div className="pt-2 flex items-center justify-between border-t border-[#DDE1DA] text-[10px]">
            <span className="text-[#52605A]">RM79 Starter Build</span>
            <span className="font-bold text-[#2457E6]">WhatsApp Ready →</span>
          </div>
        </div>
      </div>

      {/* Layer 2: The Art-Directed Event/Food Poster (Foreground Right) */}
      <div className="absolute top-14 sm:top-16 right-0 sm:right-4 w-[240px] sm:w-[270px] rounded-xl bg-[#FFFFFF] border border-[#DDE1DA] shadow-2xl p-4 transform rotate-3 hover:rotate-0 transition-transform duration-500 z-20">
        <div className="relative rounded-lg bg-[#17251F] text-[#F7F6F2] p-4 space-y-3 overflow-hidden">
          {/* Subtle gold/orange aesthetic badge */}
          <div className="flex items-center justify-between">
            <span className="text-[9px] font-mono tracking-widest text-[#FDCB6E] uppercase">
              KOPI PETANG
            </span>
            <span className="text-[8px] font-bold px-1.5 py-0.5 rounded bg-[#293832] text-[#A3B1AB]">
              DESIGN CUSTOM
            </span>
          </div>
          <div>
            <h5 className="font-extrabold text-sm leading-tight tracking-tight text-white">
              Signature Brews &amp; Pastry Weekend
            </h5>
            <p className="text-[10px] text-[#A3B1AB] mt-1">
              {language === "ms" ? "Gubahan poster A4 & bunting kedai" : "Bespoke A4 poster & bunting layout"}
            </p>
          </div>
          <div className="pt-2 flex items-center justify-between border-t border-[#293832]">
            <div className="text-[10px] text-[#FDCB6E] font-bold">RM35+ Pakej C1</div>
            <div className="w-5 h-5 rounded bg-[#F7F6F2] p-0.5 flex items-center justify-center">
              <div className="w-full h-full bg-[#17251F] rounded-xs" />
            </div>
          </div>
        </div>
        <div className="mt-2.5 flex items-center justify-between px-1 text-[10px]">
          <span className="font-bold text-[#18201D]">Poster &amp; Menu</span>
          <span className="text-[#52605A] text-[9px]">300 DPI Print-Ready</span>
        </div>
      </div>

      {/* Layer 3: The Label & Express Cutout Pill (Overlap Center Bottom) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[270px] sm:w-[300px] rounded-2xl bg-[#FFFFFF] border border-[#DDE1DA] shadow-xl p-3.5 z-30 flex items-center gap-3 transform hover:scale-102 transition-transform duration-300">
        <div className="w-12 h-12 rounded-xl bg-[#E8F0EB] border border-[#C4E6DF] flex flex-col items-center justify-center text-center shrink-0">
          <span className="text-[10px] font-extrabold text-[#087A68] leading-none">RM5</span>
          <span className="text-[8px] font-bold text-[#087A68] tracking-tight">EXPRESS</span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] font-extrabold text-[#18201D] truncate">
              {language === "ms" ? "Suntingan & Buang Background" : "Photo Cutout & Price Swap"}
            </span>
          </div>
          <p className="text-[10px] text-[#52605A] truncate mt-0.5">
            {language === "ms" ? "Siap cepat, 2 kali suntingan kecil" : "Fast turnaround, 2 minor revisions"}
          </p>
        </div>
        <Link
          href="/services/design"
          className="text-xs font-bold text-[#2457E6] hover:underline shrink-0"
          title="Lihat Servis Design"
        >
          →
        </Link>
      </div>
    </div>
  );
}
