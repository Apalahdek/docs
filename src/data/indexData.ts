export const ProductLinkData = {
  porm: {
    title: "Explore JKT48 Connect API",
    icon: "fa-solid fa-code",
    description:
      "API yang dirancang untuk penggemar JKT48, menghadirkan data terbaru dan lengkap tentang anggota, jadwal, dan acara.",
    links: [
      {
        url: "/getting-started",
        title: "Memulai dengan API",
      },
      {
        url: "https://api.jkt48connect.my.id/docs",
        title: "Dokumentasi API",
        external: true,
      },
    ],
  },
  pdp: {
    title: "Integrasikan API JKT48 ke dalam Aplikasi Anda",
    icon: "fa-solid fa-layer-group",
    description:
      "Bangun aplikasi penggemar dengan API kami untuk akses data anggota, jadwal teater, dan banyak lagi.",
    links: [
      {
        url: "/features/member-endpoint",
        title: "Endpoint Anggota",
      },
      {
        url: "/features/schedule-endpoint",
        title: "Endpoint Jadwal",
      },
    ],
  },
};

export const ORMCardLinkData = {
  components: {
    title: "Fitur Utama API",
    description: "Jelajahi komponen utama API JKT48 Connect.",
    links: [
      {
        url: "/features/member-endpoint",
        title: "Data Anggota",
      },
      {
        url: "/features/schedule-endpoint",
        title: "Jadwal Teater",
      },
      {
        url: "/features/news-endpoint",
        title: "Berita Terbaru",
      },
      {
        url: "/features/event-endpoint",
        title: "Acara Khusus",
      },
    ],
  },

  reference: {
    title: "Referensi",
    description: "Pelajari lebih dalam tentang penggunaan dan dokumentasi API.",
    links: [
      {
        url: "/docs/authentication",
        title: "Panduan Autentikasi",
      },
      {
        url: "/docs/error-handling",
        title: "Referensi Pesan Error",
      },
      {
        url: "/docs/api-endpoints",
        title: "Daftar Endpoint",
      },
    ],
  },
};

export const ORMGeneralLinkData = [
  {
    title: "Panduan Autentikasi",
    description:
      "Pelajari cara mendapatkan token akses untuk mengakses API kami.",
    url: "/docs/authentication",
    icon: "fa-solid fa-key",
  },
  {
    title: "Integrasi Aplikasi",
    description:
      "Gunakan API kami untuk membangun aplikasi berbasis data JKT48.",
    url: "/docs/integration-guide",
    icon: "fa-solid fa-cogs",
  },
  {
    title: "Endpoint Jadwal",
    description: "Dapatkan data jadwal teater dan acara langsung.",
    url: "/features/schedule-endpoint",
    icon: "fa-solid fa-calendar",
  },
  {
    title: "Endpoint Anggota",
    description: "Akses data anggota JKT48 termasuk profil dan status aktif.",
    url: "/features/member-endpoint",
    icon: "fa-solid fa-users",
  },
  {
    title: "Endpoint Berita",
    description: "Tetap update dengan berita dan pengumuman resmi JKT48.",
    url: "/features/news-endpoint",
    icon: "fa-solid fa-newspaper",
  },
];

export const DatabaseData = [
  {
    title: "Data Anggota",
    icon: "/img/icons/member.svg",
    darkIcon: "memberdark",
    url: "/features/member-endpoint",
  },
  {
    title: "Jadwal Teater",
    icon: "/img/icons/schedule.svg",
    darkIcon: "scheduledark",
    url: "/features/schedule-endpoint",
  },
  {
    title: "Berita",
    icon: "/img/icons/news.svg",
    darkIcon: "newsdark",
    url: "/features/news-endpoint",
  },
  {
    title: "Acara",
    icon: "/img/icons/event.svg",
    darkIcon: "eventdark",
    url: "/features/event-endpoint",
  },
];

export const CommunityLinksData = [
  {
    id: "github",
    title: "GitHub",
    description: "Lihat repository kami untuk API JKT48 Connect.",
    icon: "fa-brands fa-github",
    link: "https://github.com/valzyofc/api-jkt48connect",
    linkText: "Kunjungi GitHub Kami",
  },
  {
    id: "documentation",
    title: "Dokumentasi",
    description:
      "Pelajari cara memanfaatkan API JKT48 Connect melalui dokumentasi kami.",
    icon: "fa-solid fa-book",
    link: "https://api.jkt48connect.my.id/docs",
    linkText: "Baca Dokumentasi",
  },
  {
    id: "support",
    title: "Dukungan",
    description: "Butuh bantuan? Hubungi kami melalui saluran dukungan.",
    icon: "fa-solid fa-headset",
    link: "mailto:support@jkt48connect.my.id",
    linkText: "Hubungi Dukungan",
  },
  {
    id: "feedback",
    title: "Feedback",
    description: "Berikan masukan dan saran untuk pengembangan API kami.",
    icon: "fa-solid fa-comments",
    link: "https://forms.jkt48connect.my.id/feedback",
    linkText: "Kirim Feedback",
  },
];
