"use client";

import React, { useState } from "react";
import Link from "next/link";
import GlowCard from "@/components/ui/GlowCard";
import DashboardMockup from "@/components/home/DashboardMockup";
import { portfolioItems } from "@/data/portfolio";
import { useTranslation } from "@/hooks/useTranslation";

export default function Home() {
  const { t, language } = useTranslation();
  const [activeDemo, setActiveDemo] = useState<{ url: string; title: string } | null>(null);
  const [previewMode, setPreviewMode] = useState<"desktop" | "tablet" | "mobile">("desktop");

  // Take first 2 items of localized portfolio data
  const featuredPortfolio = portfolioItems[language].slice(0, 2);

  return (
    <div className="relative min-h-screen flex flex-col bg-transparent overflow-hidden pb-24">
      {/* Background glow effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full glow-blur-purple z-0 pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[50%] h-[50%] rounded-full glow-blur-cyan z-0 pointer-events-none" />

      {/* Central light beam (Huly style) */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[3px] h-[950px] bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent z-0 pointer-events-none opacity-40 blur-[1px]">
        <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[160px] h-[500px] rounded-full bg-purple-500/10 blur-[90px]" />
        <div className="absolute top-[35%] left-1/2 -translate-x-1/2 w-[240px] h-[400px] rounded-full bg-indigo-500/10 blur-[110px]" />
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[4px] h-[600px] bg-white/20 blur-[2px]" />
      </div>

      {/* 1. HERO SECTION */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-20 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-200 leading-tight">
          {t("heroTitle")}{" "}
          <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent text-glow animate-pulse duration-[3000ms]">
            {t("heroTitleSpan")}
          </span>{" "}
          {t("heroTitleEnd")}
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-zinc-400 leading-relaxed">
          {t("heroDesc")}
        </p>

        {/* Pulsing Pill CTA Button */}
        <div className="mt-8 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 opacity-60 blur-md group-hover:opacity-100 transition duration-300 animate-pulse" />
            <Link
              href="/calculator"
              className="relative inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-zinc-950 text-sm font-semibold text-zinc-200 border border-zinc-800 hover:border-zinc-700 hover:text-white transition duration-200 shadow-xl"
            >
              {language === "ms" ? "LIHAT KALKULATOR ESTIMASI →" : "SEE ESTIMATOR IN ACTION →"}
            </Link>
          </div>
        </div>

        {/* Floating Dashboard Mockup Panel */}
        <DashboardMockup />

        {/* Micro-Features List below Dashboard */}
        <p className="mt-12 text-xs sm:text-sm text-zinc-500 tracking-wide">
          {language === "ms" 
            ? "Semua yang anda perlukan untuk pertumbuhan digital:" 
            : "Everything you need for productive business growth:"}
          <span className="font-semibold text-zinc-350 ml-1.5">
            {language === "ms" 
              ? "Sistem CRM • Pangkalan Data • Android Sync • Chatbot AI • Invois Automatik"
              : "Custom CRM • High-Performance Databases • Android Companion Sync • Chatbot AI • Auto-Invoices"}
          </span>
        </p>

        {/* The Split Choice Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto text-left">
          {/* Path A: Cheap & Fast */}
          <GlowCard color="from-cyan-500 to-blue-500">
            <div>
              <span className="text-xs px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 font-semibold border border-cyan-500/20">
                {t("tagFastTrack")}
              </span>
              <h3 className="mt-4 text-2xl font-bold text-white">{t("pathFastTitle")}</h3>
              <p className="mt-2.5 text-zinc-400 text-sm leading-relaxed">
                {t("pathFastDesc")}
              </p>
              <div className="mt-6 flex items-baseline gap-2 text-zinc-300">
                <span className="text-xs text-zinc-500">{t("fromText")}</span>
                <span className="text-2xl font-bold text-white">RM799</span>
              </div>
            </div>
            <div className="mt-8">
              <Link
                href="/services/fast-track"
                className="inline-flex w-full items-center justify-center px-5 py-3 rounded-xl text-sm font-semibold bg-cyan-600 hover:bg-cyan-500 text-white transition-all shadow-md shadow-cyan-900/10 hover:shadow-cyan-500/20"
              >
                {t("btnFastTrack")}
              </Link>
            </div>
          </GlowCard>

          {/* Path B: Custom & Premium */}
          <GlowCard color="from-purple-600 to-indigo-500">
            <div>
              <span className="text-xs px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-400 font-semibold border border-purple-500/20">
                {t("tagBespoke")}
              </span>
              <h3 className="mt-4 text-2xl font-bold text-white">{t("pathBespokeTitle")}</h3>
              <p className="mt-2.5 text-zinc-400 text-sm leading-relaxed">
                {t("pathBespokeDesc")}
              </p>
              <div className="mt-6 flex items-baseline gap-2 text-zinc-300">
                <span className="text-xs text-zinc-500">{t("fromText")}</span>
                <span className="text-2xl font-bold text-white">RM1,500 - RM3,500+</span>
              </div>
            </div>
            <div className="mt-8">
              <Link
                href="/services/detailed"
                className="inline-flex w-full items-center justify-center px-5 py-3 rounded-xl text-sm font-semibold bg-purple-600 hover:bg-purple-500 text-white transition-all shadow-md shadow-purple-900/10 hover:shadow-purple-500/20"
              >
                {t("btnBespoke")}
              </Link>
            </div>
          </GlowCard>
        </div>
      </section>

      {/* 2. BENTO GRID CORE SERVICES */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t("bentoHeader")}
          </h2>
          <p className="mt-4 text-zinc-400 text-sm sm:text-base">
            {t("bentoDesc")}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Custom Systems (Col span 2) */}
          <div className="md:col-span-2 p-6 rounded-2xl bg-zinc-900/40 border border-zinc-850 hover:border-zinc-800 transition-all flex flex-col justify-between group">
            <div>
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 font-bold mb-5">
                01
              </div>
              <h3 className="text-xl font-bold text-zinc-100">{t("service1Title")}</h3>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                {t("service1Desc")}
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="text-[11px] px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 font-medium">Dashboard</span>
              <span className="text-[11px] px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 font-medium">Database</span>
              <span className="text-[11px] px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 font-medium">Inventory</span>
              <span className="text-[11px] px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 font-medium">Booking</span>
            </div>
          </div>

          {/* Card 2: Android App Integration */}
          <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-850 hover:border-zinc-800 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold mb-5">
                02
              </div>
              <h3 className="text-xl font-bold text-zinc-100">{t("service2Title")}</h3>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                {t("service2Desc")}
              </p>
            </div>
            <span className="self-start text-[11px] px-2.5 py-1 rounded bg-cyan-950/30 text-cyan-400 font-semibold border border-cyan-500/20">
              Web & App Sync
            </span>
          </div>

          {/* Card 3: AI Agents */}
          <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-850 hover:border-zinc-800 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold mb-5">
                03
              </div>
              <h3 className="text-xl font-bold text-zinc-100">{t("service3Title")}</h3>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                {t("service3Desc")}
              </p>
            </div>
            <span className="self-start text-[11px] px-2.5 py-1 rounded bg-indigo-950/30 text-indigo-400 font-semibold border border-indigo-500/20">
              AI Powered
            </span>
          </div>

          {/* Card 4: Quick Website Repairs (Col span 2) */}
          <div className="md:col-span-2 p-6 rounded-2xl bg-zinc-900/40 border border-zinc-850 hover:border-zinc-800 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 font-bold mb-5">
                04
              </div>
              <h3 className="text-xl font-bold text-zinc-100">{t("service4Title")}</h3>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                {t("service4Desc")}
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="text-[11px] px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 font-medium">SSL / Server Fix</span>
              <span className="text-[11px] px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 font-medium">Layout Responsive</span>
              <span className="text-[11px] px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 font-medium">Bug Fixing</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PORTFOLIO PREVIEW */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white">{t("galleryHeader")}</h2>
            <p className="mt-2 text-zinc-400 text-sm max-w-lg">
              {t("galleryDesc")}
            </p>
          </div>
          <Link
            href="/gallery"
            className="text-purple-400 hover:text-purple-300 font-semibold text-sm inline-flex items-center gap-1.5 shrink-0 transition-colors"
          >
            {t("galleryLink")}
          </Link>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredPortfolio.map((item) => (
            <div key={item.id} className="group rounded-2xl bg-zinc-900/30 border border-zinc-850 overflow-hidden hover:border-zinc-800 transition-all flex flex-col justify-between">
              {/* Image box representation */}
              <div className="relative aspect-video w-full bg-zinc-950 flex items-center justify-center p-8 border-b border-zinc-850">
                {item.demoUrl ? (
                  <div
                    onClick={() => setActiveDemo({ url: item.demoUrl!, title: item.title })}
                    className="w-full h-full rounded-lg overflow-hidden bg-white relative border border-zinc-800/80 shadow-md flex items-center justify-center cursor-pointer select-none group/live"
                  >
                    <iframe
                      src={item.demoUrl}
                      className="w-[200%] h-[200%] border-0 no-invert pointer-events-none scale-50 origin-top-left absolute top-0 left-0"
                      title={`${item.title} Live Mini Preview`}
                      loading="lazy"
                    />
                    {/* Overlay blocker */}
                    <div className="absolute inset-0 bg-transparent z-10 flex flex-col justify-between p-3" />
                    
                    {/* Floating indicators */}
                    <div className="absolute top-3 left-3 right-3 z-20 flex justify-between items-center text-[8px] font-mono text-zinc-400 tracking-widest bg-zinc-950/85 px-2.5 py-1.5 rounded-lg border border-zinc-800/50 backdrop-blur-sm pointer-events-none">
                      <span>PROJECT PREVIEW</span>
                      <span className="flex items-center gap-1 text-emerald-400 font-semibold bg-emerald-950/20 px-1 py-0.2 rounded border border-emerald-500/10 text-[6px]">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        LIVE_PREVIEW
                      </span>
                    </div>
                    
                    <div className="absolute bottom-3 left-3 right-3 z-20 flex justify-between items-center text-[8px] text-zinc-400 bg-zinc-950/85 px-2.5 py-1.5 rounded-lg border border-zinc-800/50 backdrop-blur-sm pointer-events-none">
                      <span className="font-bold text-white">{item.title}</span>
                      <span className="text-[6px] tracking-wide text-purple-400 font-bold uppercase">CLICK TO INTERACT</span>
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-full rounded-lg border border-zinc-800 border-dashed p-4 flex flex-col justify-between relative overflow-hidden bg-zinc-950/50">
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 to-cyan-500/5 z-0" />
                    <div className="relative z-10 flex justify-between items-center text-xs text-zinc-650">
                      <span>{"DANIAL'S PROJECT WIREFRAME"}</span>
                      <span>ACTIVE SCREEN</span>
                    </div>
                    <div className="relative z-10 text-center my-auto">
                      <p className="text-xl font-bold text-zinc-200">{item.title}</p>
                      <p className="text-xs text-zinc-500 font-medium mt-1">{item.subtitle}</p>
                    </div>
                    <div className="relative z-10 flex gap-2">
                      {item.tags.slice(0, 2).map((t) => (
                        <span key={t} className="text-[10px] px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 border border-zinc-80">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider font-bold text-purple-400">{item.category}</span>
                      <h3 className="text-lg font-bold text-white mt-1">{item.title}</h3>
                    </div>
                    <span className="text-xs font-semibold text-zinc-400 px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-800">
                      {item.priceClass}
                    </span>
                  </div>
                  <p className="mt-3 text-zinc-400 text-sm leading-relaxed">{item.description}</p>
                  
                  {/* Tech stack */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.tech.map((t) => (
                      <span key={t} className="text-xs px-2.5 py-1 rounded bg-zinc-900 text-zinc-350 border border-zinc-85">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="mt-6 pt-4 border-t border-zinc-900/60 flex gap-3">
                  {item.demoUrl && (
                    <button
                      onClick={() => setActiveDemo({ url: item.demoUrl!, title: item.title })}
                      className="inline-flex flex-1 items-center justify-center px-4 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white transition-all shadow-md shadow-cyan-900/10 hover:shadow-cyan-500/20 cursor-pointer"
                    >
                      🌐 {language === "ms" ? "Lihat Demo" : "Live Preview"}
                    </button>
                  )}
                  <a
                    href={`https://wa.me/60136632092?text=Hi%20Danial,%20saya%20berminat%20dengan%20projek%20${encodeURIComponent(item.title)}%20(${item.category})%20dan%20mahu%20bertanya%20tentang%20servis%20seperti%20ini.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-xs font-semibold bg-zinc-900 hover:bg-zinc-850 text-zinc-350 border border-zinc-850 hover:border-zinc-800 transition-all hover:text-white ${
                      item.demoUrl ? "w-1/2" : "w-full"
                    }`}
                  >
                    {language === "ms" ? "Tanya Servis" : "Inquire Service"}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. BUDGET CALCULATOR CTA */}
      <section className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
        <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-r from-purple-950/30 via-indigo-950/20 to-cyan-950/10 border border-purple-500/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-purple-500/5 blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-2xl text-left">
            <span className="text-xs px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-400 font-semibold border border-purple-500/20">
              {t("calcCtaTag")}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-white mt-4 leading-tight">
              {t("calcCtaTitle")}
            </h2>
            <p className="mt-3 text-zinc-400 text-sm md:text-base leading-relaxed">
              {t("calcCtaDesc")}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/calculator"
                className="px-5 py-3 rounded-xl text-sm font-semibold bg-purple-600 hover:bg-purple-500 text-white transition-all shadow-md shadow-purple-900/20"
              >
                {t("btnCalcCta")}
              </Link>
              <a
                href="https://wa.me/60136632092"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl text-sm font-semibold bg-zinc-900 hover:bg-zinc-850 text-zinc-200 border border-zinc-850 transition-all"
              >
                {t("btnWhatsAppCta")}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Live Preview Modal */}
      {activeDemo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-zinc-950/80 backdrop-blur-md transition-all duration-300">
          <div className="relative w-full h-full max-w-6xl rounded-2xl bg-zinc-900 border border-zinc-800 shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-4 py-3.5 border-b border-zinc-850 bg-zinc-950/60">
              {/* Left Side: Mock browser controls */}
              <div className="flex items-center gap-3 w-1/3">
                <div className="flex gap-1.5 shrink-0">
                  <button 
                    onClick={() => setActiveDemo(null)}
                    className="w-3.5 h-3.5 rounded-full bg-rose-500 hover:bg-rose-600 transition-colors cursor-pointer" 
                  />
                  <div className="w-3.5 h-3.5 rounded-full bg-amber-500/60" />
                  <div className="w-3.5 h-3.5 rounded-full bg-emerald-500/60" />
                </div>
                {/* URL Bar */}
                <div className="hidden md:flex items-center gap-1.5 px-3 py-1 rounded-lg bg-zinc-900 border border-zinc-800/80 text-[10px] text-zinc-455 font-mono select-all w-full max-w-xs truncate">
                  <span className="text-emerald-500">🔒</span>
                  <span className="truncate">{activeDemo.url}</span>
                </div>
              </div>

              {/* Center: Device responsive switcher */}
              <div className="flex items-center gap-1 bg-zinc-900 border border-zinc-800/80 p-0.5 rounded-xl">
                <button
                  onClick={() => setPreviewMode("desktop")}
                  className={`px-3 py-1.5 rounded-lg text-[10px] font-bold tracking-wider flex items-center gap-1 transition-all cursor-pointer ${
                    previewMode === "desktop"
                      ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-md shadow-cyan-900/10"
                      : "text-zinc-450 hover:text-white"
                  }`}
                >
                  🖥️ {language === "ms" ? "DESKTOP" : "DESKTOP"}
                </button>
                <button
                  onClick={() => setPreviewMode("tablet")}
                  className={`px-3 py-1.5 rounded-lg text-[10px] font-bold tracking-wider flex items-center gap-1 transition-all cursor-pointer ${
                    previewMode === "tablet"
                      ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-md shadow-cyan-900/10"
                      : "text-zinc-450 hover:text-white"
                  }`}
                >
                  📱 TABLET
                </button>
                <button
                  onClick={() => setPreviewMode("mobile")}
                  className={`px-3 py-1.5 rounded-lg text-[10px] font-bold tracking-wider flex items-center gap-1 transition-all cursor-pointer ${
                    previewMode === "mobile"
                      ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-md shadow-cyan-900/10"
                      : "text-zinc-450 hover:text-white"
                  }`}
                >
                  📞 {language === "ms" ? "TELEFON" : "MOBILE"}
                </button>
              </div>

              {/* Right Side: Action controls */}
              <div className="flex items-center gap-2.5 w-1/3 justify-end">
                <a
                  href={activeDemo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-850 text-zinc-350 border border-zinc-850 hover:border-zinc-800 text-[10px] font-bold tracking-wider flex items-center gap-1 transition-colors cursor-pointer"
                >
                  ↗️ {language === "ms" ? "Buka Tab Baru" : "Open Tab"}
                </a>
                <button
                  onClick={() => setActiveDemo(null)}
                  className="px-3 py-1.5 rounded-lg bg-rose-950/30 hover:bg-rose-900/40 text-rose-455 border border-rose-500/20 text-[10px] font-bold tracking-wider transition-colors cursor-pointer"
                >
                  ✕ {language === "ms" ? "TUTUP" : "CLOSE"}
                </button>
              </div>
            </div>

            {/* Iframe Viewport Container */}
            <div className="flex-1 bg-zinc-950 p-4 flex justify-center items-center overflow-auto relative">
              {/* Device container frame */}
              <div
                className={`h-full w-full bg-white rounded-xl shadow-2xl overflow-hidden transition-all duration-300 border border-zinc-800 ${
                  previewMode === "tablet"
                    ? "max-w-[768px] aspect-[3/4] max-h-full"
                    : previewMode === "mobile"
                    ? "max-w-[375px] aspect-[9/19] max-h-full"
                    : "max-w-full"
                }`}
              >
                <iframe
                  src={activeDemo.url}
                  className="w-full h-full border-0 no-invert"
                  title={activeDemo.title}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
