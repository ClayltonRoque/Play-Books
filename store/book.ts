import { defineStore } from 'pinia'
import range from 'lodash/range'

interface Book {
  id: number
  title: string
  description: string
}

export const useBookStore = defineStore('book', () => {
  const list = ref<Book[]>([])

  function fetchBooks() {
    const book: Book = {
      id: 1,
      title: 'Non sit in deserunt eiusmod sint.',
      description:
        'Adipisicing duis ullamco sunt reprehenderit qui fugiat magna esse magna sint elit elit cupidatat aliqua.',
    }
    range(3).forEach(() => {
      list.value.push(book)
    })
  }

  return {
    list,
    fetchBooks,
  }
})
