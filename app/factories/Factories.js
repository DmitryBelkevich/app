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
        break;
      case "Keyboards":
        return new KeyboardsFactory();
        break;
      case "":
        return new GuitarFactory();
        break;
      case "":
        return new BassGuitarFactory();
        break;
      case "":
        return new FiveStringBassGuitarFactory();
        break;
      default:
        return new InstrumentFactory();
    }
    
    return null;
  }
}
