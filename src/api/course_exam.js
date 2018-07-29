import { baseAxios } from '@/utils/axios';
import { DELETE_FLAG } from "../utils/enums";

export const courseExamGet = (params, others) => baseAxios.get('/api/v1/course_exam', { params: { q: JSON.stringify(params), results_per_page: 10, ...others } });

export const courseExamPost = (form) => baseAxios.post('/api/v1/course_exam', form);

export const courseExamDeleteById = (id) => courseExamPutById(id, { delete_flag: DELETE_FLAG.DELETED });

export const courseExamGetById = (id) => baseAxios.get(`/api/v1/course_exam/${id}`);

export const courseExamPutById = (id, form) => baseAxios.put(`/api/v1/course_exam/${id}`, form);

export const courseExamBareGet = (params, others) => baseAxios.get('/api/v1/_bare/course_exam', { params: { q: JSON.stringify(params), results_per_page: 10, ...others } });

export const courseExamBareGetById = (id) => baseAxios.get(`/api/v1/_bare/course_exam/${id}`);
