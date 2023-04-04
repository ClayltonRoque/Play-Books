import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  createPersistedState({
    key: 'playBooks',
    paths: ['bookData.favoritesBooks', 'bookData.personalizeSite'],
  })(store)
}
