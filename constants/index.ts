import type { IExperience, IProject } from '@/types'

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
        description: 'We create and develop digital technology-based solution services for business needs. In the freelance contract, I am tasked with handling two projects: the development of an e-commerce platform for a perfume company and a scheduling system for vaccination appointments, as well as the purchase of medical supplies system. ',
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
        technology: ['UI Design', 'UI/UX', 'Figma', 'Adobe Photoshop', 'Adobe Illustrator', 'Wordpress', 'Elementor']
      },
      {
        position: 'Software Engineer',
        date: '2019 dec - 2021 aug (fulltime)',
        description: 'Virus Media is one of the media agencies located in Jakarta. This marks my debut in the technology industry, where I assume the role of a fullstack engineer and mobile developer. I am tasked with develop and building applications for time and task management in the legal sector, as well as for e-commerce and ERP systems.',
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
