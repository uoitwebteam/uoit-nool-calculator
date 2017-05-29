import template from './goal.component.html';

const controller = class GoalController {
  constructor(roundFilter) {
    'ngInject';
    this.round = roundFilter;
    this.goal = 0;
  }

  $onInit() {
    this.goal = this.healthyAverage;
  }

  get healthyAverage() {
    const gradeTotal = (this.grades.reduce((acc, grade) => (acc += grade.mark), 0));
    const gradeAverage = gradeTotal / this.grades.length;
    return gradeAverage ? this.round(gradeAverage, 2) : 80;
  }

  get percentNeeded() {
    const gradeAdjusted = this.grades.reduce((acc, grade) => (acc += grade.adjusted), 0);
    const percentNeeded = (this.goal - gradeAdjusted) / (this.valueRemaining / 100);
    return percentNeeded ? this.round(percentNeeded, 2) : 0;
  }
};

export const GradeGoal = {
  bindings: {
    grades: '<',
    valueRemaining: '<'
  },
  controller,
  template
};
