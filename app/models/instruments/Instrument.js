export default class Instrument {
  _title;
  _color;
  _transposition;
  _key;
  _chords;

  constructor() {
    this._title = "Instrument";
    this._color = "grey";
    this._transposition = 0;
    // this._key;
  }

  get title() {
    return this._title;
  }

  set title(title) {
    this._title = title;
  }

  get color() {
    return this._color;
  }

  set color(color) {
    this._color = color;
  }

  get transposition() {
    return this._transposition;
  }

  set transposition(transposition) {
    this.transpose(transposition - this._transposition);
  }

  get key() {
    return this._key;
  }

  set key(key) {
    this._key = key;
    this._key.transpose(this._transposition);
  }

  get chords() {
    return this._chords;
  }

  set chords(chords) {
    this._chords = chords;
  }

  transpose(count) {
    if (!count)
      return;
    
    this._transposition += count;

    if (this._key)
      this._key.transpose(count);
  }

  isTransposed() {
    return this._transposition != 0;
  }
}
