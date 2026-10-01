import Guitar from "./Guitar.js";
import Tuning from "./Tuning.js";
import Note from "./Note.js";

export default class BassGuitar extends Guitar {
  constructor() {
    super();
    this.title = "Bass Guitar";
    this.color = "yellow";
    this.tuning = new Tuning(
      new Note("E"),
      new Note("A"),
      new Note("D"),
      new Note("G")
    );
  }
}
