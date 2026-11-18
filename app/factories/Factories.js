import InstrumentFactory from './InstrumentFactory.js';
import KeyboardsFactory from './KeyboardsFactory.js';
import GuitarFactory from './GuitarFactory.js';
import BassGuitarFactory from './BassGuitarFactory.js';
import FiveStringBassGuitarFactory from './FiveStringBassGuitarFactory.js';

export default class Factories {
  getFactory(title) {
    switch (title) {
      case "Instrument":
        return new InstrumentFactory();
      case "Keyboards":
        return new KeyboardsFactory();
      case "Guitar":
      case "E.Guitar":
        return new GuitarFactory();
      case "Bass Guitar":
        return new BassGuitarFactory();
      case "5-string Bass Guitar":
        return new FiveStringBassGuitarFactory();
      default:
        return new InstrumentFactory();
    }
    
    return null;
  }
}
