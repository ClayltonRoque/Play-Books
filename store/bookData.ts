export interface StateProps {
  books: BookDocument.IBooks[];
}

const state = (): StateProps => ({
  books: [],
});

const mutations = {
  SAVE_BOOKS(state: StateProps, payload: BookDocument.IBooks[]) {
    state.books = payload;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
};
