import { baseAxios } from '@/utils/axios';
import { DELETE_FLAG } from "../utils/enums";

export const interviewGet = (params, options) => baseAxios.get('/api/v1/interview', { params: { q: JSON.stringify(params),results_per_page: 10,...options } });

export const interviewGetBare = (params, options) => baseAxios.get('/api/v1/_bare/interview', { params: { q: JSON.stringify(params),results_per_page: 10,...options } });

export const interviewPost = (form) => baseAxios.post('/api/v1/interview', form);

export const interviewGetByinterviewid = (interviewid) => baseAxios.get(`/api/v1/_bare/interview/${interviewid}`);

export const interviewPutByinterviewid = (interviewid, form) => baseAxios.put(`/api/v1/interview/${interviewid}`, form);

export const interviewDeleteByinterviewid = (interviewid) => interviewPutByinterviewid(interviewid, {delete_flag: DELETE_FLAG.DELETED});
