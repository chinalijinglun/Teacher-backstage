import { baseAxios } from '@/utils/axios';
import { DELETE_FLAG } from "@/utils/enums";

export const curriculumGet = (params, options) => baseAxios.get('/api/v1/curriculum', {params: {q: JSON.stringify(params),...options}});

export const curriculumPost = form => baseAxios.post('/api/v1/curriculum', form);

export const curriculumGetByCurriculumid = curriculumid => baseAxios.get(`/api/v1/curriculum/${curriculumid}`);

export const curriculumGetBare = (params, options) => baseAxios.get('/api/v1/_bare/curriculum', {params: {q: JSON.stringify(params),results_per_page: 1000,page: 1,...options}});

export const curriculumGetByCurriculumidBare = curriculumid => baseAxios.get(`/api/v1/_bare/curriculum/${curriculumid}`);

export const curriculumPutByCurriculumid = (curriculumid, form) => baseAxios.put(`/api/v1/curriculum/${curriculumid}`, form);

export const curriculumDeleteByCurriculumid = curriculumid => curriculumPutByCurriculumid(curriculumid, { delete_flag: DELETE_FLAG.DELETED });
