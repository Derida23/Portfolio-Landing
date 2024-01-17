export interface IExperience {
  company: string
  web: string
  image: string
  roles: IRole[]

}
export interface IRole {
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
}
