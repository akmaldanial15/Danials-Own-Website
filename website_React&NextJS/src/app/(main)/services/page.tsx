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
    <div className="py-12 sm:py-20 space-y-16 sm:space-y-24">
      <div className="ms-container space-y-5 text-center max-w-3xl mx-auto">
        <span className="ms-pill ms-pill-cyan uppercase font-black tracking-widest text-xs">
          {language === "ms" ? "KATALOG PERKHIDMATAN" : "SERVICE CATALOGUE"}
        </span>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
          {language === "ms"
            ? "Pilih Servis Mengikut Keperluan & Bajet Anda"
            : "Choose the Right Service for Your Budget"}
        </h1>
        <p className="text-sm sm:text-lg text-zinc-300 leading-relaxed font-medium">
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
              className="ms-card p-7 sm:p-9 flex flex-col justify-between border border-white/10 hover:border-cyan-500/50 hover:shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(6,182,212,0.2)] transition-all bg-[#0E1424]/90 backdrop-blur-2xl"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-black text-cyan-300 px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30">
                    {svc.num}
                  </span>
                  <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    {svc.badge}
                  </span>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                    {svc.title[language]}
                  </h2>
                  <p className="text-xs sm:text-sm text-zinc-300 mt-2 leading-relaxed">
                    {svc.tagline[language]}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-emerald-400">
                  📌 {svc.anchor}
                </div>

                <div className="space-y-2 pt-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-300 block">
                    {language === "ms" ? "Skop Pilihan Termasuk:" : "Featured Package Options:"}
                  </span>
                  <ul className="space-y-1.5 text-xs text-zinc-300">
                    {svc.features[language].map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-cyan-400 font-bold shrink-0">✓</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                <Link
                  href={svc.href}
                  className="ms-btn-primary text-xs py-3 px-6 rounded-xl font-black uppercase tracking-wider"
                >
                  {language === "ms" ? "Perincian Servis →" : "Explore Service →"}
                </Link>
                <Link
                  href={`/calculator?category=${svc.id === "websites" ? "website" : svc.id}`}
                  className="text-xs font-extrabold text-zinc-400 hover:text-white"
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
        <div className="ms-card p-8 sm:p-10 bg-white/5 border border-white/15 backdrop-blur-2xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left shadow-2xl">
          <div className="space-y-1.5 max-w-xl">
            <h3 className="font-black text-lg sm:text-xl text-white">
              {language === "ms" ? "Belum pasti servis mana yang paling sesuai?" : "Not sure which service suits you best?"}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-medium">
              {language === "ms"
                ? "Hubungi kami di WhatsApp. Ceritakan apa yang anda perlukan dan kami akan bantu pilihkan jalan paling jimat."
                : "Chat with us directly. Tell us what you need and we will recommend the most cost-effective path."}
            </p>
          </div>
          <a
            href={siteConfig.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ms-btn-primary text-xs py-3.5 px-8 rounded-xl font-black uppercase tracking-wider shrink-0"
          >
            {language === "ms" ? "Bantu Saya Pilih →" : "Help Me Choose →"}
          </a>
        </div>
      </div>
    </div>
  );
}
