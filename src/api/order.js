import { baseAxios } from '@/utils/axios';
import { DELETE_FLAG } from "../utils/enums";

export const orderPost = (form) => baseAxios.post('/api/v1/order', form);

export const orderDeleteById = (id) => orderPutById(id, {delete_flag: DELETE_FLAG.DELETED});

export const orderGetById = (id) => baseAxios.get(`/api/v1/order/${id}`);

export const orderPutById = (id, form) => baseAxios.put(`/api/v1/order/${id}`, form);

export const orderBareGet = (params, others) => baseAxios.get('/api/v1/_bare/order', { params: { q: JSON.stringify(params), results_per_page: 10, ...others } });

export const orderBareGetById = (id) => baseAxios.get(`/api/v1/_bare/order/${id}`);

export const orderMainQuery = (form) => baseAxios.post('/order/main_query',form);

export const orderRefund = (form) => baseAxios.post('/order/refund',form);

export const orderEstablish = (form) => baseAxios.post('/order/establish',form);

export const mangeOrders = (form) => baseAxios.post('/manger/orders', form);

export const mangeRefunds = (form) => baseAxios.post('/manger/refunds', form);
