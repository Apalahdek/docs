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
    icon: "fa-solid fa-layer-group",
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

export const ORMGeneralLinkData = [
  {
    title: "Panduan Penggunaan",
    description: "Cara menggunakan API JKT48 Connect untuk aplikasi Anda.",
    url: "/orm/prisma-client/queries/crud",
    icon: "fa-solid fa-circle-info", // Ikon informasi untuk panduan
  },
  {
    title: "Integrasi API",
    description: "Integrasikan data JKT48 dalam aplikasi web atau mobile.",
    url: "/orm/overview/prisma-in-your-stack",
    icon: "fa-solid fa-plug", // Ikon plug untuk integrasi
  },
  {
    title: "Endpoint Jadwal",
    description: "Dapatkan data jadwal teater JKT48 dengan API.",
    url: "/orm/more/migrating-to-prisma",
    icon: "fa-solid fa-calendar-days", // Ikon kalender untuk jadwal
  },
  {
    title: "Data Anggota",
    description: "Informasi lengkap mengenai semua anggota JKT48.",
    url: "/orm/prisma-client/deployment",
    icon: "fa-solid fa-user-group", // Ikon grup untuk anggota
  },
  {
    title: "Berita JKT48",
    description: "Berita terkini seputar aktivitas JKT48.",
    url: "/accelerate/getting-started",
    icon: "fa-solid fa-bullhorn", // Ikon berita atau pengumuman
  },
  {
    title: "Panduan Pengembangan",
    description: "Cara memanfaatkan API untuk berbagai platform.",
    url: "/pulse/getting-started",
    icon: "fa-solid fa-toolbox", // Ikon toolbox untuk panduan pengembangan
  },
  {
    title: "Panel Pengelolaan",
    description: "Kelola proyek Anda dengan fitur manajemen berbasis API.",
    url: "/platform/about",
    icon: "fa-solid fa-layer-group", // Ikon lapisan untuk panel pengelolaan
  },
  {
    title: "CLI untuk API",
    description: "Gunakan perintah CLI untuk mengakses API dengan mudah.",
    url: "/platform/platform-cli/commands",
    icon: "fa-solid fa-terminal", // Ikon terminal untuk CLI
  },
];

export const ORMGeneralLinkData = [
  {
    title: "Panduan Penggunaan",
    description: "Cara menggunakan API JKT48 Connect untuk aplikasi Anda.",
    url: "/orm/prisma-client/queries/crud",
    icon: "fa-solid fa-key",
  },
  {
    title: "Integrasi API",
    description: "Integrasikan data JKT48 dalam aplikasi web atau mobile.",
    url: "/orm/overview/prisma-in-your-stack",
    icon: "fa-solid fa-cogs",
  },
  {
    title: "Endpoint Jadwal",
    description: "Dapatkan data jadwal teater JKT48 dengan API.",
    url: "/orm/more/migrating-to-prisma",
    icon: "fa-solid fa-calendar",
  },
  {
    title: "Data Anggota",
    description: "Informasi lengkap mengenai semua anggota JKT48.",
    url: "/orm/prisma-client/deployment",
    icon: "fa-solid fa-users",
  },
  {
    title: "Berita JKT48",
    description: "Berita terkini seputar aktivitas JKT48.",
    url: "/accelerate/getting-started",
    icon: "fa-solid fa-newspaper",
  },
  {
    title: "Panduan Pengembangan",
    description: "Cara memanfaatkan API untuk berbagai platform.",
    url: "/pulse/getting-started",
    icon: "fa-solid fa-book",
  },
  {
    title: "Panel Pengelolaan",
    description: "Kelola proyek Anda dengan fitur manajemen berbasis API.",
    url: "/platform/about",
    icon: "fa-solid fa-chart-simple",
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
    icon: "/img/technologies/postgresqlsimple.svg",
    darkIcon: "postgresqldark",
    url: "/orm/overview/databases/postgresql",
  },
  {
    title: "Jadwal Teater",
    icon: "/img/technologies/mysqlsimple.svg",
    darkIcon: "mysqlsimple",
    url: "/orm/overview/databases/mysql",
  },
  {
    title: "Berita Resmi",
    icon: "/img/technologies/sqlserver.svg",
    darkIcon: "sqlserver",
    url: "/orm/overview/databases/sql-server",
  },
  {
    title: "Acara Khusus",
    icon: "/img/technologies/sqlite.svg",
    darkIcon: "sqlite",
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
