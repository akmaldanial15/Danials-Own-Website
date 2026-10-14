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
    <div className="space-y-24 sm:space-y-32 lg:space-y-40 pb-28">
      {/* 1. HERO SECTION */}
      <section className="relative pt-8 sm:pt-16 lg:pt-20 pb-16 sm:pb-24 overflow-hidden">
        {/* Colorful Floating Aurora Ambient Orbs */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-500/25 via-indigo-500/20 to-transparent blur-[120px] pointer-events-none rounded-full -z-10 animate-pulse-glow" />
        <div className="absolute top-20 right-10 w-[450px] h-[450px] bg-gradient-to-bl from-purple-500/25 via-pink-500/20 to-transparent blur-[120px] pointer-events-none rounded-full -z-10" />
        <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-gradient-to-tr from-emerald-500/20 via-teal-500/15 to-transparent blur-[120px] pointer-events-none rounded-full -z-10" />

        <div className="ms-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-black tracking-widest uppercase shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>{t("heroEyebrow")}</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-black text-white tracking-tight leading-[1.08]">
                {t("heroHeadlinePart1")}{" "}
                <span className="ms-gradient-text block sm:inline drop-shadow-[0_0_35px_rgba(6,182,212,0.4)]">
                  {t("heroHeadlineHighlight")}
                </span>
              </h1>

              {/* Subcopy */}
              <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
                {t("heroSubcopy")}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  href="/pricing"
                  className="ms-btn-primary w-full sm:w-auto text-sm py-4 px-8 font-black uppercase tracking-wider"
                >
                  {t("heroPrimaryCta")} →
                </Link>
                <a
                  href={siteConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ms-btn-secondary w-full sm:w-auto text-sm py-4 px-8 font-bold flex items-center justify-center gap-2.5"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>{t("heroSecondaryCta")}</span>
                </a>
              </div>

              {/* Price Anchors Strip */}
              <div className="pt-6 border-t border-white/10 max-w-xl mx-auto lg:mx-0">
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs font-bold text-white">
                  <div className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22D3EE]" />
                    <span>{t("heroAnchorA")}</span>
                  </div>
                  <div className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34D399]" />
                    <span>{t("heroAnchorB")}</span>
                  </div>
                </div>
                <p className="text-[11px] text-zinc-400 mt-2.5 text-center lg:text-left">
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
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="ms-pill ms-pill-cyan uppercase font-black tracking-widest text-xs">
            {language === "ms" ? "TERAS PERKHIDMATAN" : "CORE CAPABILITIES"}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            {language === "ms" ? "Semua keperluan digital anda di satu tempat" : "All your digital essentials under one roof"}
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400">
            {language === "ms"
              ? "Daripada landing page mudah alih hingga ke sistem pentadbir dan grafik percetakan."
              : "From responsive landing pages to admin systems and print-ready visual assets."}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Pillar 1: Web - Cyan Glow */}
          <Link
            href="/services/websites"
            className="ms-card p-6 sm:p-7 flex flex-col justify-between group border-cyan-500/40 bg-gradient-to-b from-cyan-500/25 via-[#0E1424] to-[#0A0F1D] hover:border-cyan-400 hover:shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_40px_rgba(6,182,212,0.45)] transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-400 to-emerald-400 opacity-80 group-hover:opacity-100 shadow-[0_0_12px_rgba(6,182,212,0.6)]" />
            <div className="space-y-4 pt-1">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/25 text-cyan-300 flex items-center justify-center font-black text-base border border-cyan-500/40 shadow-[0_0_18px_rgba(6,182,212,0.35)] group-hover:scale-110 transition-transform">
                01
              </div>
              <h3 className="text-lg font-black text-white group-hover:text-cyan-300 transition-colors">
                {t("pillarWebTitle")}
              </h3>
              <p className="text-xs text-zinc-300 leading-relaxed font-medium">
                {t("pillarWebDesc")}
              </p>
            </div>
            <div className="pt-5 border-t border-white/10 flex items-center justify-between text-xs font-bold text-cyan-300 mt-4">
              <span className="text-sm font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-teal-300">dari RM79</span>
              <span className="group-hover:translate-x-1.5 transition-transform font-black">Ketahui →</span>
            </div>
          </Link>

          {/* Pillar 2: Design - Vivid Rose / Pink Glow */}
          <Link
            href="/services/design"
            className="ms-card p-6 sm:p-7 flex flex-col justify-between group border-pink-500/40 bg-gradient-to-b from-pink-500/25 via-[#0E1424] to-[#0A0F1D] hover:border-pink-400 hover:shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_40px_rgba(236,72,153,0.45)] transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 opacity-80 group-hover:opacity-100 shadow-[0_0_12px_rgba(236,72,153,0.6)]" />
            <div className="space-y-4 pt-1">
              <div className="w-12 h-12 rounded-2xl bg-pink-500/25 text-pink-300 flex items-center justify-center font-black text-base border border-pink-500/40 shadow-[0_0_18px_rgba(236,72,153,0.35)] group-hover:scale-110 transition-transform">
                02
              </div>
              <h3 className="text-lg font-black text-white group-hover:text-pink-300 transition-colors">
                {t("pillarDesignTitle")}
              </h3>
              <p className="text-xs text-zinc-300 leading-relaxed font-medium">
                {t("pillarDesignDesc")}
              </p>
            </div>
            <div className="pt-5 border-t border-white/10 flex items-center justify-between text-xs font-bold text-pink-300 mt-4">
              <span className="text-sm font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-rose-300">dari RM5</span>
              <span className="group-hover:translate-x-1.5 transition-transform font-black">Ketahui →</span>
            </div>
          </Link>

          {/* Pillar 3: Fix - Neon Purple Glow */}
          <Link
            href="/services/website-fix"
            className="ms-card p-6 sm:p-7 flex flex-col justify-between group border-purple-500/40 bg-gradient-to-b from-purple-500/25 via-[#0E1424] to-[#0A0F1D] hover:border-purple-400 hover:shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_40px_rgba(168,85,247,0.45)] transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400 opacity-80 group-hover:opacity-100 shadow-[0_0_12px_rgba(168,85,247,0.6)]" />
            <div className="space-y-4 pt-1">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/25 text-purple-300 flex items-center justify-center font-black text-base border border-purple-500/40 shadow-[0_0_18px_rgba(168,85,247,0.35)] group-hover:scale-110 transition-transform">
                03
              </div>
              <h3 className="text-lg font-black text-white group-hover:text-purple-300 transition-colors">
                {t("pillarRepairTitle")}
              </h3>
              <p className="text-xs text-zinc-300 leading-relaxed font-medium">
                {t("pillarRepairDesc")}
              </p>
            </div>
            <div className="pt-5 border-t border-white/10 flex items-center justify-between text-xs font-bold text-purple-300 mt-4">
              <span className="text-sm font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-300">dari RM29</span>
              <span className="group-hover:translate-x-1.5 transition-transform font-black">Ketahui →</span>
            </div>
          </Link>

          {/* Pillar 4: Systems - Sunset Amber Glow */}
          <Link
            href="/services/systems-apps"
            className="ms-card p-6 sm:p-7 flex flex-col justify-between group border-amber-500/40 bg-gradient-to-b from-amber-500/25 via-[#0E1424] to-[#0A0F1D] hover:border-amber-400 hover:shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_40px_rgba(245,158,11,0.45)] transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400 opacity-80 group-hover:opacity-100 shadow-[0_0_12px_rgba(245,158,11,0.6)]" />
            <div className="space-y-4 pt-1">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/25 text-amber-300 flex items-center justify-center font-black text-base border border-amber-500/40 shadow-[0_0_18px_rgba(245,158,11,0.35)] group-hover:scale-110 transition-transform">
                04
              </div>
              <h3 className="text-lg font-black text-white group-hover:text-amber-300 transition-colors">
                {t("pillarSystemsTitle")}
              </h3>
              <p className="text-xs text-zinc-300 leading-relaxed font-medium">
                {t("pillarSystemsDesc")}
              </p>
            </div>
            <div className="pt-5 border-t border-white/10 flex items-center justify-between text-xs font-bold text-amber-300 mt-4">
              <span className="text-sm font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-300">dari RM499</span>
              <span className="group-hover:translate-x-1.5 transition-transform font-black">Ketahui →</span>
            </div>
          </Link>
        </div>
      </section>

      {/* 3. TWO GRAPHIC DESIGN PATHWAYS (SECTION 04 OF PROMPT) */}
      <section className="ms-container">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="ms-pill ms-pill-emerald uppercase font-black tracking-widest text-xs">
            {language === "ms" ? "FOKUS SERVIS VISUAL" : "VISUAL SERVICE FOCUS"}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            {t("pathwayTitle")}
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400">
            {t("pathwaySubtitle")}
          </p>
        </div>

        <DesignPathwayComparison />
      </section>

      {/* 4. FEATURED WORK SHOWCASE (SECTION 14 OF PROMPT) */}
      <section className="ms-container">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-4 border-b border-white/10">
          <div>
            <span className="ms-pill ms-pill-cyan uppercase font-black tracking-widest text-xs mb-2">
              {language === "ms" ? "PORTFOLIO & KONSEP" : "PORTFOLIO & CONCEPTS"}
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight mt-2">
              {language === "ms" ? "Contoh Hasil Kerja & Demo Konsep" : "Selected Work & Concepts"}
            </h2>
            <p className="text-xs text-zinc-400 mt-1">
              {language === "ms"
                ? "Semua status projek dilabelkan secara telus: demo konsep, projek naik taraf, atau contoh rekaan."
                : "All project statuses are transparently labelled: concept demo, preview, or sample."}
            </p>
          </div>

          <Link
            href="/gallery"
            className="text-xs font-extrabold text-cyan-400 hover:text-cyan-300 hover:underline shrink-0"
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
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="ms-pill ms-pill-emerald uppercase font-black tracking-widest text-xs">
            {language === "ms" ? "KETELUSAN KOS" : "TRANSPARENT PRICING"}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            {language === "ms" ? "Pakej Jelas Mengikut Keperluan Anda" : "Structured Packages Tailored to Your Stage"}
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400">
            {language === "ms"
              ? "Pilih kategori untuk melihat perincian skop, peruntukan suntingan, dan sempadan pakej."
              : "Select a category to view scope deliverables, revision limits, and inclusions."}
          </p>

          {/* Category Tabs */}
          <div className="inline-flex flex-wrap items-center justify-center p-1.5 rounded-full bg-white/5 border border-white/10 gap-1.5 mt-6">
            {[
              {
                id: "website",
                label: language === "ms" ? "Laman Web" : "Websites",
                activeStyle: "bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 text-black font-black shadow-[0_0_22px_rgba(6,182,212,0.5)]",
              },
              {
                id: "design_express",
                label: "Design Express",
                activeStyle: "bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 text-black font-black shadow-[0_0_22px_rgba(245,158,11,0.5)]",
              },
              {
                id: "design_custom",
                label: "Design Custom",
                activeStyle: "bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400 text-white font-black shadow-[0_0_22px_rgba(168,85,247,0.5)]",
              },
              {
                id: "repair",
                label: language === "ms" ? "Baiki & Sistem" : "Repair & Systems",
                activeStyle: "bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 text-white font-black shadow-[0_0_22px_rgba(59,130,246,0.5)]",
              },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setPricingCategoryTab(tab.id as ServiceCategory)}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  pricingCategoryTab === tab.id
                    ? tab.activeStyle
                    : "text-zinc-400 hover:text-white hover:bg-white/10"
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

        <div className="mt-12 text-center">
          <Link
            href="/pricing"
            className="ms-btn-secondary text-xs py-3.5 px-8 font-black uppercase tracking-wider inline-flex items-center gap-2"
          >
            <span>{language === "ms" ? "Buka Katalog Harga & Jadual Lengkap" : "Open Full Pricing Catalogue"}</span>
            <span>→</span>
          </Link>
        </div>
      </section>

      {/* 6. FOUR-STEP PROCESS (SECTION 17 OF PROMPT) */}
      <section className="ms-container">
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-b from-[#0E1424]/90 to-[#0A0F1D]/95 backdrop-blur-2xl border border-white/15 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="ms-pill ms-pill-cyan uppercase font-black tracking-widest text-xs">
              {t("processEyebrow")}
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight mt-2">
              {t("processTitle")}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: "01",
                title: t("processStep1Title"),
                desc: t("processStep1Desc"),
                cardClass: "border-cyan-500/30 bg-gradient-to-b from-cyan-950/25 via-[#0E1424] to-[#0A0F1D] hover:border-cyan-400 hover:shadow-[0_15px_30px_rgba(6,182,212,0.25)]",
                numClass: "bg-cyan-500/20 text-cyan-300 border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.3)]",
                barClass: "bg-cyan-400",
              },
              {
                num: "02",
                title: t("processStep2Title"),
                desc: t("processStep2Desc"),
                cardClass: "border-amber-500/30 bg-gradient-to-b from-amber-950/25 via-[#0E1424] to-[#0A0F1D] hover:border-amber-400 hover:shadow-[0_15px_30px_rgba(245,158,11,0.25)]",
                numClass: "bg-amber-500/20 text-amber-300 border-amber-500/40 shadow-[0_0_15px_rgba(245,158,11,0.3)]",
                barClass: "bg-amber-400",
              },
              {
                num: "03",
                title: t("processStep3Title"),
                desc: t("processStep3Desc"),
                cardClass: "border-purple-500/30 bg-gradient-to-b from-purple-950/25 via-[#0E1424] to-[#0A0F1D] hover:border-purple-400 hover:shadow-[0_15px_30px_rgba(168,85,247,0.25)]",
                numClass: "bg-purple-500/20 text-purple-300 border-purple-500/40 shadow-[0_0_15px_rgba(168,85,247,0.3)]",
                barClass: "bg-purple-400",
              },
              {
                num: "04",
                title: t("processStep4Title"),
                desc: t("processStep4Desc"),
                cardClass: "border-emerald-500/30 bg-gradient-to-b from-emerald-950/25 via-[#0E1424] to-[#0A0F1D] hover:border-emerald-400 hover:shadow-[0_15px_30px_rgba(16,185,129,0.25)]",
                numClass: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.3)]",
                barClass: "bg-emerald-400",
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-2xl border space-y-3.5 transition-all relative overflow-hidden group ${step.cardClass}`}
              >
                <div className={`absolute top-0 left-0 right-0 h-1 ${step.barClass} opacity-60 group-hover:opacity-100 transition-opacity`} />
                <span className={`w-9 h-9 rounded-xl font-mono font-black text-xs flex items-center justify-center border ${step.numClass} group-hover:scale-110 transition-transform`}>
                  {step.num}
                </span>
                <h3 className="font-black text-sm text-white group-hover:text-cyan-200 transition-colors">{step.title}</h3>
                <p className="text-xs text-zinc-300 leading-relaxed font-medium">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FOUNDER / REASON TO WORK WITH DANIAL (SECTION 17 OF PROMPT) */}
      <section className="ms-container">
        <div className="ms-card p-8 sm:p-14 border border-white/15 bg-[#0E1424]/90 backdrop-blur-2xl shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-5">
              <span className="ms-pill ms-pill-emerald uppercase font-black tracking-widest text-xs">
                {t("founderEyebrow")}
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                {t("founderTitle")}
              </h2>
              <blockquote className="text-base sm:text-lg font-semibold text-zinc-200 leading-relaxed italic border-l-4 border-cyan-400 pl-4 py-1">
                &ldquo;{t("founderQuote")}&rdquo;
              </blockquote>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-xs font-bold text-zinc-300">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400 font-black">✓</span>
                  <span>{t("founderPoint1")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400 font-black">✓</span>
                  <span>{t("founderPoint2")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400 font-black">✓</span>
                  <span>{t("founderPoint3")}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center p-8 rounded-2xl bg-white/5 border border-white/10 text-center space-y-4">
              <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-cyan-500 to-emerald-500 text-black flex items-center justify-center font-black text-3xl shadow-[0_0_30px_rgba(6,182,212,0.4)]">
                D
              </div>
              <div>
                <h4 className="font-black text-lg text-white">Danial</h4>
                <p className="text-xs text-zinc-400">{siteConfig.name}</p>
              </div>
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ms-btn-primary text-xs py-2.5 px-6 font-extrabold uppercase tracking-wider"
              >
                {language === "ms" ? "WhatsApp Terus →" : "Chat on WhatsApp →"}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 8. TOP FAQ SECTION (SECTION 17 OF PROMPT) */}
      <section className="ms-container">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="ms-pill ms-pill-cyan uppercase font-black tracking-widest text-xs">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            {language === "ms" ? "Soalan Lazim Sebelum Memulakan Projek" : "Frequently Asked Questions"}
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400">
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
        <div className="rounded-3xl bg-gradient-to-b from-[#0E1424] via-[#111A30] to-[#070A12] border border-cyan-500/40 p-8 sm:p-16 text-center space-y-7 relative overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.9),0_0_50px_rgba(6,182,212,0.2)]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/15 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <span className="ms-pill ms-pill-emerald uppercase font-black tracking-widest text-xs">
              {language === "ms" ? "LANGKAH SETERUSNYA" : "READY TO START"}
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              {language === "ms"
                ? "Sedia untuk jadikan idea anda lebih profesional?"
                : "Ready to give your business an unmistakably professional look?"}
            </h2>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-medium">
              {language === "ms"
                ? "Kongsikan keperluan anda sekarang. Kami sedia membantu mencadangkan pakej paling berbaloi mengikut bajet anda."
                : "Share your brief with us. We'll recommend the most cost-effective package aligned with your budget."}
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ms-btn-primary w-full sm:w-auto text-xs py-4 px-8 font-black uppercase tracking-wider"
            >
              {language === "ms" ? "Bincang Terus di WhatsApp →" : "Chat on WhatsApp →"}
            </a>
            <Link
              href="/calculator"
              className="ms-btn-secondary w-full sm:w-auto text-xs py-4 px-8 font-black uppercase tracking-wider"
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
