export interface PaginationMeta {
  page: number
  per_page: number
  total: number
}

export interface ErrorResponse {
  code: number
  message: string
  errors: string
}

export interface ApiResponse<T = unknown> {
  code: number
  data: T
  message: string
}

export type ApiResponseMeta<T = unknown> = ApiResponse<T> & {
  meta: {
    pagination: PaginationMeta
  }
}
