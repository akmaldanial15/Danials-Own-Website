"use client";

import React from "react";
import Link from "next/link";
import GlowCard from "@/components/ui/GlowCard";
import { bespokePackages } from "@/data/packages";
import { generateWhatsAppLink } from "@/utils/whatsapp";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function CustomServices() {
  const { language } = useLanguage();

  const t = (key: keyof typeof translations.ms): string => {
    return translations[language][key] || translations.ms[key];
  };

  const currentBespoke = bespokePackages[language];

  return (
    <div className="relative min-h-screen bg-zinc-950 text-zinc-100 py-16 px-4 md:py-24 md:px-8 overflow-hidden">
      {/* Glow ambient background */}
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full glow-blur-purple z-0 pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[55%] h-[55%] rounded-full glow-blur-cyan z-0 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto space-y-20">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-400 font-semibold border border-purple-500/20">
            {t("tagBespoke")}
          </span>
          <h1 className="text-4xl font-extrabold text-white tracking-tight sm:text-5xl">
            {t("customHeader")}
          </h1>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            {t("customDesc")}
          </p>
        </div>

        {/* Value Pitch Section: Why Custom? */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-zinc-900/20 border border-zinc-850 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 border border-purple-500/20">
              ⚡
            </div>
            <h3 className="text-lg font-bold text-white">{t("pitch1Title")}</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              {t("pitch1Desc")}
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-zinc-900/20 border border-zinc-850 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 border border-cyan-500/20">
              🛡️
            </div>
            <h3 className="text-lg font-bold text-white">{t("pitch2Title")}</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              {t("pitch2Desc")}
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-zinc-900/20 border border-zinc-850 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 border border-indigo-500/20">
              🤖
            </div>
            <h3 className="text-lg font-bold text-white">{t("pitch3Title")}</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              {t("pitch3Desc")}
            </p>
          </div>
        </div>

        {/* Packages Grid */}
        <div className="space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-zinc-900 pb-3">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="w-2 h-6 bg-purple-500 rounded"></span>
              {t("pkgCustomHeader")}
            </h2>
            <Link
              href="/calculator"
              className="text-xs text-purple-400 hover:text-purple-300 font-semibold bg-purple-500/10 px-3.5 py-1.5 rounded-full border border-purple-500/25 transition-all"
            >
              {t("btnCalcCustom")}
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentBespoke.map((pkg) => (
              <GlowCard key={pkg.id} color="from-purple-500 to-indigo-600">
                <div className="flex flex-col justify-between h-full space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-white">{pkg.name}</h3>
                    <p className="text-xs text-zinc-400 leading-relaxed min-h-[48px]">
                      {pkg.description}
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-baseline gap-1 py-1.5 border-t border-zinc-900">
                      <span className="text-xs text-zinc-550">{t("fromText")}</span>
                      <span className="text-2xl font-extrabold text-white">
                        {typeof pkg.price === "number" ? `RM${pkg.price.toLocaleString()}` : pkg.price}
                      </span>
                    </div>

                    {pkg.features && (
                      <ul className="space-y-2 text-xs text-zinc-350 border-t border-zinc-900/50 pt-3 flex-grow">
                        {pkg.features.slice(0, 5).map((feature, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <svg className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{feature}</span>
                          </li>
                        ))}
                        {pkg.features.length > 5 && (
                          <li className="text-[10px] text-zinc-500 font-medium pl-5">
                            + {pkg.features.length - 5} lagi...
                          </li>
                        )}
                      </ul>
                    )}

                    <div className="pt-2">
                      <a
                        href={generateWhatsAppLink({
                          packageName: pkg.name,
                          priceText: typeof pkg.price === "number" ? `Mulai RM${pkg.price}` : "Custom Price",
                          totalEstimate: typeof pkg.price === "number" ? pkg.price : 0
                        })}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-full items-center justify-center px-4 py-2.5 rounded-xl text-xs font-semibold bg-purple-600 hover:bg-purple-500 text-white transition-all shadow-md shadow-purple-950/20"
                      >
                        {t("btnDiscussDesign")}
                      </a>
                    </div>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>

        {/* Process Steps Info */}
        <div className="p-8 rounded-2xl bg-zinc-900/20 border border-zinc-900 max-w-4xl mx-auto space-y-6">
          <h3 className="text-lg font-bold text-white text-center">{t("processTitle")}</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 text-center">
            <div className="space-y-1">
              <div className="w-8 h-8 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 font-bold mx-auto text-xs">
                1
              </div>
              <h4 className="text-xs font-bold text-zinc-200 mt-2">{t("step1Title")}</h4>
              <p className="text-[10px] text-zinc-550 leading-relaxed">{t("step1Desc")}</p>
            </div>
            <div className="space-y-1">
              <div className="w-8 h-8 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 font-bold mx-auto text-xs">
                2
              </div>
              <h4 className="text-xs font-bold text-zinc-200 mt-2">{t("step2Title")}</h4>
              <p className="text-[10px] text-zinc-550 leading-relaxed">{t("step2Desc")}</p>
            </div>
            <div className="space-y-1">
              <div className="w-8 h-8 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 font-bold mx-auto text-xs">
                3
              </div>
              <h4 className="text-xs font-bold text-zinc-200 mt-2">{t("step3Title")}</h4>
              <p className="text-[10px] text-zinc-550 leading-relaxed">{t("step3Desc")}</p>
            </div>
            <div className="space-y-1">
              <div className="w-8 h-8 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 font-bold mx-auto text-xs">
                4
              </div>
              <h4 className="text-xs font-bold text-zinc-200 mt-2">{t("step4Title")}</h4>
              <p className="text-[10px] text-zinc-550 leading-relaxed">{t("step4Desc")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
