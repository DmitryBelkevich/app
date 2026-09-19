import Instrument from "./Instrument.js";
import Tuning from "./Tuning.js";

export default class Guitar extends Instrument {
  _tuning;
  _capo;
  
  constructor() {
    super();
    this._title = "Guitar";
    
    this._tuning = new Tuning("E", "A", "D", "G", "B", "E");
    this._capo = 0;
  }

  set tuning(tuning) {
    this._tuning = tuning;
  }

  get tuning() {
    return this._tuning;
  }

  set capo(capo) {
    this._capo = capo;
  }

  get capo() {
    return this._capo;
  }
}
