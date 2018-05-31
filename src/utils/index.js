import {
  DATE_FMT_DEFAULT,
  DATE_NO_TIME_FMT,
  dateFmt,
  dateFactory
} from './date';
import { 
  axios, 
  baseAxios, 
  baseApiUrl 
} from './axios';
import { 
  MOBILE_REG_EXP,
  EMAIL_REG_EXP
} from './regExp';

const install = (Vue) => {
  Vue.prototype.$dateFmt = dateFmt;
  Vue.prototype.$DATE_FMT_DEFAULT = DATE_FMT_DEFAULT;
  Vue.prototype.$DATE_NO_TIME_FMT = DATE_NO_TIME_FMT;
  Vue.prototype.$dateFactory = dateFactory;
  Vue.prototype.$axios = axios;
  Vue.prototype.$baseAxios = baseAxios;
  Vue.prototype.$baseApiUrl = baseApiUrl;
  Vue.prototype.$MOBILE_REG_EXP = MOBILE_REG_EXP;
  Vue.prototype.$EMAIL_REG_EXP = EMAIL_REG_EXP;
}

export default {
  install,
  DATE_FMT_DEFAULT,
  DATE_NO_TIME_FMT,
  dateFmt,
  dateFactory,
  axios,
  baseAxios,
  baseApiUrl,
  MOBILE_REG_EXP,
  EMAIL_REG_EXP
}
