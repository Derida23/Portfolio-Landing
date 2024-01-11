interface IExperience {
  position: string
  date: string
  company: string
  description: string
  web: string
  image: string
  technology: string[]
}

export const experiences: IExperience[] = [{
  position: 'Frontend Engineer',
  date: '2022 feb - current (fulltime)',
  company: 'Privy',
  description: `I was actively involved in the user interface design process, designing
          development prototypes, and creating intuitive and accessible user experiences.Close collaboration with project
          managers and fellow engineers is key in turning creative concepts into real products.During my journey, not
          only focusing on development, but also regularly conducting unit testing to produce clean code in accordance
          with established developer standards.`,
  web: 'https://privy.id/id',
  image: 'privy.jpeg',
  technology: ['Vue JS', 'Nuxt JS', 'Typescript', 'Tailwind', 'Vuetify', 'Pinia', 'Nuxt-UI', 'Vuelidate', 'Vee Validate', 'Histoire', 'Nuxt Vitest', 'Vuex']
},
{
  position: 'Software Engineer',
  date: '2019 jan - current (freelance)',
  company: 'Icemoon',
  description: `I was actively involved in the user interface design process, designing
          development prototypes, and creating intuitive and accessible user experiences. Close collaboration with project
          managers and fellow engineers is key in turning creative concepts into real products. During my journey, not
          only focusing on development, but also regularly conducting unit testing to produce clean code in accordance
          with established developer standards.`,
  web: 'https://www.instagram.com/icemoon.id/',
  image: 'freelance.png',
  technology: ['React JS', 'Next JS', 'Vue JS', 'Nuxt JS', 'Express JS', 'UI Design', 'UI/UX', 'Figma', 'Adobe Photoshop', 'Adobe Illustrator', 'Trello Management']
},
{
  position: 'Fullstack Developer',
  date: '2021 apr - 2022 apr (freelance)',
  company: 'Vascoom',
  description: `I was actively involved in the user interface design process, designing
          development prototypes, and creating intuitive and accessible user experiences. Close collaboration with project
          managers and fellow engineers is key in turning creative concepts into real products. During my journey, not
          only focusing on development, but also regularly conducting unit testing to produce clean code in accordance
          with established developer standards.`,
  web: 'https://vascomm.co.id/',
  image: 'vascoom.jpeg',
  technology: ['React JS', 'Next JS', 'Javascript', 'Midtrains', 'Tailwind', 'Ant Design', 'Redux Toolkit', 'Scrum Sprint', 'Remote Working']
},]


export const skills: String[] = ['Typescript', 'Vue', 'Nuxt', 'React', 'Next', 'Express', 'Figma']

export const svgPath: String = 'M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z'
