import onlineAudit from '@/pages/teacher/onlineAudit';
import auditPage from '@/pages/teacher/auditPage';
import interview from '@/pages/teacher/interview';
import dateInterview from '@/pages/teacher/dateInterview';
import interviewResult from '@/pages/teacher/interviewResult';
import interviewReport from '@/pages/teacher/interviewReport';
import contract from '@/pages/teacher/contract';
import contractMess from '@/pages/teacher/contractMess';
import lookContract from '@/pages/teacher/lookContract';
import teacherUser from '@/pages/teacher/teacherUser';
import teacherDetail from '@/pages/teacher/teacherDetail';
import teacherEdit from '@/pages/teacher/teacherEdit';
import teacherCourse from '@/pages/teacher/teacherCourse';
import agreement from '@/pages/teacher/agreement';
import teacherInfoReadOnly from '@/pages/teacher/teacherInfoReadOnly';

export default [
  {
    title:'教师详情',
    path: 'teacherInfoReadOnly',
    name: 'teacherInfoReadOnly',
    component: teacherInfoReadOnly
  },
  {
    title:'教师在线审核',
    path: 'onlineAudit',
    name: 'onlineAudit',
    component: onlineAudit
  },
  {
    title:'教师在线审核',
    path: 'auditPage',
    name: 'auditPage',
    component: auditPage
  },
  {
    title: '教师面试',
    path: 'interview',
    name: 'interview',
    component: interview
  },
  {
    title: '预约面试',
    path: 'dateInterview',
    name: 'dateInterview',
    component: dateInterview
  },
  {
    title: '面试结果',
    path: 'interviewResult',
    name: 'interviewResult',
    component: interviewResult

  },
  {
    title: '面试报告',
    path: 'interviewReport',
    name: 'interviewReport',
    component: interviewReport
  },
  {
    title: '教师签约',
    path: 'contract',
    name: 'contract',
    component: contract
  },
  {
    title: '签约',
    path: 'contractMess',
    name: 'contractMess',
    component: contractMess
  },
  {
    title: '查看签约',
    path: 'lookContract',
    name: 'lookContract',
    component: lookContract
  },
  {
    title: '教师用户',
    path: 'teacherUser',
    name: 'teacherUser',
    component: teacherUser
  },
  {
    title: '教师详情',
    path: 'teacherDetail',
    name: 'teacherDetail',
    component: teacherDetail
  },
  {
    title: '教师编辑',
    path: 'teacherEdit',
    name: 'teacherEdit',
    component: teacherEdit
  },
  {
    title: '教师课程',
    path: 'teacherCourse',
    name: 'teacherCourse',
    component: teacherCourse
  },
  {
    title: '发合同',
    path: 'agreement',
    name: 'agreement',
    component: agreement
  }
];
