import classification from '@/pages/courseManagement/classification'
import createCourse from '@/pages/courseManagement/createCourse'
import couresPackage from '@/pages/courseManagement/couresPackage'
import createPackage from '@/pages/courseManagement/createPackage'
import lecture from '@/pages/courseManagement/lecture'
import dateClass from '@/pages/courseManagement/dateClass'
import lectureInformation from '@/pages/courseManagement/lectureInformation'
import enroll from '@/pages/courseManagement/enroll'

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
    }

];
