import { useLazyFetch } from '#app'

function request(url: string, method: string, options: any) {
  const { data, pending } = useLazyFetch(url, {
    method,
    ...options,
  })

  return { data, pending }
}

export default class Requests {
  private baseUrl: string
  private headers: any

  constructor(baseUrl: string, headers: any) {
    this.baseUrl = baseUrl
    this.headers = headers
  }

  get(url: string, options: any = {}) {
    const test = request(url, 'get', {
      baseURL: this.baseUrl,
      headers: this.headers,
      ...options,
    })

    return test
  }

  post(url: string, options: any = {}) {
    return request(url, 'post', {
      baseURL: this.baseUrl,
      headers: this.headers,
      ...options,
    })
  }
}
