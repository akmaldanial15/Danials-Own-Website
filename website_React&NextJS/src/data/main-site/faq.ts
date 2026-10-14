export interface FaqItem {
  id: string;
  category: "all" | "general" | "website" | "design" | "systems_repair";
  question: {
    ms: string;
    en: string;
  };
  answer: {
    ms: string;
    en: string;
  };
}

export const faqList: FaqItem[] = [
  {
    id: "landing-rm79-scope",
    category: "website",
    question: {
      ms: "Apa yang sebenarnya termasuk dalam Landing Page RM79?",
      en: "What is actually included in the RM79 Landing Page package?",
    },
    answer: {
      ms: "Pakej RM79 merangkumi satu halaman web padat (sehingga 4 seksyen), susun atur responsif pada telefon dan komputer, kemasukan teks serta imej asas yang anda bekalkan, butang perhubungan terus ke WhatsApp, dan 2 kali pusingan suntingan kecil sebelum penyerahan. Ia tidak termasuk pangkalan data, sistem log masuk, kedai online kompleks, atau domain/hosting tahunan (yang diurus secara berasingan mengikut keperluan anda).",
      en: "The RM79 package includes a single compact page (up to 4 sections), responsive layout for mobile and desktop, insertion of client-supplied text and images, direct WhatsApp CTA link, and 2 rounds of minor revisions before hand-off. It does not include custom databases, user logins, e-commerce checkouts, or annual domain/hosting fees (scoped separately according to your needs).",
    },
  },
  {
    id: "two-revisions-meaning",
    category: "general",
    question: {
      ms: "Apa maksud 2 kali suntingan percuma?",
      en: "What does '2 minor revision rounds included' mean?",
    },
    answer: {
      ms: "Satu pusingan suntingan bermaksud satu senarai perubahan kecil yang munasabah yang anda kumpulkan sekaligus dalam skop asal — seperti menukar perkataan, melaraskan saiz teks, membetulkan nombor telefon, atau menukar gambar produk. Ia tidak merangkumi rombakan konsep reka bentuk sepenuhnya dari awal, penambahan halaman baharu, atau fungsi sistem yang berbeza daripada brief yang telah dipersetujui.",
      en: "A revision round refers to one consolidated list of reasonable minor adjustments within the agreed original brief — such as correcting wording, tuning font sizes, updating contact details, or swapping a product photo. It does not cover completely discarding the design for a new concept, adding extra pages, or introducing new functionality outside the approved scope.",
    },
  },
  {
    id: "express-vs-custom",
    category: "design",
    question: {
      ms: "Apa perbezaan antara Design Express dan Design Custom?",
      en: "What is the difference between Design Express and Design Custom?",
    },
    answer: {
      ms: "Design Express (bermula RM5/gambar) khusus untuk kerja suntingan pantas: buang latar belakang, tukar teks/harga pada poster sedia ada, masukkan logo, atau ubah saiz gambar untuk media sosial. Design Custom (bermula RM35) pula adalah gubahan reka bentuk teliti dari sifar mengikut identiti jenama anda dengan susunan tipografi eksklusif, penalaan hierarki visual, saiz cetakan khusus, serta semakan yang lebih menyeluruh.",
      en: "Design Express (from RM5/image) is tailored for quick, narrow edits: removing backgrounds, updating copy/prices on existing graphics, inserting logos, or resizing for social media. Design Custom (from RM35) is bespoke composition built from the ground up to match your brand identity with custom typography hierarchy, specialized print sizing, and more comprehensive refinement rounds.",
    },
  },
  {
    id: "is-all-design-rm5",
    category: "design",
    question: {
      ms: "Adakah semua jenis reka bentuk boleh dibuat dengan harga RM5?",
      en: "Can any graphic design request be done for RM5?",
    },
    answer: {
      ms: "Tidak. RM5 ialah harga asas untuk satu suntingan imej ringkas yang terhad skopnya (seperti membuang latar belakang produk atau mengemas kini teks ringkas). Permintaan yang memerlukan susun atur baru dari sifar, lukisan vektor terperinci, poster pelbagai elemen, atau penyediaan percetakan format besar akan dinilai secara adil di bawah Design Custom.",
      en: "No. RM5 is the starter anchor for a single, focused image edit with a narrow brief (such as a clean product cutout or simple text change). Requests requiring full zero-base composition, intricate vector work, multi-element posters, or large-format print setups are fairly evaluated under Design Custom.",
    },
  },
  {
    id: "editable-source-files",
    category: "design",
    question: {
      ms: "Adakah saya akan menerima fail editable (Photoshop/Illustrator)?",
      en: "Will I receive editable source files (Photoshop/Illustrator)?",
    },
    answer: {
      ms: "Pakej Express membekalkan fail digital siap sedia berkualiti tinggi (PNG atau JPG). Untuk pakej Custom, penyediaan fail editable bertingkat (seperti AI atau PSD) bergantung kepada kaedah pembinaan rekaan dan boleh disahkan serta dipersetujui dalam sebut harga awal.",
      en: "Express packages provide high-resolution flattened digital outputs (PNG or JPG). For Custom packages, availability of layered editable source files (such as AI or PSD) depends on construction methods and can be explicitly confirmed in the preliminary quotation.",
    },
  },
  {
    id: "print-ready-prep",
    category: "design",
    question: {
      ms: "Bolehkah rekaan disediakan untuk percetakan fizikal?",
      en: "Can the design be formatted for physical printing?",
    },
    answer: {
      ms: "Ya. Untuk tempahan Custom, anda boleh kongsikan ukuran tepat (kaki atau mm), keperluan bleed, dan spesifikasi kedai cetak anda. Kami akan sediakan fail PDF resolusi tinggi (300 DPI) mengikut margin yang selamat. Kos reka bentuk dan kos cetakan fizikal di kilang cetak adalah dua perkara berasingan.",
      en: "Yes. For Custom orders, simply provide the exact dimensions (feet or mm), bleed guidelines, and your printer's specifications. We prepare high-resolution (300 DPI) PDFs with safe margins. Note that design fees and physical print production charges are separate.",
    },
  },
  {
    id: "domain-hosting-included",
    category: "website",
    question: {
      ms: "Adakah harga website sudah termasuk pendaftaran domain dan hosting?",
      en: "Does the website build price include domain registration and hosting?",
    },
    answer: {
      ms: "Harga yang dipaparkan ialah yuran perkhidmatan pembangunan dan reka bentuk laman web. Kos langganan nama domain (.com/.my) dan pelayan hosting diuruskan secara telus mengikut pilihan anda — sama ada menggunakan akaun sedia ada anda atau kami bantu cadangkan pelan yang sesuai tanpa caj tersembunyi.",
      en: "The stated prices reflect design and technical web build services. Custom domain names (.com/.my) and server hosting fees are managed transparently based on your preferences — whether utilizing your existing accounts or guided towards an appropriate tier without hidden markups.",
    },
  },
  {
    id: "adding-backend-systems",
    category: "systems_repair",
    question: {
      ms: "Bolehkah saya tambah sistem admin, tempahan atau pembayaran kemudian?",
      en: "Can I add an admin panel, booking workflow, or payment gateway later?",
    },
    answer: {
      ms: "Sudah tentu. Anda boleh memulakan kehadiran digital dengan landing page asas terlebih dahulu, kemudian menaik taraf laman web anda kepada sistem perniagaan penuh (seperti portal pentadbir, pangkalan data pelanggan, atau aplikasi Android) apabila operasi bisnes anda semakin berkembang.",
      en: "Certainly. You can establish your digital presence with a simple landing page first, then upgrade your site with full business systems (such as admin portals, customer databases, or Android companion apps) as your operations expand.",
    },
  },
  {
    id: "project-timeline",
    category: "general",
    question: {
      ms: "Berapa lama masa yang diambil untuk menyiapkan projek?",
      en: "How long does a project typically take to complete?",
    },
    answer: {
      ms: "Tempoh penyiapan bergantung kepada skop pakej, kelengkapan bahan (teks & gambar) yang anda bekalkan, serta giliran projek semasa. Suntingan Express ringkas biasanya disiapkan dengan pantas, manakala landing page dan sistem kustom dijadualkan mengikut fasa semakan yang dipersetujui bersama.",
      en: "Delivery turnaround depends on package scope, completeness of supplied assets (copy & images), and current project queue. Simple Express edits are processed quickly, whereas landing pages and custom systems follow structured milestones agreed upon before kickoff.",
    },
  },
  {
    id: "payment-process",
    category: "general",
    question: {
      ms: "Bagaimanakah kaedah dan jadual pembayaran dibuat?",
      en: "How is payment structured and settled?",
    },
    answer: {
      ms: "Semua anggaran harga disahkan terlebih dahulu melalui sebut harga ringkas yang jelas sebelum kerja bermula. Untuk projek perkhidmatan membina laman web atau sistem, pembayaran berperingkat (deposit permulaan dan baki sebelum penyerahan akhir) dipersetujui bersama demi ketelusan kedua-dua pihak.",
      en: "All cost estimates are confirmed via a clear written summary before any work begins. For website and system builds, staged milestones (initial deposit and final balance upon pre-launch verification) are mutually agreed for complete transparency.",
    },
  },
  {
    id: "website-repairs",
    category: "systems_repair",
    question: {
      ms: "Bolehkah anda baiki laman web saya yang sedia ada bermasalah?",
      en: "Can you fix or troubleshoot my existing broken website?",
    },
    answer: {
      ms: "Boleh. Anda hanya perlu kongsikan pautan website dan terangkan masalah yang dihadapi (seperti paparan mobile rosak, butang tidak berfungsi, atau amaran SSL). Kami akan buat semakan ringkas kod sumber dan memberikan anggaran pembaikan mengikut punca sebenar masalah.",
      en: "Yes. Simply share your website link and describe the issue (such as broken mobile layout, malfunctioning forms, or SSL warnings). We will inspect the root cause and provide an accurate repair estimate.",
    },
  },
  {
    id: "not-sure-which-package",
    category: "general",
    question: {
      ms: "Saya belum pasti pakej mana yang paling sesuai dengan bisnes saya.",
      en: "I am not sure which service or package fits my business best.",
    },
    answer: {
      ms: "Tidak mengapa! Anda boleh terus klik butang 'Bincang di WhatsApp' atau gunakan kalkulator anggaran kami. Terangkan secara santai apa yang anda ingin capai, dan kami akan bantu cadangkan pilihan yang paling menjimatkan dan berbaloi mengikut bajet anda.",
      en: "No problem at all! Simply tap 'Discuss on WhatsApp' or use our dynamic estimator. Tell us what you want to achieve, and we will recommend the most cost-effective solution tailored to your budget.",
    },
  },
];
