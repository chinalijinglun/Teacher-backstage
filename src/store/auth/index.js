import { 
  setLocalStorage,
  getLocalStorage,
  deleteLocalStorage
} from '@/utils/localStorage';

const state = {
  authorization: getLocalStorage('authorization')
};

const mutations = {
  setAuthorization(state, v) {
    setLocalStorage('authorization', v);
    state.authorization = v;
  }
}

export default {
  state,
  mutations,
  namespaced: true
}
