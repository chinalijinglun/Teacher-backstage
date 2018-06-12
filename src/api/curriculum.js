import { baseAxios } from '@/utils/axios';

export const curriculumPost = form => baseAxios.post('/api/v1/curriculum');
