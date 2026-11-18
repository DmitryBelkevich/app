import FiveStringBassGuitar from '../models/instruments/FiveStringBassGuitar.js';

export default class FiveStringBassGuitarFactory {
  create(obj) {
    return new FiveStringBassGuitar();
  }
}
