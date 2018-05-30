import Vue from 'vue';
import Router from 'vue-router';
import hello from '@/pages/hello';
import regist from '@/pages/regist';
import login from '@/pages/login';
import main from '@/pages/main';

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
      title:'首页',
      path: '/',
      name: 'hello',
      component: hello
    },
    {
      title:'注册页',
      path: '/regist',
      name: 'regist',
      component: regist
    },
    {
      title:'登录页',
      path: '/login',
      name: 'login',
      component: login
    },
    {
      title: '课程',
      path: '/course',
      name: 'course',
      component: main,
      children: course
    },
    {
      title: '员工',
      path: '/employee',
      component: main,
      name: 'employee',
      children: employee
    },
    {
      title: '订单',
      path: '/order',
      name: 'order',
      component: main,
      children: order
    },
    {
      title: '合作方',
      path: '/partner',
      name: 'partner',
      component: main,
      children: partner
    },
    {
      title: '价格',
      path: '/price',
      name: 'price',
      component: main,
      children: price
    },
    {
      title: '学生',
      path: '/student',
      name: 'student',
      component: main,
      children: student
    },
    {
      title: '教师',
      path: '/teacher',
      name: 'teacher',
      component: main,
      children: teacher
    }
  ]
})
