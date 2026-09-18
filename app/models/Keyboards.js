import Instrument from "./Instrument.js";

export default class Keyboards extends Instrument {
  #transposition;
  
  constructor() {
    super();
    this._title = "Keyboards";

    this.#transposition = 0;
  }
}
