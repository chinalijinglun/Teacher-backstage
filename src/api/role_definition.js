import { baseAxios } from '@/utils/axios';
import { DELETE_FLAG } from "../utils/enums";

export const roleDefinitionPost = (form) => baseAxios.post('/api/v1/role_definition', form);

export const roleDefinitionDeleteById = (id) => roleDefinitionPutById(id, {delete_flag: DELETE_FLAG.DELETED});

export const roleDefinitionGetById = (id) => baseAxios.get(`/api/v1/role_definition/${id}`);

export const roleDefinitionPutById = (id, form) => baseAxios.put(`/api/v1/role_definition/${id}`, form);

export const roleDefinitionBareGet = (params, others) => baseAxios.get('/api/v1/_bare/role_definition', { params: { q: JSON.stringify(params), results_per_page: 10, ...others } });

export const roleDefinitionBareGetById = (id) => baseAxios.get(`/api/v1/_bare/role_definition/${id}`);
