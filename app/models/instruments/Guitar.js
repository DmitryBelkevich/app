import Instrument from "./Instrument.js";
import Tuning from "./Tuning.js";
import Note from "./Note.js";

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
      super.transposition = capo;
    }
    
    this.capo = capo;
  }

  set transposition(transposition) {
    if (transposition > 0) {
      transposition = 0;
      this.capo = transposition;
    }
    
    super.transposition = transposition;
  }

  transpose(count) {
    if (count > 0) {
      for (let i = 0; i < count; i++) {
        if (this.transposition < 0) {
          this.transposition++;
        } else if (this.transposition == 0) {
          this.capo++;
        }
      }
    }
    else if (count < 0) {
      for (let i = count; i < 0; i++) {
        if (this.capo > 0) {
          this.capo--;
        } else if (this.capo == 0) {
          this.transposition--;
        }
      }
    }
  }
}
