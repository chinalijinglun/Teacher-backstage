import { baseAxios } from '@/utils/axios';
import { DELETE_FLAG } from "../utils/enums";

export const teacherHistoryPost = (form) => baseAxios.post('/api/v1/teacher_history', form);

export const teacherHistoryDeleteById = (id) => teacherHistoryPutById(id, {delete_flag: DELETE_FLAG.DELETED});
// export const teacherHistoryDeleteById = (id) => baseAxios.delete(`/api/v1/teacher_history/${id}`);

export const teacherHistoryGetById = (id) => baseAxios.get(`/api/v1/teacher_history/${id}`);

export const teacherHistoryPutById = (id, form) => baseAxios.put(`/api/v1/teacher_history/${id}`, form);

export const teacherHistoryBareGet = (params, others) => baseAxios.get('/api/v1/_bare/teacher_history', { params: { q: JSON.stringify(params), results_per_page: 10, ...others } });

export const teacherHistoryBareGetById = (id) => baseAxios.get(`/api/v1/_bare/teacher_history/${id}`);
