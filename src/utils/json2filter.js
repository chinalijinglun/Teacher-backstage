import {
  DELETE_FLAG
} from "./enums";

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

  console.log(json)
  const filters = [];
  keySet.forEach(name => {
    let booleanOprate = '';
    let oprateFields = [];
    if(name.indexOf('|') != -1) {
      booleanOprate = 'or';
      oprateFields = name.split('|');
    }
    switch(Object.prototype.toString.call(json[name])) {
      case '[object Array]': {
          const ar = json[name].filter(item => item !== '');
          if(ar.length === 1) {
            filters.push({ name, op: 'eq', val: json[name][0] });
          } else if( ar.length ) {
            filters.push({ name, op: 'in', val: json[name] });
          }
          break;
        }
      case '[object String]':
        if(json[name]) {
          if(booleanOprate) {
            let obj = {};
            obj[booleanOprate] = oprateFields.map(key => ({
              name: key, op: 'like', val: `%${json[name]}%`
            }))
            filters.push(obj);
          } else {
            filters.push({ name, op: 'like', val: `%${json[name]}%` });
          }
        }
        break;
      case '[object Number]':
      case '[object Boolean]':
        filters.push({ name, op: 'eq', val: json[name] });
        break;
      case '[object Undefined]':
      case '[object Null]':
        filters.push({ name, op: 'is_null' });
        break;
      default: {
        json[name].gt&&filters.push({ name, op: 'gt', val: json[name].gt });
        json[name].lt&&filters.push({ name, op: 'lt', val: json[name].lt });
        break;
      }
    }
  });
  filters.push({
    name: 'delete_flag',
    op: 'eq',
    val: DELETE_FLAG.IN_FORCE
  });
  return {
    filters
  };
}

export default json2filter;
