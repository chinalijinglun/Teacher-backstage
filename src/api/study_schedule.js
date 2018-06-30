import { baseAxios } from '@/utils/axios';
import { DELETE_FLAG } from "../utils/enums";

export const studyScheduleGet = (params, others) => baseAxios.get('/api/v1/study_schedule', { params: { q: JSON.stringify(params), results_per_page: 10, ...others } });

export const studySchedulePost = (form) => baseAxios.post('/api/v1/study_schedule', form);

export const studyScheduleDeleteById = (id) => studySchedulePutById(id, {delete_flag: DELETE_FLAG.DELETED});

export const studyScheduleGetById = (id) => baseAxios.get(`/api/v1/study_schedule/${id}`);

export const studySchedulePutById = (id, form) => baseAxios.put(`/api/v1/study_schedule/${id}`, form);

export const studyScheduleBareGet = (params, others) => baseAxios.get('/api/v1/_bare/study_schedule', { params: { q: JSON.stringify(params), results_per_page: 10, ...others } });

export const studyScheduleBareGetById = (id) => baseAxios.get(`/api/v1/_bare/study_schedule/${id}`);
