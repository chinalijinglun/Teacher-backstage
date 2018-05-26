import dateRange from './commons/form/dateRange';
import dialogContainer from './commons/mixins/dialogContainer';
import paginationMix from './commons/mixins/paginationMix';

const install = (Vue) => {
  Vue.component(dateRange.name, dateRange);
}

export default {
  install,
  dateRange
}
