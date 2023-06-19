import { defineStore, skipHydrate } from 'pinia'
import { useGoogleBooksAPI } from '~/service/useGoogleBooksAPI'

interface Params {
  query: string
  maxResults: number
  startIndex: number
}

export const useBookStore = defineStore('book', () => {
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

    list.value = data.value.items
    totalBooks.value = data.value.totalItems
  }

  return {
    list: skipHydrate(list),
    params: skipHydrate(params),
    totalBooks: skipHydrate(totalBooks),
    fetchBooks,
  }
})
