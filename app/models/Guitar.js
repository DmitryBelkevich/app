import Instrument from "./Instrument.js";

export default class Guitar extends Instrument {
  #capo = 0;
  
  constructor() {
    super();
    this._title = "Guitar";
  }
}
