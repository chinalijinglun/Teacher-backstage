import {
  DATE_FMT_DEFAULT,
  DATE_NO_TIME_FMT,
  dateFmt,
  dateFactory
} from './date';

const install = (Vue) => {
  Vue.prototype.$dateFmt = dateFmt;
  Vue.prototype.$DATE_FMT_DEFAULT = DATE_FMT_DEFAULT;
  Vue.prototype.$DATE_NO_TIME_FMT = DATE_NO_TIME_FMT;
  Vue.prototype.$dateFactory = dateFactory;
}

export default {
  install,
  DATE_FMT_DEFAULT,
  DATE_NO_TIME_FMT,
  dateFmt,
  dateFactory
}
