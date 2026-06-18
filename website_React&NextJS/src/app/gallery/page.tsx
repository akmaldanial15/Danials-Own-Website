"use client";

import React, { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { portfolioItems } from "@/data/portfolio";
import { useTranslation } from "@/hooks/useTranslation";

function GalleryContent() {
  const { t, language } = useTranslation();
  const searchParams = useSearchParams();
  const filterParam = searchParams.get("filter");

  const [filter, setFilter] = useState("All");

  // Update filter state if query parameter changes
  useEffect(() => {
    if (filterParam) {
      setFilter(filterParam);
    }
  }, [filterParam]);

  const categories = [
    { id: "All", labelKey: "filterAll" as const },
    { id: "Web (Redesign & Upgrades)", labelKey: "filterRedesign" as const },
    { id: "Web (From Scratch)", labelKey: "filterScratch" as const },
    { id: "App & System Integration", labelKey: "filterIntegration" as const }
  ];

  // Load localized portfolio array
  const currentPortfolio = useMemo(() => {
    return portfolioItems[language] || portfolioItems.ms;
  }, [language]);

  const filteredItems = useMemo(() => {
    return filter === "All" 
      ? currentPortfolio 
      : currentPortfolio.filter(item => item.category === filter);
  }, [filter, currentPortfolio]);

  return (
    <div className="relative min-h-screen bg-zinc-950 text-zinc-100 py-16 px-4 md:py-24 md:px-8 overflow-hidden">
      {/* Ambient glowing backdrops (Huly style) */}
      <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full glow-blur-purple z-0 pointer-events-none opacity-40" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full glow-blur-cyan z-0 pointer-events-none opacity-30" />
      
      {/* Central light beam */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[1px] h-[800px] bg-gradient-to-b from-indigo-500/20 via-purple-500/10 to-transparent z-0 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto space-y-12">
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
            {t("navGallery")}
          </div>

          {/* Glowing gradient heading: Green -> Blue -> Purple */}
          <h1 className="text-4xl font-black text-white tracking-tight sm:text-6xl bg-gradient-to-r from-cyan-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent text-glow leading-tight select-none">
            {t("galHeader")}
          </h1>

          {/* Description */}
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            {t("galDesc")}
          </p>

          {/* Subtle horizontal gradient divider line */}
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent mx-auto mt-4" />
        </div>

        {/* Huly-Style Segmented Capsule Filter Bar */}
        <div className="flex justify-center">
          <div className="inline-flex flex-wrap p-1.5 rounded-2xl bg-zinc-900/60 border border-zinc-850/80 backdrop-blur-md gap-1.5 shadow-2xl">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                  filter === cat.id
                    ? "bg-gradient-to-r from-cyan-600 to-purple-600 text-white shadow-[0_4px_20px_rgba(59,130,246,0.25)] border border-cyan-500/10"
                    : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/40 border border-transparent"
                }`}
              >
                {t(cat.labelKey)}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {filteredItems.map((item) => {
            // Determine column span for Bento Grid layout
            const isLargeCard = item.id === "ivinas-florist";
            
            return (
              <div 
                key={item.id} 
                className={`group rounded-2xl bg-zinc-900/35 border border-zinc-850 hover:border-purple-500/30 transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-xl hover:shadow-[0_0_30px_rgba(59,130,246,0.08)] ${
                  isLargeCard ? "md:col-span-2" : "md:col-span-1"
                }`}
              >
                {/* Visual Showcase (High-Fidelity Mockups based on Huly theme) */}
                <div className="relative aspect-video w-full bg-zinc-950 border-b border-zinc-850 overflow-hidden flex items-center justify-center p-5 select-none">
                  {/* Glowing background in mockups */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 to-cyan-500/5 z-0" />
                  
                  {/* Mockup Container */}
                  <div className="w-full h-full rounded-xl border border-zinc-900 bg-zinc-950/60 relative overflow-hidden flex flex-col justify-between p-3.5 shadow-2xl transition-all duration-500 group-hover:scale-[1.01] group-hover:border-zinc-800">
                    <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
                    
                    {/* Header of the UI Mockup */}
                    <div className="flex justify-between items-center text-[8px] font-mono text-zinc-650 tracking-widest relative z-10">
                      <span>PROJECT PREVIEW</span>
                      <span className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        LIVE_SYSTEM
                      </span>
                    </div>

                    {/* High-Fidelity UI Content based on Project ID */}
                    <div className="my-auto relative z-10 flex flex-col justify-center h-full">
                      {/* 1. CLINIC UPGRADE MOCKUP */}
                      {item.id === "clinic-upgrade" && (
                        <div className="space-y-2.5 text-left w-full max-w-[200px] mx-auto">
                          <div className="flex items-center justify-between bg-zinc-900/80 p-2 rounded-lg border border-zinc-800">
                            <div>
                              <p className="text-[8px] font-bold text-zinc-300">Dr. Zul Dental Clinic</p>
                              <span className="text-[6px] text-emerald-400 font-bold bg-emerald-950/50 px-1 py-0.2 rounded border border-emerald-500/20">SSL SECURED</span>
                            </div>
                            <div className="text-[12px] animate-pulse">🦷</div>
                          </div>
                          {/* Speed Gauge comparison */}
                          <div className="flex items-center justify-center gap-4 py-1.5">
                            <div className="text-center">
                              <div className="w-9 h-9 rounded-full border border-red-500/30 bg-red-950/20 flex items-center justify-center text-[9px] text-red-400 font-bold font-mono">
                                34%
                              </div>
                              <p className="text-[5px] text-zinc-500 mt-1 uppercase">Before Speed</p>
                            </div>
                            <div className="text-zinc-650 text-xs font-bold">➔</div>
                            <div className="text-center">
                              <div className="w-10 h-10 rounded-full border border-emerald-500/50 bg-emerald-950/20 flex items-center justify-center text-[10px] text-emerald-400 font-black font-mono shadow-[0_0_12px_rgba(16,185,129,0.3)]">
                                98%
                              </div>
                              <p className="text-[5px] text-zinc-300 mt-1 uppercase font-bold">Lighthouse Boost</p>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* 2. RASA NUSANTARA CAFE MOCKUP */}
                      {item.id === "rasa-nusantara" && (
                        <div className="space-y-2.5 w-full max-w-[200px] mx-auto text-left">
                          {/* Floating menu preview card */}
                          <div className="bg-zinc-900/60 p-2.5 rounded-xl border border-zinc-800/80 space-y-1.5 shadow-lg relative overflow-hidden">
                            <div className="absolute -top-6 -right-6 w-12 h-12 rounded-full bg-amber-500/10 blur-md" />
                            <div className="flex justify-between items-center">
                              <span className="text-[7px] text-zinc-550 font-bold uppercase tracking-wider">Today's Special</span>
                              <span className="text-[6px] px-1 py-0.2 rounded bg-amber-500/10 text-amber-400 font-semibold border border-amber-500/10">Cafe Menu</span>
                            </div>
                            <div className="flex gap-2 items-center">
                              <div className="w-7 h-7 rounded bg-gradient-to-tr from-amber-500 to-orange-500 shrink-0 shadow-[0_0_8px_rgba(245,158,11,0.2)] flex items-center justify-center text-xs">☕</div>
                              <div className="space-y-0.5">
                                <h5 className="text-[8px] font-bold text-white">Roti Jala Premium</h5>
                                <p className="text-[6px] text-zinc-455">Warm served with chicken curry.</p>
                              </div>
                            </div>
                            <div className="flex justify-between items-center text-[7px] pt-1.5 border-t border-zinc-950">
                              <span className="text-zinc-500">⭐ 4.9 (240 reviews)</span>
                              <span className="font-bold text-white">RM12.00</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* 3. ADMIN PORTAL MOCKUP */}
                      {item.id === "admin-management" && (
                        <div className="flex items-stretch gap-3 w-full h-[100px] text-left">
                          {/* Mini Sidebar */}
                          <div className="w-14 rounded-lg bg-zinc-950/60 border border-zinc-900 p-1.5 flex flex-col justify-between shrink-0">
                            <div className="space-y-1">
                              <div className="w-7 h-1.5 bg-purple-500/30 rounded" />
                              <div className="w-9 h-1 bg-zinc-800 rounded" />
                              <div className="w-8 h-1 bg-zinc-800 rounded" />
                            </div>
                            <div className="w-full h-3 rounded bg-zinc-900" />
                          </div>
                          {/* Mini Board with circular chart */}
                          <div className="flex-grow rounded-lg bg-zinc-900/50 border border-zinc-800 p-2.5 flex items-center justify-between gap-2">
                            <div className="space-y-2">
                              <p className="text-[7px] text-zinc-500 font-mono leading-none">STAFF UTILIZATION</p>
                              <h5 className="text-[12px] font-black text-white leading-none">84.2%</h5>
                              <div className="flex gap-1">
                                <span className="w-3 h-1 bg-purple-500 rounded-sm"></span>
                                <span className="w-4 h-1 bg-cyan-400 rounded-sm"></span>
                              </div>
                            </div>
                            {/* Circular graphic */}
                            <div className="relative w-12 h-12 shrink-0 flex items-center justify-center">
                              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                                <path className="text-zinc-800" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                <path className="text-purple-500 stroke-dasharray-[84,100]" strokeWidth="3.2" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                              </svg>
                              <span className="absolute text-[7px] font-bold text-zinc-200">84%</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* 4. FUTURE EXCELLENCE ACADEMY */}
                      {item.id === "future-excellence" && (
                        <div className="space-y-2.5 w-full max-w-[200px] mx-auto text-left">
                          {/* Video call thumbnail */}
                          <div className="relative rounded-xl border border-zinc-800 bg-zinc-900/80 p-2.5 shadow-xl space-y-2 overflow-hidden">
                            <div className="absolute top-0 right-0 w-2 h-2 rounded-bl-lg bg-red-500/80 animate-ping" />
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-400 to-indigo-500 flex items-center justify-center text-[10px] font-black text-white shrink-0 border border-zinc-700">
                                FT
                              </div>
                              <div>
                                <p className="text-[8px] font-bold text-white leading-none">Matematik Tambahan</p>
                                <span className="text-[6px] text-zinc-550 mt-1 block">Live Classroom Sync</span>
                              </div>
                            </div>
                            <div className="space-y-1 pt-1.5 border-t border-zinc-950">
                              <div className="flex justify-between text-[6px] text-zinc-400">
                                <span>Syllabus Covered</span>
                                <span>78%</span>
                              </div>
                              <div className="w-full bg-zinc-800 rounded-full h-1">
                                <div className="bg-cyan-400 h-1 rounded-full" style={{ width: "78%" }} />
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* 5. IVINA'S FLORIST E-COMMERCE MOCKUP (Spans 2 columns, extra wide) */}
                      {item.id === "ivinas-florist" && (
                        <div className="flex items-center gap-6 w-full text-left">
                          {/* Florist Product catalog */}
                          <div className="w-36 bg-zinc-900/60 p-2.5 rounded-xl border border-zinc-800/80 space-y-1.5 shrink-0 hidden sm:block">
                            <div className="w-full aspect-[4/3] rounded bg-gradient-to-br from-pink-500/10 to-purple-500/5 border border-purple-500/10 flex items-center justify-center text-lg">🌹</div>
                            <h5 className="text-[8px] font-bold text-white">Red Rose Bouquet</h5>
                            <div className="flex justify-between items-center text-[7px]">
                              <span className="text-zinc-500">99 in stock</span>
                              <span className="font-bold text-purple-400">RM180</span>
                            </div>
                          </div>
                          {/* Stripe Payment Gateway Pop up Overlay */}
                          <div className="flex-grow rounded-xl bg-zinc-900 border border-purple-500/30 p-3 shadow-2xl relative overflow-hidden space-y-2.5">
                            <div className="absolute top-[-10%] right-[-10%] w-[100px] h-[100px] rounded-full bg-purple-500/10 blur-xl pointer-events-none" />
                            <div className="flex justify-between items-center">
                              <span className="text-[7px] text-zinc-400 font-bold uppercase tracking-wider">Stripe Checkout</span>
                              <span className="text-[6px] font-bold text-emerald-400 bg-emerald-950/60 px-1 py-0.2 rounded border border-emerald-500/20 flex items-center gap-0.5">
                                🔒 SECURED
                              </span>
                            </div>
                            {/* Visa card details */}
                            <div className="bg-zinc-950/80 p-2 rounded-lg border border-zinc-850 space-y-1 font-mono text-[7px] text-zinc-350">
                              <p>CARD NUMBER</p>
                              <p className="text-white font-bold text-[8px] tracking-wide">**** **** **** 4242</p>
                              <div className="flex justify-between text-[6px] text-zinc-500 pt-1">
                                <span>EXP: 12/29</span>
                                <span>CVC: ***</span>
                              </div>
                            </div>
                            <button className="w-full py-1.5 rounded-lg bg-purple-600 text-[8px] font-bold text-white text-center hover:bg-purple-500 shadow-md shadow-purple-950/40">
                              PAY RM180.00
                            </button>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Footer of the UI Mockup */}
                    <div className="flex justify-between items-center text-[7px] text-zinc-550 relative z-10 pt-2 border-t border-zinc-900/60">
                      <span>CLIENT: DANIAL_OWN_CLIENT</span>
                      <span>v2.1</span>
                    </div>
                  </div>
                </div>

                {/* Card Info */}
                <div className="p-6 flex-grow flex flex-col justify-between space-y-4 text-left">
                  <div className="space-y-2.5">
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        {/* Custom visual tag */}
                        <span className="text-[10px] uppercase tracking-wider font-bold text-purple-400">
                          {item.category}
                        </span>
                        <h3 className="text-xl font-bold text-white mt-1 group-hover:text-purple-400 transition-colors">
                          {item.title}
                        </h3>
                      </div>
                      <span className="text-xs font-bold text-zinc-350 px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 shrink-0">
                        {item.priceClass}
                      </span>
                    </div>
                    
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Technology Used */}
                  <div className="space-y-4 pt-4 border-t border-zinc-900/60 w-full">
                    <div>
                      <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider mb-2">
                        {t("techInvolved")}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {item.tech.map((t) => (
                          <span key={t} className="text-xs px-2.5 py-0.5 rounded bg-zinc-900 text-zinc-350 border border-zinc-850">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* WhatsApp Action button */}
                    <div className="pt-2">
                      <a
                        href={`https://wa.me/60136632092?text=Hi%20Danial,%20saya%20berminat%20dengan%20projek%20${encodeURIComponent(item.title)}%20(${item.category})%20dan%20mahu%20bertanya%20tentang%20servis%20seperti%20ini.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-full items-center justify-center px-4 py-3 rounded-xl text-xs font-semibold bg-zinc-900 hover:bg-zinc-850 text-zinc-350 border border-zinc-850 hover:border-zinc-800 transition-all hover:text-white animate-pulse-subtle"
                      >
                        {t("btnSimilarProject")}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function Gallery() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-zinc-950 text-zinc-400 flex items-center justify-center font-semibold">
        Loading Showcase Gallery...
      </div>
    }>
      <GalleryContent />
    </Suspense>
  );
}
