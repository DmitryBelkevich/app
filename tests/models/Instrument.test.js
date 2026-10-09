import Instrument from "../../app/models/instruments/Instrument.js";
import Chord from "../../app/models/Chord.js";

export default class InstrumentTest {
  constructor() {
    
  }

  run() {
    this.transposition_default_test();
    
    this.set_transposition_without_key_test();
    this.set_transposition_with_key_test();
    
    this.transpose_without_key_test();
    this.transpose_with_key_test();
  }

  transposition_default_test() {
    console.log("transposition setter (without key) test:");

    const instrument = new Instrument();

    if (instrument.transposition == 0)
      console.log("🟢" + "instrument.transposition");
    else
      console.log("🔴" + "instrument.transposition");
  }

  // set_transposition

  set_transposition_without_key_test() {
    console.log("transposition default test:");
    
    const instrument = new Instrument();

    [-2, -1, 0, 1, 2].forEach((value) => {
      instrument.transposition = value;

      if (instrument.transposition == value)
        console.log("🟢" + "instrument.transposition");
      else
        console.log("🔴" + "instrument.transposition");
    });

    // console.log(instrument);
  }

  set_transposition_with_key_test() {
    console.log("transposition setter (with key) test:");

    const instrument = new Instrument();

    instrument.key = new Chord("Am");

    [
      {transposition: 0, key: "Am"},
      {transposition: -2, key: "Gm"},
      {transposition: 2, key: "Bm"},
    ].forEach((obj) => {
      instrument.transposition = obj.transposition;

      if (instrument.key.value == obj.key)
        console.log("🟢" + "instrument.key");
      else
        console.log("🔴" + "instrument.key");
    });

    // console.log(instrument);
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
