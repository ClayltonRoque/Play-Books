import { defineStore } from 'pinia'
import { useGoogleBooksAPI } from '~/service/useGoogleBooksAPI'

interface Params {
  query: string
  maxResults: number
  startIndex: number
}

export const useBookStore = defineStore('book', () => {
  const books = ref<BookDocument.Volume[]>([])
  const list = ref<BookDocument.Volume[]>([])
  const params = ref<Params>({
    query: '',
    maxResults: 20,
    startIndex: 0,
  })
  const totalBooks = ref(0)

  async function fetchBooks(payload: Params['query']) {
    const paramsRef = params.value
    paramsRef.query = payload

    const { fetchBooks } = useGoogleBooksAPI()

    const { data } = await fetchBooks(
      paramsRef.query,
      paramsRef.maxResults,
      paramsRef.startIndex
    )
    books.value = data.value.items
    list.value.push(...books.value)
    totalBooks.value = data.value.totalItems
  }

  return {
    books,
    list,
    params,
    totalBooks,
    fetchBooks,
  }
})
