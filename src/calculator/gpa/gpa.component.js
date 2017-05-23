import template from './gpa.component.html';

const controller = class GpaController {
  constructor(roundFilter) {
    this.round = roundFilter;
  }
  $onInit() {
    this.NgModel.$render = () => {
      this.gpa = this.NgModel.$viewValue;
    };

    this.NgModel.$formatters.push(modelValue => {
      const gpaCalculated = (modelValue / 20) - 1;
      return gpaCalculated > 0 ? this.round(gpaCalculated, 2) : 0;
    });

    this.NgModel.$parsers.push(viewValue => {
      const percentCalculated = (viewValue + 1) * 20;
      return percentCalculated > 0 ? this.round(percentCalculated, 2) : 0;
    });
  }

  onChange() {
    this.NgModel.$setViewValue(this.gpa);
  }
};

export const GpaField = {
  bindings: {
    editable: '<'
  },
  require: {
    NgModel: 'ngModel'
  },
  controller,
  template
};
