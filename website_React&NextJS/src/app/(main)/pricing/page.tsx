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
    <div className="py-12 sm:py-16 space-y-16">
      {/* Page Header */}
      <div className="ms-container space-y-4 max-w-3xl mx-auto text-center">
        <span className="ms-pill ms-pill-teal">
          {language === "ms" ? "KATALOG HARGA & SKOP" : "PRICING & SCOPE CATALOGUE"}
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#18201D] tracking-tight">
          {language === "ms"
            ? "Ketelusan Kos Tanpa Caj Tersembunyi"
            : "Transparent Pricing Without Hidden Surprises"}
        </h1>
        <p className="text-sm sm:text-base text-[#52605A] leading-relaxed">
          {language === "ms"
            ? "Semua pakej mempunyai sempadan skop dan peruntukan suntingan yang jelas. Pilih pakej yang sesuai atau gunakan kalkulator untuk anggaran tersuai."
            : "Every package features explicit scope boundaries and revision allowances. Select your tier or use the estimator for custom configurations."}
        </p>

        {/* Global Pricing Disclaimer Note (Required by Section 09) */}
        <div className="p-3.5 rounded-xl bg-[#FAF9F5] border border-[#DDE1DA] text-xs text-[#52605A] leading-relaxed max-w-2xl mx-auto text-left sm:text-center">
          💡 <strong className="text-[#18201D]">{language === "ms" ? "Nota Ketelusan Harga:" : "Pricing Policy:"}</strong>{" "}
          {language === "ms"
            ? "Harga yang dipaparkan ialah harga permulaan mengikut skop. Pakej dan anggaran awal boleh dikemas kini. Harga akhir disahkan selepas keperluan projek dibincangkan."
            : "Displayed prices are starting estimates based on typical scope. Packages and provisional figures may be updated. Final costs are confirmed upon mutual agreement."}
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 pt-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveTab(cat.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === cat.id
                  ? "bg-[#2457E6] text-white shadow-xs"
                  : "bg-white border border-[#DDE1DA] text-[#52605A] hover:text-[#18201D] hover:bg-[#FAF9F5]"
              }`}
            >
              {cat.label[language]}
            </button>
          ))}
        </div>
      </div>

      {/* Pricing Cards Grid */}
      <div className="ms-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {displayedPackages.map((pkg) => (
            <PricingCard key={pkg.id} item={pkg} featured={pkg.featured} />
          ))}
        </div>
      </div>

      {/* Bottom Estimator Promotion */}
      <div className="ms-container">
        <div className="ms-card p-8 bg-[#FAF9F5] border border-[#DDE1DA] flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1 max-w-xl">
            <h3 className="font-extrabold text-lg text-[#18201D]">
              {language === "ms" ? "Mahukan Anggaran Tersuai Dengan Pilihan Tambahan?" : "Need a Tailored Multi-Option Estimate?"}
            </h3>
            <p className="text-xs text-[#52605A] leading-relaxed">
              {language === "ms"
                ? "Gunakan kalkulator projek interaktif kami untuk menambah halaman ekstra, dwi-bahasa, atau kuantiti imej berganda."
                : "Utilise our dynamic interactive estimator to calculate extra pages, dual languages, or multi-image quantities in real time."}
            </p>
          </div>
          <Link
            href="/calculator"
            className="ms-btn-primary text-xs py-3 px-6 rounded-xl font-bold shrink-0"
          >
            {language === "ms" ? "Buka Kalkulator Anggaran →" : "Launch Project Estimator →"}
          </Link>
        </div>
      </div>
    </div>
  );
}
