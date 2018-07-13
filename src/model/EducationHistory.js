export default class EducationHistory {
  constructor({
    // 学历证明
    certificate=[],
    // 在校开始时间
    start='',
    // 在校结束时间
    end='',
    // 学位
    degree='',
    // 专业
    major='',
    // 学校
    school='',
    // 备注
    remark=''
  }) {
    this.certificate = certificate;
    this.start = start;
    this.end = end;
    this.degree = degree;
    this.major = major;
    this.school = school;
    this.remark = remark;
  }
}