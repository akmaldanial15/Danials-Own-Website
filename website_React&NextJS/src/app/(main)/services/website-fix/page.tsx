"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useMainSiteLanguage } from "@/context/MainSiteLanguageContext";
import { siteConfig } from "@/data/main-site/siteConfig";

interface IssueOption {
  id: string;
  icon: string;
  colorName: "cyan" | "rose" | "amber" | "purple" | "blue" | "emerald";
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
      icon: "📐",
      colorName: "cyan",
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
      icon: "🔘",
      colorName: "rose",
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
      icon: "🔒",
      colorName: "amber",
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
      icon: "⚡",
      colorName: "purple",
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
      icon: "🗄️",
      colorName: "blue",
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
      icon: "📝",
      colorName: "emerald",
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

  const getTheme = (colorName: IssueOption["colorName"], isSelected: boolean) => {
    switch (colorName) {
      case "cyan":
        return {
          card: isSelected
            ? "border-cyan-400 bg-gradient-to-br from-cyan-500/30 via-sky-950/50 to-[#0A0F1D] shadow-[0_0_35px_rgba(6,182,212,0.45)] ring-2 ring-cyan-400/50"
            : "border-cyan-500/30 bg-gradient-to-b from-cyan-950/25 to-[#0A0F1D]/80 hover:border-cyan-400/60 hover:bg-cyan-950/35 hover:shadow-[0_0_20px_rgba(6,182,212,0.25)]",
          iconBox: "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_12px_rgba(6,182,212,0.35)]",
          price: "text-cyan-300",
          topBar: "bg-cyan-400",
        };
      case "rose":
        return {
          card: isSelected
            ? "border-rose-400 bg-gradient-to-br from-rose-500/30 via-pink-950/50 to-[#0A0F1D] shadow-[0_0_35px_rgba(244,63,94,0.45)] ring-2 ring-rose-400/50"
            : "border-rose-500/30 bg-gradient-to-b from-rose-950/25 to-[#0A0F1D]/80 hover:border-rose-400/60 hover:bg-rose-950/35 hover:shadow-[0_0_20px_rgba(244,63,94,0.25)]",
          iconBox: "bg-rose-500/20 text-rose-300 border border-rose-500/40 shadow-[0_0_12px_rgba(244,63,94,0.35)]",
          price: "text-rose-300",
          topBar: "bg-rose-400",
        };
      case "amber":
        return {
          card: isSelected
            ? "border-amber-400 bg-gradient-to-br from-amber-500/30 via-orange-950/50 to-[#0A0F1D] shadow-[0_0_35px_rgba(245,158,11,0.45)] ring-2 ring-amber-400/50"
            : "border-amber-500/30 bg-gradient-to-b from-amber-950/25 to-[#0A0F1D]/80 hover:border-amber-400/60 hover:bg-amber-950/35 hover:shadow-[0_0_20px_rgba(245,158,11,0.25)]",
          iconBox: "bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-[0_0_12px_rgba(245,158,11,0.35)]",
          price: "text-amber-300",
          topBar: "bg-amber-400",
        };
      case "purple":
        return {
          card: isSelected
            ? "border-purple-400 bg-gradient-to-br from-purple-500/30 via-violet-950/50 to-[#0A0F1D] shadow-[0_0_35px_rgba(168,85,247,0.45)] ring-2 ring-purple-400/50"
            : "border-purple-500/30 bg-gradient-to-b from-purple-950/25 to-[#0A0F1D]/80 hover:border-purple-400/60 hover:bg-purple-950/35 hover:shadow-[0_0_20px_rgba(168,85,247,0.25)]",
          iconBox: "bg-purple-500/20 text-purple-300 border border-purple-500/40 shadow-[0_0_12px_rgba(168,85,247,0.35)]",
          price: "text-purple-300",
          topBar: "bg-purple-400",
        };
      case "blue":
        return {
          card: isSelected
            ? "border-blue-400 bg-gradient-to-br from-blue-500/30 via-indigo-950/50 to-[#0A0F1D] shadow-[0_0_35px_rgba(59,130,246,0.45)] ring-2 ring-blue-400/50"
            : "border-blue-500/30 bg-gradient-to-b from-blue-950/25 to-[#0A0F1D]/80 hover:border-blue-400/60 hover:bg-blue-950/35 hover:shadow-[0_0_20px_rgba(59,130,246,0.25)]",
          iconBox: "bg-blue-500/20 text-blue-300 border border-blue-500/40 shadow-[0_0_12px_rgba(59,130,246,0.35)]",
          price: "text-blue-300",
          topBar: "bg-blue-400",
        };
      case "emerald":
      default:
        return {
          card: isSelected
            ? "border-emerald-400 bg-gradient-to-br from-emerald-500/30 via-teal-950/50 to-[#0A0F1D] shadow-[0_0_35px_rgba(16,185,129,0.45)] ring-2 ring-emerald-400/50"
            : "border-emerald-500/30 bg-gradient-to-b from-emerald-950/25 to-[#0A0F1D]/80 hover:border-emerald-400/60 hover:bg-emerald-950/35 hover:shadow-[0_0_20px_rgba(16,185,129,0.25)]",
          iconBox: "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-[0_0_12px_rgba(16,185,129,0.35)]",
          price: "text-emerald-300",
          topBar: "bg-emerald-400",
        };
    }
  };

