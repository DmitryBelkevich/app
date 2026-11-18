export default class Factories {
  getFactory(title) {
    switch (title) {
      case "Instrument":
        return new InstrumentFactory();
        break;
    }
    
    return new InstrumentFactory();
  }
}
