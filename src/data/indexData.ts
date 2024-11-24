export const ProductLinkData = {
  porm: {
    title: "Explore JKT48 Connect API",
    icon: "fa-solid fa-code",
    description:
      "API untuk mendapatkan data terbaru seputar JKT48 seperti anggota, jadwal teater, dan berita terkini.",
    links: [
      {
        url: "/getting-started",
        title: "Mulai menggunakan API",
      },
      {
        url: "https://api.jkt48connect.my.id/docs",
        title: "Dokumentasi Lengkap",
        external: true,
      },
    ],
  },
  pdp: {
    title: "Kembangkan Aplikasi dengan API JKT48",
    icon: "fa-solid fa-cogs",
    description:
      "Integrasikan API kami untuk menampilkan informasi teater dan aktivitas JKT48 secara real-time.",
    links: [
      {
        url: "/orm/prisma-schema",
        title: "Panduan Implementasi",
      },
      {
        url: "/orm/prisma-schema",
        title: "Fitur Utama API",
      },
    ],
  },
};

export const ORMCardLinkData = {
  components: {
    title: "Fitur API JKT48 Connect",
    description: "Berbagai endpoint yang dapat digunakan untuk mendapatkan data lengkap JKT48.",
    links: [
      {
        url: "/orm/prisma-schema",
        title: "Anggota JKT48",
        icon: "fa-solid fa-user-group",
      },
      {
        url: "/orm/tools/prisma-cli",
        title: "Jadwal Teater",
        icon: "fa-solid fa-calendar-days",
      },
      {
        url: "/orm/prisma-client",
        title: "Berita Terbaru",
        icon: "fa-solid fa-newspaper",
      },
      {
        url: "/orm/tools/prisma-studio",
        title: "Acara Khusus",
        icon: "fa-solid fa-star",
      },
    ],
  },

  reference: {
    title: "Referensi API",
    description: "Dokumentasi teknis untuk memanfaatkan fitur API JKT48 Connect.",
    links: [
      {
        url: "/orm/reference/prisma-client-reference",
        title: "Cara Autentikasi",
        icon: "fa-solid fa-key",
      },
      {
        url: "/orm/reference/prisma-cli-reference",
        title: "Daftar Endpoint",
        icon: "fa-solid fa-list",
      },
      {
        url: "/orm/reference/prisma-schema-reference",
        title: "Panduan Integrasi",
        icon: "fa-solid fa-book",
      },
      {
        url: "/accelerate/api-reference",
        title: "Referensi API Tambahan",
        icon: "fa-solid fa-circle-info",
      },
      {
        url: "/orm/reference/error-reference",
        title: "Pesan Error",
        icon: "fa-solid fa-bug",
      },
      {
        url: "/pulse/api-reference",
        title: "Dokumentasi Lengkap",
        icon: "fa-solid fa-file-code",
      },
    ],
  },
};

export const ORMGeneralLinkData = [
  {
    title: "Panduan Penggunaan",
    description: "Cara menggunakan API JKT48 Connect untuk aplikasi Anda.",
    url: "/orm/prisma-client/queries/crud",
    icon: "fa-solid fa-hand-holding-hand",
  },
  {
    title: "Integrasi API",
    description: "Integrasikan data JKT48 dalam aplikasi web atau mobile.",
    url: "/orm/overview/prisma-in-your-stack",
    icon: "fa-solid fa-sitemap",
  },
  {
    title: "Endpoint Jadwal",
    description: "Dapatkan data jadwal teater JKT48 dengan API.",
    url: "/orm/more/migrating-to-prisma",
    icon: "fa-solid fa-calendar-check",
  },
  {
    title: "Data Anggota",
    description: "Informasi lengkap mengenai semua anggota JKT48.",
    url: "/orm/prisma-client/deployment",
    icon: "fa-solid fa-user",
  },
  {
    title: "Berita JKT48",
    description: "Berita terkini seputar aktivitas JKT48.",
    url: "/accelerate/getting-started",
    icon: "fa-solid fa-bullhorn",
  },
  {
    title: "Panduan Pengembangan",
    description: "Cara memanfaatkan API untuk berbagai platform.",
    url: "/pulse/getting-started",
    icon: "fa-solid fa-lightbulb",
  },
  {
    title: "Panel Pengelolaan",
    description: "Kelola proyek Anda dengan fitur manajemen berbasis API.",
    url: "/platform/about",
    icon: "fa-solid fa-chart-line",
  },
  {
    title: "CLI untuk API",
    description: "Gunakan perintah CLI untuk mengakses API dengan mudah.",
    url: "/platform/platform-cli/commands",
    icon: "fa-solid fa-terminal",
  },
];

export const DatabaseData = [
  {
    title: "Data Anggota JKT48",
    icon: "fa-solid fa-database",
    darkIcon: "fa-solid fa-database",
    url: "/orm/overview/databases/postgresql",
  },
  {
    title: "Jadwal Teater",
    icon: "fa-solid fa-calendar-alt",
    darkIcon: "fa-solid fa-calendar-alt",
    url: "/orm/overview/databases/mysql",
  },
  {
    title: "Berita Resmi",
    icon: "fa-solid fa-newspaper",
    darkIcon: "fa-solid fa-newspaper",
    url: "/orm/overview/databases/sql-server",
  },
  {
    title: "Acara Khusus",
    icon: "fa-solid fa-star",
    darkIcon: "fa-solid fa-star",
    url: "/orm/overview/databases/sqlite",
  },
];

export const CommunityLinksData = [
  {
    id: "github",
    title: "GitHub",
    description: "Lihat repository API JKT48 Connect untuk dokumentasi dan contoh kode.",
    icon: "fa-brands fa-github",
    link: "https://github.com/valzyofc/api-jkt48connect",
    linkText: "Kunjungi GitHub Kami",
  },
  {
    id: "documentation",
    title: "Dokumentasi API",
    description: "Panduan lengkap penggunaan API JKT48 Connect.",
    icon: "fa-solid fa-book",
    link: "https://api.jkt48connect.my.id/docs",
    linkText: "Baca Dokumentasi",
  },
  {
    id: "support",
    title: "Dukungan Teknis",
    description: "Hubungi kami jika membutuhkan bantuan teknis.",
    icon: "fa-solid fa-headset",
    link: "mailto:support@jkt48connect.my.id",
    linkText: "Hubungi Dukungan",
  },
  {
    id: "feedback",
    title: "Feedback",
    description: "Berikan masukan untuk pengembangan API kami.",
    icon: "fa-solid fa-comments",
    link: "https://forms.jkt48connect.my.id/feedback",
    linkText: "Kirim Feedback",
  },
];
