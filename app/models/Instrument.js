export default class Instrument {
  _title;

  constructor() {
    suoer();
    this._title = "Instrument";
  }

  set title(title) {
    this._title = title;
  }

  get title() {
    return _title;
  }
}
