import Instrument from "./Instrument.js";
import Tuning from "./Tuning.js";

export default class Guitar extends Instrument {
  tuning;
  capo;
  
  constructor() {
    super();
    this.title = "Guitar";
    this.tuning = new Tuning("E", "A", "D", "G", "B", "E");
    this.capo = 0;
  }

  get tuning() {
    return this.tuning;
  }

  set tuning(tuning) {
    this.tuning = tuning;
  }

  get capo() {
    return this.#capo;
  }

  set capo(capo) {
    this.capo = capo;
  }
}
