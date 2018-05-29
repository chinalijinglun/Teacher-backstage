// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import './style/index.css';
import router from './router';
import axios from 'axios';
import selfComponents from './components';
import utils from './utils';

Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(selfComponents);
Vue.use(utils);

Vue.prototype.axios = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
