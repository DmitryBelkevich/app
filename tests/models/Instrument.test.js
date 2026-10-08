import Instrument from "../../app/models/instruments/Instrument.js";
import Chord from "../../app/models/Chord.js";

export default class InstrumentTest {
  constructor() {
    
  }

  run() {
    // this.transposition_setter_without_key_test();
    this.transposition_setter_with_key_test();
    
    // this.transpose_without_key_test();
    // this.transpose_with_key_test();
  }

  transposition_setter_without_key_test() {
    console.log("transposition setter (without key) test:");
    
    const instrument = new Instrument();

    instrument.transposition = -2;

    if (instrument.transposition == -2)
      console.log("🟢" + "instrument.transposition");
    else
      console.log("🔴" + "instrument.transposition");

    instrument.transposition = -4;

    if (instrument.transposition == -4)
      console.log("🟢" + "instrument.transposition");
    else
      console.log("🔴" + "instrument.transposition");

    instrument.transposition = 2;

    if (instrument.transposition == 2)
      console.log("🟢" + "instrument.transposition");
    else
      console.log("🔴" + "instrument.transposition");

    instrument.transposition = 4;

    if (instrument.transposition == 4)
      console.log("🟢" + "instrument.transposition");
    else
      console.log("🔴" + "instrument.transposition");

    // console.log(instrument);
  }

  transposition_setter_with_key_test() {
    console.log("transposition setter (with key) test:");

    const instrument = new Instrument();

    instrument.transposition = 2;
    instrument.key = new Chord("Am");

    if (instrument.key == "Bm")
      console.log("🟢" + "instrument.key");
    else
      console.log("🔴" + "instrument.key");

    console.log(instrument);
  }

  transpose_without_key_test() {
    console.log("transpose (without key) test:");
    
    const instrument = new Instrument();
    
    instrument.transpose(1);

    if (instrument.transposition == 1)
      console.log("🟢" + "instrument.transposition");
    else
      console.log("🔴" + "instrument.transposition");

    instrument.transpose(1);

    if (instrument.transposition == 2)
      console.log("🟢" + "instrument.transposition");
    else
      console.log("🔴" + "instrument.transposition");

    instrument.transpose(-1);

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

    instrument.transpose(-1);

    if (instrument.transposition == -2)
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
