import classification from '@/pages/courseManagement/classification'
import createCourse from '@/pages/courseManagement/createCourse'
import couresPackage from '@/pages/courseManagement/couresPackage'

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
    }

];
