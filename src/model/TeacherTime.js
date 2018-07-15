import store from '@/store'

export default class TeacherTime {
  constructor({
    week = '',
    // {id, range}
    timeRanges = []
  }) {
    this.week = week;
    this.timeRanges = timeRanges
  }
}