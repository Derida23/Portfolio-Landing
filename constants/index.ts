import type { IExperience, IProject, IAbout } from '@/types'

export const abouts: IAbout = {
  first_paragraph:
    '<p class="mb-4" ref="about"> Fullstack Engineer with a primary focus on Frontend development. I have a strong passion for JavaScript and am dedicated to creating applications that can positively impact many people. With <b class="text-white"> 5 years of programming experience</b>, I continue to learn everything related to this technology.</p>',
  second_paragraph: 'In addition to working as a Frontend Engineer, I also have an interest in data-related aspects and a strong passion for design. The combination of skills in Frontend, data understanding, and appreciation for design enables me to create holistic and innovative user experiences.',
  third_paragraph: 'To see more about what I`ve been doing for the past 5 years, you can check the next section.'
}

export const abouts__id: IAbout = {
  first_paragraph:
    '<p class="mb-4" ref="about">Fullstack Engineer dengan fokus utama pada pengembangan Frontend. Saya memiliki minat yang kuat terhadap JavaScript dan berkomitmen untuk membuat aplikasi yang dapat memberikan manfaat bagi banyak orang. Dengan pengalaman <b class="text-white"> 5 tahun dalam pemrograman</b>, saya terus belajar segala hal yang terkait dengan teknologi ini.</p>',
  second_paragraph: 'Selain menekuni sebagai Frontend Engineer, saya juga tertarik pada aspek-aspek terkait data dan memiliki ketertarikan yang kuat dalam bidang desain. Kombinasi keahlian di Frontend, pemahaman data, dan apresiasi terhadap desain memungkinkan saya untuk menciptakan pengalaman pengguna yang holistik dan inovatif.',
  third_paragraph: 'Untuk melihat lebih banyak tentang apa yang telah saya lakukan selama 5 tahun terakhir, Anda dapat memeriksa bagian selanjutnya.'
}

