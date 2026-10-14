"use client";

import React from "react";
import Link from "next/link";
import { useMainSiteLanguage } from "@/context/MainSiteLanguageContext";
import { packagesCatalog } from "@/data/main-site/packages";
import { siteConfig } from "@/data/main-site/siteConfig";
import PricingCard from "@/components/main-site/PricingCard";
import FaqAccordion from "@/components/main-site/FaqAccordion";

export default function WebsitesServicePage() {
  const { language } = useMainSiteLanguage();
  const websitePackages = packagesCatalog.filter((p) => p.category === "website");

  return (
    <div className="py-12 sm:py-16 space-y-16 sm:space-y-24">
      {/* Hero Header */}
      <div className="ms-container space-y-4 max-w-3xl mx-auto text-center">
        <span className="ms-pill ms-pill-teal">
          {language === "ms" ? "PEMBANGUNAN LAMAN WEB" : "WEBSITE DEVELOPMENT"}
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#18201D] tracking-tight">
          {language === "ms"
            ? "Laman Web Kemas, Responsif & Sedia Dihubungi"
            : "Clean, Responsive Websites Built to Connect"}
        </h1>
        <p className="text-sm sm:text-base text-[#52605A] leading-relaxed">
          {language === "ms"
            ? "Daripada landing page 1-halaman serendah RM79 hingga ke portal korporat berbilang muka surat. Dibina kemas, mesra telefon pintar, dan sedia untuk WhatsApp."
            : "From a single-page landing presence starting at RM79 to multi-page business profiles. Mobile-ready, lightweight, and structured for WhatsApp inquiries."}
        </p>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs font-bold text-[#18201D]">
          <span className="px-3 py-1.5 rounded-full bg-[#E6F4F1] text-[#087A68] border border-[#C4E6DF]">
            📌 Landing Starter dari RM79
          </span>
          <span className="px-3 py-1.5 rounded-full bg-[#FAF9F5] text-[#52605A] border border-[#DDE1DA]">
            ✓ Termasuk 2x suntingan kecil
          </span>
          <span className="px-3 py-1.5 rounded-full bg-[#FAF9F5] text-[#52605A] border border-[#DDE1DA]">
            📱 100% Mobile Responsive
          </span>
        </div>
      </div>

      {/* Package Cards Grid */}
      <div className="ms-container">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-1">
          <h2 className="text-2xl font-extrabold text-[#18201D]">
            {language === "ms" ? "Pilihan Pakej Laman Web" : "Website Packages"}
          </h2>
          <p className="text-xs text-[#52605A]">
            {language === "ms" ? "Pilih skop yang bersesuaian dengan fasa perniagaan anda." : "Choose the tier matching your business stage."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {websitePackages.map((pkg) => (
            <PricingCard key={pkg.id} item={pkg} featured={pkg.featured} />
          ))}
        </div>
      </div>

      {/* What to Prepare Section */}
      <div className="ms-container">
        <div className="ms-card p-8 sm:p-10 bg-[#FAF9F5] border border-[#DDE1DA] space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-bold tracking-widest text-[#087A68] uppercase">
              {language === "ms" ? "PANDUAN PERSEDIAAN" : "CLIENT PREPARATION"}
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#18201D]">
              {language === "ms" ? "Apa yang perlu anda sediakan?" : "What should you prepare?"}
            </h3>
            <p className="text-xs text-[#52605A]">
              {language === "ms" ? "Untuk memulakan projek dengan lancar dan pantas, sediakan bahan-bahan berikut:" : "To kick off your project efficiently, gather these simple items:"}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
            <div className="p-4 rounded-xl bg-white border border-[#DDE1DA] space-y-2">
              <span className="text-lg">📝</span>
              <h4 className="font-extrabold text-sm text-[#18201D]">
                {language === "ms" ? "1. Teks & Maklumat" : "1. Copy & Details"}
              </h4>
              <p className="text-xs text-[#52605A] leading-relaxed">
                {language === "ms"
                  ? "Nama bisnes, pengenalan servis, senarai harga, waktu operasi, dan nombor WhatsApp."
                  : "Business name, service descriptions, pricing notes, operating hours, and WhatsApp contact."}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#DDE1DA] space-y-2">
              <span className="text-lg">🖼️</span>
              <h4 className="font-extrabold text-sm text-[#18201D]">
                {language === "ms" ? "2. Gambar & Logo" : "2. Photos & Logo"}
              </h4>
              <p className="text-xs text-[#52605A] leading-relaxed">
                {language === "ms"
                  ? "Logo rasmi (PNG telus jika ada) dan gambar produk atau premis yang jelas."
                  : "Official logo (transparent PNG preferred) and clear product or storefront photos."}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#DDE1DA] space-y-2">
              <span className="text-lg">🌐</span>
              <h4 className="font-extrabold text-sm text-[#18201D]">
                {language === "ms" ? "3. Domain & Rujukan" : "3. Domain & Taste"}
              </h4>
              <p className="text-xs text-[#52605A] leading-relaxed">
                {language === "ms"
                  ? "Cadangan nama domain (.com/.my) atau contoh laman web yang anda minati gaya visualnya."
                  : "Your preferred domain idea (.com/.my) or reference websites matching your aesthetic."}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Service Specific FAQ */}
      <div className="ms-container">
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-1">
          <h3 className="text-xl sm:text-2xl font-extrabold text-[#18201D]">
            {language === "ms" ? "Soalan Lazim Servis Website" : "Website Service FAQ"}
          </h3>
          <p className="text-xs text-[#52605A]">
            {language === "ms" ? "Perincian mengenai domain, hosting, dan pusingan suntingan." : "Details on domain, hosting, and revision cycles."}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <FaqAccordion filterCategory="website" limit={4} />
        </div>
      </div>

      {/* CTA Strip */}
      <div className="ms-container">
        <div className="ms-card p-8 bg-[#17251F] text-white rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h3 className="font-extrabold text-xl text-white">
              {language === "ms" ? "Bina Laman Web Anda Sekarang" : "Start Your Website Project Today"}
            </h3>
            <p className="text-xs text-[#A3B1AB]">
              {language === "ms" ? "Landing Starter dari RM79. Bincang terus di WhatsApp tanpa sebarang kewajipan." : "Landing Starter from RM79. Chat directly on WhatsApp with no commitment."}
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/calculator?category=website"
              className="ms-btn-secondary text-xs py-2.5 px-4 rounded-xl font-bold bg-[#293832] text-white border-[#3b4c45]"
            >
              {language === "ms" ? "Kira Bajet" : "Estimate"}
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
