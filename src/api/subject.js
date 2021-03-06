import { baseAxios } from '@/utils/axios';
import { DELETE_FLAG } from "../utils/enums";

export const subjectGet = (params) => baseAxios.get('/api/v1/subject', { params: { q: JSON.stringify(params) } });

export const subjectPost = (form) => baseAxios.post('/api/v1/subject', form);

export const subjectGetBySubjectid = (subjectid) => baseAxios.get(`/api/v1/subject/${subjectid}`);

export const subjectBareGetById = (subjectid) => baseAxios.get(`/api/v1/_bare/subject/${subjectid}`);

export const subjectPutBySubjectid = (subjectid, form) => baseAxios.put(`/api/v1/subject/${subjectid}`, form);

export const subjectDeleteBySubjectid = (id) => baseAxios.post('/course/del_course_package', { "course_id": id, "type": "3" });
