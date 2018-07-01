import { baseAxios } from '@/utils/axios';
import { DELETE_FLAG } from "../utils/enums";

export const payLogPost = (form) => baseAxios.post('/api/v1/pay_log', form);

export const payLogDeleteById = (id) => payLogPutById(id, {delete_flag: DELETE_FLAG.DELETED});

export const payLogGetById = (id) => baseAxios.get(`/api/v1/pay_log/${id}`);

export const payLogPutById = (id, form) => baseAxios.put(`/api/v1/pay_log/${id}`, form);

export const payLogBareGet = (params, others) => baseAxios.get('/api/v1/_bare/pay_log', { params: { q: JSON.stringify(params), results_per_page: 1000, page: 1, ...others } });

export const payLogBareGetById = (id) => baseAxios.get(`/api/v1/_bare/pay_log/${id}`);
