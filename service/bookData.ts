import { computed, reactive, useNuxtApp } from '#app'

import { StateProps as StateBook } from '~/store/bookData'
export interface StateProps {
  bookData: StateBook
}

const API_KEY = 'AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU'

export function useBookData() {
  const { $store, $axios } = useNuxtApp()
  const axios = $axios

  const store = $store

  const books = computed(() => {
    return store.state.bookData.books
  })

  const listOfBooks = computed(() => {
    return store.state.bookData.listOfBooks
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

  const personalization = computed(() => {
    return store.state.bookData.personalizeSite
  })

  const state = reactive({
    personalizeType: {
      typeSearch: 'Titulo',
      typePagination: 'Paginação Simples',
    },
  })

  async function getDataBooks(
    query: string,
    startIndex = 0,
    resetList?: boolean,
    maxResults = 20
  ) {
    store.commit('bookData/SAVE_BOOKS', [])
    store.commit('bookData/QUERY_SEARCH', query)

    try {
      const data = await axios.$get('volumes', {
        params: {
          q: !query
            ? 'Livros Famosos'
            : store.state.bookData.personalizeSite.typeSearch + query,
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
      if (resetList === false) {
        store.commit('bookData/SAVE_BOOKS_IN_LIST', data.items)
      } else {
        store.commit('bookData/RESET_BOOKS_IN_LIST', [])
      }

      store.commit('bookData/SAVE_BOOKS', data.items)
    } catch (error) {
      console.log('Não foi possível buscar informações com o servidor')
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

  function personalizeSite(personalizeSite: StateBook['personalizeSite']) {
    if (personalizeSite.typeSearch === 'Titulo') {
      state.personalizeType.typeSearch = 'intitle:'
    }
    if (personalizeSite.typeSearch === 'Autor') {
      state.personalizeType.typeSearch = 'inauthor:'
    }
    if (personalizeSite.typeSearch === 'ISBN') {
      state.personalizeType.typeSearch = 'isbn:'
    }

    if (personalizeSite.typePagination === 'Paginação Simples') {
      state.personalizeType.typePagination = 'Paginação Simples'
    }

    if (personalizeSite.typePagination === 'Rolagem Infinita') {
      state.personalizeType.typePagination = 'Rolagem Infinita'
    }

    const personalizeType = { ...state.personalizeType }

    store.commit('bookData/PERSONALIZE_SITE', personalizeType)
  }

  return {
    books,
    listOfBooks,
    favoriteBooks,
    totalBooks,
    querySearch,
    personalizeSite,
    personalization,
    alreadyfavorite,
    getDataBooks,
    saveBooks,
    removeBook,
  }
}
