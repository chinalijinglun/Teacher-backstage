import { baseAxios } from '@/utils/axios';

export const subjectCategoryGet = (params) => baseAxios.get('/api/v1/subject_category', { params: { q: JSON.stringify(params) } });

export const subjectCategoryPost = (form) => baseAxios.post('/api/v1/subject_category', form);

export const subjectCategoryGetById = (subjectcategoryId) => baseAxios.get(`/api/v1/subject_category/${subjectcategoryId}`);

export const subjectCategoryPutById = (subjectcategoryId, form) => baseAxios.put(`/api/v1/subject_category/${subjectcategoryId}`, form);

export const subjectCategoryDeleteById = (subjectcategoryId) => baseAxios.delete(`/api/v1/subject_category/${subjectcategoryId}`);
