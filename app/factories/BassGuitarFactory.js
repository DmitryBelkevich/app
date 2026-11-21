import BassGuitar from '../models/instruments/BassGuitar.js';

import Chord from '../models/Chord.js';
import Note from '../models/Note.js';
import Tuning from '../models/Tuning.js';

export default class BassGuitarFactory {
  create(obj) {
    const instrument = new BassGuitar();

    if (obj.transposition)
      instrument.transposition = obj.transposition;

    instrument.key = new Chord(obj.key || "");

    // if (obj.tuning)
    //   for (const [index, note] of obj.tuning.entries())
    //     instrument.tuning[index] = new Note(note);

    if (obj.tuning) {
      const notes = [];
      for (const note of obj.tuning)
        notes.push(new Note(note));

      instrument.tuning = new Tuning(...notes);
    }

    if (obj.capo)
      instrument.capo = obj.capo;
    
    return instrument;
  }
}
