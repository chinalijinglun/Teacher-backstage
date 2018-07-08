import { baseAxios } from '@/utils/axios';
import { DELETE_FLAG } from "../utils/enums";

export const studyAppointmentmentPost = (form) => baseAxios.post('/api/v1/study_appointment', form);

export const studyAppointmentmentDeleteById = (id) => studyAppointmentmentPutById(id, {delete_flag: DELETE_FLAG.DELETED});

export const studyAppointmentmentGetById = (id) => baseAxios.get(`/api/v1/study_appointment/${id}`);

export const studyAppointmentmentPutById = (id, form) => baseAxios.put(`/api/v1/study_appointment/${id}`, form);

export const studyAppointmentmentBareGet = (params, others) => baseAxios.get('/api/v1/_bare/study_appointment', { params: { q: JSON.stringify(params), results_per_page: 10, ...others } });

export const studyAppointmentmentBareGetById = (id) => baseAxios.get(`/api/v1/_bare/study_appointment/${id}`);
