export default class Instrument {
  title;

  constructor() {
    this.title = "Instrument";
  }

  get title() {
    return this.title;
  }

  set title(title) {
    this.title = title;
  }
}
