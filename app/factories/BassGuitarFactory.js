import BassGuitar from '../models/instruments/BassGuitar.js';

import Chord from '../models/Chord.js';
import Note from '../models/Note.js';

export default class BassGuitarFactory {
  create(obj) {
    const instrument = new BassGuitar();

    instrument.key = new Chord(obj.key || "");

    if (obj.tuning)
      for (const [index, note] of obj.tuning.entries())
        instrument.tuning[index] = new Note(note);

    if (obj.capo)
      instrument.capo = obj.capo;
    
    return instrument;
  }
}
