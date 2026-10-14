"use client";

import React from "react";
import Link from "next/link";
import { PackageItem } from "@/data/main-site/packages";
import { useMainSiteLanguage } from "@/context/MainSiteLanguageContext";

interface PricingCardProps {
  item: PackageItem;
  featured?: boolean;
}

export default function PricingCard({ item, featured = false }: PricingCardProps) {
  const { language } = useMainSiteLanguage();

  const getStatusBadgeClass = (status: PackageItem["priceStatus"]) => {
    switch (status) {
      case "owner_anchor":
        return "bg-emerald-500/20 text-emerald-300 border-emerald-500/40 shadow-[0_0_12px_rgba(16,185,129,0.3)]";
      case "provisional":
        return "bg-purple-500/15 text-purple-300 border-purple-500/30";
      case "quote_required":
        return "bg-cyan-500/20 text-cyan-300 border-cyan-500/40 shadow-[0_0_12px_rgba(6,182,212,0.3)]";
      default:
        return "bg-white/10 text-zinc-300 border-white/15";
    }
  };

  const getCategoryAccent = () => {
    switch (item.category) {
      case "design_express":
        return {
          priceGradient: "from-amber-300 via-yellow-200 to-orange-400",
          checkColor: "text-amber-400",
          badgeColor: "text-amber-400",
          topBar: "bg-gradient-to-r from-amber-400 to-orange-500",
          bgGradient: "bg-gradient-to-b from-amber-500/15 via-[#0E1424] to-[#0A0F1D]",
          border: "border-amber-500/30",
          hoverBorder: "hover:border-amber-400 hover:shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_35px_rgba(245,158,11,0.35)]",
          btnClass: "ms-btn-sunset",
        };
      case "design_custom":
        return {
          priceGradient: "from-purple-300 via-pink-300 to-cyan-300",
          checkColor: "text-purple-400",
          badgeColor: "text-purple-400",
          topBar: "bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400",
          bgGradient: "bg-gradient-to-b from-purple-500/15 via-[#0E1424] to-[#0A0F1D]",
          border: "border-purple-500/30",
          hoverBorder: "hover:border-purple-400 hover:shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_35px_rgba(168,85,247,0.35)]",
          btnClass: "ms-btn-rainbow",
        };
      case "systems":
        return {
          priceGradient: "from-blue-300 via-indigo-300 to-cyan-300",
          checkColor: "text-indigo-400",
          badgeColor: "text-indigo-400",
          topBar: "bg-gradient-to-r from-blue-400 to-indigo-500",
          bgGradient: "bg-gradient-to-b from-blue-500/15 via-[#0E1424] to-[#0A0F1D]",
          border: "border-blue-500/30",
          hoverBorder: "hover:border-blue-400 hover:shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_35px_rgba(59,130,246,0.35)]",
          btnClass: "ms-btn-primary",
        };
      case "repair":
        return {
          priceGradient: "from-emerald-300 via-teal-200 to-cyan-400",
          checkColor: "text-emerald-400",
          badgeColor: "text-emerald-400",
          topBar: "bg-gradient-to-r from-emerald-400 to-teal-500",
          bgGradient: "bg-gradient-to-b from-emerald-500/15 via-[#0E1424] to-[#0A0F1D]",
          border: "border-emerald-500/30",
          hoverBorder: "hover:border-emerald-400 hover:shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_35px_rgba(16,185,129,0.35)]",
          btnClass: "ms-btn-primary",
        };
      case "website":
      default:
        return {
          priceGradient: "from-cyan-300 via-teal-200 to-emerald-400",
          checkColor: "text-cyan-400",
          badgeColor: "text-cyan-400",
          topBar: "bg-gradient-to-r from-cyan-400 to-emerald-500",
          bgGradient: "bg-gradient-to-b from-cyan-500/15 via-[#0E1424] to-[#0A0F1D]",
          border: "border-cyan-500/30",
          hoverBorder: "hover:border-cyan-400 hover:shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_35px_rgba(6,182,212,0.35)]",
          btnClass: "ms-btn-primary",
        };
    }
  };

  const accent = getCategoryAccent();

  const actionHref =
    item.category === "design_express" || item.category === "website"
      ? `/calculator?category=${item.category}&package=${item.id}`
      : `/contact?category=${item.category}&package=${item.id}`;

  const actionText =
    item.enquiryMode === "direct"
      ? (language === "ms" ? "Pilih Pakej Ini" : "Select Package")
      : (language === "ms" ? "Bincang Skop Projek" : "Discuss Scope");

  return (
    <div
      className={`ms-card p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden transition-all duration-300 ${
        featured
          ? "border-2 border-cyan-400 bg-gradient-to-b from-cyan-500/25 via-[#0E1424] to-[#0A0F1D] shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_40px_rgba(6,182,212,0.45)] ring-2 ring-cyan-400/40"
          : `${accent.border} ${accent.bgGradient} ${accent.hoverBorder}`
      }`}
    >
      <div
        className={`absolute top-0 left-0 right-0 h-1.5 ${accent.topBar} ${
          featured ? "opacity-100 shadow-[0_0_12px_currentColor]" : "opacity-60"
        } transition-opacity`}
      />
      {featured && (
        <div className="absolute -top-3 left-6 px-3.5 py-1 rounded-full bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 text-black text-[10px] font-black tracking-wider uppercase shadow-lg">
          {language === "ms" ? "★ Cadangan Bisnes Kecil" : "★ Recommended for Small Biz"}
        </div>
      )}

      <div className="space-y-4">
        {/* Header: Title & Status Badge */}
        <div className="flex items-start justify-between gap-3 pt-1">
          <div>
            <h3 className="text-xl font-black text-white tracking-tight">
              {item.title[language]}
            </h3>
            <p className="text-xs text-zinc-300 mt-1 line-clamp-2 leading-relaxed">
              {item.subtitle[language]}
            </p>
          </div>
          <span
            className={`text-[10px] font-extrabold px-2.5 py-1 rounded-full border shrink-0 ${getStatusBadgeClass(
              item.priceStatus
            )}`}
          >
            {item.statusBadge[language]}
          </span>
        </div>

        {/* Price display */}
        <div className="pt-2 pb-2 border-y border-white/10">
          <div className="flex items-baseline gap-1.5">
            <span className="text-xs font-bold text-zinc-400">
              {item.priceType === "starting_from" ? (language === "ms" ? "Dari" : "From") : ""}
            </span>
            <span className={`text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r ${accent.priceGradient} tracking-tight`}>
              RM{item.price}
            </span>
            <span className="text-xs font-semibold text-zinc-400">
              {item.priceUnit[language]}
            </span>
          </div>
          <p className="text-[11px] text-zinc-400 mt-1">
            {item.revisionRounds[language]}
          </p>
        </div>

        {/* Inclusions */}
        <div className="space-y-2 pt-1">
          <div className={`text-[11px] font-black uppercase tracking-wider ${accent.badgeColor}`}>
            {language === "ms" ? "Apa yang termasuk:" : "What's included:"}
          </div>
          <ul className="space-y-1.5 text-xs text-zinc-200">
            {item.includedItems[language].map((inc, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className={`${accent.checkColor} font-black shrink-0 mt-0.5`}>✓</span>
                <span className="leading-snug">{inc}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Scope Boundary / Exclusions note */}
        <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-[11px] text-zinc-300 leading-relaxed">
          <span className="font-bold text-white block mb-0.5">
            {language === "ms" ? "Sempadan Skop:" : "Scope Boundary:"}
          </span>
          {item.scopeBoundary[language]}
        </div>
      </div>

      {/* Action */}
      <div className="pt-6 mt-4 border-t border-white/10">
        <Link
          href={actionHref}
          className={`w-full py-3.5 px-4 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-md ${
            featured ? "ms-btn-primary" : accent.btnClass
          }`}
        >
          <span>{actionText}</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
