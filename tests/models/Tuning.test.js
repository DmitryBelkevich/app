import Tuning from "../../app/models/Tuning.js";
import Note from "../../app/models/Note.js";

export default class TuningTest {
  constructor() {
    
  }
  
  run() {
    // this.get_transposition_test1();
    // this.get_transposition_test2();
    // this.get_transposition_test3();
    // this.get_transposition_test4();

    this.set_transposition_test1();

    // this.isStandard_test1();
    // this.isStandard_test2();
    // this.isStandard_test3();
    // this.isStandard_test4();
  }

  // get_transposition

  get_transposition_test1() {
    console.log("tuning.transposition test:");
    
    const tuning = new Tuning();

    if (tuning.transposition == 0)
      console.log("🟢" + "tuning.transposition");
    else
      console.log("🔴" + "tuning.transposition");

    // console.log(tuning);
  }

  get_transposition_test2() {
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

    // console.log(tuning);
  }

  get_transposition_test3() {
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

    // console.log(tuning);
  }

  get_transposition_test4() {
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

    // console.log(tuning);
  }

  // set_transposition

  set_transposition_test1() {
    console.log("tuning.set_transposition test:");
    
    const tuning = new Tuning(
      new Note("E"),
      new Note("A"),
      new Note("D"),
      new Note("G"),
      new Note("B"),
      new Note("E"),
    );

    tuning.transposition = -2;
    tuning.transposition = -2;

    if (tuning.transposition == -2)
      console.log("🟢" + "tuning.transposition");
    else
      console.log("🔴" + "tuning.transposition");

    if (!tuning.isStandard())
      console.log("🟢" + "tuning.isStandard");
    else
      console.log("🔴" + "tuning.isStandard");

    console.log(tuning);
  }

  // isStandard

  isStandard_test1() {
    console.log("tuning.isStandard test:");
    
    const tuning = new Tuning();

    // if (tuning.isStandard())
    //   console.log("🟢" + "tuning.isStandard");
    // else
    //   console.log("🔴" + "tuning.isStandard");

    // console.log(tuning);
  }

  isStandard_test2() {
    console.log("tuning.isStandard test:");
    
    const tuning = new Tuning(
      new Note("E"),
      new Note("A"),
      new Note("D"),
      new Note("G"),
      new Note("B"),
      new Note("E"),
    );

    if (tuning.isStandard())
      console.log("🟢" + "tuning.isStandard");
    else
      console.log("🔴" + "tuning.isStandard");

    // console.log(tuning);
  }

  isStandard_test3() {
    console.log("tuning.isStandard test:");
    
    const tuning = new Tuning(
      new Note("D#"),
      new Note("G#"),
      new Note("C#"),
      new Note("F#"),
      new Note("A#"),
      new Note("D#"),
    );

    if (!tuning.isStandard())
      console.log("🟢" + "tuning.isStandard");
    else
      console.log("🔴" + "tuning.isStandard");

    // console.log(tuning);
  }

  isStandard_test4() {
    console.log("tuning.isStandard test:");
    
    const tuning = new Tuning(
      new Note("D"),
      new Note("G"),
      new Note("C"),
      new Note("F"),
      new Note("A"),
      new Note("D"),
    );

    if (!tuning.isStandard())
      console.log("🟢" + "tuning.isStandard");
    else
      console.log("🔴" + "tuning.isStandard");

    // console.log(tuning);
  }
}
