export interface StateProps {
  books: BookDocument.Volume[];
}

const state = (): StateProps => ({
  books: [],
});

const mutations = {
  SAVE_BOOKS(state: StateProps, payload: BookDocument.Volume[]) {
    state.books = payload;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
};
