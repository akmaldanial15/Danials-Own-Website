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
    <div className="ms-card p-6 sm:p-8 space-y-6">
      <div className="space-y-1 border-b border-[#F0EFEA] pb-4">
        <h3 className="text-xl sm:text-2xl font-extrabold text-[#18201D] tracking-tight">
          {t("contactTitle")}
        </h3>
        <p className="text-xs text-[#52605A] leading-relaxed">
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
        className="space-y-4"
      >
        {/* Name & Business */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-bold text-[#18201D] block mb-1">
              {t("contactFormName")}
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder={language === "ms" ? "Contoh: Danial" : "E.g. Danial"}
              className="w-full p-2.5 rounded-lg border border-[#DDE1DA] bg-white text-xs"
            />
          </div>
          <div>
            <label className="text-xs font-bold text-[#18201D] block mb-1">
              {t("contactFormBiz")}
            </label>
            <input
              type="text"
              value={formData.bizName}
              onChange={(e) => setFormData({ ...formData, bizName: e.target.value })}
              placeholder={language === "ms" ? "Contoh: Kedai Kopi Danial" : "E.g. Danial Coffee Bar"}
              className="w-full p-2.5 rounded-lg border border-[#DDE1DA] bg-white text-xs"
            />
          </div>
        </div>

        {/* Category & Budget */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-bold text-[#18201D] block mb-1">
              {t("contactFormCategory")}
            </label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full p-2.5 rounded-lg border border-[#DDE1DA] bg-white text-xs font-semibold"
              required
            >
              <option value="website">{language === "ms" ? "Pembangunan Laman Web (dari RM79)" : "Website Development (from RM79)"}</option>
              <option value="design_express">Design Express (RM5/gambar)</option>
              <option value="design_custom">Design Custom (dari RM35)</option>
              <option value="repair">{language === "ms" ? "Baiki / Naik Taraf Website (dari RM29)" : "Website Repair (from RM29)"}</option>
              <option value="systems">{language === "ms" ? "Sistem Pangkalan Data & Android (dari RM499)" : "Systems & Android Sync (from RM499)"}</option>
              <option value="not_sure">{language === "ms" ? "Belum pasti / Khidmat Nasihat Percuma" : "Not sure / Free Consultation"}</option>
            </select>
          </div>

          <div>
            <label className="text-xs font-bold text-[#18201D] block mb-1">
              {t("contactFormBudget")}
            </label>
            <select
              value={formData.budgetRange}
              onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
              className="w-full p-2.5 rounded-lg border border-[#DDE1DA] bg-white text-xs font-medium"
            >
              <option value="Belum pasti">{language === "ms" ? "Belum pasti / Mengikut cadangan" : "Not sure / Open to recommendations"}</option>
              <option value="Bawah RM100">Bawah RM100 (RM5 - RM79)</option>
              <option value="RM100 - RM399">RM100 - RM399</option>
              <option value="RM400 - RM999">RM400 - RM999</option>
              <option value="RM1,000+">RM1,000+</option>
            </select>
          </div>
        </div>

        {/* Conditional Intended Use for Design */}
        {(formData.category === "design_express" || formData.category === "design_custom") && (
          <div>
            <label className="text-xs font-bold text-[#18201D] block mb-1">
              {language === "ms" ? "Format / Kegunaan (Contoh: Poster A4, Bunting 2x5, Label Botol, IG Post)" : "Format / Usage (E.g. A4 Poster, 2x5 Bunting, Bottle Label, IG Post)"}
            </label>
            <input
              type="text"
              value={formData.intendedUse}
              onChange={(e) => setFormData({ ...formData, intendedUse: e.target.value })}
              placeholder={language === "ms" ? "Contoh: Poster A4 untuk dipaparkan di kafe" : "E.g. A4 print poster for cafe counter"}
              className="w-full p-2.5 rounded-lg border border-[#DDE1DA] bg-white text-xs"
            />
          </div>
        )}

        {/* Existing Website URL if applicable */}
        {(formData.category === "repair" || formData.category === "website") && (
          <div>
            <label className="text-xs font-bold text-[#18201D] block mb-1">
              {language === "ms" ? "Pautan Laman Web / Rujukan (Jika ada)" : "Website URL or Reference (If any)"}
            </label>
            <input
              type="url"
              value={formData.websiteUrl}
              onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
              placeholder="https://example.com"
              className="w-full p-2.5 rounded-lg border border-[#DDE1DA] bg-white text-xs"
            />
          </div>
        )}

        {/* Description / Brief */}
        <div>
          <label className="text-xs font-bold text-[#18201D] block mb-1">
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
            className="w-full p-3 rounded-xl border border-[#DDE1DA] bg-white text-xs leading-relaxed resize-none"
          />
        </div>

        {/* Informative Note */}
        <div className="p-3.5 rounded-xl bg-[#FAF9F5] border border-[#EBEFE8] text-[11px] text-[#52605A] leading-relaxed">
          💡 {t("contactNote")}{" "}
          <span className="font-semibold text-[#18201D]">
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
            className="ms-btn-primary flex-1 py-3.5 text-xs font-bold disabled:opacity-50 cursor-pointer"
          >
            {t("contactFormSubmit")} →
          </button>
          <button
            type="button"
            onClick={handleCopy}
            className="ms-btn-secondary py-3.5 px-5 text-xs font-semibold cursor-pointer"
          >
            {copied ? t("calcCopied") : t("calcCopyBtn")}
          </button>
        </div>
      </form>
    </div>
  );
}
