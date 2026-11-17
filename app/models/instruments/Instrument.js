import Model from "./Model.js";

export default class Instrument extends Model {
  _title;
  _color;
  _transposition;
  _key;

  constructor() {
    super();
    this._title = "Instrument";
    this._color = "grey";
    this._transposition = 0;
    // this._key;
  }
}
