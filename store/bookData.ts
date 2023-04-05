export interface StateProps {
  books: BookDocument.Volume[]
  listOfBooks: BookDocument.Volume[]
  favoritesBooks: BookDocument.Volume[]
  totalBooks: Number
  query: String
  personalizeSite: {
    typeSearch: String
    typePagination: String
  }
}

const state = (): StateProps => ({
  books: [],
  listOfBooks: [],
  favoritesBooks: [],
  totalBooks: 0,
  query: '',
  personalizeSite: {
    typeSearch: 'intitle:',
    typePagination: 'Paginação Simples',
  },
})

const mutations = {
  SAVE_BOOKS(state: StateProps, payload: BookDocument.Volume[]) {
    state.books = payload
  },
  SAVE_BOOKS_IN_LIST(state: StateProps, payload: BookDocument.Volume[]) {
    state.listOfBooks.push(...payload)
  },

  RESET_BOOKS_IN_LIST(state: StateProps, payload: BookDocument.Volume[]) {
    state.listOfBooks = payload
  },

  SAVE_BOOKS_FAVORITES(state: StateProps, payload: BookDocument.Volume) {
    state.favoritesBooks.push(payload)
  },

  REMOVE_BOOK_FAVORITES(state: StateProps, payload: BookDocument.Volume) {
    const index = state.favoritesBooks.indexOf(payload)
    state.favoritesBooks.splice(index, 1)
  },
  TOTAL_BOOKS(state: StateProps, payload: Number) {
    state.totalBooks = payload
  },
  QUERY_SEARCH(state: StateProps, payload: String) {
    state.query = payload
  },
  PERSONALIZE_SITE(state: StateProps, payload: StateProps['personalizeSite']) {
    state.personalizeSite = payload
  },
}

export default {
  namespaced: true,
  state,
  mutations,
}
