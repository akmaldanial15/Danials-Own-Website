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
    <div className="py-12 sm:py-16">
      <div className="ms-container">
        {/* Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F0EB] text-[#087A68] text-xs font-bold tracking-wider uppercase mb-4">
            {isMs ? "Koleksi & Rujukan Projek" : "Selected Work & Reference"}
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#18201D] tracking-tight leading-tight mb-4">
            {isMs ? "Hasil Kerja & Demo Konsep" : "Portfolio & Concept Demos"}
          </h1>
          <p className="text-base sm:text-lg text-[#52605A] leading-relaxed">
            {isMs
              ? "Lihat contoh sebenar dan demo konsep merangkumi laman web, sistem pengurusan, poster acara, suntingan Express dan reka bentuk visual custom. Setiap entri dilabel dengan jujur mengikut status asalnya."
              : "Explore real work and concept demos spanning websites, business systems, event posters, Express edits, and custom design. Every entry is honestly labelled according to its genuine status."}
          </p>
        </div>

        {/* Honest Status Legend */}
        <div className="p-4 rounded-xl bg-[#FAF9F5] border border-[#DDE1DA] mb-8 flex flex-wrap items-center gap-4 text-xs text-[#52605A]">
          <span className="font-bold text-[#18201D]">
            {isMs ? "Status Projek:" : "Project Status:"}
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#E6F4F1] text-[#087A68] border border-[#C4E6DF] font-semibold">
            {isMs ? "Kerja Klien Sebenar" : "Client Work"}
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#EEF2FF] text-[#2457E6] border border-[#D5E0FF] font-semibold">
            {isMs ? "Demo Konsep Studio" : "Studio Concept Demo"}
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#FAF5FF] text-[#9333ea] border border-[#E9D5FF] font-semibold">
            {isMs ? "Pratonton Sistem" : "Project Preview"}
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#FEF3C7] text-[#D97706] border border-[#FDE68A] font-semibold">
            {isMs ? "Dalam Pembangunan" : "In Development"}
          </span>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer focus:outline-hidden ${
                  isActive
                    ? "bg-[#2457E6] text-white shadow-sm"
                    : "bg-[#FFFFFF] text-[#52605A] border border-[#DDE1DA] hover:border-[#18201D] hover:text-[#18201D]"
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
          <div className="p-12 text-center rounded-2xl bg-[#FFFFFF] border border-[#DDE1DA] max-w-md mx-auto my-12">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#FAF9F5] flex items-center justify-center text-xl text-[#52605A]">
              📁
            </div>
            <h3 className="text-lg font-bold text-[#18201D] mb-2">
              {isMs ? "Tiada item dalam kategori ini" : "No items in this category"}
            </h3>
            <p className="text-xs sm:text-sm text-[#52605A] mb-6">
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
        <div className="mt-16 sm:mt-24 p-8 sm:p-10 rounded-2xl bg-[#17251F] text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-2">
              {isMs ? "Ada gaya atau idea reka bentuk yang anda minati?" : "Have a specific style or idea in mind?"}
            </h3>
            <p className="text-xs sm:text-sm text-[#A3B3AB] leading-relaxed">
              {isMs
                ? "Hantarkan rujukan gambar, laman web contoh atau lakaran ringkas. Kita boleh bincangkan kesesuaian skop dan bajet melalui WhatsApp terus."
                : "Send over your image references, inspiration links or quick sketches. We can discuss scope suitability and budget directly over WhatsApp."}
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
            <Link href="/calculator" className="ms-btn bg-white text-[#18201D] hover:bg-[#F0EFEA] text-xs sm:text-sm w-full sm:w-auto justify-center">
              {isMs ? "Kira Anggaran Bajet" : "Estimate Budget"}
            </Link>
            <Link href="/contact" className="ms-btn bg-[#2457E6] text-white hover:bg-[#1B44B8] text-xs sm:text-sm w-full sm:w-auto justify-center">
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
