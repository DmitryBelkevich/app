import Tuning from "../../app/models/Tuning.js";
import Note from "../../app/models/Note.js";

export default class TuningTest {
  constructor() {
    
  }
  
  run() {
    this.tuning_transposition_test();
    this.tuning_transposition2_test();
    this.tuning_transposition3_test();
    this.tuning_transposition4_test();
  }

  tuning_transposition_test() {
    console.log("tuning.transposition test:");
    
    const tuning = new Tuning();

    if (tuning.transposition == 0)
      console.log("🟢" + "tuning.transposition");
    else
      console.log("🔴" + "tuning.transposition");

    // console.log(tuning);
  }

  tuning_transposition2_test() {
    console.log("tuning.transposition test:");
    
    const tuning = new Tuning(
      new Note("E"),
      new Note("A"),
      new Note("D"),
      new Note("G"),
      new Note("B"),
      new Note("E"),
    );

    if (tuning.transposition == 0)
      console.log("🟢" + "tuning.transposition");
    else
      console.log("🔴" + "tuning.transposition");

    if (tuning.isStandard())
      console.log("🟢" + "tuning.isStandard");
    else
      console.log("🔴" + "tuning.isStandard");

    // console.log(tuning);
  }

  tuning_transposition3_test() {
    console.log("tuning.transposition test:");
    
    const tuning = new Tuning(
      new Note("D#"),
      new Note("G#"),
      new Note("C#"),
      new Note("F#"),
      new Note("A#"),
      new Note("D#"),
    );

    if (tuning.transposition == -1)
      console.log("🟢" + "tuning.transposition");
    else
      console.log("🔴" + "tuning.transposition");

    if (!tuning.isStandard())
      console.log("🟢" + "tuning.isStandard");
    else
      console.log("🔴" + "tuning.isStandard");

    // console.log(tuning);
  }

  tuning_transposition4_test() {
    console.log("tuning.transposition test:");
    
    const tuning = new Tuning(
      new Note("D"),
      new Note("G"),
      new Note("C"),
      new Note("F"),
      new Note("A"),
      new Note("D"),
    );

    if (tuning.transposition == -2)
      console.log("🟢" + "tuning.transposition");
    else
      console.log("🔴" + "tuning.transposition");

    if (!tuning.isStandard())
      console.log("🟢" + "tuning.isStandard");
    else
      console.log("🔴" + "tuning.isStandard");

    // console.log(tuning);
  }
}
