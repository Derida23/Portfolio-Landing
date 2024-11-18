
import { projects } from "~/constants/projects"

export default defineEventHandler((event) => {
  const profile_detail = projects.find((project) => project.id === Number(event.context.params?.id))

  return {
    message: 'Success retrieve data',
    data: {
      profile_detail
    },
  }
})
