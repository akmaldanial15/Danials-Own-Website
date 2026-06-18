"use client";

import React, { useState } from "react";
import { portfolioItems } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const { language } = useLanguage();

  const t = (key: keyof typeof translations.ms): string => {
    return translations[language][key] || translations.ms[key];
  };

  const categories = [
    "All",
    "Simple Website",
    "Standard Website",
    "Advanced Website",
    "Customize Website"
  ];

  // Load localized portfolio array
  const currentPortfolio = portfolioItems[language];

  const filteredItems = filter === "All" 
    ? currentPortfolio 
    : currentPortfolio.filter(item => item.category === filter);

  const getTranslatedCategoryFilter = (cat: string) => {
    if (cat === "All") return t("filterAll");
    return cat; // The rest are English package titles, keep them
  };

  return (
    <div className="relative min-h-screen bg-zinc-950 text-zinc-100 py-16 px-4 md:py-24 md:px-8 overflow-hidden">
      {/* Glow background */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] glow-blur-purple z-0 pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[50%] h-[50%] glow-blur-cyan z-0 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto space-y-16">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 font-semibold border border-indigo-500/20">
            {t("navGallery")}
          </span>
          <h1 className="text-4xl font-extrabold text-white tracking-tight sm:text-5xl">
            {t("galHeader")}
          </h1>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            {t("galDesc")}
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-2xl mx-auto border-b border-zinc-900 pb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                filter === cat
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-900/20"
                  : "bg-zinc-900/60 text-zinc-450 hover:text-zinc-200 border border-zinc-850 hover:border-zinc-800"
              }`}
            >
              {getTranslatedCategoryFilter(cat)}
            </button>
          ))}
        </div>

        {/* Gallery Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="group rounded-2xl bg-zinc-900/30 border border-zinc-850 hover:border-zinc-800 transition-all flex flex-col justify-between overflow-hidden"
            >
              {/* Card visual showcase (Mock wireframe device view) */}
              <div className="relative aspect-video w-full bg-zinc-950 flex items-center justify-center p-6 border-b border-zinc-850">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 to-cyan-500/5" />
                <div className="w-full h-full rounded-xl border border-zinc-850 border-dashed bg-zinc-900/20 p-4 flex flex-col justify-between relative overflow-hidden group-hover:border-zinc-800 transition-colors">
                  <div className="flex justify-between items-center text-[10px] text-zinc-650">
                    <span>{"DANIAL'S DEV SERVER"}</span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      LIVE PREVIEW
                    </span>
                  </div>
                  
                  <div className="text-center my-auto px-4">
                    <p className="text-lg font-bold text-zinc-200 group-hover:text-purple-400 transition-colors">{item.title}</p>
                    <p className="text-xs text-zinc-500 mt-1 font-medium">{item.subtitle}</p>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-[9px] text-zinc-600 uppercase font-bold tracking-wider">{item.category}</span>
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-zinc-800"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-zinc-800"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card info */}
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-purple-400">{item.category}</span>
                    <h3 className="text-lg font-bold text-white mt-1">{item.title}</h3>
                  </div>
                  <span className="text-xs font-semibold text-zinc-400 px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-800">
                    {item.priceClass}
                  </span>
                </div>
                
                <p className="text-zinc-455 text-sm leading-relaxed">
                  {item.description}
                </p>

                <div className="space-y-1.5 pt-3 border-t border-zinc-900">
                  <p className="text-[10px] text-zinc-550 font-bold uppercase tracking-wider">{t("techInvolved")}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {item.tech.map((t) => (
                      <span key={t} className="text-xs px-2.5 py-0.5 rounded bg-zinc-900 text-zinc-350 border border-zinc-85">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={`https://wa.me/60136632092?text=Hi%20Danial,%20saya%20tertarik%20dengan%20projek%20${encodeURIComponent(item.title)}%20dan%20berminat%20untuk%20buat%20laman%20seperti%20ini.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center px-4 py-2.5 rounded-xl text-xs font-semibold bg-zinc-900 hover:bg-zinc-850 text-zinc-300 border border-zinc-850 transition-all hover:text-white"
                  >
                    {t("btnSimilarProject")}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
