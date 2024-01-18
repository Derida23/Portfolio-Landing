import type { ProfileListResponse, ProfileDetailResponse } from '@/types/profie_response'

export function useApiProfile() {
  const getAll = () => {
    return useApi<ProfileListResponse>('/api/v1/profile', {
      lazy: true,
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
