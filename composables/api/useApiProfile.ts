export function useApiProfile() {
  const getAll = () => {
    return useApi<any>('/api/v1/profile', {
      lazy: true,
    })
  }


  return {
    getAll,
  }
}
