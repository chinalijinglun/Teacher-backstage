import { baseAxios } from '@/utils/axios';

export const courseGet = (params) => baseAxios.get('/api/v1/course', { params: { q: JSON.stringify(params) } });

export const coursePost = (form) => baseAxios.post('/api/v1/course', form);

export const courseDeleteByCourseId = (courseId) => baseAxios.delete(`/api/v1/course/${courseId}`);

export const courseGetByCourseId = (courseId) => baseAxios.get(`/api/v1/course/${courseId}`);

export const coursePutByCourseId = (courseId, form) => baseAxios.put(`/api/v1/course/${courseId}`, form);
