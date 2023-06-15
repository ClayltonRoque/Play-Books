import { defineStore, skipHydrate } from 'pinia'
import { useGoogleBooksAPI } from '~/service/useGoogleBooksAPI'

export const useBookStore = defineStore('book', () => {
  const list = ref<BookDocument.Volume[]>([])

  async function fetchBooks() {
    const { fetchBooks } = useGoogleBooksAPI()
    const { data } = await fetchBooks('java', 20, 0)

    list.value = data.value.items
  }

  return {
    list: skipHydrate(list),
    fetchBooks,
  }
})
