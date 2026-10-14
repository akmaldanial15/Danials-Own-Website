"use client";

import React from "react";
import Link from "next/link";
import { useMainSiteLanguage } from "@/context/MainSiteLanguageContext";
import { packagesCatalog } from "@/data/main-site/packages";
import { siteConfig } from "@/data/main-site/siteConfig";
import DesignPathwayComparison from "@/components/main-site/DesignPathwayComparison";
import PricingCard from "@/components/main-site/PricingCard";
import FaqAccordion from "@/components/main-site/FaqAccordion";

export default function DesignServicePage() {
  const { language } = useMainSiteLanguage();
  const expressPackages = packagesCatalog.filter((p) => p.category === "design_express");
  const customPackages = packagesCatalog.filter((p) => p.category === "design_custom");

  return (
    <div className="py-12 sm:py-20 space-y-16 sm:space-y-24">
      {/* Hero Header */}
      <div className="ms-container space-y-5 max-w-3xl mx-auto text-center">
        <span className="ms-pill ms-pill-emerald uppercase font-black tracking-widest text-xs">
          {language === "ms" ? "GRAPHIC DESIGN & FOTO" : "GRAPHIC DESIGN & PHOTO"}
        </span>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
          {language === "ms"
            ? "Visual Kemas & Reka Bentuk Mengikut Identiti Anda"
            : "Polished Visuals & Bespoke Brand Artwork"}
        </h1>
        <p className="text-sm sm:text-lg text-zinc-300 leading-relaxed font-medium">
          {language === "ms"
            ? "Pilih antara dua laluan yang berbeza: Design Express untuk suntingan pantas serendah RM5/gambar, atau Design Custom untuk susunan teliti dari sifar."
            : "Choose between two distinct pathways: Design Express for rapid edits from RM5/image, or Design Custom for bespoke zero-base compositions."}
        </p>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-3 text-xs font-bold text-white">
          <span className="px-4 py-2 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
            ⚡ Express dari RM5 / gambar
          </span>
          <span className="px-4 py-2 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
            🎨 Custom dari RM35 (Poster, Menu, Logo, Label)
          </span>
        </div>
      </div>

      {/* Pathways Comparison Component */}
      <div className="ms-container">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            {language === "ms" ? "Perbandingan Dua Laluan Servis" : "Two Pathways Comparison"}
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400">
            {language === "ms"
              ? "Ketahui perbezaan skop agar anda memilih pakej yang tepat."
              : "Understand the scope difference so you make an informed choice."}
          </p>
        </div>

        <DesignPathwayComparison />
      </div>

      {/* Pathway A: Express Packages Grid */}
      <div className="ms-container">
        <div className="border-t border-white/10 pt-14 space-y-6">
          <div className="space-y-1.5">
            <span className="ms-pill ms-pill-emerald uppercase font-black tracking-widest text-[10px]">
              PATHWAY A
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              {language === "ms" ? "Pakej Design Express" : "Design Express Packages"}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400">
              {language === "ms" ? "Suntingan gambar pantas, buang background, dan kemas kini harga/teks." : "Fast image cutouts, background removal, and price/copy swaps."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {expressPackages.map((pkg) => (
              <PricingCard key={pkg.id} item={pkg} featured={pkg.id === "e1-single-image"} />
            ))}
          </div>
        </div>
      </div>

      {/* Pathway B: Custom Packages Grid */}
      <div className="ms-container">
        <div className="border-t border-white/10 pt-14 space-y-6">
          <div className="space-y-1.5">
            <span className="ms-pill ms-pill-cyan uppercase font-black tracking-widest text-[10px]">
              PATHWAY B
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              {language === "ms" ? "Pakej Design Custom" : "Design Custom Packages"}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400">
              {language === "ms" ? "Gubahan khas dari sifar mengikut identiti jenama dengan saiz dan susun atur teliti." : "Bespoke zero-base design aligning with your visual identity and exact print specs."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {customPackages.map((pkg) => (
              <PricingCard key={pkg.id} item={pkg} featured={pkg.featured} />
            ))}
          </div>
        </div>
      </div>

      {/* What to Prepare & File Formats */}
      <div className="ms-container">
        <div className="ms-card p-8 sm:p-12 bg-[#0E1424]/90 backdrop-blur-2xl border border-white/15 space-y-6 shadow-2xl">
          <div className="space-y-1.5 border-b border-white/10 pb-4">
            <span className="ms-pill ms-pill-emerald uppercase font-black tracking-widest text-[10px]">
              {language === "ms" ? "PANDUAN BAHAN & FAIL" : "ASSET & FILE GUIDELINES"}
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
              {language === "ms" ? "Panduan Persediaan & Jenis Fail" : "Preparation & File Delivery Notes"}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400">
              {language === "ms" ? "Pastikan rekaan siap dengan tepat dan tanpa kelewatan:" : "Ensure your designs are delivered accurately without delays:"}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <span className="text-2xl">📏</span>
              <h4 className="font-black text-sm text-white">
                {language === "ms" ? "1. Saiz & Penggunaan" : "1. Size & Context"}
              </h4>
              <p className="text-xs text-zinc-300 leading-relaxed">
                {language === "ms"
                  ? "Nyatakan jika perlukan nisbah Instagram (1:1, 4:5), poster A4, bunting 2x5 kaki, atau ukuran die-line label."
                  : "State if you need Instagram ratios (1:1, 4:5), A4 poster, 2x5 ft bunting, or exact packaging die-lines."}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <span className="text-2xl">✍️</span>
              <h4 className="font-black text-sm text-white">
                {language === "ms" ? "2. Ejaan Teks Tepat" : "2. Exact Copy"}
              </h4>
              <p className="text-xs text-zinc-300 leading-relaxed">
                {language === "ms"
                  ? "Sediakan perkataan, nombor telefon, dan senarai harga yang sudah disahkan betul untuk mengelakkan pembaziran pusingan suntingan."
                  : "Supply verified text, phone numbers, and prices to save your included revision rounds for visual polishing."}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <span className="text-2xl">📦</span>
              <h4 className="font-black text-sm text-white">
                {language === "ms" ? "3. Format Penyerahan" : "3. Deliverable Types"}
              </h4>
              <p className="text-xs text-zinc-300 leading-relaxed">
                {language === "ms"
                  ? "Fail akhir diserahkan sebagai PNG/JPG resolusi tinggi atau PDF Print-Ready. Fail editable (.ai/.psd) disahkan dalam sebut harga."
                  : "Final files provided as high-res PNG/JPG or print PDF. Editable source files (.ai/.psd) are confirmed in quotation."}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Design FAQ */}
      <div className="ms-container max-w-3xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <span className="ms-pill ms-pill-cyan uppercase font-black tracking-widest text-xs">
            FAQ
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-white">
            {language === "ms" ? "Soalan Lazim Servis Design" : "Graphic Design FAQ"}
          </h3>
          <p className="text-xs text-zinc-400">
            {language === "ms" ? "Semak jawapan tentang had RM5, fail editable, dan percetakan." : "Review answers regarding RM5 limits, source files, and print setups."}
          </p>
        </div>

        <FaqAccordion filterCategory="design" limit={4} />
      </div>

      {/* Bottom CTA */}
      <div className="ms-container text-center">
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-b from-[#0E1424] via-[#111A30] to-[#070A12] border border-cyan-500/40 max-w-3xl mx-auto space-y-5 shadow-2xl">
          <h3 className="font-black text-2xl sm:text-3xl text-white">
            {language === "ms" ? "Tempah Servis Design Anda" : "Commission Your Design Today"}
          </h3>
          <p className="text-xs sm:text-sm text-zinc-300 max-w-md mx-auto">
            {language === "ms" ? "Suntingan pantas serendah RM5 atau rekaan poster khas. Hantar brief anda di WhatsApp." : "Fast edits from RM5 or tailored poster graphics. Send your brief on WhatsApp."}
          </p>
          <div className="flex items-center justify-center gap-3 pt-2">
            <Link
              href="/calculator?category=design_express"
              className="ms-btn-secondary text-xs py-3.5 px-6 font-black uppercase tracking-wider"
            >
              {language === "ms" ? "Kira Kos" : "Calculate"}
            </Link>
            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ms-btn-primary text-xs py-3.5 px-6 font-black uppercase tracking-wider"
            >
              {language === "ms" ? "WhatsApp Danial →" : "WhatsApp Danial →"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
