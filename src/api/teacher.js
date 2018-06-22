import { baseAxios } from '@/utils/axios';
import { DELETE_FLAG } from "../utils/enums";

export const teacherGet = (params, options) => baseAxios.get('/api/v1/teacher', { params: { q: JSON.stringify(params),...options } });

export const teacherPost = (form) => baseAxios.post('/api/v1/teacher', form);

export const teacherGetByTeacherid = (teacherid) => baseAxios.get(`/api/v1/teacher/${teacherid}`);

export const teacherPutByTeacherid = (teacherid, form) => baseAxios.put(`/api/v1/teacher/${teacherid}`, form);

export const teacherDeleteByTeacherid = (teacherid) => teacherPutByTeacherid(teacherid, {delete_flag: DELETE_FLAG.DELETED});
