import Instrument from '../models/instruments/Instrument.js';
import Keyboards from '../models/instruments/Keyboards.js';
import Guitar from '../models/instruments/Guitar.js';
import BassGuitar from '../models/instruments/BassGuitar.js';
import FiveStringBassGuitar from '../models/instruments/FiveStringBassGuitar.js';

export default class InstrumentFactory {
  createInstrument(title, arr) {
    switch (title) {
      case "Instrument":
        return new Instrument();
      case "Keyboards":
        return new Keyboards();
      case "Guitar":
      case "E.Guitar":
        const guitar = new Guitar();
        
        guitar.tuning.forEach((note, index) => {
          tuning[index].value = arr[index];
        });
        
        return guitar;
      case "Bass Guitar":
        const guitar = new BassGuitar();
        return guitar;
      case "5-string Bass Guitar":
        const guitar = new FiveStringBassGuitar();
        return guitar;
      default:
        return new Instrument();
    }
  }
}
