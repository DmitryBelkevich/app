import Instrument from "./Instrument.js";

export default class Guitar extends Instrument {
  #tuning;
  #capo;
  
  constructor() {
    super();
    this._title = "Guitar";
    
    this.#tuning = ["E", "A", "D", "G", "B", "E"];
    this.#capo = 0;
  }

  set tuning(tuning) {
    this.#tuning = tuning;
  }

  get tuning() {
    return this.#tuning;
  }

  set capo(capo) {
    this.#capo = capo;
  }

  get capo() {
    return this.#capo;
  }
}
