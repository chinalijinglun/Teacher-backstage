import Vue from 'vue';
import Vuex from 'vuex';
import auth from './auth';
import course from './course';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    auth,
    course
  },
  strict: process.env.NODE_ENV !== 'production'
});

export default store;
