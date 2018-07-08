import { baseAxios } from '@/utils/axios';
import {DELETE_FLAG} from "../utils/enums";

export const coursewarePost = (form) => baseAxios.post('/api/v1/courseware', form);

export const coursewareDeleteById = (id) => coursewarePutById(id, {delete_flag: DELETE_FLAG.DELETED});

export const coursewareGetById = (Id) => baseAxios.get(`/api/v1/courseware/${Id}`);

export const coursewarePutById = (Id, form) => baseAxios.put(`/api/v1/courseware/${Id}`, form);

export const coursewareBareGet = (params, others) => baseAxios.get('/api/v1/_bare/courseware', { params: { q: JSON.stringify(params), results_per_page: 10, ...others } });

export const coursewareBareGetById = (Id) => baseAxios.get(`/api/v1/_bare/courseware/${Id}`);

export const mangerCourseWare = (form) => baseAxios.post('/manger/course_ware', form);
