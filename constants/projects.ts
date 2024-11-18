import type { IProject } from "~/types";

export const projects: IProject[] = [
  {
    id: 1,
    brand: 'Trakindo',
    title: 'Dashboard Management',
    image: 'trakindo.jpeg',
    type: 'internal project - privy',
    description: 'The system developed for the Surabaya Laboratory Agency is designed for the registration of vaccination booths for various types of vaccines, up to the booking of packages. We utilize the Midtrans payment gateway for financing. Additionally, the Surabaya Research Agency also sells various forms of medical equipment. This project is executed with a freelance scheme contracted by the company.',
    description__id: 'Sistem yang dikembangkan untuk Badan Laboratorium Surabaya ditujukan untuk pendaftaran loket vaksinasi untuk berbagai jenis vaksin, hingga pemesanan paket. Kami menggunakan gateway pembayaran Midtrans untuk pembiayaan. Selain itu, Badan Penelitian Surabaya juga menjual berbagai macam peralatan medis. Proyek ini dilaksanakan dengan skema freelance yang dikontrak oleh perusahaan.',
    content: {
      first_paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare arcu dui vivamus arcu felis bibendum ut.',
      second_paragraph: 'Habitant morbi tristique senectus et netus et. Netus et malesuada fames ac turpis egestas.',
      third_paragraph: 'Quam elementum pulvinar etiam non quam lacus. Amet venenatis urna cursus eget nunc. In metus vulputate eu scelerisque felis. Faucibus nisl tincidunt eget nullam non. Ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel.'
    },
    technology: ['Vue JS', 'Nuxt JS', 'Vuetify', 'chart JS', 'Axios', 'PDF JS', 'Interact', 'Management Tools'],
  },
  {
    id: 2,
    brand: 'Privy',
    title: 'API Playground',
    image: 'playground.jpeg',
    type: 'internal project - privy',
    description: 'This application is designed to document API endpoints accessible to merchants using Privy’s services. With functionality similar to Swagger, it allows merchants to directly interact with the endpoints they intend to use. It includes a dashboard for content management and a landing page for merchants.',
    description__id: 'Aplikasi ini dibuat untuk mendokumentasikan endpoint API yang dapat diakses oleh merchant yang menggunakan layanan dari Privy. Dengan fungsi yang mirip Swagger, aplikasi ini memungkinkan merchant untuk berinteraksi langsung dengan endpoint yang akan digunakan. Aplikasi ini terdiri dari dashboard untuk pengaturan konten dan landing page yang diperuntukkan bagi merchant.',
    content: {
      first_paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare arcu dui vivamus arcu felis bibendum ut.',
      second_paragraph: 'Habitant morbi tristique senectus et netus et. Netus et malesuada fames ac turpis egestas.',
      third_paragraph: 'Quam elementum pulvinar etiam non quam lacus. Amet venenatis urna cursus eget nunc. In metus vulputate eu scelerisque felis. Faucibus nisl tincidunt eget nullam non. Ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel.'
    },
    technology: ['Vue JS', 'Nuxt JS', 'Vuetify', 'chart JS', 'Axios', 'PDF JS', 'Realtime Endpoint Testing'],
  },
  {
    id: 3,
    brand: 'SILK BBLK',
    title: 'Locket Registration System',
    image: 'bblk.jpeg',
    type: 'external project - vascomm',
    description: 'The system developed for the Surabaya Laboratory Agency is designed for the registration of vaccination booths for various types of vaccines, up to the booking of packages. We utilize the Midtrans payment gateway for financing. Additionally, the Surabaya Research Agency also sells various forms of medical equipment. This project is executed with a freelance scheme contracted by the company.',
    description__id: 'Sistem yang dikembangkan untuk Badan Laboratorium Surabaya ditujukan untuk pendaftaran loket vaksinasi untuk berbagai jenis vaksin, hingga pemesanan paket. Kami menggunakan gateway pembayaran Midtrans untuk pembiayaan. Selain itu, Badan Penelitian Surabaya juga menjual berbagai macam peralatan medis. Proyek ini dilaksanakan dengan skema freelance yang dikontrak oleh perusahaan.',
    content: {
      first_paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare arcu dui vivamus arcu felis bibendum ut.',
      second_paragraph: 'Habitant morbi tristique senectus et netus et. Netus et malesuada fames ac turpis egestas.',
      third_paragraph: 'Quam elementum pulvinar etiam non quam lacus. Amet venenatis urna cursus eget nunc. In metus vulputate eu scelerisque felis. Faucibus nisl tincidunt eget nullam non. Ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel.'
    },
    technology: ['React JS', 'Sass', 'Tailwind', 'Jest', 'Swiper JS', 'Crypto JS', 'Payment Gateway', 'Responsive Landing'],
  },
  {
    id: 4,
    brand: 'Boss Parfum',
    title: 'Marketplace',
    image: 'bossparfum.jpeg',
    type: 'external project - vascomm',
    description: 'The concept of this marketplace exclusively sells perfumes from Boss Parfume and is open to sellers affiliated with the related company. This system can also be customized regarding what is sold, types of perfumes, and packages, ranging from the smallest to drum-sized.',
    description__id: 'Konsep marketplace ini secara eksklusif menjual parfum dari Boss Parfume, dan terbuka untuk penjual yang berafiliasi dengan perusahaan terkait. Sistem ini juga dapat disesuaikan terkait dengan barang yang dijual, jenis-jenis parfum, dan paket, mulai dari yang terkecil hingga berukuran drum.',
    content: {
      first_paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare arcu dui vivamus arcu felis bibendum ut.',
      second_paragraph: 'Habitant morbi tristique senectus et netus et. Netus et malesuada fames ac turpis egestas.',
      third_paragraph: 'Quam elementum pulvinar etiam non quam lacus. Amet venenatis urna cursus eget nunc. In metus vulputate eu scelerisque felis. Faucibus nisl tincidunt eget nullam non. Ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel.'
    },
    technology: ['React JS', 'Next JS', 'Tailwind', 'Rocket Chat', 'CK Editor', 'Ant Design', 'Crypto JS', 'Chart JS'],
  },
  {
    id: 5,
    brand: 'Dentons HPRP',
    title: 'Lawfirm Management System',
    image: 'dentons.jpeg',
    type: 'internal project - virus media',
    description: 'I developed this Learning Management System (LMS) specifically for Dentons HPRP, the third-largest law firm in Indonesia. As a frontend developer, I created features for financial management, human resources, a kanban board to track ongoing cases, and employee time management to generate revenue that is always up-to-date every day.',
    description__id: 'Saya mengembangkan Sistem Manajemen Pembelajaran (LMS) ini khusus untuk Dentons HPRP, firma hukum terbesar ke-3 di Indonesia. Sebagai pengembang frontend, saya menciptakan fitur-fitur untuk manajemen keuangan, sumber daya manusia, papan kanban untuk melacak kasus yang sedang berlangsung, dan manajemen waktu pegawai untuk menghasilkan pendapatan yang selalu terupdate setiap hari.',
    content: {
      first_paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare arcu dui vivamus arcu felis bibendum ut.',
      second_paragraph: 'Habitant morbi tristique senectus et netus et. Netus et malesuada fames ac turpis egestas.',
      third_paragraph: 'Quam elementum pulvinar etiam non quam lacus. Amet venenatis urna cursus eget nunc. In metus vulputate eu scelerisque felis. Faucibus nisl tincidunt eget nullam non. Ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel.'
    },
    technology: ['React JS', 'Ant Design', 'Bootstrap', 'Redux Toolkit', 'Apollo GraphQL', 'Chart JS', 'Event Mitter', 'Sass',],
  },
  {
    id: 6,
    brand: 'Dentons HPRP',
    title: 'Lawfirm Management System',
    image: 'dentons.jpeg',
    type: 'internal project - virus media',
    description: 'I developed this Learning Management System (LMS) specifically for Dentons HPRP, the third-largest law firm in Indonesia. As a frontend developer, I created features for financial management, human resources, a kanban board to track ongoing cases, and employee time management to generate revenue that is always up-to-date every day.',
    description__id: 'Saya mengembangkan Sistem Manajemen Pembelajaran (LMS) ini khusus untuk Dentons HPRP, firma hukum terbesar ke-3 di Indonesia. Sebagai pengembang frontend, saya menciptakan fitur-fitur untuk manajemen keuangan, sumber daya manusia, papan kanban untuk melacak kasus yang sedang berlangsung, dan manajemen waktu pegawai untuk menghasilkan pendapatan yang selalu terupdate setiap hari.',
    content: {
      first_paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare arcu dui vivamus arcu felis bibendum ut.',
      second_paragraph: 'Habitant morbi tristique senectus et netus et. Netus et malesuada fames ac turpis egestas.',
      third_paragraph: 'Quam elementum pulvinar etiam non quam lacus. Amet venenatis urna cursus eget nunc. In metus vulputate eu scelerisque felis. Faucibus nisl tincidunt eget nullam non. Ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel.'
    },
    technology: ['React JS', 'Ant Design', 'Bootstrap', 'Redux Toolkit', 'Apollo GraphQL', 'Chart JS', 'Event Mitter', 'Sass',],
  },
  {
    id: 7,
    brand: 'Barmato & Salonpedia',
    title: 'Haircut Online Booking',
    image: 'barmato.jpeg',
    type: 'internal project - virus media',
    description: 'The COVID-19 pandemic has forced all salons to close according to government regulations. Barmato has become a solution for people who want to receive salon treatments without leaving their homes. This system works to connect customers with the nearest salons in their area through reservations.',
    description__id: 'Pandemi COVID-19 telah memaksa semua salon untuk tutup sesuai dengan peraturan pemerintah. Barmato telah menjadi solusi bagi orang-orang yang ingin menerima perawatan salon tanpa meninggalkan rumah mereka. Sistem ini berfungsi untuk menghubungkan pelanggan dengan salon terdekat di daerah mereka melalui reservasi.',
    content: {
      first_paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare arcu dui vivamus arcu felis bibendum ut.',
      second_paragraph: 'Habitant morbi tristique senectus et netus et. Netus et malesuada fames ac turpis egestas.',
      third_paragraph: 'Quam elementum pulvinar etiam non quam lacus. Amet venenatis urna cursus eget nunc. In metus vulputate eu scelerisque felis. Faucibus nisl tincidunt eget nullam non. Ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel.'
    },
    technology: ['React JS', 'Express JS', 'Mongo DB', 'Mongoose', 'Firebase', 'Jest', 'Multer', 'Shell JS', 'JWT', 'GraphQL', 'Sass', 'Tailwind', 'Ant Design'],
  },
  {
    id: 8,
    brand: 'Panganlokal',
    title: 'Marketplace',
    image: 'panganlokal.jpeg',
    type: 'internal project - virus media',
    description: 'One of the projects from the Ministry of Agriculture under its program to empower processed products from farmers and SMEs. The marketplace consists of a seller dashboard to optimize products, pricing, and delivery, as well as a landing page for customers to make purchases and transactions.',
    description__id: 'Salah satu proyek dari Kementerian Pertanian dalam programnya untuk memberdayakan produk olahan dari petani dan UMKM. Marketplace ini terdiri dari dashboard penjual untuk mengoptimalkan produk, harga, dan pengiriman, serta halaman landing untuk pelanggan melakukan pembelian dan transaksi.',
    content: {
      first_paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare arcu dui vivamus arcu felis bibendum ut.',
      second_paragraph: 'Habitant morbi tristique senectus et netus et. Netus et malesuada fames ac turpis egestas.',
      third_paragraph: 'Quam elementum pulvinar etiam non quam lacus. Amet venenatis urna cursus eget nunc. In metus vulputate eu scelerisque felis. Faucibus nisl tincidunt eget nullam non. Ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel.'
    },
    technology: ['React JS', 'Next JS', 'Typescript', 'Express JS', 'MySQL', 'Redux Toolkit', 'Node Mailer', 'Sequelize', 'JWT', 'Ant Design', 'Firebase', 'Chart JS'],
  },
  {
    id: 9,
    brand: 'Enterprise Resource Planning',
    title: 'Sales Device',
    image: 'erp.jpeg',
    type: 'internal project - virus media',
    description: 'There are four modules in the ERP: warehouse, procurement, sales, and finance. In this team, I work on the sales module, where salespeople operate using Android devices, covering tasks such as office attendance, note-taking, and making purchases through the Android application. The sales process is then continued on the sales dashboard to undergo stocking, procurement, and financial recording processes.',
    description__id: 'Ada empat modul dalam ERP: gudang, pengadaan, penjualan, dan keuangan. Di tim ini, saya bekerja pada modul penjualan, di mana para salesperson menggunakan perangkat Android untuk berbagai tugas seperti absensi kantor, pencatatan catatan, dan melakukan pembelian melalui aplikasi Android. Proses penjualan kemudian dilanjutkan pada dasbor penjualan untuk menjalani proses stok, pengadaan, dan pencatatan keuangan.',
    content: {
      first_paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare arcu dui vivamus arcu felis bibendum ut.',
      second_paragraph: 'Habitant morbi tristique senectus et netus et. Netus et malesuada fames ac turpis egestas.',
      third_paragraph: 'Quam elementum pulvinar etiam non quam lacus. Amet venenatis urna cursus eget nunc. In metus vulputate eu scelerisque felis. Faucibus nisl tincidunt eget nullam non. Ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel.'
    },
    technology: ['Kotlin', 'Android', 'Emulator Testing', 'Geolocation', 'Firebase', 'Firebase Release & Monitor', 'UI Native'],
  },
  {
    id: 10,
    brand: 'Pixos Application',
    title: 'Point of Sale',
    image: 'pixos.jpeg',
    type: 'personal project - arkdemy bootcamp',
    description: 'Arkademy is an educational institution with a full-stack JavaScript bootcamp. 6 week i developed a point of sale application called Pixos, covering the entire process from system requirements, fullstack and the mobile application. Additionally, I created replica applications resembling DANA and implemented a realtime chat feature.',
    description__id: 'Arkademy adalah lembaga pendidikan dengan bootcamp full-stack JavaScript. Selama 6 minggu, saya mengembangkan aplikasi point of sale bernama Pixos, mencakup seluruh proses dari persyaratan sistem, fullstack, hingga aplikasi mobile. Selain itu, saya membuat aplikasi tiruan yang menyerupai DANA dan mengimplementasikan fitur obrolan realtime.',
    content: {
      first_paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare arcu dui vivamus arcu felis bibendum ut.',
      second_paragraph: 'Habitant morbi tristique senectus et netus et. Netus et malesuada fames ac turpis egestas.',
      third_paragraph: 'Quam elementum pulvinar etiam non quam lacus. Amet venenatis urna cursus eget nunc. In metus vulputate eu scelerisque felis. Faucibus nisl tincidunt eget nullam non. Ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel.'
    },
    technology: ['Express JS', 'Sequelize ORM', 'React JS', 'React Native', 'Redux Toolkit', 'Material UI', 'Native Base', 'JWT'],
  },
]
