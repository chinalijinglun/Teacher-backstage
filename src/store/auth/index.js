import {
  setLocalStorage,
  getLocalStorage,
  deleteLocalStorage
} from '@/utils/localStorage';

const state = {
  authorization: getLocalStorage('authorization'),
  userName: getLocalStorage('userName'),
  userId: getLocalStorage('userId'),
  userType: 'SysUser'
};

const mutations = {
  setAuthorization(state, v) {
    setLocalStorage('authorization', v);
    state.authorization = v;
  },
  setUserName(state, v) {
    setLocalStorage('userName', v);
    state.userName = v;
  },
  setUserId(state, v) {
    setLocalStorage('userId', v);
    state.userId = v;
  }
}

export default {
  state,
  mutations,
  namespaced: true
}
