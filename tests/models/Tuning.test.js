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
    this.test.check("tuning.transposition", tuning.transposition, 0);

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
    this.test.check("tuning.transposition", tuning.transposition, 0);

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
    this.test.check("tuning.transposition", tuning.transposition, -1);

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
    this.test.check("tuning.transposition", tuning.transposition, -2);

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

    // method
    console.log("[method] " + "tuning.transposition = -2");
    tuning.transposition = -2;

    // checks
    this.test.check("tuning.transposition", tuning.transposition, -2);

    // method
    console.log("[method] " + "tuning.transposition = -1");
    tuning.transposition = -1;

    // checks
    this.test.check("tuning.transposition", tuning.transposition, -1);
    
    // method
    console.log("[method] " + "tuning.transposition = 0");
    tuning.transposition = 0;

    // checks
    this.test.check("tuning.transposition", tuning.transposition, 0);/

    // method
    console.log("[method] " + "tuning.transposition = 1");
    tuning.transposition = 1;

    // checks
    this.test.check("tuning.transposition", tuning.transposition, 1);

    // method
    console.log("[method] " + "tuning.transposition = 2");
    tuning.transposition = 2;

    // checks
    this.test.check("tuning.transposition", tuning.transposition, 2);

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
    this.test.check("tuning.isStandard()", tuning.isStandard(), true);

    // print object
    console.log(tuning);
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
    this.test.check("tuning.isStandard()", tuning.isStandard(), true);

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
    this.test.check("tuning.isStandard()", tuning.isStandard(), false);

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
    this.test.check("tuning.isStandard()", tuning.isStandard(), false);

    // print object
    console.log(tuning);
  }
}
