export const DATE_FMT_DEFAULT = 'yyyy-MM-dd hh:mm:ss';
export const DATE_NO_TIME_FMT = 'yyyy-MM-dd';

export function dateFmt(date, fmt = DATE_FMT_DEFAULT){
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
