import Instrument from "./Instrument.js";
import Tuning from "../Tuning.js";
import Note from "../Note.js";

export default class Guitar extends Instrument {
  tuning;
  capo;
  
  constructor() {
    super();
    this.title = "Guitar";
    this.color = "red";
    this.tuning = new Tuning(
      new Note("E"),
      new Note("A"),
      new Note("D"),
      new Note("G"),
      new Note("B"),
      new Note("E"),
    );
    this.capo = 0;
  }

  get tuning() {
    return this.tuning;
  }

  set tuning(tuning) {
    this.tuning = tuning;
  }

  get capo() {
    return this.capo;
  }

  set capo(capo) {
    if (capo < 0) {
      capo = 0;
    //   super.transposition = capo;
    }
    
    this.capo = capo;

    // this.transpose(count);
    this.transposition = -15;//this.tuning.transposition + this.capo;
  }

  set transposition(transposition) {
  //   if (transposition > 0) {
  //     transposition = 0;
  //     this.capo = transposition;
  //   }

    console.log(transposition);
    super.transposition = transposition;

  //   this.transpose(transposition - this.transposition);
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
    
    // this.transposition += transposition;
    // this.tuning.transpose(tuning);
    // this.capo += capo;

    // this.key.transpose(count);
    // this.key.transpose(-this.capo);
  }
}
