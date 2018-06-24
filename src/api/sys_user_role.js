import { baseAxios } from '@/utils/axios';
import { DELETE_FLAG } from "../utils/enums";

export const sysUserRolePost = (form) => baseAxios.post('/api/v1/sys_user_role', form);

export const sysUserRoleDeleteById = (id) => sysUserRolePutById(id, {delete_flag: DELETE_FLAG.DELETED});

export const sysUserRoleGetById = (id) => baseAxios.get(`/api/v1/sys_user_role/${id}`);

export const sysUserRolePutById = (id, form) => baseAxios.put(`/api/v1/sys_user_role/${id}`, form);

export const sysUserRoleBareGet = (params, others) => baseAxios.get('/api/v1/_bare/sys_user_role', { params: { q: JSON.stringify(params), results_per_page: 10, ...others } });

export const sysUserRoleBareGetById = (id) => baseAxios.get(`/api/v1/_bare/sys_user_role/${id}`);
