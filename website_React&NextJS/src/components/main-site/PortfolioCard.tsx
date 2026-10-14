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
        return "bg-emerald-500/20 text-emerald-300 border-emerald-500/40 shadow-[0_0_12px_rgba(16,185,129,0.3)]";
      case "concept_demo":
        return "bg-cyan-500/20 text-cyan-300 border-cyan-500/40 shadow-[0_0_12px_rgba(6,182,212,0.3)]";
      case "project_preview":
        return "bg-purple-500/20 text-purple-300 border-purple-500/40 shadow-[0_0_12px_rgba(168,85,247,0.3)]";
      case "in_development":
        return "bg-amber-500/20 text-amber-300 border-amber-500/40 shadow-[0_0_12px_rgba(245,158,11,0.3)]";
      default:
        return "bg-white/10 text-zinc-300 border-white/20";
    }
  };

  return (
    <div
      onClick={() => onSelect(item)}
      className="ms-card overflow-hidden group cursor-pointer flex flex-col justify-between border border-white/10 hover:border-emerald-500/50 hover:shadow-[0_15px_40px_rgba(0,0,0,0.8),0_0_30px_rgba(16,185,129,0.15)] transition-all duration-300"
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
      <div className="relative w-full h-52 sm:h-56 bg-[#070A12] overflow-hidden border-b border-white/10">
        {item.thumbnail.startsWith("/") ? (
          <Image
            src={item.thumbnail}
            alt={item.title}
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            className="object-cover group-hover:scale-108 transition-transform duration-700"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-gradient-to-br from-[#0E1424] to-[#17251F]">
            <span className="text-3xl mb-1">🖼️</span>
            <span className="text-xs font-bold text-zinc-400">{item.title}</span>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-[#0E1424] via-transparent to-transparent opacity-60" />

        {/* Status Badge floating */}
        <div className="absolute top-3 left-3">
          <span
            className={`text-[10px] font-extrabold px-2.5 py-1 rounded-full border backdrop-blur-md ${getStatusBadgeStyle(
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
          <div className="flex items-center justify-between text-[11px] text-zinc-400 mb-1">
            <span className="font-bold uppercase tracking-wider text-emerald-400">
              {item.categoryLabel[language]}
            </span>
          </div>
          <h4 className="font-extrabold text-base text-white group-hover:text-cyan-300 transition-colors leading-tight">
            {item.title}
          </h4>
          <p className="text-xs text-zinc-400 mt-1.5 line-clamp-2 leading-relaxed">
            {item.shortDescription[language]}
          </p>
        </div>

        <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs">
          <span className="text-[11px] font-medium text-zinc-400">
            {item.tags[0]} &middot; {item.tags[1] || ""}
          </span>
          <span className="font-bold text-cyan-400 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
            <span>{language === "ms" ? "Perincian" : "Details"}</span>
            <span>→</span>
          </span>
        </div>
      </div>
    </div>
  );
}
