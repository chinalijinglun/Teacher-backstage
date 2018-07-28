import { baseAxios } from '@/utils/axios';
import { DELETE_FLAG } from "../utils/enums";

export const sysUserPost = (form) => baseAxios.post('/api/v1/sys_user', form);

export const sysUserDeleteById = (id) => sysUserPutById(id, {delete_flag: DELETE_FLAG.DELETED});

export const sysUserGetById = (id) => baseAxios.get(`/api/v1/sys_user/${id}`);

export const sysUserPutById = (id, form) => baseAxios.put(`/api/v1/sys_user/${id}`, form);

export const sysUserBareGet = (params, others) => baseAxios.get('/api/v1/_bare/sys_user', { params: { q: JSON.stringify(params), results_per_page: 10, ...others } });

export const sysUserBareGetById = (id) => baseAxios.get(`/api/v1/_bare/sys_user/${id}`);

export const mangerStaffQuery = form => baseAxios.post('/manger/staff_query', form);

// 修改课节时间
export const modifyScheduleTime = form => baseAxios.post('/course/edit_course_schedule', form);

// 修改课节状态
export const modifyScheduleType = form => baseAxios.post('/course/edit_course_schedule_type', form);

// view_homework
export const viewHomework = form => baseAxios.post('/manger/view_homework', form);
