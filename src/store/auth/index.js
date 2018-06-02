const state = {
  authorization: ''
};

const mutations = {
  setAuthorization(state, v) {
    state.authorization = v;
  }
}

export default {
  state,
  mutations,
  namespaced: true
}
