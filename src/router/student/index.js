import assignConselorList from '@/pages/student/assignConselorList';
import assignAdminList from '@/pages/student/assignAdminList';
import studentList from '@/pages/student/studentList';
import studentDetail from '@/pages/student/studentDetail';

export default [
  {
    // 学生分配-课程顾问列表
    title:'学生分配-课程顾问',
    path: 'assignConselorList',
    name: 'student-assignConselorList',
    component: assignConselorList
  },
  {
    // 学生分配-班主任列表
    title:'学生分配-班主任',
    path: 'assignAdminList',
    name: 'student-assignAdminList',
    component: assignAdminList
  },
  {
    // 学生用户-列表
    title:'学生用户',
    path: 'studentList',
    name: 'student-studentList',
    component: studentList
  },
  {
    // 学生详情
    title:'学生详情',
    path: 'studentDetail',
    name: 'student-studentDetail',
    component: studentDetail
  }
];
