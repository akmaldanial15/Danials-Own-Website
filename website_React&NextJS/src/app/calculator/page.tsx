"use client";

import React, { useState, useMemo } from "react";
import { fastTrackPackages, bespokePackages, addOns } from "@/data/packages";
import { generateWhatsAppLink } from "@/utils/whatsapp";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function PricingCalculator() {
  const { language } = useLanguage();

  const t = (key: keyof typeof translations.ms): string => {
    return translations[language][key] || translations.ms[key];
  };

  // Combine all base packages into a single flat array based on active language
  const allBasePackages = useMemo(() => {
    const groupFast = language === "ms" ? "Fast-Track (Mampu Milik)" : "Fast-Track (Budget)";
    const groupCustom = language === "ms" ? "Bespoke (Kustom & Detail)" : "Bespoke (Custom & Detail)";
    
    return [
      ...fastTrackPackages[language].map(p => ({ ...p, group: groupFast })),
      ...bespokePackages[language].map(p => ({ ...p, group: groupCustom }))
    ];
  }, [language]);

  const [selectedPkgId, setSelectedPkgId] = useState("basic");
  const [selectedAddOnIds, setSelectedAddOnIds] = useState<string[]>([]);
  const [extraPages, setExtraPages] = useState(0);

  // Find currently selected package
  const currentPackage = useMemo(() => {
    return allBasePackages.find(p => p.id === selectedPkgId) || allBasePackages[0];
  }, [selectedPkgId, allBasePackages]);

  // Handle addon toggles
  const handleAddOnToggle = (id: string) => {
    if (selectedAddOnIds.includes(id)) {
      setSelectedAddOnIds(selectedAddOnIds.filter(addonId => addonId !== id));
    } else {
      setSelectedAddOnIds([...selectedAddOnIds, id]);
    }
  };

  // Get selected addon details based on active language
  const activeAddOns = useMemo(() => {
    return addOns[language].filter(addon => selectedAddOnIds.includes(addon.id));
  }, [selectedAddOnIds, language]);

  // Calculate total price dynamically
  const totalPrice = useMemo(() => {
    const basePrice = typeof currentPackage.price === "number" ? currentPackage.price : 0;
    const addOnsTotal = activeAddOns.reduce((sum, addon) => sum + addon.price, 0);
    const extraPagesTotal = extraPages * 100; // RM100 per extra page
    
    return basePrice + addOnsTotal + extraPagesTotal;
  }, [currentPackage, activeAddOns, extraPages]);

  // Generate the WhatsApp URL
  const whatsAppUrl = useMemo(() => {
    const priceText = typeof currentPackage.price === "number" ? `RM${currentPackage.price}` : "Custom Price";
    
    let finalPackageName = currentPackage.name;
    if (extraPages > 0) {
      finalPackageName += ` (+ ${extraPages} Extra Pages)`;
    }

    const translatedAddonName = language === "ms" ? "Halaman Tambahan" : "Extra Pages";

    return generateWhatsAppLink({
      packageName: finalPackageName,
      priceText: priceText,
      selectedAddOns: [
        ...activeAddOns,
        ...(extraPages > 0 ? [{ name: `${extraPages} ${translatedAddonName}`, price: extraPages * 100 }] : [])
      ],
      totalEstimate: totalPrice
    });
  }, [currentPackage, activeAddOns, extraPages, totalPrice, language]);

  return (
    <div className="relative min-h-screen bg-zinc-950 text-zinc-100 py-16 px-4 md:py-24 md:px-8 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-[-15%] right-[-15%] w-[60%] h-[60%] rounded-full glow-blur-purple z-0 pointer-events-none" />
      <div className="absolute bottom-[-15%] left-[-15%] w-[60%] h-[60%] rounded-full glow-blur-cyan z-0 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto space-y-16">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 font-semibold border border-cyan-500/20">
            {t("calcCtaTag")}
          </span>
          <h1 className="text-4xl font-extrabold text-white tracking-tight sm:text-5xl">
            {t("calcHeader")}
          </h1>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            {t("calcDesc")}
          </p>
        </div>

        {/* Calculator Body Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto items-start">
          
          {/* Left Side: Configurator Form (7 columns) */}
          <div className="lg:col-span-7 space-y-10">
            {/* Step 1: Base Package Selection */}
            <div className="p-6 md:p-8 rounded-2xl bg-zinc-900/30 border border-zinc-900 space-y-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-full bg-purple-500/10 text-purple-400 flex items-center justify-center text-xs font-bold border border-purple-500/20">
                  1
                </span>
                {t("step1Label")}
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {allBasePackages.map((pkg) => (
                  <button
                    key={pkg.id}
                    onClick={() => setSelectedPkgId(pkg.id)}
                    className={`p-4 rounded-xl text-left border transition-all flex flex-col justify-between h-full group ${
                      selectedPkgId === pkg.id
                        ? "bg-purple-950/20 border-purple-500/50 shadow-[0_0_15px_rgba(168,85,247,0.05)]"
                        : "bg-zinc-950/60 border-zinc-900 hover:border-zinc-800 hover:bg-zinc-900/40"
                    }`}
                  >
                    <div>
                      <div className="flex justify-between items-start gap-2">
                        <span className="text-[9px] uppercase tracking-wider px-2 py-0.5 rounded bg-zinc-900 text-zinc-550 border border-zinc-850 group-hover:text-zinc-350">
                          {pkg.group}
                        </span>
                        <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center shrink-0 ${
                          selectedPkgId === pkg.id 
                            ? "border-purple-400 bg-purple-600" 
                            : "border-zinc-700 bg-transparent"
                        }`}>
                          {selectedPkgId === pkg.id && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                        </div>
                      </div>
                      <h4 className="text-sm font-bold text-zinc-200 mt-3">{pkg.name}</h4>
                      <p className="text-[10px] text-zinc-450 mt-1 leading-relaxed line-clamp-2">
                        {pkg.description}
                      </p>
                    </div>
                    <div className="mt-4 pt-2 border-t border-zinc-900 w-full text-xs font-bold text-white">
                      {typeof pkg.price === "number" ? `Mulai RM${pkg.price.toLocaleString()}` : pkg.price}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Extra Pages */}
            <div className="p-6 md:p-8 rounded-2xl bg-zinc-900/30 border border-zinc-900 space-y-6">
              <div className="flex justify-between items-center border-b border-zinc-900/50 pb-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-purple-500/10 text-purple-400 flex items-center justify-center text-xs font-bold border border-purple-500/20">
                    2
                  </span>
                  {t("step2Label")}
                </h3>
                <span className="text-xs text-zinc-400 font-bold bg-zinc-900 px-3 py-1 rounded-full border border-zinc-850">
                  RM100 / Page
                </span>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="flex items-center bg-zinc-950 border border-zinc-900 rounded-xl p-1 shrink-0">
                  <button
                    onClick={() => setExtraPages(Math.max(0, extraPages - 1))}
                    className="w-10 h-10 flex items-center justify-center text-lg font-bold text-zinc-455 hover:text-white rounded-lg hover:bg-zinc-900"
                  >
                    -
                  </button>
                  <span className="w-12 text-center text-base font-bold text-white">
                    {extraPages}
                  </span>
                  <button
                    onClick={() => setExtraPages(Math.min(20, extraPages + 1))}
                    className="w-10 h-10 flex items-center justify-center text-lg font-bold text-zinc-455 hover:text-white rounded-lg hover:bg-zinc-900"
                  >
                    +
                  </button>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {t("pageCounterDesc")}
                </p>
              </div>
            </div>

            {/* Step 3: Add-on Features selection */}
            <div className="p-6 md:p-8 rounded-2xl bg-zinc-900/30 border border-zinc-900 space-y-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-full bg-purple-500/10 text-purple-400 flex items-center justify-center text-xs font-bold border border-purple-500/20">
                  3
                </span>
                {t("step3Label")}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {addOns[language].map((addon) => {
                  const isChecked = selectedAddOnIds.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      onClick={() => handleAddOnToggle(addon.id)}
                      className={`p-4 rounded-xl text-left border transition-all flex items-center justify-between gap-4 w-full ${
                        isChecked
                          ? "bg-purple-950/20 border-purple-500/50"
                          : "bg-zinc-950/60 border-zinc-900 hover:border-zinc-800"
                      }`}
                    >
                      <div className="space-y-1">
                        <p className="text-xs sm:text-sm font-semibold text-zinc-200 leading-tight">{addon.name}</p>
                        <p className="text-[10px] text-zinc-500 capitalize">{addon.type.replace("-", " ")}</p>
                      </div>
                      <div className="flex items-center gap-3 shrink-0">
                        <span className="text-xs sm:text-sm font-bold text-purple-400">+RM{addon.price}</span>
                        <div className={`w-4.5 h-4.5 rounded border flex items-center justify-center transition-colors ${
                          isChecked 
                            ? "border-purple-400 bg-purple-600" 
                            : "border-zinc-700 bg-transparent hover:border-zinc-650"
                        }`}>
                          {isChecked && (
                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Side: Sticky Pricing Summary Card (5 columns) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-6">
            <div className="p-6 md:p-8 rounded-2xl bg-zinc-950 border border-zinc-850 shadow-xl relative overflow-hidden">
              <div className="absolute top-[-10%] right-[-10%] w-[150px] h-[150px] rounded-full bg-purple-500/5 blur-2xl pointer-events-none" />
              
              <h3 className="text-base font-bold text-zinc-200 border-b border-zinc-900 pb-3 uppercase tracking-wider">
                {t("summaryTitle")}
              </h3>

              <div className="mt-6 space-y-4 text-xs sm:text-sm">
                {/* Base Package Line */}
                <div className="flex justify-between items-start gap-4">
                  <div className="space-y-1">
                    <p className="font-bold text-zinc-100">{currentPackage.name}</p>
                    <p className="text-[10px] text-zinc-500">{t("summaryBasePkg")}</p>
                  </div>
                  <span className="font-bold text-zinc-200 shrink-0">
                    {typeof currentPackage.price === "number" ? `RM${currentPackage.price.toLocaleString()}` : "Custom"}
                  </span>
                </div>

                {/* Extra Pages Line */}
                {extraPages > 0 && (
                  <div className="flex justify-between items-center text-zinc-350 border-t border-zinc-900/50 pt-3.5">
                    <span>{extraPages}x {t("summaryExtraPages")}</span>
                    <span className="font-semibold text-zinc-200">+RM{extraPages * 100}</span>
                  </div>
                )}

                {/* Add-ons List */}
                {activeAddOns.length > 0 && (
                  <div className="border-t border-zinc-900/50 pt-3.5 space-y-3">
                    <p className="text-[10px] text-zinc-550 font-bold uppercase tracking-wider">{t("summaryAddons")}</p>
                    {activeAddOns.map((addon) => (
                      <div key={addon.id} className="flex justify-between items-center text-xs text-zinc-350">
                        <span>{addon.name}</span>
                        <span className="font-medium text-zinc-200">+RM{addon.price}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Total Price Section */}
                <div className="border-t border-zinc-900 pt-6 mt-6 flex justify-between items-baseline gap-4">
                  <span className="text-sm font-bold text-zinc-300">{t("summaryTotal")}</span>
                  <div className="text-right">
                    <span className="text-3xl font-extrabold text-white text-glow">
                      RM{totalPrice.toLocaleString()}
                    </span>
                    {currentPackage.price === "Custom" && (
                      <p className="text-[10px] text-zinc-550 mt-1 font-medium">*Custom rate applies</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Order Button */}
              <div className="mt-8">
                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center px-4 py-3.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-lg shadow-purple-950/35 hover:shadow-[0_0_20px_rgba(147,51,234,0.3)] transition-all"
                >
                  <svg className="w-4 h-4 mr-2 shrink-0 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
                  </svg>
                  {t("btnBookWhatsApp")}
                </a>
              </div>
            </div>

            {/* Terms and conditions snippet */}
            <div className="p-5 rounded-2xl bg-zinc-900/10 border border-zinc-900 space-y-3 text-xs text-zinc-550">
              <p className="font-bold text-zinc-400">{t("calcTermsTitle")}</p>
              <ul className="space-y-1.5 list-disc pl-4 leading-relaxed">
                <li>{t("calcTerm1")}</li>
                <li>{t("calcTerm2")}</li>
                <li>{t("calcTerm3")}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
