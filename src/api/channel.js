import { baseAxios } from '@/utils/axios';
import { DELETE_FLAG } from "../utils/enums";

export const channelPost = (form) => baseAxios.post('/api/v1/channel', form);

export const channelDeleteById = (id) => channelPutById(id, {delete_flag: DELETE_FLAG.DELETED});

export const channelGetById = (id) => baseAxios.get(`/api/v1/channel/${id}`);

export const channelPutById = (id, form) => baseAxios.put(`/api/v1/channel/${id}`, form);

export const channelBareGet = (params, others) => baseAxios.get('/api/v1/_bare/channel', { params: { q: JSON.stringify(params), results_per_page: 10, ...others } });

export const channelBareGetById = (id) => baseAxios.get(`/api/v1/_bare/channel/${id}`);
