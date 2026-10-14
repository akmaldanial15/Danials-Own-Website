"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useMainSiteLanguage } from "@/context/MainSiteLanguageContext";
import { packagesCatalog, ServiceCategory } from "@/data/main-site/packages";
import { siteConfig } from "@/data/main-site/siteConfig";
import PricingCard from "@/components/main-site/PricingCard";

export default function PricingCataloguePage() {
  const { language } = useMainSiteLanguage();
  const [activeTab, setActiveTab] = useState<ServiceCategory | "all">("all");

  const categories: { id: ServiceCategory | "all"; label: { ms: string; en: string } }[] = [
    { id: "all", label: { ms: "Semua Servis", en: "All Services" } },
    { id: "website", label: { ms: "Laman Web", en: "Websites" } },
    { id: "design_express", label: { ms: "Design Express", en: "Design Express" } },
    { id: "design_custom", label: { ms: "Design Custom", en: "Design Custom" } },
    { id: "repair", label: { ms: "Pembaikan Website", en: "Website Repair" } },
    { id: "systems", label: { ms: "Sistem & Apps", en: "Systems & Apps" } },
  ];

  const displayedPackages = activeTab === "all"
    ? packagesCatalog
    : packagesCatalog.filter((pkg) => pkg.category === activeTab);

  return (
    <div className="py-12 sm:py-20 space-y-16">
      {/* Page Header */}
      <div className="ms-container space-y-5 max-w-3xl mx-auto text-center">
        <span className="ms-pill ms-pill-cyan uppercase font-black tracking-widest text-xs">
          {language === "ms" ? "KATALOG HARGA & SKOP" : "PRICING & SCOPE CATALOGUE"}
        </span>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
          {language === "ms"
            ? "Ketelusan Kos Tanpa Caj Tersembunyi"
            : "Transparent Pricing Without Hidden Surprises"}
        </h1>
        <p className="text-sm sm:text-lg text-zinc-300 leading-relaxed font-medium">
          {language === "ms"
            ? "Semua pakej mempunyai sempadan skop dan peruntukan suntingan yang jelas. Pilih pakej yang sesuai atau gunakan kalkulator untuk anggaran tersuai."
            : "Every package features explicit scope boundaries and revision allowances. Select your tier or use the estimator for custom configurations."}
        </p>

        {/* Global Pricing Disclaimer Note (Required by Section 09) */}
        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-zinc-300 leading-relaxed max-w-2xl mx-auto text-left sm:text-center">
          💡 <strong className="text-white">{language === "ms" ? "Nota Ketelusan Harga:" : "Pricing Policy:"}</strong>{" "}
          {language === "ms"
            ? "Harga yang dipaparkan ialah harga permulaan mengikut skop. Pakej dan anggaran awal boleh dikemas kini. Harga akhir disahkan selepas keperluan projek dibincangkan."
            : "Displayed prices are starting estimates based on typical scope. Packages and provisional figures may be updated. Final costs are confirmed upon mutual agreement."}
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-black transition-all cursor-pointer ${
                activeTab === cat.id
                  ? "bg-gradient-to-r from-cyan-500 to-emerald-500 text-black shadow-lg"
                  : "bg-white/5 text-zinc-400 hover:text-white border border-white/10"
              }`}
            >
              {cat.label[language]}
            </button>
          ))}
        </div>
      </div>

      {/* Pricing Grid */}
      <div className="ms-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayedPackages.map((pkg) => (
            <PricingCard key={pkg.id} item={pkg} featured={pkg.featured} />
          ))}
        </div>
      </div>

      {/* Bottom Estimator Prompt */}
      <div className="ms-container max-w-3xl mx-auto">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0E1424]/90 backdrop-blur-2xl border border-white/15 text-center space-y-4 shadow-2xl">
          <h3 className="text-xl sm:text-2xl font-black text-white">
            {language === "ms" ? "Perlukan gabungan pakej atau skop berbeza?" : "Need a combined bundle or custom scope?"}
          </h3>
          <p className="text-xs sm:text-sm text-zinc-300 max-w-lg mx-auto">
            {language === "ms"
              ? "Gunakan kalkulator bajet interaktif kami untuk mengira anggaran pelbagai item sekaligus atau terus berbincang di WhatsApp."
              : "Use our interactive budget estimator to calculate composite requests or chat directly on WhatsApp."}
          </p>
          <div className="flex items-center justify-center gap-3 pt-2">
            <Link
              href="/calculator"
              className="ms-btn-primary text-xs py-3.5 px-6 font-black uppercase tracking-wider"
            >
              {language === "ms" ? "Buka Kalkulator Bajet →" : "Open Estimator →"}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
