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
    }
    
    return null;
  }
}
