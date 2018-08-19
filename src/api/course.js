import { baseAxios } from '@/utils/axios';
import {DELETE_FLAG} from "../utils/enums";

export const coursePost = (form) => baseAxios.post('/api/v1/course', form);

export const courseDeleteByCourseId = (id) => coursePutByCourseId(id, {delete_flag: DELETE_FLAG.DELETED});

export const courseGetByCourseId = (courseId) => baseAxios.get(`/api/v1/course/${courseId}`);

export const coursePutByCourseId = (courseId, form) => baseAxios.put(`/api/v1/course/${courseId}`, form);

export const courseBareGet = (params, others) => baseAxios.get('/api/v1/_bare/course', { params: { q: JSON.stringify(params), results_per_page: 10, ...others } });

export const courseBareGetByCourseId = (courseId) => baseAxios.get(`/api/v1/_bare/course/${courseId}`);

export const coursePackageQuery = (params) => baseAxios.post('/course/package_query', params);

export const mangerThacherCommon = (form) => baseAxios.post('/manger/thacher_common', form);

export const courseSchedule = (form) => baseAxios.post('/course/schedule', form);

export const studentTryout = (form) => baseAxios.post('/manger/student_tryout',form);

export const mangerStudentTryoutApply = (form) => baseAxios.post('/manger/student_tryout_apply', form);

// 课程详情
export const getCourseSchedule = (form) => baseAxios.post('/course/course_schedule', form);

export const courseCommon = (form) => baseAxios.post('/course/common', form);

export const courseSummary = form => baseAxios.post('/course/common_summary_result', form);

export const studentEvaluat = id => baseAxios.post('/course/common_evaluation', {
  course_schedule_id: id,
  page_limit: 1000,
  page_no: 1
})

export const courseAdd = form => baseAxios.post('/course/schedule_compensate', form)
