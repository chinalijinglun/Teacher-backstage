export const VALID_ENUM = {
  VALID: 98,
  INVALID: 99
};

export const DELETE_FLAG = {
  IN_FORCE: 'IN_FORCE',
  DELETED: 'DELETED'
};

export const COURSE_TYPE = {
  ALL: 1,
  ONLINE: 2,
  PUBLIC: 3
};

export const CLASS_TYPE = {
  1: '1 v 1',
  2: '1 v 2',
  3: '1 v 3',
  4: '1 v 4',
  5: '1 v 6',
  6: '1 v 10',
  7: '1 v 12'
};

export const PROJECT_TYPE = {
  ALL: '所有项目', 
  MEGO: '美高项目', 
  CREDIT: '学分项目', 
  AP: 'AP项目', 
  OTHER: '其它'
}

export const ORDER_TYPE = {
  1: '普通课订单',
  2: '赠送课订单',
  3: '补偿订单',
  4: '免费订单',
  5: '退款订单',
  6: '试听订单'
}

export const COURSE_SCHEDULE_STATE = {
  0: '未开课',
  1: '未上',
  2: '取消',
  3: '问题课',
  4: '补偿课',
  5: '试听课'
}

export const PAYMENT_STATE = {
  1: '未付款',
  2: '已付款',
  3: '取消',
  4: '申请退款',
  5: '退款审核通过',
  6: '退款审核驳回',
  7: '已退款',
  8: '已使用'
}

export const COURSE_TYPE_MAP = {
  1: '公共',
  2: '在线'
}
// RECRUIT:新用户，
// BASIC_INFO:填写基本信息，
// WAIT_FOR_CHECK:待审核，
// CHECK_PASS:审核通过(待预约)、
// CHECK_ERROR:审核未通过，
// WAIT_FOR_INTERVIEW:已预约(待面试)，
// WAITE_FOR_CONTRACT:待签约，
// INTERVIEW_ERROR:面试结果失败，
// CONTRACTOR:已签约，
// WAIT_FOR_TRAIN:待预约培训试讲，
// TRAIN_PASS:培训试讲结果成功，
// TRAIN_ERROR:培训试讲结果失败
// WORKING:在岗，
// NO_WORK:未在岗
// INVALID:无效
export const TEACHER_STATE_ENUM = {
  RECRUIT: 1,
  BASIC_INFO: 2,
  WAIT_FOR_CHECK: 3,
  CHECK_PASS: 4,
  CHECK_ERROR: 5,
  WAIT_FOR_INTERVIEW: 10,
  WAITE_FOR_CONTRACT: 11,
  CONTRACTOR: 20,
  WAIT_FOR_TRAIN: 30,
  TRAIN_PASS: 31,
  TRAIN_ERROR: 32,
  WORKING: 80,
  NO_WORK: 81,
  INVALID: 99
};

/**
 * RECRUIT = 1
    BASIC_INFO = 2
    WAIT_FOR_CHECK = 3
    CHECK_PASS = 4
    CHECK_ERROR = 5
    WAIT_FOR_INTERVIEW = 10
    WAITE_FOR_CONTRACT = 11
    CONTRACTOR = 20
    WAIT_FOR_TRAIN = 30
    TRAIN_PASS = 31
    TRAIN_ERROR = 32
    WORKING = 80
    NO_WORK = 81
    INVALID = 99
 */

export const TEACHER_STATE_ZH = {
  1: '新用户',
  2: '填写基本信息',
  3: '待审核',
  4: '审核通过(待预约)',
  5: '审核未通过',
  10: '已预约(待面试)',
  11: '待签约',
  20: '已签约',
  30: '待预约培训试讲',
  31: '培训试讲结果成功',
  32: '培训试讲结果失败',
  80: '在岗',
  81: '未在岗',
  99: '无效'
};

export const MOBILE_PRE = {
  '+1': '美国/加拿大(+1)',
  '+61': '澳大利亚(+61)',
  '+86': '中国（+86）'
}

