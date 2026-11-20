import FiveStringBassGuitar from '../models/instruments/FiveStringBassGuitar.js';

import Chord from '../models/Chord.js';

export default class FiveStringBassGuitarFactory {
  create(obj) {
    const instrument = new FiveStringBassGuitar();

    instrument.key = new Chord(obj.key || "");
    
    return instrument;
  }
}
