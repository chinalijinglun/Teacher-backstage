import { 
  setLocalStorage,
  getLocalStorage,
  deleteLocalStorage
} from '@/utils/localStorage';

const state = {
  authorization: getLocalStorage('authorization'),
  userName: '',
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
  }
}

export default {
  state,
  mutations,
  namespaced: true
}
