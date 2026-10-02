export default class Instrument {
  title;
  color;
  key;
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

  get color() {
    return this.color;
  }

  set color(color) {
    this.color = color;
  }

  get key() {
    return this.key;
  }

  set key(key) {
    this.key = key;
  }

  get transposition() {
    return this.transposition;
  }

  set transposition(transposition) {
    this.transposition = transposition;
  }

  transpose(count) {
    this.transposition += count;
  }
}
