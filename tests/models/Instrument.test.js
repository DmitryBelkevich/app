import Instrument from "../../app/models/instruments/Instrument.js";
import Chord from "../../app/models/Chord.js";

export default class InstrumentTest {
  test() {
    const instrument = new Instrument();

    instrument.key = new Chord("Am");

    console.log(instrument);
  }
}
