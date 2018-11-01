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
  1: '待付款',
  2: '已付款',
  3: '已取消',
  4: '申请退款',
  5: '退款审核通过',
  6: '退款审核驳回',
  7: '已退款',
  8: '已排课'
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

// 手机区号
export const NATIONAL_CODE = [
  {
    name_zh: "美国/加拿大",
    name: "U.S.A/Canada",
    code: "1",
    time: "-13.00"
  },
  {
    name_zh: "澳大利亚",
    name: "Australia",
    code: "61",
    time: "2.00"
  },
  {
    name_zh: "中国",
    name: "China",
    code: "86",
    time: "0"
  },
  {
    name_zh: "阿富汗",
    name: "Afghanistan",
    code: "93",
    time: "-3.50"
  },
  {
    name_zh: "阿拉斯加",
    name: "Alaska(U.S.A)",
    code: "1907",
    time: "3.00"
  },
  {
    name_zh: "阿尔巴尼亚",
    name: "Albania",
    code: "355",
    time: "-7.00"
  },
  {
    name_zh: "阿尔及利亚",
    name: "Algeria",
    code: "213",
    time: "-8.00"
  },
  {
    name_zh: "安道尔",
    name: "Andorra",
    code: "376",
    time: "-8.00"
  },
  {
    name_zh: "安哥拉",
    name: "Angola",
    code: "244",
    time: "-7.00"
  },
  {
    name_zh: "安圭拉岛(英)",
    name: "Anguilla I.",
    code: "1264",
    time: "-12.00"
  },
  {
    name_zh: "安提瓜和巴布达",
    name: "Antigua and Barbuda",
    code: "1268",
    time: "-12.00"
  },
  {
    name_zh: "阿根廷",
    name: "Argentina",
    code: "54",
    time: "-11.00"
  },
  {
    name_zh: "亚美尼亚",
    name: "Armenia",
    code: "374",
    time: "0.00"
  },
  {
    name_zh: "阿鲁巴岛",
    name: "Aruba I.",
    code: "297",
    time: "-12.00"
  },
  {
    name_zh: "阿森松(英)",
    name: "Ascension",
    code: "247",
    time: "-8.00"
  },
  {
    name_zh: "奥地利",
    name: "Austria",
    code: "43",
    time: "-7.00"
  },
  {
    name_zh: "阿塞拜疆",
    name: "Azerbaijan",
    code: "994",
    time: "-5.00"
  },
  {
    name_zh: "巴林",
    name: "Bahrain",
    code: "973",
    time: "-5.00"
  },
  {
    name_zh: "孟加拉国",
    name: "Bangladesh",
    code: "880",
    time: "-2.00"
  },
  {
    name_zh: "巴巴多斯",
    name: "Barbados",
    code: "1246",
    time: "-12.00"
  },
  {
    name_zh: "白俄罗斯",
    name: "Belarus",
    code: "375",
    time: "-5.00"
  },
  {
    name_zh: "比利时",
    name: "Belgium",
    code: "32",
    time: "-7.00"
  },
  {
    name_zh: "伯利兹",
    name: "Belize",
    code: "501",
    time: "-14.00"
  },
  {
    name_zh: "贝宁",
    name: "Benin",
    code: "229",
    time: "-7.00"
  },
  {
    name_zh: "百慕大群岛(英)",
    name: "Bermuda Is.",
    code: "1441",
    time: "-12.00"
  },
  {
    name_zh: "不丹",
    name: "Bhutan",
    code: "975",
    time: "0.00"
  },
  {
    name_zh: "玻利维亚",
    name: "Bolivia",
    code: "591",
    time: "-12.00"
  },
  {
    name_zh: "波斯尼亚和黑塞哥维那",
    name: "Bosnia And Herzegovina",
    code: "387",
    time: "0.00"
  },
  {
    name_zh: "博茨瓦纳",
    name: "Botswana",
    code: "267",
    time: "-6.00"
  },
  {
    name_zh: "巴西",
    name: "Brazil",
    code: "55",
    time: "-11.00"
  },
  {
    name_zh: "保加利亚",
    name: "Bulgaria",
    code: "359",
    time: "-6.00"
  },
  {
    name_zh: "布基纳法索",
    name: "Burkina Faso",
    code: "226",
    time: "-8.00"
  },
  {
    name_zh: "布隆迪",
    name: "Burundi",
    code: "257",
    time: "-6.00"
  },
  {
    name_zh: "喀麦隆",
    name: "Cameroon",
    code: "237",
    time: "-7.00"
  },
  {
    name_zh: "加那利群岛",
    name: "Canaries Is.",
    code: "34",
    time: "-8.00"
  },
  {
    name_zh: "佛得角",
    name: "Cape Verde",
    code: "238",
    time: "-9.00"
  },
  {
    name_zh: "开曼群岛(英)",
    name: "Cayman Is.",
    code: "1345",
    time: "-13.00"
  },
  {
    name_zh: "中非",
    name: "Central Africa",
    code: "236",
    time: "-7.00"
  },
  {
    name_zh: "乍得",
    name: "Chad",
    code: "235",
    time: "-7.00"
  },
  {
    name_zh: "智利",
    name: "Chile",
    code: "56",
    time: "-12.00"
  },
  {
    name_zh: "圣诞岛",
    name: "Christmas I.",
    code: "61 9164",
    time: "-1.30"
  },
  {
    name_zh: "科科斯岛",
    name: "Cocos I.",
    code: "61 9162",
    time: "-13.00"
  },
  {
    name_zh: "哥伦比亚",
    name: "Colombia",
    code: "57",
    time: "0.00"
  },
  {
    name_zh: "巴哈马国",
    name: "Commonwealth of The Bahamas",
    code: "1809",
    time: "0.00"
  },
  {
    name_zh: "多米尼克国",
    name: "Commonwealth of Dominica",
    code: "1809",
    time: "0.00"
  },
  {
    name_zh: "科摩罗",
    name: "Comoro",
    code: "269",
    time: "-5.00"
  },
  {
    name_zh: "刚果",
    name: "Congo",
    code: "242",
    time: "-7.00"
  },
  {
    name_zh: "科克群岛(新)",
    name: "Cook IS.",
    code: "682",
    time: "-18.30"
  },
  {
    name_zh: "哥斯达黎加",
    name: "Costa Rica",
    code: "506",
    time: "-14.00"
  },
  {
    name_zh: "克罗地亚",
    name: "Croatia",
    code: "383 385",
    time: "-7.00"
  },
  {
    name_zh: "古巴",
    name: "Cuba",
    code: "53",
    time: "-13.00"
  },
  {
    name_zh: "塞浦路斯",
    name: "Cyprus",
    code: "357",
    time: "-6.00"
  },
  {
    name_zh: "捷克",
    name: "Czech",
    code: "420",
    time: "-7.00"
  },
  {
    name_zh: "丹麦",
    name: "Denmark",
    code: "45",
    time: "-7.00"
  },
  {
    name_zh: "迪戈加西亚岛",
    name: "Diego Garcia I.",
    code: "246",
    time: "0.00"
  },
  {
    name_zh: "吉布提",
    name: "Djibouti",
    code: "253",
    time: "-5.00"
  },
  {
    name_zh: "多米尼加共和国",
    name: "Dominican Rep.",
    code: "1809",
    time: "-13.00"
  },
  {
    name_zh: "厄瓜多尔",
    name: "Ecuador",
    code: "593",
    time: "-13.00"
  },
  {
    name_zh: "埃及",
    name: "Egypt",
    code: "20",
    time: "-6.00"
  },
  {
    name_zh: "萨尔瓦多",
    name: "El Salvador",
    code: "503",
    time: "-14.00"
  },
  {
    name_zh: "赤道几内亚",
    name: "Equatorial Guinea",
    code: "240",
    time: "-8.00"
  },
  {
    name_zh: "厄立特里亚",
    name: "Eritrea",
    code: "291",
    time: "0.00"
  },
  {
    name_zh: "爱沙尼亚",
    name: "Estonia",
    code: "372",
    time: "-5.00"
  },
  {
    name_zh: "埃塞俄比亚",
    name: "Ethiopia",
    code: "251",
    time: "-5.00"
  },
  {
    name_zh: "福克兰群岛",
    name: "Falkland Is.",
    code: "500",
    time: "-11.00"
  },
  {
    name_zh: "法罗群岛(丹)",
    name: "Faroe Is.",
    code: "298",
    time: "0.00"
  },
  {
    name_zh: "斐济",
    name: "Fiji",
    code: "679",
    time: "4.00"
  },
  {
    name_zh: "芬兰",
    name: "Finland",
    code: "358",
    time: "-6.00"
  },
  {
    name_zh: "法国",
    name: "France",
    code: "33",
    time: "-8.00"
  },
  {
    name_zh: "法属圭亚那",
    name: "French Guiana",
    code: "594",
    time: "-12.00"
  },
  {
    name_zh: "法属波里尼西亚",
    name: "French Polynesia",
    code: "689",
    time: "3.00"
  },
  {
    name_zh: "加蓬",
    name: "Gabon",
    code: "241",
    time: "-7.00"
  },
  {
    name_zh: "冈比亚",
    name: "Gambia",
    code: "220",
    time: "-8.00"
  },
  {
    name_zh: "格鲁吉亚",
    name: "Georgia",
    code: "995",
    time: "0.00"
  },
  {
    name_zh: "德国",
    name: "Germany",
    code: "49",
    time: "-7.00"
  },
  {
    name_zh: "加纳",
    name: "Ghana",
    code: "233",
    time: "-8.00"
  },
  {
    name_zh: "直布罗陀(英)",
    name: "Gibraltar",
    code: "350",
    time: "-8.00"
  },
  {
    name_zh: "希腊",
    name: "Greece",
    code: "30",
    time: "-6.00"
  },
  {
    name_zh: "格陵兰岛",
    name: "Greenland",
    code: "299",
    time: "0.00"
  },
  {
    name_zh: "格林纳达",
    name: "Grenada",
    code: "1809",
    time: "-14.00"
  },
  {
    name_zh: "瓜德罗普岛(法)",
    name: "Guadeloupe I.",
    code: "590",
    time: "0.00"
  },
  {
    name_zh: "关岛(美)",
    name: "Guam",
    code: "671",
    time: "2.00"
  },
  {
    name_zh: "危地马拉",
    name: "Guatemala",
    code: "502",
    time: "-14.00"
  },
  {
    name_zh: "几内亚",
    name: "Guinea",
    code: "224",
    time: "-8.00"
  },
  {
    name_zh: "几内亚比绍",
    name: "Guinea-Bissau",
    code: "245",
    time: "0.00"
  },
  {
    name_zh: "圭亚那",
    name: "Guyana",
    code: "592",
    time: "-11.00"
  },
  {
    name_zh: "海地",
    name: "Haiti",
    code: "509",
    time: "-13.00"
  },
  {
    name_zh: "夏威夷",
    name: "Hawaii",
    code: "1808",
    time: "0.00"
  },
  {
    name_zh: "洪都拉斯",
    name: "Honduras",
    code: "504",
    time: "-14.00"
  },
  {
    name_zh: "匈牙利",
    name: "Hungary",
    code: "36",
    time: "-7.00"
  },
  {
    name_zh: "冰岛",
    name: "Iceland",
    code: "354",
    time: "-9.00"
  },
  {
    name_zh: "印度",
    name: "India",
    code: "91",
    time: "-2.30"
  },
  {
    name_zh: "印度尼西亚",
    name: "Indonesia",
    code: "62",
    time: "-0.30"
  },
  {
    name_zh: "伊朗",
    name: "Iran",
    code: "98",
    time: "-4.30"
  },
  {
    name_zh: "伊拉克",
    name: "Iraq",
    code: "964",
    time: "-5.00"
  },
  {
    name_zh: "爱尔兰",
    name: "Ireland",
    code: "353",
    time: "-8.00"
  },
  {
    name_zh: "以色列",
    name: "Israel",
    code: "972",
    time: "-6.00"
  },
  {
    name_zh: "意大利",
    name: "Italy",
    code: "39",
    time: "-7.00"
  },
  {
    name_zh: "科特迪瓦",
    name: "Ivory Coast",
    code: "225",
    time: "-8.00"
  },
  {
    name_zh: "牙买加",
    name: "Jamaica",
    code: "1876",
    time: "-12.00"
  },
  {
    name_zh: "日本",
    name: "Japan",
    code: "81",
    time: "1.00"
  },
  {
    name_zh: "约旦",
    name: "Jordan",
    code: "962",
    time: "-6.00"
  },
  {
    name_zh: "柬埔寨",
    name: "Kampuchea",
    code: "855",
    time: "-1.00"
  },
  {
    name_zh: "哈萨克斯坦",
    name: "Kazakhstan",
    code: "7",
    time: "-5.00"
  },
  {
    name_zh: "肯尼亚",
    name: "Kenya",
    code: "254",
    time: "-5.00"
  },
  {
    name_zh: "基里巴斯",
    name: "Kiribati",
    code: "686",
    time: "4.00"
  },
  {
    name_zh: "朝鲜",
    name: "Korea(dpr of)",
    code: "85",
    time: "1.00"
  },
  {
    name_zh: "韩国",
    name: "Korea(republic of)",
    code: "82",
    time: "1.00"
  },
  {
    name_zh: "科威特",
    name: "Kuwait",
    code: "965",
    time: "-5.00"
  },
  {
    name_zh: "吉尔吉斯斯坦",
    name: "Kyrgyzstan",
    code: "996",
    time: "-5.00"
  },
  {
    name_zh: "老挝",
    name: "Laos",
    code: "856",
    time: "-1.00"
  },
  {
    name_zh: "拉脱维亚",
    name: "Latvia",
    code: "371",
    time: "-5.00"
  },
  {
    name_zh: "黎巴嫩",
    name: "Lebanon",
    code: "961",
    time: "-6.00"
  },
  {
    name_zh: "莱索托",
    name: "Lesotho",
    code: "266",
    time: "-6.00"
  },
  {
    name_zh: "利比里亚",
    name: "Liberia",
    code: "231",
    time: "-8.00"
  },
  {
    name_zh: "利比亚",
    name: "Libya",
    code: "218",
    time: "-6.00"
  },
  {
    name_zh: "列支敦士登",
    name: "Liechtenstein",
    code: "41 75",
    time: "-7.00"
  },
  {
    name_zh: "立陶宛",
    name: "Lithuania",
    code: "370",
    time: "-5.00"
  },
  {
    name_zh: "卢森堡",
    name: "Luxembourg",
    code: "352",
    time: "-7.00"
  },
  {
    name_zh: "马其顿",
    name: "Macedonia",
    code: "389",
    time: "0.00"
  },
  {
    name_zh: "马达加斯加",
    name: "Madagascar",
    code: "261",
    time: "-5.00"
  },
  {
    name_zh: "马拉维",
    name: "Malawi",
    code: "265",
    time: "-6.00"
  },
  {
    name_zh: "马来西亚",
    name: "Malaysia",
    code: "60",
    time: "-0.30"
  },
  {
    name_zh: "马尔代夫",
    name: "Maldive",
    code: "960",
    time: "-2.30"
  },
  {
    name_zh: "马里",
    name: "Mali",
    code: "223",
    time: "-8.00"
  },
  {
    name_zh: "马耳他",
    name: "Malta",
    code: "356",
    time: "-7.00"
  },
  {
    name_zh: "马里亚纳群岛",
    name: "Mariana Is.",
    code: "670",
    time: "2.00"
  },
  {
    name_zh: "马绍尔群岛",
    name: "Marshall Is.",
    code: "692",
    time: "4.00"
  },
  {
    name_zh: "马提尼克(法)",
    name: "Martinique",
    code: "596",
    time: "-12.00"
  },
  {
    name_zh: "毛里塔尼亚",
    name: "Mauritania",
    code: "222",
    time: "0.00"
  },
  {
    name_zh: "毛里求斯",
    name: "Mauritius",
    code: "230",
    time: "-4.00"
  },
  {
    name_zh: "马约特岛",
    name: "Mayotte I.",
    code: "269",
    time: "0.00"
  },
  {
    name_zh: "墨西哥",
    name: "Mexico",
    code: "52",
    time: "-15.00"
  },
  {
    name_zh: "密克罗尼西亚(美)",
    name: "Micronesia",
    code: "691",
    time: "1.00"
  },
  {
    name_zh: "中途岛(美)",
    name: "Midway I.",
    code: "1808",
    time: "-19.00"
  },
  {
    name_zh: "摩尔多瓦",
    name: "Moldova",
    code: "373",
    time: "-5.00"
  },
  {
    name_zh: "摩纳哥",
    name: "Monaco",
    code: "377",
    time: "-7.00"
  },
  {
    name_zh: "蒙古",
    name: "Mongolia",
    code: "976",
    time: "0.00"
  },
  {
    name_zh: "蒙特塞拉特岛(英)",
    name: "Montserrat I.",
    code: "1664",
    time: "-12.00"
  },
  {
    name_zh: "摩洛哥",
    name: "Morocco",
    code: "212",
    time: "-6.00"
  },
  {
    name_zh: "莫桑比克",
    name: "Mozambique",
    code: "258",
    time: "-6.00"
  },
  {
    name_zh: "缅甸",
    name: "Myanmar",
    code: "95",
    time: "-1.30"
  },
  {
    name_zh: "纳米比亚",
    name: "Namibia",
    code: "264",
    time: "-7.00"
  },
  {
    name_zh: "瑙鲁",
    name: "Nauru",
    code: "674",
    time: "4.00"
  },
  {
    name_zh: "尼泊尔",
    name: "Nepal",
    code: "977",
    time: "-2.30"
  },
  {
    name_zh: "荷兰",
    name: "Netherlands",
    code: "31",
    time: "-7.00"
  },
  {
    name_zh: "荷属安的列斯群岛",
    name: "Netherlandsantilles Is.",
    code: "599",
    time: "-12.00"
  },
  {
    name_zh: "新喀里多尼亚群岛(法)",
    name: "New Caledonia Is.",
    code: "687",
    time: "3.00"
  },
  {
    name_zh: "新西兰",
    name: "New Zealand",
    code: "64",
    time: "4.00"
  },
  {
    name_zh: "尼加拉瓜",
    name: "Nicaragua",
    code: "505",
    time: "-14.00"
  },
  {
    name_zh: "尼日尔",
    name: "Niger",
    code: "227",
    time: "-8.00"
  },
  {
    name_zh: "尼日利亚",
    name: "Nigeria",
    code: "234",
    time: "-7.00"
  },
  {
    name_zh: "纽埃岛(新)",
    name: "Niue I.",
    code: "683",
    time: "-19.00"
  },
  {
    name_zh: "诺福克岛(澳)",
    name: "Norfolk I,",
    code: "6723",
    time: "3.30"
  },
  {
    name_zh: "挪威",
    name: "Norway",
    code: "47",
    time: "-7.00"
  },
  {
    name_zh: "阿曼",
    name: "Oman",
    code: "968",
    time: "-4.00"
  },
  {
    name_zh: "帕劳(美)",
    name: "Palau",
    code: "680",
    time: "0.00"
  },
  {
    name_zh: "巴拿马",
    name: "Panama",
    code: "507",
    time: "-13.00"
  },
  {
    name_zh: "巴布亚新几内亚",
    name: "Papua New Guinea",
    code: "675",
    time: "2.00"
  },
  {
    name_zh: "巴拉圭",
    name: "Paraguay",
    code: "595",
    time: "-12.00"
  },
  {
    name_zh: "秘鲁",
    name: "Peru",
    code: "51",
    time: "-13.00"
  },
  {
    name_zh: "菲律宾",
    name: "Philippines",
    code: "63",
    time: "0.00"
  },
  {
    name_zh: "波兰",
    name: "Poland",
    code: "48",
    time: "-7.00"
  },
  {
    name_zh: "葡萄牙",
    name: "Portugal",
    code: "351",
    time: "-8.00"
  },
  {
    name_zh: "巴基斯坦",
    name: "Pakistan",
    code: "92",
    time: "-2.30"
  },
  {
    name_zh: "波多黎各(美)",
    name: "Puerto Rico",
    code: "1787",
    time: "-12.00"
  },
  {
    name_zh: "卡塔尔",
    name: "Qatar",
    code: "974",
    time: "-5.00"
  },
  {
    name_zh: "留尼汪岛",
    name: "Reunion I.",
    code: "262",
    time: "-4.00"
  },
  {
    name_zh: "罗马尼亚",
    name: "Romania",
    code: "40",
    time: "-6.00"
  },
  {
    name_zh: "俄罗斯",
    name: "Russia",
    code: "7",
    time: "-5.00"
  },
  {
    name_zh: "卢旺达",
    name: "Rwanda",
    code: "250",
    time: "-6.00"
  },
  {
    name_zh: "东萨摩亚(美)",
    name: "Samoa,Eastern",
    code: "684",
    time: "-19.00"
  },
  {
    name_zh: "西萨摩亚",
    name: "Samoa,Western",
    code: "685",
    time: "-19.00"
  },
  {
    name_zh: "圣马力诺",
    name: "San.Marino",
    code: "378",
    time: "-7.00"
  },
  {
    name_zh: "圣皮埃尔岛及密克隆岛",
    name: "San.Pierre And Miquelon I.",
    code: "508",
    time: "-2.00"
  },
  {
    name_zh: "圣多美和普林西比",
    name: "San.Tome And Principe",
    code: "239",
    time: "-8.00"
  },
  {
    name_zh: "沙特阿拉伯",
    name: "Saudi Arabia",
    code: "966",
    time: "-5.00"
  },
  {
    name_zh: "塞内加尔",
    name: "Senegal",
    code: "221",
    time: "-8.00"
  },
  {
    name_zh: "塞舌尔",
    name: "Seychelles",
    code: "248",
    time: "-4.00"
  },
  {
    name_zh: "新加坡",
    name: "Singapore",
    code: "65",
    time: "0.30"
  },
  {
    name_zh: "斯洛伐克",
    name: "Slovak",
    code: "421",
    time: "-7.00"
  },
  {
    name_zh: "斯洛文尼亚",
    name: "Slovenia",
    code: "386",
    time: "-7.00"
  },
  {
    name_zh: "所罗门群岛",
    name: "Solomon Is.",
    code: "677",
    time: "3.00"
  },
  {
    name_zh: "索马里",
    name: "Somali",
    code: "252",
    time: "-5.00"
  },
  {
    name_zh: "南非",
    name: "South Africa",
    code: "27",
    time: "-6.00"
  },
  {
    name_zh: "西班牙",
    name: "Spain",
    code: "34",
    time: "-8.00"
  },
  {
    name_zh: "斯里兰卡",
    name: "Sri Lanka",
    code: "94",
    time: "0.00"
  },
  {
    name_zh: "圣克里斯托弗和尼维斯",
    name: "St.Christopher and Nevis",
    code: "1809",
    time: "-12.30"
  },
  {
    name_zh: "圣赫勒拿",
    name: "St.Helena",
    code: "290",
    time: "-8.00"
  },
  {
    name_zh: "圣卢西亚",
    name: "St.Lucia",
    code: "1758",
    time: "-12.00"
  },
  {
    name_zh: "圣文森特岛(英)",
    name: "St.Vincent I.",
    code: "1784",
    time: "-12.00"
  },
  {
    name_zh: "苏丹",
    name: "Sudan",
    code: "249",
    time: "-6.00"
  },
  {
    name_zh: "苏里南",
    name: "Suriname",
    code: "597",
    time: "-11.30"
  },
  {
    name_zh: "斯威士兰",
    name: "Swaziland",
    code: "268",
    time: "-6.00"
  },
  {
    name_zh: "瑞典",
    name: "Sweden",
    code: "46",
    time: "-7.00"
  },
  {
    name_zh: "瑞士",
    name: "Switzerland",
    code: "41",
    time: "-7.00"
  },
  {
    name_zh: "叙利亚",
    name: "Syria",
    code: "963",
    time: "-6.00"
  },
  {
    name_zh: "塔吉克斯坦",
    name: "Tajikistan",
    code: "992",
    time: "-5.00"
  },
  {
    name_zh: "坦桑尼亚",
    name: "Tanzania",
    code: "255",
    time: "-5.00"
  },
  {
    name_zh: "泰国",
    name: "Thailand",
    code: "66",
    time: "-1.00"
  },
  {
    name_zh: "阿拉伯联合酋长国",
    name: "The United Arab Emirates",
    code: "971",
    time: "-5.00"
  },
  {
    name_zh: "多哥",
    name: "Togo",
    code: "228",
    time: "-8.00"
  },
  {
    name_zh: "托克劳群岛(新)",
    name: "Tokelau Is.",
    code: "690",
    time: "-19.00"
  },
  {
    name_zh: "汤加",
    name: "Tonga",
    code: "676",
    time: "5.00"
  },
  {
    name_zh: "特立尼达和多巴哥",
    name: "Trinidad and Tobago",
    code: "1809",
    time: "-12.00"
  },
  {
    name_zh: "突尼斯",
    name: "Tunisia",
    code: "216",
    time: "-7.00"
  },
  {
    name_zh: "土耳其",
    name: "Turkey",
    code: "90",
    time: "-6.00"
  },
  {
    name_zh: "土库曼斯坦",
    name: "Turkmenistan",
    code: "993",
    time: "-5.00"
  },
  {
    name_zh: "特克斯和凯科斯群岛",
    name: "Turks and Caicos Is.",
    code: "1809",
    time: "-13.00"
  },
  {
    name_zh: "图瓦卢",
    name: "Tuvalu",
    code: "688",
    time: "4.00"
  },
  {
    name_zh: "乌干达",
    name: "Uganda",
    code: "256",
    time: "-5.00"
  },
  {
    name_zh: "乌克兰",
    name: "Ukraine",
    code: "380",
    time: "-5.00"
  },
  {
    name_zh: "英国",
    name: "United Kingdom",
    code: "44",
    time: "-8.00"
  },
  {
    name_zh: "乌拉圭",
    name: "Uruguay",
    code: "598",
    time: "-10.30"
  },
  {
    name_zh: "乌兹别克斯坦",
    name: "Uzbekistan",
    code: "998",
    time: "-5.00"
  },
  {
    name_zh: "瓦努阿图",
    name: "Vanuatu",
    code: "678",
    time: "3.00"
  },
  {
    name_zh: "梵蒂冈",
    name: "Vatican",
    code: "379",
    time: "-7.00"
  },
  {
    name_zh: "委内瑞拉",
    name: "Venezuela",
    code: "58",
    time: "-12.30"
  },
  {
    name_zh: "越南",
    name: "Vietnam",
    code: "84",
    time: "-1.00"
  },
  {
    name_zh: "维尔京群岛(英)",
    name: "Virgin Is.",
    code: "1809",
    time: "-12.00"
  },
  {
    name_zh: "维尔京群岛和圣罗克伊",
    name: "Virgin Is. and St.Croix I.",
    code: "1809",
    time: "0.00"
  },
  {
    name_zh: "威克岛(美)",
    name: "Wake I.",
    code: "1808",
    time: "4.00"
  },
  {
    name_zh: "瓦里斯和富士那群岛",
    name: "Wallis And Futuna Is.",
    code: "681",
    time: "4.00"
  },
  {
    name_zh: "西撒哈拉",
    name: "Western sahara",
    code: "967",
    time: "0.00"
  },
  {
    name_zh: "也门",
    name: "Yemen",
    code: "967",
    time: "-5.00"
  },
  {
    name_zh: "南斯拉夫",
    name: "Yugoslavia",
    code: "381",
    time: "-7.00"
  },
  {
    name_zh: "扎伊尔",
    name: "Zaire",
    code: "243",
    time: "-7.00"
  },
  {
    name_zh: "赞比亚",
    name: "Zambia",
    code: "260",
    time: "-6.00"
  },
  {
    name_zh: "桑给巴尔",
    name: "Zanzibar",
    code: "259",
    time: "0.00"
  },
  {
    name_zh: "津巴布韦",
    name: "Zimbabwe",
    code: "263",
    time: "-6.00"
  }
]


