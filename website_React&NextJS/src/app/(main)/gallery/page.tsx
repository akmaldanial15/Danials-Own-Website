"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { portfolioCatalog, PortfolioCategory, PortfolioItem } from "@/data/main-site/portfolio";
import PortfolioCard from "@/components/main-site/PortfolioCard";
import PortfolioModal from "@/components/main-site/PortfolioModal";
import { useMainSiteLanguage } from "@/context/MainSiteLanguageContext";

export default function GalleryPage() {
  const { language } = useMainSiteLanguage();
  const isMs = language === "ms";

  const [activeFilter, setActiveFilter] = useState<PortfolioCategory>("all");
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filterTabs: { id: PortfolioCategory; labelMs: string; labelEn: string }[] = [
    { id: "all", labelMs: "Semua", labelEn: "All" },
    { id: "website", labelMs: "Website", labelEn: "Websites" },
    { id: "systems", labelMs: "Sistem & Apps", labelEn: "Systems & Apps" },
    { id: "design_express", labelMs: "Design Express", labelEn: "Design Express" },
    { id: "design_custom", labelMs: "Design Custom", labelEn: "Design Custom" },
    { id: "poster_menu", labelMs: "Poster & Menu", labelEn: "Poster & Menu" },
    { id: "logo_packaging", labelMs: "Logo & Packaging", labelEn: "Logo & Packaging" },
  ];

  const filteredItems = useMemo(() => {
    if (activeFilter === "all") return portfolioCatalog;
    return portfolioCatalog.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="py-12 sm:py-20">
      <div className="ms-container">
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-black tracking-widest uppercase mb-4">
            {isMs ? "KOLEKSI & RUJUKAN PROJEK" : "SELECTED WORK & REFERENCE"}
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight mb-4">
            {isMs ? "Hasil Kerja & Demo Konsep" : "Portfolio & Concept Demos"}
          </h1>
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-medium">
            {isMs
              ? "Lihat contoh sebenar dan demo konsep merangkumi laman web, sistem pengurusan, poster acara, suntingan Express dan reka bentuk visual custom. Setiap entri dilabel dengan jujur mengikut status asalnya."
              : "Explore real work and concept demos spanning websites, business systems, event posters, Express edits, and custom design. Every entry is honestly labelled according to its genuine status."}
          </p>
        </div>

        {/* Honest Status Legend */}
        <div className="p-5 rounded-2xl bg-[#0E1424] border border-white/10 mb-10 flex flex-wrap items-center gap-4 text-xs text-zinc-400">
          <span className="font-black text-white">
            {isMs ? "Status Projek:" : "Project Status:"}
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 font-bold">
            {isMs ? "Kerja Klien Sebenar" : "Client Work"}
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 font-bold">
            {isMs ? "Demo Konsep Studio" : "Studio Concept Demo"}
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/15 text-purple-300 border border-purple-500/30 font-bold">
            {isMs ? "Pratonton Sistem" : "Project Preview"}
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30 font-bold">
            {isMs ? "Dalam Pembangunan" : "In Development"}
          </span>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-black transition-all whitespace-nowrap cursor-pointer focus:outline-hidden ${
                  isActive
                    ? "bg-gradient-to-r from-cyan-500 to-emerald-500 text-black shadow-lg"
                    : "bg-white/5 text-zinc-400 border border-white/10 hover:text-white hover:border-white/20"
                }`}
                aria-pressed={isActive}
              >
                {isMs ? tab.labelMs : tab.labelEn}
              </button>
            );
          })}
        </div>

        {/* Portfolio Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item) => (
              <PortfolioCard key={item.id} item={item} onSelect={setSelectedItem} />
            ))}
          </div>
        ) : (
          /* Honest Empty State */
          <div className="p-12 text-center rounded-2xl bg-[#0E1424] border border-white/10 max-w-md mx-auto my-12">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-white/5 flex items-center justify-center text-xl text-zinc-400">
              📁
            </div>
            <h3 className="text-lg font-black text-white mb-2">
              {isMs ? "Tiada item dalam kategori ini" : "No items in this category"}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 mb-6">
              {isMs
                ? "Contoh rujukan bagi kategori ini sedang disusun atau tersedia melalui sebut harga terus."
                : "Reference samples for this category are being prepared or available upon direct enquiry."}
            </p>
            <button
              type="button"
              onClick={() => setActiveFilter("all")}
              className="ms-btn ms-btn-outline text-xs"
            >
              {isMs ? "Lihat Semua Hasil Kerja" : "View All Work"}
            </button>
          </div>
        )}

        {/* Bottom CTA Banner */}
        <div className="mt-16 sm:mt-24 p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#0E1424] via-[#111A30] to-[#070A12] border border-cyan-500/40 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="max-w-xl">
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight mb-2">
              {isMs ? "Ada gaya atau idea reka bentuk yang anda minati?" : "Have a specific style or idea in mind?"}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-medium">
              {isMs
                ? "Hantarkan rujukan gambar, laman web contoh atau lakaran ringkas. Kita boleh bincangkan kesesuaian skop dan bajet melalui WhatsApp terus."
                : "Send over your image references, inspiration links or quick sketches. We can discuss scope suitability and budget directly over WhatsApp."}
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
            <Link href="/calculator" className="ms-btn-secondary text-xs sm:text-sm py-3 px-6 rounded-xl font-bold w-full sm:w-auto justify-center">
              {isMs ? "Kira Anggaran Bajet" : "Estimate Budget"}
            </Link>
            <Link href="/contact" className="ms-btn-primary text-xs sm:text-sm py-3 px-6 rounded-xl font-black uppercase tracking-wider w-full sm:w-auto justify-center">
              {isMs ? "Bincang di WhatsApp" : "Discuss on WhatsApp"}
            </Link>
          </div>
        </div>
      </div>

      {/* Accessible Detail Modal */}
      <PortfolioModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </div>
  );
}
