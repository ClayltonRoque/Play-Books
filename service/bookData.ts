import { computed, useContext, useStore } from '@nuxtjs/composition-api'

import { StateProps as StateBook } from '~/store/bookData'
export interface StateProps {
  bookData: StateBook
}

const API_KEY = 'AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU'

export function useBookData() {
  const nuxtContext = useContext()

  const store = useStore<StateProps>()

  const books = computed(() => {
    return store.state.bookData.books
  })

  const favoriteBooks = computed(() => {
    return store.state.bookData.favoritesBooks
  })

  const totalBooks = computed(() => {
    return store.state.bookData.totalBooks
  })

  const querySearch = computed(() => {
    return store.state.bookData.query
  })

  async function getDataBooks(query: string, startIndex = 0, maxResults = 20) {
    store.commit('bookData/SAVE_BOOKS', [])
    store.dispatch('siteData/block')
    store.commit('bookData/QUERY_SEARCH', query)

    try {
      const data = await nuxtContext.$axios.$get('volumes', {
        params: {
          q: !query ? 'Livros Famosos' : 'intitle:' + query,
          key: API_KEY,
          maxResults,
          startIndex,
        },
      })

      if (!data.items) {
        data.items = []
      }

      if (!startIndex) {
        store.commit('bookData/TOTAL_BOOKS', data.totalItems)
      }

      store.commit('bookData/SAVE_BOOKS', data.items)
    } catch (error) {
      console.log('Não foi possível buscar informações com o servidor')
    } finally {
      store.dispatch('siteData/unBlock')
    }
  }

  function saveBooks(favoriteBook: BookDocument.Volume) {
    store.commit('bookData/SAVE_BOOKS_FAVORITES', favoriteBook)
  }

  function removeBook(favoriteBook: BookDocument.Volume) {
    store.commit('bookData/REMOVE_BOOK_FAVORITES', favoriteBook)
  }

  function alreadyfavorite(book: BookDocument.Volume) {
    const favoriteBook = store.state.bookData.favoritesBooks.find(
      (item) => item.id === book.id
    )
    return favoriteBook
  }

  return {
    books,
    favoriteBooks,
    totalBooks,
    querySearch,
    alreadyfavorite,
    getDataBooks,
    saveBooks,
    removeBook,
  }
}
