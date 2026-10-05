export default class Instrument {
  title;
  color;
  _transposition;
  key;
  chords;

  constructor() {
    this.title = "Instrument";
    this.color = "grey";
    this._transposition = 0;
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
    return this._transposition;
  }

  set transposition(transposition) {console.log("setter Instrument.transposition " + transposition);
    this.transpose(transposition - this._transposition);
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
    this._transposition += count;
    // this.key.transpose(count);

    console.log("transpose: " + count);
  }

  isTransposed() {
    return this._transposition != 0;
  }
}
