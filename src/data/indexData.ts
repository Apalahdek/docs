const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';
document.head.appendChild(link);

export const ProductLinkData = {
  porm: {
    title: "Explore JKT48 Connect API",
    icon: "fa fa-plug", // Mengganti dengan ikon plug
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
    icon: "fa fa-cogs", // Mengganti dengan ikon roda gigi
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
        icon: "fa fa-users", // Ikon pengguna
      },
      {
        url: "/orm/tools/prisma-cli",
        title: "Jadwal Teater",
        icon: "fa fa-calendar", // Ikon kalender
      },
      {
        url: "/orm/prisma-client",
        title: "Berita Terbaru",
        icon: "fa fa-newspaper", // Ikon koran
      },
      {
        url: "/orm/tools/prisma-studio",
        title: "Acara Khusus",
        icon: "fa fa-star", // Ikon bintang
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
        icon: "fa fa-key", // Ikon kunci
      },
      {
        url: "/orm/reference/prisma-cli-reference",
        title: "Daftar Endpoint",
        icon: "fa fa-list", // Ikon daftar
      },
      {
        url: "/orm/reference/prisma-schema-reference",
        title: "Panduan Integrasi",
        icon: "fa fa-book", // Ikon buku
      },
      {
        url: "/accelerate/api-reference",
        title: "Referensi API Tambahan",
        icon: "fa fa-info-circle", // Ikon informasi
      },
      {
        url: "/orm/reference/error-reference",
        title: "Pesan Error",
        icon: "fa fa-exclamation-triangle", // Ikon tanda peringatan
      },
      {
        url: "/pulse/api-reference",
        title: "Dokumentasi Lengkap",
        icon: "fa fa-file-code", // Ikon file kode
      },
    ],
  },
};

export const ORMGeneralLinkData = [
  {
    title: "Panduan Penggunaan",
    description: "Cara menggunakan API JKT48 Connect untuk aplikasi Anda.",
    url: "/orm/prisma-client/queries/crud",
    icon: "fa fa-handshake", // Ikon jabat tangan
  },
  {
    title: "Integrasi API",
    description: "Integrasikan data JKT48 dalam aplikasi web atau mobile.",
    url: "/orm/overview/prisma-in-your-stack",
    icon: "fa fa-sitemap", // Ikon sitemap
  },
  {
    title: "Endpoint Jadwal",
    description: "Dapatkan data jadwal teater JKT48 dengan API.",
    url: "/orm/more/migrating-to-prisma",
    icon: "fa fa-calendar-check", // Ikon kalender ceklis
  },
  {
    title: "Data Anggota",
    description: "Informasi lengkap mengenai semua anggota JKT48.",
    url: "/orm/prisma-client/deployment",
    icon: "fa fa-users", // Ikon pengguna
  },
  {
    title: "Berita JKT48",
    description: "Berita terkini seputar aktivitas JKT48.",
    url: "/accelerate/getting-started",
    icon: "fa fa-bullhorn", // Ikon megafon
  },
  {
    title: "Panduan Pengembangan",
    description: "Cara memanfaatkan API untuk berbagai platform.",
    url: "/pulse/getting-started",
    icon: "fa fa-lightbulb", // Ikon bola lampu
  },
  {
    title: "Panel Pengelolaan",
    description: "Kelola proyek Anda dengan fitur manajemen berbasis API.",
    url: "/platform/about",
    icon: "fa fa-chart-line", // Ikon grafik naik
  },
  {
    title: "CLI untuk API",
    description: "Gunakan perintah CLI untuk mengakses API dengan mudah.",
    url: "/platform/platform-cli/commands",
    icon: "fa fa-terminal", // Ikon terminal
  },
];

export const DatabaseData = [
  {
    title: "Data Anggota JKT48",
    icon: "fa fa-database", // Ikon database
    darkIcon: "fa fa-database",
    url: "/orm/overview/databases/postgresql",
  },
  {
    title: "Jadwal Teater",
    icon: "fa fa-calendar-alt", // Ikon kalender
    darkIcon: "fa fa-calendar-alt",
    url: "/orm/overview/databases/mysql",
  },
  {
    title: "Berita Resmi",
    icon: "fa fa-newspaper", // Ikon koran
    darkIcon: "fa fa-newspaper",
    url: "/orm/overview/databases/sql-server",
  },
  {
    title: "Acara Khusus",
    icon: "fa fa-star", // Ikon bintang
    darkIcon: "fa fa-star",
    url: "/orm/overview/databases/sqlite",
  },
];

export const CommunityLinksData = [
  {
    id: "github",
    title: "GitHub",
    description: "Lihat repository API JKT48 Connect untuk dokumentasi dan contoh kode.",
    icon: "fa fa-github", // Ikon GitHub
    link: "https://github.com/valzyofc/api-jkt48connect",
    linkText: "Kunjungi GitHub Kami",
  },
  {
    id: "documentation",
    title: "Dokumentasi API",
    description: "Panduan lengkap penggunaan API JKT48 Connect.",
    icon: "fa fa-book", // Ikon buku
    link: "https://api.jkt48connect.my.id/docs",
    linkText: "Baca Dokumentasi",
  },
  {
    id: "support",
    title: "Dukungan Teknis",
    description: "Hubungi kami jika membutuhkan bantuan teknis.",
    icon: "fa fa-headset", // Ikon headset
    link: "mailto:support@jkt48connect.my.id",
    linkText: "Hubungi Dukungan",
  },
  {
    id: "feedback",
    title: "Feedback",
    description: "Berikan masukan untuk pengembangan API kami.",
    icon: "fa fa-comments", // Ikon komentar
    link: "https://forms.jkt48connect.my.id/feedback",
    linkText: "Kirim Feedback",
  },
];
