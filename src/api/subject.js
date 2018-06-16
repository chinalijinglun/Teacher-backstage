import { baseAxios } from '@/utils/axios';

export const subjectGet = (params) => baseAxios.get('/api/v1/subject', { params: { q: JSON.stringify(params) } });

export const subjectPost = (form) => baseAxios.post('/api/v1/subject', form);

export const subjectGetById = (subjectId) => baseAxios.get(`/api/v1/subject/${subjectId}`);

export const subjectPutById = (subjectId, form) => baseAxios.put(`/api/v1/subject/${subjectId}`, form);

export const subjectDeleteById = (subjectId) => baseAxios.delete(`/api/v1/subject/${subjectId}`);
