import UnitTest from "../UnitTest.js";

import Instrument from "../../app/models/instruments/Instrument.js";
import Chord from "../../app/models/Chord.js";

export default class InstrumentTest {
  constructor() {
    this.test = new UnitTest();
  }

  run() {
    // this.transposition_default_test();
    
    this.set_transposition_without_key_test();
    this.set_transposition_with_key_test();
    
    // this.transpose_without_key_test();
    // this.transpose_with_key_test();
  }

  transposition_default_test() {
    // title
    console.log("[TEST] " + "transposition setter (without key) test:");

    // init
    const instrument = new Instrument();

    // method

    // checks
    this.test.check("instrument.transposition", instrument.transposition, 0);

    // print object
    console.log(instrument);
  }

  // set_transposition

  set_transposition_without_key_test() {
     // title
    console.log("[TEST] " + "set_transposition (without_key) test:");
    
    // init
    const instrument = new Instrument();

    // method
    console.log("[method] " + "instrument.transposition = -2");
    instrument.transposition = -2;

    // checks
    this.test.check("instrument.transposition", instrument.transposition, -2);

    // print object
    console.log(instrument);
  }

  set_transposition_with_key_test() {
    // title
    console.log("[TEST] " + "set_transposition (with_key) test:");
    
    // init
    const instrument = new Instrument();
    instrument.key = new Chord("Am");

    // method
    console.log("[method] " + "instrument.transposition = 0");
    instrument.transposition = 0;

    // checks
    this.test.check("instrument.transposition", instrument.transposition, 0);
    this.test.check("instrument.key.value", instrument.key.value, "Am");

    // method
    console.log("[method] " + "instrument.transposition = -2");
    instrument.transposition = -2;

    // checks
    this.test.check("instrument.transposition", instrument.transposition, -2);
    this.test.check("instrument.key.value", instrument.key.value, "Gm");

    // method
    console.log("[method] " + "instrument.transposition = 2");
    instrument.transposition = 2;

    // checks
    this.test.check("instrument.transposition", instrument.transposition, 2);
    this.test.check("instrument.key.value", instrument.key.value, "Bm");

    // print object
    console.log(instrument);
  }

  // transpose

  transpose_without_key_test() {
    console.log("transpose (without key) test:");
    
    const instrument = new Instrument();

    instrument.transpose(0);

    if (instrument.transposition == 0)
      console.log("🟢" + "instrument.transposition");
    else
      console.log("🔴" + "instrument.transposition");
    
    instrument.transpose(1);

    if (instrument.transposition == 1)
      console.log("🟢" + "instrument.transposition");
    else
      console.log("🔴" + "instrument.transposition");

    instrument.transpose(-1);

    if (instrument.transposition == 0)
      console.log("🟢" + "instrument.transposition");
    else
      console.log("🔴" + "instrument.transposition");

    instrument.transpose(-1);

    if (instrument.transposition == -1)
      console.log("🟢" + "instrument.transposition");
    else
      console.log("🔴" + "instrument.transposition");

    instrument.transpose(1);

    if (instrument.transposition == 0)
      console.log("🟢" + "instrument.transposition");
    else
      console.log("🔴" + "instrument.transposition");

    // console.log(instrument);
  }

  transpose_with_key_test() {
    console.log("transpose (with key) test:");
    
    const instrument = new Instrument();

    instrument.transpose(2);
    instrument.key = new Chord("Am");

    if (instrument.key == "Bm")
      console.log("🟢" + "instrument.key");
    else
      console.log("🔴" + "instrument.key");

    if (instrument.transposition == 2)
      console.log("🟢" + "instrument.transposition");
    else
      console.log("🔴" + "instrument.transposition");

    // console.log(instrument);
  }
}
