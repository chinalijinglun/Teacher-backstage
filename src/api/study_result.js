import { baseAxios } from '@/utils/axios';
import { DELETE_FLAG } from "../utils/enums";

export const studyResultGet = (params, others) => baseAxios.get('/api/v1/study_result', { params: { q: JSON.stringify(params), results_per_page: 10, ...others } });

export const studyResultPost = (form) => baseAxios.post('/api/v1/study_result', form);

export const studyResultDeleteById = (id) => studyResultPutById(id, { delete_flag: DELETE_FLAG.DELETED });

export const studyResultGetById = (id) => baseAxios.get(`/api/v1/study_result/${id}`);

export const studyResultPutById = (id, form) => baseAxios.put(`/api/v1/study_result/${id}`, form);

export const studyResultBareGet = (params, others) => baseAxios.get('/api/v1/_bare/study_result', { params: { q: JSON.stringify(params), results_per_page: 10, ...others } });

export const studyResultBareGetById = (id) => baseAxios.get(`/api/v1/_bare/study_result/${id}`);

export const summaryGet = (form) => baseAxios.post(`/course/common_summary`, form);
