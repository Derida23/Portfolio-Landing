import type { IExperience, IAbout } from '@/types'

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
        date: '2018 sep - 2019 aug (fulltime)',
        description: 'Finding a job as a fresh graduate in the technology field is quite challenging. Eventually, I decided to work as a graphic designer due to having acquired this skill since high school. I joined Manxi, a retail company for printers, working in the marketing team, handling various aspects of digital marketing, promotions, social media analysis.',
        description__id: 'Mencari pekerjaan sebagai lulusan baru di bidang teknologi cukup menantang. Akhirnya, saya memutuskan untuk bekerja sebagai desainer grafis karena telah memiliki keterampilan ini sejak SMA. Saya bergabung dengan Manxi, sebuah perusahaan ritel untuk printer, bekerja di tim pemasaran, menangani berbagai aspek pemasaran digital, promosi, dan analisis media sosial.',
        technology: ['Corel Draw', 'Adobe Photoshop', 'Adobe Illustrator', 'Social Media Optimization', 'Digital Marketing', 'Google Analytics', 'Content Creator']
      }
    ]
  },
]

export const skills: string[] = ['Typescript', 'Vue', 'Nuxt', 'React', 'Next', 'Express', 'Nest', 'Figma']

export const svgPath: string = 'M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z'
