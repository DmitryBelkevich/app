import Guitar from "./Guitar.js";
import Tuning from "./Tuning.js";

export default class BassGuitar extends Guitar {
  constructor() {
    super();
    this.title = "Bass Guitar";
    
    this.tuning = new Tuning("E", "A", "D", "G");
  }
}
