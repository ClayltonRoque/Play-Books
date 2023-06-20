import { defineStore } from 'pinia'

export interface StateProps {
  favoritesBooks: BookDocument.Volume[]
}

export const useFavoriteStore = defineStore('favorite', () => {
  const favoriteBooks = ref([] as BookDocument.Volume[])

  function saveBook(payload: BookDocument.Volume) {
    favoriteBooks.value.push(payload)
  }
  function removeBook(payload: BookDocument.Volume) {
    const index = favoriteBooks.value.indexOf(payload)
    favoriteBooks.value.splice(index, 1)
  }

  return {
    favoriteBooks,
    saveBook,
    removeBook,
  }
})
