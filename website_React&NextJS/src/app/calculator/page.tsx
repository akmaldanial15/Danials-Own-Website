"use client";

import React, { useState, useMemo } from "react";
import { fastTrackPackages, bespokePackages, addOns } from "@/data/packages";
import { generateWhatsAppLink } from "@/utils/whatsapp";
import { useTranslation } from "@/hooks/useTranslation";

export default function PricingCalculator() {
  const { t, language } = useTranslation();

  const [selectedTab, setSelectedTab] = useState<"budget" | "bespoke">("bespoke");
  const [selectedPkgId, setSelectedPkgId] = useState("basic");
  const [selectedAddOnIds, setSelectedAddOnIds] = useState<string[]>([]);
  const [extraPages, setExtraPages] = useState(0);

  // Synchronize first package selection when switching tabs
  const handleTabChange = (tab: "budget" | "bespoke") => {
    setSelectedTab(tab);
    setSelectedPkgId(tab === "budget" ? "budget-basic" : "basic");
  };

  // Grouped base packages depending on active language
  const budgetPackagesList = useMemo(() => {
    return fastTrackPackages[language].map(p => ({ ...p, group: "budget" }));
  }, [language]);

  const customPackagesList = useMemo(() => {
    return bespokePackages[language].map(p => ({ ...p, group: "bespoke" }));
  }, [language]);

  const currentPackage = useMemo(() => {
    const all = [...budgetPackagesList, ...customPackagesList];
    return all.find(p => p.id === selectedPkgId) || all[0];
  }, [selectedPkgId, budgetPackagesList, customPackagesList]);

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

  // Calculate total one-time price dynamically
  const basePrice = useMemo(() => {
    return typeof currentPackage.price === "number" ? currentPackage.price : 0;
  }, [currentPackage]);

  const extraPagesTotal = useMemo(() => {
    return extraPages * 100; // RM100 per extra page
  }, [extraPages]);

  const addOnsTotal = useMemo(() => {
    return activeAddOns.reduce((sum, addon) => sum + addon.price, 0);
  }, [activeAddOns]);

  const oneTimeTotal = useMemo(() => {
    return basePrice + addOnsTotal + extraPagesTotal;
  }, [basePrice, addOnsTotal, extraPagesTotal]);

  // Define payment milestone splits dynamically based on package tier rules
  const paymentMilestones = useMemo(() => {
    const isBudget = currentPackage.id.startsWith("budget-");
    
    let depositPct = 50;
    let majorEditPct = 20;
    let launchPct = 30;

    if (isBudget) {
      if (currentPackage.id === "budget-basic" || currentPackage.id === "budget-standard") {
        depositPct = 100;
        majorEditPct = 0;
        launchPct = 0;
      } else {
        // budget-advanced or budget-value: 60% deposit, 20% edit, 20% launch
        depositPct = 60;
        majorEditPct = 20;
        launchPct = 20;
      }
    }

    const depositVal = Math.round(oneTimeTotal * (depositPct / 100));
    const majorEditVal = Math.round(oneTimeTotal * (majorEditPct / 100));
    const launchVal = oneTimeTotal - depositVal - majorEditVal;

    return {
      depositPct,
      majorEditPct,
      launchPct,
      depositVal,
      majorEditVal,
      launchVal
    };
  }, [currentPackage, oneTimeTotal]);

  // Define maintenance rules
  const maintenanceInfo = useMemo(() => {
    const isBudget = currentPackage.id.startsWith("budget-");
    let fee = 0;
    let term = "";
    let isMandatory = false;

    if (isBudget) {
      isMandatory = true;
      if (currentPackage.id === "budget-basic") {
        fee = 40;
        term = language === "ms" ? "Kontrak 2 Tahun" : "2-Year Contract";
      } else if (currentPackage.id === "budget-standard") {
        fee = 50;
        term = language === "ms" ? "Kontrak 2 Tahun" : "2-Year Contract";
      } else {
        // advanced or value
        fee = 60;
        term = language === "ms" ? "Kontrak 1 Tahun" : "1-Year Contract";
      }
    } else {
      // Detailed packages
      const hasMaintenanceAddon = selectedAddOnIds.includes("maintenance");
      if (hasMaintenanceAddon) {
        fee = 80;
        term = language === "ms" ? "Bulanan (Fleksibel)" : "Monthly (Flexible)";
      }
    }

    return { fee, term, isMandatory };
  }, [currentPackage, selectedAddOnIds, language]);

  // Generate the WhatsApp URL
  const whatsAppUrl = useMemo(() => {
    const basePriceText = typeof currentPackage.price === "number" ? `RM${currentPackage.price}` : "Custom Price";
    
    let finalPackageName = currentPackage.name;
    if (extraPages > 0) {
      finalPackageName += ` (+ ${extraPages} Extra Pages)`;
    }

    const translatedAddonName = language === "ms" ? "Halaman Tambahan" : "Extra Pages";

    // Format description text inside URL parameters
    const customSummary = [];
    if (maintenanceInfo.fee > 0) {
      customSummary.push(
        language === "ms"
          ? `Penyelenggaraan: RM${maintenanceInfo.fee}/bulan (${maintenanceInfo.term})`
          : `Maintenance: RM${maintenanceInfo.fee}/month (${maintenanceInfo.term})`
      );
    }
    customSummary.push(
      language === "ms"
        ? `Fasa Bayaran: Deposit RM${paymentMilestones.depositVal.toLocaleString()} (${paymentMilestones.depositPct}%), Draf RM${paymentMilestones.majorEditVal.toLocaleString()} (${paymentMilestones.majorEditPct}%), Pelancaran RM${paymentMilestones.launchVal.toLocaleString()} (${paymentMilestones.launchPct}%)`
        : `Milestones: Deposit RM${paymentMilestones.depositVal.toLocaleString()} (${paymentMilestones.depositPct}%), Edit RM${paymentMilestones.majorEditVal.toLocaleString()} (${paymentMilestones.majorEditPct}%), Launch RM${paymentMilestones.launchVal.toLocaleString()} (${paymentMilestones.launchPct}%)`
    );

    return generateWhatsAppLink({
      packageName: finalPackageName,
      priceText: basePriceText,
      selectedAddOns: [
        ...activeAddOns.map(addon => {
          if (addon.id === "maintenance") {
            return { ...addon, name: `${addon.name} (RM80/bln)` };
          }
          return addon;
        }),
        ...(extraPages > 0 ? [{ name: `${extraPages} ${translatedAddonName}`, price: extraPages * 100 }] : [])
      ],
      totalEstimate: oneTimeTotal,
      customText: customSummary.join("\n")
    });
  }, [currentPackage, activeAddOns, extraPages, oneTimeTotal, paymentMilestones, maintenanceInfo, language]);

  // Calculate daily equivalent value for project marketing
  const dailyValue = useMemo(() => {
    if (oneTimeTotal === 0) return 0;
    return (oneTimeTotal / 30).toFixed(2);
  }, [oneTimeTotal]);

  const hourlyValue = useMemo(() => {
    if (oneTimeTotal === 0) return 0;
    return (oneTimeTotal / 720).toFixed(2);
  }, [oneTimeTotal]);

  return (
    <div className="relative min-h-screen bg-transparent text-zinc-100 py-16 px-4 md:py-24 md:px-8 overflow-hidden">
      
      {/* Liquid moving gradient blobs in background */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] rounded-full bg-gradient-to-r from-purple-500/10 to-indigo-500/10 blur-[80px] animate-blob z-0 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-[100px] animate-blob animation-delay-2000 z-0 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full bg-gradient-to-r from-pink-500/5 to-purple-500/5 blur-[80px] animate-blob animation-delay-4000 z-0 pointer-events-none" />

      <style jsx global>{`
        @keyframes float-blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(40px, -60px) scale(1.1); }
          66% { transform: translate(-30px, 30px) scale(0.95); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: float-blob 15s infinite ease-in-out;
        }
        .animation-delay-2000 {
          animation-delay: 2.5s;
        }
        .animation-delay-4000 {
          animation-delay: 5s;
        }
        .text-glow {
          text-shadow: 0 0 15px rgba(168, 85, 247, 0.3);
        }
      `}</style>

      <div className="relative z-10 max-w-6xl mx-auto space-y-12">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-6 relative py-4">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[150px] bg-gradient-to-tr from-cyan-500/10 via-purple-500/10 to-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 font-bold border border-cyan-500/20 tracking-wider text-[11px] uppercase transition-all duration-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            {t("calcCtaTag")}
          </div>

          <h1 className="text-4xl font-black tracking-tight sm:text-6xl bg-gradient-to-r from-cyan-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent text-glow leading-tight select-none">
            {t("calcHeader")}
          </h1>

          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            {t("calcDesc")}
          </p>

          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent mx-auto mt-4" />
        </div>

        {/* Huly UI Container Frame */}
        <div className="relative rounded-3xl bg-zinc-950/80 border border-zinc-850 p-6 md:p-10 shadow-[0_30px_100px_rgba(0,0,0,0.85)] z-10">
          {/* Dashboard glow wrapper border */}
          <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-500 opacity-25 blur-[3px] -z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Configurator Form (7 columns) */}
            <div className="lg:col-span-7 space-y-10">
              
              {/* Tab Selector (inspired by ServersCamp estimate console) */}
              <div className="space-y-4">
                <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest leading-none">
                  {language === "ms" ? "FASA / KATEGORI PROJEK" : "PROJECT CATEGORY TIER"}
                </span>
                <div className="grid grid-cols-2 gap-3 p-1 rounded-2xl bg-zinc-900/30 border border-zinc-900/80">
                  <button
                    onClick={() => handleTabChange("bespoke")}
                    className={`flex flex-col items-center justify-center p-4 rounded-xl transition-all duration-350 ${
                      selectedTab === "bespoke"
                        ? "bg-zinc-900 text-purple-400 border border-purple-500/20 shadow-md"
                        : "text-zinc-450 hover:text-zinc-200"
                    }`}
                  >
                    <span className="text-sm font-bold">{language === "ms" ? "Detailed Website" : "Detailed Bespoke"}</span>
                    <span className="text-[9px] text-zinc-500 mt-1 uppercase tracking-wider">
                      {language === "ms" ? "Reka Bentuk Kustom & Sistem" : "Fully Custom & Web Systems"}
                    </span>
                  </button>
                  <button
                    onClick={() => handleTabChange("budget")}
                    className={`flex flex-col items-center justify-center p-4 rounded-xl transition-all duration-350 ${
                      selectedTab === "budget"
                        ? "bg-zinc-900 text-purple-400 border border-purple-500/20 shadow-md"
                        : "text-zinc-450 hover:text-zinc-200"
                    }`}
                  >
                    <span className="text-sm font-bold">{language === "ms" ? "Pakej Fast-Track" : "Fast-Track Budget"}</span>
                    <span className="text-[9px] text-zinc-500 mt-1 uppercase tracking-wider">
                      {language === "ms" ? "Mampu Milik & Templat Pantas" : "Budget-Friendly Templates"}
                    </span>
                  </button>
                </div>
              </div>

              {/* Package Select Grid */}
              <div className="space-y-4">
                <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest leading-none">
                  {language === "ms" ? "PILIH PAKEJ ASAS" : "CHOOSE BASE PLAN"}
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {(selectedTab === "bespoke" ? customPackagesList : budgetPackagesList).map((pkg) => (
                    <button
                      key={pkg.id}
                      onClick={() => setSelectedPkgId(pkg.id)}
                      className={`p-5 rounded-2xl text-left border transition-all flex flex-col justify-between min-h-[140px] relative group ${
                        selectedPkgId === pkg.id
                          ? "bg-purple-950/15 border-purple-500/40 shadow-[0_0_20px_rgba(168,85,247,0.05)]"
                          : "bg-zinc-900/40 border-zinc-900 hover:border-zinc-800 hover:bg-zinc-900/60"
                      }`}
                    >
                      {/* Active indicator */}
                      <div className={`absolute top-4 right-4 w-4 h-4 rounded-full border flex items-center justify-center ${
                        selectedPkgId === pkg.id ? "border-purple-400 bg-purple-600" : "border-zinc-700 bg-transparent"
                      }`}>
                        {selectedPkgId === pkg.id && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                      </div>

                      <div className="space-y-2 pr-6">
                        <h4 className="text-sm font-bold text-zinc-200">{pkg.name}</h4>
                        <p className="text-[10px] text-zinc-455 leading-relaxed line-clamp-3">
                          {pkg.description}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-zinc-900/80 w-full flex items-baseline gap-1">
                        <span className="text-[8px] text-zinc-550 font-bold uppercase tracking-wider">{t("fromText")}</span>
                        <span className="text-base font-black text-white">
                          {typeof pkg.price === "number" ? `RM${pkg.price.toLocaleString()}` : pkg.price}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Extra Pages Counter */}
              <div className="p-6 rounded-2xl bg-zinc-900/20 border border-zinc-900/80 space-y-4">
                <div className="flex justify-between items-center border-b border-zinc-900/40 pb-3">
                  <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest leading-none">
                    {language === "ms" ? "HALAMAN TAMBAHAN" : "EXTRA PAGE SLIDER"}
                  </span>
                  <span className="text-[9px] font-bold text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">
                    +RM100 / Page
                  </span>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="flex items-center bg-zinc-950 border border-zinc-900 rounded-xl p-1 shrink-0">
                    <button
                      onClick={() => setExtraPages(Math.max(0, extraPages - 1))}
                      className="w-9 h-9 flex items-center justify-center text-lg font-bold text-zinc-450 hover:text-white rounded-lg hover:bg-zinc-900 transition-colors"
                    >
                      -
                    </button>
                    <span className="w-10 text-center text-sm font-bold text-white">
                      {extraPages}
                    </span>
                    <button
                      onClick={() => setExtraPages(Math.min(20, extraPages + 1))}
                      className="w-9 h-9 flex items-center justify-center text-lg font-bold text-zinc-450 hover:text-white rounded-lg hover:bg-zinc-900 transition-colors"
                    >
                      +
                    </button>
                  </div>
                  <p className="text-[11px] text-zinc-400 leading-relaxed">
                    {t("pageCounterDesc")}
                  </p>
                </div>
              </div>

              {/* Add-on features */}
              <div className="space-y-4">
                <span className="text-[10px] text-zinc-550 font-bold uppercase tracking-widest leading-none">
                  {language === "ms" ? "CIRI-CIRI TAMBAHAN & ADD-ON" : "ADD-ON FEATURES"}
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {addOns[language].map((addon) => {
                    const isChecked = selectedAddOnIds.includes(addon.id);
                    return (
                      <button
                        key={addon.id}
                        onClick={() => handleAddOnToggle(addon.id)}
                        className={`p-4 rounded-xl text-left border transition-all flex items-center justify-between gap-4 w-full ${
                          isChecked
                            ? "bg-purple-950/15 border-purple-500/40 shadow-[0_0_10px_rgba(168,85,247,0.03)]"
                            : "bg-zinc-900/30 border-zinc-900 hover:border-zinc-800"
                        }`}
                      >
                        <div className="space-y-0.5 pr-2">
                          <p className="text-xs font-semibold text-zinc-200 leading-tight">{addon.name}</p>
                          <p className="text-[8px] text-zinc-500 uppercase tracking-wider font-bold">{addon.type.replace("-", " ")}</p>
                        </div>
                        <div className="flex items-center gap-2.5 shrink-0">
                          <span className="text-xs font-bold text-purple-400">+RM{addon.price}</span>
                          <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                            isChecked 
                              ? "border-purple-400 bg-purple-600" 
                              : "border-zinc-700 bg-transparent"
                          }`}>
                            {isChecked && (
                              <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

            {/* Sticky Pricing Summary Card (5 columns) */}
            <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-6">
              <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-850/80 shadow-2xl relative overflow-hidden">
                <div className="absolute top-[-10%] right-[-10%] w-[150px] h-[150px] rounded-full bg-purple-500/5 blur-2xl pointer-events-none" />
                
                <h3 className="text-xs font-bold text-zinc-350 border-b border-zinc-900 pb-3 uppercase tracking-wider">
                  {t("summaryTitle")}
                </h3>

                <div className="mt-5 space-y-4">
                  {/* Base Package Line */}
                  <div className="flex justify-between items-start gap-4">
                    <div className="space-y-0.5">
                      <p className="text-xs font-bold text-zinc-200">{currentPackage.name}</p>
                      <p className="text-[9px] text-zinc-500 uppercase font-semibold">{t("summaryBasePkg")}</p>
                    </div>
                    <span className="text-xs font-bold text-zinc-200 shrink-0">
                      {typeof currentPackage.price === "number" ? `RM${currentPackage.price.toLocaleString()}` : "Custom"}
                    </span>
                  </div>

                  {/* Extra Pages Line */}
                  {extraPages > 0 && (
                    <div className="flex justify-between items-center text-xs text-zinc-400 border-t border-zinc-900/50 pt-3">
                      <span>{extraPages}x {t("summaryExtraPages")}</span>
                      <span className="font-semibold text-zinc-200">+RM{extraPagesTotal}</span>
                    </div>
                  )}

                  {/* Add-ons List */}
                  {activeAddOns.length > 0 && (
                    <div className="border-t border-zinc-900/50 pt-3 space-y-2">
                      <p className="text-[8px] text-zinc-550 font-bold uppercase tracking-wider">{t("summaryAddons")}</p>
                      {activeAddOns.map((addon) => (
                        <div key={addon.id} className="flex justify-between items-center text-xs text-zinc-400">
                          <span>{addon.name}</span>
                          <span className="font-medium text-zinc-200">+RM{addon.price}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* One-Time Total Price */}
                  <div className="border-t border-zinc-900 pt-4 flex justify-between items-baseline gap-4">
                    <span className="text-xs font-bold text-zinc-350">{t("summaryTotal")}</span>
                    <div className="text-right">
                      <span className="text-2xl font-black text-white text-glow">
                        RM{oneTimeTotal.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  {/* Monthly Maintenance segment if applicable */}
                  {maintenanceInfo.fee > 0 && (
                    <div className="p-3 rounded-xl bg-purple-500/5 border border-purple-500/10 space-y-1">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-bold text-purple-400">
                          {language === "ms" ? "Penyelenggaraan Bulanan:" : "Monthly Maintenance:"}
                        </span>
                        <span className="font-bold text-white">RM{maintenanceInfo.fee}/bln</span>
                      </div>
                      <p className="text-[9px] text-zinc-550 leading-none">
                        * {maintenanceInfo.term} {maintenanceInfo.isMandatory ? `(${language === "ms" ? "Wajib" : "Mandatory"})` : ""}
                      </p>
                    </div>
                  )}

                  {/* Payment Milestone Split Breakdown details */}
                  <div className="border-t border-zinc-900/80 pt-4 space-y-2.5">
                    <span className="text-[8px] text-zinc-550 font-bold uppercase tracking-wider block">
                      {language === "ms" ? "Pecahan Fasa Bayaran" : "Milestone Payment Schedule"}
                    </span>
                    <div className="grid grid-cols-3 gap-1 bg-zinc-900/40 p-1.5 rounded-xl border border-zinc-900/60">
                      <div className="text-center p-1">
                        <span className="text-[7px] text-zinc-500 uppercase font-bold block">Deposit ({paymentMilestones.depositPct}%)</span>
                        <span className="text-[10px] font-black text-zinc-200 mt-0.5 block">RM{paymentMilestones.depositVal.toLocaleString()}</span>
                      </div>
                      <div className="text-center p-1 border-x border-zinc-900/80">
                        <span className="text-[7px] text-zinc-500 uppercase font-bold block">Edit ({paymentMilestones.majorEditPct}%)</span>
                        <span className="text-[10px] font-black text-zinc-200 mt-0.5 block">RM{paymentMilestones.majorEditVal.toLocaleString()}</span>
                      </div>
                      <div className="text-center p-1">
                        <span className="text-[7px] text-zinc-500 uppercase font-bold block">Launch ({paymentMilestones.launchPct}%)</span>
                        <span className="text-[10px] font-black text-zinc-200 mt-0.5 block">RM{paymentMilestones.launchVal.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  {/* ServersCamp Quick Equivalency Conversion Column */}
                  <div className="border-t border-zinc-900/80 pt-4 grid grid-cols-2 gap-4 text-center">
                    <div className="p-2 rounded-xl bg-zinc-900/30 border border-zinc-900/60">
                      <span className="text-[7px] text-zinc-550 font-bold uppercase block">{language === "ms" ? "KADAR HARIAN" : "DAILY EQUIVALENT"}</span>
                      <span className="text-xs font-bold text-zinc-350 mt-1 block">RM{dailyValue}</span>
                    </div>
                    <div className="p-2 rounded-xl bg-zinc-900/30 border border-zinc-900/60">
                      <span className="text-[7px] text-zinc-550 font-bold uppercase block">{language === "ms" ? "KADAR SEJAM" : "HOURLY EQUIVALENT"}</span>
                      <span className="text-xs font-bold text-zinc-350 mt-1 block">RM{hourlyValue}</span>
                    </div>
                  </div>
                </div>

                {/* Submit WhatsApp Order (Inverted color formulas: cyan gradient -> emerald green in browser) */}
                <div className="mt-6">
                  <a
                    href={whatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center px-4 py-3.5 rounded-xl text-sm font-extrabold bg-gradient-to-r from-cyan-600 to-cyan-700 text-zinc-950 hover:from-cyan-500 hover:to-cyan-600 shadow-md shadow-cyan-900/10 hover:shadow-cyan-500/25 transition-all cursor-pointer"
                  >
                    <svg className="w-4 h-4 mr-2 shrink-0 fill-current" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
                    </svg>
                    {t("btnBookWhatsApp")}
                  </a>
                </div>
              </div>

              {/* Service Terms checklist */}
              <div className="p-6 rounded-2xl bg-zinc-900/10 border border-zinc-900/80 space-y-3 text-xs text-zinc-550">
                <p className="font-bold text-zinc-400">{t("calcTermsTitle")}</p>
                <ul className="space-y-2 list-disc pl-4 leading-relaxed">
                  <li>{t("calcTerm1")}</li>
                  <li>{t("calcTerm2")}</li>
                  <li>{t("calcTerm3")}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
