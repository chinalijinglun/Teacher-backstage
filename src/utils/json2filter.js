/**
 * 转换规则：
 * {
 *  name: 'xc',
 *  id: '01',
 *  arr: [a,b],
 *  d: {
 *    gt: 1,
 *    lt: 2
 *  }
 * }
 * 
 * [
 *  {name: 'name' , op: 'like', val: '%xc%'},
 *  {name: 'id' , op: 'like', val: '%01%'},
 *  {name: 'arr' , op: 'in', val: [a,b]},
 *  {name: 'd' , op: 'gt', val: 1},
 *  {name: 'd' , op: 'lt', val: 2}
 * ]
 * 
 */
function json2filter(json) {
  const keySet = Object.keys(json);
  const filters = [];
  keySet.forEach(name => {
    switch(Object.prototype.toString.call(json[name])) {
      case '[object Array]': 
        filters.push({ name, op: 'in', val: json[name] });
        return;
      case '[object Number]': 
      case '[object String]': 
        filters.push({ name, op: 'like', val: `%${json[name]}%` });
        return;
      case '[object Boolean]': 
        filters.push({ name, op: 'eq', val: json[name] });
        return;
      case '[object Undefined]': 
      case '[object Null]': 
        filters.push({ name, op: 'is_null' });
        return;
      default: {
        json[name].gt&&filters.push({ name, op: 'gt', val: json[name].gt });
        json[name].lt&&filters.push({ name, op: 'lt', val: json[name].lt });
        return;
      }
    }
  });
  return filters;
}

export default json2filter;
