"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useMainSiteLanguage } from "@/context/MainSiteLanguageContext";

export default function DesignPathwayComparison() {
  const { language } = useMainSiteLanguage();
  const [showFullTable, setShowFullTable] = useState(false);

  const criteria = [
    {
      criterion: { ms: "Permintaan Sesuai", en: "Suitable Requests" },
      express: {
        ms: "Tukar teks/harga pada poster sedia ada, buang latar belakang (cutout), ubah saiz imej, tukar warna mudah, masukkan logo/QR.",
        en: "Text/price swaps on existing artwork, background cutouts, reformatting, recolouring elements, inserting logo/QR.",
      },
      custom: {
        ms: "Poster promosi tersusun dari sifar, menu kafe/kedai, banner & bunting, identiti logo permulaan, pelekat & label bungkusan.",
        en: "Bespoke promotional posters from scratch, cafe menus, storefront buntings, starter brand marks, product labels & packaging.",
      },
    },
    {
      criterion: { ms: "Tahap Penyesuaian", en: "Customisation Level" },
      express: {
        ms: "Tertumpu pada skop sempit & pantas menggunakan bahan sedia ada.",
        en: "Focused on narrow, rapid edits utilizing client-supplied materials.",
      },
      custom: {
        ms: "Gubahan teliti dari sifar mengikut identiti visual jenama anda.",
        en: "Bespoke design from scratch aligning with your unique brand identity.",
      },
    },
    {
      criterion: { ms: "Peruntukan Suntingan", en: "Revision Allowance" },
      express: {
        ms: "2 pusingan suntingan kecil dalam skop asal.",
        en: "2 minor revision rounds within original brief.",
      },
      custom: {
        ms: "3 pusingan semakan berperingkat sebelum penyerahan.",
        en: "3 structured refinement milestones before hand-off.",
      },
    },
    {
      criterion: { ms: "Fail Diserahkan", en: "Delivered Files" },
      express: {
        ms: "Fail digital resolusi tinggi sedia guna (PNG atau JPG).",
        en: "High-resolution ready-to-use digital formats (PNG or JPG).",
      },
      custom: {
        ms: "PNG, JPG & PDF berkualiti tinggi (beserta spesifikasi cetak).",
        en: "PNG, JPG & high-res PDF (with print specifications when agreed).",
      },
    },
    {
      criterion: { ms: "Fail Sumber Editable", en: "Editable Source Files" },
      express: {
        ms: "Tidak disertakan (hanya fail output akhir).",
        en: "Not included (flattened final outputs only).",
      },
      custom: {
        ms: "Boleh dibincangkan & disahkan dalam sebut harga mengikut keperluan.",
        en: "Available upon confirmation in preliminary quotation.",
      },
    },
    {
      criterion: { ms: "Ilustrasi / Vektor Rumit", en: "Complex Vector Artwork" },
      express: {
        ms: "Tidak merangkumi lukisan vektor terperinci.",
        en: "Excludes complex manual vector illustrations.",
      },
      custom: {
        ms: "Dinilai secara sebut harga khas mengikut kerumitan visual.",
        en: "Evaluated and quoted based on bespoke visual complexity.",
      },
    },
    {
      criterion: { ms: "Penyediaan Cetakan Fizikal", en: "Print Preparation" },
      express: {
        ms: "Khas untuk kegunaan digital & media sosial.",
        en: "Optimised specifically for digital & social media channels.",
      },
      custom: {
        ms: "Termasuk penetapan bleed, margin selamat, dan fail 300 DPI mengikut saiz kilang.",
        en: "Includes safe trim margins, bleed lines, and 300 DPI printer setup.",
      },
    },
    {
      criterion: { ms: "Proses Sebut Harga", en: "Quotation Workflow" },
      express: {
        ms: "Harga tetap mengikut imej (RM5/gambar atau RM8/pakej duo).",
        en: "Fixed rate per image (RM5/image or RM8/duo bundle).",
      },
      custom: {
        ms: "Anggaran awal mengikut pakej (RM35 - RM149+) disahkan sebelum mula.",
        en: "Starting package estimate (RM35 - RM149+) confirmed prior to work.",
      },
    },
  ];

  return (
    <div className="w-full">
      {/* Side by side Pathway Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {/* Pathway A: Express */}
        <div className="ms-card p-6 sm:p-8 flex flex-col justify-between border-t-4 border-t-[#087A68]">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="ms-pill ms-pill-teal">
                {language === "ms" ? "PILIHAN PANTAS" : "RAPID EDIT"}
              </span>
              <span className="text-xs font-bold text-[#52605A]">
                {language === "ms" ? "Pakej E1 & E2" : "Packages E1 & E2"}
              </span>
            </div>

            <div>
              <h3 className="text-2xl font-extrabold text-[#18201D] tracking-tight">
                Design Express
              </h3>
              <p className="text-sm font-semibold text-[#087A68] mt-1">
                {language === "ms" ? "Ringkas, cepat dan mesra bajet." : "Focused, fast, and budget-conscious."}
              </p>
            </div>

            <div className="pt-2 flex items-baseline gap-2 border-b border-[#F0EFEA] pb-4">
              <span className="text-3xl font-extrabold text-[#18201D] tracking-tight">RM5</span>
              <span className="text-xs text-[#52605A] font-medium">
                {language === "ms" ? "/ gambar (pakej asas)" : "/ image (starter tier)"}
              </span>
            </div>

            <p className="text-xs text-[#52605A] leading-relaxed">
              {language === "ms"
                ? "Sesuai untuk membuang latar belakang produk, menukar harga atau teks pada poster yang sudah ada, dan kemasukan logo atau QR sedia ada."
                : "Ideal for product cutouts, swapping copy or prices on existing designs, and inserting supplied logos or verified QR codes."}
            </p>

            <ul className="space-y-2 text-xs text-[#18201D] pt-2">
              <li className="flex items-center gap-2">
                <span className="text-[#087A68] font-bold">✓</span>
                <span>{language === "ms" ? "Siap cepat dengan fail PNG/JPG resolusi tinggi" : "Fast turnaround with high-res PNG/JPG"}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#087A68] font-bold">✓</span>
                <span>{language === "ms" ? "Termasuk 2 kali suntingan kecil dalam skop" : "Includes 2 minor revision rounds"}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#087A68] font-bold">✓</span>
                <span>{language === "ms" ? "Pilihan Duo Bundle: RM8 untuk 2 keping gambar" : "Duo Bundle option: RM8 for 2 images"}</span>
              </li>
            </ul>
          </div>

          <div className="pt-6 mt-6 border-t border-[#F0EFEA]">
            <Link
              href="/calculator?category=design_express&package=e1-single-image"
              className="ms-btn-secondary w-full text-center text-xs py-3 rounded-xl font-bold"
            >
              {language === "ms" ? "Pilih Design Express" : "Choose Design Express"}
            </Link>
          </div>
        </div>

        {/* Pathway B: Custom */}
        <div className="ms-card p-6 sm:p-8 flex flex-col justify-between border-t-4 border-t-[#2457E6]">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="ms-pill ms-pill-blue">
                {language === "ms" ? "REKA BENTUK TELITI" : "BESPOKE DESIGN"}
              </span>
              <span className="text-xs font-bold text-[#52605A]">
                {language === "ms" ? "Pakej C1 - C5" : "Packages C1 - C5"}
              </span>
            </div>

            <div>
              <h3 className="text-2xl font-extrabold text-[#18201D] tracking-tight">
                Design Custom
              </h3>
              <p className="text-sm font-semibold text-[#2457E6] mt-1">
                {language === "ms" ? "Lebih terperinci, lebih tersusun, mengikut identiti anda." : "Detailed, bespoke, and tailored to your brand identity."}
              </p>
            </div>

            <div className="pt-2 flex items-baseline gap-2 border-b border-[#F0EFEA] pb-4">
              <span className="text-3xl font-extrabold text-[#18201D] tracking-tight">RM35</span>
              <span className="text-xs text-[#52605A] font-medium">
                {language === "ms" ? "anggaran awal bermula" : "starting package estimate"}
              </span>
            </div>

            <p className="text-xs text-[#52605A] leading-relaxed">
              {language === "ms"
                ? "Gubahan visual eksklusif dari sifar dengan susunan tipografi tajam, margin cetak format besar, menu kafe, logo perniagaan, dan label bungkusan produk."
                : "Zero-base bespoke visual composition with refined typography hierarchy, safe print margins, cafe menus, starter logos, and packaging labels."}
            </p>

            <ul className="space-y-2 text-xs text-[#18201D] pt-2">
              <li className="flex items-center gap-2">
                <span className="text-[#2457E6] font-bold">✓</span>
                <span>{language === "ms" ? "Reka bentuk khas mengikut gaya & warna jenama" : "Bespoke styling matching your brand palette"}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#2457E6] font-bold">✓</span>
                <span>{language === "ms" ? "3 pusingan semakan draf berperingkat" : "3 structured revision review milestones"}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#2457E6] font-bold">✓</span>
                <span>{language === "ms" ? "Penyediaan saiz cetakan fizikal & margin bleed" : "Physical print dimension & bleed safe zone prep"}</span>
              </li>
            </ul>
          </div>

          <div className="pt-6 mt-6 border-t border-[#F0EFEA]">
            <Link
              href="/contact?category=design_custom&package=c1-custom-poster"
              className="ms-btn-primary w-full text-center text-xs py-3 rounded-xl font-bold"
            >
              {language === "ms" ? "Bincang Design Custom" : "Discuss Design Custom"}
            </Link>
          </div>
        </div>
      </div>

      {/* Comparison line */}
      <div className="mt-8 text-center">
        <p className="text-xs sm:text-sm font-semibold text-[#52605A] italic">
          &ldquo;{language === "ms"
            ? "Express untuk keperluan ringkas. Custom untuk susun atur dan identiti yang lebih terperinci."
            : "Express for focused edits. Custom for bespoke layouts and brand identity."}&rdquo;
        </p>

        {/* Toggle Detailed Comparison Table Button */}
        <button
          type="button"
          onClick={() => setShowFullTable(!showFullTable)}
          className="mt-3 text-xs font-bold text-[#2457E6] hover:underline cursor-pointer inline-flex items-center gap-1"
        >
          <span>
            {showFullTable
              ? (language === "ms" ? "Sembunyikan perbandingan terperinci ↑" : "Hide detailed comparison ↑")
              : (language === "ms" ? "Buka jadual perbandingan penuh (8 kriteria) ↓" : "View full comparison matrix (8 criteria) ↓")}
          </span>
        </button>
      </div>

      {/* Expandable Comparison Table */}
      {showFullTable && (
        <div className="mt-8 overflow-x-auto rounded-xl border border-[#DDE1DA] bg-[#FFFFFF] shadow-sm animate-fadeIn">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-[#F0EFEA] border-b border-[#DDE1DA]">
                <th className="p-3.5 font-bold text-[#18201D] w-1/4">
                  {language === "ms" ? "Kriteria Penilaian" : "Criteria"}
                </th>
                <th className="p-3.5 font-bold text-[#087A68] w-3/8">
                  Design Express (RM5+)
                </th>
                <th className="p-3.5 font-bold text-[#2457E6] w-3/8">
                  Design Custom (RM35+)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F0EFEA]">
              {criteria.map((item, idx) => (
                <tr key={idx} className="hover:bg-[#F7F6F2] transition-colors">
                  <td className="p-3.5 font-semibold text-[#18201D] bg-[#FAF9F5]">
                    {item.criterion[language]}
                  </td>
                  <td className="p-3.5 text-[#52605A] leading-relaxed">
                    {item.express[language]}
                  </td>
                  <td className="p-3.5 text-[#52605A] leading-relaxed">
                    {item.custom[language]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
