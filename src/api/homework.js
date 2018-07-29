import { baseAxios } from '@/utils/axios';
import { DELETE_FLAG } from "../utils/enums";

export const homeworkPost = (form) => baseAxios.post('/api/v1/homework', form);

export const homeworkDeleteById = (id) => homeworkPutById(id, {delete_flag: DELETE_FLAG.DELETED});

export const homeworkGetById = (id) => baseAxios.get(`/api/v1/homework/${id}`);

export const homeworkPutById = (id, form) => baseAxios.put(`/api/v1/homework/${id}`, form);

export const homeworkBareGet = (params, others) => baseAxios.get('/api/v1/_bare/homework', { params: { q: JSON.stringify(params), results_per_page: 10, ...others } });

export const homeworkBareGetById = (id) => baseAxios.get(`/api/v1/_bare/homework/${id}`);
