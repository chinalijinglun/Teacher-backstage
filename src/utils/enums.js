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
// INTERVIEW_PASS:面试结果通过(待签约)，
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
  WAIT_FOR_CHECK:3,
  CHECK_PASS: 4,
  CHECK_ERROR: 5,
  WAIT_FOR_INTERVIEW: 6,
  INTERVIEW_PASS: 7,
  INTERVIEW_ERROR: 8,
  CONTRACTOR: 9,
  WAIT_FOR_TRAIN: 10,
  TRAIN_PASS: 11,
  TRAIN_ERROR: 12,
  WORKING: 13,
  NO_WORK: 14,
  INVALID: 15
};

export const TEACHER_STATE_ZH = {
  1:'新用户',
  2:'填写基本信息',
  3:'待审核',
  4:'审核通过(待预约)',
  5:'审核未通过',
  6:'已预约(待面试)',
  7:'面试结果通过(待签约)',
  8:'面试结果失败',
  9:'已签约',
  10:'待预约培训试讲',
  11:'培训试讲结果成功',
  12:'培训试讲结果失败',
  13:'在岗',
  14:'未在岗',
  15:'无效'
};

// '+1': '美国/加拿大',
//   '+1-264': '安圭拉岛',
//   '+1-268': '安提瓜和巴布达',
//   '+1-242': '巴哈马',
//   '+1-246': '巴巴多斯',
//   '+1-441': '百慕大',
//   '+1-284': '英属维京群岛',
//   '+1-345': '开曼群岛',
//   '+1-684': '美属萨摩亚',
//   '+1-767': '多米尼克',
//   '+1-809': '多米尼加共和国',
//   '+1-473': '格林纳达',
//   '+1-876': '牙买加',
//   '+1-664': '蒙特塞拉特',
//   '+1-787/1-939': '波多黎各',
//   '+1-869': '圣基茨和尼维斯',
//   '+1-758': '圣卢西亚',
//   '+1-784': '圣文森特和格林纳丁斯',
//   '+1-868': '特立尼达和多巴哥',
//   '+1-649': '特克斯和凯科斯群岛',
//   '+1-340': '美属维京群岛',
//   '+1-671': '关岛',
//   '+1-670': '北马里亚纳群岛',
//   '+20': '埃及',
//   '+211': '南苏丹',
//   '+212': '摩洛哥',
//   '+213': '阿尔及利亚',
//   '+216': '突尼斯',
//   '+218': '利比亚',
//   '+220': '冈比亚',
//   '+221': '塞内加尔',
//   '+222': '毛里塔尼亚',
//   '+223': '马里',
//   '+224': '几内亚',
//   '+225': '科特迪瓦',
//   '+226': '布基纳法索',
//   '+227': '尼日尔',
//   '+228': '多哥',
//   '+229': '贝宁',
//   '+230': '毛里求斯',
//   '+231': '利比里亚',
//   '+232': '塞拉利昂',
//   '+233': '加纳',
//   '+234': '尼日利亚',
//   '+235': '乍得',
//   '+236': '中非共和国',
//   '+237': '喀麦隆',
//   '+238': '佛得角',
//   '+239': '圣多美和普林西比',
//   '+240': '赤道几内亚',
//   '+241': '加蓬',
//   '+242': '刚果共和国（布）',
//   '+243': '刚果民主共和国（金）（即前扎伊尔）',
//   '+244': '安哥拉',
//   '+245': '几内亚比绍',
//   '+246': ' 迪戈加西亚',
//   '+247': '阿森松岛',
//   '+248': '塞舌尔',
//   '+249': '苏丹',
//   '+250': '卢旺达',
//   '+251': '埃塞俄比亚',
//   '+252': '索马里',
//   '+253': '吉布提',
//   '+254': '肯尼亚',
//   '+255': '坦桑尼亚',
//   '+256': '乌干达',
//   '+257': '布隆迪',
//   '+258': '莫桑比克',
//   '+259': ' 桑给巴尔- 从未使用――参见255坦桑尼亚',
//   '+260': '赞比亚',
//   '+261': '马达加斯加',
//   '+262': '留尼汪',
//   '+263': '津巴布韦',
//   '+264': '纳米比亚',
//   '+265': '马拉维',
//   '+266': '莱索托',
//   '+267': '博茨瓦纳',
//   '+268': '斯威士兰',
//   '+269': '科摩罗和马约特',
//   '+27': '南非',
//   '+290': '圣赫勒拿',
//   '+291': '厄立特里亚',
//   '+297': '阿鲁巴',
//   '+298': '法罗群岛',
//   '+299': ' 格陵兰',
//   '+30': '希腊',
//   '+31': '荷兰',
//   '+32': '比利时',
//   '+33': '法国',
//   '+34': '西班牙',
//   '+350': '直布罗陀',
//   '+351': '葡萄牙',
//   '+352': '卢森堡',
//   '+353': '爱尔兰',
//   '+354': '冰岛',
//   '+355': '阿尔巴尼亚',
//   '+356': '马耳他',
//   '+357': '塞浦路斯',
//   '+358': '芬兰',
//   '+359': '保加利亚',
//   '+36': '匈牙利',
//   '+37': ' 东德',
//   '+370': '立陶宛',
//   '+371': '拉脱维亚',
//   '+372': '爱沙尼亚',
//   '+373': '摩尔多瓦',
//   '+374': '亚美尼亚',
//   '+375': '白俄罗斯',
//   '+376': '安道尔',
//   '+377': '摩纳哥',
//   '+378': ' 圣马力诺',
//   '+379': ' 梵蒂冈',
//   '+38': '南斯拉夫',
//   '+380': '乌克兰',
//   '+381': '塞尔维亚',
//   '+382': '黑山',
//   '+385': '克罗地亚',
//   '+386': '斯洛文尼亚',
//   '+387': '波黑',
//   '+388': '欧洲电话号码空间――环欧洲服务',
//   '+389': '马其顿',
//   '+39': ' 意大利',
//   '+40': '罗马尼亚',
//   '+41': '瑞士',
//   '+42': '捷克斯洛伐克',
//   '+420': '捷克共和国',
//   '+421': '斯洛伐克',
//   '+423': '列支敦士登',
//   '+43': '奥地利',
//   '+44': '英国',
//   '+45': '丹麦',
//   '+46': '瑞典',
//   '+47': '挪威',
//   '+48': '波兰',
//   '+49': '德国',
//   '+500': '福克兰群岛',
//   '+501': '伯利兹',
//   '+502': '危地马拉',
//   '+503': '萨尔瓦多',
//   '+504': '洪都拉斯',
//   '+505': '尼加拉瓜',
//   '+506': '哥斯达黎加',
//   '+507': '巴拿马',
//   '+508': '圣皮埃尔和密克隆群岛',
//   '+509': '海地',
//   '+51': '秘鲁',
//   '+52': '墨西哥',
//   '+53': '古巴（本应属于北美区，由于历史原因分在5区）',
//   '+54': '阿根廷',
//   '+55': '巴西',
//   '+56': '智利',
//   '+57': '哥伦比亚',
//   '+58': '委内瑞拉',
//   '+590': '瓜德罗普（含法属圣马丁和圣巴泰勒米岛）',
//   '+591': '玻利维亚',
//   '+592': '圭亚那',
//   '+593': '厄瓜多尔',
//   '+594': '法属圭亚那',
//   '+595': '巴拉圭',
//   '+596': '马提尼克',
//   '+597': '苏里南',
//   '+598': '乌拉圭',
//   '+599': '荷兰加勒比区（原荷属安的列斯，2010年10月10日解体）',
//   '+599': '荷属圣马丁',
//   '+599-9': '库拉索',
//   '+60': '马来西亚',
//   '+61': '澳大利亚',
//   '+62': '印度尼西亚',
//   '+63': '菲律宾',
//   '+64': '新西兰',
//   '+65': '新加坡',
//   '+66': '泰国',
//   '+670': '东帝汶',
//   '+672': '澳大利亚海外领地：南极洲、圣诞岛、科科斯群岛、诺福克岛',
//   '+673': '文莱',
//   '+674': '瑙鲁',
//   '+675': '巴布亚新几内亚',
//   '+676': '汤加',
//   '+677': '所罗门群岛',
//   '+678': '瓦努阿图',
//   '+679': '斐济',
//   '+680': '帕劳',
//   '+681': '瓦利斯和富图纳群岛',
//   '+682': '库克群岛',
//   '+683': '纽埃',
//   '+685': '萨摩亚',
//   '+686': '基里巴斯，吉尔伯特群岛',
//   '+687': '新喀里多尼亚',
//   '+688': '图瓦卢，埃利斯群岛',
//   '+689': '法属波利尼西亚',
//   '+690': '托克劳群岛',
//   '+691': '密克罗尼西亚联邦',
//   '+692': '马绍尔群岛',
//   '+7': '俄罗斯、哈萨克斯坦',
//   '+81': '日本',
//   '+82': '韩国',
//   '+84': '越南',
//   '+850': '朝鲜',
//   '+852': '香港',
//   '+853': '澳门',
//   '+855': '柬埔寨',
//   '+856': '老挝',
//   '+86': '中华人民共和国',
//   '+870': '国际海事卫星组织 "SNAC" 卫星电话',
//   '+878': '环球个人通讯服务',
//   '+880': '孟加拉国',
//   '+881': '移动卫星系统',
//   '+882': '国际网络',
//   '+886': '台湾',
//   '+90': '土耳其',
//   '+91': '印度',
//   '+92': '巴基斯坦',
//   '+93': '阿富汗',
//   '+94': '斯里兰卡',
//   '+95': '缅甸',
//   '+960': '马尔代夫',
//   '+961': '黎巴嫩',
//   '+962': '约旦',
//   '+963': '叙利亚',
//   '+964': '伊拉克',
//   '+965': '科威特',
//   '+966': '沙特阿拉伯',
//   '+967': '也门',
//   '+968': '阿曼',
//   '+969': '也门民主共和国',
//   '+970': '巴勒斯坦',
//   '+971': '阿拉伯联合酋长国',
//   '+972': '以色列',
//   '+973': '巴林',
//   '+974': '卡塔尔',
//   '+975': '不丹',
//   '+976': '蒙古',
//   '+977': '尼泊尔',
//   '+979': '国际费率服务（International Premium Rate Service）',
//   '+98': '伊朗',
//   '+991': '国际电信公众通信服务试验（International Telecommunications Public Correspondence Service trial , ITPCS）',
//   '+992': '塔吉克斯坦',
//   '+993': '土库曼斯坦',
//   '+994': '阿塞拜疆',
//   '+995': '格鲁吉亚',
//   '+996': '吉尔吉斯斯坦',
//   '+998': '乌兹别克斯坦'
export const MOBILE_PRE = {
  '+1': '美国（+1）',
  '+86': '中国（+86）'
}
