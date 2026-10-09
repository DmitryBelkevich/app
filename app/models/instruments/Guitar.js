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
    
    // var transposition = 0;
    // var tuning = 0;
    // var capo = 0;
    
    // if (count > 0) {// go to -> RIGHT ->
    //   if (this._transposition < 0) {// отрицательное
    //     transposition = count;
    //     tuning = count;
    //   } else if (this._transposition >= 0) {//положительное
    //     capo = count;
    //   }
    // } else if (count < 0) {// go to <- LEFL <-
    //   if (this.capo <= 0) {// отрицательное
    //     transposition = -count;
    //     tuning = -count;
    //   } else if (this.capo > 0) {// положительное
    //     capo = -count;
    //   }
    // }

    this._transposition += count;
    
    // this._transposition += transposition;
    // this._tuning.transpose(tuning);
    // this.capo += capo;

    if (this._key)
      this._key.transpose(count);
    // this.key.transpose(-this.capo);

    this._tuning.transpose(count);
  }
}
