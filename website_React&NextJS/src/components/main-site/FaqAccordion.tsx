"use client";

import React, { useState } from "react";
import { faqList, FaqItem } from "@/data/main-site/faq";
import { useMainSiteLanguage } from "@/context/MainSiteLanguageContext";

interface FaqAccordionProps {
  filterCategory?: FaqItem["category"];
  limit?: number;
}

export default function FaqAccordion({ filterCategory, limit }: FaqAccordionProps) {
  const { language } = useMainSiteLanguage();
  const [openId, setOpenId] = useState<string | null>(null);

  const filtered = filterCategory
    ? faqList.filter((item) => item.category === filterCategory || item.category === "general" || item.category === "all")
    : faqList;

  const displayed = limit ? filtered.slice(0, limit) : filtered;

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-3">
      {displayed.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className="ms-card overflow-hidden transition-colors"
          >
            <button
              type="button"
              onClick={() => toggleItem(item.id)}
              className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 focus:outline-hidden cursor-pointer"
              aria-expanded={isOpen}
            >
              <span className="font-extrabold text-sm sm:text-base text-[#18201D] leading-snug">
                {item.question[language]}
              </span>
              <span
                className={`w-6 h-6 rounded-full bg-[#FAF9F5] border border-[#DDE1DA] flex items-center justify-center shrink-0 transition-transform duration-200 text-xs font-bold text-[#52605A] ${
                  isOpen ? "rotate-180 bg-[#EEF2FF] text-[#2457E6] border-[#D5E0FF]" : ""
                }`}
              >
                ▼
              </span>
            </button>

            {isOpen && (
              <div className="px-4 sm:px-5 pb-5 pt-1 border-t border-[#F0EFEA] text-xs sm:text-sm text-[#52605A] leading-relaxed animate-fadeIn">
                <p>{item.answer[language]}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
