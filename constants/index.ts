interface IExperience {
  company: string
  web: string
  image: string
  roles: IRole[]

}
interface IRole {
  position: string
  date: string
  description: string
  technology: string[]
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
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet luctus venenatis lectus magna fringilla urna. In fermentum et sollicitudin ac. Laoreet sit amet cursus sit amet dictum sit amet justo. Tellus molestie nunc non blandit massa enim nec. Libero volutpat sed cras ornare arcu dui vivamus. Pulvinar proin gravida hendrerit lectus. Leo a diam sollicitudin tempor.',
        technology: ['Vue JS', 'Nuxt JS', 'Typescript', 'Tailwind', 'Vuetify', 'Pinia', 'Nuxt-UI', 'Vuelidate', 'Vee Validate', 'Histoire', 'Nuxt Vitest', 'Vuex']
      }
    ]
  },
  {
    company: 'Icemoon',
    web: 'https://www.instagram.com/icemoon.id/',
    image: 'freelance.png',
    roles: [
      {
        position: 'Software Engineer',
        date: '2019 jan - current (freelance)',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet luctus venenatis lectus magna fringilla urna. In fermentum et sollicitudin ac. Laoreet sit amet cursus sit amet dictum sit amet justo. Tellus molestie nunc non blandit massa enim nec. Libero volutpat sed cras ornare arcu dui vivamus. Pulvinar proin gravida hendrerit lectus. Leo a diam sollicitudin tempor.',
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
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet luctus venenatis lectus magna fringilla urna. In fermentum et sollicitudin ac. Laoreet sit amet cursus sit amet dictum sit amet justo. Tellus molestie nunc non blandit massa enim nec. Libero volutpat sed cras ornare arcu dui vivamus. Pulvinar proin gravida hendrerit lectus. Leo a diam sollicitudin tempor.',
        technology: ['React JS', 'Next JS', 'Javascript', 'Midtrains', 'Tailwind', 'Ant Design', 'Redux Toolkit', 'Scrum Sprint', 'Remote Working']
      }
    ]
  },
  {
    company: 'Virus Media',
    web: 'https://virus.co.id/',
    image: 'virus.png',
    roles: [
      {
        position: 'UI/UX Designer',
        date: '2021 aug - 2021 dec (fulltime)',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet luctus venenatis lectus magna fringilla urna. In fermentum et sollicitudin ac. Laoreet sit amet cursus sit amet dictum sit amet justo. Tellus molestie nunc non blandit massa enim nec. Libero volutpat sed cras ornare arcu dui vivamus. Pulvinar proin gravida hendrerit lectus. Leo a diam sollicitudin tempor.',
        technology: ['UI Design', 'UI/UX', 'Figma', 'Adobe Photoshop', 'Adobe Illustrator', 'Wordpress', 'Elementor']
      },
      {
        position: 'Software Engineer',
        date: '2019 dec - 2021 aug (fulltime)',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet luctus venenatis lectus magna fringilla urna. In fermentum et sollicitudin ac. Laoreet sit amet cursus sit amet dictum sit amet justo. Tellus molestie nunc non blandit massa enim nec. Libero volutpat sed cras ornare arcu dui vivamus. Pulvinar proin gravida hendrerit lectus. Leo a diam sollicitudin tempor.',
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
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet luctus venenatis lectus magna fringilla urna. In fermentum et sollicitudin ac. Laoreet sit amet cursus sit amet dictum sit amet justo. Tellus molestie nunc non blandit massa enim nec. Libero volutpat sed cras ornare arcu dui vivamus. Pulvinar proin gravida hendrerit lectus. Leo a diam sollicitudin tempor.',
        technology: ['Corel Draw', 'Adobe Photoshop', 'Adobe Illustrator', 'Social Media Optimization', 'Digital Marketing', 'Google Analytics', 'Content Creator']
      }
    ]
  },
]


export const skills: String[] = ['Typescript', 'Vue', 'Nuxt', 'React', 'Next', 'Express', 'Figma']

export const svgPath: String = 'M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z'
