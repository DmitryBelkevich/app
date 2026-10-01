import Instrument from '../models/Instrument.js';
import Keyboards from '../models/Keyboards.js';
import Guitar from '../models/Guitar.js';
import BassGuitar from '../models/BassGuitar.js';
import FiveStringBassGuitar from '../models/FiveStringBassGuitar.js';

export default class InstrumentFacory {
  createInstrument(title) {
    switch (title) {
      case "Instrument":
        return new Instrument();
      case "Keyboards":
        return new Keyboards();
      case "Guitar" || "E.Guitar":
        return new Guitar();
      case "Bass Guitar":
        return new BassGuitar();
      case "5-string Bass Guitar":
        return new FiveStringBassGuitar();
      default:
        return new Instrument();
    }
  }
}
