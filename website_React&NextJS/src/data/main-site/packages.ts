export type PriceStatus = "owner_anchor" | "provisional" | "quote_required";
export type ServiceCategory = "website" | "design_express" | "design_custom" | "repair" | "systems";

export interface PackageItem {
  id: string;
  category: ServiceCategory;
  title: {
    ms: string;
    en: string;
  };
  subtitle: {
    ms: string;
    en: string;
  };
  price: number;
  currency: string;
  priceUnit: {
    ms: string;
    en: string;
  };
  priceType: "fixed" | "starting_from" | "quote_only";
  priceStatus: PriceStatus;
  statusBadge: {
    ms: string;
    en: string;
  };
  suitableFor: {
    ms: string;
    en: string;
  };
  includedItems: {
    ms: string[];
    en: string[];
  };
  excludedItems: {
    ms: string[];
    en: string[];
  };
  revisionRounds: {
    ms: string;
    en: string;
  };
  deliverables: {
    ms: string;
    en: string;
  };
  scopeBoundary: {
    ms: string;
    en: string;
  };
  addOnCompatibility: string[];
  enquiryMode: "direct" | "discuss_scope" | "quote_required";
  featured?: boolean;
  sortOrder: number;
}

export const packagesCatalog: PackageItem[] = [
  // -------------------------------------------------------------
  // WEBSITES
  // -------------------------------------------------------------
  {
    id: "w1-landing-starter",
    category: "website",
    title: {
      ms: "Landing Starter",
      en: "Landing Starter",
    },
    subtitle: {
      ms: "Kehadiran digital kemas & pantas untuk perniagaan kecil.",
      en: "Clean and quick digital presence for small businesses.",
    },
    price: 79,
    currency: "RM",
    priceUnit: {
      ms: "/ satu projek landing page",
      en: "/ single landing page project",
    },
    priceType: "starting_from",
    priceStatus: "owner_anchor",
    statusBadge: {
      ms: "Pakej Asas Rasmi",
      en: "Official Starter Offer",
    },
    suitableFor: {
      ms: "Pengenalan servis peribadi, bisnes kecil, pelancaran produk, atau info ringkas dengan butang WhatsApp.",
      en: "Personal service intro, small business, product launch, or simple contact info with WhatsApp action.",
    },
    includedItems: {
      ms: [
        "1 halaman utama (sehingga 4 seksyen padat)",
        "Susun atur responsif telefon & desktop",
        "Kandungan & teks asas dibekalkan pelanggan",
        "Butang WhatsApp terus & pautan media sosial",
        "Setup asas tajuk halaman & metadata ringkas",
        "Pautan pratonton semakan draf",
      ],
      en: [
        "1 single page (up to 4 compact sections)",
        "Mobile-responsive and desktop-friendly layout",
        "Client-supplied text, logo, and core details",
        "Direct WhatsApp CTA and basic social links",
        "Basic page title and SEO metadata setup",
        "Review draft link before final hand-off",
      ],
    },
    excludedItems: {
      ms: [
        "Admin dashboard & pangkalan data",
        "Sistem akaun & log masuk pengguna",
        "Sistem checkout pembayaran automatik",
        "Domain & hosting tahunan (ditaja / diurus berasingan)",
        "Suntingan tanpa had selepas hand-off",
      ],
      en: [
        "Admin panel and custom database",
        "User account login system",
        "Automated payment checkout",
        "Custom domain and hosting fees (scoped separately)",
        "Unlimited revisions after hand-off",
      ],
    },
    revisionRounds: {
      ms: "2 kali suntingan kecil dalam skop asal",
      en: "2 minor revision rounds within original scope",
    },
    deliverables: {
      ms: "Laman web siap sedia untuk dihubungkan ke hosting/demo dipersetujui",
      en: "Ready-to-launch website code/deployment to agreed hosting/demo link",
    },
    scopeBoundary: {
      ms: "Khas untuk landing page ringkas. Penambahan fungsi dinamik atau reka bentuk semula selepas kelulusan dikira skop baharu.",
      en: "Strictly for simple landing pages. Dynamic features or full redesign after approval require new scope.",
    },
    addOnCompatibility: ["extra_page", "extra_language", "domain_help"],
    enquiryMode: "direct",
    featured: true,
    sortOrder: 1,
  },
  {
    id: "w2-landing-plus",
    category: "website",
    title: {
      ms: "Landing Plus",
      en: "Landing Plus",
    },
    subtitle: {
      ms: "Penerangan servis lebih terperinci dengan galeri dan FAQ.",
      en: "Deeper service narrative with gallery showcase and FAQ.",
    },
    price: 199,
    currency: "RM",
    priceUnit: {
      ms: "/ satu projek landing page",
      en: "/ single landing page project",
    },
    priceType: "starting_from",
    priceStatus: "provisional",
    statusBadge: {
      ms: "Anggaran Awal",
      en: "Provisional Proposal",
    },
    suitableFor: {
      ms: "Bisnes yang memerlukan susunan testimoni, galeri produk/servis, dan soalan lazim (FAQ).",
      en: "Businesses needing structured testimonials, product/service gallery, and FAQs.",
    },
    includedItems: {
      ms: [
        "1 halaman utama (sehingga 7 seksyen teratur)",
        "Struktur visual lebih mendalam & hirarki kemas",
        "Seksyen galeri foto & senarai ciri produk",
        "Seksyen soalan lazim (FAQ) interaktif",
        "Metadata SEO & optimasi saiz imej dibekalkan",
        "Integrasi butang WhatsApp berkonteks",
      ],
      en: [
        "1 comprehensive page (up to 7 structured sections)",
        "Refined visual hierarchy and typography",
        "Image gallery & product highlight section",
        "Interactive FAQ accordion module",
        "Page metadata & image size optimisation",
        "Contextual WhatsApp CTA button",
      ],
    },
    excludedItems: {
      ms: [
        "Pangkalan data kustom & log masuk",
        "Sistem bayaran e-dagang kompleks",
        "Yuran langganan pihak ketiga",
      ],
      en: [
        "Custom database and user logins",
        "Complex e-commerce checkout flow",
        "Third-party subscription fees",
      ],
    },
    revisionRounds: {
      ms: "3 kali suntingan kecil dalam skop asal",
      en: "3 minor revision rounds within original scope",
    },
    deliverables: {
      ms: "Laman web lengkap beserta panduan pengurusan pautan",
      en: "Complete web build with link management guide",
    },
    scopeBoundary: {
      ms: "Laman satu halaman komprehensif tanpa pangkalan data dinamik.",
      en: "Comprehensive single-page website without dynamic database.",
    },
    addOnCompatibility: ["extra_page", "extra_language", "domain_help"],
    enquiryMode: "direct",
    featured: false,
    sortOrder: 2,
  },
  {
    id: "w3-business-website",
    category: "website",
    title: {
      ms: "Business Website",
      en: "Business Website",
    },
    subtitle: {
      ms: "Laman web berbilang halaman untuk perniagaan rasmi.",
      en: "Multi-page informational website for established ventures.",
    },
    price: 399,
    currency: "RM",
    priceUnit: {
      ms: "/ pakej 4 halaman asas",
      en: "/ 4-page base package",
    },
    priceType: "starting_from",
    priceStatus: "provisional",
    statusBadge: {
      ms: "Cadangan Bisnes Kecil",
      en: "Recommended for Small Biz",
    },
    suitableFor: {
      ms: "Syarikat, pusat servis, bengkel, atau perunding yang memerlukan halaman berasingan (Home, Servis, Galeri, Hubungi).",
      en: "Companies, service centres, consultants needing distinct pages (Home, Services, Gallery, Contact).",
    },
    includedItems: {
      ms: [
        "Sehingga 4 halaman standard (Home, Servis/Tentang, Galeri, Hubungi)",
        "Navigasi desktop & mobile menu lengkap",
        "Susunan kandungan korporat yang konsisten",
        "Borang ringkasan permohonan ke WhatsApp/Emel",
        "Metadata SEO tersendiri untuk setiap halaman",
        "Peta lokasi / pautan media sosial rasmi",
      ],
      en: [
        "Up to 4 standard pages (Home, About/Services, Gallery, Contact)",
        "Full desktop & mobile responsive navigation",
        "Cohesive editorial brand layout across all pages",
        "Direct enquiry brief form routing to WhatsApp/Email",
        "Individual page SEO meta tags",
        "Location map / direct social channels integration",
      ],
    },
    excludedItems: {
      ms: [
        "Sistem tempahan masa nyata dengan pembayaran gerbang",
        "Panel kawalan kandungan dinamik backend",
        "Kos pendaftaran domain & pelayan tahunan",
      ],
      en: [
        "Real-time booking with payment gateway",
        "Custom backend content management panel",
        "Annual domain and server hosting fees",
      ],
    },
    revisionRounds: {
      ms: "3 kali suntingan berperingkat untuk seluruh skop",
      en: "3 consolidated revision rounds across the project",
    },
    deliverables: {
      ms: "Laman web 4 halaman siap dengan hand-off teknikal ringkas",
      en: "Complete 4-page website with technical hand-off notes",
    },
    scopeBoundary: {
      ms: "Laman web berbilang halaman maklumat. Penambahan halaman di atas 4 dikira berasingan (anggaran RM50/halaman).",
      en: "Multi-page informational site. Extra pages beyond 4 scoped separately (est. RM50/page).",
    },
    addOnCompatibility: ["extra_page", "extra_language", "domain_help"],
    enquiryMode: "direct",
    featured: true,
    sortOrder: 3,
  },
  {
    id: "w4-custom-website",
    category: "website",
    title: {
      ms: "Custom Website",
      en: "Custom Website",
    },
    subtitle: {
      ms: "Reka bentuk eksklusif dengan susun atur teliti dan jenama kukuh.",
      en: "Tailored brand presentation with custom UI layout.",
    },
    price: 799,
    currency: "RM",
    priceUnit: {
      ms: "/ pakej sehingga 6 halaman",
      en: "/ up to 6-page tailored package",
    },
    priceType: "starting_from",
    priceStatus: "provisional",
    statusBadge: {
      ms: "Anggaran Awal",
      en: "Provisional Proposal",
    },
    suitableFor: {
      ms: "Jenama yang mahukan identiti visual unik, galeri interaktif dipertingkat, dan perincian mikro yang mewah.",
      en: "Brands desiring distinct custom visual direction, enriched interactive galleries, and polished micro-details.",
    },
    includedItems: {
      ms: [
        "Sehingga 6 halaman standard tersusun",
        "Reka bentuk UI tersendiri mengikut identiti jenama",
        "Mikro-animasi interaktif & tipografi terperinci",
        "Galeri kaya dengan penapis kategori & modal perincian",
        "Audit kebolehbacaan & kelajuan responsif menyeluruh",
        "Struktur SEO standard industri",
      ],
      en: [
        "Up to 6 tailored standard pages",
        "Custom UI layout aligning with brand identity",
        "Interactive micro-animations & curated typography",
        "Rich gallery with filterable categories & detail modals",
        "Mobile responsiveness & speed audit",
        "Industry-standard SEO structure",
      ],
    },
    excludedItems: {
      ms: [
        "Pembangunan sistem backend CRM/inventori penuh (dinilai di bawah Sistem)",
        "Kos lesen imej komersial pihak ketiga jika dibeli khas",
      ],
      en: [
        "Full backend CRM/inventory database (scoped under Systems)",
        "Third-party commercial asset licensing fees if required",
      ],
    },
    revisionRounds: {
      ms: "4 kali suntingan berperingkat sebelum penyerahan",
      en: "4 consolidated revision rounds before launch",
    },
    deliverables: {
      ms: "Pakej laman web bespoke lengkap dengan fail sumber kod",
      en: "Complete bespoke website build with source code bundle",
    },
    scopeBoundary: {
      ms: "Laman web maklumat & profil berjenama. Fungsi aplikasi backend dinilai di bawah seksyen Sistem & Aplikasi.",
      en: "Informational brand website. Backend application modules are evaluated under Systems & Applications.",
    },
    addOnCompatibility: ["extra_page", "extra_language", "domain_help"],
    enquiryMode: "discuss_scope",
    featured: false,
    sortOrder: 4,
  },

  // -------------------------------------------------------------
  // GRAPHIC DESIGN: PATHWAY A — DESIGN EXPRESS
  // -------------------------------------------------------------
  {
    id: "e1-single-image",
    category: "design_express",
    title: {
      ms: "Express E1: Single Image",
      en: "Express E1: Single Image",
    },
    subtitle: {
      ms: "Suntingan pantas, mudah dan mesra bajet untuk 1 imej.",
      en: "Fast, budget-friendly edit for a single image.",
    },
    price: 5,
    currency: "RM",
    priceUnit: {
      ms: "/ satu imej",
      en: "/ single image",
    },
    priceType: "starting_from",
    priceStatus: "owner_anchor",
    statusBadge: {
      ms: "Harga Asas Rasmi",
      en: "Official Entry Anchor",
    },
    suitableFor: {
      ms: "Tukar teks/harga pada poster sedia ada, buang latar belakang (cutout), tukar warna elemen, tambah logo/QR, atau poster promosi ringkas.",
      en: "Change text/prices on existing artwork, background cutout, recolour element, insert logo/QR, or simple promo image.",
    },
    includedItems: {
      ms: [
        "1 imej digital siap",
        "Tukar teks, nama, nombor telefon atau harga",
        "Buang latar belakang objek/produk (cutout ringkas)",
        "Kemas kini saiz / format imej untuk WhatsApp/media sosial",
        "Masukkan logo atau QR sedia ada yang dibekalkan",
      ],
      en: [
        "1 finished digital image",
        "Update text, name, phone number, or prices",
        "Clean background removal (standard cutout)",
        "Resize / reformat for WhatsApp or social media",
        "Insert supplied logo or QR code cleanly",
      ],
    },
    excludedItems: {
      ms: [
        "Lukisan vektor manual terperinci",
        "Fail editable (.ai, .psd bertingkat)",
        "Penyediaan percetakan format besar kompleks",
      ],
      en: [
        "Complex manual vector illustration",
        "Layered editable source files (.ai, .psd)",
        "Large-format commercial print press preparation",
      ],
    },
    revisionRounds: {
      ms: "2 kali suntingan kecil dalam skop asal",
      en: "2 minor revision rounds within original brief",
    },
    deliverables: {
      ms: "Fail PNG atau JPG resolusi tinggi sedia guna",
      en: "High-resolution flattened PNG or JPG ready to use",
    },
    scopeBoundary: {
      ms: "Khas untuk suntingan ringkas. Permintaan yang memerlukan susun atur teliti dari sifar dinilai di bawah Design Custom.",
      en: "Designed for focused small edits. Detailed zero-base layouts are assessed under Design Custom.",
    },
    addOnCompatibility: ["express_revision"],
    enquiryMode: "direct",
    featured: true,
    sortOrder: 1,
  },
  {
    id: "e2-duo-image",
    category: "design_express",
    title: {
      ms: "Express E2: Duo Bundle",
      en: "Express E2: Duo Bundle",
    },
    subtitle: {
      ms: "Pakej 2 keping gambar ringkas serentak dengan penjimatan.",
      en: "Package for 2 simple images submitted together.",
    },
    price: 8,
    currency: "RM",
    priceUnit: {
      ms: "/ 2 imej ringkas",
      en: "/ 2 simple images",
    },
    priceType: "fixed",
    priceStatus: "provisional",
    statusBadge: {
      ms: "Pakej 2 Imej",
      en: "2-Image Bundle",
    },
    suitableFor: {
      ms: "2 suntingan ringkas yang dihantar serentak (contoh: 2 menu harian, 2 variasi harga, atau 2 produk untuk buang background).",
      en: "2 simple edits submitted together (e.g. 2 daily menu slides, 2 price variations, or 2 product cutouts).",
    },
    includedItems: {
      ms: [
        "2 imej digital siap",
        "Suntingan mengikut brief ringkas seragam",
        "Eksport dalam format PNG atau JPG",
        "Semakan teks & penempatan logo",
      ],
      en: [
        "2 finished digital images",
        "Edits based on shared simple brief",
        "Exported in ready-to-share PNG or JPG",
        "Text alignment & logo placement review",
      ],
    },
    excludedItems: {
      ms: [
        "Fail editable bertingkat",
        "Reka bentuk logo dari sifar",
      ],
      en: [
        "Editable layered source files",
        "Logo creation from scratch",
      ],
    },
    revisionRounds: {
      ms: "3 kali suntingan kecil terkumpul bagi kedua-dua imej",
      en: "3 consolidated minor revision rounds across both images",
    },
    deliverables: {
      ms: "Fail PNG/JPG sedia siar",
      en: "Ready-to-post PNG/JPG files",
    },
    scopeBoundary: {
      ms: "Terpakai untuk 2 imej ringkas serentak. Imej ketiga dikira sebagai tambahan.",
      en: "Applies to 2 simple images at once. Additional images calculated sequentially.",
    },
    addOnCompatibility: ["express_revision"],
    enquiryMode: "direct",
    featured: false,
    sortOrder: 2,
  },

  // -------------------------------------------------------------
  // GRAPHIC DESIGN: PATHWAY B — DESIGN CUSTOM
  // -------------------------------------------------------------
  {
    id: "c1-custom-poster",
    category: "design_custom",
    title: {
      ms: "Custom Poster / Social Artwork",
      en: "Custom Poster / Social Artwork",
    },
    subtitle: {
      ms: "Reka bentuk visual khas dengan tipografi dan gubahan tersusun.",
      en: "Bespoke composition with refined typography and layout.",
    },
    price: 35,
    currency: "RM",
    priceUnit: {
      ms: "/ satu karya rekaan",
      en: "/ single artwork",
    },
    priceType: "starting_from",
    priceStatus: "provisional",
    statusBadge: {
      ms: "Anggaran Awal",
      en: "Provisional Proposal",
    },
    suitableFor: {
      ms: "Poster promosi acara, poster jualan rasmi, visual iklan media sosial, atau hebahan khas yang memerlukan imej premium.",
      en: "Event posters, campaign announcements, social ad visuals, or distinctive sales artwork.",
    },
    includedItems: {
      ms: [
        "1 gubahan reka bentuk khas mengikut identiti anda",
        "1 saiz dimensi dipersetujui (contoh: 1:1, 4:5 atau A4)",
        "Susunan tipografi & hierarki teks profesional",
        "Penyelarasan palet warna jenama",
        "Fail resolusi tinggi PNG/JPG dan PDF paparan",
      ],
      en: [
        "1 bespoke layout aligned with brand tone",
        "1 agreed dimensions format (e.g. 1:1, 4:5, or A4)",
        "Refined typography hierarchy and spacing",
        "Harmonised brand colour palette",
        "High-resolution PNG/JPG and digital viewing PDF",
      ],
    },
    excludedItems: {
      ms: [
        "Fail editable AI/PSD (boleh dibincangkan dalam sebut harga)",
        "Kos percetakan fizikal",
      ],
      en: [
        "Layered editable source files (confirmable in quote)",
        "Physical printing costs",
      ],
    },
    revisionRounds: {
      ms: "3 kali suntingan berperingkat",
      en: "3 structured revision rounds",
    },
    deliverables: {
      ms: "Fail cetak asas / paparan digital resolusi tinggi",
      en: "High-resolution digital presentation & basic print-ready file",
    },
    scopeBoundary: {
      ms: "Untuk satu rekaan dalam satu saiz. Variasi saiz tambahan dinilai mengikut keperluan.",
      en: "Covers one artwork in one format size. Additional size adaptations scoped separately.",
    },
    addOnCompatibility: ["print_prep", "source_file"],
    enquiryMode: "discuss_scope",
    featured: true,
    sortOrder: 1,
  },
  {
    id: "c2-banner-bunting-menu",
    category: "design_custom",
    title: {
      ms: "Banner / Bunting / Menu",
      en: "Banner / Bunting / Menu",
    },
    subtitle: {
      ms: "Susun atur format besar atau menu gerai/kafe yang jelas dibaca.",
      en: "Large format banner or clear, readable cafe/stall menu layout.",
    },
    price: 49,
    currency: "RM",
    priceUnit: {
      ms: "/ rekaan satu muka",
      en: "/ single-page layout",
    },
    priceType: "starting_from",
    priceStatus: "provisional",
    statusBadge: {
      ms: "Anggaran Awal",
      en: "Provisional Proposal",
    },
    suitableFor: {
      ms: "Bunting promosi 2x5 / 2x6 kaki, banner kedai, atau satu muka surat menu makanan yang kemas dan berstruktur.",
      en: "2x5 / 2x6 ft buntings, storefront banners, or a single-page structured food/beverage menu.",
    },
    includedItems: {
      ms: [
        "1 gubahan format mengikut ukuran tepat (kaki atau mm)",
        "Susunan menu mengikut kategori dan harga jelas",
        "Penetapan bleed & margin selamat asas untuk cetakan",
        "Eksport resolusi tinggi sedia dihantar ke kilang cetak",
      ],
      en: [
        "1 format layout tailored to exact dimensions (feet or mm)",
        "Categorised menu hierarchy with clean pricing tables",
        "Safe zone & basic bleed setup for print houses",
        "High-resolution print-ready export",
      ],
    },
    excludedItems: {
      ms: [
        "Kos percetakan fizikal & penghantaran banner",
        "Buku menu berbilang muka surat tebal (sebut harga kustom)",
      ],
      en: [
        "Physical printing and shipping expenses",
        "Multi-page bound booklet menus (custom quote required)",
      ],
    },
    revisionRounds: {
      ms: "3 kali suntingan berperingkat",
      en: "3 structured revision rounds",
    },
    deliverables: {
      ms: "Fail PDF Print-Ready & JPG resolusi tinggi",
      en: "Print-ready PDF & high-resolution JPG",
    },
    scopeBoundary: {
      ms: "Harga merangkumi reka bentuk 1 muka surat menu atau 1 banner/bunting. Percetakan tidak disertakan.",
      en: "Covers design for 1 single-page menu or 1 banner/bunting. Physical printing not included.",
    },
    addOnCompatibility: ["print_prep", "source_file"],
    enquiryMode: "discuss_scope",
    featured: false,
    sortOrder: 2,
  },
  {
    id: "c3-social-mini-set",
    category: "design_custom",
    title: {
      ms: "Social Mini Set (3 Karya)",
      en: "Social Mini Set (3 Artworks)",
    },
    subtitle: {
      ms: "Set 3 visual promosi berpadu dengan tema visual yang selari.",
      en: "Coordinated set of 3 promotional visuals with unified art direction.",
    },
    price: 79,
    currency: "RM",
    priceUnit: {
      ms: "/ set 3 karya serasi",
      en: "/ set of 3 coordinated visuals",
    },
    priceType: "starting_from",
    priceStatus: "provisional",
    statusBadge: {
      ms: "Cadangan Jimat",
      en: "Value Bundle",
    },
    suitableFor: {
      ms: "Kempen pelancaran, promosi mingguan, atau 3 rekaan media sosial yang menggunakan gaya visual yang sama.",
      en: "Campaign launches, weekly promotions, or 3 social posts sharing consistent aesthetic branding.",
    },
    includedItems: {
      ms: [
        "3 visual reka bentuk khas bertema seragam",
        "Dimensi dioptimumkan untuk Instagram/Facebook/WhatsApp",
        "Penulisan tajuk & susunan grafik teratur",
        "Eksport PNG/JPG resolusi tinggi",
      ],
      en: [
        "3 distinct artworks sharing a cohesive brand theme",
        "Optimised aspect ratios for Instagram/Facebook/WhatsApp",
        "Structured headline and graphic hierarchy",
        "High-resolution PNG/JPG exports",
      ],
    },
    excludedItems: {
      ms: [
        "3 konsep kempen yang berbeza sepenuhnya (perlu sebut harga berasingan)",
        "Pengurusan muat naik akaun media sosial",
      ],
      en: [
        "3 completely unrelated campaign themes (scoped separately)",
        "Social media account management and scheduling",
      ],
    },
    revisionRounds: {
      ms: "3 kali suntingan terkumpul bagi keseluruhan set",
      en: "3 consolidated revision rounds across the set",
    },
    deliverables: {
      ms: "Set 3 fail imej sedia kongsi",
      en: "Set of 3 ready-to-share image assets",
    },
    scopeBoundary: {
      ms: "Khas untuk 3 visual dalam satu tema kempen yang sama.",
      en: "Applies to 3 artworks within a single coherent campaign theme.",
    },
    addOnCompatibility: ["source_file"],
    enquiryMode: "discuss_scope",
    featured: false,
    sortOrder: 3,
  },
  {
    id: "c4-logo-starter",
    category: "design_custom",
    title: {
      ms: "Logo Starter",
      en: "Logo Starter",
    },
    subtitle: {
      ms: "Tanda jenama kemas & praktikal untuk memulakan perniagaan.",
      en: "Clean, practical brand mark to launch your venture.",
    },
    price: 99,
    currency: "RM",
    priceUnit: {
      ms: "/ konsep logo terpilih",
      en: "/ selected logo concept",
    },
    priceType: "starting_from",
    priceStatus: "provisional",
    statusBadge: {
      ms: "Anggaran Awal",
      en: "Provisional Proposal",
    },
    suitableFor: {
      ms: "Peniaga kecil, jenama makanan, peniaga online yang memerlukan logo jelas untuk profil dan pelekat.",
      en: "Small business owners, food brands, online shops needing a recognisable logo for profiles and stickers.",
    },
    includedItems: {
      ms: [
        "1 arah konsep rekaan logo yang dibincangkan",
        "Versi warna utama, versi latar gelap & versi latar cerah",
        "Fail PNG telus (transparent) & JPG resolusi tinggi",
        "Cadangan kod warna jenama (HEX / RGB)",
      ],
      en: [
        "1 agreed custom logo concept direction",
        "Primary colour version, dark-bg version, and light-bg version",
        "Transparent PNG and high-res JPG files",
        "Recommended brand colour codes (HEX / RGB)",
      ],
    },
    excludedItems: {
      ms: [
        "Pendaftaran tanda dagang rasmi (trademark registration)",
        "Buku garis panduan jenama korporat 50 muka surat",
        "Fon eksklusif proprietari yang perlu dilesenkan khas",
      ],
      en: [
        "Official legal trademark filing",
        "50-page enterprise brand guidelines book",
        "Proprietary fonts requiring custom commercial licensing",
      ],
    },
    revisionRounds: {
      ms: "3 kali pusingan semakan draf konsep",
      en: "3 refinement rounds on the selected direction",
    },
    deliverables: {
      ms: "Pakej fail logo (PNG telus, JPG, PDF/SVG vektor asas mengikut kaedah pembinaan)",
      en: "Logo asset pack (Transparent PNG, JPG, basic PDF/SVG vector based on construction)",
    },
    scopeBoundary: {
      ms: "Untuk 1 konsep logo permulaan. Identiti korporat menyeluruh dinilai secara kustom.",
      en: "For 1 starter logo direction. Comprehensive corporate identities quoted on demand.",
    },
    addOnCompatibility: ["source_file"],
    enquiryMode: "discuss_scope",
    featured: false,
    sortOrder: 4,
  },
  {
    id: "c5-label-packaging",
    category: "design_custom",
    title: {
      ms: "Label & Packaging",
      en: "Label & Packaging",
    },
    subtitle: {
      ms: "Reka bentuk pelekat botol, kotak ringkas atau beg produk.",
      en: "Sticker label, simple product box, or pouch packaging artwork.",
    },
    price: 149,
    currency: "RM",
    priceUnit: {
      ms: "/ satu susun atur label",
      en: "/ single label layout",
    },
    priceType: "starting_from",
    priceStatus: "provisional",
    statusBadge: {
      ms: "Anggaran Awal",
      en: "Provisional Proposal",
    },
    suitableFor: {
      ms: "Pelekat produk makanan, botol kosmetik/wangian, pek kopi, atau label bungkusan fizikal.",
      en: "Food product stickers, cosmetic/perfume bottles, coffee pouches, or merchandise packaging.",
    },
    includedItems: {
      ms: [
        "1 susun atur label mengikut ukuran die-line tepat yang dibekalkan",
        "Susunan hierarki nama produk, ramuan, dan maklumat wajib",
        "Penempatan barcode/QR dan elemen visual jenama",
        "Fail PDF siap cetak mengikut saiz dan margin kilang",
      ],
      en: [
        "1 label layout tailored to supplied exact dieline specs",
        "Structured product naming, ingredients, and regulatory info",
        "Barcode/QR and brand asset placement",
        "Print-ready PDF with exact trim and bleed requirements",
      ],
    },
    excludedItems: {
      ms: [
        "Pengilangan / percetakan fizikal pelekat",
        "Reka bentuk struktur kotak fizikal dari sifar",
        "Pemeriksaan undang-undang pematuhan label makanan antarabangsa",
      ],
      en: [
        "Physical manufacturing and sticker printing",
        "Structural die-line engineering from scratch",
        "International legal food compliance audits",
      ],
    },
    revisionRounds: {
      ms: "3 kali pusingan semakan",
      en: "3 structured revision rounds",
    },
    deliverables: {
      ms: "Fail PDF Print-Ready & visual mockup pratonton 2D",
      en: "Print-ready PDF & 2D digital preview mockup",
    },
    scopeBoundary: {
      ms: "Untuk satu variasi saiz produk. Tambahan SKU varian dinilai berasingan.",
      en: "Covers 1 SKU product size variation. Multi-flavour/SKU expansions quoted separately.",
    },
    addOnCompatibility: ["print_prep", "source_file"],
    enquiryMode: "discuss_scope",
    featured: false,
    sortOrder: 5,
  },

  // -------------------------------------------------------------
  // WEBSITE REPAIR & MAINTENANCE
  // -------------------------------------------------------------
  {
    id: "r1-content-layout-fix",
    category: "repair",
    title: {
      ms: "Pembaikan Susun Atur & Kandungan",
      en: "Content & Layout Fix",
    },
    subtitle: {
      ms: "Baiki teks, gambar senget, butang lari, atau isu paparan kecil.",
      en: "Fix misalignment, text, distorted images, or layout quirks.",
    },
    price: 29,
    currency: "RM",
    priceUnit: {
      ms: "/ anggaran bermula",
      en: "/ starting estimate",
    },
    priceType: "starting_from",
    priceStatus: "provisional",
    statusBadge: {
      ms: "Anggaran Selepas Semakan",
      en: "Subject to Assessment",
    },
    suitableFor: {
      ms: "Website sedia ada yang ada isu susun atur kecil pada telefon atau teks yang perlu dikemas kini segera.",
      en: "Existing sites with minor mobile display quirks or content updates needed promptly.",
    },
    includedItems: {
      ms: [
        "Semakan punca isu paparan",
        "Pembetulan kod CSS / teks / saiz imej",
        "Ujian pada resolusi mobile & desktop",
      ],
      en: [
        "Inspection of display issue cause",
        "CSS / copy / image dimension rectification",
        "Testing across mobile & desktop resolutions",
      ],
    },
    excludedItems: {
      ms: ["Rombakan kod menyeluruh atau bina semula struktur asas"],
      en: ["Full codebase overhaul or structural rebuild"],
    },
    revisionRounds: {
      ms: "1 semakan pengesahan selepas pembaikan",
      en: "1 verification review after patch",
    },
    deliverables: {
      ms: "Kod dibaiki & laporan ringkas pembaikan",
      en: "Patched live code & concise summary",
    },
    scopeBoundary: {
      ms: "Harga akhir bergantung kepada punca masalah sebenar selepas pemeriksaan kod sumber.",
      en: "Final price depends on root cause confirmed after inspecting source files.",
    },
    addOnCompatibility: [],
    enquiryMode: "discuss_scope",
    featured: false,
    sortOrder: 1,
  },
  {
    id: "r2-domain-ssl-technical",
    category: "repair",
    title: {
      ms: "Domain, SSL & Teknikal",
      en: "Domain, SSL & Technical Setup",
    },
    subtitle: {
      ms: "Selesaikan isu sambungan nama domain, HTTPS 'Not Secure' dan DNS.",
      en: "Resolve domain pointing, HTTPS 'Not Secure' errors and DNS issues.",
    },
    price: 149,
    currency: "RM",
    priceUnit: {
      ms: "/ satu isu sambungan",
      en: "/ single setup task",
    },
    priceType: "starting_from",
    priceStatus: "provisional",
    statusBadge: {
      ms: "Anggaran Awal",
      en: "Provisional Proposal",
    },
    suitableFor: {
      ms: "Laman web yang tidak boleh dibuka melalui domain sendiri atau menunjukkan amaran sijil SSL tamat.",
      en: "Websites failing to resolve on custom domain or showing SSL certificate expired warnings.",
    },
    includedItems: {
      ms: [
        "Konfigurasi DNS rekod (A, CNAME, TXT)",
        "Pengaktifan sijil keselamatan SSL/HTTPS",
        "Ujian laluan trafik & pengesahan pelayan",
      ],
      en: [
        "DNS records configuration (A, CNAME, TXT)",
        "SSL/HTTPS certificate provisioning & activation",
        "Traffic propagation test and server check",
      ],
    },
    excludedItems: {
      ms: ["Yuran pembaharuan domain tahunan kepada registrar rasmi"],
      en: ["Annual domain renewal charges owed to official registrars"],
    },
    revisionRounds: {
      ms: "Ujian pengesahan sehingga sambungan disahkan selamat",
      en: "Verification tests until connection is authenticated securely",
    },
    deliverables: {
      ms: "Domain aktif dengan ikon mangga hijau/selamat (HTTPS)",
      en: "Active domain with secure padlock status (HTTPS)",
    },
    scopeBoundary: {
      ms: "Memerlukan akses selamat ke akaun registrar/hosting pelanggan.",
      en: "Requires secure access credentials to client's registrar/hosting account.",
    },
    addOnCompatibility: [],
    enquiryMode: "discuss_scope",
    featured: false,
    sortOrder: 2,
  },

  // -------------------------------------------------------------
  // CUSTOM SYSTEMS & APPLICATIONS
  // -------------------------------------------------------------
  {
    id: "s1-admin-panel",
    category: "systems",
    title: {
      ms: "Sistem Admin & Pangkalan Data",
      en: "Admin Panel & Database System",
    },
    subtitle: {
      ms: "Papan pemuka kustom untuk urus data pelanggan, tempahan, atau borang.",
      en: "Custom dashboard to manage client records, bookings, or inquiries.",
    },
    price: 499,
    currency: "RM",
    priceUnit: {
      ms: "/ anggaran modul asas",
      en: "/ base module estimate",
    },
    priceType: "starting_from",
    priceStatus: "provisional",
    statusBadge: {
      ms: "Anggaran Modul Asas",
      en: "Base Module Estimate",
    },
    suitableFor: {
      ms: "Perniagaan yang mahu meninggalkan rekod kertas/spreadsheet berserabut dan beralih ke portal web tersusun.",
      en: "Businesses seeking to replace messy spreadsheets with an organised, authenticated web portal.",
    },
    includedItems: {
      ms: [
        "Log masuk keselamatan kata laluan untuk staf/admin",
        "Paparan senarai data (CRUD - Tambah, Lihat, Edit, Padam)",
        "Pencarian & penapisan data pantas",
        "Eksport data asas ke Excel / CSV",
        "Sambungan pangkalan data awan berprestasi tinggi",
      ],
      en: [
        "Password-protected staff/admin authentication",
        "Data record management (CRUD - Create, Read, Update, Delete)",
        "Fast search and status filtering",
        "Basic export to Excel / CSV",
        "High-performance cloud database connection",
      ],
    },
    excludedItems: {
      ms: [
        "Struktur multi-branch / multi-tenant berskala mega",
        "Kos pelayan pangkalan data bulanan/tahunan pihak ketiga jika melebihi kuota percuma",
      ],
      en: [
        "Complex enterprise multi-tenant architecture",
        "Third-party database hosting subscriptions exceeding free tiers",
      ],
    },
    revisionRounds: {
      ms: "3 sesi semakan aliran kerja bersama pelanggan",
      en: "3 workflow refinement milestones with the client",
    },
    deliverables: {
      ms: "Sistem web aktif beserta panduan penggunaan pentadbir",
      en: "Deployed web application with administrator usage guide",
    },
    scopeBoundary: {
      ms: "Modul asas rekod perniagaan. Fungsi automasi lanjutan atau integrasi perkakasan IoT dinilai secara sebut harga khas.",
      en: "Base business record system. Advanced automation or hardware integrations quoted separately.",
    },
    addOnCompatibility: [],
    enquiryMode: "discuss_scope",
    featured: true,
    sortOrder: 1,
  },
  {
    id: "s2-android-sync",
    category: "systems",
    title: {
      ms: "Aplikasi Android & Penyegerakan Web",
      en: "Android App & Web Sync",
    },
    subtitle: {
      ms: "Aplikasi Android kustom yang bersambung terus dengan database web anda.",
      en: "Custom Android companion app seamlessly synced with your web database.",
    },
    price: 1999,
    currency: "RM",
    priceUnit: {
      ms: "/ anggaran projek kustom",
      en: "/ starting project estimate",
    },
    priceType: "starting_from",
    priceStatus: "quote_required",
    statusBadge: {
      ms: "Perlu Sebut Harga",
      en: "Quote Required",
    },
    suitableFor: {
      ms: "Operasi lapangan, imbasan kod bar, pemandu penghantaran, atau pengurusan inventori terus dari telefon Android.",
      en: "Field operations, barcode scanning, delivery tracking, or inventory updates directly from an Android device.",
    },
    includedItems: {
      ms: [
        "Aplikasi Android binaan kustom (APK)",
        "Penyegerakan masa nyata dengan sistem pangkalan data web",
        "Antara muka kemas dioptimumkan untuk penggunaan pantas di telefon",
        "Fungsi luar talian asas atau imbasan kamera jika dipersetujui",
      ],
      en: [
        "Custom native-feel Android APK build",
        "Real-time database sync with web infrastructure",
        "Clean mobile interface built for fast daily operations",
        "Camera scanning / basic offline cache as agreed in scope",
      ],
    },
    excludedItems: {
      ms: [
        "Yuran pendaftaran akaun Google Play Console developer ($25 USD sekali seumur hidup)",
        "Jaminan kelulusan dasar privasi pihak ketiga Google Play",
      ],
      en: [
        "Google Play Console one-time developer registration fee ($25 USD)",
        "Third-party store policy compliance guarantees",
      ],
    },
    revisionRounds: {
      ms: "Mengikut fasa draf & pengujian bersama pelanggan",
      en: "Structured phased testing milestones",
    },
    deliverables: {
      ms: "Pakej fail pemasangan APK siap diuji & dokumentasi sistem",
      en: "Tested installable APK package and system architecture documentation",
    },
    scopeBoundary: {
      ms: "Skop disahkan secara rasmi dalam sebut harga teknikal mengikut senarai ciri yang dipersetujui.",
      en: "Scope formally specified in detailed technical proposal based on approved feature matrix.",
    },
    addOnCompatibility: [],
    enquiryMode: "quote_required",
    featured: false,
    sortOrder: 2,
  },
];
