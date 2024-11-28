import type { IProject } from "~/types";

export const projects: IProject[] = [
  {
    id: 1,
    brand: 'Trakindo',
    title: 'Dashboard Management',
    image: 'trakindo.jpeg',
    type: 'internal project - privy',
    description: 'This application is designed to manage and create digital correspondence, utilizing services from Privy to ensure the authenticity and security of every document generated. With this application, the process of creating letters becomes more efficient and organized, allowing users to create, edit, and manage letters electronically without the need to print or send physical documents.',
    description__id: 'Aplikasi ini dirancang untuk mengatur dan membuat surat menyurat secara digital, memanfaatkan layanan dari Privy untuk memastikan keabsahan dan keamanan setiap dokumen yang dibuat. Dengan aplikasi ini, proses pembuatan surat menjadi lebih efisien dan terorganisir, memungkinkan pengguna untuk membuat, mengedit, dan mengelola surat secara elektronik tanpa perlu mencetak atau mengirimkan dokumen fisik.',
    content: {
      first_paragraph: 'This application is designed to manage and create digital correspondence, utilizing services from Privy to ensure the authenticity and security of every document generated. With this application, the process of creating letters becomes more efficient and organized, allowing users to create, edit, and manage letters electronically without the need to print or send physical documents.',
      second_paragraph: 'The integration with Privy’s services ensures that every document produced is equipped with a valid digital signature.',
      third_paragraph: 'Additionally, this application is equipped with a stamp duty quota control feature, which allows users to monitor their stamp duty usage more regularly. This feature helps ensure that every document requiring a stamp duty receives the correct quota and does not exceed the predefined limit.'
    },
    content_id: {
      first_paragraph: 'Aplikasi ini dirancang untuk mengatur dan membuat surat menyurat secara digital, memanfaatkan layanan dari Privy untuk memastikan keabsahan dan keamanan setiap dokumen yang dibuat. Dengan aplikasi ini, proses pembuatan surat menjadi lebih efisien dan terorganisir, memungkinkan pengguna untuk membuat, mengedit, dan mengelola surat secara elektronik tanpa perlu mencetak atau mengirimkan dokumen fisik.',
      second_paragraph: 'Integrasi dengan layanan Privy memastikan bahwa setiap dokumen yang dihasilkan dilengkapi dengan tanda tangan digital yang sah.',
      third_paragraph: 'Selain itu, aplikasi ini dilengkapi dengan fitur kontrol kuota materai, yang memungkinkan pengguna untuk memantau penggunaan materai secara lebih teratur. Fitur ini membantu memastikan bahwa setiap dokumen yang memerlukan materai mendapatkan kuota yang tepat dan tidak melebihi batas yang telah ditentukan.'
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
      first_paragraph: 'This application is specifically designed to document the API endpoints accessible to merchants using Privy’s services. Its primary goal is to provide merchants with an intuitive and organized way to interact with the APIs they need for integrating Privy’s offerings into their own systems.',
      second_paragraph: 'The content management system (CMS) also allows for updates to documentation, ensuring that all the latest features and changes are reflected in real-time.',
      third_paragraph: 'Additionally, the application includes a dedicated landing page for merchants, which serves as the primary entry point to access the API documentation and other resources. The landing page is designed to be user-friendly and provides easy navigation to key sections such as API details, tutorials, and support.'
    },
    content_id: {
      first_paragraph: 'Aplikasi ini dirancang khusus untuk mendokumentasikan endpoint API yang dapat diakses oleh merchant yang menggunakan layanan Privy. Tujuan utamanya adalah untuk memberikan cara yang intuitif dan terorganisir bagi merchant.',
      second_paragraph: 'Sistem manajemen konten (CMS) ini juga memungkinkan pembaruan dokumentasi, memastikan bahwa semua fitur terbaru dan perubahan tercermin secara real-time.',
      third_paragraph: 'Selain itu, aplikasi ini juga mencakup halaman depan khusus untuk merchant, yang berfungsi sebagai titik masuk utama untuk mengakses dokumentasi API dan sumber daya lainnya. Halaman depan ini dirancang agar ramah pengguna dan menyediakan navigasi yang mudah ke bagian-bagian penting seperti detail API, tutorial, dan dukungan.'
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
      first_paragraph: 'The system developed for the Surabaya Laboratory Agency was designed to facilitate the registration and management of vaccination booths for various types of vaccines.',
      second_paragraph: 'System integrates the Midtrans payment gateway, providing a secure and reliable method for users to complete their payments for vaccinations and other services.',
      third_paragraph: 'Moreover, the Surabaya Laboratory Agency also uses the platform to sell various forms of medical equipment, further expanding its service offerings. The system allows for the listing and sale of medical supplies, such as testing kits, personal protective equipment (PPE), and other healthcare-related products.'
    },
    content_id: {
      first_paragraph: 'Sistem yang dikembangkan untuk Badan Laboratorium Surabaya dirancang untuk memfasilitasi pendaftaran dan pengelolaan booth vaksinasi untuk berbagai jenis vaksin.',
      second_paragraph: 'Mengintegrasikan gateway pembayaran Midtrans, memberikan metode yang aman dan andal bagi pengguna untuk menyelesaikan pembayaran.',
      third_paragraph: 'Selain itu, Badan Laboratorium Surabaya juga menggunakan platform ini untuk menjual berbagai bentuk peralatan medis, yang lebih memperluas penawaran layanannya. Sistem ini memungkinkan untuk listing dan penjualan perlengkapan medis, seperti alat tes, alat pelindung diri (APD), dan produk kesehatan lainnya.'
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
      first_paragraph: 'This marketplace was developed with a unique concept that exclusively offers perfumes from Boss Perfume, catering to a niche market of fragrance enthusiasts.',
      second_paragraph: 'Sellers who are affiliated with Boss Perfume have the opportunity to list and sell their products through this platform.',
      third_paragraph: 'The platform is highly customizable, allowing for flexibility in the types of products sold and how they are presented. Sellers can choose to offer various types of perfumes, ranging from smaller bottle sizes to larger packages, including drum-sized quantities for businesses or bulk purchasers.'
    },
    content_id: {
      first_paragraph: 'Pasar ini dikembangkan dengan konsep unik yang hanya menawarkan parfum dari Boss Perfume, yang menyasar pasar khusus penggemar wewangian. Platform ini dirancang untuk menampilkan hanya produk dari merek parfum ternama.',
      second_paragraph: 'Penjual yang terafiliasi dengan Boss Perfume memiliki kesempatan untuk mencantumkan dan menjual produk mereka melalui platform ini.',
      third_paragraph: 'Platform ini sangat dapat disesuaikan, memberikan fleksibilitas dalam jenis produk yang dijual dan bagaimana produk tersebut ditampilkan. Penjual dapat memilih untuk menawarkan berbagai jenis parfum, mulai dari ukuran botol kecil hingga paket yang lebih besar, termasuk ukuran drum untuk bisnis atau pembelian dalam jumlah besar.'
    },
    technology: ['React JS', 'Next JS', 'Tailwind', 'Rocket Chat', 'CK Editor', 'Ant Design', 'Crypto JS', 'Chart JS'],
  },
  {
    id: 5,
    brand: 'Dentons HPRP',
    title: 'Lawfirm Management System',
    image: 'dentons.jpeg',
    type: 'internal project - virus media',
    description: 'Developed Lawfirm Management System (LMS) specifically for Dentons HPRP, the third-largest law firm in Indonesia. As a frontend developer, I created features for financial management, human resources, a kanban board to track ongoing cases, and employee time management to generate revenue that is always up-to-date every day.',
    description__id: 'Saya mengembangkan Sistem Manajemen Pembelajaran (LMS) ini khusus untuk Dentons HPRP, firma hukum terbesar ke-3 di Indonesia. Sebagai pengembang frontend, saya menciptakan fitur-fitur untuk manajemen keuangan, sumber daya manusia, papan kanban untuk melacak kasus yang sedang berlangsung, dan manajemen waktu pegawai untuk menghasilkan pendapatan yang selalu terupdate setiap hari.',
    content: {
      first_paragraph: 'Law Firm Management System (LMS) specifically tailored for Dentons HPRP, which is the third-largest law firm in Indonesia. This system was designed to streamline various operational processes.',
      second_paragraph: 'One of the key features I developed was a financial management module, which allowed the firm to track and manage all its financial transactions in real-time.',
      third_paragraph: 'Furthermore, I implemented an employee time management system, which allowed employees to log their working hours, track billable hours, and generate accurate reports. This feature ensured that the firm could monitor its revenue generation, keeping it up-to-date on a daily basis.'
    },
    content_id: {
      first_paragraph: 'Sistem Manajemen Firma Hukum (LMS) yang dirancang khusus untuk Dentons HPRP, yang merupakan firma hukum terbesar ketiga di Indonesia. Sistem ini dirancang untuk menyederhanakan berbagai proses operasional.',
      second_paragraph: 'Salah satu fitur utama yang saya kembangkan adalah modul manajemen keuangan, yang memungkinkan firma untuk melacak dan mengelola semua transaksi keuangan secara real-time.',
      third_paragraph: 'Selain itu, saya juga mengimplementasikan sistem manajemen waktu karyawan, yang memungkinkan karyawan untuk mencatat jam kerja mereka, melacak jam yang dapat ditagih, dan menghasilkan laporan yang akurat.'
    },
    technology: ['React JS', 'Ant Design', 'Bootstrap', 'Redux Toolkit', 'Apollo GraphQL', 'Chart JS', 'Event Mitter', 'Sass',],
  },
  {
    id: 6,
    brand: 'Barmato & Salonpedia',
    title: 'Haircut Online Booking',
    image: 'barmato.jpeg',
    type: 'internal project - virus media',
    description: 'The COVID-19 pandemic has forced all salons to close according to government regulations. Barmato has become a solution for people who want to receive salon treatments without leaving their homes. This system works to connect customers with the nearest salons in their area through reservations.',
    description__id: 'Pandemi COVID-19 telah memaksa semua salon untuk tutup sesuai dengan peraturan pemerintah. Barmato telah menjadi solusi bagi orang-orang yang ingin menerima perawatan salon tanpa meninggalkan rumah mereka. Sistem ini berfungsi untuk menghubungkan pelanggan dengan salon terdekat di daerah mereka melalui reservasi.',
    content: {
      first_paragraph: 'The COVID-19 pandemic forced all salons to close in accordance with government regulations to prevent the spread of the virus. With mobility restrictions and the need to maintain physical distancing.',
      second_paragraph: 'Barmato was created to address this need by connecting customers with nearby salons in their area.',
      third_paragraph: 'By using Barmato, customers can save time and energy while maintaining their safety and comfort during the pandemic. Salons registered on the platform can continue operating by offering remote services, providing benefits for both parties.'
    },
    content_id: {
      first_paragraph: 'Pandemi COVID-19 telah memaksa semua salon untuk tutup sesuai dengan peraturan pemerintah demi mencegah penyebaran virus. Dengan adanya pembatasan mobilitas dan kewajiban untuk menjaga jarak fisik.',
      second_paragraph: 'Barmato hadir untuk menjawab kebutuhan ini dengan menghubungkan pelanggan dengan salon-salon terdekat di daerah mereka.',
      third_paragraph: 'Dengan menggunakan Barmato, pelanggan tidak hanya menghemat waktu dan tenaga, tetapi juga dapat menjaga keamanan dan kenyamanan selama pandemi. Salon-salon yang terdaftar di platform ini dapat terus menjalankan operasionalnya dengan menawarkan layanan jarak jauh yang aman, sehingga memberikan keuntungan bagi kedua belah pihak.'
    },
    technology: ['React JS', 'Express JS', 'Mongo DB', 'Mongoose', 'Firebase', 'Jest', 'Multer', 'Shell JS', 'JWT', 'GraphQL', 'Sass', 'Tailwind', 'Ant Design'],
  },
  {
    id: 7,
    brand: 'Panganlokal',
    title: 'Marketplace',
    image: 'panganlokal.jpeg',
    type: 'internal project - virus media',
    description: 'One of the projects from the Ministry of Agriculture under its program to empower processed products from farmers and SMEs. The marketplace consists of a seller dashboard to optimize products, pricing, and delivery, as well as a landing page for customers to make purchases and transactions.',
    description__id: 'Salah satu proyek dari Kementerian Pertanian dalam programnya untuk memberdayakan produk olahan dari petani dan UMKM. Marketplace ini terdiri dari dashboard penjual untuk mengoptimalkan produk, harga, dan pengiriman, serta halaman landing untuk pelanggan melakukan pembelian dan transaksi.',
    content: {
      first_paragraph: 'This project, initiated by the Ministry of Agriculture, aims to empower farmers and small to medium-sized enterprises (SMEs) by providing a digital marketplace for their processed products.',
      second_paragraph: 'The marketplace is designed with two primary components: a seller dashboard and a customer-facing landing page.',
      third_paragraph: 'By connecting sellers with consumers directly, this marketplace not only drives economic growth but also encourages greater appreciation for locally made products, fostering a culture of support for small-scale producers.'
    },
    content_id: {
      first_paragraph: 'Proyek ini, yang diprakarsai oleh Kementerian Pertanian, bertujuan untuk memberdayakan petani dan usaha mikro, kecil, dan menengah (UMKM) dengan menyediakan pasar digital untuk produk olahan mereka.',
      second_paragraph: 'Pasar ini dirancang dengan dua komponen utama: dasbor penjual dan halaman depan untuk pelanggan.',
      third_paragraph: 'Dengan menghubungkan penjual langsung dengan konsumen, pasar ini tidak hanya mendorong pertumbuhan ekonomi tetapi juga mendorong apresiasi yang lebih besar terhadap produk lokal, menciptakan budaya dukungan untuk produsen skala kecil.'
    },
    technology: ['React JS', 'Next JS', 'Typescript', 'Express JS', 'MySQL', 'Redux Toolkit', 'Node Mailer', 'Sequelize', 'JWT', 'Ant Design', 'Firebase', 'Chart JS'],
  },
  {
    id: 8,
    brand: 'Enterprise Resource Planning',
    title: 'Sales Device',
    image: 'erp.jpeg',
    type: 'internal project - virus media',
    description: 'There are four modules in the ERP: warehouse, procurement, sales, and finance. In this team, I work on the sales module, where salespeople operate using Android devices, covering tasks such as office attendance, note-taking, and making purchases through the Android application. The sales process is then continued on the sales dashboard to undergo stocking, procurement, and financial recording processes.',
    description__id: 'Ada empat modul dalam ERP: gudang, pengadaan, penjualan, dan keuangan. Di tim ini, saya bekerja pada modul penjualan, di mana para salesperson menggunakan perangkat Android untuk berbagai tugas seperti absensi kantor, pencatatan catatan, dan melakukan pembelian melalui aplikasi Android. Proses penjualan kemudian dilanjutkan pada dasbor penjualan untuk menjalani proses stok, pengadaan, dan pencatatan keuangan.',
    content: {
      first_paragraph: 'Enterprise Resource Planning (ERP) is a comprehensive system designed to streamline various business processes. The system I worked on was divided into four primary modules: warehouse, procurement, sales, and finance.',
      second_paragraph: 'My focus was on the sales module, which played a crucial role in managing sales activities and integrating.',
      third_paragraph: 'In the sales module, salespeople utilized Android devices to perform their day-to-day tasks. These tasks included marking office attendance, jotting down important notes, and processing purchases directly through the application.'
    },
    content_id: {
      first_paragraph: 'Enterprise Resource Planning (ERP) adalah sistem terpadu yang dirancang untuk menyederhanakan berbagai proses bisnis. Sistem yang saya kerjakan terbagi menjadi empat modul utama: gudang, pengadaan, penjualan, dan keuangan.',
      second_paragraph: 'Fokus saya adalah pada modul penjualan, yang berperan penting dalam mengelola aktivitas penjualan dan mengintegrasikannya.',
      third_paragraph: 'Dalam modul penjualan, tim penjualan menggunakan perangkat Android untuk melaksanakan tugas sehari-hari mereka. Tugas-tugas tersebut meliputi mencatat kehadiran kantor, mencatat catatan penting, dan memproses pembelian langsung melalui aplikasi.'
    },
    technology: ['Kotlin', 'Android', 'Emulator Testing', 'Geolocation', 'Firebase', 'Firebase Release & Monitor', 'UI Native'],
  },
  {
    id: 9,
    brand: 'Pixos Application',
    title: 'Point of Sale',
    image: 'pixos.jpeg',
    type: 'personal project - arkdemy bootcamp',
    description: 'Arkademy is an educational institution with a full-stack JavaScript bootcamp. 6 week i developed a point of sale application called Pixos, covering the entire process from system requirements, fullstack and the mobile application. Additionally, I created replica applications resembling DANA and implemented a realtime chat feature.',
    description__id: 'Arkademy adalah lembaga pendidikan dengan bootcamp full-stack JavaScript. Selama 6 minggu, saya mengembangkan aplikasi point of sale bernama Pixos, mencakup seluruh proses dari persyaratan sistem, fullstack, hingga aplikasi mobile. Selain itu, saya membuat aplikasi tiruan yang menyerupai DANA dan mengimplementasikan fitur obrolan realtime.',
    content: {
      first_paragraph: 'Pixos is an application in the form of a website and a mobile application for product management, category and has a cashier system (point of sale).',
      second_paragraph: 'This application is made using React Js and React Native. there is only a mobile application.',
      third_paragraph: 'This project was developed as part of a portfolio assignment to demonstrate proficiency in building applications using React Native for the frontend and Express for the backend. It highlights the integration of both technologies and showcases the skills gained during the learning process.'
    },
    content_id: {
      first_paragraph: 'Aplikasi ini dibuat untuk mendokumentasikan endpoint API yang dapat diakses oleh merchant yang menggunakan layanan dari Privy. Dengan fungsi yang mirip Swagger, aplikasi ini memungkinkan merchant untuk berinteraksi langsung dengan endpoint yang akan digunakan.',
      second_paragraph: 'Aplikasi ini terdiri dari dashboard untuk pengaturan konten dan landing page yang diperuntukkan bagi merchant.',
      third_paragraph: 'Proyek ini dibuat sebagai bagian dari tugas portofolio untuk menunjukkan keahlian dalam mengembangkan aplikasi menggunakan React Native sebagai frontend dan Express sebagai backend. Proyek ini memperlihatkan integrasi yang mulus antara kedua teknologi tersebut serta menyoroti keterampilan yang diperoleh selama proses pembelajaran.'
    },
    technology: ['Express JS', 'Sequelize ORM', 'React JS', 'React Native', 'Redux Toolkit', 'Material UI', 'Native Base', 'JWT'],
  },
]
