import FiveStringBassGuitar from '../models/instruments/FiveStringBassGuitar.js';

import Chord from '../models/Chord.js';
import Note from '../models/Note.js';

export default class FiveStringBassGuitarFactory {
  create(obj) {
    const instrument = new FiveStringBassGuitar();

    instrument.key = new Chord(obj.key || "");

    if (obj.tuning)
      for (const [index, note] of obj.tuning.entries())
        instrument.tuning[index] = new Note(note);

    if (obj.capo)
      guitar.capo = obj.capo;
    
    return instrument;
  }
}
