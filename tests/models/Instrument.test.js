import Instrument from "../../app/models/instruments/Instrument.js";
import Chord from "../../app/models/Chord.js";

export default class InstrumentTest {
  constructor() {
    
  }

  run() {
    this.test1();
  }

  test1() {
    this.instrument = new Instrument();
    
    this.instrument.key.transpose(-2);

    if (this.instrument.transposition == 2)
      console.log("🟢" + "instrument.transposition");
    else
      console.log("🔴" + "instrument.transposition");

    console.log(this.instrument);
  }

  // transposition
  test2() {
    this.instrument = new Instrument();
    
    this.instrument.key = new Chord("Am");
    this.instrument.key.transpose(2);

    if (this.instrument.key == "Bm")
      console.log("🟢" + "instrument.key");
    else
      console.log("🔴" + "instrument.key");

    if (this.instrument.transposition == 2)
      console.log("🟢" + "instrument.transposition");
    else
      console.log("🔴" + "instrument.transposition");

    console.log(this.instrument);
  }
}
