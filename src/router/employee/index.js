import employeeList from '@/pages/employee/employeeList';
import limitManage from '@/pages/employee/limitManage';

export default [
  {
    // 员工列表
    title:'员工列表',
    path: '/employeeList',
    name: 'employee-employeeList',
    component: employeeList
  },
  {
    // 权限管理
    title:'权限管理',
    path: '/limitManage',
    name: 'employee-limitManage',
    component: limitManage
  }
];
