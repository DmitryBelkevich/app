import Instrument from "./Instrument.js";

export default class Guitar extends Instrument {
  #tuning = [];
  #capo = 0;
  
  constructor() {
    super();
    this._title = "Guitar";
  }

  set capo(capo) {
    this.#capo = capo;
  }

  get capo() {
    return this.#capo;
  }
}
