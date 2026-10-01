import Instrument from '../models/instruments/Instrument.js';
import Keyboards from '../models/instruments/Keyboards.js';
import Guitar from '../models/instruments/Guitar.js';
import BassGuitar from '../models/instruments/BassGuitar.js';
import FiveStringBassGuitar from '../models/instruments/FiveStringBassGuitar.js';

export default class InstrumentFactory {
  createInstrument(instrument_obj) {
    switch (instrument_obj.title) {
      case "Instrument":
        return new Instrument();
      case "Keyboards":
        return new Keyboards();
      case "Guitar":
      case "E.Guitar":
        var guitar = new Guitar();
        
        guitar.tuning.forEach((note, index) => {
          note.value = instrument_obj.tuning[index];
        });

        guitar.transposition = guitar.tuning.droppedTo();
        guitar.capo = instrument_obj.capo;
        
        return guitar;
      case "Bass Guitar":
        guitar = new BassGuitar();

        guitar.tuning.forEach((note, index) => {
          note.value = instrument_obj.tuning[index];
        });

        guitar.transposition = guitar.tuning.droppedTo();
        guitar.capo = instrument_obj.capo;
        
        return guitar;
      case "5-string Bass Guitar":
        guitar = new FiveStringBassGuitar();
        
        guitar.tuning.forEach((note, index) => {
          note.value = instrument_obj.tuning[index];
        });

        guitar.transposition = guitar.tuning.droppedTo();
        guitar.capo = instrument_obj.capo;
        
        return guitar;
      default:
        return new Instrument();
    }
  }
}
