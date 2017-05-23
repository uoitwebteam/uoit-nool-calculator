export class Grade {
  constructor(mark, value) {
    this.mark = mark;
    this.value = value;
  }
  get adjusted() {
    return (this.mark * this.value) / 100;
  }
}
