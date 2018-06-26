import { baseAxios } from '@/utils/axios';
import { DELETE_FLAG } from "../utils/enums";

export const studentGet = (params, others) => baseAxios.get('/api/v1/student', { params: { q: JSON.stringify(params), results_per_page: 10, ...others } });

export const studentPost = (form) => baseAxios.post('/api/v1/student', form);

export const studentDeleteById = (id) => studentPutById(id, {delete_flag: DELETE_FLAG.DELETED});

export const studentGetById = (id) => baseAxios.get(`/api/v1/student/${id}`);

export const studentPutById = (id, form) => baseAxios.put(`/api/v1/student/${id}`, form);

export const studentBareGet = (params, others) => baseAxios.get('/api/v1/_bare/student', { params: { q: JSON.stringify(params), results_per_page: 10, ...others } });

export const studentBareGetById = (id) => baseAxios.get(`/api/v1/_bare/student/${id}`);

export const studentCoursePost = (form) => baseAxios.post('/manger/student_course', form);
