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

import {
  setLocalStorage,
  getLocalStorage,
  deleteLocalStorage
} from './localStorage';

import * as enums from './enums';
import {
  json2filter,
  getNopageQueryParams,
  getQueryParams
} from './json2filter';

function deleteEmptyProps(form) {
  const f = {...form};
  for(let key in form){
    if(f[key] === '') {
      f[key] = undefined;
    }
  }
  return f;
}

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
  Vue.prototype.$setLocalStorage = setLocalStorage;
  Vue.prototype.$getLocalStorage = getLocalStorage;
  Vue.prototype.$deleteLocalStorage = deleteLocalStorage;
  Vue.prototype.$json2filter = json2filter;
  Vue.prototype.$getQueryParams = getQueryParams;
  Vue.prototype.$getNopageQueryParams = getNopageQueryParams;
  Vue.prototype.$deleteEmptyProps = deleteEmptyProps;

  // enum start
  // 有效状态
  for(let key in enums) {
    Vue.prototype[`$${key}`] = enums[key];
  }

  // enum end

  // 默认每页分页条数
  Vue.prototype.$DEFAULT_LIMIT = 10;
  // 默认每页分页条数
  Vue.prototype.$MINI_LIMIT = 5;
  // 不需要分页的时候的最大数据条数
  Vue.prototype.$NO_PAGE_LIMIT = 100;
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
