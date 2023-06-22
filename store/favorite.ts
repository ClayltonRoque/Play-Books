import { defineStore, skipHydrate } from 'pinia'
import { useStorage } from '@vueuse/core'

export interface StateProps {
  favoritesBooks: BookDocument.Volume[]
}

export const useFavoriteStore = defineStore('favorite', () => {
  const favoriteBooks = useStorage(
    'favoriteBooks',
    ref([] as BookDocument.Volume[])
  )

  function saveBook(payload: BookDocument.Volume) {
    favoriteBooks.value.push(payload)
  }
  function removeBook(payload: BookDocument.Volume) {
    const index = favoriteBooks.value.indexOf(payload)
    favoriteBooks.value.splice(index, 1)
  }

  return {
    favoriteBooks: skipHydrate(favoriteBooks),
    saveBook,
    removeBook,
  }
})
