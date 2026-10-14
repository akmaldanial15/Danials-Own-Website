"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useMainSiteLanguage } from "@/context/MainSiteLanguageContext";
import { siteConfig } from "@/data/main-site/siteConfig";
import { packagesCatalog, ServiceCategory } from "@/data/main-site/packages";
import { portfolioCatalog, PortfolioItem } from "@/data/main-site/portfolio";
import HeroMontage from "@/components/main-site/HeroMontage";
import DesignPathwayComparison from "@/components/main-site/DesignPathwayComparison";
import PricingCard from "@/components/main-site/PricingCard";
import PortfolioCard from "@/components/main-site/PortfolioCard";
import PortfolioModal from "@/components/main-site/PortfolioModal";
import FaqAccordion from "@/components/main-site/FaqAccordion";

export default function MainHomePage() {
  const { language, t } = useMainSiteLanguage();
  const [selectedPortfolioItem, setSelectedPortfolioItem] = useState<PortfolioItem | null>(null);
  const [pricingCategoryTab, setPricingCategoryTab] = useState<ServiceCategory>("website");

  const featuredPortfolio = portfolioCatalog.filter((item) => item.featured).slice(0, 4);

  const displayedPackages = packagesCatalog
    .filter((pkg) => {
      if (pricingCategoryTab === "repair") {
        return pkg.category === "repair" || pkg.category === "systems";
      }
      return pkg.category === pricingCategoryTab;
    })
    .slice(0, 4);

  return (
    <div className="space-y-20 sm:space-y-28 lg:space-y-36 pb-24">
      {/* 1. HERO SECTION */}
      <section className="pt-8 sm:pt-14 lg:pt-18 border-b border-[#EBEFE8] pb-16 sm:pb-24">
        <div className="ms-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F0EB] text-[#087A68] text-xs font-extrabold tracking-widest uppercase">
                <span>{t("heroEyebrow")}</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#18201D] tracking-tight leading-[1.12]">
                {t("heroHeadlinePart1")}{" "}
                <span className="text-[#2457E6] underline decoration-[#D5E0FF] decoration-4 underline-offset-4">
                  {t("heroHeadlineHighlight")}
                </span>
              </h1>

              {/* Subcopy */}
              <p className="text-base sm:text-lg text-[#52605A] leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {t("heroSubcopy")}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
                <Link
                  href="/pricing"
                  className="ms-btn-primary w-full sm:w-auto text-sm py-3.5 px-6 rounded-xl"
                >
                  {t("heroPrimaryCta")} →
                </Link>
                <a
                  href={siteConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ms-btn-secondary w-full sm:w-auto text-sm py-3.5 px-6 rounded-xl font-semibold flex items-center justify-center gap-2"
                >
                  <span>{t("heroSecondaryCta")}</span>
                  <svg className="w-4 h-4 text-[#10b981]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>

              {/* Price Anchors Strip */}
              <div className="pt-4 border-t border-[#DDE1DA] max-w-xl mx-auto lg:mx-0">
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs font-bold text-[#18201D]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#2457E6]" />
                    <span>{t("heroAnchorA")}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#087A68]" />
                    <span>{t("heroAnchorB")}</span>
                  </div>
                </div>
                <p className="text-[11px] text-[#52605A] mt-1.5 text-center lg:text-left">
                  {t("heroAnchorNote")}
                </p>
              </div>
            </div>

            {/* Right Artwork Montage (5 cols) */}
            <div className="lg:col-span-5">
              <HeroMontage />
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE SERVICE PILLARS (EDITORIAL SUMMARY) */}
      <section className="ms-container">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold tracking-widest text-[#087A68] uppercase">
            {language === "ms" ? "Teras Perkhidmatan" : "Core Capabilities"}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#18201D] tracking-tight">
            {language === "ms" ? "Semua keperluan digital anda di satu tempat" : "All your digital essentials under one roof"}
          </h2>
          <p className="text-xs sm:text-sm text-[#52605A]">
            {language === "ms"
              ? "Daripada landing page mudah alih hingga ke sistem pentadbir dan grafik percetakan."
              : "From responsive landing pages to admin systems and print-ready visual assets."}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Pillar 1: Web */}
          <Link
            href="/services/websites"
            className="ms-card p-6 flex flex-col justify-between group hover:border-[#2457E6]"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#EEF2FF] text-[#2457E6] flex items-center justify-center font-extrabold text-sm border border-[#D5E0FF]">
                01
              </div>
              <h3 className="text-base font-extrabold text-[#18201D] group-hover:text-[#2457E6] transition-colors">
                {t("pillarWebTitle")}
              </h3>
              <p className="text-xs text-[#52605A] leading-relaxed">
                {t("pillarWebDesc")}
              </p>
            </div>
            <div className="pt-4 border-t border-[#F0EFEA] flex items-center justify-between text-xs font-bold text-[#2457E6]">
              <span>dari RM79</span>
              <span>Ketahui Lebih Lanjut →</span>
            </div>
          </Link>

          {/* Pillar 2: Design */}
          <Link
            href="/services/design"
            className="ms-card p-6 flex flex-col justify-between group hover:border-[#087A68]"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#E6F4F1] text-[#087A68] flex items-center justify-center font-extrabold text-sm border border-[#C4E6DF]">
                02
              </div>
              <h3 className="text-base font-extrabold text-[#18201D] group-hover:text-[#087A68] transition-colors">
                {t("pillarDesignTitle")}
              </h3>
              <p className="text-xs text-[#52605A] leading-relaxed">
                {t("pillarDesignDesc")}
              </p>
            </div>
            <div className="pt-4 border-t border-[#F0EFEA] flex items-center justify-between text-xs font-bold text-[#087A68]">
              <span>dari RM5</span>
              <span>Ketahui Lebih Lanjut →</span>
            </div>
          </Link>

          {/* Pillar 3: Fix */}
          <Link
            href="/services/website-fix"
            className="ms-card p-6 flex flex-col justify-between group hover:border-[#2457E6]"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#FAF5FF] text-[#9333ea] flex items-center justify-center font-extrabold text-sm border border-[#E9D5FF]">
                03
              </div>
              <h3 className="text-base font-extrabold text-[#18201D] group-hover:text-[#9333ea] transition-colors">
                {t("pillarRepairTitle")}
              </h3>
              <p className="text-xs text-[#52605A] leading-relaxed">
                {t("pillarRepairDesc")}
              </p>
            </div>
            <div className="pt-4 border-t border-[#F0EFEA] flex items-center justify-between text-xs font-bold text-[#9333ea]">
              <span>dari RM29</span>
              <span>Ketahui Lebih Lanjut →</span>
            </div>
          </Link>

          {/* Pillar 4: Systems */}
          <Link
            href="/services/systems-apps"
            className="ms-card p-6 flex flex-col justify-between group hover:border-[#2457E6]"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#FEF3C7] text-[#D97706] flex items-center justify-center font-extrabold text-sm border border-[#FDE68A]">
                04
              </div>
              <h3 className="text-base font-extrabold text-[#18201D] group-hover:text-[#D97706] transition-colors">
                {t("pillarSystemsTitle")}
              </h3>
              <p className="text-xs text-[#52605A] leading-relaxed">
                {t("pillarSystemsDesc")}
              </p>
            </div>
            <div className="pt-4 border-t border-[#F0EFEA] flex items-center justify-between text-xs font-bold text-[#D97706]">
              <span>dari RM499</span>
              <span>Ketahui Lebih Lanjut →</span>
            </div>
          </Link>
        </div>
      </section>

      {/* 3. TWO GRAPHIC DESIGN PATHWAYS (SECTION 04 OF PROMPT) */}
      <section className="ms-container">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold tracking-widest text-[#087A68] uppercase">
            {language === "ms" ? "Fokus Servis Visual" : "Visual Service Focus"}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#18201D] tracking-tight">
            {t("pathwayTitle")}
          </h2>
          <p className="text-xs sm:text-sm text-[#52605A]">
            {t("pathwaySubtitle")}
          </p>
        </div>

        <DesignPathwayComparison />
      </section>

      {/* 4. FEATURED WORK SHOWCASE (SECTION 14 OF PROMPT) */}
      <section className="ms-container">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-4 border-b border-[#DDE1DA]">
          <div>
            <span className="text-xs font-bold tracking-widest text-[#087A68] uppercase">
              {language === "ms" ? "Portfolio & Konsep" : "Portfolio & Concepts"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#18201D] tracking-tight mt-1">
              {language === "ms" ? "Contoh Hasil Kerja Sebenar & Konsep" : "Selected Work & Concepts"}
            </h2>
            <p className="text-xs text-[#52605A] mt-1">
              {language === "ms"
                ? "Semua status projek dilabelkan secara telus: demo konsep, projek naik taraf, atau contoh rekaan."
                : "All project statuses are transparently labelled: concept demo, preview, or sample."}
            </p>
          </div>

          <Link
            href="/gallery"
            className="text-xs font-bold text-[#2457E6] hover:underline shrink-0"
          >
            {language === "ms" ? "Lihat Semua Hasil Kerja (7 Projek) →" : "View Full Portfolio (7 Projects) →"}
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredPortfolio.map((item) => (
            <PortfolioCard
              key={item.id}
              item={item}
              onSelect={(selected) => setSelectedPortfolioItem(selected)}
            />
          ))}
        </div>
      </section>

      {/* 5. PRICING PREVIEW (SECTION 13 OF PROMPT) */}
      <section className="ms-container">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold tracking-widest text-[#087A68] uppercase">
            {language === "ms" ? "Ketelusan Kos" : "Transparent Pricing"}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#18201D] tracking-tight">
            {language === "ms" ? "Pakej Jelas Mengikut Keperluan Anda" : "Structured Packages Tailored to Your Stage"}
          </h2>
          <p className="text-xs sm:text-sm text-[#52605A]">
            {language === "ms"
              ? "Pilih kategori untuk melihat perincian skop, peruntukan suntingan, dan sempadan pakej."
              : "Select a category to view scope deliverables, revision limits, and inclusions."}
          </p>

          {/* Category Tabs */}
          <div className="inline-flex p-1 rounded-xl bg-[#FAF9F5] border border-[#DDE1DA] gap-1 mt-4">
            {[
              { id: "website", label: language === "ms" ? "Laman Web" : "Websites" },
              { id: "design_express", label: "Design Express" },
              { id: "design_custom", label: "Design Custom" },
              { id: "repair", label: language === "ms" ? "Baiki & Sistem" : "Repair & Systems" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setPricingCategoryTab(tab.id as ServiceCategory)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  pricingCategoryTab === tab.id
                    ? "bg-[#2457E6] text-white shadow-xs"
                    : "text-[#52605A] hover:text-[#18201D]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedPackages.map((pkg) => (
            <PricingCard key={pkg.id} item={pkg} featured={pkg.featured} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/pricing"
            className="ms-btn-secondary text-xs py-3 px-6 rounded-xl font-bold inline-flex items-center gap-1.5"
          >
            <span>{language === "ms" ? "Buka Katalog Harga & Jadual Lengkap" : "Open Full Pricing Catalogue"}</span>
            <span>→</span>
          </Link>
        </div>
      </section>

      {/* 6. FOUR-STEP PROCESS (SECTION 17 OF PROMPT) */}
      <section className="bg-[#FAF9F5] border-y border-[#EBEFE8] py-16 sm:py-20">
        <div className="ms-container">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold tracking-widest text-[#087A68] uppercase">
              {t("processEyebrow")}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#18201D] tracking-tight">
              {t("processTitle")}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: "01", title: t("processStep1Title"), desc: t("processStep1Desc") },
              { num: "02", title: t("processStep2Title"), desc: t("processStep2Desc") },
              { num: "03", title: t("processStep3Title"), desc: t("processStep3Desc") },
              { num: "04", title: t("processStep4Title"), desc: t("processStep4Desc") },
            ].map((step, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-[#FFFFFF] border border-[#DDE1DA] space-y-3">
                <span className="text-xs font-mono font-extrabold text-[#2457E6] px-2 py-0.5 rounded bg-[#EEF2FF] border border-[#D5E0FF] inline-block">
                  {step.num}
                </span>
                <h3 className="font-extrabold text-sm text-[#18201D]">{step.title}</h3>
                <p className="text-xs text-[#52605A] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FOUNDER / REASON TO WORK WITH DANIAL (SECTION 17 OF PROMPT) */}
      <section className="ms-container">
        <div className="ms-card p-8 sm:p-12 border-2 border-[#DDE1DA] bg-[#FFFFFF] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold tracking-widest text-[#087A68] uppercase">
                {t("founderEyebrow")}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#18201D] tracking-tight">
                {t("founderTitle")}
              </h2>
              <blockquote className="text-base sm:text-lg font-medium text-[#18201D] leading-relaxed italic border-l-3 border-[#2457E6] pl-4">
                &ldquo;{t("founderQuote")}&rdquo;
              </blockquote>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-xs font-bold text-[#18201D]">
                <div className="flex items-center gap-2">
                  <span className="text-[#087A68]">✓</span>
                  <span>{t("founderPoint1")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#087A68]">✓</span>
                  <span>{t("founderPoint2")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#087A68]">✓</span>
                  <span>{t("founderPoint3")}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-[#FAF9F5] border border-[#EBEFE8] text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-[#17251F] text-white flex items-center justify-center font-extrabold text-xl">
                D
              </div>
              <div>
                <h4 className="font-extrabold text-base text-[#18201D]">Danial</h4>
                <p className="text-xs text-[#52605A]">{siteConfig.name}</p>
              </div>
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ms-btn-primary text-xs py-2 px-4 rounded-xl font-bold"
              >
                {language === "ms" ? "WhatsApp Terus →" : "Chat on WhatsApp →"}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 8. TOP FAQ SECTION (SECTION 17 OF PROMPT) */}
      <section className="ms-container">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold tracking-widest text-[#087A68] uppercase">
            FAQ
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#18201D] tracking-tight">
            {language === "ms" ? "Soalan Lazim Sebelum Memulakan Projek" : "Frequently Asked Questions"}
          </h2>
          <p className="text-xs sm:text-sm text-[#52605A]">
            {language === "ms"
              ? "Jawapan telus berkenaan skop RM79, suntingan RM5, fail editable, dan domain/hosting."
              : "Clear answers regarding RM79 scope, RM5 edits, editable files, and domain/hosting."}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <FaqAccordion limit={6} />
        </div>
      </section>

      {/* 9. CLOSING PROJECT CTA */}
      <section className="ms-container">
        <div className="rounded-3xl bg-[#17251F] text-white p-8 sm:p-14 text-center space-y-6 relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-2xl mx-auto space-y-3">
            <span className="ms-pill ms-pill-teal">
              {language === "ms" ? "LANGKAH SETERUSNYA" : "READY TO START"}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              {language === "ms"
                ? "Sedia untuk jadikan idea anda lebih profesional?"
                : "Ready to give your business an unmistakably professional look?"}
            </h2>
            <p className="text-xs sm:text-sm text-[#A3B1AB] leading-relaxed">
              {language === "ms"
                ? "Kongsikan keperluan anda sekarang. Kami sedia membantu mencadangkan pakej paling berbaloi mengikut bajet anda."
                : "Share your brief with us. We'll recommend the most cost-effective package aligned with your budget."}
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ms-btn-primary w-full sm:w-auto text-xs py-3.5 px-6 rounded-xl font-bold"
            >
              {language === "ms" ? "Bincang Terus di WhatsApp →" : "Chat on WhatsApp →"}
            </a>
            <Link
              href="/calculator"
              className="ms-btn-secondary w-full sm:w-auto text-xs py-3.5 px-6 rounded-xl font-bold bg-[#293832] text-white border-[#3b4c45] hover:bg-[#3b4c45]"
            >
              {language === "ms" ? "Kira Anggaran Projek" : "Calculate Estimate"}
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Detail Modal */}
      <PortfolioModal
        item={selectedPortfolioItem}
        onClose={() => setSelectedPortfolioItem(null)}
      />
    </div>
  );
}
