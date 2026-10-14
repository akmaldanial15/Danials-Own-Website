"use client";

import React, { useState, useEffect } from "react";
import { useMainSiteLanguage } from "@/context/MainSiteLanguageContext";
import { buildContactFormWhatsAppUrl, ContactBriefData } from "@/utils/mainSiteWhatsApp";
import { siteConfig } from "@/data/main-site/siteConfig";

interface ContactBriefFormProps {
  initialCategory?: string;
  initialPackage?: string;
  initialProjectRef?: string;
}

export default function ContactBriefForm({
  initialCategory = "website",
  initialPackage = "",
  initialProjectRef = "",
}: ContactBriefFormProps) {
  const { language, t } = useMainSiteLanguage();

  const [formData, setFormData] = useState<ContactBriefData>({
    name: "",
    bizName: "",
    category: initialCategory,
    packageTitle: initialPackage,
    description: initialProjectRef ? `Berminat dengan projek rujukan: ${initialProjectRef}` : "",
    budgetRange: "Belum pasti",
    intendedUse: "",
    websiteUrl: "",
  });

  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (initialCategory) setFormData((prev) => ({ ...prev, category: initialCategory }));
    if (initialPackage) setFormData((prev) => ({ ...prev, packageTitle: initialPackage }));
    if (initialProjectRef) {
      setFormData((prev) => ({
        ...prev,
        description: `Berminat dengan rujukan kerja: ${initialProjectRef}`,
      }));
    }
  }, [initialCategory, initialPackage, initialProjectRef]);

  const whatsappUrl = buildContactFormWhatsAppUrl(formData, language);

  const handleCopy = () => {
    const isMs = language === "ms";
    const text = isMs
      ? `Ringkasan Projek:
Kategori: ${formData.category}
Pakej: ${formData.packageTitle || "-"}
Nama: ${formData.name || "-"}
Bisnes: ${formData.bizName || "-"}
Bajet: ${formData.budgetRange || "Belum pasti"}
Keperluan: ${formData.description}`
      : `Project Brief:
Category: ${formData.category}
Package: ${formData.packageTitle || "-"}
Name: ${formData.name || "-"}
Business: ${formData.bizName || "-"}
Budget: ${formData.budgetRange || "Not sure"}
Requirements: ${formData.description}`;

    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const isFormValid = formData.category.trim() !== "" && formData.description.trim().length >= 5;

  return (
    <div className="ms-card p-6 sm:p-8 space-y-6 border border-white/10 bg-[#0E1424]/90 backdrop-blur-2xl shadow-2xl">
      <div className="space-y-1.5 border-b border-white/10 pb-5">
        <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
          {t("contactTitle")}
        </h3>
        <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
          {t("contactSubtitle")}
        </p>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (isFormValid) {
            window.open(whatsappUrl, "_blank", "noopener,noreferrer");
          }
        }}
        className="space-y-5"
      >
        {/* Name & Business */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-bold text-white block mb-1.5">
              {t("contactFormName")}
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder={language === "ms" ? "Contoh: Danial" : "E.g. Danial"}
              className="w-full p-3 rounded-xl border border-white/15 bg-white/5 text-white placeholder-zinc-500 text-xs font-medium focus:border-cyan-400 focus:outline-hidden transition-all"
            />
          </div>
          <div>
            <label className="text-xs font-bold text-white block mb-1.5">
              {t("contactFormBiz")}
            </label>
            <input
              type="text"
              value={formData.bizName}
              onChange={(e) => setFormData({ ...formData, bizName: e.target.value })}
              placeholder={language === "ms" ? "Contoh: Kedai Kopi Danial" : "E.g. Danial Coffee Bar"}
              className="w-full p-3 rounded-xl border border-white/15 bg-white/5 text-white placeholder-zinc-500 text-xs font-medium focus:border-cyan-400 focus:outline-hidden transition-all"
            />
          </div>
        </div>

        {/* Category & Budget */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-bold text-white block mb-1.5">
              {t("contactFormCategory")}
            </label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full p-3 rounded-xl border border-white/15 bg-[#0E1424] text-white text-xs font-semibold focus:border-cyan-400 focus:outline-hidden transition-all"
              required
            >
              <option value="website" className="bg-[#0E1424] text-white">{language === "ms" ? "Pembangunan Laman Web (dari RM79)" : "Website Development (from RM79)"}</option>
              <option value="design_express" className="bg-[#0E1424] text-white">Design Express (RM5/gambar)</option>
              <option value="design_custom" className="bg-[#0E1424] text-white">Design Custom (dari RM35)</option>
              <option value="repair" className="bg-[#0E1424] text-white">{language === "ms" ? "Baiki / Naik Taraf Website (dari RM29)" : "Website Repair (from RM29)"}</option>
              <option value="systems" className="bg-[#0E1424] text-white">{language === "ms" ? "Sistem Pangkalan Data & Android (dari RM499)" : "Systems & Android Sync (from RM499)"}</option>
              <option value="not_sure" className="bg-[#0E1424] text-white">{language === "ms" ? "Belum pasti / Khidmat Nasihat Percuma" : "Not sure / Free Consultation"}</option>
            </select>
          </div>

          <div>
            <label className="text-xs font-bold text-white block mb-1.5">
              {t("contactFormBudget")}
            </label>
            <select
              value={formData.budgetRange}
              onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
              className="w-full p-3 rounded-xl border border-white/15 bg-[#0E1424] text-white text-xs font-medium focus:border-cyan-400 focus:outline-hidden transition-all"
            >
              <option value="Belum pasti" className="bg-[#0E1424] text-white">{language === "ms" ? "Belum pasti / Mengikut cadangan" : "Not sure / Open to recommendations"}</option>
              <option value="Bawah RM100" className="bg-[#0E1424] text-white">Bawah RM100 (RM5 - RM79)</option>
              <option value="RM100 - RM399" className="bg-[#0E1424] text-white">RM100 - RM399</option>
              <option value="RM400 - RM999" className="bg-[#0E1424] text-white">RM400 - RM999</option>
              <option value="RM1,000+" className="bg-[#0E1424] text-white">RM1,000+</option>
            </select>
          </div>
        </div>

        {/* Conditional Intended Use for Design */}
        {(formData.category === "design_express" || formData.category === "design_custom") && (
          <div>
            <label className="text-xs font-bold text-white block mb-1.5">
              {language === "ms" ? "Format / Kegunaan (Contoh: Poster A4, Bunting 2x5, Label Botol, IG Post)" : "Format / Usage (E.g. A4 Poster, 2x5 Bunting, Bottle Label, IG Post)"}
            </label>
            <input
              type="text"
              value={formData.intendedUse}
              onChange={(e) => setFormData({ ...formData, intendedUse: e.target.value })}
              placeholder={language === "ms" ? "Contoh: Poster A4 untuk dipaparkan di kafe" : "E.g. A4 print poster for cafe counter"}
              className="w-full p-3 rounded-xl border border-white/15 bg-white/5 text-white placeholder-zinc-500 text-xs font-medium focus:border-cyan-400 focus:outline-hidden transition-all"
            />
          </div>
        )}

        {/* Existing Website URL if applicable */}
        {(formData.category === "repair" || formData.category === "website") && (
          <div>
            <label className="text-xs font-bold text-white block mb-1.5">
              {language === "ms" ? "Pautan Laman Web / Rujukan (Jika ada)" : "Website URL or Reference (If any)"}
            </label>
            <input
              type="url"
              value={formData.websiteUrl}
              onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
              placeholder="https://example.com"
              className="w-full p-3 rounded-xl border border-white/15 bg-white/5 text-white placeholder-zinc-500 text-xs font-medium focus:border-cyan-400 focus:outline-hidden transition-all"
            />
          </div>
        )}

        {/* Description / Brief */}
        <div>
          <label className="text-xs font-bold text-white block mb-1.5">
            {t("contactFormDesc")}
          </label>
          <textarea
            required
            rows={4}
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder={
              language === "ms"
                ? "Terangkan secara ringkas apa yang anda mahu buat, teks yang ada, atau isu yang perlu diselesaikan..."
                : "Briefly explain what you wish to create, supplied assets, or problem to solve..."
            }
            className="w-full p-3.5 rounded-xl border border-white/15 bg-white/5 text-white placeholder-zinc-500 text-xs leading-relaxed resize-none focus:border-cyan-400 focus:outline-hidden transition-all"
          />
        </div>

        {/* Informative Note */}
        <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-xs text-zinc-300 leading-relaxed">
          💡 {t("contactNote")}{" "}
          <span className="font-bold text-white">
            {language === "ms"
              ? "Anda juga boleh terus melampirkan gambar/dokumen dalam chat WhatsApp tersebut."
              : "You can also directly attach files and images inside the WhatsApp chat."}
          </span>
        </div>

        {/* Submit and Copy Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row gap-3">
          <button
            type="submit"
            disabled={!isFormValid}
            className="ms-btn-primary flex-1 py-4 text-xs font-black uppercase tracking-wider disabled:opacity-50 cursor-pointer shadow-lg"
          >
            {t("contactFormSubmit")} →
          </button>
          <button
            type="button"
            onClick={handleCopy}
            className="py-4 px-6 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-white text-xs font-bold transition-all cursor-pointer text-center"
          >
            {copied ? t("calcCopied") : t("calcCopyBtn")}
          </button>
        </div>
      </form>
    </div>
  );
}
