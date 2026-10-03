export default class Instrument {
  title;
  color;
  transposition;
  key;
  chords;

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
    this.transpose(transposition - this.transposition);
  }

  get key() {
    return this.key;
  }

  set key(key) {
    this.key = key;
  }

  get chords() {
    return this.chords;
  }

  set chords(chords) {
    this.chords = chords;
  }

  transpose(count) {
    this.transposition += count;
    this.key.transpose(count);
  }

  isTransposed() {
    return this.transposition != 0;
  }
}
