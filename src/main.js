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
import store from './store';
import moment from 'moment';
import momentTimezone from 'moment-timezone';

window.moment = moment;
window.momentTimezone = momentTimezone;

Vue.config.productionTip = false;
Vue.prototype.axios = axios;

Vue.use(ElementUI);
Vue.use(selfComponents);
Vue.use(utils);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
