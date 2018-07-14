import store from '@/store'

export default class TeacherTime {
  constructor({
    id,
    week = '',
    end,
    start,
    teacher_id = '',
    delete_flag = 1,
    created_at = new Date(),
    updated_at = new Date(),
    updated_by = store.state.auth.userName
  }) {
    this.id = id;
    this.week = week;
    this.end = end;
    this.start = start;
    this.teacher_id = teacher_id;
    this.delete_flag = delete_flag;
    this.created_at = created_at;
    this.updated_at = updated_at;
    this.updated_by = updated_by;
  }
}