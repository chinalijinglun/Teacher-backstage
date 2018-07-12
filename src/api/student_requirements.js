import { baseAxios } from '@/utils/axios';
import { DELETE_FLAG } from "../utils/enums";

export const studentRequirementsGet = (params, others) => baseAxios.get('/api/v1/student_requirements', { params: { q: JSON.stringify(params), results_per_page: 10, ...others } });

export const studentRequirementsPost = (form) => baseAxios.post('/api/v1/student_requirements', form);

export const studentRequirementsDeleteById = (id) => studentRequirementsPutById(id, {delete_flag: DELETE_FLAG.DELETED});

export const studentRequirementsGetById = (id) => baseAxios.get(`/api/v1/student_requirements/${id}`);

export const studentRequirementsPutById = (id, form) => baseAxios.put(`/api/v1/student_requirements/${id}`, form);

export const studentRequirementsBareGet = (params, others) => baseAxios.get('/api/v1/_bare/student_requirements', { params: { q: JSON.stringify(params), results_per_page: 10, ...others } });

export const studentRequirementsBareGetById = (id) => baseAxios.get(`/api/v1/_bare/student_requirements/${id}`);
