import Instrument from "../../app/models/instruments/Instrument.js";

export default class InstrumentTest {
  test() {
    const instrument = new Instrument();

    console.log(instrument);
  }
}
