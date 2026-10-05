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
  }

  get capo() {
    return this._capo;
  }

  set capo(capo) {
    if (capo < 0)
      capo = 0;
    
    this._capo = capo;

    this.transposition = this.tuning.transposition + this.capo;
  }

  set transposition(transposition) {
  //   if (transposition > 0) {
  //     transposition = 0;
  //     this.capo = transposition;
  //   }
    
    this.transpose(transposition - this._transposition);
  }

  transpose(count) {
    // var transposition = 0;
    // var tuning = 0;
    // var capo = 0;
    
    // if (count > 0) {// go to -> RIGHT ->
    //   if (this.transposition < 0) {// отрицательное
    //     transposition = count;
    //     tuning = count;
    //   } else if (this.transposition >= 0) {//положительное
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
    
    // this.transposition += transposition;
    // this.tuning.transpose(tuning);
    // this.capo += capo;

    // this.key.transpose(count);
    // this.key.transpose(-this.capo);
  }
}
