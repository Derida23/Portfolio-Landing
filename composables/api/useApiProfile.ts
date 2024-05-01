import type { ProfileListResponse, ProfileDetailResponse } from '@/types/profie_response'

export function useApiProfile() {
  const getAll = (lang: string = 'en') => {
    return useApi<ProfileListResponse>('/api/v1/profile', {
      lazy: true,
      query: {
        lang
      }
    })
  }

  const getDetail = (id: number) => {
    return useApi<ProfileDetailResponse>(`/api/v1/profile/${id}`, {
      lazy: true,
    })
  }


  return {
    getAll,
    getDetail
  }
}
