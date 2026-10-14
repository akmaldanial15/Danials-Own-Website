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
        return "bg-emerald-500/20 text-emerald-300 border-emerald-500/40 shadow-[0_0_10px_rgba(16,185,129,0.3)]";
      case "provisional":
        return "bg-white/10 text-zinc-300 border-white/15";
      case "quote_required":
        return "bg-cyan-500/20 text-cyan-300 border-cyan-500/40 shadow-[0_0_10px_rgba(6,182,212,0.3)]";
      default:
        return "bg-white/10 text-zinc-300 border-white/15";
    }
  };

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
      className={`ms-card p-6 sm:p-7 flex flex-col justify-between relative transition-all duration-300 ${
        featured
          ? "border-2 border-cyan-400 shadow-[0_15px_40px_rgba(0,0,0,0.8),0_0_30px_rgba(6,182,212,0.3)] ring-2 ring-cyan-400/20"
          : "hover:border-emerald-500/40 hover:shadow-[0_15px_40px_rgba(0,0,0,0.8),0_0_25px_rgba(16,185,129,0.15)]"
      }`}
    >
      {featured && (
        <div className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 text-black text-[10px] font-black tracking-wider uppercase shadow-lg">
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
            <p className="text-xs text-zinc-400 mt-1 line-clamp-2">
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
            <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">
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
          <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">
            {language === "ms" ? "Apa yang termasuk:" : "What's included:"}
          </div>
          <ul className="space-y-1.5 text-xs text-zinc-300">
            {item.includedItems[language].map((inc, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold shrink-0 mt-0.5">✓</span>
                <span className="leading-snug">{inc}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Scope Boundary / Exclusions note */}
        <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-[11px] text-zinc-400 leading-relaxed">
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
          className={`w-full py-3 px-4 rounded-xl text-xs font-extrabold flex items-center justify-center gap-1.5 transition-all ${
            featured
              ? "ms-btn-primary"
              : "ms-btn-secondary"
          }`}
        >
          <span>{actionText}</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
