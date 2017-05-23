import template from './calculator.component.html';

const controller = class CalculatorController {
  gradeChange({ grades }) {
    this.grades = grades;
  }
};

export const GradeCalculator = {
  controller,
  template
};
