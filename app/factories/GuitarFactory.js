import Guitar from '../models/instruments/Guitar.js';

import Chord from '../models/Chord.js';

export default class GuitarFactory {
  create(obj) {
    const instrument = new Guitar();

    instrument.key = new Chord(obj);
    
    return instrument;
  }
}
