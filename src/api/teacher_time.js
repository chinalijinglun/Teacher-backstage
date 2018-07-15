import { baseAxios } from '@/utils/axios';
import { DELETE_FLAG } from "../utils/enums";
import { json2filter } from "../utils/json2filter";

export const teacherTimePost = (form) => baseAxios.post('/api/v1/teacher_time', form);

export const teacherTimeDeleteById = (id) => teacherTimePutById(id, {delete_flag: DELETE_FLAG.DELETED});
// export const teacherTimeDeleteById = (id) => baseAxios.delete(`/api/v1/teacher_time/${id}`);

export const teacherTimeGetById = (id) => baseAxios.get(`/api/v1/teacher_time/${id}`);

export const teacherTimePutById = (id, form) => baseAxios.put(`/api/v1/teacher_time/${id}`, form);

export const teacherTimeBareGet = (params, others) => baseAxios.get('/api/v1/_bare/teacher_time', { params: { q: JSON.stringify(params), page:1 , results_per_page: 1000, ...others } });

export const teacherTimeBareGetById = (id) => baseAxios.get(`/api/v1/_bare/teacher_time/${id}`);

export const teacherTimeBareGetByTeacherId = (teacher_id) => {
  const f = json2filter({
    teacher_id: [teacher_id]
  });
  return teacherTimeBareGet(f)
}
