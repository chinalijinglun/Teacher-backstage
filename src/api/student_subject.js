import { baseAxios } from '@/utils/axios';
import { DELETE_FLAG } from "../utils/enums";
import { json2filter } from "../utils/json2filter";

export const studentSubjectGet = (params) => baseAxios.get('/api/v1/student_subject', { params: { q: JSON.stringify(params) } });

export const studentSubjectPost = (form) => baseAxios.post('/api/v1/student_subject', form);

export const studentSubjectGetById = (id) => baseAxios.get(`/api/v1/student_subject/${id}`);

export const studentSubjectBareGetById = (id) => baseAxios.get(`/api/v1/_bare/student_subject/${id}`);

export const studentSubjectBareGet = (params) => baseAxios.get(`/api/v1/_bare/student_subject`, { params: { q: JSON.stringify(params) } });

export const studentSubjectPutById = (id, form) => baseAxios.put(`/api/v1/student_subject/${id}`, form);

export const studentSubjectDeleteById = (id) => studentSubjectPutById(id, {delete_flag: DELETE_FLAG.DELETED});

// export const studentSubjectType2GetByStudentId = (studentId) => {
//   return baseAxios.post('/student/subject', {
//     page_limit: 1000,
//     page_no: 1,
//     student_id: studentId,
//     type: 2
//   }).then(resp => resp.data.objects)
// }
export const studentSubjectType2GetByStudentId = (studentId) => {
  const f = json2filter({})
  return studentSubjectGet(f, {
    page:1 , 
    results_per_page: 1000
  }).then(resp => resp.data.objects.map(item => ({
    ...item,
    curriculum_id: item.students?item.students.curriculum_id:null,
    subject_category_id: item.students?item.students.subject_category_id:null,
    type: item.subject_type
  })))
}
