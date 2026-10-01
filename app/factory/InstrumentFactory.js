import Instrument from '../models/instruments/Instrument.js';
import Keyboards from '../models/instruments/Keyboards.js';
import Guitar from '../models/instruments/Guitar.js';
import BassGuitar from '../models/instruments/BassGuitar.js';
import FiveStringBassGuitar from '../models/instruments/FiveStringBassGuitar.js';

export default class InstrumentFactory {
  createInstrument(title, tuning) {
    switch (title) {
      case "Instrument":
        return new Instrument();
      case "Keyboards":
        return new Keyboards();
      case "Guitar":
      case "E.Guitar":
        var guitar = new Guitar();
        
        guitar.tuning.forEach((note, index) => {
          note.value = tuning[index];
        });
        
        return guitar;
      case "Bass Guitar":
        guitar = new BassGuitar();

        guitar.tuning.forEach((note, index) => {
          note.value = tuning[index];
        });
        
        return guitar;
      case "5-string Bass Guitar":
        guitar = new FiveStringBassGuitar();
        
        guitar.tuning.forEach((note, index) => {
          note.value = tuning[index];
        });
        
        return guitar;
      default:
        return new Instrument();
    }
  }
}
