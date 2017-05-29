import template from './display.component.html';

const controller = class DisplayController {
  constructor(roundFilter) {
    'ngInject';
    this.round = roundFilter;
  }

  get currentGrade() {
    if (!this.grades || !this.grades.length) {
      return;
    }
    const gradeAveraged = this.grades.reduce((acc, grade) => (acc += grade.mark), 0) / this.grades.length;
    return this.round(gradeAveraged, 2);
  }

  get adjustedGrade() {
    if (!this.grades || !this.grades.length) {
      return;
    }
    const gradeAdjusted = this.grades.reduce((acc, grade) => (acc += grade.adjusted), 0);
    return this.round(gradeAdjusted, 2);
  }
};

export const GradeDisplay = {
  bindings: {
    grades: '<'
  },
  controller,
  template
};
