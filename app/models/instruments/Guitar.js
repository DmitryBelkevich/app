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
    this.capo = capo;
  }

  set transposition(transposition) {
    super.transposition = transposition;

    this.tuning.forEach((note) => {
      note.transpose(transposition);
    });
  }
}
