import Keyboards from '../models/instruments/Keyboards.js';

import Chord from '../models/Chord.js';

export default class KeyboardsFactory {
  create(obj) {
    const instrument = new Keyboards();

    if (obj.transposition)
      instrument.transposition = obj.transposition;

    instrument.key = new Chord(obj.key || "");
    
    return instrument;
  }
}