export const COUNTRY_IDS = [7, 140, 25, 99];

export const TIME_ZONE_ENUM = {
  'Asia/Shanghai': '中国标准时间 (北京)',
	'Asia/Hong_Kong': '香港时间 (香港)',
	'Asia/Taipei': '台北时间 (台北)',
	'Asia/Seoul': '首尔',
	'Asia/Tokyo': '日本时间 (东京)',
	'America/New_York': '美国东部时间 (纽约)',
	'America/Denver': '美国山区时间 (丹佛)',
	'America/Costa_Rica': '美国中部时间 (哥斯达黎加)',
  'America/Chicago': '美国中部时间 (芝加哥)',
  'America/Mexico_City': '美国中部时间 (墨西哥城)',
  'America/Regina': '美国中部时间 (里贾纳)',
  'America/Los_Angeles': '美国太平洋时间 (洛杉矶)',
  'Pacific/Majuro': '马朱罗',
  'Pacific/Midway': '中途岛',
  'Pacific/Honolulu': '檀香山',
  'America/Anchorage': '安克雷奇',
  'America/Tijuana': '美国太平洋时间 (提华纳)',
  'America/Phoenix': '美国山区时间 (凤凰城)',
  'America/Chihuahua': '奇瓦瓦',
  'America/Bogota': '哥伦比亚时间 (波哥大)',
  'America/Caracas': '委内瑞拉时间 (加拉加斯)',
  'America/Barbados': '大西洋时间 (巴巴多斯)',
  'America/Manaus': '亚马逊标准时间 (马瑙斯)',
  'America/St_Johns': '纽芬兰时间 (圣约翰)',
  'America/Santiago': '圣地亚哥',
  'America/Argentina/Buenos_Aires': '布宜诺斯艾利斯',
  'America/Godthab': '戈特霍布',
  'America/Montevideo': '乌拉圭时间 (蒙得维的亚)',
  'America/Sao_Paulo': '圣保罗',
  'Atlantic/South_Georgia': '南乔治亚',
  'Atlantic/Azores': '亚述尔群岛',
  'Atlantic/Cape_Verde': '佛得角',
  'Africa/Casablanca': '卡萨布兰卡',
  'Europe/London': '格林尼治标准时间 (伦敦)',
  'Europe/Amsterdam': '中欧标准时间 (阿姆斯特丹)',
  'Europe/Belgrade': '中欧标准时间 (贝尔格莱德)',
  'Europe/Brussels': '中欧标准时间 (布鲁塞尔)',
  'Europe/Sarajevo': '中欧标准时间 (萨拉热窝)',
  'Africa/Brazzaville': '西部非洲标准时间 (布拉扎维)',
  'Africa/Windhoek': '温得和克',
  'Asia/Amman': '东欧标准时间 (安曼)',
  'Europe/Athens': '东欧标准时间 (雅典)',
  'Asia/Beirut': '东欧标准时间 (贝鲁特)',
  'Africa/Cairo': '东欧标准时间 (开罗)',
  'Europe/Helsinki': '东欧标准时间 (赫尔辛基)',
  'Asia/Jerusalem': '以色列时间 (耶路撒冷)',
  'Africa/Harare': '中部非洲标准时间 (哈拉雷)',
  'Europe/Minsk': '明斯克',
  'Asia/Baghdad': '巴格达',
  'Europe/Moscow': '莫斯科',
  'Asia/Kuwait': '科威特',
  'Africa/Nairobi': '东部非洲标准时间 (内罗毕)',
  'Asia/Tehran': '伊朗标准时间 (德黑兰)',
  'Asia/Baku': '巴库',
  'Asia/Tbilisi': '第比利斯',
  'Asia/Yerevan': '埃里温',
  'Asia/Dubai': '迪拜',
  'Asia/Kabul': '阿富汗时间 (喀布尔)',
  'Asia/Karachi': '卡拉奇',
  'Asia/Oral': '乌拉尔',
  'Asia/Yekaterinburg': '叶卡捷林堡',
  'Asia/Calcutta': '加尔各答',
  'Asia/Colombo': '科伦坡',
  'Asia/Katmandu': '尼泊尔时间 (加德满都)',
  'Asia/Almaty': '阿拉木图',
  'Asia/Rangoon': '缅甸时间 (仰光)',
  'Asia/Krasnoyarsk': '克拉斯诺亚尔斯克',
  'Asia/Bangkok': '曼谷',
  'Asia/Irkutsk': '伊尔库茨克时间 (伊尔库茨克)',
  'Asia/Kuala_Lumpur': '吉隆坡',
  'Australia/Perth': '佩思',
  'Asia/Yakutsk': '雅库茨克时间 (雅库茨克)',
  'Australia/Darwin': '达尔文',
  'Australia/Brisbane': '布里斯班',
  'Asia/Vladivostok': '海参崴时间 (符拉迪沃斯托克)',
  'Pacific/Guam': '关岛',
  'Australia/Adelaide': '阿德莱德',
  'Australia/Hobart': '霍巴特',
  'Australia/Sydney': '悉尼',
  'Asia/Magadan': '马加丹时间 (马加丹)',
  'Pacific/Auckland': '奥克兰',
  'Pacific/Fiji': '斐济',
  'Pacific/Tongatapu': '东加塔布'
}
export const TIME_ZONE = {
    "0":"Asia/Shanghai",
    "1":"Asia/Hong_Kong",
    "2":"Asia/Taipei",
    "3":"Asia/Seoul",
    "4":"Asia/Tokyo",
    "5":"America/New_York",
    "6":"America/Denver",
    "7":"America/Costa_Rica",
    "8":"America/Chicago",
    "9":"America/Mexico_City",
    "10":"America/Regina",
    "11":"America/Los_Angeles",
    "12":"Pacific/Majuro",
    "13":"Pacific/Midway",
    "14":"Pacific/Honolulu",
    "15":"America/Anchorage",
    "16":"America/Tijuana",
    "17":"America/Phoenix",
    "18":"America/Chihuahua",
    "19":"America/Bogota",
    "20":"America/Caracas",
    "21":"America/Barbados",
    "22":"America/Manaus",
    "23":"America/St_Johns",
    "24":"America/Santiago",
    "25":"America/Argentina/Buenos_Aires",
    "26":"America/Godthab",
    "27":"America/Montevideo",
    "28":"America/Sao_Paulo",
    "29":"Atlantic/South_Georgia",
    "30":"Atlantic/Azores",
    "31":"Atlantic/Cape_Verde",
    "32":"Africa/Casablanca",
    "33":"Europe/London",
    "34":"Europe/Amsterdam",
    "35":"Europe/Belgrade",
    "36":"Europe/Brussels",
    "37":"Europe/Sarajevo",
    "38":"Africa/Brazzaville",
    "39":"Africa/Windhoek",
    "40":"Asia/Amman",
    "41":"Europe/Athens",
    "42":"Asia/Beirut",
    "43":"Africa/Cairo",
    "44":"Europe/Helsinki",
    "45":"Asia/Jerusalem",
    "46":"Africa/Harare",
    "47":"Europe/Minsk",
    "48":"Asia/Baghdad",
    "49":"Europe/Moscow",
    "50":"Asia/Kuwait",
    "51":"Africa/Nairobi",
    "52":"Asia/Tehran",
    "53":"Asia/Baku",
    "54":"Asia/Tbilisi",
    "55":"Asia/Yerevan",
    "56":"Asia/Dubai",
    "57":"Asia/Kabul",
    "58":"Asia/Karachi",
    "59":"Asia/Oral",
    "60":"Asia/Yekaterinburg",
    "61":"Asia/Calcutta",
    "62":"Asia/Colombo",
    "63":"Asia/Katmandu",
    "64":"Asia/Almaty",
    "65":"Asia/Rangoon",
    "66":"Asia/Krasnoyarsk",
    "67":"Asia/Bangkok",
    "68":"Asia/Irkutsk",
    "69":"Asia/Kuala_Lumpur",
    "70":"Australia/Perth",
    "71":"Asia/Yakutsk",
    "72":"Australia/Darwin",
    "73":"Australia/Brisbane",
    "74":"Asia/Vladivostok",
    "75":"Pacific/Guam",
    "76":"Australia/Adelaide",
    "77":"Australia/Hobart",
    "78":"Australia/Sydney",
    "79":"Asia/Magadan",
    "80":"Pacific/Auckland",
    "81":"Pacific/Fiji",
    "82":"Pacific/Tongatapu"
}

