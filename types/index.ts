export interface IExperience {
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

export interface IProject {
  id: number
  brand: string
  title: string
  image: string
  type: string
  technology: string[]
  description: string
  content: IContent
}

interface IContent {
  first_paragraph: string
  second_paragraph: string
  third_paragraph: string
}

export interface IAbout {
  first_paragraph: string
  second_paragraph: string
  third_paragraph: string
}
