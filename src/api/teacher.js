import { baseAxios } from '@/utils/axios';
import { DELETE_FLAG } from "../utils/enums";

export const teacherGet = (params, options) => baseAxios.get('/api/v1/teacher', { params: { q: JSON.stringify(params),results_per_page: 10,...options } });
export const teacherGetBare = (params, options) => baseAxios.get('/api/v1/_bare/teacher', { params: { q: JSON.stringify(params),results_per_page: 10,...options } });

export const teacherPost = (form) => baseAxios.post('/api/v1/teacher', form);

export const teacherGetByTeacherid = (teacherid) => baseAxios.get(`/api/v1/teacher/${teacherid}`);
export const teacherGetBareByTeacherid = (teacherid) => baseAxios.get(`/api/v1/_bare/teacher/${teacherid}`);

export const teacherPutByTeacherid = (teacherid, form) => baseAxios.put(`/api/v1/teacher/${teacherid}`, form);

export const teacherDeleteByTeacherid = (teacherid) => teacherPutByTeacherid(teacherid, {delete_flag: DELETE_FLAG.DELETED});

export const mangerThacherCheck = (form) => baseAxios.post('/manger/thacher_check', form);

export const mangerThacherInterview = (form) => baseAxios.post('/manger/thacher_interview', form);

export const mangerThacherApponit = form => baseAxios.post('/manger/thacher_apponit', form);

export const teacherCheckPass = teacher_id => baseAxios.post('/teacher/check_pass', {teacher_id});

export const teacherMainQuery = form => baseAxios.post('/teacher/main_query', form);
