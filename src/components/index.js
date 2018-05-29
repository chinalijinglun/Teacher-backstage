import dateRange from './commons/form/dateRange';

const install = (Vue) => {
  Vue.component(dateRange.name, dateRange);
}

export default {
  install,
  dateRange
}
