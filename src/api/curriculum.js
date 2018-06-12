import { baseAxios } from '@/utils/axios';

export const curriculumGet = params => baseAxios.get('/api/v1/curriculum', {params: {q: JSON.stringify(params)}});

export const curriculumPost = form => baseAxios.post('/api/v1/curriculum', form);
