import Instrument from "./Instrument.js";

export default class Keyboards extends Instrument {
  transposition;
  
  constructor() {
    super();
    this.title = "Keyboards";
    this.transposition = 0;
  }

  set transposition(transposition) {
    this.transposition = transposition;
  }

  get transposition() {
    return this.transposition;
  }
}
