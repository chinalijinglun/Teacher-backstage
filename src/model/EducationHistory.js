export default class EducationHistory {
  constructor({
    certificate=[],
    end='',
    major='',
    school='',
    start=''
  }) {
    this.certificate = certificate;
    this.end = end;
    this.major = major;
    this.school = school;
    this.start = start;
  }
}