export const COUNTRY_IDS = [7, 140, 25, 99];

export const TIME_ZONE_ZH = {
  "Africa/Abidjan +0":"Africa/Abidjan",
  "Africa/Accra +0":"Africa/Accra",
  "Africa/Addis_Ababa +3":"Africa/Addis_Ababa",
  "Africa/Algiers +1":"Africa/Algiers",
  "Africa/Asmara +3":"Africa/Asmara",
  "Africa/Bamako +0":"Africa/Bamako",
  "Africa/Bangui +1":"Africa/Bangui",
  "Africa/Banjul +0":"Africa/Banjul",
  "Africa/Bissau +0":"Africa/Bissau",
  "Africa/Blantyre +2":"Africa/Blantyre",
  "Africa/Brazzaville +1":"Africa/Brazzaville",
  "Africa/Bujumbura +2":"Africa/Bujumbura",
  "Africa/Cairo +2":"Africa/Cairo",
  "Africa/Casablanca +0":"Africa/Casablanca",
  "Africa/Ceuta +1":"Africa/Ceuta",
  "Africa/Conakry +0":"Africa/Conakry",
  "Africa/Dakar +0":"Africa/Dakar",
  "Africa/Dar_es_Salaam +3":"Africa/Dar_es_Salaam",
  "Africa/Djibouti +3":"Africa/Djibouti",
  "Africa/Douala +1":"Africa/Douala",
  "Africa/El_Aaiun +0":"Africa/El_Aaiun",
  "Africa/Freetown +0":"Africa/Freetown",
  "Africa/Gaborone +2":"Africa/Gaborone",
  "Africa/Harare +2":"Africa/Harare",
  "Africa/Johannesburg +2":"Africa/Johannesburg",
  "Africa/Juba +3":"Africa/Juba",
  "Africa/Kampala +3":"Africa/Kampala",
  "Africa/Khartoum +2":"Africa/Khartoum",
  "Africa/Kigali +2":"Africa/Kigali",
  "Africa/Kinshasa +1":"Africa/Kinshasa",
  "Africa/Lagos +1":"Africa/Lagos",
  "Africa/Libreville +1":"Africa/Libreville",
  "Africa/Lome +0":"Africa/Lome",
  "Africa/Luanda +1":"Africa/Luanda",
  "Africa/Lubumbashi +2":"Africa/Lubumbashi",
  "Africa/Lusaka +2":"Africa/Lusaka",
  "Africa/Malabo +1":"Africa/Malabo",
  "Africa/Maputo +2":"Africa/Maputo",
  "Africa/Maseru +2":"Africa/Maseru",
  "Africa/Mbabane +2":"Africa/Mbabane",
  "Africa/Mogadishu +3":"Africa/Mogadishu",
  "Africa/Monrovia +0":"Africa/Monrovia",
  "Africa/Nairobi +3":"Africa/Nairobi",
  "Africa/Ndjamena +1":"Africa/Ndjamena",
  "Africa/Niamey +1":"Africa/Niamey",
  "Africa/Nouakchott +0":"Africa/Nouakchott",
  "Africa/Ouagadougou +0":"Africa/Ouagadougou",
  "Africa/Porto-Novo +1":"Africa/Porto-Novo",
  "Africa/Sao_Tome +1":"Africa/Sao_Tome",
  "Africa/Tripoli +2":"Africa/Tripoli",
  "Africa/Tunis +1":"Africa/Tunis",
  "Africa/Windhoek +1":"Africa/Windhoek",
  "America/Adak -10":"America/Adak",
  "America/Anchorage -9":"America/Anchorage",
  "America/Anguilla -4":"America/Anguilla",
  "America/Antigua -4":"America/Antigua",
  "America/Araguaina -3":"America/Araguaina",
  "America/Argentina/Buenos_Aires -3":"America/Argentina/Buenos_Aires",
  "America/Argentina/Catamarca -3":"America/Argentina/Catamarca",
  "America/Argentina/Cordoba -3":"America/Argentina/Cordoba",
  "America/Argentina/Jujuy -3":"America/Argentina/Jujuy",
  "America/Argentina/La_Rioja -3":"America/Argentina/La_Rioja",
  "America/Argentina/Mendoza -3":"America/Argentina/Mendoza",
  "America/Argentina/Rio_Gallegos -3":"America/Argentina/Rio_Gallegos",
  "America/Argentina/Salta -3":"America/Argentina/Salta",
  "America/Argentina/San_Juan -3":"America/Argentina/San_Juan",
  "America/Argentina/San_Luis -3":"America/Argentina/San_Luis",
  "America/Argentina/Tucuman -3":"America/Argentina/Tucuman",
  "America/Argentina/Ushuaia -3":"America/Argentina/Ushuaia",
  "America/Aruba -4":"America/Aruba",
  "America/Asuncion -4":"America/Asuncion",
  "America/Atikokan -5":"America/Atikokan",
  "America/Bahia -3":"America/Bahia",
  "America/Bahia_Banderas -6":"America/Bahia_Banderas",
  "America/Barbados -4":"America/Barbados",
  "America/Belem -3":"America/Belem",
  "America/Belize -6":"America/Belize",
  "America/Blanc-Sablon -4":"America/Blanc-Sablon",
  "America/Boa_Vista -4":"America/Boa_Vista",
  "America/Bogota -5":"America/Bogota",
  "America/Boise -7":"America/Boise",
  "America/Cambridge_Bay -7":"America/Cambridge_Bay",
  "America/Campo_Grande -4":"America/Campo_Grande",
  "America/Cancun -5":"America/Cancun",
  "America/Caracas -4":"America/Caracas",
  "America/Cayenne -3":"America/Cayenne",
  "America/Cayman -5":"America/Cayman",
  "America/Chicago -6":"America/Chicago",
  "America/Chihuahua -7":"America/Chihuahua",
  "America/Costa_Rica -6":"America/Costa_Rica",
  "America/Creston -7":"America/Creston",
  "America/Cuiaba -4":"America/Cuiaba",
  "America/Curacao -4":"America/Curacao",
  "America/Danmarkshavn +0":"America/Danmarkshavn",
  "America/Dawson -8":"America/Dawson",
  "America/Dawson_Creek -7":"America/Dawson_Creek",
  "America/Denver -7":"America/Denver",
  "America/Detroit -5":"America/Detroit",
  "America/Dominica -4":"America/Dominica",
  "America/Edmonton -7":"America/Edmonton",
  "America/Eirunepe -5":"America/Eirunepe",
  "America/El_Salvador -6":"America/El_Salvador",
  "America/Fort_Nelson -7":"America/Fort_Nelson",
  "America/Fortaleza -3":"America/Fortaleza",
  "America/Glace_Bay -4":"America/Glace_Bay",
  "America/Godthab -3":"America/Godthab",
  "America/Goose_Bay -4":"America/Goose_Bay",
  "America/Grand_Turk -4":"America/Grand_Turk",
  "America/Grenada -4":"America/Grenada",
  "America/Guadeloupe -4":"America/Guadeloupe",
  "America/Guatemala -6":"America/Guatemala",
  "America/Guayaquil -5":"America/Guayaquil",
  "America/Guyana -4":"America/Guyana",
  "America/Halifax -4":"America/Halifax",
  "America/Havana -5":"America/Havana",
  "America/Hermosillo -7":"America/Hermosillo",
  "America/Indiana/Indianapolis -5":"America/Indiana/Indianapolis",
  "America/Indiana/Knox -6":"America/Indiana/Knox",
  "America/Indiana/Marengo -5":"America/Indiana/Marengo",
  "America/Indiana/Petersburg -5":"America/Indiana/Petersburg",
  "America/Indiana/Tell_City -6":"America/Indiana/Tell_City",
  "America/Indiana/Vevay -5":"America/Indiana/Vevay",
  "America/Indiana/Vincennes -5":"America/Indiana/Vincennes",
  "America/Indiana/Winamac -5":"America/Indiana/Winamac",
  "America/Inuvik -7":"America/Inuvik",
  "America/Iqaluit -5":"America/Iqaluit",
  "America/Jamaica -5":"America/Jamaica",
  "America/Juneau -9":"America/Juneau",
  "America/Kentucky/Louisville -5":"America/Kentucky/Louisville",
  "America/Kentucky/Monticello -5":"America/Kentucky/Monticello",
  "America/Kralendijk -4":"America/Kralendijk",
  "America/La_Paz -4":"America/La_Paz",
  "America/Lima -5":"America/Lima",
  "America/Los_Angeles -8":"America/Los_Angeles",
  "America/Lower_Princes -4":"America/Lower_Princes",
  "America/Maceio -3":"America/Maceio",
  "America/Managua -6":"America/Managua",
  "America/Manaus -4":"America/Manaus",
  "America/Marigot -4":"America/Marigot",
  "America/Martinique -4":"America/Martinique",
  "America/Matamoros -6":"America/Matamoros",
  "America/Mazatlan -7":"America/Mazatlan",
  "America/Menominee -6":"America/Menominee",
  "America/Merida -6":"America/Merida",
  "America/Metlakatla -9":"America/Metlakatla",
  "America/Mexico_City -6":"America/Mexico_City",
  "America/Miquelon -3":"America/Miquelon",
  "America/Moncton -4":"America/Moncton",
  "America/Monterrey -6":"America/Monterrey",
  "America/Montevideo -3":"America/Montevideo",
  "America/Montserrat -4":"America/Montserrat",
  "America/Nassau -5":"America/Nassau",
  "America/New_York -5":"America/New_York",
  "America/Nipigon -5":"America/Nipigon",
  "America/Nome -9":"America/Nome",
  "America/Noronha -2":"America/Noronha",
  "America/North_Dakota/Beulah -6":"America/North_Dakota/Beulah",
  "America/North_Dakota/Center -6":"America/North_Dakota/Center",
  "America/North_Dakota/New_Salem -6":"America/North_Dakota/New_Salem",
  "America/Ojinaga -7":"America/Ojinaga",
  "America/Panama -5":"America/Panama",
  "America/Pangnirtung -5":"America/Pangnirtung",
  "America/Paramaribo -3":"America/Paramaribo",
  "America/Phoenix -7":"America/Phoenix",
  "America/Port-au-Prince -5":"America/Port-au-Prince",
  "America/Port_of_Spain -4":"America/Port_of_Spain",
  "America/Porto_Velho -4":"America/Porto_Velho",
  "America/Puerto_Rico -4":"America/Puerto_Rico",
  "America/Rainy_River -6":"America/Rainy_River",
  "America/Rankin_Inlet -6":"America/Rankin_Inlet",
  "America/Recife -3":"America/Recife",
  "America/Regina -6":"America/Regina",
  "America/Resolute -6":"America/Resolute",
  "America/Rio_Branco -5":"America/Rio_Branco",
  "America/Santarem -3":"America/Santarem",
  "America/Santiago -4":"America/Santiago",
  "America/Santo_Domingo -4":"America/Santo_Domingo",
  "America/Sao_Paulo -3":"America/Sao_Paulo",
  "America/Scoresbysund -1":"America/Scoresbysund",
  "America/Sitka -9":"America/Sitka",
  "America/St_Barthelemy -4":"America/St_Barthelemy",
  "America/St_Johns -3:30":"America/St_Johns",
  "America/St_Kitts -4":"America/St_Kitts",
  "America/St_Lucia -4":"America/St_Lucia",
  "America/St_Thomas -4":"America/St_Thomas",
  "America/St_Vincent -4":"America/St_Vincent",
  "America/Swift_Current -6":"America/Swift_Current",
  "America/Tegucigalpa -6":"America/Tegucigalpa",
  "America/Thule -4":"America/Thule",
  "America/Thunder_Bay -5":"America/Thunder_Bay",
  "America/Tijuana -8":"America/Tijuana",
  "America/Toronto -5":"America/Toronto",
  "America/Tortola -4":"America/Tortola",
  "America/Vancouver -8":"America/Vancouver",
  "America/Whitehorse -8":"America/Whitehorse",
  "America/Winnipeg -6":"America/Winnipeg",
  "America/Yakutat -9":"America/Yakutat",
  "America/Yellowknife -7":"America/Yellowknife",
  "Antarctica/Casey +8":"Antarctica/Casey",
  "Antarctica/Davis +7":"Antarctica/Davis",
  "Antarctica/DumontDUrville +10":"Antarctica/DumontDUrville",
  "Antarctica/Macquarie +11":"Antarctica/Macquarie",
  "Antarctica/Mawson +5":"Antarctica/Mawson",
  "Antarctica/McMurdo +12":"Antarctica/McMurdo",
  "Antarctica/Palmer -4":"Antarctica/Palmer",
  "Antarctica/Rothera -3":"Antarctica/Rothera",
  "Antarctica/Syowa +3":"Antarctica/Syowa",
  "Antarctica/Troll +0":"Antarctica/Troll",
  "Antarctica/Vostok +6":"Antarctica/Vostok",
  "Arctic/Longyearbyen +1":"Arctic/Longyearbyen",
  "Asia/Aden +3":"Asia/Aden",
  "Asia/Almaty +6":"Asia/Almaty",
  "Asia/Amman +2":"Asia/Amman",
  "Asia/Anadyr +12":"Asia/Anadyr",
  "Asia/Aqtau +5":"Asia/Aqtau",
  "Asia/Aqtobe +5":"Asia/Aqtobe",
  "Asia/Ashgabat +5":"Asia/Ashgabat",
  "Asia/Baghdad +3":"Asia/Baghdad",
  "Asia/Bahrain +3":"Asia/Bahrain",
  "Asia/Baku +4":"Asia/Baku",
  "Asia/Bangkok +7":"Asia/Bangkok",
  "Asia/Barnaul +7":"Asia/Barnaul",
  "Asia/Beirut +2":"Asia/Beirut",
  "Asia/Bishkek +6":"Asia/Bishkek",
  "Asia/Brunei +8":"Asia/Brunei",
  "Asia/Chita +9":"Asia/Chita",
  "Asia/Choibalsan +8":"Asia/Choibalsan",
  "Asia/Colombo +5:30":"Asia/Colombo",
  "Asia/Damascus +2":"Asia/Damascus",
  "Asia/Dhaka +6":"Asia/Dhaka",
  "Asia/Dili +9":"Asia/Dili",
  "Asia/Dubai +4":"Asia/Dubai",
  "Asia/Dushanbe +5":"Asia/Dushanbe",
  "Asia/Gaza +2":"Asia/Gaza",
  "Asia/Hebron +2":"Asia/Hebron",
  "Asia/Ho_Chi_Minh +7":"Asia/Ho_Chi_Minh",
  "Asia/Hong_Kong +8":"Asia/Hong_Kong",
  "Asia/Hovd +7":"Asia/Hovd",
  "Asia/Irkutsk +8":"Asia/Irkutsk",
  "Asia/Jakarta +7":"Asia/Jakarta",
  "Asia/Jayapura +9":"Asia/Jayapura",
  "Asia/Jerusalem +2":"Asia/Jerusalem",
  "Asia/Kabul +4:30":"Asia/Kabul",
  "Asia/Kamchatka +12":"Asia/Kamchatka",
  "Asia/Karachi +5":"Asia/Karachi",
  "Asia/Kathmandu +5:45":"Asia/Kathmandu",
  "Asia/Khandyga +9":"Asia/Khandyga",
  "Asia/Kolkata +5:30":"Asia/Kolkata",
  "Asia/Krasnoyarsk +7":"Asia/Krasnoyarsk",
  "Asia/Kuala_Lumpur +8":"Asia/Kuala_Lumpur",
  "Asia/Kuching +8":"Asia/Kuching",
  "Asia/Kuwait +3":"Asia/Kuwait",
  "Asia/Macau +8":"Asia/Macau",
  "Asia/Magadan +11":"Asia/Magadan",
  "Asia/Makassar +8":"Asia/Makassar",
  "Asia/Manila +8":"Asia/Manila",
  "Asia/Muscat +4":"Asia/Muscat",
  "Asia/Nicosia +2":"Asia/Nicosia",
  "Asia/Novokuznetsk +7":"Asia/Novokuznetsk",
  "Asia/Novosibirsk +6":"Asia/Novosibirsk",
  "Asia/Omsk +6":"Asia/Omsk",
  "Asia/Oral +5":"Asia/Oral",
  "Asia/Phnom_Penh +7":"Asia/Phnom_Penh",
  "Asia/Pontianak +7":"Asia/Pontianak",
  "Asia/Pyongyang +8:30":"Asia/Pyongyang",
  "Asia/Qatar +3":"Asia/Qatar",
  "Asia/Qyzylorda +6":"Asia/Qyzylorda",
  "Asia/Rangoon +6:30":"Asia/Rangoon",
  "Asia/Riyadh +3":"Asia/Riyadh",
  "Asia/Sakhalin +11":"Asia/Sakhalin",
  "Asia/Samarkand +5":"Asia/Samarkand",
  "Asia/Seoul +9":"Asia/Seoul",
  "Asia/Shanghai +8":"Asia/Shanghai",
  "Asia/Singapore +8":"Asia/Singapore",
  "Asia/Srednekolymsk +11":"Asia/Srednekolymsk",
  "Asia/Taipei +8":"Asia/Taipei",
  "Asia/Tashkent +5":"Asia/Tashkent",
  "Asia/Tbilisi +4":"Asia/Tbilisi",
  "Asia/Tehran +3:30":"Asia/Tehran",
  "Asia/Thimphu +6":"Asia/Thimphu",
  "Asia/Tokyo +9":"Asia/Tokyo",
  "Asia/Ulaanbaatar +8":"Asia/Ulaanbaatar",
  "Asia/Urumqi +6":"Asia/Urumqi",
  "Asia/Ust-Nera +10":"Asia/Ust-Nera",
  "Asia/Vientiane +7":"Asia/Vientiane",
  "Asia/Vladivostok +10":"Asia/Vladivostok",
  "Asia/Yakutsk +9":"Asia/Yakutsk",
  "Asia/Yekaterinburg +5":"Asia/Yekaterinburg",
  "Asia/Yerevan +4":"Asia/Yerevan",
  "Atlantic/Azores -1":"Atlantic/Azores",
  "Atlantic/Bermuda -4":"Atlantic/Bermuda",
  "Atlantic/Canary +0":"Atlantic/Canary",
  "Atlantic/Cape_Verde -1":"Atlantic/Cape_Verde",
  "Atlantic/Faroe +0":"Atlantic/Faroe",
  "Atlantic/Madeira +0":"Atlantic/Madeira",
  "Atlantic/Reykjavik +0":"Atlantic/Reykjavik",
  "Atlantic/South_Georgia -2":"Atlantic/South_Georgia",
  "Atlantic/St_Helena +0":"Atlantic/St_Helena",
  "Atlantic/Stanley -3":"Atlantic/Stanley",
  "Australia/Adelaide +9:30":"Australia/Adelaide",
  "Australia/Brisbane +10":"Australia/Brisbane",
  "Australia/Broken_Hill +9:30":"Australia/Broken_Hill",
  "Australia/Currie +10":"Australia/Currie",
  "Australia/Darwin +9:30":"Australia/Darwin",
  "Australia/Eucla +8:45":"Australia/Eucla",
  "Australia/Hobart +10":"Australia/Hobart",
  "Australia/Lindeman +10":"Australia/Lindeman",
  "Australia/Lord_Howe +10:30":"Australia/Lord_Howe",
  "Australia/Melbourne +10":"Australia/Melbourne",
  "Australia/Perth +8":"Australia/Perth",
  "Australia/Sydney +10":"Australia/Sydney",
  "Europe/Amsterdam +1":"Europe/Amsterdam",
  "Europe/Andorra +1":"Europe/Andorra",
  "Europe/Astrakhan +4":"Europe/Astrakhan",
  "Europe/Athens +2":"Europe/Athens",
  "Europe/Belgrade +1":"Europe/Belgrade",
  "Europe/Berlin +1":"Europe/Berlin",
  "Europe/Bratislava +1":"Europe/Bratislava",
  "Europe/Brussels +1":"Europe/Brussels",
  "Europe/Bucharest +2":"Europe/Bucharest",
  "Europe/Budapest +1":"Europe/Budapest",
  "Europe/Chisinau +2":"Europe/Chisinau",
  "Europe/Copenhagen +1":"Europe/Copenhagen",
  "Europe/Dublin +0":"Europe/Dublin",
  "Europe/Gibraltar +1":"Europe/Gibraltar",
  "Europe/Guernsey +0":"Europe/Guernsey",
  "Europe/Helsinki +2":"Europe/Helsinki",
  "Europe/Isle_of_Man +0":"Europe/Isle_of_Man",
  "Europe/Istanbul +2":"Europe/Istanbul",
  "Europe/Jersey +0":"Europe/Jersey",
  "Europe/Kaliningrad +2":"Europe/Kaliningrad",
  "Europe/Kiev +2":"Europe/Kiev",
  "Europe/Lisbon +0":"Europe/Lisbon",
  "Europe/Ljubljana +1":"Europe/Ljubljana",
  "Europe/London +0":"Europe/London",
  "Europe/Luxembourg +1":"Europe/Luxembourg",
  "Europe/Madrid +1":"Europe/Madrid",
  "Europe/Malta +1":"Europe/Malta",
  "Europe/Mariehamn +2":"Europe/Mariehamn",
  "Europe/Minsk +3":"Europe/Minsk",
  "Europe/Monaco +1":"Europe/Monaco",
  "Europe/Moscow +3":"Europe/Moscow",
  "Europe/Oslo +1":"Europe/Oslo",
  "Europe/Paris +1":"Europe/Paris",
  "Europe/Podgorica +1":"Europe/Podgorica",
  "Europe/Prague +1":"Europe/Prague",
  "Europe/Riga +2":"Europe/Riga",
  "Europe/Rome +1":"Europe/Rome",
  "Europe/Samara +4":"Europe/Samara",
  "Europe/San_Marino +1":"Europe/San_Marino",
  "Europe/Sarajevo +1":"Europe/Sarajevo",
  "Europe/Simferopol +3":"Europe/Simferopol",
  "Europe/Skopje +1":"Europe/Skopje",
  "Europe/Sofia +2":"Europe/Sofia",
  "Europe/Stockholm +1":"Europe/Stockholm",
  "Europe/Tallinn +2":"Europe/Tallinn",
  "Europe/Tirane +1":"Europe/Tirane",
  "Europe/Ulyanovsk +4":"Europe/Ulyanovsk",
  "Europe/Uzhgorod +2":"Europe/Uzhgorod",
  "Europe/Vaduz +1":"Europe/Vaduz",
  "Europe/Vatican +1":"Europe/Vatican",
  "Europe/Vienna +1":"Europe/Vienna",
  "Europe/Vilnius +2":"Europe/Vilnius",
  "Europe/Volgograd +3":"Europe/Volgograd",
  "Europe/Warsaw +1":"Europe/Warsaw",
  "Europe/Zagreb +1":"Europe/Zagreb",
  "Europe/Zaporozhye +2":"Europe/Zaporozhye",
  "Europe/Zurich +1":"Europe/Zurich",
  "Indian/Antananarivo +3":"Indian/Antananarivo",
  "Indian/Chagos +6":"Indian/Chagos",
  "Indian/Christmas +7":"Indian/Christmas",
  "Indian/Cocos +6:30":"Indian/Cocos",
  "Indian/Comoro +3":"Indian/Comoro",
  "Indian/Kerguelen +5":"Indian/Kerguelen",
  "Indian/Mahe +4":"Indian/Mahe",
  "Indian/Maldives +5":"Indian/Maldives",
  "Indian/Mauritius +4":"Indian/Mauritius",
  "Indian/Mayotte +3":"Indian/Mayotte",
  "Indian/Reunion +4":"Indian/Reunion",
  "Pacific/Apia +13":"Pacific/Apia",
  "Pacific/Auckland +12":"Pacific/Auckland",
  "Pacific/Bougainville +11":"Pacific/Bougainville",
  "Pacific/Chatham +12:45":"Pacific/Chatham",
  "Pacific/Chuuk +10":"Pacific/Chuuk",
  "Pacific/Easter -6":"Pacific/Easter",
  "Pacific/Efate +11":"Pacific/Efate",
  "Pacific/Enderbury +13":"Pacific/Enderbury",
  "Pacific/Fakaofo +13":"Pacific/Fakaofo",
  "Pacific/Fiji +12":"Pacific/Fiji",
  "Pacific/Funafuti +12":"Pacific/Funafuti",
  "Pacific/Galapagos -6":"Pacific/Galapagos",
  "Pacific/Gambier -9":"Pacific/Gambier",
  "Pacific/Guadalcanal +11":"Pacific/Guadalcanal",
  "Pacific/Guam +10":"Pacific/Guam",
  "Pacific/Honolulu -10":"Pacific/Honolulu",
  "Pacific/Johnston -10":"Pacific/Johnston",
  "Pacific/Kiritimati +14":"Pacific/Kiritimati",
  "Pacific/Kosrae +11":"Pacific/Kosrae",
  "Pacific/Kwajalein +12":"Pacific/Kwajalein",
  "Pacific/Majuro +12":"Pacific/Majuro",
  "Pacific/Marquesas -9:30":"Pacific/Marquesas",
  "Pacific/Midway -11":"Pacific/Midway",
  "Pacific/Nauru +12":"Pacific/Nauru",
  "Pacific/Niue -11":"Pacific/Niue",
  "Pacific/Norfolk +11":"Pacific/Norfolk",
  "Pacific/Noumea +11":"Pacific/Noumea",
  "Pacific/Pago_Pago -11":"Pacific/Pago_Pago",
  "Pacific/Palau +9":"Pacific/Palau",
  "Pacific/Pitcairn -8":"Pacific/Pitcairn",
  "Pacific/Pohnpei +11":"Pacific/Pohnpei",
  "Pacific/Port_Moresby +10":"Pacific/Port_Moresby",
  "Pacific/Rarotonga -10":"Pacific/Rarotonga",
  "Pacific/Saipan +10":"Pacific/Saipan",
  "Pacific/Tahiti -10":"Pacific/Tahiti",
  "Pacific/Tarawa +12":"Pacific/Tarawa",
  "Pacific/Tongatapu +13":"Pacific/Tongatapu",
  "Pacific/Wake +12":"Pacific/Wake",
  "Pacific/Wallis +12":"Pacific/Wallis"
}

