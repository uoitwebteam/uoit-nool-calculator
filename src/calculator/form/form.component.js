import { Grade } from './form-grade.model.js';

import template from './form.component.html';

const controller = class FormController {
  constructor() {
    this.grades = [];
    this.goal = false;
  }

  add(mark = 0, value = 0) {
    const grade = new Grade(mark, value);
    this.grades.push(grade);
    this.updateGrades();
  }

  remove(index) {
    this.grades.splice(index, 1);
    this.updateGrades();
  }

  updateGrades() {
    this.onGradeChange({
      $event: {
        grades: this.grades
      }
    });
  }

  toggleGoal() {
    this.goal = !this.goal;
  }

  get valueRemaining() {
    if (!this.grades.length) {
      return 100;
    }
    const valueTotal = this.grades.reduce((acc, grade) => (acc += grade.value), 0);
    const remainder = 100 - valueTotal;
    return remainder > 0 ? remainder : 0;
  }
};

export const GradeForm = {
  bindings: {
    onGradeChange: '&'
  },
  controller,
  template
};
