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
    <div className="py-12 sm:py-16 space-y-16 sm:space-y-24">
      {/* Hero Header */}
      <div className="ms-container space-y-4 max-w-3xl mx-auto text-center">
        <span className="ms-pill ms-pill-teal">
          {language === "ms" ? "GRAPHIC DESIGN & FOTO" : "GRAPHIC DESIGN & PHOTO"}
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#18201D] tracking-tight">
          {language === "ms"
            ? "Visual Kemas & Reka Bentuk Mengikut Identiti Anda"
            : "Polished Visuals & Bespoke Brand Artwork"}
        </h1>
        <p className="text-sm sm:text-base text-[#52605A] leading-relaxed">
          {language === "ms"
            ? "Pilih antara dua laluan yang berbeza: Design Express untuk suntingan pantas serendah RM5/gambar, atau Design Custom untuk susunan teliti dari sifar."
            : "Choose between two distinct pathways: Design Express for rapid edits from RM5/image, or Design Custom for bespoke zero-base compositions."}
        </p>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs font-bold text-[#18201D]">
          <span className="px-3 py-1.5 rounded-full bg-[#E6F4F1] text-[#087A68] border border-[#C4E6DF]">
            ⚡ Express dari RM5 / gambar
          </span>
          <span className="px-3 py-1.5 rounded-full bg-[#EEF2FF] text-[#2457E6] border border-[#D5E0FF]">
            🎨 Custom dari RM35 (Poster, Menu, Logo, Label)
          </span>
        </div>
      </div>

      {/* Pathways Comparison Component */}
      <div className="ms-container">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-1">
          <h2 className="text-2xl font-extrabold text-[#18201D]">
            {language === "ms" ? "Perbandingan Dua Laluan Servis" : "Two Pathways Comparison"}
          </h2>
          <p className="text-xs text-[#52605A]">
            {language === "ms"
              ? "Ketahui perbezaan skop agar anda memilih pakej yang tepat."
              : "Understand the scope difference so you make an informed choice."}
          </p>
        </div>

        <DesignPathwayComparison />
      </div>

      {/* Pathway A: Express Packages Grid */}
      <div className="ms-container">
        <div className="border-t border-[#DDE1DA] pt-12 space-y-6">
          <div className="space-y-1">
            <span className="ms-pill ms-pill-teal">
              PATHWAY A
            </span>
            <h3 className="text-2xl font-extrabold text-[#18201D]">
              {language === "ms" ? "Pakej Design Express" : "Design Express Packages"}
            </h3>
            <p className="text-xs text-[#52605A]">
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
        <div className="border-t border-[#DDE1DA] pt-12 space-y-6">
          <div className="space-y-1">
            <span className="ms-pill ms-pill-blue">
              PATHWAY B
            </span>
            <h3 className="text-2xl font-extrabold text-[#18201D]">
              {language === "ms" ? "Pakej Design Custom" : "Design Custom Packages"}
            </h3>
            <p className="text-xs text-[#52605A]">
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
        <div className="ms-card p-8 sm:p-10 bg-[#FAF9F5] border border-[#DDE1DA] space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-bold tracking-widest text-[#087A68] uppercase">
              {language === "ms" ? "PANDUAN BAHAN & FAIL" : "ASSET & FILE GUIDELINES"}
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#18201D]">
              {language === "ms" ? "Panduan Persediaan & Jenis Fail" : "Preparation & File Delivery Notes"}
            </h3>
            <p className="text-xs text-[#52605A]">
              {language === "ms" ? "Pastikan rekaan siap dengan tepat dan tanpa kelewatan:" : "Ensure your designs are delivered accurately without delays:"}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
            <div className="p-4 rounded-xl bg-white border border-[#DDE1DA] space-y-2">
              <span className="text-lg">📏</span>
              <h4 className="font-extrabold text-sm text-[#18201D]">
                {language === "ms" ? "1. Saiz & Penggunaan" : "1. Size & Context"}
              </h4>
              <p className="text-xs text-[#52605A] leading-relaxed">
                {language === "ms"
                  ? "Nyatakan jika perlukan nisbah Instagram (1:1, 4:5), poster A4, bunting 2x5 kaki, atau ukuran die-line label."
                  : "State if you need Instagram ratios (1:1, 4:5), A4 poster, 2x5 ft bunting, or exact packaging die-lines."}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#DDE1DA] space-y-2">
              <span className="text-lg">✍️</span>
              <h4 className="font-extrabold text-sm text-[#18201D]">
                {language === "ms" ? "2. Ejaan Teks Tepat" : "2. Exact Copy"}
              </h4>
              <p className="text-xs text-[#52605A] leading-relaxed">
                {language === "ms"
                  ? "Sediakan perkataan, nombor telefon, dan senarai harga yang sudah disahkan betul untuk mengelakkan pembaziran pusingan suntingan."
                  : "Supply verified text, phone numbers, and prices to save your included revision rounds for visual polishing."}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#DDE1DA] space-y-2">
              <span className="text-lg">📦</span>
              <h4 className="font-extrabold text-sm text-[#18201D]">
                {language === "ms" ? "3. Format Penyerahan" : "3. Deliverable Types"}
              </h4>
              <p className="text-xs text-[#52605A] leading-relaxed">
                {language === "ms"
                  ? "Fail akhir diserahkan sebagai PNG/JPG resolusi tinggi atau PDF Print-Ready. Fail editable (.ai/.psd) disahkan dalam sebut harga."
                  : "Final files provided as high-res PNG/JPG or print PDF. Editable source files (.ai/.psd) are confirmed in quotation."}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Design FAQ */}
      <div className="ms-container">
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-1">
          <h3 className="text-xl sm:text-2xl font-extrabold text-[#18201D]">
            {language === "ms" ? "Soalan Lazim Servis Design" : "Graphic Design FAQ"}
          </h3>
          <p className="text-xs text-[#52605A]">
            {language === "ms" ? "Semak jawapan tentang had RM5, fail editable, dan percetakan." : "Review answers regarding RM5 limits, source files, and print setups."}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <FaqAccordion filterCategory="design" limit={4} />
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="ms-container">
        <div className="ms-card p-8 bg-[#17251F] text-white rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h3 className="font-extrabold text-xl text-white">
              {language === "ms" ? "Tempah Servis Design Anda" : "Commission Your Design Today"}
            </h3>
            <p className="text-xs text-[#A3B1AB]">
              {language === "ms" ? "Suntingan pantas serendah RM5 atau rekaan poster khas. Hantar brief anda di WhatsApp." : "Fast edits from RM5 or tailored poster graphics. Send your brief on WhatsApp."}
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/calculator?category=design_express"
              className="ms-btn-secondary text-xs py-2.5 px-4 rounded-xl font-bold bg-[#293832] text-white border-[#3b4c45]"
            >
              {language === "ms" ? "Kira Kos" : "Calculate"}
            </Link>
            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ms-btn-primary text-xs py-2.5 px-5 rounded-xl font-bold"
            >
              {language === "ms" ? "WhatsApp Danial →" : "WhatsApp Danial →"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
