import Instrument from '../models/instruments/Instrument.js';

class InstrumentFactory {
  create(obj) {
    return new Instrument();
  }
}