export const GERDER = {
  'UNKNOWN': '未知',
  'MALE': '男',
  'FEMALE': '女'
}

export const GERDER_ENUM = {
  1: '未知',
  2: '男',
  3: '女'
}

export const DEGREE = {
  'college_graduate': '大专',
  'university_diploma': '本科',
  'bachelor_degree': '学士学位',
  'master_degree': '硕士学位',
  'doctor_degree': '博士学位',
  'post-doctoral': '博士后',
  'other': '其他'
}

export const GRADE = {
  'kindergarten': '幼儿园',
  'primary_school': '小学',
  'junior_middle_school': '初中',
  'high_school': '高中',
  'university': '大学',
  'post-adult': '成人',
  'other': '其他'
}

export const GRADE_ENUMS = {
  1: '幼儿园',
  2: '小学',
  3: '初中',
  4: '高中',
  5: '大学',
  6: '成人'
}

export const INTERVIEW = {
  '1': '待预约',
  '2': '未面试',
  '3': '已面试',
  '4': '取消',
  '5': '未完成',
  '6': '待答复',
  '7': '待确认',
  '8': '待定',
  '9': '面试通过',
  '10': '面试失败',
  '98': '有效',
  '99': '无效'
}

export const ACTION_EVENT_TYPE = {
  'UNKNOWN': 1,
  'TEACHER_CHECK': 2,
  'TEACHER_TALK': 3,
  'STUDENT_TALK': 4
};

