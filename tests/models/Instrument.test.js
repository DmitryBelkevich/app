import Instrument from "../../app/models/instruments/Instrument.js";
import Chord from "../../app/models/Chord.js";

export default class InstrumentTest {
  constructor() {
    
  }

  run() {
    // this.test1();
    this.test2();
  }

  // transposition
  test1() {
    const instrument = new Instrument();
    
    instrument.transposition = -2;

    if (instrument.transposition == -2)
      console.log("🟢" + "instrument.transposition");
    else
      console.log("🔴" + "instrument.transposition");

    console.log(instrument);
  }

  // transpose
  test2() {
    const instrument = new Instrument();
    
    instrument.transpose(-2);

    if (instrument.transposition == -2)
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
