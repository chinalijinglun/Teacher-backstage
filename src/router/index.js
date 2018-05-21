import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/index'
import classification from '@/pages/courseManagement/classification'

Vue.use(Router)

export default new Router({
  routes: [
    {
      // 首页
      name:'首页',
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      // 课程分类
      name:'课程分类',
      path: '/classification',
      name: 'classification',
      component: classification
    }
  ]
})
