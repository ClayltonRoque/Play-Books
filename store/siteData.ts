export interface StateProps {
  isLoadingActive: boolean
}

const state = (): StateProps => ({
  isLoadingActive: false,
})

const actions = {
  block({ commit }: any) {
    commit('SET_LOADING', true)
  },
  unBlock({ commit }: any) {
    commit('SET_LOADING', false)
  },
}

const mutations = {
  SET_LOADING(state: StateProps, payload: boolean) {
    state.isLoadingActive = payload
  },
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
}
