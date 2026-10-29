import UnitTest from "../UnitTest.js";

import Chord from "../../app/models/Chord.js";

export default class ChordTest {
  constructor() {
    this.test = new UnitTest();
  }

  run() {
    console.log("[Chord tests]");
    
    this.chord_test();
  }

  chord_test() {
    // title
    console.log("[TEST] " + "chord test:");

    // init
    const chord = new Chord("Am");

    // method
    chord.transpose(2);

    // checks
    this.test.check("chord.value", chord, "Bm");

    // print object
    console.log(chord);
  }
}
