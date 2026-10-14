"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type MainLanguage = "ms" | "en";

interface MainSiteLanguageContextType {
  language: MainLanguage;
  setLanguage: (lang: MainLanguage) => void;
  t: (key: string) => string;
}

const translations: Record<MainLanguage, Record<string, string>> = {
  ms: {
    // Navigation
    navBrand: "Danial's Web & Systems",
    navDescriptor: "Web • Apps • Systems • Design",
    navHome: "Laman Utama",
    navServices: "Servis",
    navWebsites: "Laman Web",
    navDesign: "Design & Foto",
    navWebsiteFix: "Baiki Website",
    navSystemsApps: "Sistem & Aplikasi",
    navGallery: "Hasil Kerja",
    navPricing: "Harga",
    navCalculator: "Anggaran Bajet",
    navContact: "Hubungi",
    navCtaBtn: "Bincang Projek",
    navLegacyLink: "Versi terdahulu",

    // Hero
    heroEyebrow: "WEB • SYSTEMS • DESIGN",
    heroHeadlinePart1: "Website & design yang buat bisnes anda",
    heroHeadlineHighlight: "nampak lebih profesional.",
    heroSubcopy: "Landing page, sistem perniagaan, poster dan edit gambar — semuanya boleh bermula dengan skop yang ringkas dan bajet yang sesuai.",
    heroPrimaryCta: "Lihat Servis & Harga",
    heroSecondaryCta: "Bincang di WhatsApp",
    heroAnchorA: "Landing page dari RM79",
    heroAnchorB: "Edit gambar dari RM5",
    heroAnchorNote: "2 kali suntingan percuma untuk pakej asas terpilih.",

    // Core Pillars Summary
    pillarWebTitle: "Pembangunan Laman Web",
    pillarWebDesc: "Landing page ringkas hingga laman korporat berbilang halaman yang mesra telefon dan mudah dihubungi.",
    pillarDesignTitle: "Graphic Design & Foto",
    pillarDesignDesc: "Suntingan gambar pantas dari RM5 (Express) dan reka bentuk visual khas yang tersusun (Custom).",
    pillarRepairTitle: "Naik Taraf & Pembaikan",
    pillarRepairDesc: "Selesaikan isu susun atur, sambungan domain/SSL, atau kemas kini teks dan butang yang rosak.",
    pillarSystemsTitle: "Sistem & Aplikasi Kustom",
    pillarSystemsDesc: "Pangkalan data, dashboard pengurusan, sistem tempahan, dan aplikasi sokongan Android.",

    // Pathways
    pathwayTitle: "Dua Pilihan Khusus Graphic Design",
    pathwaySubtitle: "Pilih mengikut tahap perincian dan keperluan bajet anda — tanpa proses rumit.",
    pathwayExpressName: "Design Express",
    pathwayExpressSubtitle: "Ringkas, cepat dan mesra bajet.",
    pathwayExpressPrice: "Serendah RM5 / gambar",
    pathwayExpressDesc: "Khusus untuk tukar teks, nama atau harga pada poster sedia ada, buang latar belakang (cutout), tukar warna elemen, dan tambah logo/QR.",
    pathwayExpressBtn: "Pilih Design Express",
    pathwayCustomName: "Design Custom",
    pathwayCustomSubtitle: "Lebih terperinci, lebih tersusun, mengikut identiti anda.",
    pathwayCustomPrice: "Bermula dari RM35",
    pathwayCustomDesc: "Gubahan rekaan teliti dari sifar dengan susunan tipografi eksklusif, hierarki visual seimbang, saiz cetakan khusus, dan semakan berstruktur.",
    pathwayCustomBtn: "Bincang Design Custom",
    pathwayComparePrompt: "Express untuk keperluan ringkas. Custom untuk susun atur dan identiti yang lebih terperinci.",

    // Process
    processEyebrow: "CARA KAMI BEKERJA",
    processTitle: "Langkah mudah dari idea ke hasil siap",
    processStep1Title: "01 — Pilih Servis",
    processStep1Desc: "Tentukan apa yang anda perlukan — sama ada laman web asas, edit foto pantas, poster custom, atau sistem perniagaan.",
    processStep2Title: "02 — Kongsi Bahan",
    processStep2Desc: "Hantar teks ringkas, logo, gambar produk atau contoh rujukan anda terus melalui WhatsApp yang mudah.",
    processStep3Title: "03 — Semak Draf",
    processStep3Desc: "Lihat hasil awal atau pautan pratonton, kemudian kongsikan suntingan kecil dalam pusingan semakan yang disertakan.",
    processStep4Title: "04 — Terima Hasil",
    processStep4Desc: "Dapatkan fail resolusi tinggi sedia guna atau pelancaran laman web rasmi anda ke dunia digital.",

    // Founder note
    founderEyebrow: "TENTANG PENGASAS",
    founderTitle: "Komitmen terus secara peribadi.",
    founderQuote: "Saya Danial. Saya membantu individu dan bisnes kecil menyediakan website, sistem dan bahan visual yang lebih kemas — dengan skop yang jelas dan pilihan mengikut bajet.",
    founderPoint1: "Skop telus tanpa yuran tersembunyi.",
    founderPoint2: "Perbualan santai terus melalui WhatsApp.",
    founderPoint3: "Suntingan kecil dijelaskan dari awal.",

    // Estimator
    calcTitle: "Kalkulator Anggaran Bajet",
    calcSubtitle: "Pilih keperluan anda untuk mendapatkan gambaran awal kos dan skop yang telus.",
    calcStep1: "1. Apa yang anda perlukan?",
    calcStep2: "2. Pilih pakej & butiran",
    calcStep3: "3. Semak anggaran & bincang",
    calcSummaryTitle: "Ringkasan Anggaran",
    calcSubtotalLabel: "Anggaran Servis Awal",
    calcRevisionsLabel: "Suntingan Disertakan",
    calcDeliverablesLabel: "Hasil Dijangka",
    calcDisclaimer: "Harga yang dipaparkan ialah anggaran awal mengikut skop. Harga akhir disahkan selepas keperluan projek dibincangkan.",
    calcCtaWhatsapp: "Bincang Anggaran di WhatsApp",
    calcCopyBtn: "Salin Ringkasan Mesej",
    calcCopied: "Disalin!",

    // Contact
    contactTitle: "Ceritakan apa yang anda perlukan.",
    contactSubtitle: "Ada idea, gambar rujukan atau website yang mahu dibaiki? Hantar ringkasan keperluan anda dan kita bincangkan pilihan yang sesuai.",
    contactFormName: "Nama Anda (Pilihan)",
    contactFormBiz: "Nama Perniagaan / Projek (Pilihan)",
    contactFormCategory: "Kategori Servis *",
    contactFormDesc: "Keterangan Ringkas Projek / Keperluan *",
    contactFormBudget: "Anggaran Bajet",
    contactFormSubmit: "Sediakan Mesej WhatsApp",
    contactNote: "Maklumat yang dimasukkan akan diformatkan menjadi draf mesej WhatsApp yang kemas untuk semakan anda sebelum dihantar.",
    contactDirectCall: "Telefon Terus",
    contactEmail: "Emel Rasmi",
    contactWhatsappText: "WhatsApp Danial",

    // Common
    badgeOwnerAnchor: "Pakej Asas Rasmi",
    badgeProvisional: "Anggaran Awal",
    badgeQuoteRequired: "Perlu Sebut Harga",
    btnViewPackages: "Lihat Semua Pakej",
    btnLearnMore: "Ketahui Lebih Lanjut",
    btnDiscussScope: "Bincang Skop",
    btnSelectPackage: "Pilih Pakej Ini",
    footerRights: "Hak Cipta Terpelihara.",
    footerNote: "Pakej dan anggaran awal boleh dikemas kini. Harga akhir disahkan selepas perbincangan keperluan.",
  },
  en: {
    // Navigation
    navBrand: "Danial's Web & Systems",
    navDescriptor: "Web • Apps • Systems • Design",
    navHome: "Home",
    navServices: "Services",
    navWebsites: "Websites",
    navDesign: "Design & Photo",
    navWebsiteFix: "Website Repair",
    navSystemsApps: "Systems & Apps",
    navGallery: "Selected Work",
    navPricing: "Pricing",
    navCalculator: "Estimator",
    navContact: "Contact",
    navCtaBtn: "Discuss Project",
    navLegacyLink: "Legacy Version",

    // Hero
    heroEyebrow: "WEB • SYSTEMS • DESIGN",
    heroHeadlinePart1: "Websites & design that elevate your business",
    heroHeadlineHighlight: "to look truly professional.",
    heroSubcopy: "Landing pages, business systems, posters, and photo editing — start with a focused scope and a budget that fits your stage.",
    heroPrimaryCta: "Explore Services & Pricing",
    heroSecondaryCta: "Discuss on WhatsApp",
    heroAnchorA: "Landing pages from RM79",
    heroAnchorB: "Photo editing from RM5",
    heroAnchorNote: "2 minor revisions included on selected starter offers.",

    // Core Pillars Summary
    pillarWebTitle: "Website Development",
    pillarWebDesc: "From streamlined landing pages to multi-page company profiles that are mobile-ready and built to convert.",
    pillarDesignTitle: "Graphic Design & Photo",
    pillarDesignDesc: "Rapid photo edits from RM5 (Express) alongside carefully crafted visual identities (Custom).",
    pillarRepairTitle: "Upgrades & Repairs",
    pillarRepairDesc: "Resolve layout misalignment, domain/SSL connectivity issues, or patch broken forms and links.",
    pillarSystemsTitle: "Custom Systems & Apps",
    pillarSystemsDesc: "Databases, management dashboards, booking portals, and Android companion applications.",

    // Pathways
    pathwayTitle: "Two Distinct Graphic Design Pathways",
    pathwaySubtitle: "Choose based on your required level of customisation and turnaround — without unnecessary agency friction.",
    pathwayExpressName: "Design Express",
    pathwayExpressSubtitle: "Focused, fast, and budget-conscious.",
    pathwayExpressPrice: "From RM5 / image",
    pathwayExpressDesc: "Best for text/price swaps on existing posters, clean background removal, recolouring elements, and inserting logos or QR codes.",
    pathwayExpressBtn: "Choose Design Express",
    pathwayCustomName: "Design Custom",
    pathwayCustomSubtitle: "Detailed, structured, and tailored to your identity.",
    pathwayCustomPrice: "Starting from RM35",
    pathwayCustomDesc: "Bespoke zero-base compositions with curated typography, visual balance, print-ready margins, and comprehensive review milestones.",
    pathwayCustomBtn: "Discuss Design Custom",
    pathwayComparePrompt: "Express for simple edits. Custom for bespoke layouts and brand identity.",

    // Process
    processEyebrow: "HOW WE WORK",
    processTitle: "A clear journey from initial concept to launch",
    processStep1Title: "01 — Choose Service",
    processStep1Desc: "Select the outcome you need — whether a starter landing page, quick photo cutout, custom poster, or a database system.",
    processStep2Title: "02 — Share Materials",
    processStep2Desc: "Send your draft text, logos, product photos, or visual references directly via our direct WhatsApp channel.",
    processStep3Title: "03 — Review Draft",
    processStep3Desc: "Inspect an initial preview or demo link, then consolidate minor adjustments within the included revision rounds.",
    processStep4Title: "04 — Receive Files",
    processStep4Desc: "Receive high-resolution digital assets ready to publish, or watch your website go live to the world.",

    // Founder note
    founderEyebrow: "ABOUT THE MAKER",
    founderTitle: "Direct personal collaboration.",
    founderQuote: "I am Danial. I help individuals and small businesses build cleaner websites, systems, and visual collateral — with an honest scope and realistic pricing.",
    founderPoint1: "Transparent scope with no hidden surprises.",
    founderPoint2: "Friendly, direct discussion on WhatsApp.",
    founderPoint3: "Minor revisions clarified before work begins.",

    // Estimator
    calcTitle: "Dynamic Project Estimator",
    calcSubtitle: "Select your requirements for transparent starting estimates and deliverables.",
    calcStep1: "1. What do you need?",
    calcStep2: "2. Choose package & options",
    calcStep3: "3. Review estimate & discuss",
    calcSummaryTitle: "Estimate Summary",
    calcSubtotalLabel: "Initial Service Estimate",
    calcRevisionsLabel: "Included Revisions",
    calcDeliverablesLabel: "Expected Deliverables",
    calcDisclaimer: "Displayed figures are starting estimates based on typical scope. Final costs are confirmed upon mutual agreement.",
    calcCtaWhatsapp: "Discuss Estimate on WhatsApp",
    calcCopyBtn: "Copy Message Brief",
    calcCopied: "Copied!",

    // Contact
    contactTitle: "Tell us what you are looking to build.",
    contactSubtitle: "Have an idea, reference artwork, or an existing website needing repair? Share a brief summary and let's find the right fit.",
    contactFormName: "Your Name (Optional)",
    contactFormBiz: "Business / Project Name (Optional)",
    contactFormCategory: "Service Category *",
    contactFormDesc: "Short Project Summary / Requirements *",
    contactFormBudget: "Budget Range",
    contactFormSubmit: "Prepare WhatsApp Message",
    contactNote: "Entered details are formatted into a clean WhatsApp draft message for your review before you hit send.",
    contactDirectCall: "Direct Phone",
    contactEmail: "Official Email",
    contactWhatsappText: "WhatsApp Danial",

    // Common
    badgeOwnerAnchor: "Official Starter Offer",
    badgeProvisional: "Provisional Proposal",
    badgeQuoteRequired: "Quote Required",
    btnViewPackages: "View All Packages",
    btnLearnMore: "Learn More",
    btnDiscussScope: "Discuss Scope",
    btnSelectPackage: "Select This Package",
    footerRights: "All Rights Reserved.",
    footerNote: "Packages and provisional numbers can be updated. Final pricing confirmed after scope review.",
  },
};

const MainSiteLanguageContext = createContext<MainSiteLanguageContextType>({
  language: "ms",
  setLanguage: () => {},
  t: (key: string) => key,
});

export const MainSiteLanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<MainLanguage>("ms");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("danial-root-language") as MainLanguage;
      if (saved && (saved === "ms" || saved === "en")) {
        setLanguageState(saved);
      }
    } catch {
      // Ignore localStorage read errors in SSR/strict modes
    }
  }, []);

  const setLanguage = (lang: MainLanguage) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("danial-root-language", lang);
    } catch {
      // Ignore
    }
  };

  const t = (key: string): string => {
    const dict = translations[language] || translations.ms;
    return dict[key] || translations.ms[key] || key;
  };

  return (
    <MainSiteLanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </MainSiteLanguageContext.Provider>
  );
};

export const useMainSiteLanguage = () => useContext(MainSiteLanguageContext);
