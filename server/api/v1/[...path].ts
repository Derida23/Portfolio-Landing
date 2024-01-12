import { joinURL, withQuery } from 'ufo'
import type { FetchError } from 'ofetch'
import {
  createError,
  getCookie,
  getQuery,
  getRouterParam,
  proxyRequest,
} from 'h3'

export default defineEventHandler((event) => {
  const requestedWith = getRequestHeader(event, 'x-requested-with')

  if (requestedWith !== 'XMLHttpRequest') {
    throw createError({
      statusCode: 403,
      message: 'Forbidden Access',
    })
  }

  const token = getCookie(event, 'oauth/token')
  const { apiUrl } = useRuntimeConfig()
  const path = getRouterParam(event, 'path') ?? ''

  if (token)
    event.node.req.headers.authorization = `Bearer ${token}`

  const queryParam = getQuery(event)

  // manipulate path
  // const finalPath = path.replace(/^(admin|web)(.*)/, '$1/api/v1$2')
  const url = withQuery(joinURL(apiUrl, path), queryParam)

  // temporary fix delete method
  if (event.method === 'DELETE') {
    try {
      return $fetch(url, {
        headers: {
          authorization: `Bearer ${token}`,
        },
        method: 'DELETE',
      })
    }
    catch (e) {
      const error = e as FetchError

      setResponseStatus(event, error.statusCode || 500)
      return error.data
    }
  }

  return proxyRequest(
    event,
    url,
  )
})
