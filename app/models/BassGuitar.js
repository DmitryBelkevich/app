import Guitar from "./Guitar.js";

export default class BassGuitar extends Guitar {
  constructor() {
    super();
    this._title = "Bass Guitar";
    
    this.#tuning = ["E", "A", "D", "G"];
  }
}
