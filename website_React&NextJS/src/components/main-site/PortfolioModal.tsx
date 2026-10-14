"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { PortfolioItem } from "@/data/main-site/portfolio";
import { useMainSiteLanguage } from "@/context/MainSiteLanguageContext";

interface PortfolioModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
}

export default function PortfolioModal({ item, onClose }: PortfolioModalProps) {
  const { language } = useMainSiteLanguage();
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (item) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  const enquiryUrl = item.relatedServiceId
    ? `/contact?category=${item.category}&package=${item.relatedServiceId}&projectRef=${encodeURIComponent(item.title)}`
    : `/contact?category=${item.category}&projectRef=${encodeURIComponent(item.title)}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#18201D]/75 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="portfolio-modal-title"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#FFFFFF] rounded-2xl border border-[#DDE1DA] shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#F0EFEA] hover:bg-[#DDE1DA] text-[#18201D] transition-colors focus:outline-hidden cursor-pointer"
          aria-label="Tutup Paparan"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Modal Content */}
        <div className="space-y-6">
          {/* Header */}
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="ms-pill ms-pill-neutral">
                {item.categoryLabel[language]}
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#E6F4F1] text-[#087A68] border border-[#C4E6DF]">
                {item.statusLabel[language]}
              </span>
            </div>
            <h3 id="portfolio-modal-title" className="text-2xl sm:text-3xl font-extrabold text-[#18201D] tracking-tight">
              {item.title}
            </h3>
            <p className="text-sm font-semibold text-[#52605A] mt-1">
              {item.shortDescription[language]}
            </p>
          </div>

          {/* Visual Showcase Thumbnail */}
          <div className="relative w-full h-64 sm:h-80 rounded-xl overflow-hidden bg-[#FAF9F5] border border-[#DDE1DA] flex items-center justify-center">
            {item.thumbnail.startsWith("/") ? (
              <Image
                src={item.thumbnail}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 640px"
                className="object-cover"
              />
            ) : (
              <div className="text-center p-6 space-y-2">
                <span className="text-2xl">🎨</span>
                <p className="text-xs font-bold text-[#52605A]">{item.title}</p>
                <span className="text-[10px] text-[#A3B1AB]">Visual Mockup Concept</span>
              </div>
            )}
          </div>

          {/* Full Description & Contribution */}
          <div className="space-y-4 text-xs sm:text-sm text-[#52605A] leading-relaxed">
            <p>{item.fullDescription[language]}</p>

            <div className="p-3.5 rounded-xl bg-[#FAF9F5] border border-[#EBEFE8] space-y-1.5">
              <strong className="text-xs font-bold text-[#18201D] block">
                {language === "ms" ? "Sumbangan & Peranan Danial:" : "Danial's Role & Contribution:"}
              </strong>
              <p className="text-xs text-[#52605A] leading-relaxed">
                {item.contribution[language]}
              </p>
            </div>

            {/* Specifications if present */}
            {item.specifications && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
                <div className="p-2.5 rounded-lg border border-[#F0EFEA] bg-[#FFFFFF]">
                  <span className="text-[10px] uppercase font-bold text-[#A3B1AB] block">
                    {language === "ms" ? "Format" : "Format"}
                  </span>
                  <span className="font-semibold text-[#18201D]">{item.specifications.format}</span>
                </div>
                <div className="p-2.5 rounded-lg border border-[#F0EFEA] bg-[#FFFFFF]">
                  <span className="text-[10px] uppercase font-bold text-[#A3B1AB] block">
                    {language === "ms" ? "Penyerahan" : "Deliverables"}
                  </span>
                  <span className="font-semibold text-[#18201D]">{item.specifications.deliverables}</span>
                </div>
                <div className="p-2.5 rounded-lg border border-[#F0EFEA] bg-[#FFFFFF]">
                  <span className="text-[10px] uppercase font-bold text-[#A3B1AB] block">
                    {language === "ms" ? "Status Skop" : "Scope Status"}
                  </span>
                  <span className="font-semibold text-[#087A68]">{item.specifications.scope}</span>
                </div>
              </div>
            )}
          </div>

          {/* Footer CTAs: Live Demo (if available) + Nak hasil seperti ini? */}
          <div className="pt-4 border-t border-[#F0EFEA] flex flex-col sm:flex-row items-center justify-between gap-3">
            {item.demoUrl ? (
              <a
                href={item.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ms-btn-secondary text-xs py-2.5 px-4 rounded-xl w-full sm:w-auto text-center"
              >
                <span>{language === "ms" ? "Buka Demo Langsung ↗" : "Launch Live Demo ↗"}</span>
              </a>
            ) : (
              <span className="text-xs text-[#A3B1AB] italic">
                {language === "ms" ? "Pratonton grafik digital" : "Digital artwork preview"}
              </span>
            )}

            <Link
              href={enquiryUrl}
              onClick={onClose}
              className="ms-btn-primary text-xs py-2.5 px-5 rounded-xl w-full sm:w-auto text-center font-bold"
            >
              {language === "ms" ? "Nak hasil seperti ini? →" : "Want something like this? →"}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
