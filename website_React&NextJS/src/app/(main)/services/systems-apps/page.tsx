"use client";

import React from "react";
import Link from "next/link";
import { useMainSiteLanguage } from "@/context/MainSiteLanguageContext";
import { packagesCatalog } from "@/data/main-site/packages";
import { siteConfig } from "@/data/main-site/siteConfig";
import PricingCard from "@/components/main-site/PricingCard";
import FaqAccordion from "@/components/main-site/FaqAccordion";

export default function SystemsAppsServicePage() {
  const { language } = useMainSiteLanguage();
  const systemsPackages = packagesCatalog.filter((p) => p.category === "systems");

  return (
    <div className="py-12 sm:py-20 space-y-16 sm:space-y-24">
      {/* Hero Header */}
      <div className="ms-container space-y-5 max-w-3xl mx-auto text-center">
        <span className="ms-pill ms-pill-blue uppercase font-black tracking-widest text-xs">
          {language === "ms" ? "SISTEM & APLIKASI KUSTOM" : "CUSTOM SYSTEMS & APPS"}
        </span>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
          {language === "ms"
            ? "Automasikan Operasi Bisnes Dengan Sistem Web & Android"
            : "Streamline Operations with Web Systems & Android Apps"}
        </h1>
        <p className="text-sm sm:text-lg text-zinc-300 leading-relaxed font-medium">
          {language === "ms"
            ? "Tinggalkan rekod manual atau spreadsheet yang bercelaru. Kami membina portal pentadbir kustom, pangkalan data pelanggan, dan aplikasi Android sokongan yang bersambung masa nyata."
            : "Move beyond disorganized spreadsheets. We engineer custom admin portals, customer databases, and native-feel Android companion apps synced in real-time."}
        </p>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-3 text-xs font-bold text-white">
          <span className="px-4 py-2 rounded-full bg-white/5 text-zinc-300 border border-white/10">
            📊 Modul Admin dari RM499
          </span>
          <span className="px-4 py-2 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
            📱 Integrasi Android Sync
          </span>
          <span className="px-4 py-2 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
            ⚡ Pangkalan Data Awan
          </span>
        </div>
      </div>

      {/* Solutions Grid */}
      <div className="ms-container">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            {language === "ms" ? "Modul Pangkalan Data & Aplikasi" : "Core System Modules"}
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400">
            {language === "ms" ? "Cadangan struktur permulaan mengikut aliran kerja operasi anda." : "Proposed starter configurations tailored to operational workflows."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {systemsPackages.map((pkg) => (
            <PricingCard key={pkg.id} item={pkg} featured={pkg.id === "s1-admin-panel"} />
          ))}
        </div>
      </div>

      {/* Realistic Scope Boundaries for Systems */}
      <div className="ms-container">
        <div className="ms-card p-8 sm:p-12 border border-white/15 bg-[#0E1424]/90 backdrop-blur-2xl shadow-2xl space-y-6 max-w-4xl mx-auto">
          <div className="border-b border-white/10 pb-4">
            <span className="ms-pill ms-pill-cyan uppercase font-black tracking-widest text-[10px]">
              {language === "ms" ? "KEJURUTERAAN SISTEM" : "SYSTEM ARCHITECTURE"}
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
              {language === "ms" ? "Keupayaan & Skop Sistem Kami" : "System Capabilities & Architecture"}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs text-zinc-300">
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <span className="text-2xl">🔐</span>
              <h4 className="font-black text-sm text-white">
                {language === "ms" ? "Pengurusan Akses & Pengguna" : "Role-Based Access"}
              </h4>
              <p className="leading-relaxed text-zinc-400">
                {language === "ms"
                  ? "Sistem log masuk berasingan untuk staf, pengurus dan pentadbir dengan kawalan hak akses berbeza."
                  : "Dedicated authentication portals for staff and admins with strict privilege segregation."}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <span className="text-2xl">📲</span>
              <h4 className="font-black text-sm text-white">
                {language === "ms" ? "Aplikasi Sokongan Android" : "Android Companion APK"}
              </h4>
              <p className="leading-relaxed text-zinc-400">
                {language === "ms"
                  ? "Aplikasi Android yang disambungkan ke pangkalan data awan untuk kemasukan data di lapangan atau tablet kedai."
                  : "Android app tied directly to cloud endpoints for mobile floor inventory or tablet cashier entry."}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Systems FAQ */}
      <div className="ms-container max-w-3xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <span className="ms-pill ms-pill-cyan uppercase font-black tracking-widest text-xs">
            FAQ
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-white">
            {language === "ms" ? "Soalan Berkaitan Sistem" : "Systems FAQ"}
          </h3>
        </div>
        <FaqAccordion filterCategory="systems_repair" limit={3} />
      </div>

      {/* Bottom CTA */}
      <div className="ms-container text-center">
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-b from-[#0E1424] via-[#111A30] to-[#070A12] border border-cyan-500/40 max-w-3xl mx-auto space-y-5 shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-black text-white">
            {language === "ms" ? "Bina sistem yang memudahkan kerja anda" : "Build a system tailored to your operation"}
          </h3>
          <p className="text-xs sm:text-sm text-zinc-300 max-w-md mx-auto">
            {language === "ms"
              ? "Ceritakan proses bisnes yang mahu diautomasikan. Kami cadangkan susunan modul yang paling efisien."
              : "Describe your manual bottlenecks. We'll architect an efficient, low-overhead system blueprint."}
          </p>
          <div className="flex items-center justify-center gap-3 pt-2">
            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ms-btn-primary text-xs py-3.5 px-8 font-black uppercase tracking-wider"
            >
              {language === "ms" ? "Bincang di WhatsApp →" : "Chat on WhatsApp →"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
