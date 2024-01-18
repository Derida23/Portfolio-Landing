import type { ApiResponse, ApiResponseMeta } from './base'
import type { IProject, IExperience } from './index'

interface IProfileResponse {
  abouts: IParagraph
  experiences: IExperience[]
  projects: IProject[]
}

interface IParagraph {
  first_paragraph: string
  second_paragraph: string
  third_paragraph: string
}

export type ProfileListResponse = ApiResponseMeta<IProfileResponse[]>


export type ProfileDetailResponse = ApiResponse<{
  profile_detail: IProject
}>
