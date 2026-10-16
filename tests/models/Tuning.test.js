import Tuning from "../../app/models/Tuning.js";
import Note from "../../app/models/Note.js";

export default class TuningTest {
  constructor() {
    
  }
  
  run() {
    console.log("[Tuning tests]");
    
    // this.get_transposition_test0();

    // this.get_transposition_test1();
    // this.get_transposition_test2();
    // this.get_transposition_test3();

    this.set_transposition_test1();

    // this.isStandard_test1();
    // this.isStandard_test2();
    // this.isStandard_test3();
    // this.isStandard_test4();
  }

  // get_transposition (empty tuning)

  get_transposition_test0() {
    // title
    console.log("[TEST] " + "transposition test");

    // init
    const tuning = new Tuning();

    // method

    // checks
    if (tuning.transposition == 0)
      console.log("🟢" + "tuning.transposition");
    else
      console.log("🔴" + "tuning.transposition");

    // print object
    console.log(tuning);
  }

  // get_transposition

  get_transposition_test1() {
    // title
    console.log("[TEST] " + "transposition test");

    // init
    const tuning = new Tuning(
      new Note("E"),
      new Note("A"),
      new Note("D"),
      new Note("G"),
      new Note("B"),
      new Note("E"),
    );

    // method

    // checks
    if (tuning.transposition == 0)
      console.log("🟢" + "tuning.transposition");
    else
      console.log("🔴" + "tuning.transposition");

    // print object
    console.log(tuning);
  }

  get_transposition_test2() {
    // title
    console.log("[TEST] " + "transposition test");

    // init
    const tuning = new Tuning(
      new Note("D#"),
      new Note("G#"),
      new Note("C#"),
      new Note("F#"),
      new Note("A#"),
      new Note("D#"),
    );

    // method

    // checks
    if (tuning.transposition == -1)
      console.log("🟢" + "tuning.transposition");
    else
      console.log("🔴" + "tuning.transposition");

    // print object
    console.log(tuning);
  }

  get_transposition_test3() {
    // title
    console.log("[TEST] " + "transposition test");

    // init
    const tuning = new Tuning(
      new Note("D"),
      new Note("G"),
      new Note("C"),
      new Note("F"),
      new Note("A"),
      new Note("D"),
    );

    // method

    // checks
    if (tuning.transposition == -2)
      console.log("🟢" + "tuning.transposition");
    else
      console.log("🔴" + "tuning.transposition");

    // print object
    console.log(tuning);
  }

  // set_transposition

  set_transposition_test1() {
    // title
    console.log("[TEST] " + "set transposition test");

    // init
    const tuning = new Tuning(
      new Note("E"),
      new Note("A"),
      new Note("D"),
      new Note("G"),
      new Note("B"),
      new Note("E"),
    );

    [-2, -1, 0, 1, 2].forEach((value) => {
      // method
      tuning.transposition = value;

      // checks
      if (tuning.transposition == value)
        console.log("🟢" + "tuning.transposition");
      else
        console.log("🔴" + "tuning.transposition");
    });

    // print object
    console.log(tuning);
  }

  // isStandard

  isStandard_test1() {
    // title
    console.log("[TEST] " + "isStandard test");

    // init
    const tuning = new Tuning();

    // method

    // checks
    // if (tuning.isStandard())
    //   console.log("🟢" + "tuning.isStandard");
    // else
    //   console.log("🔴" + "tuning.isStandard");

    // console.log(tuning);
  }

  isStandard_test2() {
    console.log("tuning.isStandard test:");

    // init
    const tuning = new Tuning(
      new Note("E"),
      new Note("A"),
      new Note("D"),
      new Note("G"),
      new Note("B"),
      new Note("E"),
    );

    // method

    // checks
    if (tuning.isStandard())
      console.log("🟢" + "tuning.isStandard");
    else
      console.log("🔴" + "tuning.isStandard");

    // print object
    console.log(tuning);
  }

  isStandard_test3() {
    // title
    console.log("[TEST] " + "isStandard test");

    // init
    const tuning = new Tuning(
      new Note("D#"),
      new Note("G#"),
      new Note("C#"),
      new Note("F#"),
      new Note("A#"),
      new Note("D#"),
    );

    // method

    // checks
    if (!tuning.isStandard())
      console.log("🟢" + "tuning.isStandard");
    else
      console.log("🔴" + "tuning.isStandard");

    // print object
    console.log(tuning);
  }

  isStandard_test4() {
    // title
    console.log("[TEST] " + "isStandard test");

    // init
    const tuning = new Tuning(
      new Note("D"),
      new Note("G"),
      new Note("C"),
      new Note("F"),
      new Note("A"),
      new Note("D"),
    );

    // method

    // checks
    if (!tuning.isStandard())
      console.log("🟢" + "tuning.isStandard");
    else
      console.log("🔴" + "tuning.isStandard");

    // print object
    console.log(tuning);
  }
}
