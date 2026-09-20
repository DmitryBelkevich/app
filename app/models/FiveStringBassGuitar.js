import BassGuitar from "./BassGuitar.js";
import Tuning from "./Tuning.js";

export default class FiveStringBassGuitar extends BassGuitar {
  constructor() {
    super();
    this.title = "5-string Bass Guitar";
    this.tuning = new Tuning("B", "E", "A", "D", "G");
  }
}
