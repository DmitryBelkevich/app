export default class Instrument {
  title;
  color;
  transposition;

  constructor() {
    this.title = "Instrument";
    this.color = "grey";
    this.transposition = 0;
  }

  get title() {
    return this.title;
  }

  set title(title) {
    this.title = title;
  }

  get transposition() {
    return this.transposition;
  }

  set transposition(transposition) {
    this.transposition = transposition;
  }
}
