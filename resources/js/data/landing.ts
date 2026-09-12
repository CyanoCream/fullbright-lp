/* ============================================================
   Full Bright Indonesia landing page content.
   Copy lives here so section components only describe layout.
   Assets are served from public/assets/.
   ============================================================ */

export type PricingMode = 'self' | 'tutor';

export type LmsFeature = {
    no: string;
    label: string;
    worth: string;
    tutorOnly: boolean;
    title: string;
    description: string;
    image: string;
    points: string[];
};

export type AlumniTestimonial = {
    campus: string;
    headline: string;
    quote: string;
    photo: string;
    name: string;
    major: string;
};

export type PackageFeature = {
    label: string;
    /** Headline features are rendered extra bold. */
    bold: boolean;
    kind: 'included' | 'global' | 'bonus' | 'excluded';
};

export type FaqItem = {
    category: string;
    question: string;
    answer: string;
};

export type PackageKey = 'selfStudy' | 'starter' | 'bundling' | 'intermediate';

export type PricingPackage = {
    key: PackageKey;
    trackingName: string;
    eyebrow: string;
    name: string;
    subtitle?: string;
    targetScore: string;
    duration: string;
    minimumScore?: string;
    normalPrice: string;
    discountBadge: string;
    price: string;
    savingsNote?: string;
    ctaLabel: string;
    whatsappMessage: string;
    features: PackageFeature[];
};

export const WHATSAPP_NUMBER = '6285255499299';

/** Flash sale countdown restarts per visitor every 12 hours. */
export const FLASH_WINDOW_MS = 12 * 60 * 60 * 1000;

export const WA_SCREENSHOTS: { src: string; score: string }[] = [
    { src: '/assets/toefl1.webp', score: '547' },
    { src: '/assets/toefl2.webp', score: '543' },
    { src: '/assets/toefl3.webp', score: '563' },
    { src: '/assets/toefl4.webp', score: '560' },
    { src: '/assets/toefl5.webp', score: '507' },
    { src: '/assets/toefl6.webp', score: '513' },
    { src: '/assets/toefl7.webp', score: '537' },
    { src: '/assets/toefl9.webp', score: '560' },
];

export const GOOGLE_REVIEW_COUNT = 19;
export const googleReviewSrc = (i: number): string =>
    `/assets/Riview (${i + 1}).webp`;

export const FAQ_CATEGORIES: string[] = [
    'Belajar Mandiri (LMS)',
    'Metode & Efektivitas',
    'Dibimbing Tutor',
    'Sertifikat & Legalitas',
    'Pendaftaran & Pembayaran',
    'Jaminan & Garansi',
];

export const RETURN_POPUP_OPTIONS: {
    label: string;
    subtext: string;
    whatsappMessage: string;
}[] = [
    {
        label: 'Harganya masih terlalu mahal buatku',
        subtext: 'Ada yang ingin ditanyakan soal harga atau paket?',
        whatsappMessage:
            'Halo Admin Full Bright Indonesia. Saya mau konsultasi soal paket dan harga sebelum daftar.',
    },
    {
        label: 'Belum yakin bisa mencapai target TOEFL-ku',
        subtext: 'Mau tahu apakah program ini cocok untuk target skor kamu?',
        whatsappMessage:
            'Halo Admin Full Bright Indonesia. Saya mau konsultasi soal metode belajar dan hasil yang bisa dicapai sebelum daftar.',
    },
    {
        label: 'Belum yakin program ini cocok untuk kebutuhanku',
        subtext: 'Konsultasikan dulu apakah program ini cocok untukmu.',
        whatsappMessage:
            'Halo Admin Full Bright Indonesia. Saya mau konsultasi apakah program ini cocok dengan kebutuhan saya sebelum daftar.',
    },
    {
        label: 'Masih membandingkan dengan program lain',
        subtext: 'Masih membandingkan? Tanya tim kami tentang programnya.',
        whatsappMessage:
            'Halo Admin Full Bright Indonesia. Saya masih membandingkan dengan program lain, mau tanya-tanya dulu.',
    },
];

export const LEGAL_DOCUMENTS: string[] = [
    'SK Kemenkumham RI Nomor AHU-0055720-AH.0114 Tahun 2020',
    'SK Izin Operasional LKP 503/20177/LKP/DPM-PTSP/8/2024',
    'NPSN Nomor K9998700',
    'Bekerja sama dengan IIEF Jakarta',
];