  const getPriceBadgeClass = (colorName: IssueOption["colorName"]) => {
    switch (colorName) {
      case "cyan":
        return "text-cyan-300";
      case "rose":
        return "text-rose-300";
      case "amber":
        return "text-amber-300";
      case "purple":
        return "text-purple-300";
      case "blue":
        return "text-blue-300";
      case "emerald":
      default:
        return "text-emerald-300";
    }
  };

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
    <div className="py-12 sm:py-20 space-y-16 sm:space-y-24 relative overflow-hidden">
      {/* Background Floating Aurora Orbs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-emerald-500/20 blur-[100px] pointer-events-none rounded-full -z-10 animate-pulse-glow" />
      <div className="absolute top-[45%] -right-20 w-[400px] h-[400px] bg-rose-500/15 blur-[120px] pointer-events-none rounded-full -z-10" />
      <div className="absolute top-[65%] -left-20 w-[400px] h-[400px] bg-amber-500/15 blur-[120px] pointer-events-none rounded-full -z-10" />

      {/* Header */}
      <div className="ms-container space-y-5 max-w-3xl mx-auto text-center relative z-10">
        <span className="ms-pill ms-pill-purple uppercase font-black tracking-widest text-xs px-4 py-1.5 shadow-[0_0_20px_rgba(168,85,247,0.35)]">
          {language === "ms" ? "🛠️ PEMBAIKAN & NAIK TARAF" : "🛠️ REPAIRS & UPGRADES"}
        </span>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
          {language === "ms" ? (
            <>
              Selesaikan Masalah{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-teal-200 to-emerald-400 bg-clip-text text-transparent">
                Laman Web Sedia Ada
              </span>{" "}
              Anda
            </>
          ) : (
            <>
              Fix & Upgrade Your{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-teal-200 to-emerald-400 bg-clip-text text-transparent">
                Existing Website
              </span>
            </>
          )}
        </h1>
        <p className="text-sm sm:text-lg text-zinc-300 leading-relaxed font-medium max-w-2xl mx-auto">
          {language === "ms"
            ? "Ada butang rosak, paparan mobile senget, atau amaran keselamatan SSL? Kami membantu memeriksa punca sebenar masalah dan membaiki kod dengan harga telus."
            : "Struggling with broken forms, mobile responsive glitches, or expired SSL warnings? We inspect the root cause and provide clear, honest repair estimates."}
        </p>

        {/* Colorful Feature Badges */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3 text-xs font-black">
          <span className="px-4 py-2 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.25)] flex items-center gap-1.5">
            <span>🔧</span> Pembaikan kecil dari RM29
          </span>
          <span className="px-4 py-2 rounded-full bg-purple-500/15 text-purple-300 border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.25)] flex items-center gap-1.5">
            <span>🔒</span> Setup Sijil SSL dari RM149
          </span>
          <span className="px-4 py-2 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.25)] flex items-center gap-1.5">
            <span>✓</span> Semakan telus tanpa diagnosis palsu
          </span>
        </div>
      </div>

      {/* Guided Problem Selector */}
      <div className="ms-container relative z-10">
        <div className="max-w-4xl mx-auto p-[1.5px] rounded-3xl bg-gradient-to-b from-cyan-500/40 via-purple-500/30 to-emerald-500/40 shadow-[0_15px_50px_rgba(6,182,212,0.2)]">
          <div className="p-6 sm:p-10 rounded-[22px] bg-[#0A0F1D]/95 backdrop-blur-2xl space-y-8">
            <div className="space-y-1.5 border-b border-white/10 pb-5">
              <span className="ms-pill ms-pill-rose uppercase font-black tracking-widest text-[10px]">
                {language === "ms" ? "PILIH MASALAH" : "SELECT PROBLEM"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-1">
                {language === "ms" ? (
                  <>
                    Apa yang berlaku pada{" "}
                    <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                      website anda?
                    </span>
                  </>
                ) : (
                  <>
                    What is happening to your{" "}
                    <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                      website?
                    </span>
                  </>
                )}
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400">
                {language === "ms"
                  ? "Pilih kategori untuk melihat anggaran awal kos dan panduan tindakan."
                  : "Select an issue category to view indicative cost estimates and next steps."}
              </p>
            </div>

            {/* Vibrant Issue Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {issueOptions.map((opt) => {
                const isSelected = selectedIssue === opt.id;
                const theme = getTheme(opt.colorName, isSelected);
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setSelectedIssue(opt.id)}
                    className={`p-4 sm:p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between relative overflow-hidden group ${theme.card}`}
                  >
                    <div
                      className={`absolute top-0 left-0 right-0 h-1.5 ${theme.topBar} ${
                        isSelected ? "opacity-100 shadow-[0_0_10px_currentColor]" : "opacity-40 group-hover:opacity-100"
                      } transition-all`}
                    />
                    <div>
                      <div className="flex items-center gap-3 mb-2.5">
                        <div
                          className={`w-9 h-9 rounded-xl flex items-center justify-center text-lg shrink-0 ${theme.iconBox} group-hover:scale-110 transition-transform`}
                        >
                          {opt.icon}
                        </div>
                        <span className="font-black text-xs sm:text-sm text-white group-hover:text-cyan-200 transition-colors leading-snug">
                          {opt.title[language]}
                        </span>
                      </div>
                      <p className="text-[11px] text-zinc-300 line-clamp-2 leading-relaxed">
                        {opt.desc[language]}
                      </p>
                    </div>
                    <div className="mt-3.5 pt-2.5 border-t border-white/10 flex items-center justify-between">
                      <span className="text-[10px] uppercase font-bold text-zinc-400">
                        {language === "ms" ? "Anggaran" : "Estimate"}
                      </span>
                      <span className={`text-xs font-black ${theme.price}`}>
                        {opt.est}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Diagnosis Form Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-white/10 via-[#0E1424] to-[#0A0F1D] border border-white/15 space-y-6 shadow-2xl relative overflow-hidden">
              <div
                className={`absolute top-0 left-0 right-0 h-1.5 ${
                  getTheme(currentOption.colorName, true).topBar
                } shadow-[0_0_15px_currentColor] transition-all`}
              />
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
                <div className="flex items-center gap-3.5">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl ${
                      getTheme(currentOption.colorName, true).iconBox
                    } shadow-lg`}
                  >
                    {currentOption.icon}
                  </div>
                  <div>
                    <span className="text-base font-black text-white block">
                      {currentOption.title[language]}
                    </span>
                    <span className="text-xs text-zinc-300 block mt-0.5">
                      {language === "ms" ? "Harga anggaran permulaan:" : "Starting indicative estimate:"}{" "}
                      <strong className={`font-black text-sm ${getTheme(currentOption.colorName, true).price}`}>
                        {currentOption.est}
                      </strong>
                    </span>
                  </div>
                </div>
                <span className={`ms-pill ms-pill-${currentOption.colorName} self-start sm:self-auto text-[11px] font-black uppercase tracking-wider`}>
                  {language === "ms" ? "Anggaran Selepas Semakan" : "Assessment Required"}
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
                    className="w-full p-3 rounded-xl border border-white/15 bg-white/5 text-white placeholder-zinc-500 text-xs focus:border-cyan-400 focus:outline-hidden transition-all"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-white block mb-1.5">
                    {language === "ms" ? "Keterangan Ringkas Isu" : "Brief Problem Description"}
                  </label>
                  <input
                    type="text"
                    placeholder={
                      language === "ms"
                        ? "Contoh: Gambar lari bila buka di iPhone"
                        : "E.g. Broken images on iPhone"
                    }
                    value={issueDetails}
                    onChange={(e) => setIssueDetails(e.target.value)}
                    className="w-full p-3 rounded-xl border border-white/15 bg-white/5 text-white placeholder-zinc-500 text-xs focus:border-cyan-400 focus:outline-hidden transition-all"
                  />
                </div>
              </div>

              {/* Truthful Disclaimer */}
              <p className="text-[11px] text-zinc-400 italic">
                ℹ️{" "}
                {language === "ms"
                  ? "Peringatan jujur: Pemilih masalah ini adalah panduan awal, bukan imbasan automatik pelayan. Sebut harga sebenar disahkan selepas kod atau konfigurasi laman web diperiksa secara manual."
                  : "Honest note: This problem selector serves as an indicative guide, not an automated server scan. Firm quotes are confirmed upon direct manual inspection of the codebase or host."}
              </p>

              {/* Action - Rainbow Gradient Button */}
              <div className="pt-2">
                <a
                  href={buildWhatsAppRepairUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ms-btn-rainbow w-full py-4 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>
                    {language === "ms"
                      ? "Sediakan Mesej WhatsApp untuk Isu Ini"
                      : "Prepare WhatsApp Repair Message"}
                  </span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Colorful Process Note Cards */}
      <div className="ms-container max-w-4xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="p-5 rounded-2xl bg-gradient-to-b from-cyan-500/15 via-[#0E1424] to-[#0E1424] border border-cyan-500/30 space-y-2 shadow-[0_0_20px_rgba(6,182,212,0.15)]">
            <span className="font-black text-cyan-300 text-sm flex items-center gap-1.5">
              <span>01.</span> Semakan Percuma
            </span>
            <p className="text-zinc-300 leading-relaxed">
              {language === "ms"
                ? "Hantar pautan dan huraian kerosakan untuk pemeriksaan awal tanpa sebarang caj."
                : "Send link and issue summary for initial inspection without any upfront fee."}
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-gradient-to-b from-amber-500/15 via-[#0E1424] to-[#0E1424] border border-amber-500/30 space-y-2 shadow-[0_0_20px_rgba(245,158,11,0.15)]">
            <span className="font-black text-amber-300 text-sm flex items-center gap-1.5">
              <span>02.</span> Sebut Harga Telus
            </span>
            <p className="text-zinc-300 leading-relaxed">
              {language === "ms"
                ? "Kami jelaskan punca kerosakan dan kos pembaikan yang tepat sebelum memulakan kerja."
                : "We clarify exact root cause and firm repair quote before commencing code edits."}
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-gradient-to-b from-emerald-500/15 via-[#0E1424] to-[#0E1424] border border-emerald-500/30 space-y-2 shadow-[0_0_20px_rgba(16,185,129,0.15)]">
            <span className="font-black text-emerald-300 text-sm flex items-center gap-1.5">
              <span>03.</span> Ujian & Serahan
            </span>
            <p className="text-zinc-300 leading-relaxed">
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
