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
