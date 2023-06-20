import { useFavoriteStore } from '@/store/favorite'

export function favoriteBookService() {
  const favoriteStore = useFavoriteStore()

  const favoriteBooks = computed(() => {
    return favoriteStore.favoriteBooks
  })

  function saveBooks(favoriteBook: BookDocument.Volume) {
    favoriteStore.saveBook(favoriteBook)
  }

  function removeBook(favoriteBook: BookDocument.Volume) {
    favoriteStore.removeBook(favoriteBook)
  }

  function alreadyfavorite(book: BookDocument.Volume) {
    const favoriteBook = favoriteStore.favoriteBooks.find(
      (item) => item.id === book.id
    )
    return favoriteBook
  }

  return {
    favoriteBooks,
    saveBooks,
    removeBook,
    alreadyfavorite,
  }
}
