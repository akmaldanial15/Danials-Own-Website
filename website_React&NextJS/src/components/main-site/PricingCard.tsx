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
        return "bg-[#E6F4F1] text-[#087A68] border-[#C4E6DF]";
      case "provisional":
        return "bg-[#F0EFEA] text-[#43504B] border-[#DDE1DA]";
      case "quote_required":
        return "bg-[#EEF2FF] text-[#2457E6] border-[#D5E0FF]";
      default:
        return "bg-[#F0EFEA] text-[#52605A] border-[#DDE1DA]";
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
      className={`ms-card p-6 sm:p-7 flex flex-col justify-between relative transition-all ${
        featured
          ? "border-2 border-[#2457E6] shadow-md ring-4 ring-[#2457E6]/5"
          : "hover:border-[#cbd3c7]"
      }`}
    >
      {featured && (
        <div className="absolute -top-3 left-6 px-2.5 py-0.5 rounded-full bg-[#2457E6] text-white text-[10px] font-extrabold tracking-wide uppercase shadow-xs">
          {language === "ms" ? "Cadangan Bisnes Kecil" : "Recommended for Small Biz"}
        </div>
      )}

      <div className="space-y-4">
        {/* Header: Title & Status Badge */}
        <div className="flex items-start justify-between gap-3 pt-1">
          <div>
            <h3 className="text-xl font-extrabold text-[#18201D] tracking-tight">
              {item.title[language]}
            </h3>
            <p className="text-xs text-[#52605A] mt-1 line-clamp-2">
              {item.subtitle[language]}
            </p>
          </div>
          <span
            className={`text-[10px] font-bold px-2 py-0.5 rounded-md border shrink-0 ${getStatusBadgeClass(
              item.priceStatus
            )}`}
          >
            {item.statusBadge[language]}
          </span>
        </div>

        {/* Price Block */}
        <div className="pt-2 pb-3 border-b border-[#F0EFEA]">
          <div className="flex items-baseline gap-1.5">
            {item.priceType === "starting_from" && (
              <span className="text-xs text-[#52605A] font-medium">
                {language === "ms" ? "dari" : "from"}
              </span>
            )}
            <span className="text-3xl font-extrabold text-[#18201D] tracking-tight">
              {item.currency}{item.price}
            </span>
            <span className="text-xs text-[#52605A] font-medium">
              {item.priceUnit[language]}
            </span>
          </div>
          <p className="text-[11px] text-[#52605A] mt-1.5 leading-snug">
            {item.suitableFor[language]}
          </p>
        </div>

        {/* Inclusions */}
        <div className="space-y-2 pt-1">
          <div className="text-[11px] font-bold uppercase tracking-wider text-[#18201D]">
            {language === "ms" ? "Skop Termasuk:" : "What's Included:"}
          </div>
          <ul className="space-y-1.5 text-xs text-[#52605A]">
            {item.includedItems[language].map((inc, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-[#087A68] font-bold shrink-0 mt-0.5">✓</span>
                <span className="leading-snug">{inc}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Revision Allowance */}
        <div className="pt-3 border-t border-[#F0EFEA] flex items-center gap-2 text-xs">
          <svg className="w-4 h-4 text-[#2457E6] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          <span className="font-semibold text-[#18201D]">
            {item.revisionRounds[language]}
          </span>
        </div>

        {/* Scope Boundary */}
        <div className="p-3 rounded-lg bg-[#FAF9F5] border border-[#EBEFE8] text-[11px] text-[#52605A] leading-relaxed">
          <strong className="text-[#18201D] block mb-0.5">
            {language === "ms" ? "Had Sempadan Skop:" : "Scope Boundary:"}
          </strong>
          {item.scopeBoundary[language]}
        </div>
      </div>

      {/* Action Button */}
      <div className="pt-5 mt-4 border-t border-[#F0EFEA]">
        <Link
          href={actionHref}
          className={`w-full text-center text-xs py-3 rounded-xl font-bold transition-all block ${
            featured
              ? "ms-btn-primary"
              : "ms-btn-secondary"
          }`}
        >
          {actionText} →
        </Link>
      </div>
    </div>
  );
}
