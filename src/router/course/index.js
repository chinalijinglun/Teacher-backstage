import classification from '@/pages/course/classification';
import couresPackage from '@/pages/course/couresPackage';
import createPackage from '@/pages/course/createPackage';
import lecture from '@/pages/course/lecture';
import dateClass from '@/pages/course/dateClass';
import lectureInformation from '@/pages/course/lectureInformation';
import enroll from '@/pages/course/enroll';
import auditions from '@/pages/course/auditions';
import studentTrial from '@/pages/course/studentTrial';
import date from '@/pages/course/date';
import generalCourse from '@/pages/course/generalCourse';
import addCurriculum from '@/pages/course/addCurriculum';
import addSubject from '@/pages/course/addSubject';
import addSubjectCategory from '@/pages/course/addSubjectCategory';
import subscribeCourses from '@/pages/course/subscribeCourses';
import courseDetail from '@/pages/course/courseDetail';
import courseSummary from '@/pages/course/courseSummary';
import studyResult from '@/pages/course/studyResult';
import studentScheduleResult from '@/pages/course/studentScheduleResult';
import scheduleHomework from '@/pages/course/scheduleHomework';
import homework from '@/pages/course/homework';
import studentEvaluate from '@/pages/course/studentEvaluate';
import coursewareAudit from '@/pages/course/coursewareAudit';
import courseAuditPage from '@/pages/course/courseAuditPage';

export default [
  {
    // 课程详情
    name:'课程详情',
    path: 'courseDetail',
    name: 'courseDetail',
    component: courseDetail
  },
  {
    title: '课件审核',
    path: 'coursewareAudit',
    name: 'coursewareAudit',
    component: coursewareAudit
  },
  {
    title: '课件审核页面',
    path: 'courseAuditPage',
    name: 'courseAuditPage',
    component: courseAuditPage
  },
  {
    // 课节小结 
    name:'课节小结',
    path: 'studyResult',
    name: 'studyResult',
    component: studyResult
  },
  {
    // 查看小结 
    name:'查看小结',
    path: 'studentScheduleResult',
    name: 'studentScheduleResult',
    component: studentScheduleResult
  },
  {
    // 查看小结 
    name:'课节作业',
    path: 'scheduleHomework',
    name: 'scheduleHomework',
    component: scheduleHomework
  },
  {
    // 课程总结查看 
    name:'课程总结查看',
    path: 'courseSummary',
    name: 'courseSummary',
    component: courseSummary
  },
  {
    // 学生评价 
    name:'学生评价',
    path: 'studentEvaluate',
    name: 'studentEvaluate',
    component: studentEvaluate
  },
  {
    // 课程分类
    name:'课程分类',
    path: 'classification',
    name: 'classification',
    component: classification
  },
  {
    name: '创建一级分类',
    path: 'addCurriculum',
    name: 'addCurriculum',
    component: addCurriculum
  },
  {
    name: '创建二级分类',
    path: 'addSubjectCategory',
    name: 'addSubjectCategory',
    component: addSubjectCategory
  },
  {
    name: '创建三级分类',
    path: 'addSubject',
    name: 'addSubject',
    component: addSubject
  },
  {
    name: '课程包',
    path: 'couresPackage',
    name: 'couresPackage',
    component: couresPackage
  },
  {
    name: '创建课程包',
    path: 'createPackage',
    name: 'createPackage',
    component: createPackage
  },
  {
    name: '试讲课',
    path: 'lecture',
    name: 'lecture',
    component: lecture
  },
  {
    name: '预约试讲课',
    path: 'dateClass',
    name: 'dateClass',
    component: dateClass
  },
  {
    name: '试讲课信息',
    path: 'lectureInformation',
    name: 'lectureInformation',
    component: lectureInformation
  },
  {
    name: '报名',
    path: 'enroll',
    name: 'enroll',
    component: enroll
  },
  {
    name: '试听课',
    path: 'auditions',
    name: 'auditions',
    component: auditions
  },
  {
    name: '学生试听报名',
    path: 'studentTrial',
    name: 'studentTrial',
    component: studentTrial
  },
  {
    name: '预约',
    path: 'date',
    name: 'date',
    component: date
  },
  {
    // 约课
    title:'约课',
    path: 'subscribeCourses',
    name: 'order-subscribeCourses',
    component: subscribeCourses
  },
  {
    name: '常规课程',
    path: 'generalCourse',
    name: 'generalCourse',
    component: generalCourse
  },
  {
    name: '查看作业',
    path: 'homework',
    name: 'homework',
    component: homework
  }
];
