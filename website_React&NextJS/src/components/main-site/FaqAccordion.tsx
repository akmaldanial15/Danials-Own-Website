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
            className={`ms-card overflow-hidden transition-all duration-200 ${
              isOpen ? "border-cyan-500/40 shadow-[0_10px_30px_rgba(0,0,0,0.6),0_0_20px_rgba(6,182,212,0.15)]" : "border-white/10"
            }`}
          >
            <button
              type="button"
              onClick={() => toggleItem(item.id)}
              className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 focus:outline-hidden cursor-pointer"
              aria-expanded={isOpen}
            >
              <span className={`font-extrabold text-sm sm:text-base leading-snug transition-colors ${
                isOpen ? "text-cyan-300" : "text-white hover:text-cyan-300"
              }`}>
                {item.question[language]}
              </span>
              <span
                className={`w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 transition-all duration-300 text-xs font-bold ${
                  isOpen ? "rotate-180 bg-cyan-500/20 text-cyan-300 border-cyan-500/40" : "text-zinc-400"
                }`}
              >
                ▼
              </span>
            </button>

            {isOpen && (
              <div className="px-4 sm:px-5 pb-5 pt-1 border-t border-white/5 text-xs sm:text-sm text-zinc-300 leading-relaxed animate-fadeIn">
                <p>{item.answer[language]}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
