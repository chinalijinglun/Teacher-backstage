import dateRange from './commons/form/dateRange';
import curriculumSelect from './commons/select/curriculumSelect';
import teacherDialog from './commons/dialog/teacherDialog';
import appointmentTeacher from './commons/dialog/appointmentTeacher';
import sureTimeDialog from './commons/dialog/sureTimeDialog';
import header from './header';
import navigation from './navigation';

import paginationMix from './commons/mixins/paginationMix';

const install = (Vue) => {
  Vue.component(dateRange.name, dateRange);
  Vue.component(curriculumSelect.name, curriculumSelect);
  Vue.component(teacherDialog.name, teacherDialog);
  Vue.component(sureTimeDialog.name, sureTimeDialog);
  Vue.component(appointmentTeacher.name, appointmentTeacher);
  Vue.component(header.name, header);
  Vue.component(navigation.name, navigation);
}
export {
  paginationMix
}
export default {
  install,
  dateRange
}
