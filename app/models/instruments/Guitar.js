import Instrument from "./Instrument.js";
import Tuning from "../Tuning.js";
import Note from "../Note.js";

export default class Guitar extends Instrument {
  _tuning;
  _capo;
  
  constructor() {
    super();
    this.title = "Guitar";
    this.color = "red";
    this._tuning = new Tuning(
      new Note("E"),
      new Note("A"),
      new Note("D"),
      new Note("G"),
      new Note("B"),
      new Note("E"),
    );
    this._capo = 0;
  }

  get tuning() {
    return this._tuning;
  }

  set tuning(tuning) {
    this._tuning = tuning;

    this._transposition = this._tuning.transposition + this._capo;

    if (this._key)
      this._key.transpose(this._transposition);
  }

  get capo() {
    return this._capo;
  }

  set capo(capo) {
    if (capo < 0)
      capo = 0;
    
    this._capo = capo;

    this._transposition = this._tuning.transposition + this._capo;

    if (this._key)
      this._key.transpose(this._transposition);
  }

  transpose(count) {
    if (!count)
      return;

    this._transposition += count;

    if (this._key)
      this._key.transpose(count);

    var tun = 0;
    var capo = 0;

    if (count > 0) {
      tun = -this._tuning.transposition;//3 = -(-3)
      capo = count - tun;// 2 = 5 - 3
    }

    if (count < 0) {
      capo = this._capo;//2
      tun = count + capo;//-3 = -5 + 2
    }

    this._tuning.transpose(tun);
    this._capo += capo;
  }
}
