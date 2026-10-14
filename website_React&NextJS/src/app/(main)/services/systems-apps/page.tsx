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
    <div className="py-12 sm:py-16 space-y-16 sm:space-y-24">
      {/* Hero Header */}
      <div className="ms-container space-y-4 max-w-3xl mx-auto text-center">
        <span className="ms-pill ms-pill-blue">
          {language === "ms" ? "SISTEM & APLIKASI KUSTOM" : "CUSTOM SYSTEMS & APPS"}
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#18201D] tracking-tight">
          {language === "ms"
            ? "Automasikan Operasi Bisnes Dengan Sistem Web & Android"
            : "Streamline Operations with Web Systems & Android Apps"}
        </h1>
        <p className="text-sm sm:text-base text-[#52605A] leading-relaxed">
          {language === "ms"
            ? "Tinggalkan rekod manual atau spreadsheet yang bercelaru. Kami membina portal pentadbir kustom, pangkalan data pelanggan, dan aplikasi Android sokongan yang bersambung masa nyata."
            : "Move beyond disorganized spreadsheets. We engineer custom admin portals, customer databases, and native-feel Android companion apps synced in real-time."}
        </p>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-3 text-xs font-bold text-[#18201D]">
          <span className="px-3 py-1.5 rounded-full bg-[#FAF9F5] text-[#52605A] border border-[#DDE1DA]">
            📊 Modul Admin dari RM499
          </span>
          <span className="px-3 py-1.5 rounded-full bg-[#FAF9F5] text-[#52605A] border border-[#DDE1DA]">
            📱 Integrasi Android Sync
          </span>
          <span className="px-3 py-1.5 rounded-full bg-[#EEF2FF] text-[#2457E6] border border-[#D5E0FF]">
            ⚡ Pangkalan Data Awan
          </span>
        </div>
      </div>

      {/* Solutions Grid */}
      <div className="ms-container">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-1">
          <h2 className="text-2xl font-extrabold text-[#18201D]">
            {language === "ms" ? "Modul Pangkalan Data & Aplikasi" : "Core System Modules"}
          </h2>
          <p className="text-xs text-[#52605A]">
            {language === "ms" ? "Cadangan struktur permulaan mengikut aliran kerja operasi anda." : "Proposed starter configurations tailored to operational workflows."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {systemsPackages.map((pkg) => (
            <PricingCard key={pkg.id} item={pkg} featured={pkg.id === "s1-admin-panel"} />
          ))}
        </div>
      </div>

      {/* Scope Boundaries Architecture */}
      <div className="ms-container">
        <div className="ms-card p-8 sm:p-10 bg-[#FAF9F5] border border-[#DDE1DA] space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-bold tracking-widest text-[#087A68] uppercase">
              {language === "ms" ? "PENJELASAN SKOP" : "SCOPE BOUNDARIES"}
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#18201D]">
              {language === "ms" ? "Bagaimana Kami Membina & Menilai Sistem" : "How We Architect & Scope Custom Systems"}
            </h3>
            <p className="text-xs text-[#52605A]">
              {language === "ms"
                ? "Sistem perniagaan dinilai berdasarkan kerumitan data dan jumlah peranan pengguna (roles):"
                : "Business applications are scoped based on data complexity and user permission tiers:"}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
            <div className="p-4 rounded-xl bg-white border border-[#DDE1DA] space-y-2">
              <span className="text-lg">🔐</span>
              <h4 className="font-extrabold text-sm text-[#18201D]">
                {language === "ms" ? "1. Keselamatan & Akses" : "1. Security & Auth"}
              </h4>
              <p className="text-xs text-[#52605A] leading-relaxed">
                {language === "ms"
                  ? "Pengasingan akses antara staf biasa dan pentadbir utama untuk melindungi data syarikat."
                  : "Role-based authentication ensuring staff and super-admins access appropriate data boundaries."}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#DDE1DA] space-y-2">
              <span className="text-lg">⚡</span>
              <h4 className="font-extrabold text-sm text-[#18201D]">
                {language === "ms" ? "2. Prestasi Pangkalan Data" : "2. Cloud Database"}
              </h4>
              <p className="text-xs text-[#52605A] leading-relaxed">
                {language === "ms"
                  ? "Seni bina pangkalan data awan berprestasi tinggi yang bersedia untuk ribuan rekod transaksi."
                  : "High-performance relational cloud databases structured for thousands of transactional records."}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#DDE1DA] space-y-2">
              <span className="text-lg">📲</span>
              <h4 className="font-extrabold text-sm text-[#18201D]">
                {language === "ms" ? "3. Aplikasi Lapangan (Android)" : "3. Field Operations"}
              </h4>
              <p className="text-xs text-[#52605A] leading-relaxed">
                {language === "ms"
                  ? "Aplikasi Android APK khusus untuk imbasan stok, semakan pesanan di tapak atau pemandu."
                  : "Custom Android APK companion for warehouse scanning, on-site audits, or dispatch teams."}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="ms-container">
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-1">
          <h3 className="text-xl sm:text-2xl font-extrabold text-[#18201D]">
            {language === "ms" ? "Soalan Lazim Sistem & Aplikasi" : "Systems & Apps FAQ"}
          </h3>
          <p className="text-xs text-[#52605A]">
            {language === "ms" ? "Perincian tentang kos pelayan, Play Store, dan proses pembinaan." : "Details on hosting databases, Play Console requirements, and build workflows."}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <FaqAccordion filterCategory="systems_repair" limit={4} />
        </div>
      </div>

      {/* CTA */}
      <div className="ms-container">
        <div className="ms-card p-8 bg-[#17251F] text-white rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h3 className="font-extrabold text-xl text-white">
              {language === "ms" ? "Bincangkan Sistem Impian Anda" : "Discuss Your System Requirements"}
            </h3>
            <p className="text-xs text-[#A3B1AB]">
              {language === "ms" ? "Dapatkan nasihat teknikal terus daripada Danial mengenai aliran data perniagaan anda." : "Receive direct architectural guidance from Danial for your business operations."}
            </p>
          </div>
          <a
            href={siteConfig.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ms-btn-primary text-xs py-3 px-6 rounded-xl font-bold shrink-0"
          >
            {language === "ms" ? "Bincang di WhatsApp →" : "Consult on WhatsApp →"}
          </a>
        </div>
      </div>
    </div>
  );
}