export const TIME_ZONE = {
  "Africa/Abidjan +0":"Africa/Abidjan",
  "Africa/Accra +0":"Africa/Accra",
  "Africa/Addis_Ababa +3":"Africa/Addis_Ababa",
  "Africa/Algiers +1":"Africa/Algiers",
  "Africa/Asmara +3":"Africa/Asmara",
  "Africa/Bamako +0":"Africa/Bamako",
  "Africa/Bangui +1":"Africa/Bangui",
  "Africa/Banjul +0":"Africa/Banjul",
  "Africa/Bissau +0":"Africa/Bissau",
  "Africa/Blantyre +2":"Africa/Blantyre",
  "Africa/Brazzaville +1":"Africa/Brazzaville",
  "Africa/Bujumbura +2":"Africa/Bujumbura",
  "Africa/Cairo +2":"Africa/Cairo",
  "Africa/Casablanca +0":"Africa/Casablanca",
  "Africa/Ceuta +1":"Africa/Ceuta",
  "Africa/Conakry +0":"Africa/Conakry",
  "Africa/Dakar +0":"Africa/Dakar",
  "Africa/Dar_es_Salaam +3":"Africa/Dar_es_Salaam",
  "Africa/Djibouti +3":"Africa/Djibouti",
  "Africa/Douala +1":"Africa/Douala",
  "Africa/El_Aaiun +0":"Africa/El_Aaiun",
  "Africa/Freetown +0":"Africa/Freetown",
  "Africa/Gaborone +2":"Africa/Gaborone",
  "Africa/Harare +2":"Africa/Harare",
  "Africa/Johannesburg +2":"Africa/Johannesburg",
  "Africa/Juba +3":"Africa/Juba",
  "Africa/Kampala +3":"Africa/Kampala",
  "Africa/Khartoum +2":"Africa/Khartoum",
  "Africa/Kigali +2":"Africa/Kigali",
  "Africa/Kinshasa +1":"Africa/Kinshasa",
  "Africa/Lagos +1":"Africa/Lagos",
  "Africa/Libreville +1":"Africa/Libreville",
  "Africa/Lome +0":"Africa/Lome",
  "Africa/Luanda +1":"Africa/Luanda",
  "Africa/Lubumbashi +2":"Africa/Lubumbashi",
  "Africa/Lusaka +2":"Africa/Lusaka",
  "Africa/Malabo +1":"Africa/Malabo",
  "Africa/Maputo +2":"Africa/Maputo",
  "Africa/Maseru +2":"Africa/Maseru",
  "Africa/Mbabane +2":"Africa/Mbabane",
  "Africa/Mogadishu +3":"Africa/Mogadishu",
  "Africa/Monrovia +0":"Africa/Monrovia",
  "Africa/Nairobi +3":"Africa/Nairobi",
  "Africa/Ndjamena +1":"Africa/Ndjamena",
  "Africa/Niamey +1":"Africa/Niamey",
  "Africa/Nouakchott +0":"Africa/Nouakchott",
  "Africa/Ouagadougou +0":"Africa/Ouagadougou",
  "Africa/Porto-Novo +1":"Africa/Porto-Novo",
  "Africa/Sao_Tome +1":"Africa/Sao_Tome",
  "Africa/Tripoli +2":"Africa/Tripoli",
  "Africa/Tunis +1":"Africa/Tunis",
  "Africa/Windhoek +1":"Africa/Windhoek",
  "America/Adak -10":"America/Adak",
  "America/Anchorage -9":"America/Anchorage",
  "America/Anguilla -4":"America/Anguilla",
  "America/Antigua -4":"America/Antigua",
  "America/Araguaina -3":"America/Araguaina",
  "America/Argentina/Buenos_Aires -3":"America/Argentina/Buenos_Aires",
  "America/Argentina/Catamarca -3":"America/Argentina/Catamarca",
  "America/Argentina/Cordoba -3":"America/Argentina/Cordoba",
  "America/Argentina/Jujuy -3":"America/Argentina/Jujuy",
  "America/Argentina/La_Rioja -3":"America/Argentina/La_Rioja",
  "America/Argentina/Mendoza -3":"America/Argentina/Mendoza",
  "America/Argentina/Rio_Gallegos -3":"America/Argentina/Rio_Gallegos",
  "America/Argentina/Salta -3":"America/Argentina/Salta",
  "America/Argentina/San_Juan -3":"America/Argentina/San_Juan",
  "America/Argentina/San_Luis -3":"America/Argentina/San_Luis",
  "America/Argentina/Tucuman -3":"America/Argentina/Tucuman",
  "America/Argentina/Ushuaia -3":"America/Argentina/Ushuaia",
  "America/Aruba -4":"America/Aruba",
  "America/Asuncion -4":"America/Asuncion",
  "America/Atikokan -5":"America/Atikokan",
  "America/Bahia -3":"America/Bahia",
  "America/Bahia_Banderas -6":"America/Bahia_Banderas",
  "America/Barbados -4":"America/Barbados",
  "America/Belem -3":"America/Belem",
  "America/Belize -6":"America/Belize",
  "America/Blanc-Sablon -4":"America/Blanc-Sablon",
  "America/Boa_Vista -4":"America/Boa_Vista",
  "America/Bogota -5":"America/Bogota",
  "America/Boise -7":"America/Boise",
  "America/Cambridge_Bay -7":"America/Cambridge_Bay",
  "America/Campo_Grande -4":"America/Campo_Grande",
  "America/Cancun -5":"America/Cancun",
  "America/Caracas -4":"America/Caracas",
  "America/Cayenne -3":"America/Cayenne",
  "America/Cayman -5":"America/Cayman",
  "America/Chicago -6":"America/Chicago",
  "America/Chihuahua -7":"America/Chihuahua",
  "America/Costa_Rica -6":"America/Costa_Rica",
  "America/Creston -7":"America/Creston",
  "America/Cuiaba -4":"America/Cuiaba",
  "America/Curacao -4":"America/Curacao",
  "America/Danmarkshavn +0":"America/Danmarkshavn",
  "America/Dawson -8":"America/Dawson",
  "America/Dawson_Creek -7":"America/Dawson_Creek",
  "America/Denver -7":"America/Denver",
  "America/Detroit -5":"America/Detroit",
  "America/Dominica -4":"America/Dominica",
  "America/Edmonton -7":"America/Edmonton",
  "America/Eirunepe -5":"America/Eirunepe",
  "America/El_Salvador -6":"America/El_Salvador",
  "America/Fort_Nelson -7":"America/Fort_Nelson",
  "America/Fortaleza -3":"America/Fortaleza",
  "America/Glace_Bay -4":"America/Glace_Bay",
  "America/Godthab -3":"America/Godthab",
  "America/Goose_Bay -4":"America/Goose_Bay",
  "America/Grand_Turk -4":"America/Grand_Turk",
  "America/Grenada -4":"America/Grenada",
  "America/Guadeloupe -4":"America/Guadeloupe",
  "America/Guatemala -6":"America/Guatemala",
  "America/Guayaquil -5":"America/Guayaquil",
  "America/Guyana -4":"America/Guyana",
  "America/Halifax -4":"America/Halifax",
  "America/Havana -5":"America/Havana",
  "America/Hermosillo -7":"America/Hermosillo",
  "America/Indiana/Indianapolis -5":"America/Indiana/Indianapolis",
  "America/Indiana/Knox -6":"America/Indiana/Knox",
  "America/Indiana/Marengo -5":"America/Indiana/Marengo",
  "America/Indiana/Petersburg -5":"America/Indiana/Petersburg",
  "America/Indiana/Tell_City -6":"America/Indiana/Tell_City",
  "America/Indiana/Vevay -5":"America/Indiana/Vevay",
  "America/Indiana/Vincennes -5":"America/Indiana/Vincennes",
  "America/Indiana/Winamac -5":"America/Indiana/Winamac",
  "America/Inuvik -7":"America/Inuvik",
  "America/Iqaluit -5":"America/Iqaluit",
  "America/Jamaica -5":"America/Jamaica",
  "America/Juneau -9":"America/Juneau",
  "America/Kentucky/Louisville -5":"America/Kentucky/Louisville",
  "America/Kentucky/Monticello -5":"America/Kentucky/Monticello",
  "America/Kralendijk -4":"America/Kralendijk",
  "America/La_Paz -4":"America/La_Paz",
  "America/Lima -5":"America/Lima",
  "America/Los_Angeles -8":"America/Los_Angeles",
  "America/Lower_Princes -4":"America/Lower_Princes",
  "America/Maceio -3":"America/Maceio",
  "America/Managua -6":"America/Managua",
  "America/Manaus -4":"America/Manaus",
  "America/Marigot -4":"America/Marigot",
  "America/Martinique -4":"America/Martinique",
  "America/Matamoros -6":"America/Matamoros",
  "America/Mazatlan -7":"America/Mazatlan",
  "America/Menominee -6":"America/Menominee",
  "America/Merida -6":"America/Merida",
  "America/Metlakatla -9":"America/Metlakatla",
  "America/Mexico_City -6":"America/Mexico_City",
  "America/Miquelon -3":"America/Miquelon",
  "America/Moncton -4":"America/Moncton",
  "America/Monterrey -6":"America/Monterrey",
  "America/Montevideo -3":"America/Montevideo",
  "America/Montserrat -4":"America/Montserrat",
  "America/Nassau -5":"America/Nassau",
  "America/New_York -5":"America/New_York",
  "America/Nipigon -5":"America/Nipigon",
  "America/Nome -9":"America/Nome",
  "America/Noronha -2":"America/Noronha",
  "America/North_Dakota/Beulah -6":"America/North_Dakota/Beulah",
  "America/North_Dakota/Center -6":"America/North_Dakota/Center",
  "America/North_Dakota/New_Salem -6":"America/North_Dakota/New_Salem",
  "America/Ojinaga -7":"America/Ojinaga",
  "America/Panama -5":"America/Panama",
  "America/Pangnirtung -5":"America/Pangnirtung",
  "America/Paramaribo -3":"America/Paramaribo",
  "America/Phoenix -7":"America/Phoenix",
  "America/Port-au-Prince -5":"America/Port-au-Prince",
  "America/Port_of_Spain -4":"America/Port_of_Spain",
  "America/Porto_Velho -4":"America/Porto_Velho",
  "America/Puerto_Rico -4":"America/Puerto_Rico",
  "America/Rainy_River -6":"America/Rainy_River",
  "America/Rankin_Inlet -6":"America/Rankin_Inlet",
  "America/Recife -3":"America/Recife",
  "America/Regina -6":"America/Regina",
  "America/Resolute -6":"America/Resolute",
  "America/Rio_Branco -5":"America/Rio_Branco",
  "America/Santarem -3":"America/Santarem",
  "America/Santiago -4":"America/Santiago",
  "America/Santo_Domingo -4":"America/Santo_Domingo",
  "America/Sao_Paulo -3":"America/Sao_Paulo",
  "America/Scoresbysund -1":"America/Scoresbysund",
  "America/Sitka -9":"America/Sitka",
  "America/St_Barthelemy -4":"America/St_Barthelemy",
  "America/St_Johns -3:30":"America/St_Johns",
  "America/St_Kitts -4":"America/St_Kitts",
  "America/St_Lucia -4":"America/St_Lucia",
  "America/St_Thomas -4":"America/St_Thomas",
  "America/St_Vincent -4":"America/St_Vincent",
  "America/Swift_Current -6":"America/Swift_Current",
  "America/Tegucigalpa -6":"America/Tegucigalpa",
  "America/Thule -4":"America/Thule",
  "America/Thunder_Bay -5":"America/Thunder_Bay",
  "America/Tijuana -8":"America/Tijuana",
  "America/Toronto -5":"America/Toronto",
  "America/Tortola -4":"America/Tortola",
  "America/Vancouver -8":"America/Vancouver",
  "America/Whitehorse -8":"America/Whitehorse",
  "America/Winnipeg -6":"America/Winnipeg",
  "America/Yakutat -9":"America/Yakutat",
  "America/Yellowknife -7":"America/Yellowknife",
  "Antarctica/Casey +8":"Antarctica/Casey",
  "Antarctica/Davis +7":"Antarctica/Davis",
  "Antarctica/DumontDUrville +10":"Antarctica/DumontDUrville",
  "Antarctica/Macquarie +11":"Antarctica/Macquarie",
  "Antarctica/Mawson +5":"Antarctica/Mawson",
  "Antarctica/McMurdo +12":"Antarctica/McMurdo",
  "Antarctica/Palmer -4":"Antarctica/Palmer",
  "Antarctica/Rothera -3":"Antarctica/Rothera",
  "Antarctica/Syowa +3":"Antarctica/Syowa",
  "Antarctica/Troll +0":"Antarctica/Troll",
  "Antarctica/Vostok +6":"Antarctica/Vostok",
  "Arctic/Longyearbyen +1":"Arctic/Longyearbyen",
  "Asia/Aden +3":"Asia/Aden",
  "Asia/Almaty +6":"Asia/Almaty",
  "Asia/Amman +2":"Asia/Amman",
  "Asia/Anadyr +12":"Asia/Anadyr",
  "Asia/Aqtau +5":"Asia/Aqtau",
  "Asia/Aqtobe +5":"Asia/Aqtobe",
  "Asia/Ashgabat +5":"Asia/Ashgabat",
  "Asia/Baghdad +3":"Asia/Baghdad",
  "Asia/Bahrain +3":"Asia/Bahrain",
  "Asia/Baku +4":"Asia/Baku",
  "Asia/Bangkok +7":"Asia/Bangkok",
  "Asia/Barnaul +7":"Asia/Barnaul",
  "Asia/Beirut +2":"Asia/Beirut",
  "Asia/Bishkek +6":"Asia/Bishkek",
  "Asia/Brunei +8":"Asia/Brunei",
  "Asia/Chita +9":"Asia/Chita",
  "Asia/Choibalsan +8":"Asia/Choibalsan",
  "Asia/Colombo +5:30":"Asia/Colombo",
  "Asia/Damascus +2":"Asia/Damascus",
  "Asia/Dhaka +6":"Asia/Dhaka",
  "Asia/Dili +9":"Asia/Dili",
  "Asia/Dubai +4":"Asia/Dubai",
  "Asia/Dushanbe +5":"Asia/Dushanbe",
  "Asia/Gaza +2":"Asia/Gaza",
  "Asia/Hebron +2":"Asia/Hebron",
  "Asia/Ho_Chi_Minh +7":"Asia/Ho_Chi_Minh",
  "Asia/Hong_Kong +8":"Asia/Hong_Kong",
  "Asia/Hovd +7":"Asia/Hovd",
  "Asia/Irkutsk +8":"Asia/Irkutsk",
  "Asia/Jakarta +7":"Asia/Jakarta",
  "Asia/Jayapura +9":"Asia/Jayapura",
  "Asia/Jerusalem +2":"Asia/Jerusalem",
  "Asia/Kabul +4:30":"Asia/Kabul",
  "Asia/Kamchatka +12":"Asia/Kamchatka",
  "Asia/Karachi +5":"Asia/Karachi",
  "Asia/Kathmandu +5:45":"Asia/Kathmandu",
  "Asia/Khandyga +9":"Asia/Khandyga",
  "Asia/Kolkata +5:30":"Asia/Kolkata",
  "Asia/Krasnoyarsk +7":"Asia/Krasnoyarsk",
  "Asia/Kuala_Lumpur +8":"Asia/Kuala_Lumpur",
  "Asia/Kuching +8":"Asia/Kuching",
  "Asia/Kuwait +3":"Asia/Kuwait",
  "Asia/Macau +8":"Asia/Macau",
  "Asia/Magadan +11":"Asia/Magadan",
  "Asia/Makassar +8":"Asia/Makassar",
  "Asia/Manila +8":"Asia/Manila",
  "Asia/Muscat +4":"Asia/Muscat",
  "Asia/Nicosia +2":"Asia/Nicosia",
  "Asia/Novokuznetsk +7":"Asia/Novokuznetsk",
  "Asia/Novosibirsk +6":"Asia/Novosibirsk",
  "Asia/Omsk +6":"Asia/Omsk",
  "Asia/Oral +5":"Asia/Oral",
  "Asia/Phnom_Penh +7":"Asia/Phnom_Penh",
  "Asia/Pontianak +7":"Asia/Pontianak",
  "Asia/Pyongyang +8:30":"Asia/Pyongyang",
  "Asia/Qatar +3":"Asia/Qatar",
  "Asia/Qyzylorda +6":"Asia/Qyzylorda",
  "Asia/Rangoon +6:30":"Asia/Rangoon",
  "Asia/Riyadh +3":"Asia/Riyadh",
  "Asia/Sakhalin +11":"Asia/Sakhalin",
  "Asia/Samarkand +5":"Asia/Samarkand",
  "Asia/Seoul +9":"Asia/Seoul",
  "Asia/Shanghai +8":"Asia/Shanghai",
  "Asia/Singapore +8":"Asia/Singapore",
  "Asia/Srednekolymsk +11":"Asia/Srednekolymsk",
  "Asia/Taipei +8":"Asia/Taipei",
  "Asia/Tashkent +5":"Asia/Tashkent",
  "Asia/Tbilisi +4":"Asia/Tbilisi",
  "Asia/Tehran +3:30":"Asia/Tehran",
  "Asia/Thimphu +6":"Asia/Thimphu",
  "Asia/Tokyo +9":"Asia/Tokyo",
  "Asia/Ulaanbaatar +8":"Asia/Ulaanbaatar",
  "Asia/Urumqi +6":"Asia/Urumqi",
  "Asia/Ust-Nera +10":"Asia/Ust-Nera",
  "Asia/Vientiane +7":"Asia/Vientiane",
  "Asia/Vladivostok +10":"Asia/Vladivostok",
  "Asia/Yakutsk +9":"Asia/Yakutsk",
  "Asia/Yekaterinburg +5":"Asia/Yekaterinburg",
  "Asia/Yerevan +4":"Asia/Yerevan",
  "Atlantic/Azores -1":"Atlantic/Azores",
  "Atlantic/Bermuda -4":"Atlantic/Bermuda",
  "Atlantic/Canary +0":"Atlantic/Canary",
  "Atlantic/Cape_Verde -1":"Atlantic/Cape_Verde",
  "Atlantic/Faroe +0":"Atlantic/Faroe",
  "Atlantic/Madeira +0":"Atlantic/Madeira",
  "Atlantic/Reykjavik +0":"Atlantic/Reykjavik",
  "Atlantic/South_Georgia -2":"Atlantic/South_Georgia",
  "Atlantic/St_Helena +0":"Atlantic/St_Helena",
  "Atlantic/Stanley -3":"Atlantic/Stanley",
  "Australia/Adelaide +9:30":"Australia/Adelaide",
  "Australia/Brisbane +10":"Australia/Brisbane",
  "Australia/Broken_Hill +9:30":"Australia/Broken_Hill",
  "Australia/Currie +10":"Australia/Currie",
  "Australia/Darwin +9:30":"Australia/Darwin",
  "Australia/Eucla +8:45":"Australia/Eucla",
  "Australia/Hobart +10":"Australia/Hobart",
  "Australia/Lindeman +10":"Australia/Lindeman",
  "Australia/Lord_Howe +10:30":"Australia/Lord_Howe",
  "Australia/Melbourne +10":"Australia/Melbourne",
  "Australia/Perth +8":"Australia/Perth",
  "Australia/Sydney +10":"Australia/Sydney",
  "Europe/Amsterdam +1":"Europe/Amsterdam",
  "Europe/Andorra +1":"Europe/Andorra",
  "Europe/Astrakhan +4":"Europe/Astrakhan",
  "Europe/Athens +2":"Europe/Athens",
  "Europe/Belgrade +1":"Europe/Belgrade",
  "Europe/Berlin +1":"Europe/Berlin",
  "Europe/Bratislava +1":"Europe/Bratislava",
  "Europe/Brussels +1":"Europe/Brussels",
  "Europe/Bucharest +2":"Europe/Bucharest",
  "Europe/Budapest +1":"Europe/Budapest",
  "Europe/Chisinau +2":"Europe/Chisinau",
  "Europe/Copenhagen +1":"Europe/Copenhagen",
  "Europe/Dublin +0":"Europe/Dublin",
  "Europe/Gibraltar +1":"Europe/Gibraltar",
  "Europe/Guernsey +0":"Europe/Guernsey",
  "Europe/Helsinki +2":"Europe/Helsinki",
  "Europe/Isle_of_Man +0":"Europe/Isle_of_Man",
  "Europe/Istanbul +2":"Europe/Istanbul",
  "Europe/Jersey +0":"Europe/Jersey",
  "Europe/Kaliningrad +2":"Europe/Kaliningrad",
  "Europe/Kiev +2":"Europe/Kiev",
  "Europe/Lisbon +0":"Europe/Lisbon",
  "Europe/Ljubljana +1":"Europe/Ljubljana",
  "Europe/London +0":"Europe/London",
  "Europe/Luxembourg +1":"Europe/Luxembourg",
  "Europe/Madrid +1":"Europe/Madrid",
  "Europe/Malta +1":"Europe/Malta",
  "Europe/Mariehamn +2":"Europe/Mariehamn",
  "Europe/Minsk +3":"Europe/Minsk",
  "Europe/Monaco +1":"Europe/Monaco",
  "Europe/Moscow +3":"Europe/Moscow",
  "Europe/Oslo +1":"Europe/Oslo",
  "Europe/Paris +1":"Europe/Paris",
  "Europe/Podgorica +1":"Europe/Podgorica",
  "Europe/Prague +1":"Europe/Prague",
  "Europe/Riga +2":"Europe/Riga",
  "Europe/Rome +1":"Europe/Rome",
  "Europe/Samara +4":"Europe/Samara",
  "Europe/San_Marino +1":"Europe/San_Marino",
  "Europe/Sarajevo +1":"Europe/Sarajevo",
  "Europe/Simferopol +3":"Europe/Simferopol",
  "Europe/Skopje +1":"Europe/Skopje",
  "Europe/Sofia +2":"Europe/Sofia",
  "Europe/Stockholm +1":"Europe/Stockholm",
  "Europe/Tallinn +2":"Europe/Tallinn",
  "Europe/Tirane +1":"Europe/Tirane",
  "Europe/Ulyanovsk +4":"Europe/Ulyanovsk",
  "Europe/Uzhgorod +2":"Europe/Uzhgorod",
  "Europe/Vaduz +1":"Europe/Vaduz",
  "Europe/Vatican +1":"Europe/Vatican",
  "Europe/Vienna +1":"Europe/Vienna",
  "Europe/Vilnius +2":"Europe/Vilnius",
  "Europe/Volgograd +3":"Europe/Volgograd",
  "Europe/Warsaw +1":"Europe/Warsaw",
  "Europe/Zagreb +1":"Europe/Zagreb",
  "Europe/Zaporozhye +2":"Europe/Zaporozhye",
  "Europe/Zurich +1":"Europe/Zurich",
  "Indian/Antananarivo +3":"Indian/Antananarivo",
  "Indian/Chagos +6":"Indian/Chagos",
  "Indian/Christmas +7":"Indian/Christmas",
  "Indian/Cocos +6:30":"Indian/Cocos",
  "Indian/Comoro +3":"Indian/Comoro",
  "Indian/Kerguelen +5":"Indian/Kerguelen",
  "Indian/Mahe +4":"Indian/Mahe",
  "Indian/Maldives +5":"Indian/Maldives",
  "Indian/Mauritius +4":"Indian/Mauritius",
  "Indian/Mayotte +3":"Indian/Mayotte",
  "Indian/Reunion +4":"Indian/Reunion",
  "Pacific/Apia +13":"Pacific/Apia",
  "Pacific/Auckland +12":"Pacific/Auckland",
  "Pacific/Bougainville +11":"Pacific/Bougainville",
  "Pacific/Chatham +12:45":"Pacific/Chatham",
  "Pacific/Chuuk +10":"Pacific/Chuuk",
  "Pacific/Easter -6":"Pacific/Easter",
  "Pacific/Efate +11":"Pacific/Efate",
  "Pacific/Enderbury +13":"Pacific/Enderbury",
  "Pacific/Fakaofo +13":"Pacific/Fakaofo",
  "Pacific/Fiji +12":"Pacific/Fiji",
  "Pacific/Funafuti +12":"Pacific/Funafuti",
  "Pacific/Galapagos -6":"Pacific/Galapagos",
  "Pacific/Gambier -9":"Pacific/Gambier",
  "Pacific/Guadalcanal +11":"Pacific/Guadalcanal",
  "Pacific/Guam +10":"Pacific/Guam",
  "Pacific/Honolulu -10":"Pacific/Honolulu",
  "Pacific/Johnston -10":"Pacific/Johnston",
  "Pacific/Kiritimati +14":"Pacific/Kiritimati",
  "Pacific/Kosrae +11":"Pacific/Kosrae",
  "Pacific/Kwajalein +12":"Pacific/Kwajalein",
  "Pacific/Majuro +12":"Pacific/Majuro",
  "Pacific/Marquesas -9:30":"Pacific/Marquesas",
  "Pacific/Midway -11":"Pacific/Midway",
  "Pacific/Nauru +12":"Pacific/Nauru",
  "Pacific/Niue -11":"Pacific/Niue",
  "Pacific/Norfolk +11":"Pacific/Norfolk",
  "Pacific/Noumea +11":"Pacific/Noumea",
  "Pacific/Pago_Pago -11":"Pacific/Pago_Pago",
  "Pacific/Palau +9":"Pacific/Palau",
  "Pacific/Pitcairn -8":"Pacific/Pitcairn",
  "Pacific/Pohnpei +11":"Pacific/Pohnpei",
  "Pacific/Port_Moresby +10":"Pacific/Port_Moresby",
  "Pacific/Rarotonga -10":"Pacific/Rarotonga",
  "Pacific/Saipan +10":"Pacific/Saipan",
  "Pacific/Tahiti -10":"Pacific/Tahiti",
  "Pacific/Tarawa +12":"Pacific/Tarawa",
  "Pacific/Tongatapu +13":"Pacific/Tongatapu",
  "Pacific/Wake +12":"Pacific/Wake",
  "Pacific/Wallis +12":"Pacific/Wallis"
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
export const TEACHER_AGE = ['0-4', '5-9', '10-15']
export const HAVE_AWARD = {
  '0': '无',
  '1': '有'
}
export const HAVE_SENIORITY = {
  '0': '无',
  '1': '有'
}
export const TEACHER_WEEK = ['1', '2', '3', '4', '5', '6', '7']
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


export const INTERVIEW_STATUS_ENUMS = {
  1: '待预约',
  2: '未面试',
  3: '已经面试',
  4: '取消',
  5: '未完成',
  6: '等待答复',
  7: '等待确认时间',
  8: '待定',
  9: '面试结果通过',
  10: '面试结果失败',
  98: '有效',
  99: '无效'
}

