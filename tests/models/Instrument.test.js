import Instrument from "../../app/models/instruments/Instrument.js";
import Chord from "../../app/models/Chord.js";

export default class InstrumentTest {
  constructor() {
    this.instrument = new Instrument();
    
    this.instrument.key = new Chord("Am");

    console.log(this.instrument);
  }

  // transposition
  test() {
    this.instrument.key.transpose(2);

    console.log(this.instrument);

    if (this.instrument.key == "Bm")
      console.log("+");
    else
      console.log("-");

    if (this.instrument.transposition == 2)
      console.log("+");
    else
      console.log("-");
  }
}
