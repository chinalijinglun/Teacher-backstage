import classification from '@/pages/courseManagement/classification'
import createCourse from '@/pages/courseManagement/createCourse'
import couresPackage from '@/pages/courseManagement/couresPackage'
import createPackage from '@/pages/courseManagement/createPackage'
import lecture from '@/pages/courseManagement/lecture'
import dateClass from '@/pages/courseManagement/dateClass'
import lectureInformation from '@/pages/courseManagement/lectureInformation'
import enroll from '@/pages/courseManagement/enroll'
import auditions from '@/pages/courseManagement/auditions'
import studentTrial from '@/pages/courseManagement/studentTrial'
import date from '@/pages/courseManagement/date'
import dateTeacher from '@/pages/courseManagement/dateTeacher'

export default [
    {
      // 课程分类
      name:'课程分类',
      path: '/classification',
      name: 'classification',
      component: classification
    },
    {
      name: '创建分类',
      path: '/createCourse',
      name: 'createCourse',
      component: createCourse
    },
    {
      name: '课程包',
      path: '/couresPackage',
      name: 'couresPackage',
      component: couresPackage
    },
    {
      name: '创建课程包',
      path: '/createPackage',
      name: 'createPackage',
      component: createPackage
    },
    {
      name: '试讲课',
      path: '/lecture',
      name: 'lecture',
      component: lecture
    },
    {
      name: '预约试讲课',
      path: '/dateClass',
      name: 'dateClass',
      component: dateClass
    },
    {
      name: '试讲课信息',
      path: '/lectureInformation',
      name: 'lectureInformation',
      component: lectureInformation
    },
    {
      name: '报名',
      path: '/enroll',
      name: 'enroll',
      component: enroll
    },
    {
      name: '试听课',
      path: '/auditions',
      name: 'auditions',
      component: auditions
    },
    {
      name: '学生试听报名',
      path: '/studentTrial',
      name: 'studentTrial',
      component: studentTrial
    },
    {
      name: '预约',
      path: '/date',
      name: 'date',
      component: date
    },
    {
      name: '预约教师上课',
      path: '/dateTeacher',
      name: 'dateTeacher',
      component: dateTeacher
    }

];
