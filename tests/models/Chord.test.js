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

    // checks
    // this.test.check("chord.chord", chord.chord, 0);

    // print object
    console.log(chord);
  }
}
