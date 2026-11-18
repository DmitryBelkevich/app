import InstrumentFactory from './InstrumentFactory.js';

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
