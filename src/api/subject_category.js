import { baseAxios } from '@/utils/axios';
import { DELETE_FLAG } from "../utils/enums";

export const subjectCategoryGet = (params) => baseAxios.get('/api/v1/subject_category', { params: { q: JSON.stringify(params) } });

export const subjectCategoryGetBare = (params) => baseAxios.get('/api/v1/_bare/subject_category', { params: { q: JSON.stringify(params), results_per_page: 1000, page: 1 } });

export const subjectCategoryPost = (form) => baseAxios.post('/api/v1/subject_category', form);

export const subjectCategoryGetBySubjectcategoryId = (subjectcategoryId) => baseAxios.get(`/api/v1/subject_category/${subjectcategoryId}`);

export const subjectCategoryPutBySubjectcategoryId = (subjectcategoryId, form) => baseAxios.put(`/api/v1/subject_category/${subjectcategoryId}`, form);

export const subjectCategoryDeleteBySubjectcategoryId = (subjectcategoryId) => subjectCategoryPutBySubjectcategoryId(subjectcategoryId, {delete_flag: DELETE_FLAG.DELETED});
