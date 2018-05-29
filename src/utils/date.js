const DATE_FMT_DEFAULT = 'yyyy-MM-dd hh:mm:ss';
const DATE_NO_TIME_FMT = 'yyyy-MM-dd';

function dateFmt(date, fmt = DATE_FMT_DEFAULT){
  let innerDate = date;
  if(!innerDate instanceof Date) {
    if(typeof innerDate === 'string') {
      innerDate = innerDate.replace(/\-/g,'/');
    }
    innerDate = new Date(innerDate);
  }
  const o = {
    "M+": innerDate.getMonth() + 1, //月份 
    "d+": innerDate.getDate(), //日 
    "h+": innerDate.getHours(), //小时 
    "m+": innerDate.getMinutes(), //分 
    "s+": innerDate.getSeconds(), //秒 
    "q+": Math.floor((innerDate.getMonth() + 3) / 3), //季度 
    "S": innerDate.getMilliseconds() //毫秒 
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (innerDate.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (let k in o)
  if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}

function dateFactory() {
  const date = new Date(...arguments);

  function getMonDayThisWeek() {
    return this.getThisWeekDateByDay(1);
  }
  function getDayStart() {
    const monthDay = this.getDate();
    const year = this.getFullYear();
    const month = this.getMonth();
    return dateFactory(year, month, monthDay, 0, 0, 0);
  }
  function getThisWeekDateByDay(day) {
    const dayStart = this.getDayStart();
    const weekDay = this.getDay();
    return dateFactory(dayStart.getTime()-(weekDay-day)*24*60*60*1000);
  }
  function dateFmt(fmt = DATE_FMT_DEFAULT){
    const o = {
      "M+": this.getMonth() + 1, //月份 
      "d+": this.getDate(), //日 
      "h+": this.getHours(), //小时 
      "m+": this.getMinutes(), //分 
      "s+": this.getSeconds(), //秒 
      "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
      "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (let k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
  }
  Object.defineProperties(date, {
    dateFmt: {
        value: dateFmt,
        configurable: false,
        writable: false,
        enumerable: false
    },
    getDayStart: {
        value: getDayStart,
        configurable: false,
        writable: false,
        enumerable: false
    },
    getMonDayThisWeek: {
        value: getMonDayThisWeek,
        configurable: false,
        writable: false,
        enumerable: false
    },
    getThisWeekDateByDay: {
        value: getThisWeekDateByDay,
        configurable: false,
        writable: false,
        enumerable: false
    },
  })
  return date;
}

export {
  dateFmt,
  dateFactory,
  DATE_FMT_DEFAULT,
  DATE_NO_TIME_FMT
};
