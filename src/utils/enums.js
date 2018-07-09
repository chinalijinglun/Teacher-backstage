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
  2: '1 v 4',
  3: '1 v n'
};

export const ORDER_TYPE = {
  1: '普通课订单',
  2: '赠送课订单',
  3: '补偿订单',
  4: '免费订单',
  5: '退款订单'
}

export const COURSE_SCHEDULE_STATE = {
  0: '未开课',
  1: '未上',
  2: '已经上课',
  3: '取消',
  4: '问题课'
}

export const PAYMENT_STATE = {
  1: '未付款',
  2: '已付款',
  3: '取消',
  4: '申请退款',
  5: '退款审核通过',
  6: '退款审核驳回',
  7: '退款',
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

export const TIME_ZONE = {
  '1': '测试1'
}

export const ZIP_CODE = {
  '1': '测试1'
}
export const GERDER = {
  'UNKNOWN': '未知',
  'MALE': '男',
  'FEMALE': '女'
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
