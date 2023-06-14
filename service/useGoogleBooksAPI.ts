import { AsyncData } from 'nuxt/app'

interface BooksRequestApi {
  items: BookDocument.Volume[]
  kind: string
  totalItems: number
}

export function useGoogleBooksAPI() {
  async function $api(url: string, options: any) {
    return useFetch(url, {
      baseURL: 'https://www.googleapis.com/books/v1',
      headers: {
        accept: 'application/json',
      },
      ...options,
    })
  }

  async function fetchBooks(
    term: string,
    maxResults: number,
    startIndex: number
  ) {
    return $api('volumes', {
      params: {
        q: term,
        maxResults: maxResults,
        startIndex: startIndex,
      },
    }) as AsyncData<BooksRequestApi, any>
  }

  return {
    fetchBooks,
  }
}
