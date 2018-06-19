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
import dateTeacher from '@/pages/course/dateTeacher';
import generalCourse from '@/pages/course/generalCourse';
import addCurriculum from '@/pages/course/addCurriculum';
import addSubject from '@/pages/course/addSubject';
import addSubjectCategory from '@/pages/course/addSubjectCategory';

export default [
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
      name: '预约教师上课',
      path: 'dateTeacher',
      name: 'dateTeacher',
      component: dateTeacher
    },
    {
      name: '常规课程',
      path: 'generalCourse',
      name: 'generalCourse',
      component: generalCourse
    }

];
