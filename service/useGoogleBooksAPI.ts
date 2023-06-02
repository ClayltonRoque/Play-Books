import Requests from '@/service/Requests'

export function useGoogleBooksAPI() {
  const api = new Requests('https://www.googleapis.com/books/v1', {
    Accept: 'application/json',
  })

  function fetchBooks(term: string, maxResults: number, startIndex: number) {
    return api.get('volumes', {
      params: {
        q: term,
        maxResults,
        startIndex,
      },
    })
  }

  return {
    fetchBooks,
  }
}
