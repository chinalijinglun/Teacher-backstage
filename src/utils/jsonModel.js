import {
  dateFmt,
  DATE_NO_TIME_FMT
} from './date';
export class DateTimeVo {
  constructor({date, timeRange} = { date: '', timeRange: null }) {
    this.date = date&&new Date(date);
    this.timeRange = timeRange;
  }
  valid() {
    if(!this.date) {
      return {
        state: false,
        msg: '日期不能为空！'
      }
    }
    if(!this.timeRange) {
      return {
        state: false,
        msg: '时间不能为空！'
      }
    }
    return {
      state: true,
      msg: 'success'
    }
  }
  parse() {
    if(this.valid().state) {
      const date = dateFmt(this.date, DATE_NO_TIME_FMT);
      const start = dateFmt(this.timeRange[0],'hh:mm:ss');
      const end = dateFmt(this.timeRange[1],'hh:mm:ss');
      return {
        date,
        start,
        end
      }
    }
    return {
      date: '',
      start: '',
      end: ''
    }
  }
}