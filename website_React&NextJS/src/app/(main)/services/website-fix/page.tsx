"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useMainSiteLanguage } from "@/context/MainSiteLanguageContext";
import { siteConfig } from "@/data/main-site/siteConfig";
import FaqAccordion from "@/components/main-site/FaqAccordion";

export default function WebsiteFixServicePage() {
  const { language } = useMainSiteLanguage();

  const [selectedIssue, setSelectedIssue] = useState("layout");
  const [siteUrl, setSiteUrl] = useState("");
  const [issueDetails, setIssueDetails] = useState("");

  const issueOptions = [
    {
      id: "layout",
      title: { ms: "Susun Atur & Paparan Senget", en: "Layout & Mobile Alignment" },
      est: "RM29 - RM79",
      desc: {
        ms: "Teks terpotong pada telefon pintar, gambar tidak responsif, atau warna lari.",
        en: "Text clipped on mobile screens, unaligned elements, or responsive bugs.",
      },
    },
    {
      id: "button_form",
      title: { ms: "Butang & Borang Tidak Berfungsi", en: "Broken Buttons & Forms" },
      est: "RM79 - RM149",
      desc: {
        ms: "Butang WhatsApp tidak membuka chat, borang permohonan sangkut, atau pautan mati.",
        en: "WhatsApp button fails to launch, contact form unresponsive, or dead links.",
      },
    },
    {
      id: "ssl_domain",
      title: { ms: "Isu Domain & Amaran 'Not Secure' (SSL)", en: "Domain DNS & SSL Certificate" },
      est: "RM149+",
      desc: {
        ms: "Laman web tidak boleh dibuka melalui domain sendiri atau ada amaran sijil tamat.",
        en: "Website failing to resolve on custom domain or showing SSL expired warnings.",
      },
    },
    {
      id: "speed_refresh",
      title: { ms: "Laman Perlahan & Naik Taraf Visual", en: "Slow Performance & Redesign" },
      est: "RM299+",
      desc: {
        ms: "Laman web lama yang perlahan dimuat turun dan memerlukan reka bentuk moden yang segar.",
        en: "Legacy outdated website that loads sluggishly and needs a fresh modern rebuild.",
      },
    },
    {
      id: "system_error",
      title: { ms: "Ralat Log Masuk & Pangkalan Data", en: "Login & Database Errors" },
      est: "RM499+",
      desc: {
        ms: "Portal admin tidak boleh log masuk, pangkalan data tidak menyimpan rekod, atau ralat 500.",
        en: "Admin dashboard login failing, data records not persisting, or HTTP 500 server errors.",
      },
    },
  ];

  const currentOption = issueOptions.find((o) => o.id === selectedIssue) || issueOptions[0];

  const getInquiryUrl = () => {
    const isMs = language === "ms";
    const msg = isMs
      ? `Hai Danial, saya mahu semakan pembaikan laman web:
Isu: ${currentOption.title.ms}
Anggaran awal: ${currentOption.est}
Laman web: ${siteUrl || "Belum disertakan"}
Keterangan: ${issueDetails || "Perlukan semakan punca masalah"}

Boleh semak kod sumber atau sambungan saya?`
      : `Hi Danial, I need website troubleshooting:
Issue: ${currentOption.title.en}
Starting estimate: ${currentOption.est}
Website: ${siteUrl || "Not provided"}
Details: ${issueDetails || "Inspection needed"}

Could you inspect my website problem?`;

    return `${siteConfig.contact.whatsappUrl}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div className="py-12 sm:py-16 space-y-16 sm:space-y-24">
      {/* Header */}
      <div className="ms-container space-y-4 max-w-3xl mx-auto text-center">
        <span className="ms-pill ms-pill-neutral">
          {language === "ms" ? "PEMBAIKAN & NAIK TARAF" : "REPAIRS & UPGRADES"}
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#18201D] tracking-tight">
          {language === "ms"
            ? "Selesaikan Masalah Laman Web Sedia Ada Anda"
            : "Fix & Upgrade Your Existing Website"}
        </h1>
        <p className="text-sm sm:text-base text-[#52605A] leading-relaxed">
          {language === "ms"
            ? "Ada butang rosak, paparan mobile senget, atau amaran keselamatan SSL? Kami membantu memeriksa punca sebenar masalah dan membaiki kod dengan harga telus."
            : "Struggling with broken forms, mobile responsive glitches, or expired SSL warnings? We inspect the root cause and provide clear, honest repair estimates."}
        </p>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-3 text-xs font-bold text-[#18201D]">
          <span className="px-3 py-1.5 rounded-full bg-[#FAF9F5] text-[#52605A] border border-[#DDE1DA]">
            🔧 Pembaikan kecil dari RM29
          </span>
          <span className="px-3 py-1.5 rounded-full bg-[#FAF9F5] text-[#52605A] border border-[#DDE1DA]">
            🔒 Setup Sijil SSL dari RM149
          </span>
          <span className="px-3 py-1.5 rounded-full bg-[#E6F4F1] text-[#087A68] border border-[#C4E6DF]">
            ✓ Semakan telus tanpa diagnosis palsu
          </span>
        </div>
      </div>

      {/* Guided Problem Selector */}
      <div className="ms-container">
        <div className="max-w-4xl mx-auto ms-card p-6 sm:p-10 border-2 border-[#DDE1DA] bg-white space-y-8">
          <div className="space-y-1 border-b border-[#F0EFEA] pb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#087A68]">
              {language === "ms" ? "PILIH MASALAH" : "SELECT PROBLEM"}
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#18201D]">
              {language === "ms" ? "Apa yang berlaku pada website anda?" : "What is happening to your website?"}
            </h2>
            <p className="text-xs text-[#52605A]">
              {language === "ms"
                ? "Pilih kategori untuk melihat anggaran awal kos dan panduan tindakan."
                : "Select an issue category to view indicative cost estimates and next steps."}
            </p>
          </div>

          {/* Issue Pills */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {issueOptions.map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => setSelectedIssue(opt.id)}
                className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  selectedIssue === opt.id
                    ? "border-[#2457E6] bg-[#EEF2FF] shadow-xs ring-2 ring-[#2457E6]/10"
                    : "border-[#DDE1DA] bg-[#FFFFFF] hover:bg-[#FAF9F5]"
                }`}
              >
                <div>
                  <span className="font-extrabold text-xs text-[#18201D] block">
                    {opt.title[language]}
                  </span>
                  <p className="text-[11px] text-[#52605A] mt-1 line-clamp-2">
                    {opt.desc[language]}
                  </p>
                </div>
                <span className="text-[10px] font-bold text-[#2457E6] mt-3">
                  {language === "ms" ? "Anggaran" : "Estimate"}: {opt.est}
                </span>
              </button>
            ))}
          </div>

          {/* Diagnosis Form Card */}
          <div className="p-5 rounded-xl bg-[#FAF9F5] border border-[#EBEFE8] space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#DDE1DA] pb-3">
              <div>
                <span className="text-xs font-bold text-[#18201D]">
                  {currentOption.title[language]}
                </span>
                <span className="text-[11px] text-[#52605A] block mt-0.5">
                  {language === "ms" ? "Harga anggaran permulaan:" : "Starting indicative estimate:"}{" "}
                  <strong className="text-[#2457E6]">{currentOption.est}</strong>
                </span>
              </div>
              <span className="ms-pill ms-pill-neutral self-start sm:self-auto text-[10px]">
                {language === "ms" ? "Anggaran selepas semakan" : "Assessment required"}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-[#18201D] block mb-1">
                  {language === "ms" ? "Pautan Laman Web Anda" : "Your Website Link"}
                </label>
                <input
                  type="url"
                  placeholder="https://example.com"
                  value={siteUrl}
                  onChange={(e) => setSiteUrl(e.target.value)}
                  className="w-full p-2.5 rounded-lg border border-[#DDE1DA] bg-white text-xs"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-[#18201D] block mb-1">
                  {language === "ms" ? "Keterangan Ringkas Isu" : "Brief Problem Description"}
                </label>
                <input
                  type="text"
                  placeholder={language === "ms" ? "Contoh: Gambar lari bila buka di iPhone" : "E.g. Broken images on iPhone"}
                  value={issueDetails}
                  onChange={(e) => setIssueDetails(e.target.value)}
                  className="w-full p-2.5 rounded-lg border border-[#DDE1DA] bg-white text-xs"
                />
              </div>
            </div>

            {/* Truthful Disclaimer */}
            <p className="text-[11px] text-[#7E8F87] italic">
              ℹ️ {language === "ms"
                ? "Alat ini adalah panduan pertanyaan. Tiada imbasan automatik palsu dilakukan pada peranti anda. Kos sebenar akan disahkan selepas kami menyemak kod sumber laman anda."
                : "This tool is an inquiry guide. No automated fake scanning is performed on your browser. Actual costs are confirmed after inspecting your site's codebase."}
            </p>

            <div className="pt-2">
              <a
                href={getInquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="ms-btn-primary w-full text-center text-xs py-3 rounded-xl font-bold block"
              >
                {language === "ms" ? "Hantar Maklumat Masalah ke WhatsApp →" : "Send Problem Details to WhatsApp →"}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Repair FAQ */}
      <div className="ms-container">
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-1">
          <h3 className="text-xl sm:text-2xl font-extrabold text-[#18201D]">
            {language === "ms" ? "Soalan Lazim Servis Pembaikan" : "Repair Service FAQ"}
          </h3>
          <p className="text-xs text-[#52605A]">
            {language === "ms" ? "Ketahui proses semakan sebelum kami memulakan pembaikan." : "Learn how we inspect and quote repair tasks."}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <FaqAccordion filterCategory="systems_repair" limit={4} />
        </div>
      </div>
    </div>
  );
}
