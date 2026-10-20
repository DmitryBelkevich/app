import BassGuitar from "./BassGuitar.js";
import Tuning from "../Tuning.js";
import Note from "../Note.js";

export default class FiveStringBassGuitar extends BassGuitar {
  constructor() {
    super();
    this.title = "5-string Bass Guitar";
    this.tuning = new Tuning(
      new Note("B"),
      new Note("E"),
      new Note("A"),
      new Note("D"),
      new Note("G")
    );
  }
}
