export default class Instrument {
  _title;

  constructor() {
    this._title = "Instrument";
  }

  set title(title) {
    this._title = title;
  }

  get title() {
    return this._title;
  }
}
