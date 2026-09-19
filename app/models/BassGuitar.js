import Guitar from "./Guitar.js";
import Tuning from "./Tuning.js";

export default class BassGuitar extends Guitar {
  constructor() {
    super();
    this._title = "Bass Guitar";
    
    this._tuning = new Tuning("E", "A", "D", "G");
  }
}
