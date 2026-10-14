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
    <div className="py-12 sm:py-20 space-y-16 sm:space-y-24">
      {/* Hero Header */}
      <div className="ms-container space-y-5 max-w-3xl mx-auto text-center">
        <span className="ms-pill ms-pill-cyan uppercase font-black tracking-widest text-xs">
          {language === "ms" ? "PEMBANGUNAN LAMAN WEB" : "WEBSITE DEVELOPMENT"}
        </span>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
          {language === "ms"
            ? "Laman Web Kemas, Responsif & Sedia Dihubungi"
            : "Clean, Responsive Websites Built to Connect"}
        </h1>
        <p className="text-sm sm:text-lg text-zinc-300 leading-relaxed font-medium">
          {language === "ms"
            ? "Daripada landing page 1-halaman serendah RM79 hingga ke portal korporat berbilang muka surat. Dibina kemas, mesra telefon pintar, dan sedia untuk WhatsApp."
            : "From a single-page landing presence starting at RM79 to multi-page business profiles. Mobile-ready, lightweight, and structured for WhatsApp inquiries."}
        </p>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-3 text-xs font-bold text-white">
          <span className="px-4 py-2 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
            📌 Landing Starter dari RM79
          </span>
          <span className="px-4 py-2 rounded-full bg-white/5 text-zinc-300 border border-white/10">
            ✓ Termasuk 2x suntingan kecil
          </span>
          <span className="px-4 py-2 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
            📱 100% Mobile Responsive
          </span>
        </div>
      </div>

      {/* Package Cards Grid */}
      <div className="ms-container">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            {language === "ms" ? "Pilihan Pakej Laman Web" : "Website Packages"}
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400">
            {language === "ms" ? "Pilih skop yang bersesuaian dengan fasa perniagaan anda." : "Choose the tier matching your business stage."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {websitePackages.map((pkg) => (
            <PricingCard key={pkg.id} item={pkg} featured={pkg.featured} />
          ))}
        </div>
      </div>

      {/* Scope Transparency Matrix Note */}
      <div className="ms-container">
        <div className="ms-card p-6 sm:p-10 border border-white/15 bg-[#0E1424]/90 backdrop-blur-2xl shadow-2xl space-y-6 max-w-4xl mx-auto">
          <div className="border-b border-white/10 pb-4">
            <span className="ms-pill ms-pill-emerald uppercase font-black tracking-widest text-[10px]">
              {language === "ms" ? "KETELUSAN SKOP" : "SCOPE TRANSPARENCY"}
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
              {language === "ms" ? "Perkara Penting Berkenaan Laman Web Kami" : "Important Website Deliverable Notes"}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-zinc-300">
            <div className="space-y-1.5 p-4 rounded-xl bg-white/5 border border-white/10">
              <h4 className="font-black text-sm text-white">
                {language === "ms" ? "Bahan Dibekalkan" : "Supplied Content"}
              </h4>
              <p className="leading-relaxed text-zinc-400">
                {language === "ms"
                  ? "Pelanggan menyediakan teks penerangan, logo, gambar produk/servis, dan pautan WhatsApp yang sah."
                  : "Client supplies business details, branding logo, photography assets, and verified contact destinations."}
              </p>
            </div>

            <div className="space-y-1.5 p-4 rounded-xl bg-white/5 border border-white/10">
              <h4 className="font-black text-sm text-white">
                {language === "ms" ? "Pusingan Suntingan" : "Revision Rounds"}
              </h4>
              <p className="leading-relaxed text-zinc-400">
                {language === "ms"
                  ? "Satu pusingan suntingan merujuk kepada satu senarai perubahan yang diselaraskan serentak dalam skop asal."
                  : "One revision round refers to one consolidated list of reasonable edits within the initial brief."}
              </p>
            </div>

            <div className="space-y-1.5 p-4 rounded-xl bg-white/5 border border-white/10">
              <h4 className="font-black text-sm text-white">
                {language === "ms" ? "Domain & Hosting" : "Domain & Hosting"}
              </h4>
              <p className="leading-relaxed text-zinc-400">
                {language === "ms"
                  ? "Caj pembinaan tidak merangkumi yuran pendaftaran domain (.com) atau langganan hosting pihak ketiga."
                  : "Build fees exclude third-party custom domain registration or ongoing commercial hosting plans."}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Website FAQ */}
      <div className="ms-container max-w-3xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <span className="ms-pill ms-pill-cyan uppercase font-black tracking-widest text-xs">
            FAQ
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-white">
            {language === "ms" ? "Soalan Berkaitan Laman Web" : "Website Questions"}
          </h3>
        </div>
        <FaqAccordion filterCategory="website" limit={4} />
      </div>

      {/* CTA */}
      <div className="ms-container text-center">
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-b from-[#0E1424] via-[#111A30] to-[#070A12] border border-cyan-500/40 max-w-3xl mx-auto space-y-5 shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-black text-white">
            {language === "ms" ? "Sedia untuk membina laman web anda?" : "Ready to build your website?"}
          </h3>
          <p className="text-xs sm:text-sm text-zinc-300 max-w-md mx-auto">
            {language === "ms"
              ? "Bincang keperluan anda di WhatsApp atau gunakan kalkulator bajet untuk anggaran segera."
              : "Discuss your requirements directly on WhatsApp or run an instant estimate."}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ms-btn-primary text-xs py-3.5 px-6 font-black uppercase tracking-wider"
            >
              {language === "ms" ? "Bincang di WhatsApp →" : "Chat on WhatsApp →"}
            </a>
            <Link
              href="/calculator?category=website"
              className="ms-btn-secondary text-xs py-3.5 px-6 font-black uppercase tracking-wider"
            >
              {language === "ms" ? "Kira Anggaran Web" : "Estimate Website"}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
