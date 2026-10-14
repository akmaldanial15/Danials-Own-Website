export type ProjectStatus =
  | "client_work"
  | "concept_demo"
  | "project_preview"
  | "in_development"
  | "placeholder_sample";

export type PortfolioCategory =
  | "all"
  | "website"
  | "systems"
  | "design_express"
  | "design_custom"
  | "poster_menu"
  | "logo_packaging";

export interface PortfolioItem {
  id: string;
  title: string;
  category: PortfolioCategory;
  categoryLabel: {
    ms: string;
    en: string;
  };
  tags: string[];
  projectStatus: ProjectStatus;
  statusLabel: {
    ms: string;
    en: string;
  };
  contribution: {
    ms: string;
    en: string;
  };
  shortDescription: {
    ms: string;
    en: string;
  };
  fullDescription: {
    ms: string;
    en: string;
  };
  thumbnail: string;
  demoUrl?: string;
  relatedServiceId: string;
  featured: boolean;
  sortOrder: number;
  highlightType?: "web" | "graphic" | "before_after" | "identity";
  specifications?: {
    format: string;
    deliverables: string;
    scope: string;
  };
}

export const portfolioCatalog: PortfolioItem[] = [
  // 1. Vibe Interior Studio (Web Concept Demo)
  {
    id: "vibe-interior",
    title: "Vibe Interior Studio",
    category: "website",
    categoryLabel: {
      ms: "Laman Web Profil",
      en: "Profile Website",
    },
    tags: ["Demo Konsep", "Japandi Style", "4 Halaman", "Responsif"],
    projectStatus: "concept_demo",
    statusLabel: {
      ms: "Demo Konsep",
      en: "Concept Demo",
    },
    contribution: {
      ms: "Reka bentuk susun atur, tipografi minimalis, dan pembinaan kod frontend lengkap.",
      en: "Layout design, minimalist typography, and complete frontend implementation.",
    },
    shortDescription: {
      ms: "Laman web profil 4 halaman untuk studio seni bina dalaman berkonsepkan Japandi moden.",
      en: "4-page portfolio website for a contemporary Japandi interior architecture studio.",
    },
    fullDescription: {
      ms: "Dihasilkan sebagai demonstrasi konsep reka bentuk web berprofil tinggi. Memaparkan susunan visual tenang, penapis portfolio berasingan, seksyen perkhidmatan terperinci, dan borang permohonan sebut harga yang kemas.",
      en: "Crafted as a visual design demonstration of an editorial studio website. Features tranquil visual rhythm, filtered portfolio showcase, detailed services, and a sleek contact brief module.",
    },
    thumbnail: "/images/portfolio-vibe.png",
    demoUrl: "https://medium-budget-vibestudio.vercel.app/",
    relatedServiceId: "w3-business-website",
    featured: true,
    sortOrder: 1,
    highlightType: "web",
    specifications: {
      format: "Web (Next.js / Responsive CSS)",
      deliverables: "4 Halaman (Home, Services, Portfolio, Contact)",
      scope: "Demo Konsep Berfungsi",
    },
  },

  // 2. Rasa Nusantara (Web Concept Demo)
  {
    id: "rasa-nusantara",
    title: "Rasa Nusantara Bakery",
    category: "website",
    categoryLabel: {
      ms: "Landing Page",
      en: "Landing Page",
    },
    tags: ["Demo Konsep", "Landing Page", "WhatsApp Booking"],
    projectStatus: "concept_demo",
    statusLabel: {
      ms: "Demo Konsep",
      en: "Concept Demo",
    },
    contribution: {
      ms: "Reka bentuk visual landing page, susunan menu signature, dan pautan pesanan WhatsApp.",
      en: "Landing page UI design, signature menu curation, and WhatsApp direct ordering links.",
    },
    shortDescription: {
      ms: "Landing page mesra telefon untuk kafe bakeri artisan dengan tindakan WhatsApp segera.",
      en: "Mobile-first landing page for an artisan bakery cafe with instant WhatsApp ordering.",
    },
    fullDescription: {
      ms: "Demonstrasi landing page padat untuk bisnes F&B kecil. Mengandungi pengenalan jenama, senarai menu terpilih, waktu operasi, dan pautan satu klik untuk pelanggan memesan hidangan terus melalui WhatsApp.",
      en: "Compact landing page demonstration for local food artisans. Highlights brand story, signature menu cards, operating hours, and one-tap WhatsApp order routing.",
    },
    thumbnail: "/images/portfolio-vibe.png", // Will use fallback or styled preview
    demoUrl: "https://nusantara-website.vercel.app/",
    relatedServiceId: "w1-landing-starter",
    featured: true,
    sortOrder: 2,
    highlightType: "web",
    specifications: {
      format: "Single Page Landing",
      deliverables: "1 Halaman Responsif + WhatsApp Link",
      scope: "Demo Konsep Asas",
    },
  },

  // 3. Kopi Petang — Menu & Promo Poster (Custom Poster)
  {
    id: "kopi-petang-poster",
    title: "Kopi Petang Cafe & Roastery",
    category: "poster_menu",
    categoryLabel: {
      ms: "Poster & Menu Custom",
      en: "Custom Poster & Menu",
    },
    tags: ["Design Custom", "Poster A4", "Kafe F&B", "Cetak & Digital"],
    projectStatus: "placeholder_sample",
    statusLabel: {
      ms: "Contoh Konsep",
      en: "Concept Sample",
    },
    contribution: {
      ms: "Konsep gubahan visual, susun atur tipografi menu kopi, dan penetapan saiz cetakan.",
      en: "Visual composition, coffee menu typography layout, and print-ready format configuration.",
    },
    shortDescription: {
      ms: "Poster promosi menu minuman bermusim dengan hierarki harga dan teks yang mudah dibaca.",
      en: "Seasonal beverage promotional poster with clear price hierarchy and appetizing styling.",
    },
    fullDescription: {
      ms: "Contoh rekaan Pathway B (Design Custom) khas untuk peniaga kafe. Mengutamakan tipografi tajam, ruang pernafasan visual, kod QR pesanan yang sah, dan saiz cetak A4/A3 dengan margin selamat.",
      en: "Sample demonstrating Pathway B (Design Custom) for F&B ventures. Prioritises sharp typography, intentional whitespace, verified order QR, and print-safe A4/A3 margin preparation.",
    },
    thumbnail: "/images/portfolio-vibe.png",
    relatedServiceId: "c1-custom-poster",
    featured: true,
    sortOrder: 3,
    highlightType: "graphic",
    specifications: {
      format: "A4 (210 x 297 mm) + Versi 4:5 Instagram",
      deliverables: "Print-ready PDF (300 DPI) & PNG Digital",
      scope: "Gubahan Custom Mengikut Identiti",
    },
  },

  // 4. Parfum Botanica — Label & Packaging Design
  {
    id: "parfum-botanica-label",
    title: "Parfum Botanica — Luxury Fragrance",
    category: "logo_packaging",
    categoryLabel: {
      ms: "Label & Packaging",
      en: "Label & Packaging",
    },
    tags: ["Design Custom", "Pelekat Botol", "Die-line", "Kemasan Minimalis"],
    projectStatus: "placeholder_sample",
    statusLabel: {
      ms: "Contoh Konsep",
      en: "Concept Sample",
    },
    contribution: {
      ms: "Susun atur label pelekat botol wangian 50ml mengikut ukuran die-line tepat.",
      en: "50ml fragrance bottle sticker layout based on precise die-line packaging specifications.",
    },
    shortDescription: {
      ms: "Reka bentuk pelekat botol minyak wangi artisan dengan perincian tipografi mewah dan margin kilang.",
      en: "Artisan perfume bottle label with luxury typography hierarchy and manufacturer-safe trim lines.",
    },
    fullDescription: {
      ms: "Contoh rekaan pelekat fizikal di bawah Pakej C5 Label & Packaging. Menggabungkan maklumat isipadu (50ml / 1.7 fl.oz), nota haruman, logo jenama, dan ruang selamat untuk percetakan foil emas.",
      en: "Packaging demonstration under Package C5. Combines volume metrics, fragrance notes, brand typography, and safe zones for metallic foil finish options.",
    },
    thumbnail: "/images/portfolio-vibe.png",
    relatedServiceId: "c5-label-packaging",
    featured: true,
    sortOrder: 4,
    highlightType: "graphic",
    specifications: {
      format: "Label Pelekat 60 x 90 mm",
      deliverables: "PDF Vektor Siap Cetak (dengan bleed 2mm)",
      scope: "Susun Atur Die-line Fizikal",
    },
  },

  // 5. Sambal Tok Nek — Express Background Cutout & Price Update
  {
    id: "sambal-tok-nek-edit",
    title: "Sambal Garing Tok Nek (Suntingan Express)",
    category: "design_express",
    categoryLabel: {
      ms: "Design Express",
      en: "Design Express",
    },
    tags: ["Design Express", "Buang Background", "Tukar Harga RM5", "Imej Produk"],
    projectStatus: "placeholder_sample",
    statusLabel: {
      ms: "Contoh Demonstrasi",
      en: "Demo Sample",
    },
    contribution: {
      ms: "Pengasingan latar belakang produk (cutout), penyeragaman pencahayaan, dan kemas kini tag harga.",
      en: "Product background isolation (cutout), lighting balance, and updated promotional price tag.",
    },
    shortDescription: {
      ms: "Demonstrasi servis Express RM5: botol sambal dipotong bersih daripada latar belakang meja dapur dan diletakkan pada latar studio putih.",
      en: "RM5 Express demo: home-shot condiment jar cleanly isolated from busy background onto crisp studio white.",
    },
    fullDescription: {
      ms: "Menunjukkan skop sebenar Pathway A (Design Express). Sesuai untuk peniaga online yang mengambil gambar produk menggunakan telefon dan mahu latar belakang dibersihkan, saiz diselaraskan, dan harga baharu dimasukkan.",
      en: "Demonstrates true Pathway A (Design Express) scope. Ideal for online merchants photographing goods on phones wanting clean white isolation, uniform framing, and updated price callouts.",
    },
    thumbnail: "/images/portfolio-vibe.png",
    relatedServiceId: "e1-single-image",
    featured: false,
    sortOrder: 5,
    highlightType: "before_after",
    specifications: {
      format: "1:1 Nisbah WhatsApp / Shopee / IG",
      deliverables: "Fail PNG Telus & JPG Putih Bersih",
      scope: "Suntingan Pantas & Mesra Bajet",
    },
  },

  // 6. Institut Wawasan — Portal TVET (Redesign & Database Preview)
  {
    id: "institut-wawasan",
    title: "Institut Wawasan Portal",
    category: "systems",
    categoryLabel: {
      ms: "Sistem & Portal Web",
      en: "Systems & Web Portal",
    },
    tags: ["Projek Naik Taraf", "Pangkalan Data", "Portal TVET", "Admin"],
    projectStatus: "project_preview",
    statusLabel: {
      ms: "Pratonton Projek",
      en: "Project Preview",
    },
    contribution: {
      ms: "Penstrukturan semula portal rasmi, integrasi pangkalan data kursus, dan modul semakan pelajar.",
      en: "Portal structural redesign, course database schema integration, and student verification workflow.",
    },
    shortDescription: {
      ms: "Naik taraf portal maklumat pendidikan TVET dengan sistem pangkalan data kursus dan rekod pelajar.",
      en: "Educational TVET institutional portal upgrade with dynamic course database and student records.",
    },
    fullDescription: {
      ms: "Contoh kerja di bawah kategori Sistem & Pembaikan Laman Web. Menggantikan struktur portal lama dengan antara muka yang responsif, pangkalan data berstruktur, dan portal kemasukan data yang mudah dikendalikan kakitangan.",
      en: "Exemplifies our Systems & Website Redesign capabilities. Replaces legacy framework with responsive interface, structured relational database, and straightforward staff entry portals.",
    },
    thumbnail: "/images/portfolio-vibe.png",
    relatedServiceId: "s1-admin-panel",
    featured: false,
    sortOrder: 6,
    highlightType: "web",
    specifications: {
      format: "Web Application + Database",
      deliverables: "Portal Bersepadu + Pengurusan Data",
      scope: "Naik Taraf Portal & Pangkalan Data",
    },
  },

  // 7. Ikan Laga Community Hub (Collaboration In Development)
  {
    id: "ikan-laga-hub",
    title: "Betta Heritage Malaysia",
    category: "website",
    categoryLabel: {
      ms: "Laman Komuniti & Galeri",
      en: "Community & Gallery Web",
    },
    tags: ["Dalam Pembangunan", "Galeri Kategori", "Katalog Spesies"],
    projectStatus: "in_development",
    statusLabel: {
      ms: "Dalam Pembangunan",
      en: "In Development",
    },
    contribution: {
      ms: "Penyusunan prototaip galeri foto spesies ikan laga dan sistem penapis gred pertandingan.",
      en: "Prototyping species photo gallery and competition-grade classification filters.",
    },
    shortDescription: {
      ms: "Katalog digital komuniti penggemar ikan laga dengan paparan visual definisi tinggi.",
      en: "Digital showcase and species catalog for betta hobbyists with high-definition visual cards.",
    },
    fullDescription: {
      ms: "Projek kolaborasi komuniti yang masih dalam fasa pembangunan aktif. Memaparkan susunan kad portfolio dengan gambar berkualiti tinggi dan sistem klasifikasi spesies berasaskan kategori sirip dan warna.",
      en: "Collaborative hobbyist community project currently under active development. Highlights clean grid presentation, zoomable macro photography, and species tagging by fin and colour type.",
    },
    thumbnail: "/images/portfolio-betta.png",
    relatedServiceId: "w2-landing-plus",
    featured: false,
    sortOrder: 7,
    highlightType: "web",
    specifications: {
      format: "Web Catalog",
      deliverables: "Sistem Galeri & Carian Kategori",
      scope: "Fasa Pembangunan Kolaborasi",
    },
  },
];
