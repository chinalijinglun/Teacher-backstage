class CompletionStatus {
  constructor({
    status  = 0,
    text = ''
  }) {
    this.status = status;
    this.text = text;
  }
}

class Performace {
  constructor({
    overall = '',
    onTime = '',
    missTime = '',
    attitude = '',
    interaction = ''
  }) {
    this.overall = overall;
    this.onTime = onTime;
    this.missTime = missTime;
    this.attitude = attitude;
    this.interaction = interaction;
  }
}

const OVERALL_ENUM = {
  '1': 'Greade 1',
  '2': 'Greade 2',
  '3': 'Greade 3',
}
const ATTITUDE_ENUM = {
  '1': 'Excellent',
  '2': 'Good',
  '3': 'Poor'
}
const INTERACTION_ENUM = {
  '1': 'Excellent',
  '2': 'Good',
  '3': 'Poor'
}

export {
  OVERALL_ENUM,
  INTERACTION_ENUM,
  ATTITUDE_ENUM
}

export default class TeacherEvaluate {
  constructor({
    lesson_objective = '',
    completion_status = new CompletionStatus({}),
    performace = new Performace({}),
    summary = '',
    skills = '',
    improved = '',
    suggest = ''
  }) {
    this.lesson_objective  = lesson_objective;
    this.completion_status = completion_status;
    this.performace        = performace;
    this.summary           = summary;
    this.skills            = skills;
    this.improved          = improved;
    this.suggest           = suggest;
  }
}