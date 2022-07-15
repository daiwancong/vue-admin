const state = {
  submitStatus: false
}

const mutations = {
  TOGGLE_STATUS: (state, data) => {
    state.submitStatus = data
  }
}

const actions = {
  toggleStatus({ commit }, data) {
    commit('TOGGLE_STATUS', data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
