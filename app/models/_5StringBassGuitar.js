import BassGuitar from "./BassGuitar.js";

export default class _5StringBassGuitar extends BassGuitar {
  constructor() {
    super();
    this._title = "5-string Bass Guitar";
    
    this.#tuning = ["B", "E", "A", "D", "G"];
  }
}
