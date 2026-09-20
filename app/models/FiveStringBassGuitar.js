import BassGuitar from "./BassGuitar.js";

export default class FiveStringBassGuitar extends BassGuitar {
  constructor() {
    super();
    this.title = "5-string Bass Guitar";
    this.tuning = ["B", "E", "A", "D", "G"];
  }
}
