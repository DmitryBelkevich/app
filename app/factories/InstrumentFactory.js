import Instrument from '../models/instruments/Instrument.js';

import Chord from '../models/Chord.js';

export default class InstrumentFactory {
  create(obj) {
    const instrument = new Instrument();

    instrument.key = new Chord(obj.key || "");
    
    return instrument;
  }
}