export const FOOTER_NAV: { label: string; href: string }[] = [
    { label: 'Keunggulan', href: '#value' },
    { label: 'Testimoni', href: '#testimonials' },
    { label: 'Harga', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
];

export const ALUMNI_CAMPUS_LOGOS: { name: string; src: string }[] = [
    {
        name: 'Universitas Indonesia',
        src: 'https://www.monsoonsim.com/uploads/190972_f18baac4e23711d2723e0f822030a77919694fe0.png',
    },
    {
        name: 'Institut Teknologi Bandung',
        src: 'https://upload.wikimedia.org/wikipedia/id/9/95/Logo_Institut_Teknologi_Bandung.png',
    },
    {
        name: 'Universitas Gadjah Mada',
        src: 'https://iconlogovector.com/uploads/images/2024/11/lg-673f9e2f068ed-Universitas-Gadjah-Mada.webp',
    },
    {
        name: 'IPB University',
        src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEixYKuV2c5YoKDj9dHdJt5S1Lt-RSNZ0_3GgZbEbylP9emf5D9KGekhNq9RImhInYYgfcyOsyFFbDOdugmWwN2nWqxA2tDtJux26STvOi6BVFBM43oClQX5rK3aeIzbhUm_thZRVsKYxFgFJXa4AoumNIp5eBy3nYfzqgBpHIX_afCiFGRzAz-E_g/w320-h223/IPB%20University%20(Institut%20Pertanian%20Bogor)%20Logo.png',
    },
    {
        name: 'Universitas Airlangga',
        src: '/assets/unair.png',
    },
    {
        name: 'Universitas Padjadjaran',
        src: 'https://www.unpad.ac.id/wp-content/uploads/2025/12/logo-unpad-duo.svg',
    },
    {
        name: 'Institut Teknologi Sepuluh Nopember',
        src: 'https://katamata.wordpress.com/wp-content/uploads/2009/01/logo-its-biru-transparan.png',
    },
    {
        name: 'Universitas Diponegoro',
        src: 'https://bauk.undip.ac.id/wp-content/uploads/2023/11/web-undip-logo-1.png',
    },
    {
        name: 'University of Nottingham',
        src: 'https://www.nottingham.ac.uk/Brand/LegacyAssets/images-multimedia/2022/Logos/BrandEvolution-NottinghamBlue.png',
    },
    {
        name: 'Universität Stuttgart',
        src: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Universit%C3%A4t_Stuttgart_Logo.png',
    },
];

export const STRUGGLES: { no: string; effort: string; result: string }[] = [
    {
        no: '01',
        effort: 'Sudah download banyak PDF materi',
        result: 'Tapi bingung mulai dari mana',
    },
    {
        no: '02',
        effort: 'Sudah nonton banyak video TOEFL',
        result: 'Tapi besoknya lupa lagi materinya',
    },
    {
        no: '03',
        effort: 'Sudah mengerjakan banyak latihan soal',
        result: 'Tapi kesalahan yang sama terus terulang',
    },
    {
        no: '04',
        effort: 'Sudah ikut kursus bahasa Inggris',
        result: 'Tapi materinya terlalu umum, bukan pola TOEFL',
    },
    {
        no: '05',
        effort: 'Sudah di kursus, berusaha ikutin semua jadwal kelas',
        result: 'Tapi sekali jadwal bentrok, materi jadi tertinggal',
    },
];

export const COMPARISON_ROWS: {
    criteria: string;
    selfTaught: boolean;
    otherCourse: boolean;
}[] = [
    {
        criteria: 'Biaya tetap terjangkau',
        selfTaught: true,
        otherCourse: false,
    },
    {
        criteria: 'Jadwal bisa kamu atur sendiri',
        selfTaught: true,
        otherCourse: false,
    },
    {
        criteria: 'Materi tersusun urut, tidak bingung',
        selfTaught: false,
        otherCourse: true,
    },
    {
        criteria: 'Materi khusus pola soal TOEFL',
        selfTaught: false,
        otherCourse: false,
    },
    {
        criteria: 'Ada yang bisa ditanya kalau bingung',
        selfTaught: false,
        otherCourse: true,
    },
    {
        criteria: 'Materi bisa diulang kapan pun',
        selfTaught: true,
        otherCourse: false,
    },
    {
        criteria: 'Skor naik signifikan dalam 15 hari',
        selfTaught: false,
        otherCourse: false,
    },
];

export const METHOD_PILLARS: {
    tone: 'red' | 'dark';
    icon: string;
    title: string;
    description: string;
}[] = [
    {
        tone: 'red',
        icon: '🎯',
        title: 'TOEFL Pattern Recognition Method™',
        description:
            'Belajar pola soal yang paling sering muncul agar target skor lebih cepat tercapai, tanpa menghabiskan waktu mempelajari semua materi.',
    },
    {
        tone: 'dark',
        icon: '⚡',
        title: 'Shortcut Structure Framework™',
        description:
            'Roadmap belajar disesuaikan dengan target skor, sehingga kamu fokus pada materi yang paling berdampak untuk mencapai skor.',
    },
    {
        tone: 'red',
        icon: '📈',
        title: 'Score-Focused Learning System™',
        description:
            'Setiap sesi belajar difokuskan pada target skor yang dibutuhkan, sehingga progresmu selalu mengarah ke tujuan yang jelas.',
    },
];

export const LMS_FEATURES: LmsFeature[] = [
    {
        no: '01',
        label: 'Diagnostic Test',
        worth: 'Rp 120.000',
        tutorOnly: false,
        title: 'Tidak Lagi Bingung Harus Mulai dari Mana',
        description:
            'Kerjakan Diagnostic Test lebih dulu untuk mengetahui baseline skor TOEFL ITP kamu. Hasilnya menentukan materi mana yang perlu diprioritaskan.',
        image: '/assets/diagnostic.gif',
        points: ['Baseline skor per section', 'Materi prioritas otomatis'],
    },
    {
        no: '02',
        label: 'Materi & Roadmap',
        worth: 'Rp 300.000',
        tutorOnly: false,
        title: 'Materi Sudah Urut, Kamu Tinggal Mengikuti',
        description:
            'Materi Structure, Listening, dan Reading tersusun rapi dari Hari 1 sampai Hari 15, jadi kamu tidak perlu menyusun sendiri urutan belajarnya.',
        image: '/assets/materi.gif',
        points: ['60 video full skills', 'Urut Hari 1–15'],
    },
    {
        no: '03',
        label: 'AI Assistant',
        worth: 'Rp 100.000',
        tutorOnly: false,
        title: 'Kalau Bingung, Ada yang Langsung Menjawab',
        description:
            'Setiap video dilengkapi rangkuman materi dan AI Assistant yang siap menjelaskan ulang topik yang belum kamu pahami, tanpa perlu menunggu jadwal.',
        image: '/assets/video-ai.gif',
        points: ['Rangkuman tiap video', 'Tanya AI 24/7'],
    },
    {
        no: '04',
        label: 'Latihan Soal',
        worth: 'Rp 150.000',
        tutorOnly: false,
        title: 'Tahu Persis Bagian yang Belum Kamu Kuasai',
        description:
            'Setiap topik punya latihan soal dengan navigasi antar nomor dan progress tracker, jadi kamu tahu persis bagian mana yang belum dikuasai.',
        image: '/assets/latihan.gif',
        points: ['Latihan per topik', 'Progress tracker'],
    },
    {
        no: '05',
        label: 'Drill Soal',
        worth: 'Rp 100.000',
        tutorOnly: false,
        title: 'Kesalahan yang Sama Tidak Terulang Lagi',
        description:
            'Asah kemampuan spesifik lewat drill per skill — Listening, Structure, dan Reading — dengan paket soal yang bisa diulang sampai benar-benar paham.',
        image: '/assets/drill.gif',
        points: ['84 paket drill', 'Bisa diulang tanpa batas'],
    },
    {
        no: '06',
        label: 'Simulasi & Ujian',
        worth: 'Rp 150.000',
        tutorOnly: true,
        title: 'Supaya Nanti Saat Tes TOEFL Asli Tidak Kaget',
        description:
            'Mode Simulasi tanpa timer dengan feedback instan untuk latihan, dan Mode Final dengan timer serta kondisi seperti ujian TOEFL ITP sebenarnya.',
        image: '/assets/simulasi.gif',
        points: ['Mode latihan + feedback', 'Mode Final bertimer'],
    },
    {
        no: '07',
        label: 'Dashboard Progress',
        worth: 'Rp 85.000',
        tutorOnly: false,
        title: 'Progresmu Terlihat, Bukan Cuma Terasa Sibuk',
        description:
            'Soal dikerjakan, akurasi, waktu belajar, streak harian, hingga tren skor per section terekam otomatis, jadi progresmu selalu terlihat jelas.',
        image: '/assets/beranda.gif',
        points: ['Akurasi & streak harian', 'Tren skor per section'],
    },
];

export const WHY_ITEMS: { icon: string; title: string; description: string }[] =
    [
        {
            icon: '📖',
            title: 'Lembaga Resmi ITP & IIEF Jakarta',
            description:
                'Sertifikat terjamin sah dan diakui langsung sebagai syarat submission beasiswa luar negeri.',
        },
        {
            icon: '📈',
            title: 'Alumni Lulus Beasiswa ke Luar Negeri',
            description:
                'UK, Jerman, Australia: bukti nyata metode belajar bertahap ini bekerja, bukan sekadar janji.',
        },
        {
            icon: '👥',
            title: 'Pengajar Praktisi Skor 600+',
            description:
                'Belajar dari yang sudah membuktikan sendiri skornya, bukan yang cuma tahu teori.',
        },
        {
            icon: '⏱',
            title: 'Cukup 1 Jam Sehari, Mulai dari Sekarang',
            description:
                'Tidak perlu menunggu waktu luang besar. 1 jam sehari dari sekarang jauh lebih ringan daripada belajar maraton menjelang deadline.',
        },
    ];

export const STATS: { value: string; label: string }[] = [
    {
        value: '45.000+',
        label: 'Alumni Sukses',
    },
    {
        value: '4.9/5',
        label: 'Rating Rata-rata',
    },
    {
        value: '13+',
        label: 'Tahun Pengalaman',
    },
    {
        value: '95%',
        label: 'Skor Naik Signifikan',
    },
];

export const ALUMNI_TESTIMONIALS: AlumniTestimonial[] = [
    {
        campus: 'University of Nottingham, UK',
        headline: 'Sangat Terjangkau Untuk Mahasiswa',
        quote: '"Full Bright ini tempat yang paling "pas" buat teman-teman Mahasiswa menaklukkan Tes TOEFL & IELTS"',
        photo: '/assets/People%201.webp',
        name: 'Andi Manggala Putra',
        major: 'Accounting and Finance',
    },
    {
        campus: 'Stuttgart University, Germany',
        headline: 'A Good Place to Learn TOEFL & IELTS',
        quote: '"Fullbright growing together with their students. This place is good place to learn TOEFL & IELTS. Thank you for the teacher and friendly staff. Now I can see the world"',
        photo: '/assets/People%202.webp',
        name: 'Hajrah',
        major: 'Student Water Resources Engineering and Management',
    },
];

export const SCORE_REVIEWERS: {
    name: string;
    avatar: string;
    score: string;
}[] = [
    {
        name: 'Kak Rani',
        avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjU5AMTzLrJktkSAtgPl67tp9gcrVdfNprQkFE3OTlWsG2HLAYKC=w108-h108-p-rp-mo-br100',
        score: '547',
    },
    {
        name: 'Kak Ayu',
        avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjUIlyFVfg_CALswxLovEgu-9KN1G8qj5gZtWp7wBgK0kZTCUDQ=w108-h108-p-rp-mo-br100',
        score: '543',
    },
    {
        name: 'Mbak Widya',
        avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjV5Szg5YHC8wz4qGbdkyShVXvqJJmsdU-7k86b01QvrG9eS3bQv=w108-h108-p-rp-mo-br100',
        score: '563',
    },
    {
        name: 'Pak Yohanes',
        avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjXRbjwvAkh5Knchil81RMVI9JoXdsQWp9wX1k-eB1LIfnpZ7hY=w108-h108-p-rp-mo-br100',
        score: '560',
    },
    {
        name: 'Kak Uly Sinaga',
        avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjU3DvvpNvLJTv0Uu_Se4Ke4KXRZ7xS2wTByWCN2Yo1LNbBCxa0=w108-h108-p-rp-mo-br100',
        score: '507',
    },
    {
        name: 'Kak Nadia Ayu',
        avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjWbvvA2Wwy2D6SF141W1iTa3Hd3QeOJqaWOfjyv1J_ObcaJtKY=w108-h108-p-rp-mo-br100',
        score: '513',
    },
];

export const SELF_STUDY_FEATURES: PackageFeature[] = [
    {
        label: '60+ Video Materi Pembelajaran',
        bold: true,
        kind: 'included',
    },
    {
        label: 'Materi Hari ke-1 s/d ke-15 (Roadmap Lengkap)',
        bold: true,
        kind: 'included',
    },
    {
        label: 'Lebih dari 1.000+ Nomor Latihan Soal',
        bold: true,
        kind: 'included',
    },
    {
        label: 'Grup WA Diskusi',
        bold: false,
        kind: 'included',
    },
    {
        label: 'Diagnostic Test',
        bold: false,
        kind: 'included',
    },
    {
        label: 'Simulasi dan Post Test (Full Skills)',
        bold: false,
        kind: 'included',
    },
];

export const SELF_STUDY_EXCLUDED: string[] = [
    'LIVE ZOOM 15 Hari',
    'Sertifikat TOEFL',
];

export const STARTER_FEATURES: PackageFeature[] = [
    {
        label: 'LIVE ZOOM 10 Hari',
        bold: true,
        kind: 'included',
    },
    {
        label: 'Akses Latihan Soal di LMS (Total 370+ Soal)',
        bold: true,
        kind: 'included',
    },
    {
        label: 'Post Test (Full Test) 1x',
        bold: true,
        kind: 'included',
    },
    {
        label: 'Evaluasi Progress Mingguan',
        bold: false,
        kind: 'included',
    },
    {
        label: 'Strategi Submit Sesuai Jurusan & Rencana Kontribusi',
        bold: false,
        kind: 'included',
    },
    {
        label: 'Rekaman ZOOM jika tidak hadir',
        bold: false,
        kind: 'included',
    },
    {
        label: '30+ Video Materi Pembelajaran',
        bold: false,
        kind: 'included',
    },
    {
        label: 'E-Book Structure',
        bold: false,
        kind: 'included',
    },
    {
        label: 'E-Book Listening dan Reading',
        bold: false,
        kind: 'included',
    },
    {
        label: 'Grup WA Diskusi',
        bold: false,
        kind: 'included',
    },
    {
        label: 'Placement Test / Pre-Test',
        bold: false,
        kind: 'included',
    },
    {
        label: '10+ Link Soal Tambahan saat LIVE ZOOM',
        bold: false,
        kind: 'included',
    },
    {
        label: 'Tutor Tanya AI 24 Jam di setiap materi',
        bold: false,
        kind: 'included',
    },
    {
        label: 'Pembahasan setiap soal di LMS',
        bold: false,
        kind: 'included',
    },
    {
        label: 'Webinar Beasiswa Luar Negeri',
        bold: false,
        kind: 'global',
    },
    {
        label: 'Konsultasi Kampus Luar Negeri, urus LoA, Visa, dll.',
        bold: false,
        kind: 'global',
    },
    {
        label: 'Bonus Spesial',
        bold: false,
        kind: 'bonus',
    },
    {
        label: 'Sertifikat TOEFL',
        bold: false,
        kind: 'included',
    },
    {
        label: 'Tidak termasuk garansi mengulang 1 bulan',
        bold: false,
        kind: 'excluded',
    },
];

export const BUNDLING_FEATURES: PackageFeature[] = [
    {
        label: 'LIVE ZOOM 25 Hari',
        bold: true,
        kind: 'included',
    },
    {
        label: 'Akses Latihan Soal di LMS (Total 1.370+ Soal)',
        bold: true,
        kind: 'included',
    },
    {
        label: 'Progress Test & Post Test (Full Test) 3x',
        bold: true,
        kind: 'included',
    },
    {
        label: 'Evaluasi Progress Mingguan',
        bold: false,
        kind: 'included',
    },
    {
        label: 'Strategi Submit Sesuai Jurusan & Rencana Kontribusi',
        bold: false,
        kind: 'included',
    },
    {
        label: 'Rekaman ZOOM jika tidak hadir',
        bold: false,
        kind: 'included',
    },
    {
        label: '90+ Video Materi Pembelajaran',
        bold: false,
        kind: 'included',
    },
    {
        label: 'E-Book Structure (500+ Soal)',
        bold: false,
        kind: 'included',
    },
    {
        label: 'E-Book Listening dan Reading',
        bold: false,
        kind: 'included',
    },
    {
        label: 'Grup WA Diskusi',
        bold: false,
        kind: 'included',
    },
    {
        label: 'Placement Test / Pre-Test',
        bold: false,
        kind: 'included',
    },
    {
        label: '25 Link Soal Tambahan saat LIVE ZOOM',
        bold: false,
        kind: 'included',
    },
    {
        label: 'Free mengulang 1 bulan jika belum capai skor 500+',
        bold: false,
        kind: 'included',
    },
    {
        label: 'Tutor Tanya AI 24 Jam di setiap materi',
        bold: false,
        kind: 'included',
    },
    {
        label: 'Pembahasan setiap soal di LMS',
        bold: false,
        kind: 'included',
    },
    {
        label: 'Webinar Beasiswa Luar Negeri',
        bold: false,
        kind: 'global',
    },
    {
        label: 'Konsultasi Kampus Luar Negeri, urus LoA, Visa, dll.',
        bold: false,
        kind: 'global',
    },
    {
        label: 'Bonus Spesial',
        bold: false,
        kind: 'bonus',
    },
    {
        label: 'Sertifikat TOEFL',
        bold: false,
        kind: 'included',
    },
];

export const INTERMEDIATE_FEATURES: PackageFeature[] = [
    {
        label: 'LIVE ZOOM 15 Hari',
        bold: true,
        kind: 'included',
    },
    {
        label: 'Akses Latihan Soal di LMS (Total 1000+ Soal)',
        bold: true,
        kind: 'included',
    },
    {
        label: 'Progress Test & Post Test (Full Test) 2x',
        bold: true,
        kind: 'included',
    },
    {
        label: 'Evaluasi Progress Mingguan',
        bold: false,
        kind: 'included',
    },
    {
        label: 'Strategi Submit Sesuai Jurusan & Rencana Kontribusi',
        bold: false,
        kind: 'included',
    },
    {
        label: 'Rekaman ZOOM jika tidak hadir',
        bold: false,
        kind: 'included',
    },
    {
        label: '60+ Video Materi Pembelajaran',
        bold: false,
        kind: 'included',
    },
    {
        label: 'E-Book Structure',
        bold: false,
        kind: 'included',
    },
    {
        label: 'E-Book Listening dan Reading',
        bold: false,
        kind: 'included',
    },
    {
        label: 'Grup WA Diskusi',
        bold: false,
        kind: 'included',
    },
    {
        label: 'Placement Test / Pre-Test',
        bold: false,
        kind: 'included',
    },
    {
        label: '15 Link Soal Tambahan saat LIVE ZOOM',
        bold: false,
        kind: 'included',
    },
    {
        label: 'Tutor Tanya AI 24 Jam di setiap materi',
        bold: false,
        kind: 'included',
    },
    {
        label: 'Pembahasan setiap soal di LMS',
        bold: false,
        kind: 'included',
    },
    {
        label: 'Webinar Beasiswa Luar Negeri',
        bold: false,
        kind: 'global',
    },
    {
        label: 'Konsultasi Kampus Luar Negeri, urus LoA, Visa, dll.',
        bold: false,
        kind: 'global',
    },
    {
        label: 'Bonus Spesial',
        bold: false,
        kind: 'bonus',
    },
    {
        label: 'Sertifikat TOEFL',
        bold: false,
        kind: 'included',
    },
];

export const FAQ_ITEMS: FaqItem[] = [
    {
        category: 'Belajar Mandiri (LMS)',
        question: 'Kalau ambil paket Self-Study LMS, apa saja yang saya dapat?',
        answer: 'Kamu dapat akses penuh ke LMS Full Bright: 60+ video materi Full Skills (Listening, Structure, Reading), materi terstruktur hari ke-1 sampai ke-15, 1.000+ nomor latihan soal beserta pembahasan, diagnostic test, simulasi dan post test full skills, serta grup WA diskusi. Semua bisa diakses kapan saja tanpa terikat jadwal kelas.',
    },
    {
        category: 'Belajar Mandiri (LMS)',
        question: 'Bagaimana cara akses LMS setelah saya bayar?',
        answer: 'Setelah pembayaran berhasil, kamu langsung menerima email berisi link dan akun untuk masuk ke platform LMS Full Bright. Akses berlaku 2 tahun dan bisa dibuka dari HP maupun laptop, kapan pun kamu punya waktu.',
    },
    {
        category: 'Belajar Mandiri (LMS)',
        question:
            'Saya belajar sendiri di LMS. Kalau bingung, bisa tanya ke siapa?',
        answer: 'Kamu tetap tidak belajar sendirian. Setiap peserta LMS masuk ke grup WA diskusi, jadi kalau ada soal atau materi yang bikin bingung, kamu bisa langsung bertanya dan dibantu. Ini bedanya dengan belajar otodidak dari YouTube — di sana tidak ada yang menjawab kalau kamu stuck.',
    },
    {
        category: 'Belajar Mandiri (LMS)',
        question: 'Apakah bisa dicoba dulu sebelum bayar?',
        answer: 'Bisa. Tersedia free trial LMS dengan akses 1 modul agar kamu bisa merasakan sendiri kualitas video materi dan latihan soalnya sebelum memutuskan. Kalau cocok, tinggal lanjut ambil paketnya.',
    },
    {
        category: 'Belajar Mandiri (LMS)',
        question: 'Apakah bisa belajar tanpa terikat jadwal karena saya sibuk?',
        answer: 'Justru itu kelebihan paket belajar mandiri: tidak ada jam kelas yang harus dikejar. Semua materi tersedia di LMS 24/7 dan bisa diulang berapa kali pun. Banyak alumni kami karyawan, PNS aktif, dan mahasiswa tingkat akhir yang belajar di sela-sela kesibukan.',
    },
    {
        category: 'Metode & Efektivitas',
        question:
            'Apakah metode ini cocok untuk pemula yang grammar-nya sangat lemah?',
        answer: 'Sangat cocok. Materi disusun dari level dasar dan berurutan hari ke-1 sampai ke-15, jadi kamu tidak perlu grammar sempurna untuk memulai. Fokusnya bukan menguasai semua tata bahasa Inggris, tapi mengenali pola soal yang benar-benar keluar di TOEFL ITP.',
    },
    {
        category: 'Metode & Efektivitas',
        question:
            'Kenapa belajar di sini beda dengan belajar sendiri dari buku dan YouTube?',
        answer: 'Dua hal yang paling sering bikin belajar otodidak gagal: materinya tidak terstruktur dan tidak ada yang bisa ditanya kalau salah. Di Full Bright, materi sudah berurutan dan fokus ke pola soal TOEFL, setiap latihan ada pembahasannya, dan ada grup diskusi untuk bertanya.',
    },
    {
        category: 'Metode & Efektivitas',
        question: 'Berapa kenaikan skor yang bisa saya harapkan?',
        answer: 'Berdasarkan data alumni, peserta yang mengikuti materi secara konsisten dan mengerjakan semua bank soal rata-rata naik 80–100 poin. Yang paling banyak dirasakan alumni adalah jadi paham pola soal TOEFL, dan dari situ skornya ikut naik.',
    },
    {
        category: 'Metode & Efektivitas',
        question: 'Apakah dijamin bisa mencapai skor 500?',
        answer: 'Kami tidak menjanjikan skor 500 secara mutlak karena hasil tergantung konsistensi masing-masing peserta. Yang bisa kami jamin: metode yang sudah terbukti pada 45.000+ alumni, materi yang fokus dan terstruktur, serta pendampingan selama program.',
    },
    {
        category: 'Metode & Efektivitas',
        question: 'Apakah ada batasan usia untuk mengikuti program ini?',
        answer: 'Program terbuka untuk usia 17 hingga 45 tahun. Cocok untuk pelajar, mahasiswa, fresh graduate, maupun karyawan yang butuh skor TOEFL untuk studi, karir, atau beasiswa.',
    },
    {
        category: 'Dibimbing Tutor',
        question: 'Apa bedanya paket Dibimbing Tutor dengan Self-Study LMS?',
        answer: 'Semua materi LMS tetap kamu dapat. Tambahannya khusus di paket Dibimbing Tutor: LIVE ZOOM 15 hari bersama instruktur, rekaman ZOOM, dan sertifikat TOEFL Prediction. Cocok kalau kamu merasa lebih terbantu dengan penjelasan langsung dan tempo belajar yang dipandu.',
    },
    {
        category: 'Dibimbing Tutor',
        question: 'Kapan jadwal LIVE ZOOM-nya dan apakah bisa dipilih?',
        answer: 'Khusus paket Dibimbing Tutor. Tersedia 5 pilihan sesi harian: • Pagi (09.00 – 10.00 WIB) • Siang (13.00 – 14.00 WIB) • Sore (16.00 – 17.00 WIB) • Malam (19.00 – 20.00 WIB) • Malam (20.15 – 21.15 WIB) Catatan: Jika berhalangan hadir LIVE ZOOM, jangan khawatir — materi bisa diakses di rekaman ZOOM.',
    },
    {
        category: 'Dibimbing Tutor',
        question: 'Kalau saya tidak bisa hadir LIVE ZOOM, bagaimana?',
        answer: 'Khusus paket Dibimbing Tutor. Setiap sesi direkam dan rekamannya bisa diakses seumur hidup, jadi kamu tetap bisa mengejar materi kalau berhalangan hadir. Kelas hanya 60 menit per hari agar tetap muat di jadwal yang padat.',
    },
    {
        category: 'Sertifikat & Legalitas',
        question: 'Apakah saya dapat sertifikat TOEFL?',
        answer: 'Sertifikat TOEFL Prediction diberikan khusus untuk paket Dibimbing Tutor setelah mengikuti post test. Paket Self-Study LMS fokus pada materi dan latihan, tanpa sertifikat.',
    },
    {
        category: 'Sertifikat & Legalitas',
        question: 'Apakah lembaganya resmi dan sertifikatnya valid?',
        answer: 'Full Bright Indonesia adalah lembaga resmi dengan legalitas lengkap: SK Kemenkumham RI Nomor AHU-0055720-AH.0114 Tahun 2020, SK Izin Operasional LKP 503/20177/LKP/DPM-PTSP/8/2024, NPSN Nomor K9998700, dan bekerja sama dengan IIEF Jakarta. Sertifikat dapat digunakan untuk daftar kuliah S1/S2/S3, lamar kerja, seleksi CPNS, rekrutmen BUMN, ujian skripsi, kenaikan pangkat, dan pendaftaran beasiswa.',
    },
    {
        category: 'Pendaftaran & Pembayaran',
        question: 'Bagaimana cara mendaftar dan metode pembayaran apa saja?',
        answer: 'Klik tombol daftar, pilih paket yang sesuai, lalu selesaikan pembayaran. Setelah itu kamu langsung menerima email konfirmasi beserta akses LMS dan grup WhatsApp. Pembayaran bisa via transfer bank, GoPay, OVO, DANA, dan QRIS.',
    },
    {
        category: 'Jaminan & Garansi',
        question: 'Apakah ada garansi kalau skor saya belum mencapai target?',
        answer: 'Garansi mengulang sampai skor target tercapai berlaku khusus untuk Paket Bundling (Dibimbing Tutor). Jika sudah mengikuti program secara penuh dan konsisten tapi skor belum tercapai, kamu bisa claim garansi dan mengulang kelas di batch berikutnya.',
    },
];

export const SURVEY_OPTIONS: string[] = [
    'Bingung mulai belajar dari mana',
    'Sudah belajar tapi skor masih stuck',
    'Masih ragu apakah perlu ikut kursus',
    'Lainnya',
];

export const ADMIN_CONTACTS: {
    name: string;
    phone: string;
    whatsapp: string;
}[] = [
    {
        name: 'Ms. Aini',
        phone: '+62 819-5948-6507',
        whatsapp: '6281959486507',
    },
    {
        name: 'Mr. Choiri',
        phone: '+62 887-4487-5322',
        whatsapp: '6288744875322',
    },
    {
        name: 'Ms. Fini',
        phone: '+62 852-5549-9299',
        whatsapp: '6285255499299',
    },
];

export const SELF_STUDY_PACKAGE: PricingPackage = {
    key: 'selfStudy',
    trackingName: 'Self-Study',
    eyebrow: 'E-Course',
    name: 'Self-Study LMS',
    targetScore: '500+',
    duration: 'Belajar Kapan Saja',
    normalPrice: 'Rp 250.000',
    discountBadge: 'HEMAT 60%',
    price: 'Rp 99.000',
    ctaLabel: 'Mulai Belajar Mandiri',
    whatsappMessage:
        'Halo Admin Full Bright Indonesia. Saya minat mau daftar E-Course Self-Study LMS.',
    features: SELF_STUDY_FEATURES,
};

export const TUTOR_PACKAGES: PricingPackage[] = [
    {
        key: 'starter',
        trackingName: 'Starter',
        eyebrow: 'Paket',
        name: 'Starter',
        targetScore: '450+',
        duration: '10 Hari (2 Minggu)',
        normalPrice: 'Rp 1.000.000',
        discountBadge: 'HEMAT 80%',
        price: 'Rp 200.000',
        ctaLabel: 'Apply Sekarang',
        whatsappMessage:
            'Halo Admin Full Bright Indonesia. Saya minat mau daftar kelas TOEFL Level Starter',
        features: STARTER_FEATURES,
    },
    {
        key: 'bundling',
        trackingName: 'Bundling',
        eyebrow: 'Paket',
        name: 'Bundling',
        subtitle: 'Starter + Intermediate',
        targetScore: '500+',
        duration: '25 Hari Total',
        normalPrice: 'Rp 1.875.000',
        discountBadge: 'DISKON 80% + Rp50rb',
        price: 'Rp 325.000',
        savingsNote: 'Hemat Rp 1.550.000 dari harga normal!',
        ctaLabel: 'Apply Sekarang',
        whatsappMessage:
            'Halo Admin Full Bright Indonesia. Saya minat mau daftar paket HEMAT TOEFL Level Starter + Intermediate.',
        features: BUNDLING_FEATURES,
    },
    {
        key: 'intermediate',
        trackingName: 'Intermediate',
        eyebrow: 'Paket',
        name: 'Intermediate',
        targetScore: '500+',
        duration: '15 Hari',
        minimumScore: 'Min. 430',
        normalPrice: 'Rp 1.400.000',
        discountBadge: 'DISKON 80%',
        price: 'Rp 280.000',
        ctaLabel: 'Apply Sekarang',
        whatsappMessage:
            'Halo Admin Full Bright Indonesia. Saya minat mau daftar kelas TOEFL Level Intermediate.',
        features: INTERMEDIATE_FEATURES,
    },
];

export const BUNDLING_GUARANTEES: { title: string; description: string }[] = [
    {
        title: 'Garansi Sampai Skor Tercapai',
        description:
            'Ikut program secara penuh dan konsisten, tapi skor belum tercapai, gratis ulang kelas di batch berikutnya.',
    },
    {
        title: 'Post Test Ulang 3× Gratis',
        description:
            'Belum puas hasilnya? Ulang ujian akhir hingga 3 kali, gratis.',
    },
];
