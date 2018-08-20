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
import * as regExp from './regExp';

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

import object from 'lodash/fp/object';

function deleteEmptyProps(form) {
  const f = {...form};
  for(let key in form){
    if(f[key] === '') {
      f[key] = undefined;
    }
  }
  return f;
}
function fillProps(d1, d2) {
  for(let key in d1){
    if(d2[key] !== undefined) {
      d1[key] = d2[key];
    }
  }
}
export function getCourseScheduleTime(start, end) {
  if(!start||!end) {
    return ''
  }
  const day = dateFmt(new Date(start), 'yyyy.MM.dd');
  const timeStart = dateFmt(new Date(start), 'hh.mm');
  const timeEnd = dateFmt(new Date(end), 'hh.mm');
  return day+' '+timeStart+'-'+timeEnd;
}

export function getCourseTime(start, end) {
  if(!start||!end) {
    return ''
  }
  const daystart = dateFmt(new Date(start), 'yyyy.MM.dd');
  const dayend = dateFmt(new Date(end), 'MM.dd');
  return daystart+'-'+dayend;
}

const install = (Vue) => {
  Vue.prototype.$dateFmt = dateFmt;
  Vue.prototype.$DATE_FMT_DEFAULT = DATE_FMT_DEFAULT;
  Vue.prototype.$DATE_NO_TIME_FMT = DATE_NO_TIME_FMT;
  Vue.prototype.$dateFactory = dateFactory;
  Vue.prototype.$axios = axios;
  Vue.prototype.$baseAxios = baseAxios;
  Vue.prototype.$baseApiUrl = baseApiUrl;

  Vue.prototype.$setLocalStorage = setLocalStorage;
  Vue.prototype.$getLocalStorage = getLocalStorage;
  Vue.prototype.$deleteLocalStorage = deleteLocalStorage;
  Vue.prototype.$json2filter = json2filter;
  Vue.prototype.$getQueryParams = getQueryParams;
  Vue.prototype.$getNopageQueryParams = getNopageQueryParams;
  Vue.prototype.$deleteEmptyProps = deleteEmptyProps;
  Vue.prototype.$getCourseScheduleTime = getCourseScheduleTime;
  Vue.prototype.$getCourseTime = getCourseTime;

  Vue.prototype.$_object = object;

  Vue.prototype.$fillProps = fillProps;

  // regexp start
  // 正则表达是
  for(let key in regExp) {
    Vue.prototype[`$${key}`] = regExp[key];
  }
  // regexp end
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

  
  Vue.filter('courseTime', (start, end) => {
    if(!start||!end) {
      return ''
    }
    const daystart = dateFmt(new Date(start), 'yyyy.MM.dd');
    const dayend = dateFmt(new Date(end), 'MM.dd');
    return daystart+'-'+dayend;
  })
  
  Vue.filter('courseScheduleTime', (start, end) => {
    if(!start||!end) {
      return ''
    }
    const day = dateFmt(new Date(start), 'yyyy.MM.dd');
    const timeStart = dateFmt(new Date(start), 'hh:mm');
    const timeEnd = dateFmt(new Date(end), 'hh:mm');
    return day+' '+timeStart+'-'+timeEnd;
  })

  Vue.filter('hasTime', (value) => {
    if(!value) return ''
    return dateFmt(new Date(value), 'yyyy-MM-dd hh:mm')
  })

  Vue.filter('noTime', (value) => {
    if(!value) return ''
    return dateFmt(new Date(value), 'yyyy-MM-dd')
  })
}

export default {
  install,
  DATE_FMT_DEFAULT,
  DATE_NO_TIME_FMT,
  dateFmt,
  dateFactory,
  axios,
  baseAxios,
  baseApiUrl
}
