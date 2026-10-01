import Instrument from '../../models/instruments/Instrument.js';
import Keyboards from '../../models/instruments/Keyboards.js';
import Guitar from '../../models/instruments/Guitar.js';
import BassGuitar from '../../models/instruments/BassGuitar.js';
import FiveStringBassGuitar from '../../models/instruments/FiveStringBassGuitar.js';

export default class InstrumentFactory {
  createInstrument(title) {
    switch (title) {
      case "Instrument":
        return new Instrument();
      case "Keyboards":
        return new Keyboards();
      case "Guitar":
      case "E.Guitar":
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
