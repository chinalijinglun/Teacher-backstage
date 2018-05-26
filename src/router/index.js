import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main'


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
    ...course.map(item=>{
      return {
        ...item,
        path: '/course'+item.path
      }
    }),
    ...employee.map(item=>{
      return {
        ...item,
        path: '/employee'+item.path
      }
    }),
    ...order.map(item=>{
      return {
        ...item,
        path: '/order'+item.path
      }
    }),
    ...partner.map(item=>{
      return {
        ...item,
        path: '/partner'+item.path
      }
    }),
    ...price.map(item=>{
      return {
        ...item,
        path: '/price'+item.path
      }
    }),
    ...student.map(item=>{
      return {
        ...item,
        path: '/student'+item.path
      }
    }),
    ...teacher.map(item=>{
      return {
        ...item,
        path: '/teacher'+item.path
      }
    })
  ]
})
