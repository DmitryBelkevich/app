import Instrument from '../models/instruments/Instrument.js';

export default class InstrumentFactory {
  create(obj) {
    return new Instrument();
  }
}
