import Instrument from '../models/instruments/Instrument.js';
import Keyboards from '../models/instruments/Keyboards.js';
import Guitar from '../models/instruments/Guitar.js';
import BassGuitar from '../models/instruments/BassGuitar.js';
import FiveStringBassGuitar from '../models/instruments/FiveStringBassGuitar.js';

import Tuning from '../models/Tuning.js';
import Note from '../models/Note.js';

export default class InstrumentFactory {
  createInstrument(obj) {
    var instrument;
    
    switch (obj.title) {
      case "Instrument":
        instrument = new Instrument();
        break;
      case "Keyboards":
        instrument = new Keyboards();
        break;
      case "Guitar":
      case "E.Guitar":
      case "Bass Guitar":
      case "5-string Bass Guitar":
        return this.createGuitar(obj);
      default:
        instrument = new Instrument();
    }

    instrument.transposition = obj.transposition || instrument.transposition;

    return instrument;
  }

  createGuitar(obj) {
    var guitar;

    switch (obj.title) {
      case "Guitar":
      case "E.Guitar":
        guitar = new Guitar();
        break;
      case "Bass Guitar":
        guitar = new BassGuitar();
        break;
      case "5-string Bass Guitar":
        guitar = new FiveStringBassGuitar();
        break;
    }

    if (obj.tuning) {
      const notes = [];
      
      obj.tuning.forEach((note) => {
        notes.push(new Note(note));
      });

      const tuning = new Tuning(...notes);

      guitar.tuning = tuning;
    }
    
    // guitar.transposition = guitar.tuning.droppedTo();

    // if (obj.capo)
    //   guitar.capo = obj.capo;

    return guitar;
  }
}
