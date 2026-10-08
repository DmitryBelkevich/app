import Instrument from "../../app/models/instruments/Instrument.js";
import Chord from "../../app/models/Chord.js";

export default class InstrumentTest {
  constructor() {
    
  }

  run() {
    this.transposition_test_1();
    this.transposition_test_2();

    this.transposition_key_test_1();
  }

  transposition_test_1() {
    console.log("transposition test 1:");
    
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

  transposition_test_2() {
    console.log("transposition test 2:");
    
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

  // transposition, key
  transposition_key_test_1() {
    console.log("transposition key test 2:");
    
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

    console.log(instrument);
  }
}
