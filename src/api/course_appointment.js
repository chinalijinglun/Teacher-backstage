import { baseAxios } from '@/utils/axios';
import { DELETE_FLAG } from "../utils/enums";

export const courseAppointmentGet = (params, options) => baseAxios.get('/api/v1/course_appointment', { params: { q: JSON.stringify(params), results_per_page: 10, ...options } });

export const courseAppointmentPost = (form) => baseAxios.post('/api/v1/course_appointment', form);

export const courseAppointmentGetById = (id) => baseAxios.get(`/api/v1/course_appointment/${id}`);

export const courseAppointmentPutById = (id, form) => baseAxios.put(`/api/v1/course_appointment/${id}`, form);

export const courseAppointmentDeleteById = (id) => courseAppointmentPutById(id, {delete_flag: DELETE_FLAG.DELETED});

export const mangerThacherTryout = (form) => baseAxios.post('/manger/thacher_tryout', form)
