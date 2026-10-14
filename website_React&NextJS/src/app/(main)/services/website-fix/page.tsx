"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useMainSiteLanguage } from "@/context/MainSiteLanguageContext";
import { siteConfig } from "@/data/main-site/siteConfig";

interface IssueOption {
  id: string;
  title: { ms: string; en: string };
  desc: { ms: string; en: string };
  est: string;
}

export default function WebsiteFixPage() {
  const { language } = useMainSiteLanguage();
  const [selectedIssue, setSelectedIssue] = useState<string>("layout");
  const [siteUrl, setSiteUrl] = useState<string>("");
  const [issueDetails, setIssueDetails] = useState<string>("");

  const issueOptions: IssueOption[] = [
    {
      id: "layout",
      title: {
        ms: "Susun Atur & Paparan Senget",
        en: "Broken Layout & Mobile Misalignment",
      },
      desc: {
        ms: "Teks terpotong pada telefon pintar, gambar tidak responsif, atau warna lari.",
        en: "Clipped copy on mobile screens, unscaled images, or CSS breakage.",
      },
      est: "RM29 - RM79",
    },
    {
      id: "button_forms",
      title: {
        ms: "Butang & Borang Tidak Berfungsi",
        en: "Broken Buttons & Stuck Forms",
      },
      desc: {
        ms: "Butang WhatsApp tidak membuka chat, borang permohonan sangkut, atau pautan mati.",
        en: "WhatsApp button fails to open app, inquiry forms error out, or links dead.",
      },
      est: "RM79 - RM149",
    },
    {
      id: "domain_ssl",
      title: {
        ms: "Isu Domain & Amaran 'Not Secure' (SSL)",
        en: "Domain Setup & SSL Security Warning",
      },
      desc: {
        ms: "Laman web tidak boleh dibuka melalui domain sendiri atau ada amaran sijil tamat.",
        en: "Custom domain failed to resolve or browser flags expired SSL certificate.",
      },
      est: "RM149+",
    },
    {
      id: "slow_redesign",
      title: {
        ms: "Laman Perlahan & Naik Taraf Visual",
        en: "Slow Loading & Visual Redesign Refresh",
      },
      desc: {
        ms: "Laman web lama yang perlahan dimuat turun dan memerlukan reka bentuk moden yang segar.",
        en: "Legacy slow-loading site needing modern speed optimization & visual uplift.",
      },
      est: "RM299+",
    },
    {
      id: "system_login",
      title: {
        ms: "Ralat Log Masuk & Pangkalan Data",
        en: "Login Failure & Database Records Glitch",
      },
      desc: {
        ms: "Portal admin tidak boleh log masuk, pangkalan data tidak menyimpan rekod, atau ralat 500.",
        en: "Admin login errors, database fails to persist records, or HTTP 500 bugs.",
      },
      est: "RM499+",
    },
    {
      id: "content_update",
      title: {
        ms: "Kemas Kini Teks, Harga & Gambar",
        en: "Content, Menu & Price Updates",
      },
      desc: {
        ms: "Perlu menukar maklumat syarikat, senarai produk, menu harga baharu, atau poster.",
        en: "Updating company profile details, seasonal menus, price tags, or team bios.",
      },
      est: "RM29 - RM49",
    },
  ];

  const currentOption = issueOptions.find((o) => o.id === selectedIssue) || issueOptions[0];

  const buildWhatsAppRepairUrl = () => {
    const isMs = language === "ms";
    const msg = isMs
      ? `Hai Danial, saya ingin bantuan pembaikan laman web:
Isu: ${currentOption.title.ms}
Anggaran awal: ${currentOption.est}
Laman web: ${siteUrl || "Belum disertakan"}
Keterangan: ${issueDetails || "Perlukan semakan punca masalah"}

Boleh semak punca masalah laman web saya?`
      : `Hi Danial, I need website troubleshooting:
Issue: ${currentOption.title.en}
Starting estimate: ${currentOption.est}
Website: ${siteUrl || "Not provided"}
Details: ${issueDetails || "Inspection needed"}

Could you inspect my website problem?`;

    return `${siteConfig.contact.whatsappUrl}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div className="py-12 sm:py-20 space-y-16 sm:space-y-24">
      {/* Header */}
      <div className="ms-container space-y-5 max-w-3xl mx-auto text-center">
        <span className="ms-pill ms-pill-cyan uppercase font-black tracking-widest text-xs">
          {language === "ms" ? "PEMBAIKAN & NAIK TARAF" : "REPAIRS & UPGRADES"}
        </span>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
          {language === "ms"
            ? "Selesaikan Masalah Laman Web Sedia Ada Anda"
            : "Fix & Upgrade Your Existing Website"}
        </h1>
        <p className="text-sm sm:text-lg text-zinc-300 leading-relaxed font-medium">
          {language === "ms"
            ? "Ada butang rosak, paparan mobile senget, atau amaran keselamatan SSL? Kami membantu memeriksa punca sebenar masalah dan membaiki kod dengan harga telus."
            : "Struggling with broken forms, mobile responsive glitches, or expired SSL warnings? We inspect the root cause and provide clear, honest repair estimates."}
        </p>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-3 text-xs font-bold text-white">
          <span className="px-4 py-2 rounded-full bg-white/5 text-zinc-300 border border-white/10">
            🔧 Pembaikan kecil dari RM29
          </span>
          <span className="px-4 py-2 rounded-full bg-white/5 text-zinc-300 border border-white/10">
            🔒 Setup Sijil SSL dari RM149
          </span>
          <span className="px-4 py-2 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
            ✓ Semakan telus tanpa diagnosis palsu
          </span>
        </div>
      </div>

      {/* Guided Problem Selector */}
      <div className="ms-container">
        <div className="max-w-4xl mx-auto ms-card p-6 sm:p-10 border border-white/15 bg-[#0E1424]/90 backdrop-blur-2xl shadow-2xl space-y-8">
          <div className="space-y-1.5 border-b border-white/10 pb-5">
            <span className="ms-pill ms-pill-emerald uppercase font-black tracking-widest text-[10px]">
              {language === "ms" ? "PILIH MASALAH" : "SELECT PROBLEM"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-1">
              {language === "ms" ? "Apa yang berlaku pada website anda?" : "What is happening to your website?"}
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400">
              {language === "ms"
                ? "Pilih kategori untuk melihat anggaran awal kos dan panduan tindakan."
                : "Select an issue category to view indicative cost estimates and next steps."}
            </p>
          </div>

          {/* Issue Pills */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {issueOptions.map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => setSelectedIssue(opt.id)}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  selectedIssue === opt.id
                    ? "border-cyan-400 bg-cyan-500/15 shadow-[0_0_20px_rgba(6,182,212,0.25)] ring-2 ring-cyan-400/20"
                    : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10"
                }`}
              >
                <div>
                  <span className="font-black text-xs sm:text-sm text-white block mb-1">
                    {opt.title[language]}
                  </span>
                  <p className="text-[11px] text-zinc-300 line-clamp-2 leading-relaxed">
                    {opt.desc[language]}
                  </p>
                </div>
                <span className="text-[11px] font-black text-cyan-300 mt-3 pt-2 border-t border-white/5">
                  {language === "ms" ? "Anggaran" : "Estimate"}: {opt.est}
                </span>
              </button>
            ))}
          </div>

          {/* Diagnosis Form Card */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
              <div>
                <span className="text-sm font-black text-white block">
                  {currentOption.title[language]}
                </span>
                <span className="text-xs text-zinc-400 block mt-0.5">
                  {language === "ms" ? "Harga anggaran permulaan:" : "Starting indicative estimate:"}{" "}
                  <strong className="text-cyan-400 font-extrabold text-sm">{currentOption.est}</strong>
                </span>
              </div>
              <span className="ms-pill ms-pill-neutral self-start sm:self-auto text-[10px] font-bold">
                {language === "ms" ? "Anggaran selepas semakan" : "Assessment required"}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-white block mb-1.5">
                  {language === "ms" ? "Pautan Laman Web Anda" : "Your Website Link"}
                </label>
                <input
                  type="url"
                  placeholder="https://example.com"
                  value={siteUrl}
                  onChange={(e) => setSiteUrl(e.target.value)}
                  className="w-full p-3 rounded-xl border border-white/15 bg-white/5 text-white placeholder-zinc-500 text-xs focus:border-cyan-400 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-white block mb-1.5">
                  {language === "ms" ? "Keterangan Ringkas Isu" : "Brief Problem Description"}
                </label>
                <input
                  type="text"
                  placeholder={language === "ms" ? "Contoh: Gambar lari bila buka di iPhone" : "E.g. Broken images on iPhone"}
                  value={issueDetails}
                  onChange={(e) => setIssueDetails(e.target.value)}
                  className="w-full p-3 rounded-xl border border-white/15 bg-white/5 text-white placeholder-zinc-500 text-xs focus:border-cyan-400 focus:outline-hidden"
                />
              </div>
            </div>

            {/* Truthful Disclaimer */}
            <p className="text-[11px] text-zinc-400 italic">
              ℹ️ {language === "ms"
                ? "Peringatan jujur: Pemilih masalah ini adalah panduan awal, bukan imbasan automatik pelayan. Sebut harga sebenar disahkan selepas kod atau konfigurasi laman web diperiksa secara manual."
                : "Honest note: This problem selector serves as an indicative guide, not an automated server scan. Firm quotes are confirmed upon direct manual inspection of the codebase or host."}
            </p>

            {/* Action */}
            <div className="pt-2">
              <a
                href={buildWhatsAppRepairUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="ms-btn-primary w-full py-4 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <span>{language === "ms" ? "Sediakan Mesej WhatsApp untuk Isu Ini" : "Prepare WhatsApp Repair Message"}</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Process note */}
      <div className="ms-container max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="p-5 rounded-2xl bg-[#0E1424] border border-white/10 space-y-2">
            <span className="font-black text-cyan-300 text-sm">01. Semakan Percuma</span>
            <p className="text-zinc-400 leading-relaxed">
              {language === "ms"
                ? "Hantar pautan dan huraian kerosakan untuk pemeriksaan awal tanpa sebarang caj."
                : "Send link and issue summary for initial inspection without any upfront fee."}
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-[#0E1424] border border-white/10 space-y-2">
            <span className="font-black text-cyan-300 text-sm">02. Sebut Harga Telus</span>
            <p className="text-zinc-400 leading-relaxed">
              {language === "ms"
                ? "Kami jelaskan punca kerosakan dan kos pembaikan yang tepat sebelum memulakan kerja."
                : "We clarify exact root cause and firm repair quote before commencing code edits."}
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-[#0E1424] border border-white/10 space-y-2">
            <span className="font-black text-cyan-300 text-sm">03. Ujian & Serahan</span>
            <p className="text-zinc-400 leading-relaxed">
              {language === "ms"
                ? "Ujian menyeluruh pada pelbagai peranti sebelum kerja disahkan selesai sepenuhnya."
                : "Rigorous responsive testing across devices before marking issue fully resolved."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
