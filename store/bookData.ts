export interface StateProps {
  books: BookDocument.Volume[]
  favoritesBooks: BookDocument.Volume[]
}

const state = (): StateProps => ({
  books: [],
  favoritesBooks: [],
})

const mutations = {
  SAVE_BOOKS(state: StateProps, payload: BookDocument.Volume[]) {
    state.books = payload
  },
  SAVE_BOOKS_FAVORITES(state: StateProps, payload: BookDocument.Volume) {
    state.favoritesBooks.push(payload)
  },
  REMOVE_BOOK_FAVORITES(state: StateProps, payload: BookDocument.Volume) {
    const index = state.favoritesBooks.indexOf(payload)
    state.favoritesBooks.splice(index, 1)
  },
}

export default {
  namespaced: true,
  state,
  mutations,
}
