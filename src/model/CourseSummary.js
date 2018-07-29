export const GRADE_ENUMS = [
  'Grade A',
  'Grade B',
  'Grade C',
  'Grade D',
  'Grade E',
  'Grade F',
]
export default class CourseSummary {
  constructor({
    summary = '',
    grade = '',
    review = '',
    comments_behavior = '',
    comments_homework = '',
    suggest = '',
    future_plan = ''
  }) {
    this.summary = summary;
    this.grade = grade;
    this.review = review;
    this.comments_behavior = comments_behavior;
    this.comments_homework = comments_homework;
    this.suggest = suggest;
    this.future_plan = future_plan;
  }
}