export const COURSEWARE_STATE = {
  1: '未审核',
  2: '审核通过',
  3: '审核驳回'
}
export const COURSEWARE_STATE_ENUM = {
  BEFORE_CHECK: '未审核',
  CHECK_PASSED: '审核通过',
  CHECK_DENY: '审核驳回'
}
export const TEACHER_STATE = {
  '81': '不在岗',
  '80': '在岗'
}
export const TEACHER_AGE = ['0-4','5-9','10-15']
export const HAVE_AWARD = {
  '0': '无',
  '1': '有'
}
export const HAVE_SENIORITY = {
  '0': '无',
  '1': '有'
}
export const TEACHER_WEEK = ['1','2','3','4','5','6','7']
export const TEACHER_WEEK_ENUM = {
  1: '周一',
  2: '周二',
  3: '周三',
  4: '周四',
  5: '周五',
  6: '周六',
  7: '周日'
}
export const GO_ABROAD = {
  YES: '是',
  NO: '否'
}

export const APPOINTMENT_STATE_ENUM = {
  'WRITE_APPOINTMENT': '待预约',
  'WRITE_ACCEPT': '待接受',
  'WRITE_CLASS': '待上课',
  'FINISH': '已完成'
}
export const COURSE_APPOINTMENT_STATE_ENUM = {
  'APPLY': '未接受',
  'REFUSE': '拒绝',
  'ACCEPT': '接受'
}

export const COURSE_SCHEDULE_STATE_ENUM = {
  'COMMON_CLASS': '正常课',
  'CANCEL': '取消',
  'TROUBLE_CLASS': '问题课程',
  'MAKE_UP_CLASS': '补偿课'
}

export const COURSE_SCHEDULE_STATE_NUMBER = {
  'COMMON_CLASS': 1,
  'CANCEL': 2,
  'TROUBLE_CLASS': 3,
  'MAKE_UP_CLASS': 4
}
