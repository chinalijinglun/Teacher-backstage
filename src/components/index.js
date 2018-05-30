import dateRange from './commons/form/dateRange';
import header from './header';
import navigation from './navigation';

const install = (Vue) => {
  Vue.component(dateRange.name, dateRange);
  Vue.component(header.name, header);
  Vue.component(navigation.name, navigation);
}

export default {
  install,
  dateRange
}
