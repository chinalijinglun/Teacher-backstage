import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/index'
import classification from '@/pages/courseManagement/classification'

import course from './course';
import employee from './employee';
import order from './order';
import partner from './partner';
import price from './price';
import student from './student';
import teacher from './teacher';

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
    },
    ...course.map(item=>{
      return {
        path: '/course'+item.path,
        ...item
      }
    }),
    ...employee.map(item=>{
      return {
        path: '/employee'+item.path,
        ...item
      }
    }),
    ...order.map(item=>{
      return {
        path: '/order'+item.path,
        ...item
      }
    }),
    ...partner.map(item=>{
      return {
        path: '/partner'+item.path,
        ...item
      }
    }),
    ...price.map(item=>{
      return {
        path: '/price'+item.path,
        ...item
      }
    }),
    ...student.map(item=>{
      return {
        path: '/student'+item.path,
        ...item
      }
    }),
    ...teacher.map(item=>{
      return {
        path: '/teacher'+item.path,
        ...item
      }
    })
  ]
})
