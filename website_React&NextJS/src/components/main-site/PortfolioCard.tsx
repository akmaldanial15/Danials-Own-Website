"use client";

import React from "react";
import Image from "next/image";
import { PortfolioItem } from "@/data/main-site/portfolio";
import { useMainSiteLanguage } from "@/context/MainSiteLanguageContext";

interface PortfolioCardProps {
  item: PortfolioItem;
  onSelect: (item: PortfolioItem) => void;
}

export default function PortfolioCard({ item, onSelect }: PortfolioCardProps) {
  const { language } = useMainSiteLanguage();

  const getStatusBadgeStyle = (status: PortfolioItem["projectStatus"]) => {
    switch (status) {
      case "client_work":
        return "bg-[#E6F4F1] text-[#087A68] border-[#C4E6DF]";
      case "concept_demo":
        return "bg-[#EEF2FF] text-[#2457E6] border-[#D5E0FF]";
      case "project_preview":
        return "bg-[#FAF5FF] text-[#9333ea] border-[#E9D5FF]";
      case "in_development":
        return "bg-[#FEF3C7] text-[#D97706] border-[#FDE68A]";
      default:
        return "bg-[#F0EFEA] text-[#52605A] border-[#DDE1DA]";
    }
  };

  return (
    <div
      onClick={() => onSelect(item)}
      className="ms-card overflow-hidden group cursor-pointer flex flex-col justify-between"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect(item);
        }
      }}
      aria-label={`Lihat perincian ${item.title}`}
    >
      {/* Thumbnail */}
      <div className="relative w-full h-48 sm:h-52 bg-[#FAF9F5] overflow-hidden border-b border-[#F0EFEA]">
        {item.thumbnail.startsWith("/") ? (
          <Image
            src={item.thumbnail}
            alt={item.title}
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            className="object-cover group-hover:scale-104 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-gradient-to-br from-[#FAF9F5] to-[#E8F0EB]">
            <span className="text-3xl mb-1">🖼️</span>
            <span className="text-xs font-bold text-[#52605A]">{item.title}</span>
          </div>
        )}

        {/* Status Badge floating */}
        <div className="absolute top-3 left-3">
          <span
            className={`text-[10px] font-bold px-2 py-0.5 rounded-full border shadow-xs backdrop-blur-md ${getStatusBadgeStyle(
              item.projectStatus
            )}`}
          >
            {item.statusLabel[language]}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
        <div>
          <div className="flex items-center justify-between text-[11px] text-[#52605A] mb-1">
            <span className="font-semibold uppercase tracking-wider text-[#087A68]">
              {item.categoryLabel[language]}
            </span>
          </div>
          <h4 className="font-extrabold text-base text-[#18201D] group-hover:text-[#2457E6] transition-colors leading-tight">
            {item.title}
          </h4>
          <p className="text-xs text-[#52605A] mt-1.5 line-clamp-2 leading-relaxed">
            {item.shortDescription[language]}
          </p>
        </div>

        <div className="pt-3 border-t border-[#F0EFEA] flex items-center justify-between text-xs">
          <span className="text-[11px] font-semibold text-[#52605A]">
            {item.tags[0]} &middot; {item.tags[1] || ""}
          </span>
          <span className="font-bold text-[#2457E6] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
            <span>{language === "ms" ? "Perincian" : "Details"}</span>
            <span>→</span>
          </span>
        </div>
      </div>
    </div>
  );
}