export const experiences: IExperience[] = [
  {
    company: 'Privy',
    web: 'https://privy.id/id',
    image: 'privy.jpeg',
    roles: [
      {
        position: 'Frontend Engineer',
        date: '2022 feb - current (fulltime)',
        description: 'Reliable Digital Trust. Trusted by over 40 million individuals & 2600 companies in Indonesia. My role involves creating custom applications on the frontend side to meet the needs of external companies, especially for digital signatures and electronic stamps (e-meterai), as well as contributing to the development of internal tools.',
        description__id: 'Percaya yang Dapat Diandalkan untuk Dunia Digital. Dipercayai oleh lebih dari 40 juta individu & 2600 perusahaan di Indonesia. Peran saya melibatkan pembuatan aplikasi khusus di sisi frontend untuk memenuhi kebutuhan perusahaan eksternal, terutama untuk tanda tangan digital dan stempel elektronik (e-meterai), serta berkontribusi pada pengembangan alat internal.',
        technology: ['Vue JS', 'Nuxt JS', 'Typescript', 'Tailwind', 'Vuetify', 'Pinia', 'Nuxt-UI', 'Vuelidate', 'Vee Validate', 'Histoire', 'Nuxt Vitest', 'Vuex']
      }
    ]
  },
  {
    company: 'Icemoon',
    web: 'https://www.instagram.com/icemoon.id/',
    image: 'freelance.jpeg',
    roles: [
      {
        position: 'Software Engineer',
        date: '2019 jan - 2022 feb (freelance)',
        description: 'My freelance work is regarded as a learning arena; that`s why I broaden my knowledge in various fields such as UI/UX, project management, mobile development, and fullstack as the core or main values. I create applications tailored to clients` needs on a small scale or for Micro, Small, and Medium Enterprises (MSMEs).',
        description__id: 'Pekerjaan lepas saya dianggap sebagai arena pembelajaran; itulah mengapa saya memperluas pengetahuan saya dalam berbagai bidang seperti UI/UX, manajemen proyek, pengembangan mobile, dan fullstack sebagai inti atau nilai utama. Saya membuat aplikasi yang disesuaikan dengan kebutuhan klien dalam skala kecil atau untuk Usaha Mikro, Kecil, dan Menengah (UMKM).',
        technology: ['React JS', 'Next JS', 'Vue JS', 'Nuxt JS', 'Express JS', 'UI Design', 'UI/UX', 'Figma', 'Adobe Photoshop', 'Adobe Illustrator', 'Trello Management']
      }
    ]
  },
  {
    company: 'Vascoom',
    web: 'https://vascomm.co.id/',
    image: 'vascoom.jpeg',
    roles: [
      {
        position: 'Fullstack Developer',
        date: '2021 apr - 2022 apr (freelance)',
        description: 'We create and develop digital technology-based solution services for business needs. In the freelance contract, I am tasked with handling two projects: the development of an e-commerce platform for a perfume company and a scheduling system for vaccination appointments, as well as the purchase of medical supplies system.',
        description__id: 'Kami menciptakan dan mengembangkan layanan solusi berbasis teknologi digital untuk kebutuhan bisnis. Dalam kontrak lepas, saya bertugas untuk menangani dua proyek: pengembangan platform e-commerce untuk perusahaan parfum dan sistem penjadwalan untuk janji vaksinasi, serta sistem pembelian barang medis.',
        technology: ['React JS', 'Next JS', 'Javascript', 'Midtrains', 'Tailwind', 'Ant Design', 'Redux Toolkit', 'Scrum Sprint', 'Remote Working']
      }
    ]
  },
  {
    company: 'Virus Media',
    web: 'https://virus.co.id/',
    image: 'virus.jpeg',
    roles: [
      {
        position: 'UI/UX Designer',
        date: '2021 aug - 2021 dec (fulltime)',
        description: 'Switching Software Engineer to UI/UX Designer Because Startegic Company. my role involves designing and analyzing for a specific application. I create web and mobile application mockups based on WordPress using Figma, generate design elements using Adobe Photoshop or Illustrator and collaboration with a WordPress Engineer.',
        description__id: 'Berpindah dari Software Engineer menjadi UI/UX Designer karena kebutuhan strategis perusahaan. Peran saya melibatkan perancangan dan analisis untuk aplikasi tertentu. Saya membuat mockup aplikasi web dan mobile berbasis WordPress menggunakan Figma, menghasilkan elemen desain menggunakan Adobe Photoshop atau Illustrator, dan berkolaborasi dengan WordPress Engineer.',
        technology: ['UI Design', 'UI/UX', 'Figma', 'Adobe Photoshop', 'Adobe Illustrator', 'Wordpress', 'Elementor']
      },
      {
        position: 'Software Engineer',
        date: '2019 dec - 2021 aug (fulltime)',
        description: 'Virus Media is one of the media agencies located in Jakarta. This marks my debut in the technology industry, where I assume the role of a fullstack engineer and mobile developer. I am tasked with develop and building applications for time and task management in the legal sector, as well as for e-commerce and ERP systems.',
        description__id: 'Virus Media merupakan salah satu agensi media yang berlokasi di Jakarta. Ini merupakan debut saya di industri teknologi, di mana saya mengemban peran sebagai fullstack engineer dan pengembang mobile. Saya bertugas untuk mengembangkan dan membangun aplikasi untuk manajemen waktu dan tugas di sektor hukum, serta untuk sistem e-commerce dan ERP.',
        technology: ['Express JS', 'Sequelize ORM', 'MySQL', 'Mongo DB', 'GraphQL', 'Firebase', 'React JS', 'Next JS', 'Typescript', 'Ant Design', 'Redux Toolkit', 'Kotlin']
      }
    ]
  },
  {
    company: 'Manxi Image',
    web: 'https://manxigroup.com/',
    image: 'manxi.jpeg',
    roles: [
      {
        position: 'Graphic Designer',
        date: '2018 sep - 2019 sug (fulltime)',
        description: 'Finding a job as a fresh graduate in the technology field is quite challenging. Eventually, I decided to work as a graphic designer due to having acquired this skill since high school. I joined Manxi, a retail company for printers, working in the marketing team, handling various aspects of digital marketing, promotions, social media analysis.',
        description__id: 'Mencari pekerjaan sebagai lulusan baru di bidang teknologi cukup menantang. Akhirnya, saya memutuskan untuk bekerja sebagai desainer grafis karena telah memiliki keterampilan ini sejak SMA. Saya bergabung dengan Manxi, sebuah perusahaan ritel untuk printer, bekerja di tim pemasaran, menangani berbagai aspek pemasaran digital, promosi, dan analisis media sosial.',
        technology: ['Corel Draw', 'Adobe Photoshop', 'Adobe Illustrator', 'Social Media Optimization', 'Digital Marketing', 'Google Analytics', 'Content Creator']
      }
    ]
  },
]

export const projects: IProject[] = [
  {
    id: 1,
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
  {
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
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
  }
]

export const skills: string[] = ['Typescript', 'Vue', 'Nuxt', 'React', 'Next', 'Express', 'Figma']

export const svgPath: string = 'M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z'
