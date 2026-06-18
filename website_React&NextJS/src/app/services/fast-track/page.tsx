"use client";

import React from "react";
import GlowCard from "@/components/ui/GlowCard";
import { fastTrackPackages, quickFixes } from "@/data/packages";
import { generateWhatsAppLink, generateQuickFixLink } from "@/utils/whatsapp";
import { useTranslation } from "@/hooks/useTranslation";

export default function FastTrackServices() {
  const { t, language } = useTranslation();

  const currentPackages = fastTrackPackages[language];
  const currentFixes = quickFixes[language];

  return (
    <div className="relative min-h-screen bg-zinc-950 text-zinc-100 py-16 px-4 md:py-24 md:px-8 overflow-hidden">
      {/* Glow ambient background */}
      <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full glow-blur-cyan z-0 pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full glow-blur-purple z-0 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto space-y-20">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-6 relative py-4">
          {/* Subtle colored glow orb behind the header text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[150px] bg-gradient-to-tr from-cyan-500/10 via-purple-500/10 to-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

          {/* Premium category badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 font-bold border border-cyan-500/20 tracking-wider text-[11px] uppercase transition-all duration-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            {t("tagFastTrack")}
          </div>

          {/* Glowing gradient heading: Green -> Blue -> Purple */}
          <h1 className="text-4xl font-black text-white tracking-tight sm:text-6xl bg-gradient-to-r from-cyan-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent text-glow leading-tight select-none">
            {t("fastHeader")}
          </h1>

          {/* Description */}
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            {t("fastDesc")}
          </p>

        </div>

        {/* Infographic Section: Why Fast-Track? */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Card 1: Quick Launch */}
          <div className="relative group p-8 md:p-10 rounded-3xl bg-zinc-900/40 border border-zinc-850 hover:border-cyan-500/30 hover:bg-zinc-900/60 hover:shadow-[0_10px_30px_rgba(16,185,129,0.08)] transition-all duration-300">
            <div className="absolute top-6 right-6 text-[10px] font-mono font-bold tracking-widest text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-cyan-500/10 uppercase">
              2-4 DAYS
            </div>
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-2xl text-cyan-400 border border-cyan-500/20 shadow-[0_0_25px_rgba(16,185,129,0.15)] transition-transform duration-300 group-hover:scale-110">
                🚀
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-extrabold text-zinc-150">
                  {language === "ms" ? "Pelancaran Segera" : "Quick Launch"}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-405 leading-relaxed">
                  {language === "ms" 
                    ? "Sedia dilancarkan dalam tempoh 2 hingga 4 hari bekerja sahaja. Sesuai untuk pelancaran profil perniagaan ekspres."
                    : "Ready to go live in just 2 to 4 working days. Perfect for quick market entry or corporate profiles."}
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Budget Friendly */}
          <div className="relative group p-8 md:p-10 rounded-3xl bg-zinc-900/40 border border-zinc-850 hover:border-purple-500/30 hover:bg-zinc-900/60 hover:shadow-[0_10px_30px_rgba(59,130,246,0.08)] transition-all duration-300">
            <div className="absolute top-6 right-6 text-[10px] font-mono font-bold tracking-widest text-purple-400 bg-purple-500/10 px-2.5 py-0.5 rounded-full border border-purple-500/10 uppercase">
              FROM RM299
            </div>
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center text-2xl text-purple-400 border border-purple-500/20 shadow-[0_0_25px_rgba(59,130,246,0.15)] transition-transform duration-300 group-hover:scale-110">
                💰
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-extrabold text-zinc-150">
                  {language === "ms" ? "Paling Mampu Milik" : "Budget Friendly"}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-405 leading-relaxed">
                  {language === "ms" 
                    ? "Penyelesaian digital paling mesra bajet dengan bayaran sekali sahaja tanpa caj tersembunyi."
                    : "Highly budget-friendly plans with one-time payment and no hidden custom build fees."}
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: Simplicity Focus */}
          <div className="relative group p-8 md:p-10 rounded-3xl bg-zinc-900/40 border border-zinc-850 hover:border-indigo-500/30 hover:bg-zinc-900/60 hover:shadow-[0_10px_30px_rgba(139,92,246,0.08)] transition-all duration-300">
            <div className="absolute top-6 right-6 text-[10px] font-mono font-bold tracking-widest text-indigo-400 bg-indigo-500/10 px-2.5 py-0.5 rounded-full border border-indigo-500/10 uppercase">
              CLEAN CODE
            </div>
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-2xl text-indigo-400 border border-indigo-500/20 shadow-[0_0_25px_rgba(139,92,246,0.15)] transition-transform duration-300 group-hover:scale-110">
                ✨
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-extrabold text-zinc-150">
                  {language === "ms" ? "Fokus Simplicity" : "Simplicity Focus"}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-405 leading-relaxed">
                  {language === "ms" 
                    ? "Reka bentuk minimalis berimpak tinggi. Fokus kepada navigasi yang bersih dan mesra pengguna."
                    : "High-impact, clean layouts. Focusing on essential features and frictionless user experiences."}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Website Packages Grid */}
        <div className="space-y-10">
          <h2 className="text-2xl font-bold text-white border-b border-zinc-900 pb-3 flex items-center gap-3">
            <span className="w-2 h-6 bg-cyan-500 rounded"></span>
            {t("pkgHeader")}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {currentPackages.map((pkg) => (
              <GlowCard key={pkg.id} color="from-cyan-500 to-indigo-500">
                <div className="space-y-6 flex flex-col justify-between h-full">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white">{pkg.name}</h3>
                      <p className="mt-2 text-zinc-400 text-xs leading-relaxed min-h-[40px]">
                        {pkg.description}
                      </p>
                    </div>
                    
                    <div className="flex items-baseline gap-1.5 py-2 border-y border-zinc-900">
                      <span className="text-xs text-zinc-550 font-medium">{t("fromText")}</span>
                      <span className="text-3xl font-extrabold text-white">RM{pkg.price}</span>
                    </div>

                    <ul className="space-y-3 text-sm text-zinc-350 flex-grow">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <svg className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-zinc-900/40">
                    <a
                      href={generateWhatsAppLink({
                        packageName: pkg.name,
                        priceText: `Mulai RM${pkg.price}`,
                        totalEstimate: pkg.price
                      })}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center px-4 py-3 rounded-xl text-sm font-semibold bg-cyan-600 hover:bg-cyan-500 text-white transition-all shadow-md shadow-cyan-950/20"
                    >
                      {t("btnBookPkg")}
                    </a>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>

        {/* Bug Fixing Price Guide */}
        <div className="space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-zinc-900 pb-3">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="w-2 h-6 bg-purple-500 rounded"></span>
              {t("fixesHeader")}
            </h2>
            <span className="text-xs text-zinc-400 font-semibold bg-zinc-900 px-3 py-1 rounded-full border border-zinc-850">
              Basic Check: FREE
            </span>
          </div>

          <p className="text-zinc-400 text-sm max-w-3xl leading-relaxed">
            {t("fixesDesc")}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentFixes.map((fix) => (
              <div 
                key={fix.id} 
                className="p-5 rounded-2xl bg-zinc-950 border border-zinc-900 hover:border-zinc-800 transition-all flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex justify-between items-start gap-4">
                    <h4 className="text-base font-bold text-zinc-150">{fix.name}</h4>
                    <span className="text-xs font-bold text-purple-400 bg-purple-500/10 px-2.5 py-0.5 rounded border border-purple-500/10 shrink-0">
                      RM{fix.price === 0 ? "FREE" : fix.price + "+"}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-450 leading-relaxed min-h-[48px]">
                    {fix.desc}
                  </p>
                </div>
                
                <div className="pt-4 border-t border-zinc-900/50 mt-4">
                  <a
                    href={generateQuickFixLink(fix.name, fix.price)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center px-3.5 py-2 rounded-xl text-xs font-semibold bg-zinc-900 hover:bg-zinc-850 text-zinc-300 border border-zinc-850 transition-all hover:text-white"
                  >
                    {t("btnDiscussFix")}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Support note */}
        <div className="p-6 rounded-2xl bg-zinc-900/20 border border-zinc-900 max-w-3xl mx-auto flex items-start gap-4">
          <svg className="w-6 h-6 text-cyan-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div className="space-y-1 text-xs sm:text-sm text-zinc-400">
            <p className="font-bold text-zinc-200">{t("supportNoteTitle")}</p>
            <p className="leading-relaxed">
              {t("supportNoteText")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
