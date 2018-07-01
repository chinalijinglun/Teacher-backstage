import dateRange from './commons/form/dateRange';
import curriculumSelect from './commons/select/curriculumSelect';
import teacherDialog from './commons/dialog/teacherDialog';
import appointmentTeacher from './commons/dialog/appointmentTeacher';
import sureTimeDialog from './commons/dialog/sureTimeDialog';
import addSysUser from './commons/dialog/addSysUser';
import flatFeild from './commons/field/field';
import header from './header';
import navigation from './navigation';
import reasonReview from './commons/dialog/reasonReview';
import orderReasonDialog from './commons/dialog/orderReasonDialog';

import paginationMix from './commons/mixins/paginationMix';

const install = (Vue) => {
  Vue.component(dateRange.name, dateRange);
  Vue.component(curriculumSelect.name, curriculumSelect);
  Vue.component(teacherDialog.name, teacherDialog);
  Vue.component(sureTimeDialog.name, sureTimeDialog);
  Vue.component(orderReasonDialog.name, orderReasonDialog);
  Vue.component(reasonReview.name, reasonReview);
  Vue.component(addSysUser.name, addSysUser);
  Vue.component(appointmentTeacher.name, appointmentTeacher);
  Vue.component(header.name, header);
  Vue.component(navigation.name, navigation);
  Vue.component(flatFeild.name, flatFeild);
}
export {
  paginationMix
}
export default {
  install,
  dateRange
}
