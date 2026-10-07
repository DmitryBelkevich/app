import Instrument from "../../app/models/instruments/Instrument.js";
import Chord from "../../app/models/Chord.js";

export default class InstrumentTest {
  constructor() {
    this.instrument = new Instrument();
  }

  run() {
    this.test1();
  }

  test1() {
    console.log(this.instrument);
  }

  // transposition
  test2() {
    this.instrument.key = new Chord("Am");
    this.instrument.key.transpose(2);

    console.log(this.instrument);

    if (this.instrument.key == "Bm")
      console.log("instrument.key " + "+");
    else
      console.log("instrument.key " + "-");

    if (this.instrument.transposition == 2)
      console.log("instrument.transposition " + "+");
    else
      console.log("instrument.transposition " + "-");
  }
}
