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

// 面试报告
export class InterviewReportVo {
  constructor({
    // 有无线上经验 1 有 0 无
    onlineExperience = '',
    // 教室访问情况
    roomVisit = {
      // 1 顺利 0 不顺利
      value: '',
      // 备注
      remark: ''
    },
    // 性别 1 男 0 女
    gender = '',
    // 肤色 1 白 2 黄 3 黑 4 棕 5 红 6 其他
    skin = '',
    // 教研管理经验
    teacherExperience = {
      // 1 有 0 没有
      value: '',
      // 备注
      remark: ''
    },
    // 受教育背景名校
    educationHistory = {
      // 1 私立藤校 2 公立藤校 3 排名前100
      value: '',
      // 备注
      remark: ''
    },
    // 任职学校名校
    workShool = {
      // 1 蓝带学校 2 藤校 3 排名前100
      value: '',
      // 备注
      remark: ''
    },
    // demo课讲课方式 1 说课 2 讲课
    demoCourseWay = '',
    // 教学特色
    teacheFeature = '',
    // PPT主题
    pptTheme = '',
    // PPT设计
    pptDesign = '',
    // PPT内容
    pptContent = '',
    // 建议时薪 1 20-25 2 25-30 3 30-35 4 35-40 5 40以上
    suggestSalary = '',
    // 邮件往来数量情况
    emailNumRemark = '',
    // 个人魅力相关
    selfCharmRemark = '',

    // 面试评价表
    // 当地教龄  5年及以下 6-15年 15年以上
    localWorkAge = '',
    // 学历 1 本科 2 硕士 3 博士
    highestDegree = '',
    // 教研经验
    teacheAndManage = {
      // 教学经验
      teache: 0,
      // 管理经验
      manage: 0,
      // 咨询经验
      consult: 0
    },
    // 面试环境 
    interviewStatus = {
      // 灯光效果
      light: 0,
      // 背景适宜
      background: 0
    },
    // 线上教室功能使用
    onlineRoomStatus = {
      // 顺利进入教师
      enter: 0,
      // 成功上传课件
      upload: 0,
      // 教室其它功能使用
      other: 0
    },
    // 线上授课相关
    onlineTeache = {
      // 线上授课经历
      experience: 0,
      // 声情并茂
      isLively: 0,
      // ppt技能
      ppt: 0,
      // 音频视频
      voice: 0
    },
    // 课件外观
    coursewareStyle = {
      // 图文并茂
      isLively: 0,
      // 外观设计
      design: 0,
      // 肢体语言
      action: 0,
      // 有辅助道具
      property: 0
    },
    // 课件内容
    coursewareContent = {
      // 授课目标
      goal: 0,
      // 词汇学习
      word: 0,
      // 互动练习
      interaction: 0,
      // 内容丰富
      rich: 0,
      // 结构清晰
      clear: 0
    },
    // 授课/说课
    teacheStatus = {
      // 互动型
      interaction: 0,
      // 感染力型
      affect: 0,
      // 灵活多变
      flexible: 0,
      // 语速适宜
      speed: 0
    },
    // 定制化教学能力
    customMade = {
      // 有定制教学经验
      hasCustomMade: 0,
      // 有教中国学生经验
      hasChiness: 0
    },
    // 职业素养
    attainment = {
      // 准时
      onTime: 0,
      // 热爱教学
      loveTeache: 0
    },
    // 总结
    summary = '',
    // 结果
    result = ''
  }) {
  }
}