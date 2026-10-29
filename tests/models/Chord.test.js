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
    const chord = new Chord("C#m/C");

    // method
    chord.transpose(2);

    // checks
    this.test.check("chord.value", chord, "D#m/D");

    // print object
    console.log(chord);
  }
}
