import BassGuitar from '../models/instruments/BassGuitar.js';

import Chord from '../models/Chord.js';

export default class BassGuitarFactory {
  create(obj) {
    const instrument = new BassGuitar();

    // instrument.key = new Chord(obj.key);
    
    return instrument;
  }
}
