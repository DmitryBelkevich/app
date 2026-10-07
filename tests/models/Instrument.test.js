import Instrument from "../../app/models/instruments/Instrument.js";
import Chord from "../../app/models/Chord.js";

export default class InstrumentTest {
  constructor() {
    
  }

  run() {
    // this.test_transposition_1();
    this.test_transposition_2();
  }

  // transposition
  test_transposition_1() {
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

  // transpose
  test_transposition_2() {
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

    console.log(instrument);
  }

  // transposition
  test10() {
    const instrument = new Instrument();
    
    instrument.key = new Chord("Am");
    instrument.key.transpose(2);

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
