export default class StudentSubject {
  constructor({
    subjectClass = [],
    optional = 1,
    subject_type = 2,
    delete_flag = 1
  }) {
    this.subjectClass = subjectClass;
    this.optional = optional
    this.subject_type = subject_type
    this.delete_flag = delete_flag
  }
}