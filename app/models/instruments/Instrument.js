export default class Instrument {
  title;
  color;
  transposition;
  key;

  constructor() {
    this.title = "Instrument";
    this.color = "grey";
    this.transposition = 0;
    this.key;
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

  get transposition() {
    return this.transposition;
  }

  set transposition(transposition) {
    this.transpose(transposition - this.#transposition);
  }

  get key() {
    return this.key;
  }

  set key(key) {
    this.key = key;
  }

  transpose(count) {
    this.transposition += count;
    this.key.transpose(count);
  }

  isTransposed() {
    return this.transposition != 0;
  }
}
