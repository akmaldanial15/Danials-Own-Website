"use client";

import React from "react";
import Link from "next/link";
import { useMainSiteLanguage } from "@/context/MainSiteLanguageContext";
import { siteConfig } from "@/data/main-site/siteConfig";

export default function ServicesIndexPage() {
  const { language, t } = useMainSiteLanguage();

  const services = [
    {
      id: "websites",
      num: "01",
      title: {
        ms: "Pembangunan Laman Web",
        en: "Website Development",
      },
      tagline: {
        ms: "Landing page ringkas hingga laman profil berbilang muka surat yang kemas dan responsif.",
        en: "From streamlined landing pages to full multi-page business profiles.",
      },
      anchor: "Landing page dari RM79 (termasuk 2x suntingan)",
      href: "/services/websites",
      features: {
        ms: [
          "Landing Starter (RM79) sehingga 4 seksyen padat",
          "Landing Plus (RM199) dengan seksyen galeri & FAQ",
          "Business Website (RM399) untuk 4 halaman rasmi",
          "Custom Website (RM799) gubahan eksklusif jenama",
        ],
        en: [
          "Landing Starter (RM79) up to 4 compact sections",
          "Landing Plus (RM199) with gallery & FAQ modules",
          "Business Website (RM399) for 4 standard pages",
          "Custom Website (RM799) bespoke brand layout",
        ],
      },
      badge: "RM79+",
    },
    {
      id: "design",
      num: "02",
      title: {
        ms: "Graphic Design & Foto",
        en: "Graphic Design & Photo",
      },
      tagline: {
        ms: "Dua laluan berbeza: Design Express (RM5/gambar) untuk suntingan pantas, atau Design Custom (dari RM35) untuk rekaan teliti.",
        en: "Two distinct pathways: Design Express (RM5/image) for rapid edits, or Design Custom (from RM35) for bespoke artwork.",
      },
      anchor: "Suntingan pantas dari RM5 / gambar",
      href: "/services/design",
      features: {
        ms: [
          "Design Express E1 (RM5) — buang background & tukar teks/harga",
          "Express E2 Duo (RM8) — pakej 2 keping gambar serentak",
          "Custom Poster & Menu (RM35 - RM49) saiz tepat & 300 DPI",
          "Logo Starter & Label Bungkusan (RM99 - RM149)",
        ],
        en: [
          "Design Express E1 (RM5) — cutout & text/price swaps",
          "Express E2 Duo (RM8) — package for 2 images together",
          "Custom Poster & Menu (RM35 - RM49) tailored size & 300 DPI",
          "Logo Starter & Packaging Label (RM99 - RM149)",
        ],
      },
      badge: "RM5+",
    },
    {
      id: "website-fix",
      num: "03",
      title: {
        ms: "Naik Taraf & Pembaikan Website",
        en: "Website Redesign & Repair",
      },
      tagline: {
        ms: "Selesaikan masalah teknikal, paparan mobile senget, borang rosak, atau sijil SSL 'Not Secure'.",
        en: "Resolve technical bugs, mobile layout glitches, broken forms, or SSL 'Not Secure' warnings.",
      },
      anchor: "Pembaikan kecil dari RM29 (selepas semakan)",
      href: "/services/website-fix",
      features: {
        ms: [
          "Pembaikan susun atur & teks senget (dari RM29)",
          "Pembetulan fungsi butang & borang WhatsApp (dari RM79)",
          "Konfigurasi domain DNS & pengaktifan SSL (dari RM149)",
          "Naik taraf visual & reka bentuk semula (dari RM299)",
        ],
        en: [
          "Content & layout display patch (from RM29)",
          "Button & form function repair (from RM79)",
          "DNS domain pointing & SSL provisioning (from RM149)",
          "Visual refresh & redesign upgrade (from RM299)",
        ],
      },
      badge: "RM29+",
    },
    {
      id: "systems-apps",
      num: "04",
      title: {
        ms: "Sistem & Aplikasi Kustom",
        en: "Custom Systems & Apps",
      },
      tagline: {
        ms: "Portal pentadbir, pangkalan data pelanggan, sistem pesanan, dan aplikasi sokongan Android.",
        en: "Admin dashboards, client records database, order workflows, and Android companion apps.",
      },
      anchor: "Modul pangkalan data asas dari RM499",
      href: "/services/systems-apps",
      features: {
        ms: [
          "Panel admin staf dengan log masuk selamat (dari RM499)",
          "Pangkalan data pelanggan, pesanan & inventori asas (dari RM699)",
          "Aliran kerja tempahan & status secara digital (dari RM799)",
          "Aplikasi Android APK bersambung database (dari RM1,999)",
        ],
        en: [
          "Secure authenticated staff admin portal (from RM499)",
          "Customer, order & inventory database records (from RM699)",
          "Digital booking & order status workflows (from RM799)",
          "Android APK companion connected to web database (from RM1,999)",
        ],
      },
      badge: "RM499+",
    },
  ];

  return (
    <div className="py-12 sm:py-16 space-y-16">
      <div className="ms-container space-y-4 text-center max-w-3xl mx-auto">
        <span className="ms-pill ms-pill-teal">
          {language === "ms" ? "KATALOG PERKHIDMATAN" : "SERVICE CATALOGUE"}
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#18201D] tracking-tight">
          {language === "ms"
            ? "Pilih Servis Mengikut Keperluan & Bajet Anda"
            : "Choose the Right Service for Your Budget"}
        </h1>
        <p className="text-sm sm:text-base text-[#52605A] leading-relaxed">
          {language === "ms"
            ? "Kami menyediakan empat tiang perkhidmatan utama dengan skop yang jelas dan harga permulaan yang telus. Tiada yuran tersembunyi."
            : "We provide four core service pillars with transparent starting anchors and strictly defined scope. No hidden surprises."}
        </p>
      </div>

      {/* Services Grid */}
      <div className="ms-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((svc) => (
            <div
              key={svc.id}
              className="ms-card p-7 sm:p-8 flex flex-col justify-between hover:border-[#2457E6] transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-extrabold text-[#2457E6] px-2.5 py-1 rounded-lg bg-[#EEF2FF] border border-[#D5E0FF]">
                    {svc.num}
                  </span>
                  <span className="text-xs font-extrabold px-2.5 py-1 rounded-full bg-[#E6F4F1] text-[#087A68] border border-[#C4E6DF]">
                    {svc.badge}
                  </span>
                </div>

                <div>
                  <h2 className="text-2xl font-extrabold text-[#18201D] tracking-tight">
                    {svc.title[language]}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#52605A] mt-2 leading-relaxed">
                    {svc.tagline[language]}
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-[#FAF9F5] border border-[#EBEFE8] text-xs font-bold text-[#087A68]">
                  📌 {svc.anchor}
                </div>

                <div className="space-y-2 pt-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#18201D] block">
                    {language === "ms" ? "Skop Pilihan Termasuk:" : "Featured Package Options:"}
                  </span>
                  <ul className="space-y-1.5 text-xs text-[#52605A]">
                    {svc.features[language].map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#2457E6] font-bold">✓</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#F0EFEA] flex items-center justify-between">
                <Link
                  href={svc.href}
                  className="ms-btn-primary text-xs py-2.5 px-5 rounded-xl font-bold"
                >
                  {language === "ms" ? "Perincian Servis →" : "Explore Service →"}
                </Link>
                <Link
                  href={`/calculator?category=${svc.id === "websites" ? "website" : svc.id}`}
                  className="text-xs font-bold text-[#52605A] hover:text-[#18201D]"
                >
                  {language === "ms" ? "Kira Bajet" : "Estimate"}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Helpful Choice Helper */}
      <div className="ms-container">
        <div className="ms-card p-6 sm:p-8 bg-[#FAF9F5] border border-[#DDE1DA] flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1 max-w-xl">
            <h3 className="font-extrabold text-base sm:text-lg text-[#18201D]">
              {language === "ms" ? "Belum pasti servis mana yang paling sesuai?" : "Not sure which service suits you best?"}
            </h3>
            <p className="text-xs text-[#52605A] leading-relaxed">
              {language === "ms"
                ? "Hubungi kami di WhatsApp. Ceritakan apa yang anda perlukan dan kami akan bantu pilihkan jalan paling jimat."
                : "Chat with us directly. Tell us what you need and we will recommend the most cost-effective path."}
            </p>
          </div>
          <a
            href={siteConfig.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ms-btn-primary text-xs py-3 px-6 rounded-xl font-bold shrink-0"
          >
            {language === "ms" ? "Bantu Saya Pilih →" : "Help Me Choose →"}
          </a>
        </div>
      </div>
    </div>
  );
}
